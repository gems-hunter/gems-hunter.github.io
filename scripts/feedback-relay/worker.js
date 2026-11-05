// Cloudflare Worker cho che do ?feedback cua site:
//   POST /         -> chuyen gop y sang Telegram; kem dung ma bi mat thi ghi them vao GitHub issue
//                     (issue mo moi nhat co nhan `feedback`, chua co thi tao) -> Claude sua code va mo PR
//   POST /upload   -> nhan anh + thong tin san pham moi, tao nhanh inbox/... va mo Pull Request tren GitHub
//                     (Claude tren GitHub Actions se xu ly PR, xem .github/workflows/claude-inbox.yml va CLAUDE.md)
// Token va mat khau deu nam o day (secret), khong nam trong code tren site.
//
// Deploy (can tai khoan Cloudflare, mien phi):
//   cd scripts/feedback-relay
//   npx wrangler login
//   npx wrangler secret put TELEGRAM_BOT_TOKEN   # token tu @BotFather
//   npx wrangler secret put TELEGRAM_CHAT_ID     # chat id cua ban (nhan /start cho bot roi xem getUpdates)
//   npx wrangler secret put GITHUB_TOKEN         # fine-grained token, chi repo gemsland.github.io: Contents + Pull requests + Issues (Read and write)
//   npx wrangler secret put UPLOAD_CODE          # ma bi mat dua cho nguoi tai anh len
//   npx wrangler deploy
// Sau do dan URL worker vao CONFIG.telegramRelay trong assets/js/feedback.js.

const MAX_BODY = 100_000; // ky tu, cho gop y
const MAX_UPLOAD = 8_000_000; // ky tu JSON (anh base64 da nen o trinh duyet, ~ <= 5 MB anh)
const TG_LIMIT = 4000; // Telegram gioi han 4096 ky tu / tin nhan
const TYPES = ["Vòng cổ", "Vòng tay", "Nhẫn", "Bông tai", "Mặt dây", "Đá thô", "Trang sức"];
const STATUS = ["available", "sold"];

export default {
  async fetch(req, env) {
    const allowed = (env.ALLOWED_ORIGINS || "https://gemsland.github.io").split(",").map((s) => s.trim());
    const origin = req.headers.get("Origin") || "";
    const cors = {
      "Access-Control-Allow-Origin": allowed.includes(origin) ? origin : allowed[0],
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
      Vary: "Origin",
    };
    const reply = (status, body) => new Response(body ?? null, { status, headers: cors });
    const json = (status, obj) => new Response(JSON.stringify(obj), { status, headers: { ...cors, "Content-Type": "application/json" } });

    if (req.method === "OPTIONS") return reply(204);
    if (req.method !== "POST") return reply(405, "Method not allowed");
    if (!allowed.includes(origin)) return reply(403, "Forbidden");

    const path = new URL(req.url).pathname.replace(/\/+$/, "");
    if (path === "/upload") return upload(req, env, json);
    if (path !== "") return reply(404, "Not found");

    // ---- gop y -> Telegram
    if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) return reply(500, "Relay not configured");
    const raw = await req.text();
    if (raw.length > MAX_BODY) return reply(413, "Too large");
    let body;
    try { body = JSON.parse(raw); } catch { return reply(400, "Bad JSON"); }
    const title = String(body.title || "Feedback").slice(0, 200);
    const text = String(body.text || "").trim();
    if (!text) return reply(400, "Empty");
    // GitHub issue truoc (de gui kem link vao Telegram); loi o day khong lam hong viec gui Telegram
    // Chi ghi vao GitHub khi kem dung ma bi mat: issue `feedback` kich hoat Claude sua code (claude-feedback.yml),
    // nen khong de ai biet link ?feedback cung gui lenh vao duoc.
    let issue = null, issueSkipped = null;
    if (!env.GITHUB_TOKEN) issueSkipped = "no_token";
    else if (!env.UPLOAD_CODE || !sameText(String(body.code || ""), env.UPLOAD_CODE)) issueSkipped = "no_code";
    else {
      try { issue = await feedbackIssue(env, title, text); } catch (e) { console.error("issue", e); issueSkipped = "github_error"; }
    }
    const r = await telegram(env, title, issue ? `${text}\n\nGitHub: ${issue.url}` : text);
    if (!r.ok && !issue) return reply(502, "Telegram error " + r.status);
    return json(200, { ok: true, telegram: r.ok, issue, issue_skipped: issueSkipped });
  },
};

async function telegram(env, title, text) {
  const api = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}`;
  const full = `${title}\n\n${text}`;
  if (full.length <= TG_LIMIT) {
    return fetch(`${api}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text: full, disable_web_page_preview: true }),
    });
  }
  // Dai qua thi gui thanh file .md kem tieu de
  const fd = new FormData();
  fd.append("chat_id", env.TELEGRAM_CHAT_ID);
  fd.append("caption", title);
  fd.append("document", new File([text], "feedback.md", { type: "text/markdown" }));
  return fetch(`${api}/sendDocument`, { method: "POST", body: fd });
}

// goi GitHub REST API bang GITHUB_TOKEN cua worker
function github(env) {
  const repo = env.GITHUB_REPO || "gemsland/gemsland.github.io";
  return async (method, url, data) => {
    const r = await fetch(`https://api.github.com/repos/${repo}${url}`, {
      method,
      headers: {
        Authorization: `Bearer ${env.GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "gemsland-feedback-relay",
        ...(data ? { "Content-Type": "application/json" } : {}),
      },
      body: data ? JSON.stringify(data) : undefined,
    });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(`GitHub ${method} ${url}: ${r.status} ${j.message || ""}`);
    return j;
  };
}

// gop y -> comment vao issue dang mo moi nhat co nhan `feedback`; chua co thi mo issue moi
async function feedbackIssue(env, title, text) {
  const gh = github(env), LABEL = "feedback";
  const open = await gh("GET", `/issues?state=open&labels=${LABEL}&sort=created&direction=desc&per_page=20`);
  let issue = open.find((i) => !i.pull_request);
  if (!issue) {
    await gh("POST", "/labels", { name: LABEL, color: "7FD6E2", description: "Góp ý gửi từ chế độ ?feedback trên web" }).catch(() => {});
    const day = new Date().toLocaleDateString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
    issue = await gh("POST", "/issues", {
      title: `Góp ý website (từ ${day})`,
      labels: [LABEL],
      body: "Góp ý gửi từ chế độ `?feedback` trên web (Agentation). Mỗi lần gửi là một comment bên dưới.\n\nĐóng issue này khi đã xử lý xong; lần góp ý sau sẽ tự mở issue mới.",
    });
  }
  const body = `### ${title}\n\n${text}`.slice(0, 65000);
  const c = await gh("POST", `/issues/${issue.number}/comments`, { body });
  return { number: issue.number, url: c.html_url };
}

// so sanh chuoi khong lo thoi gian (ma bi mat)
function sameText(a, b) {
  const x = new TextEncoder().encode(a), y = new TextEncoder().encode(b);
  let d = x.length ^ y.length;
  for (let i = 0; i < Math.max(x.length, y.length); i++) d |= (x[i] || 0) ^ (y[i] || 0);
  return d === 0;
}

const slugify = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/gi, "d")
  .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40) || "san-pham";

// ---- san pham moi -> nhanh inbox/<slug> + Pull Request
async function upload(req, env, json) {
  if (!env.GITHUB_TOKEN || !env.UPLOAD_CODE) return json(500, { error: "upload_not_configured" });
  const raw = await req.text();
  if (raw.length > MAX_UPLOAD) return json(413, { error: "too_large" });
  let body;
  try { body = JSON.parse(raw); } catch { return json(400, { error: "bad_json" }); }
  if (!sameText(String(body.code || ""), env.UPLOAD_CODE)) return json(401, { error: "bad_code" });

  const p = body.product || {};
  const info = {
    name: String(p.name || "").trim().slice(0, 120),
    stone: String(p.stone || "").trim().slice(0, 60),
    type: TYPES.includes(p.type) ? p.type : "Trang sức",
    status: STATUS.includes(p.status) ? p.status : "available",
    desc: String(p.desc || "").trim().slice(0, 1500),
    note: String(p.note || "").trim().slice(0, 1000),
    submitted_at: new Date().toISOString(),
  };
  if (!info.name) return json(400, { error: "missing_name" });
  const img = body.image || {};
  const m = /^data:image\/(jpeg|png|webp);base64,(.+)$/.exec(String(img.data || ""));
  if (!m) return json(400, { error: "bad_image" });
  const ext = m[1] === "jpeg" ? "jpg" : m[1];

  const base = env.GITHUB_BASE || "main";
  const gh = github(env);

  const stamp = info.submitted_at.slice(0, 16).replace(/[-:T]/g, "").replace(/^(\d{8})(\d{4})$/, "$1-$2");
  const slug = `${stamp}-${slugify(info.name)}`;
  const dir = `inbox/${slug}`;
  const branch = `inbox/${slug}`;
  try {
    const ref = await gh("GET", `/git/ref/heads/${base}`);
    const head = await gh("GET", `/git/commits/${ref.object.sha}`);
    const photo = await gh("POST", "/git/blobs", { content: m[2], encoding: "base64" });
    const tree = await gh("POST", "/git/trees", {
      base_tree: head.tree.sha,
      tree: [
        { path: `${dir}/photo.${ext}`, mode: "100644", type: "blob", sha: photo.sha },
        { path: `${dir}/info.json`, mode: "100644", type: "blob", content: JSON.stringify(info, null, 1) + "\n" },
      ],
    });
    const commit = await gh("POST", "/git/commits", { message: `inbox: ${info.name}`, tree: tree.sha, parents: [ref.object.sha] });
    await gh("POST", "/git/refs", { ref: `refs/heads/${branch}`, sha: commit.sha });
    const pr = await gh("POST", "/pulls", {
      title: `Thêm sản phẩm: ${info.name}`,
      head: branch,
      base,
      body: [
        "Sản phẩm mới gửi từ chế độ góp ý trên web. Claude sẽ tự xử lý PR này (xem CLAUDE.md).",
        "",
        `- **Tên:** ${info.name}`,
        `- **Loại đá:** ${info.stone || "(chưa ghi)"}`,
        `- **Loại món:** ${info.type}`,
        `- **Trạng thái:** ${info.status === "sold" ? "đã bán" : "còn hàng"}`,
        info.desc ? `- **Mô tả:** ${info.desc}` : "",
        info.note ? `- **Ghi chú:** ${info.note}` : "",
      ].filter(Boolean).join("\n"),
    });
    if (env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID) {
      await telegram(env, `[Gemsland] Sản phẩm mới: ${info.name}`, `PR #${pr.number}: ${pr.html_url}`).catch(() => {});
    }
    return json(200, { ok: true, number: pr.number, url: pr.html_url });
  } catch (e) {
    console.error(e);
    return json(502, { error: "github_error", detail: String(e.message || e).slice(0, 300) });
  }
}
