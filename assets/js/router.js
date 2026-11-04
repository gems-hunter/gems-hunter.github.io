// Router nho, khong framework: bam link noi bo -> tai HTML trang moi (co cache), thay noi dung,
// khoi tao lai JS cua trang. Trang da tai duoc giu trong bo nho nen quay lai/sang lai la tuc thi,
// va vi tri cuon cua tung muc lich su duoc nho lai.
// Neu co gi bat thuong (loi mang, trinh duyet cu...) thi de trinh duyet tai trang binh thuong.
import { $$, reduce } from './common.js';

const ROUTE = /^\/(?:en\/(?:products\/)?|san-pham\/)?$/; // /, /en/, /san-pham/, /en/products/
const PERSIST = '[data-persist], #agentation-root';
const keepHead = (el) => el.matches('meta[charset], meta[name=viewport], link[rel=stylesheet], link[rel=preconnect], link[href*="fonts.googleapis"]');

export function startRouter({ initialHTML, teardown, boot }) {
  if (!window.DOMParser || !history.pushState) return;
  history.scrollRestoration = 'manual';

  const pages = new Map(); // pathname -> Promise<html>
  pages.set(location.pathname, Promise.resolve(initialHTML));
  const get = (u) => {
    if (!pages.has(u.pathname)) {
      pages.set(u.pathname, fetch(u.pathname, { credentials: 'same-origin' })
        .then((r) => { if (!r.ok) throw new Error(r.status); return r.text(); })
        .catch((e) => { pages.delete(u.pathname); throw e; }));
    }
    return pages.get(u.pathname);
  };

  // vi tri cuon theo tung muc lich su
  const pos = new Map();
  const newKey = () => Math.random().toString(36).slice(2);
  const keyOf = () => {
    let k = history.state && history.state.k;
    if (!k) { k = newKey(); history.replaceState({ ...(history.state || {}), k }, ''); }
    return k;
  };
  keyOf();
  let current = location.pathname;

  const target = (a) => {
    if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return null;
    const u = new URL(a.href, location.href);
    return u.origin === location.origin && ROUTE.test(u.pathname) ? u : null;
  };

  // tai truoc khi nguoi dung co y dinh bam (re chuot, cham, focus)
  const intent = (e) => { const u = target(e.target.closest && e.target.closest('a[href]')); if (u) get(u).catch(() => {}); };
  document.addEventListener('pointerover', intent, { passive: true });
  document.addEventListener('touchstart', intent, { passive: true });
  document.addEventListener('focusin', intent);
  // luc ranh: tai truoc cac trang trong menu (bo qua khi tiet kiem du lieu)
  const conn = navigator.connection;
  if (!(conn && (conn.saveData || /2g/.test(conn.effectiveType || '')))) {
    (window.requestIdleCallback || ((f) => setTimeout(f, 1500)))(() =>
      $$('#nav-menu a').forEach((a) => { const u = target(a); if (u) get(u).catch(() => {}); }));
  }

  document.addEventListener('click', (e) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest('a[href]'), u = target(a);
    if (!u || u.pathname === location.pathname) return; // cung trang (anchor #...) -> de trinh duyet lo
    e.preventDefault();
    go(u, true);
  });

  addEventListener('popstate', () => {
    if (location.pathname === current) return; // chi doi hash/query trong cung trang
    pos.set(lastKey, scrollY);
    go(new URL(location.href), false);
  });
  let lastKey = keyOf();
  addEventListener('hashchange', () => { lastKey = keyOf(); });

  const loadStyles = (doc, u) => Promise.all([...doc.querySelectorAll('link[rel=stylesheet]')].map((l) => {
    const href = new URL(l.getAttribute('href'), u).href;
    if ([...document.querySelectorAll('link[rel=stylesheet]')].some((x) => x.href === href)) return null;
    return new Promise((res) => {
      const n = document.createElement('link'); n.rel = 'stylesheet'; n.href = href;
      n.onload = n.onerror = res; document.head.appendChild(n);
    });
  }));

  const swap = (doc, u) => {
    teardown();
    // head: title, meta, canonical, hreflang, JSON-LD...; giu lai stylesheet va font
    document.title = doc.title;
    const html = document.documentElement, nh = doc.documentElement;
    html.lang = nh.lang; html.dataset.root = nh.dataset.root || '';
    [...document.head.children].forEach((el) => { if (!keepHead(el)) el.remove(); });
    [...doc.head.children].forEach((el) => { if (!keepHead(el)) document.head.appendChild(document.importNode(el, true)); });
    const want = new Set([...doc.querySelectorAll('link[rel=stylesheet]')].map((l) => new URL(l.getAttribute('href'), u).href));
    // body: thay het, tru phan tu song suot (anh sang chuot, Agentation)
    const b = document.body, nb = doc.body;
    b.className = nb.className; b.classList.remove('no-js'); b.dataset.page = nb.dataset.page || '';
    [...b.children].forEach((el) => { if (!el.matches(PERSIST)) el.remove(); });
    [...nb.children].forEach((el) => {
      if (el.matches(PERSIST) || (el.tagName === 'SCRIPT' && el.src)) return;
      b.appendChild(document.importNode(el, true));
    });
    [...document.querySelectorAll('link[rel=stylesheet]')].forEach((l) => {
      if (!l.href.includes('fonts.googleapis') && !want.has(l.href)) l.remove();
    });
    current = location.pathname;
    boot();
  };

  const scrollAfter = (u, push) => {
    const el = u.hash && document.getElementById(decodeURIComponent(u.hash.slice(1)));
    if (push && el) el.scrollIntoView({ behavior: 'instant' });
    else window.scrollTo({ top: push ? 0 : pos.get(keyOf()) || 0, behavior: 'instant' });
    lastKey = keyOf();
  };

  let seq = 0;
  async function go(u, push) {
    const my = ++seq;
    let html;
    try { html = await get(u); } catch (e) { location.assign(u.href); return; }
    if (my !== seq) return;
    const doc = new DOMParser().parseFromString(html, 'text/html');
    if (!doc.body || !doc.body.dataset.page) { location.assign(u.href); return; }
    await loadStyles(doc, u);
    if (my !== seq) return;
    if (push) {
      pos.set(keyOf(), scrollY);
      history.pushState({ k: newKey() }, '', u.href);
    }
    const run = () => { swap(doc, u); scrollAfter(u, push); };
    if (document.startViewTransition && !reduce) document.startViewTransition(run);
    else run();
  }
}
