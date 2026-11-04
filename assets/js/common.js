// Phan dung chung cho moi trang.
// initPage(signal): gan nav, drawer, hieu ung reveal vao DOM cua trang hien tai; router goi lai moi lan doi trang.
// initOnce(): nhung thu song suot ca tab (anh sang theo chuot, che do gop y).
export const $ = (s, c) => (c || document).querySelector(s);
export const $$ = (s, c) => [...(c || document).querySelectorAll(s)];
export const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
export const i18n = () => JSON.parse($('#i18n').textContent);
export const root = () => document.documentElement.dataset.root || '';

export function initPage(signal) {
  document.body.classList.remove('no-js');

  // nav: nen mo khi cuon
  const nav = $('.nav');
  const navState = () => nav.classList.toggle('scrolled', scrollY > 40);
  addEventListener('scroll', navState, { passive: true, signal });
  navState();

  // drawer menu (mobile)
  const mb = $('.menu-btn');
  const setMenu = (o) => {
    nav.classList.toggle('open', o);
    document.documentElement.classList.toggle('menu-open', o);
    mb.setAttribute('aria-expanded', o);
  };
  mb.addEventListener('click', (e) => { e.stopPropagation(); setMenu(!nav.classList.contains('open')); });
  $$('#nav-menu a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && (e.target === nav || !nav.contains(e.target))) setMenu(false);
  }, { signal });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) { setMenu(false); mb.focus(); }
  }, { signal });
  matchMedia('(min-width:901px)').addEventListener('change', (m) => { if (m.matches) setMenu(false); }, { signal });

  // reveal khi cuon toi
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  $$('.rv').forEach((el) => io.observe(el));

  return () => { io.disconnect(); setMenu(false); };
}

// che do gop y: ?feedback bat (nho trong tab), ?feedback=off tat. Xem assets/js/feedback.js
export function feedbackOn() {
  const q = new URLSearchParams(location.search);
  try {
    if (q.has('feedback')) sessionStorage.setItem('gh-feedback', q.get('feedback') === 'off' ? '0' : '1');
    return sessionStorage.getItem('gh-feedback') === '1';
  } catch (e) {
    return q.has('feedback') && q.get('feedback') !== 'off';
  }
}

export function initOnce() {
  // anh sang theo chuot: chi tren chuot that, va chi chay rAF khi con dang di chuyen
  const cl = $('.cursor-light');
  if (cl && !reduce && matchMedia('(hover:hover) and (pointer:fine)').matches) {
    let cx = innerWidth / 2, cy = innerHeight / 3, tx = cx, ty = cy, moving = false;
    const follow = () => {
      cx += (tx - cx) * 0.12; cy += (ty - cy) * 0.12;
      cl.style.transform = `translate3d(${cx}px,${cy}px,0)`;
      if (Math.abs(tx - cx) + Math.abs(ty - cy) > 0.5) requestAnimationFrame(follow); else moving = false;
    };
    addEventListener('pointermove', (e) => {
      tx = e.clientX; ty = e.clientY;
      if (!moving) { moving = true; requestAnimationFrame(follow); }
    }, { passive: true });
    cl.style.transform = `translate3d(${cx}px,${cy}px,0)`;
  }
  if (feedbackOn()) import('./feedback.js').catch((e) => console.error('[feedback]', e));
}
