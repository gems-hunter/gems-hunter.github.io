// Diem vao duy nhat cho moi trang (type="module").
import { initPage, initOnce } from './common.js';
import initHome from './main.js';
import initShop from './products.js';
import { startRouter } from './router.js';

// HTML goc cua trang dau tien (truoc khi JS sua DOM) de router dung lai khi quay ve
const initialHTML = '<!doctype html>\n' + document.documentElement.outerHTML;
const PAGES = { home: initHome, shop: initShop };

let ctl = null, cleanups = [];
function boot() {
  ctl = new AbortController();
  const init = PAGES[document.body.dataset.page];
  cleanups = [initPage(ctl.signal), init && init(ctl.signal)].filter(Boolean);
}
function teardown() {
  if (ctl) ctl.abort();
  cleanups.forEach((f) => { try { f(); } catch (e) { console.error(e); } });
  cleanups = [];
}

initOnce();
boot();
startRouter({ initialHTML, teardown, boot });
