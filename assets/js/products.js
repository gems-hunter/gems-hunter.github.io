// Trang san pham: loc, tim kiem, lightbox. init(signal) tra ve ham don dep (router goi khi roi trang).
import { $, $$, i18n, withFeedback } from './common.js';

export default function initShop(signal) {
  const I18N = i18n();
  let leaving = false;
  // giu history.state cua router (vi tri cuon) khi doi URL tai cho
  const setURL = (u) => history.replaceState(history.state, '', u);

  // loc san pham
  const items = $$('.item'), PAGE = 24;
  let shown = PAGE;
  // trang rieng cua mot loai da (/san-pham/<loai-da>/): danh sach chi co loai do, chip loai da la link sang trang khac
  const stonePage = document.body.dataset.stone || '';
  const state = { type: '', stone: stonePage, q: '' };
  const norm = (s) => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd');
  const countEl = $('#count'), more = $('#more'), empty = $('#empty');

  // doc bo loc tu URL (?loai=...&da=...) de chia se duoc link
  const qs = new URLSearchParams(location.search);
  if (qs.get('loai')) state.type = qs.get('loai');
  if (qs.get('da') && !stonePage) state.stone = qs.get('da');
  if (qs.get('q')) state.q = qs.get('q');

  const sync = () => {
    $$('[data-f-stone]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.fStone === state.stone));
    $('#type').value = state.type; $('#q').value = state.q;
  };
  const apply = (resetPage) => {
    if (resetPage) shown = PAGE;
    const words = norm(state.q).trim().split(/\s+/).filter(Boolean);
    let n = 0;
    items.forEach((li) => {
      const ok = (!state.type || li.dataset.type === state.type) && (!state.stone || li.dataset.stone === state.stone)
        && words.every((w) => li.dataset.q.indexOf(w) > -1);
      li.dataset.match = ok ? '1' : '0';
      if (ok) n++;
      li.hidden = !ok || (ok && n > shown);
    });
    countEl.textContent = n === 1 ? I18N.count_one : I18N.count.replace('{n}', n);
    more.hidden = n <= shown; empty.hidden = n > 0;
    const p = new URLSearchParams();
    if (state.type) p.set('loai', state.type); if (state.stone && !stonePage) p.set('da', state.stone); if (state.q) p.set('q', state.q);
    setURL(location.pathname + withFeedback(p.toString() ? '?' + p : '') + location.hash);
  };
  // trang tat ca: loc tai cho (chip co href van de Google lan theo); trang loai da: de link chuyen trang
  $$('[data-f-stone]').forEach((b) => b.addEventListener('click', (ev) => {
    if (stonePage) return;
    ev.preventDefault(); state.stone = b.dataset.fStone; sync(); apply(true);
  }));
  $('#type').addEventListener('change', (e) => { state.type = e.target.value; apply(true); });
  let t; $('#q').addEventListener('input', (e) => { clearTimeout(t); t = setTimeout(() => { state.q = e.target.value; apply(true); }, 160); });
  more.addEventListener('click', () => { shown += PAGE; apply(false); });
  sync(); apply(true);

  // lightbox
  const lb = $('#lb');
  const openItem = (li) => {
    const img = $('img', li), card = $('.pcard', li);
    $('#lb-img').src = img.src.replace('-480.webp', '-960.webp'); $('#lb-img').alt = img.alt;
    $('#lb-name').textContent = $('h3', card).textContent;
    $('#lb-meta').textContent = $('.meta', card).textContent;
    $('#lb-badges').innerHTML = $('.badges', card).innerHTML;
    const d = $('.desc', card); $('#lb-desc').textContent = d ? d.textContent : ''; $('#lb-desc').hidden = !d;
    $('#lb-acts').innerHTML = $('.acts', card).innerHTML;
    const ll = $('#lb-lang'); ll.href = ll.href.split('#')[0] + '#' + li.id;
    if (lb.showModal) lb.showModal(); else lb.setAttribute('open', '');
    setURL(location.pathname + location.search + '#' + li.id);
  };
  $$('[data-open]').forEach((b) => b.addEventListener('click', () => openItem(b.closest('.item'))));
  const close = () => (lb.close ? lb.close() : lb.removeAttribute('open'));
  $('[data-close]', lb).addEventListener('click', close);
  lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
  lb.addEventListener('close', () => { if (!leaving) setURL(location.pathname + location.search); });

  // mo san pham tu link #sp-xxx
  let openT;
  if (location.hash.indexOf('#sp-') === 0) {
    const li = document.getElementById(location.hash.slice(1));
    if (li) { li.hidden = false; openT = setTimeout(() => openItem(li), 300); }
  }

  // chuyen VI/EN: giu #sp-<ma> de sang ban kia van mo dung mon dang xem
  $$('[data-lang-switch]').forEach((a) => a.addEventListener('click', () => {
    if (location.hash.indexOf('#sp-') === 0) a.href = a.href.split('#')[0] + location.hash;
  }));

  return () => {
    leaving = true; clearTimeout(t); clearTimeout(openT);
    if (lb.open) close();
  };
}
