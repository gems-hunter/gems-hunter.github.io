// Cloudflare Worker: nhan gop y tu che do ?feedback va chuyen tiep sang Telegram.
// Bot token nam o day (secret), khong nam trong code tren site.
//
// Deploy (can tai khoan Cloudflare, mien phi):
//   cd scripts/feedback-relay
//   npx wrangler login
//   npx wrangler secret put TELEGRAM_BOT_TOKEN   # token tu @BotFather
//   npx wrangler secret put TELEGRAM_CHAT_ID     # chat id cua ban (nhan /start cho bot roi xem getUpdates)
//   npx wrangler deploy
// Sau do dan URL worker vao CONFIG.telegramRelay trong assets/js/feedback.js.

const MAX_BODY = 100_000; // ky tu
const TG_LIMIT = 4000; // Telegram gioi han 4096 ky tu / tin nhan

export default {
  async fetch(req, env) {
    const allowed = (env.ALLOWED_ORIGINS || "https://gems-hunter.github.io").split(",").map((s) => s.trim());
    const origin = req.headers.get("Origin") || "";
    const cors = {
      "Access-Control-Allow-Origin": allowed.includes(origin) ? origin : allowed[0],
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
      Vary: "Origin",
    };
    const reply = (status, body) => new Response(body ?? null, { status, headers: cors });

    if (req.method === "OPTIONS") return reply(204);
    if (req.method !== "POST") return reply(405, "Method not allowed");
    if (!allowed.includes(origin)) return reply(403, "Forbidden");
    if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_CHAT_ID) return reply(500, "Relay not configured");

    const raw = await req.text();
    if (raw.length > MAX_BODY) return reply(413, "Too large");
    let body;
    try { body = JSON.parse(raw); } catch { return reply(400, "Bad JSON"); }
    const title = String(body.title || "Feedback").slice(0, 200);
    const text = String(body.text || "").trim();
    if (!text) return reply(400, "Empty");

    const api = `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}`;
    const full = `${title}\n\n${text}`;
    let r;
    if (full.length <= TG_LIMIT) {
      r = await fetch(`${api}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text: full, disable_web_page_preview: true }),
      });
    } else {
      // Dai qua thi gui thanh file .md kem tieu de
      const fd = new FormData();
      fd.append("chat_id", env.TELEGRAM_CHAT_ID);
      fd.append("caption", title);
      fd.append("document", new File([text], "feedback.md", { type: "text/markdown" }));
      r = await fetch(`${api}/sendDocument`, { method: "POST", body: fd });
    }
    if (!r.ok) return reply(502, "Telegram error " + r.status);
    return new Response('{"ok":true}', { headers: { ...cors, "Content-Type": "application/json" } });
  },
};
