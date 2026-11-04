// Che do gop y: mo site voi ?feedback (vd. https://gemsland.github.io/?feedback).
// Chi bat khi URL co ?feedback (chuyen trang trong site van giu). Bo ?feedback roi tai lai la tat. Chi chay tren may tinh.
//
// Gop y nhieu trang trong mot lan: ghi chu o trang nay, dong toolbar, chuyen trang (van giu ?feedback),
// mo lai toolbar ghi chu tiep... roi "Send Annotations" mot lan:
// gui TAT CA ghi chu cua moi trang ve email/Telegram theo CONFIG, gui xong thi xoa sach.
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
    mobile: "Chế độ góp ý chỉ dùng được trên máy tính.",
    ok: (n, p) => `Đã gửi ${n} góp ý từ ${p} trang. Cảm ơn bạn!`,
    fail: "Gửi chưa được, góp ý vẫn được giữ lại. Thử lại sau nhé.",
    noChannel: "Chưa cấu hình nơi nhận góp ý (email/Telegram).",
  },
  en: {
    on: "Feedback mode: click the icon at the bottom right to pick what to change. To switch pages, close the toolbar, navigate, then open it again. Notes from every page are sent together.",
    mobile: "Feedback mode only works on a desktop browser.",
    ok: (n, p) => `Sent ${n} notes from ${p} pages. Thank you!`,
    fail: "Couldn't send. Your notes are kept, please try again.",
    noChannel: "No feedback destination (email/Telegram) is configured.",
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
    body: JSON.stringify({ title: subject, text }),
  });
  if (!r.ok) throw new Error("telegram: " + r.status);
}

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
  const res = await Promise.allSettled(senders.map((send) => send(subject, format(all))));
  res.filter((r) => r.status === "rejected").forEach((r) => console.error("[feedback]", r.reason));
  if (res.every((r) => r.status === "rejected")) { toast(T().fail, 8000, "alert"); throw new Error("all feedback channels failed"); }

  toast(T().ok(n, all.size));
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

if (matchMedia("(hover: none) and (pointer: coarse)").matches) {
  toast(TEXT[lang()].mobile, 8000, "alert");
} else {
  render = mount({ ...baseProps, key: location.pathname + "#0" });
  // router (assets/js/router.js) bao moi lan doi trang
  document.addEventListener("gh:navigate", () => remount(true));
  toast(T().on, 5000, "alert");
}
