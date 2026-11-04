// Trang chu. init(signal) gan moi hieu ung vao DOM hien tai va tra ve ham don dep (router goi khi roi trang).
import { $, $$, reduce, i18n, root } from './common.js';

export default function initHome(signal) {
  const I18N = i18n(), ROOT = root();
  const cleanups = [];
  const on = (t, ev, fn, o) => t.addEventListener(ev, fn, { ...o, signal });

  // stars: ve tinh mot lan len 2 lop canvas; nhap nhay bang CSS opacity (GPU), khong ve lai moi khung hinh
  const cv = $('#stars'), layers = [cv], dpr = Math.min(devicePixelRatio || 1, 1.5);
  let lastW = 0;
  const c2 = cv.cloneNode(); c2.removeAttribute('id'); c2.className = 'stars-l';
  cv.after(c2); layers.push(c2); cv.classList.add('stars-l');
  const size = () => {
    const r = cv.getBoundingClientRect(), w = Math.round(r.width);
    if (!w || w === lastW) return; lastW = w;
    const n = Math.round(r.width * r.height / 9000);
    layers.forEach((c) => {
      c.width = r.width * dpr; c.height = r.height * dpr;
      const x = c.getContext('2d'); x.fillStyle = '#dff6ff';
      for (let i = 0; i < n / 2; i++) {
        x.globalAlpha = 0.45 + Math.random() * 0.55; x.beginPath();
        x.arc(Math.random() * c.width, Math.random() * c.height, (Math.random() * 1.2 + 0.3) * dpr, 0, 6.283); x.fill();
      }
    });
  };
  let rz; size();
  on(window, 'resize', () => { clearTimeout(rz); rz = setTimeout(size, 150); });

  // tam dung animation CSS cua phan dang nam ngoai man hinh (marquee, orb, seal, moon...)
  const offIO = new IntersectionObserver((es) => es.forEach((e) => e.target.classList.toggle('off', !e.isIntersecting)), { rootMargin: '100px 0px' });
  $$('.hero, .marquee, .about, .cta').forEach((el) => offIO.observe(el));
  cleanups.push(() => offIO.disconnect());

  // hero crossfade + tag
  const names = I18N.hero, imgs = $$('[data-fade] img');
  let k = 0, timer = null;
  const next = () => {
    imgs[k].classList.remove('on'); k = (k + 1) % imgs.length; imgs[k].classList.add('on');
    $('[data-name]').textContent = names[k][0]; $('[data-desc]').textContent = names[k][1];
  };
  const go = () => { if (!reduce && !timer) timer = setInterval(next, 5200); };
  const stop = () => { clearInterval(timer); timer = null; };
  on(document, 'visibilitychange', () => (document.hidden ? stop() : go()));
  go(); cleanups.push(stop);

  // word reveal
  const st = $('[data-words]');
  (function split(node) {
    [...node.childNodes].forEach((n) => {
      if (n.nodeType === 3) {
        const f = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach((w) => {
          if (!w) return;
          if (/^\s+$/.test(w)) f.appendChild(document.createTextNode(w));
          else { const s = document.createElement('span'); s.className = 'w'; s.textContent = w; f.appendChild(s); }
        });
        node.replaceChild(f, n);
      } else split(n);
    });
  })(st);
  const words = $$('.w', st);
  let litNow = -1;

  // chapters pinned rail + parallax: do vi tri mot lan, moi khung hinh chi ghi transform
  const chap = $('.chapters'), rail = $('.rail', chap), bar = $('.bar i', chap);
  const pars = $$('[data-par]').map((el) => ({ el, k: parseFloat(el.dataset.par), fl: el.classList.contains('fl'), vis: false, mid: 0 }));
  const parIO = new IntersectionObserver((es) => es.forEach((e) => {
    const p = pars.find((o) => o.el === e.target); if (p) p.vis = e.isIntersecting;
  }), { rootMargin: '200px 0px' });
  pars.forEach((p) => parIO.observe(p.el));
  cleanups.push(() => parIO.disconnect());
  let railDist = 0, chapTop = 0, chapH = 0, stTop = 0, stH = 0, vw = innerWidth, vh = innerHeight;
  const measure = () => {
    vw = innerWidth; vh = innerHeight; const y = scrollY;
    pars.forEach((p) => {
      const t = p.el.style.transform; p.el.style.transform = '';
      const b = p.el.getBoundingClientRect(); p.mid = b.top + y + b.height / 2; p.el.style.transform = t;
    });
    const cr = chap.getBoundingClientRect(); chapTop = cr.top + y; chapH = cr.height; railDist = rail.scrollWidth - vw;
    const r = st.getBoundingClientRect(); stTop = r.top + y; stH = r.height;
  };
  let ticking = false;
  const frame = () => {
    ticking = false; const y = scrollY;
    // words: chi doi class khi so tu sang thay doi
    let p = (vh * 0.85 - (stTop - y)) / (stH + vh * 0.35); p = Math.max(0, Math.min(1, p));
    const lit = reduce ? words.length : Math.round(p * words.length);
    if (lit !== litNow) {
      const a = Math.min(lit, litNow < 0 ? 0 : litNow), b = Math.max(lit, litNow < 0 ? words.length : litNow);
      for (let i = a; i < b; i++) words[i].classList.toggle('lit', i < lit);
      litNow = lit;
    }
    if (vw > 900) {
      const q = Math.max(0, Math.min(1, (y - chapTop) / (chapH - vh)));
      rail.style.transform = `translate3d(${(-q * railDist).toFixed(1)}px,0,0)`; bar.style.transform = `scaleX(${q.toFixed(4)})`;
    }
    if (!reduce) pars.forEach((o) => {
      if (!o.vis) return;
      if (vw <= 900 && o.fl) { if (o.el.style.transform) o.el.style.transform = ''; return; }
      o.el.style.transform = `translate3d(0,${((o.mid - y - vh / 2) * o.k).toFixed(1)}px,0)`;
    });
  };
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(frame); } };
  let mz; const onResize = () => { clearTimeout(mz); mz = setTimeout(() => { measure(); frame(); }, 120); };
  on(window, 'scroll', onScroll, { passive: true });
  on(window, 'resize', onResize);
  // do lai khi chieu cao trang doi (anh, font tai xong...)
  if (window.ResizeObserver) { const ro = new ResizeObserver(onResize); ro.observe(document.body); cleanups.push(() => ro.disconnect()); }
  measure(); frame();
  cleanups.push(() => { clearTimeout(mz); clearTimeout(rz); });

  // picker: anh + mau cua tung loai da; chu (alt, nhan) lay tu I18N.picker cung thu tu
  const img = (n) => `${ROOT}assets/img/${n}.webp`;
  const data = [
    { g: '#7FD6E2', raw: 'aqua-raw', made: 'aqua-ring' },
    { g: '#B79BFF', raw: 'h-amethyst', made: 'amethyst-bracelet-book' },
    { g: '#F2B95A', raw: 'h-citrine-raw', made: 'citrine-pendant' },
    { g: '#DDE8F2', raw: 'h-clear-quartz', made: 'clear-quartz-bracelet' },
    { g: '#FF9FD0', raw: 'opals', made: 'black-opal' },
  ].map((d, i) => {
    const t = I18N.picker[i];
    return { g: d.g, raw: [img(d.raw), t.raw_alt, t.raw_label], made: [img(d.made), t.made_alt, t.made_label] };
  });
  const tabs = $$('.chips [role=tab]'), duo = $('.duo'), picker = $('.picker');
  data.forEach((d) => [d.raw[0], d.made[0]].forEach((s) => { const i = new Image(); i.src = s; }));
  let swapT;
  const pick = (i, focus) => {
    tabs.forEach((t, j) => { t.setAttribute('aria-selected', j === i); t.tabIndex = j === i ? 0 : -1; });
    if (focus) tabs[i].focus();
    const d = data[i]; picker.style.setProperty('--glow', d.g); duo.style.setProperty('--glow', d.g);
    duo.classList.add('swap');
    clearTimeout(swapT);
    swapT = setTimeout(() => {
      $('#d-raw').src = d.raw[0]; $('#d-raw').alt = d.raw[1]; $('#l-raw').textContent = d.raw[2];
      $('#d-made').src = d.made[0]; $('#d-made').alt = d.made[1]; $('#l-made').textContent = d.made[2];
      duo.classList.remove('swap');
    }, reduce ? 0 : 420);
  };
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => pick(i));
    t.addEventListener('keydown', (e) => {
      let n = null;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') n = (i + 1) % tabs.length;
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') n = (i - 1 + tabs.length) % tabs.length;
      if (e.key === 'Home') n = 0; if (e.key === 'End') n = tabs.length - 1;
      if (n !== null) { e.preventDefault(); pick(n, true); }
    });
  });
  cleanups.push(() => clearTimeout(swapT));

  return () => cleanups.forEach((f) => f());
}
