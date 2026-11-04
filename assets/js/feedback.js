// Che do gop y: mo site voi ?feedback (vd. https://gems-hunter.github.io/?feedback).
// Che do nay duoc nho trong tab (sessionStorage) nen chuyen trang van con; tat bang ?feedback=off.
// Chi chay tren may tinh: Agentation khong ho tro dien thoai.
//
// Bam vao phan tu bat ky -> ghi chu -> "Send Annotations": noi dung duoc gui ve email va/hoac Telegram
// theo CONFIG ben duoi. Kenh nao de trong thi bo qua.
import { mount } from "./vendor/agentation.mjs";

const CONFIG = {
  // Email: lay access key mien phi o https://web3forms.com (nhap email se nhan gop y).
  // Key nay duoc phep de public, Web3Forms chi gui ve dung email da dang ky.
  web3formsKey: "",
  // Telegram: URL cua Cloudflare Worker trong scripts/feedback-relay/ (giu bot token o phia worker).
  telegramRelay: "https://gems-feedback-relay.buiduchai0706vn.workers.dev",
};

const lang = document.documentElement.lang === "en" ? "en" : "vi";
const T = {
  vi: {
    on: "Đang bật chế độ góp ý: bấm biểu tượng ở góc phải dưới, chọn chỗ cần sửa rồi ghi chú.",
    mobile: "Chế độ góp ý chỉ dùng được trên máy tính.",
    ok: "Đã gửi góp ý. Cảm ơn bạn!",
    fail: "Gửi chưa được, góp ý vẫn được giữ lại. Thử lại sau nhé.",
    noChannel: "Chưa cấu hình nơi nhận góp ý (email/Telegram).",
  },
  en: {
    on: "Feedback mode is on: click the icon at the bottom right, pick an element and leave a note.",
    mobile: "Feedback mode only works on a desktop browser.",
    ok: "Feedback sent. Thank you!",
    fail: "Couldn't send. Your notes are kept, please try again.",
    noChannel: "No feedback destination (email/Telegram) is configured.",
  },
}[lang];

function toast(msg, ms = 4200) {
  const el = document.createElement("div");
  el.setAttribute("role", "status");
  el.textContent = msg;
  el.style.cssText =
    "position:fixed;left:50%;bottom:24px;z-index:2147483000;transform:translateX(-50%);max-width:min(92vw,520px);" +
    "padding:12px 18px;border-radius:14px;font:400 14px/1.4 system-ui,sans-serif;color:#EEF1F8;" +
    "background:rgba(7,11,34,.96);box-shadow:0 0 0 1px rgba(127,214,226,.35),0 20px 50px -10px rgba(0,0,0,.6);" +
    "transition:opacity .3s;opacity:0";
  document.body.appendChild(el);
  requestAnimationFrame(() => (el.style.opacity = "1"));
  setTimeout(() => { el.style.opacity = "0"; setTimeout(() => el.remove(), 400); }, ms);
}

function context() {
  const now = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
  return [
    `Trang: ${location.origin}${location.pathname}${location.hash}`,
    `Ngôn ngữ: ${lang}`,
    `Màn hình: ${innerWidth}×${innerHeight}`,
    `Thời gian: ${now}`,
    `Trình duyệt: ${navigator.userAgent}`,
  ].join("\n");
}

async function sendEmail(subject, text) {
  const r = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ access_key: CONFIG.web3formsKey, subject, from_name: "Gems Hunter feedback", message: text }),
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok || j.success === false) throw new Error("email: " + (j.message || r.status));
}

async function sendTelegram(subject, text) {
  const r = await fetch(CONFIG.telegramRelay, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: subject, text }),
  });
  if (!r.ok) throw new Error("telegram: " + r.status);
}

async function onSubmit(output, annotations) {
  const senders = [];
  if (CONFIG.web3formsKey) senders.push(sendEmail);
  if (CONFIG.telegramRelay) senders.push(sendTelegram);
  if (!senders.length) { toast(T.noChannel); throw new Error("no feedback channel configured"); }

  const n = annotations.length;
  const subject = `[Gems Hunter] ${n} góp ý · ${location.pathname}`;
  const text = context() + "\n\n" + output;
  const res = await Promise.allSettled(senders.map((send) => send(subject, text)));
  res.filter((r) => r.status === "rejected").forEach((r) => console.error("[feedback]", r.reason));
  // Chi bao loi khi moi kenh deu hong; Agentation se giu lai ghi chu de gui lai.
  if (res.every((r) => r.status === "rejected")) { toast(T.fail); throw new Error("all feedback channels failed"); }
  toast(T.ok);
}

if (matchMedia("(hover: none) and (pointer: coarse)").matches) {
  toast(T.mobile, 6000);
} else {
  mount({ appName: "Gems Hunter", onSubmit, copyToClipboard: false });
  toast(T.on, 6000);
}
