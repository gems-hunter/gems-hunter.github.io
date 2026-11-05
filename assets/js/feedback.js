// Che do gop y: mo site voi ?feedback (vd. https://gemsland.github.io/?feedback).
// Chi bat khi URL co ?feedback (chuyen trang trong site van giu). Bo ?feedback roi tai lai la tat. Chi chay tren may tinh.
//
// Gop y nhieu trang trong mot lan: ghi chu o trang nay, dong toolbar, chuyen trang (van giu ?feedback),
// mo lai toolbar ghi chu tiep... roi "Send Annotations" mot lan:
// gui TAT CA ghi chu cua moi trang ve email/Telegram theo CONFIG, gui xong thi xoa sach.
// Nut "+ Them san pham" (ca tren dien thoai): gui anh + thong tin -> worker mo PR inbox/... -> Claude tren GitHub xu ly.
import { mount } from "./vendor/agentation.mjs";

const CONFIG = {
  // Email: lay access key mien phi o https://web3forms.com (nhap email se nhan gop y).
  // Key nay duoc phep de public, Web3Forms chi gui ve dung email da dang ky.
  web3formsKey: "",
  // Telegram: URL cua Cloudflare Worker trong scripts/feedback-relay/ (giu bot token o phia worker).
  telegramRelay: "https://gems-feedback-relay.buiduchai0706vn.workers.dev",
};

const STORE = "feedback-annotations-"; // tien to localStorage cua Agentation (ban 3.1.x), moi trang mot khoa
const KEEP_DAYS = 7; // Agentation chi hien ghi chu trong 7 ngay
const PAGES = [
  { path: "/", vi: "Trang chủ", en: "Home (VI)" },
  { path: "/san-pham/", vi: "Sản phẩm", en: "Shop (VI)" },
  { path: "/en/", vi: "Home (EN)", en: "Home" },
  { path: "/en/products/", vi: "Shop (EN)", en: "Shop" },
];

const lang = () => (document.documentElement.lang === "en" ? "en" : "vi");
const TEXT = {
  vi: {
    on: "Chế độ góp ý: bấm biểu tượng góc phải dưới để chọn chỗ cần sửa. Muốn sang trang khác thì đóng thanh công cụ, chuyển trang rồi mở lại. Ghi chú của mọi trang được gửi chung một lần.",
    mobile: "Ghi chú góp ý chỉ dùng được trên máy tính. Trên điện thoại vẫn thêm sản phẩm được (nút góc trái dưới).",
    ok: (n, p) => `Đã gửi ${n} góp ý từ ${p} trang. Cảm ơn bạn!`,
    fail: "Gửi chưa được, góp ý vẫn được giữ lại. Thử lại sau nhé.",
    noChannel: "Chưa cấu hình nơi nhận góp ý (email/Telegram).",
    needCode: "Góp ý chỉ được gửi qua Telegram (thiếu hoặc sai mã bí mật), nên chưa vào GitHub để Claude tự sửa. Lần gửi sau sẽ hỏi lại mã.",
    codeTitle: "Nhập mã bí mật", codeSub: "Có mã thì góp ý được ghi vào GitHub và Claude tự sửa web. Mã được nhớ trên trình duyệt này.",
    codeSave: "Lưu và gửi", codeSkip: "Chỉ gửi Telegram",
  },
  en: {
    on: "Feedback mode: click the icon at the bottom right to pick what to change. To switch pages, close the toolbar, navigate, then open it again. Notes from every page are sent together.",
    mobile: "Notes only work on a desktop browser. You can still add products here (button at the bottom left).",
    ok: (n, p) => `Sent ${n} notes from ${p} pages. Thank you!`,
    fail: "Couldn't send. Your notes are kept, please try again.",
    noChannel: "No feedback destination (email/Telegram) is configured.",
    needCode: "Feedback went to Telegram only (missing or wrong secret code), so Claude won't fix it automatically. You'll be asked for the code next time.",
    codeTitle: "Enter the secret code", codeSub: "With the code, feedback goes to GitHub and Claude fixes the site. It's remembered on this browser.",
    codeSave: "Save and send", codeSkip: "Telegram only",
  },
};
const T = () => TEXT[lang()];

// thong bao nho; tone "alert" = vien do (huong dan, loi). Co nut dong va dem nguoc thoi gian tu tat.
// Hien o giua phia tren, ngay duoi thanh menu (toolbar Agentation o duoi).
function toast(msg, ms = 4200, tone = "info") {
  const el = document.createElement("div");
  el.setAttribute("role", "status");
  el.setAttribute("data-persist", "");
  el.setAttribute("data-feedback-toolbar", ""); // Agentation khong bat click o day (nut dong bam duoc)
  const ring = tone === "alert" ? "rgba(255,92,92,.95)" : "rgba(127,214,226,.35)";
  el.style.cssText =
    "position:fixed;top:84px;left:50%;transform:translateX(-50%);max-width:min(560px,calc(100vw - 32px));z-index:2147483000;display:flex;align-items:flex-start;gap:10px;" +
    "padding:11px 10px 15px 16px;border-radius:14px;font:400 14px/1.45 system-ui,sans-serif;color:#EEF1F8;" +
    `background:rgba(7,11,34,.97);box-shadow:0 0 0 1.5px ${ring},0 20px 50px -10px rgba(0,0,0,.6);` +
    "transition:opacity .3s;opacity:0";
  const text = document.createElement("span");
  text.textContent = msg;
  const x = document.createElement("button");
  x.type = "button";
  x.textContent = "×";
  x.setAttribute("aria-label", lang() === "en" ? "Close" : "Đóng");
  x.style.cssText =
    "flex:none;width:26px;height:26px;margin-top:-2px;border:0;border-radius:50%;cursor:pointer;" +
    "font:400 20px/1 system-ui,sans-serif;color:#EEF1F8;background:rgba(238,241,248,.08)";
  // dem nguoc: so giay con lai + vach chay o day popup; re chuot vao thi tam dung
  const sec = document.createElement("small");
  sec.style.cssText = "flex:none;align-self:center;min-width:28px;text-align:right;font:500 12px/1 system-ui,sans-serif;opacity:.6;font-variant-numeric:tabular-nums";
  const track = document.createElement("i");
  track.style.cssText = `position:absolute;left:14px;right:14px;bottom:5px;height:2px;border-radius:2px;background:${ring};transform-origin:left;opacity:.7`;
  el.style.overflow = "hidden";
  el.append(text, sec, x, track);
  document.body.appendChild(el);
  requestAnimationFrame(() => (el.style.opacity = "1"));

  let left = ms, last = performance.now(), paused = false, gone = false, raf = 0;
  const close = () => { if (gone) return; gone = true; cancelAnimationFrame(raf); el.style.opacity = "0"; setTimeout(() => el.remove(), 350); };
  const tick = (now) => {
    if (!paused) left -= now - last;
    last = now;
    if (left <= 0) return close();
    sec.textContent = Math.ceil(left / 1000) + "s";
    track.style.transform = `scaleX(${left / ms})`;
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);
  el.addEventListener("mouseenter", () => { paused = true; sec.style.opacity = ".35"; });
  el.addEventListener("mouseleave", () => { paused = false; sec.style.opacity = ".6"; });
  x.addEventListener("click", close);
}

// ---- doc ghi chu cua moi trang tu localStorage (noi Agentation tu luu)
function readAll() {
  const cutoff = Date.now() - KEEP_DAYS * 864e5, out = new Map();
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (!k || !k.startsWith(STORE)) continue;
    try {
      const list = JSON.parse(localStorage.getItem(k)).filter((a) => (!a.timestamp || a.timestamp > cutoff) && (a.comment || a.element));
      if (list.length) out.set(k.slice(STORE.length), list);
    } catch (e) { /* bo qua khoa hong */ }
  }
  return out;
}
const pageName = (path) => (PAGES.find((p) => p.path === path) || {})[lang()] || path;

function format(all) {
  const now = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
  const lines = [
    `Thời gian: ${now}`,
    `Màn hình: ${innerWidth}×${innerHeight}`,
    `Trình duyệt: ${navigator.userAgent}`,
  ];
  for (const [path, list] of all) {
    lines.push("", `## ${pageName(path)} — ${location.origin}${path}`);
    list.forEach((a, i) => {
      lines.push(`### ${i + 1}. ${a.element || "(vùng chọn)"}`);
      if (a.elementPath) lines.push(`**Location:** ${a.elementPath}`);
      if (a.selectedText) lines.push(`**Selected text:** "${a.selectedText.slice(0, 300)}"`);
      lines.push(`**Feedback:** ${a.comment || "(không ghi chú)"}`);
    });
  }
  return lines.join("\n");
}

// ---- gui
async function sendEmail(subject, text) {
  const r = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ access_key: CONFIG.web3formsKey, subject, from_name: "Gemsland feedback", message: text }),
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || j.success === false) throw new Error("email: " + (j.message || r.status));
}
async function sendTelegram(subject, text) {
  const r = await fetch(CONFIG.telegramRelay, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // ma bi mat (luu tu form Them san pham): co ma thi worker ghi them vao GitHub issue -> Claude tu sua
    body: JSON.stringify({ title: subject, text, code: savedCode() }),
  });
  if (!r.ok) throw new Error("telegram: " + r.status);
  const j = await r.json().catch(() => ({}));
  lastIssue = j.issue || null;
  issueSkipped = j.issue_skipped || null;
}
let lastIssue = null, issueSkipped = null;

// hop thoai nho hoi ma bi mat; resolve sau khi nguoi dung luu hoac bo qua
function askCode() {
  return new Promise((done) => {
    const t = T(), wrap = document.createElement("div");
    wrap.setAttribute("data-gh-up", ""); wrap.setAttribute("data-feedback-toolbar", ""); wrap.setAttribute("data-persist", "");
    wrap.innerHTML = `<form class="gu-card" role="dialog" aria-modal="true" aria-labelledby="gu-code-t" style="width:min(420px,100%)">
      <div class="gu-head"><div><h2 id="gu-code-t">${t.codeTitle}</h2><p>${t.codeSub}</p></div></div>
      <div class="gu-body"><span class="gu-pw"><input class="gu-input" name="code" type="password" autocomplete="off" required></span></div>
      <div class="gu-foot"><button type="button" class="gu-btn gu-ghost" data-skip>${t.codeSkip}</button>
        <button class="gu-btn gu-primary">${t.codeSave}</button></div></form>`;
    document.body.appendChild(wrap);
    const form = wrap.querySelector("form"), input = form.elements.code;
    const finish = () => { wrap.remove(); done(); };
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      if (input.value.trim()) { try { localStorage.setItem("gh-upload-code", input.value.trim()); } catch (e) {} }
      finish();
    });
    wrap.querySelector("[data-skip]").addEventListener("click", finish);
    wrap.addEventListener("keydown", (ev) => { if (ev.key === "Escape") { ev.stopPropagation(); finish(); } });
    setTimeout(() => input.focus(), 50);
  });
}
const savedCode = () => { try { return localStorage.getItem("gh-upload-code") || ""; } catch (e) { return ""; } };

async function onSubmit(_output, current) {
  const senders = [];
  if (CONFIG.web3formsKey) senders.push(sendEmail);
  if (CONFIG.telegramRelay) senders.push(sendTelegram);
  if (!senders.length) { toast(T().noChannel, 6000, "alert"); throw new Error("no feedback channel configured"); }

  const all = readAll();
  all.set(location.pathname, current); // trang hien tai: lay ban moi nhat tu Agentation
  for (const [k, v] of all) if (!v.length) all.delete(k);
  const n = [...all.values()].reduce((s, l) => s + l.length, 0);
  if (!n) return;
  const subject = `[Gemsland] ${n} góp ý · ${all.size} trang`;
  // chua co ma bi mat tren trinh duyet nay -> hoi luon (bo qua = chi gui Telegram)
  if (CONFIG.telegramRelay && !savedCode()) await askCode();
  const res = await Promise.allSettled(senders.map((send) => send(subject, format(all))));
  res.filter((r) => r.status === "rejected").forEach((r) => console.error("[feedback]", r.reason));
  if (res.every((r) => r.status === "rejected")) { toast(T().fail, 8000, "alert"); throw new Error("all feedback channels failed"); }

  toast(T().ok(n, all.size) + (lastIssue ? ` (GitHub issue #${lastIssue.number})` : ""));
  if (issueSkipped === "no_code") {
    if (savedCode()) { try { localStorage.removeItem("gh-upload-code"); } catch (e) {} }
    setTimeout(() => toast(T().needCode, 9000, "alert"), 600);
  }
  // gui xong: xoa ghi chu moi trang; trang hien tai nap lai Agentation sau khi no hien dau "da gui"
  for (const path of all.keys()) localStorage.removeItem(STORE + path);
  setTimeout(() => { localStorage.removeItem(STORE + location.pathname); remount(false); }, 1600);
}

// ---- Agentation: moi trang mot `key` de no nap dung ghi chu cua trang do
const baseProps = {
  appName: "Gemsland", onSubmit, copyToClipboard: false,
};
let render = null, gen = 0;
const deepFind = (sel) => {
  for (const r of [document, ...[...document.body.querySelectorAll("*")].filter((e) => e.shadowRoot).map((e) => e.shadowRoot)]) {
    const el = r.querySelector(sel); if (el) return el;
  }
  return null;
};
const isActive = () => !!deepFind('[data-feedback-toolbar][class*="overlay"]');
// bat lai toolbar sau khi nap lai: dung phim tat cua Agentation (Ctrl/Cmd + Shift + F)
const activate = () => document.dispatchEvent(new KeyboardEvent("keydown", { key: "F", ctrlKey: true, shiftKey: true, bubbles: true }));
function remount(keepActive) {
  const was = keepActive && isActive();
  render({ ...baseProps, key: location.pathname + "#" + ++gen });
  if (was) setTimeout(activate, 120);
}

// ---- Them san pham: nut "+ Them san pham" -> form -> worker /upload -> mo PR inbox/... tren GitHub
// (dung duoc ca tren dien thoai; Agentation thi chi tren may tinh)
const STONES = ["Aquamarine", "Labradorite", "Moonstone", "Opal", "Mã não", "Citrine", "Thạch anh", "Thạch anh tím",
  "Thạch anh trắng", "Thạch anh hồng", "Thạch anh khói", "Garnet", "Peridot", "Topaz", "Tourmaline", "Apatite",
  "Lepidolite", "Kyanite", "Fluorite"];
const UP = {
  vi: {
    btn: "Thêm sản phẩm", title: "Thêm sản phẩm mới", sub: "Sản phẩm lên web sau khi được duyệt.",
    drop: "Chọn ảnh hoặc kéo thả vào đây", dropHint: "JPG, PNG, HEIC… ảnh sẽ được nén trước khi gửi",
    change: "Đổi ảnh", name: "Tên món", namePh: "VD: Vòng tay Moonstone ánh xanh", stone: "Loại đá", stonePh: "Gõ hoặc chọn bên dưới",
    type: "Loại món", status: "Trạng thái", avail: "Còn hàng", sold: "Đã bán", desc: "Mô tả", descPh: "Kích thước, chất liệu, câu chuyện của viên đá…",
    note: "Ghi chú cho người duyệt", notePh: "Không bắt buộc", optional: "không bắt buộc", code: "Mã bí mật", saved: "đã lưu",
    show: "Hiện", hide: "Ẩn", send: "Gửi sản phẩm", cancel: "Huỷ", close: "Đóng",
    types: { "Vòng cổ": "Vòng cổ", "Vòng tay": "Vòng tay", "Nhẫn": "Nhẫn", "Bông tai": "Bông tai", "Mặt dây": "Mặt dây", "Đá thô": "Đá thô", "Trang sức": "Khác" },
    sending: "Đang gửi…", reading: "Đang xử lý ảnh…", ok: (n) => `Đã gửi! Sản phẩm đang chờ duyệt (PR #${n}), lên web sau khi được duyệt.`,
    badCode: "Sai mã bí mật.", fail: "Gửi chưa được, thử lại sau nhé.", needPhoto: "Chọn một ảnh trước đã.", needName: "Nhập tên món.",
    net: (o) => `Không gửi tới được máy chủ. Nếu đang chạy thử trên máy, địa chỉ ${o} có thể chưa được phép (chỉ cho phép http://localhost:8000 và trang thật).`,
    why: (st, j) => j.error === "upload_not_configured" ? "Máy chủ chưa cài GITHUB_TOKEN / UPLOAD_CODE."
      : j.error === "github_error" ? `GitHub từ chối: ${j.detail || st}` : j.error === "too_large" ? "Ảnh quá lớn."
      : `Gửi chưa được (lỗi ${st}${j.error ? ": " + j.error : ""}).`,
  },
  en: {
    btn: "Add product", title: "Add a new product", sub: "It goes live after review.",
    drop: "Choose a photo or drop it here", dropHint: "JPG, PNG, HEIC… compressed before sending",
    change: "Change", name: "Name", namePh: "e.g. Blue-flash Moonstone Bracelet", stone: "Stone", stonePh: "Type or pick below",
    type: "Type", status: "Status", avail: "Available", sold: "Sold", desc: "Description", descPh: "Size, material, the stone's story…",
    note: "Note for the reviewer", notePh: "Optional", optional: "optional", code: "Secret code", saved: "saved",
    show: "Show", hide: "Hide", send: "Send product", cancel: "Cancel", close: "Close",
    types: { "Vòng cổ": "Necklace", "Vòng tay": "Bracelet", "Nhẫn": "Ring", "Bông tai": "Earrings", "Mặt dây": "Pendant", "Đá thô": "Raw stone", "Trang sức": "Other" },
    sending: "Sending…", reading: "Processing photo…", ok: (n) => `Sent! The product is waiting for review (PR #${n}).`,
    badCode: "Wrong secret code.", fail: "Couldn't send, please try again.", needPhoto: "Pick a photo first.", needName: "Enter a name.",
    net: (o) => `Couldn't reach the server. When testing locally, ${o} may not be allowed (only http://localhost:8000 and the live site are).`,
    why: (st, j) => j.error === "upload_not_configured" ? "The server is missing GITHUB_TOKEN / UPLOAD_CODE."
      : j.error === "github_error" ? `GitHub refused: ${j.detail || st}` : j.error === "too_large" ? "The photo is too large."
      : `Couldn't send (error ${st}${j.error ? ": " + j.error : ""}).`,
  },
};
const U = () => UP[lang()];
const ICON = {
  plus: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/></svg>',
  x: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" fill="none"/></svg>',
  img: '<svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-9 9"/></svg>',
  gem: '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M12 21L8 9l4-6 4 6z"/></svg>',
};

// nen anh tren trinh duyet: canh dai toi da 2000px, JPEG ~0.86 (anh dien thoai 5-10 MB -> vai tram KB)
async function compress(file) {
  const bmp = await createImageBitmap(file, { imageOrientation: "from-image" }).catch(() => null);
  const src = bmp || await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = URL.createObjectURL(file); });
  const w = src.width, h = src.height, k = Math.min(1, 2000 / Math.max(w, h));
  const c = document.createElement("canvas"); c.width = Math.round(w * k); c.height = Math.round(h * k);
  c.getContext("2d").drawImage(src, 0, 0, c.width, c.height);
  return c.toDataURL("image/jpeg", 0.86);
}

// Giao dien form: toan bo nam trong [data-gh-up], tu dat font/mau de khong bi CSS cua trang lam lech.
const upCss = document.createElement("style");
upCss.textContent = `
[data-gh-up-btn]{position:fixed;left:16px;bottom:16px;z-index:2147482000;display:inline-flex;align-items:center;gap:8px;padding:12px 18px 12px 14px;
  border:0;border-radius:999px;cursor:pointer;font:600 14px/1 var(--sans,system-ui),system-ui,sans-serif;color:#061021;
  background:linear-gradient(135deg,#9BE5EE,#62C3D2);box-shadow:0 10px 30px -8px rgba(98,195,210,.55),0 0 0 1px rgba(255,255,255,.25) inset;
  transition:transform .2s,box-shadow .2s}
[data-gh-up-btn]:hover{transform:translateY(-1px);box-shadow:0 14px 34px -8px rgba(98,195,210,.7),0 0 0 1px rgba(255,255,255,.3) inset}
[data-gh-up]{--c-bg:#0B1030;--c-field:#121a43;--c-line:rgba(238,241,248,.12);--c-line2:rgba(238,241,248,.22);--c-ink:#EEF1F8;--c-muted:#9AA3C7;--c-aqua:#7FD6E2;--c-red:#FF7A7A;
  position:fixed;inset:0;z-index:2147483001;display:grid;place-items:center;padding:20px;color-scheme:dark;
  background:rgba(3,5,18,.62);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);animation:gu-fade .2s ease both;
  font:400 14px/1.45 var(--sans,system-ui),system-ui,sans-serif;color:var(--c-ink);text-align:left;letter-spacing:normal}
[data-gh-up] *{box-sizing:border-box}
[data-gh-up] .gu-card{position:relative;display:flex;flex-direction:column;width:min(540px,100%);max-height:calc(100svh - 40px);border-radius:22px;
  background:radial-gradient(120% 60% at 100% 0%,rgba(127,214,226,.10),transparent 55%),var(--c-bg);
  box-shadow:0 0 0 1px var(--c-line),0 40px 100px -30px rgba(0,0,0,.85);animation:gu-pop .28s cubic-bezier(.2,.8,.2,1) both;overflow:hidden}
[data-gh-up] .gu-head{display:flex;align-items:flex-start;gap:12px;padding:22px 22px 6px}
[data-gh-up] .gu-head h2{margin:0;font:600 19px/1.25 var(--sans,system-ui),system-ui,sans-serif;color:var(--c-ink);letter-spacing:-.01em}
[data-gh-up] .gu-head p{margin:4px 0 0;color:var(--c-muted);font-size:13px}
[data-gh-up] .gu-x{margin-left:auto;flex:none;display:grid;place-items:center;width:34px;height:34px;border:0;border-radius:50%;cursor:pointer;
  color:var(--c-muted);background:rgba(238,241,248,.06);transition:background .2s,color .2s}
[data-gh-up] .gu-x:hover{background:rgba(238,241,248,.12);color:var(--c-ink)}
[data-gh-up] .gu-body{overflow:auto;padding:12px 22px 6px;display:grid;gap:16px;scrollbar-width:thin}
[data-gh-up] .gu-field{display:grid;gap:7px}
[data-gh-up] .gu-label{display:flex;align-items:baseline;gap:6px;font-size:12.5px;font-weight:600;color:var(--c-muted);text-transform:none}
[data-gh-up] .gu-label small{font-weight:400;opacity:.75}
[data-gh-up] .gu-input{width:100%;margin:0;padding:12px 14px;border:0;border-radius:12px;outline:0;font:inherit;color:var(--c-ink);
  background:var(--c-field);box-shadow:inset 0 0 0 1px var(--c-line);transition:box-shadow .15s,background .15s;appearance:none;-webkit-appearance:none}
[data-gh-up] .gu-input::placeholder{color:#6F79A3}
[data-gh-up] .gu-input:hover{box-shadow:inset 0 0 0 1px var(--c-line2)}
[data-gh-up] .gu-input:focus{box-shadow:inset 0 0 0 1px var(--c-aqua),0 0 0 4px rgba(127,214,226,.15)}
[data-gh-up] textarea.gu-input{min-height:84px;resize:vertical}
[data-gh-up] .gu-drop{position:relative;display:grid;place-items:center;gap:6px;min-height:170px;padding:20px;border-radius:16px;cursor:pointer;text-align:center;
  color:var(--c-muted);background:linear-gradient(var(--c-field),var(--c-field)) padding-box;border:1.5px dashed var(--c-line2);transition:border-color .2s,background .2s}
[data-gh-up] .gu-drop:hover,[data-gh-up] .gu-drop.over{border-color:var(--c-aqua);background:rgba(127,214,226,.06)}
[data-gh-up] .gu-drop b{color:var(--c-ink);font-weight:600}
[data-gh-up] .gu-drop .gu-ic{display:grid;place-items:center;width:54px;height:54px;border-radius:16px;color:var(--c-aqua);background:rgba(127,214,226,.1)}
[data-gh-up] .gu-drop small{font-size:12px;opacity:.8}
[data-gh-up] .gu-drop.has{padding:0;border-style:solid;border-color:var(--c-line);overflow:hidden;min-height:0}
[data-gh-up] .gu-drop.has img{display:block;width:100%;max-height:300px;object-fit:contain;background:#05081c}
[data-gh-up] .gu-drop .gu-chg{position:absolute;right:10px;bottom:10px;padding:8px 12px;border-radius:999px;font-size:12.5px;font-weight:600;color:var(--c-ink);
  background:rgba(6,10,32,.78);backdrop-filter:blur(6px);box-shadow:0 0 0 1px var(--c-line2)}
[data-gh-up] .gu-chips{display:flex;flex-wrap:wrap;gap:8px}
[data-gh-up] .gu-chip{display:inline-flex;align-items:center;gap:6px;padding:9px 13px;border:0;border-radius:999px;cursor:pointer;font:500 13px/1 var(--sans,system-ui),system-ui,sans-serif;
  color:var(--c-ink);background:var(--c-field);box-shadow:inset 0 0 0 1px var(--c-line);transition:background .15s,box-shadow .15s,color .15s}
[data-gh-up] .gu-chip:hover{box-shadow:inset 0 0 0 1px var(--c-line2)}
[data-gh-up] .gu-chip[aria-pressed=true],[data-gh-up] .gu-chip[aria-checked=true]{color:#061021;background:var(--c-aqua);box-shadow:none}
[data-gh-up] .gu-chips.sm .gu-chip{padding:7px 11px;font-size:12px;color:var(--c-muted)}
[data-gh-up] .gu-chips.sm .gu-chip[aria-pressed=true]{color:#061021}
[data-gh-up] .gu-seg{display:grid;grid-template-columns:1fr 1fr;padding:4px;border-radius:14px;background:var(--c-field);box-shadow:inset 0 0 0 1px var(--c-line)}
[data-gh-up] .gu-seg button{padding:10px;border:0;border-radius:10px;cursor:pointer;font:500 13.5px/1 var(--sans,system-ui),system-ui,sans-serif;color:var(--c-muted);background:none;transition:background .2s,color .2s}
[data-gh-up] .gu-seg button[aria-checked=true]{color:var(--c-ink);background:rgba(127,214,226,.16);box-shadow:inset 0 0 0 1px rgba(127,214,226,.45)}
[data-gh-up] .gu-seg button[data-v=sold][aria-checked=true]{background:rgba(255,122,122,.14);box-shadow:inset 0 0 0 1px rgba(255,122,122,.45)}
[data-gh-up] .gu-pw{position:relative}
[data-gh-up] .gu-pw .gu-input{padding-right:64px}
[data-gh-up] .gu-pw button{position:absolute;right:6px;top:50%;transform:translateY(-50%);padding:7px 10px;border:0;border-radius:8px;cursor:pointer;font:600 12px/1 var(--sans,system-ui),system-ui,sans-serif;color:var(--c-aqua);background:none}
[data-gh-up] .gu-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
[data-gh-up] .gu-err{display:none;margin:4px 22px 0;padding:10px 12px;border-radius:12px;font-size:13px;color:#FFD3D3;background:rgba(255,122,122,.12);box-shadow:inset 0 0 0 1px rgba(255,122,122,.35)}
[data-gh-up] .gu-err.on{display:block}
[data-gh-up] .gu-foot{display:flex;gap:10px;justify-content:flex-end;padding:16px 22px 20px;border-top:1px solid var(--c-line);margin-top:12px}
[data-gh-up] .gu-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:44px;padding:0 20px;border:0;border-radius:999px;cursor:pointer;
  font:600 14px/1 var(--sans,system-ui),system-ui,sans-serif;transition:transform .15s,opacity .15s,background .2s}
[data-gh-up] .gu-ghost{color:var(--c-ink);background:rgba(238,241,248,.07)}
[data-gh-up] .gu-ghost:hover{background:rgba(238,241,248,.12)}
[data-gh-up] .gu-primary{color:#061021;background:linear-gradient(135deg,#9BE5EE,#62C3D2);box-shadow:0 10px 24px -10px rgba(98,195,210,.7)}
[data-gh-up] .gu-primary:hover{transform:translateY(-1px)}
[data-gh-up] .gu-primary:disabled{opacity:.6;cursor:wait;transform:none}
[data-gh-up] .gu-spin{width:16px;height:16px;border-radius:50%;border:2px solid rgba(6,16,33,.3);border-top-color:#061021;animation:gu-spin .7s linear infinite}
@keyframes gu-fade{from{opacity:0}}
@keyframes gu-pop{from{opacity:0;transform:translateY(12px) scale(.98)}}
@keyframes gu-up{from{transform:translateY(100%)}}
@keyframes gu-spin{to{transform:rotate(360deg)}}
@media (max-width:560px){
  [data-gh-up]{padding:0;place-items:end stretch}
  [data-gh-up] .gu-card{width:100%;max-height:92svh;border-radius:22px 22px 0 0;animation:gu-up .32s cubic-bezier(.2,.8,.2,1) both}
  [data-gh-up] .gu-card::before{content:"";position:absolute;left:50%;top:8px;width:40px;height:4px;border-radius:4px;transform:translateX(-50%);background:var(--c-line2)}
  [data-gh-up] .gu-row{grid-template-columns:1fr}
  [data-gh-up] .gu-foot{padding-bottom:max(20px,env(safe-area-inset-bottom))}
  [data-gh-up] .gu-foot .gu-btn{flex:1}
  [data-gh-up-btn]{left:12px;bottom:12px}
}
@media (prefers-reduced-motion:reduce){[data-gh-up],[data-gh-up] *{animation:none!important;transition:none!important}}`;

function openUpload() {
  if (document.querySelector("[data-gh-up]")) return;
  const u = U(), e = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  let code = ""; try { code = localStorage.getItem("gh-upload-code") || ""; } catch (x) {}
  const state = { photo: null, type: "Vòng tay", status: "available" };
  const wrap = document.createElement("div");
  wrap.setAttribute("data-gh-up", ""); wrap.setAttribute("data-feedback-toolbar", ""); wrap.setAttribute("data-persist", "");
  wrap.innerHTML = `
  <form class="gu-card" role="dialog" aria-modal="true" aria-labelledby="gu-title" novalidate>
    <div class="gu-head">
      <div><h2 id="gu-title">${u.title}</h2><p>${u.sub}</p></div>
      <button type="button" class="gu-x" data-close aria-label="${u.close}">${ICON.x}</button>
    </div>
    <div class="gu-body">
      <div class="gu-field">
        <input type="file" name="photo" accept="image/*" hidden>
        <div class="gu-drop" role="button" tabindex="0" aria-label="${u.drop}">
          <span class="gu-ic">${ICON.img}</span><b>${u.drop}</b><small>${u.dropHint}</small>
        </div>
      </div>
      <label class="gu-field"><span class="gu-label">${u.name}</span>
        <input class="gu-input" name="name" maxlength="120" placeholder="${e(u.namePh)}" autocomplete="off"></label>
      <div class="gu-field"><span class="gu-label">${u.type}</span>
        <div class="gu-chips" role="radiogroup" aria-label="${u.type}" data-group="type">
          ${Object.entries(u.types).map(([v, t]) => `<button type="button" class="gu-chip" role="radio" data-v="${e(v)}" aria-checked="${v === state.type}">${e(t)}</button>`).join("")}
        </div></div>
      <div class="gu-field"><span class="gu-label">${ICON.gem} ${u.stone} <small>${u.optional}</small></span>
        <input class="gu-input" name="stone" maxlength="60" placeholder="${e(u.stonePh)}" autocomplete="off">
        <div class="gu-chips sm" data-group="stone">${STONES.slice(0, 10).map((s) => `<button type="button" class="gu-chip" data-v="${e(s)}" aria-pressed="false">${e(s)}</button>`).join("")}</div>
      </div>
      <div class="gu-field"><span class="gu-label">${u.status}</span>
        <div class="gu-seg" role="radiogroup" aria-label="${u.status}" data-group="status">
          <button type="button" role="radio" data-v="available" aria-checked="true">${u.avail}</button>
          <button type="button" role="radio" data-v="sold" aria-checked="false">${u.sold}</button>
        </div></div>
      <label class="gu-field"><span class="gu-label">${u.desc} <small>${u.optional}</small></span>
        <textarea class="gu-input" name="desc" maxlength="1500" placeholder="${e(u.descPh)}"></textarea></label>
      <div class="gu-row">
        <label class="gu-field"><span class="gu-label">${u.note}</span>
          <input class="gu-input" name="note" maxlength="1000" placeholder="${e(u.notePh)}" autocomplete="off"></label>
        <label class="gu-field"><span class="gu-label">${u.code}${code ? ` <small>· ${u.saved}</small>` : ""}</span>
          <span class="gu-pw"><input class="gu-input" name="code" type="password" autocomplete="off" value="${e(code)}"><button type="button" data-eye>${u.show}</button></span></label>
      </div>
    </div>
    <p class="gu-err" role="alert"></p>
    <div class="gu-foot">
      <button type="button" class="gu-btn gu-ghost" data-close>${u.cancel}</button>
      <button class="gu-btn gu-primary" data-send>${u.send}</button>
    </div>
  </form>`;
  document.body.appendChild(wrap);
  const $u = (s) => wrap.querySelector(s), form = $u("form"), f = form.elements;
  const err = $u(".gu-err"), drop = $u(".gu-drop"), send = $u("[data-send]");
  const showErr = (m) => { err.textContent = m || ""; err.classList.toggle("on", !!m); };
  const close = () => { wrap.remove(); document.removeEventListener("keydown", onKey, true); };
  const onKey = (ev) => { if (ev.key === "Escape") { ev.stopPropagation(); close(); } };
  document.addEventListener("keydown", onKey, true);
  wrap.querySelectorAll("[data-close]").forEach((b) => b.addEventListener("click", close));
  wrap.addEventListener("mousedown", (ev) => { if (ev.target === wrap) close(); });

  // anh: bam, Enter/Space, hoac keo tha
  const pickFile = async (file) => {
    if (!file || !/^image\//.test(file.type || "image/")) return;
    showErr(""); drop.classList.remove("has"); drop.innerHTML = `<span class="gu-ic">${ICON.img}</span><b>${u.reading}</b>`;
    try {
      state.photo = await compress(file);
      drop.classList.add("has");
      drop.innerHTML = `<img alt="" src="${state.photo}"><span class="gu-chg">${u.change}</span>`;
    } catch (x) {
      state.photo = null; drop.innerHTML = `<span class="gu-ic">${ICON.img}</span><b>${u.drop}</b><small>${u.dropHint}</small>`; showErr(u.fail);
    }
  };
  drop.addEventListener("click", () => f.photo.click());
  drop.addEventListener("keydown", (ev) => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); f.photo.click(); } });
  f.photo.addEventListener("change", () => pickFile(f.photo.files[0]));
  ["dragenter", "dragover"].forEach((t) => drop.addEventListener(t, (ev) => { ev.preventDefault(); drop.classList.add("over"); }));
  ["dragleave", "drop"].forEach((t) => drop.addEventListener(t, () => drop.classList.remove("over")));
  drop.addEventListener("drop", (ev) => { ev.preventDefault(); pickFile(ev.dataTransfer.files[0]); });

  // chip loai mon + trang thai (chon mot), chip goi y loai da (dien vao o)
  wrap.querySelectorAll('[data-group="type"] .gu-chip, [data-group="status"] button').forEach((b) => b.addEventListener("click", () => {
    const g = b.parentElement, key = g.dataset.group;
    g.querySelectorAll("[role=radio]").forEach((x) => x.setAttribute("aria-checked", x === b));
    state[key] = b.dataset.v;
  }));
  const stoneChips = [...wrap.querySelectorAll('[data-group="stone"] .gu-chip')];
  const syncStone = () => stoneChips.forEach((c) => c.setAttribute("aria-pressed", c.dataset.v.toLowerCase() === f.stone.value.trim().toLowerCase()));
  stoneChips.forEach((c) => c.addEventListener("click", () => { f.stone.value = c.dataset.v; syncStone(); }));
  f.stone.addEventListener("input", syncStone);
  $u("[data-eye]").addEventListener("click", (ev) => {
    const show = f.code.type === "password"; f.code.type = show ? "text" : "password"; ev.target.textContent = show ? u.hide : u.show;
  });
  // tren dien thoai khong tu focus de ban phim khong bat len che form ngay khi mo
  if (matchMedia("(hover: hover)").matches) setTimeout(() => f.name.focus(), 50);

  form.addEventListener("submit", async (ev) => {
    ev.preventDefault(); showErr("");
    if (!state.photo) { showErr(u.needPhoto); drop.focus(); return; }
    if (!f.name.value.trim()) { showErr(u.needName); f.name.focus(); return; }
    send.disabled = true; send.innerHTML = `<span class="gu-spin"></span>${u.sending}`;
    try {
      const r = await fetch(CONFIG.telegramRelay.replace(/\/$/, "") + "/upload", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          code: f.code.value,
          product: { name: f.name.value, stone: f.stone.value, type: state.type, status: state.status, desc: f.desc.value, note: f.note.value },
          image: { data: state.photo },
        }),
      });
      const j = await r.json().catch(() => ({}));
      if (r.status === 401) throw new Error(u.badCode);
      if (!r.ok || !j.ok) throw new Error(u.why(r.status, j));
      try { localStorage.setItem("gh-upload-code", f.code.value); } catch (x) {}
      close(); toast(u.ok(j.number), 8000);
    } catch (x) {
      // fetch nem TypeError khi khong toi duoc worker hoac bi chan CORS (origin chua duoc phep)
      showErr(x instanceof TypeError ? u.net(location.origin) : (x.message || u.fail));
      console.error("[upload]", x);
      send.disabled = false; send.textContent = u.send;
    }
  });
}

function addUploadButton() {
  if (!CONFIG.telegramRelay) return;
  document.head.appendChild(upCss);
  const b = document.createElement("button");
  b.type = "button"; b.innerHTML = `${ICON.plus}<span>${U().btn}</span>`;
  b.setAttribute("data-gh-up-btn", ""); b.setAttribute("data-feedback-toolbar", ""); b.setAttribute("data-persist", "");
  b.addEventListener("click", openUpload);
  document.body.appendChild(b);
  document.addEventListener("gh:navigate", () => { b.lastChild.textContent = U().btn; });
}

addUploadButton();
if (matchMedia("(hover: none) and (pointer: coarse)").matches) {
  toast(TEXT[lang()].mobile, 8000, "alert");
} else {
  render = mount({ ...baseProps, key: location.pathname + "#0" });
  // router (assets/js/router.js) bao moi lan doi trang
  document.addEventListener("gh:navigate", () => remount(true));
  toast(T().on, 5000, "alert");
}
