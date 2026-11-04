"""Build tinh cho website Gems Land (thuan HTML/CSS/JS).

Chay:  python scripts/build.py
- Tao anh webp cho trang chu (assets/img/*.webp) tu anh goc Instagram
- Tao anh webp cho tung san pham (assets/img/products/<id>-480.webp, -960.webp)
- Sinh trang san pham tinh: san-pham/index.html (moi san pham deu nam san trong HTML -> tot cho SEO)
- Sinh sitemap.xml va robots.txt

Du lieu san pham: data/products.json (tao bang scripts/extract_products.py, co the sua tay).
"""
import html, json, pathlib, re, sys, unicodedata
from datetime import date
from urllib.parse import quote
from PIL import Image, ImageOps

SITE_URL = "https://gems-hunter.github.io"
ROOT = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))
from scripts import i18n  # noqa: E402

TPL = ROOT / "scripts" / "templates"
# moi ngon ngu: duong dan URL cua tung trang (tinh tu goc site)
LANGS = {
    "vi": {"home": "/", "products": "/san-pham/"},
    "en": {"home": "/en/", "products": "/en/products/"},
}


def root_for(path):
    """Tien to tuong doi tu trang `path` ve goc site: "/" -> "", "/en/" -> "../"."""
    return "../" * path.strip("/").count("/") + ("../" if path.strip("/") else "")


def page_file(path):
    return ROOT / path.strip("/") / "index.html" if path.strip("/") else ROOT / "index.html"


def link(root, path):
    return root + path.lstrip("/") or "./"


_STRINGS = {}


def strings(lang):
    if not _STRINGS:
        vi, en = i18n.load_strings("vi"), i18n.load_strings("en")
        i18n.check_parity(vi, en)
        _STRINGS.update(vi=vi, en=en)
    return _STRINGS[lang]


def common_extra(lang, page, root):
    L = LANGS[lang]
    extra = {"SITE_URL": SITE_URL, "CANONICAL": SITE_URL + L[page],
             "HOME": link(root, L["home"]), "PRODUCTS": link(root, L["products"])}
    footer = (TPL / "footer.html").read_text(encoding="utf8")
    extra["FOOTER"] = i18n.render(footer, strings(lang), root, extra)
    return extra


def write_page(path, html_text):
    out = page_file(path)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(html_text, encoding="utf8")
    return out


def build_home(lang):
    S, path = strings(lang), LANGS[lang]["home"]
    root = root_for(path)
    extra = common_extra(lang, "home", root)
    hero, picker = S["js.hero"], S["js.picker"]
    e = html.escape
    tab_lines = []
    for i, p in enumerate(picker):
        sel = "true" if i == 0 else "false"
        ti = "" if i == 0 else ' tabindex="-1"'
        tab_lines.append(f'    <button role="tab" aria-selected="{sel}"{ti} data-k="{i}">{e(p["tab"])}</button>')
    tabs = "\n".join(tab_lines)
    ld = {"@context": "https://schema.org", "@type": "JewelryStore", "name": "Gems Hunter",
          "url": f"{SITE_URL}{path}", "inLanguage": S["meta.lang"],
          "logo": f"{SITE_URL}/assets/img/logo-hunter.webp", "image": f"{SITE_URL}/assets/img/og.jpg",
          "description": S["meta.ld_description"], "areaServed": S["meta.ld_area"],
          "paymentAccepted": S["meta.ld_payment"],
          "sameAs": ["https://www.instagram.com/_gems.hunter_/", "https://www.instagram.com/_gemsland_/",
                     "https://www.threads.net/@_gemsland_"]}
    raw_type = S["types.da-tho"] if "types.da-tho" in S else ("Đá thô" if lang == "vi" else "Raw stone")
    extra.update({
        "HERO_NAME": e(hero[0][0]), "HERO_DESC": e(hero[0][1]), "PICKER_TABS": tabs,
        "PK_RAW_ALT": e(picker[0]["raw_alt"]), "PK_MADE_ALT": e(picker[0]["made_alt"]),
        "PK_RAW_LABEL": e(picker[0]["raw_label"]), "PK_MADE_LABEL": e(picker[0]["made_label"]),
        "PK_SAY": e(picker[0]["say"]), "RAW_TYPE_Q": quote(raw_type),
        "JSONLD": json.dumps(ld, ensure_ascii=False), "JS": i18n.js_payload(S),
    })
    tpl = (TPL / "home.html").read_text(encoding="utf8")
    return write_page(path, i18n.render(tpl, S, root, extra))
IG = ROOT / "assets" / "instagram"
IMG = ROOT / "assets" / "img"
PIMG = IMG / "products"

# anh trang chu: ten file webp -> ma bai viet Instagram (hoac file trong assets/img-src)
HOME_IMAGES = {
    "aqua-necklace-book": "DTMIgdzkqWE", "aqua-ring": "DZJ5NHtEheu", "black-opal": "DfOYBCakubW",
    "moonstone-bracelet": "DfL_Ia2kgHb", "rose-quartz": "De1LNX_lDz9", "moonstone-heart": "DejaEo1lFYV",
    "aqua-wire": "Dd6QYw0kr9E", "eth-opal": "DbsnMKHpE4O", "aqua-raw": "Da-L54OApjI",
    "amethyst-bracelet-book": "DazA6BnD0iu", "aqua-macrame": "DZg0z-kD9bl", "clear-quartz-bracelet": "DXlU_WRFM9N",
    "citrine-pendant": "DXYrwyCFBok", "opals": "DXJIQ7AlJtL",
    "h-agate": "DPSq4aqEsW1", "h-clusters": "DMzd5pDy05l", "h-hanoi-table": "DMeqZ7hSPVx",
    "h-clear-quartz": "DMemgNcyFrr", "h-citrine-raw": "DMcU7RfyVC6", "h-fluorite": "DMMDlwESngU",
    "h-amethyst": "DMCeLhtP-wa", "h-agate-ringbox": "DL9ZY5ByLrX",
    "logo-gemsland": "img-src/logo-gemsland.jpg", "logo-hunter": "img-src/logo-hunter.jpg",
}

def find_post(code):
    hits = list(IG.glob(f"*/posts/*_{code}.jpg"))
    return hits[0] if hits else None

def save_webp(src, dst, longest, quality=80):
    if dst.exists() and dst.stat().st_mtime >= src.stat().st_mtime:
        return
    im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
    im.thumbnail((longest, longest), Image.LANCZOS)
    dst.parent.mkdir(parents=True, exist_ok=True)
    im.save(dst, "WEBP", quality=quality, method=6)

def build_home_images():
    for name, ref in HOME_IMAGES.items():
        src = ROOT / "assets" / ref if ref.startswith("img-src/") else find_post(ref)
        if not src or not src.exists():
            print("  ! thieu anh", name, ref); continue
        save_webp(src, IMG / f"{name}.webp", 1200)
    og = IMG / "og.jpg"
    src = find_post(HOME_IMAGES["aqua-macrame"])
    if src and not og.exists():
        im = ImageOps.fit(Image.open(src).convert("RGB"), (1200, 630), Image.LANCZOS, centering=(0.5, 0.45))
        im.save(og, "JPEG", quality=85)

def slug_text(s):
    s = unicodedata.normalize("NFD", s.lower()).replace("đ", "d")
    return "".join(ch for ch in s if unicodedata.category(ch) != "Mn")

ALIASES = {"silver": "bạc", "ring": "nhẫn", "necklace": "vòng cổ dây chuyền", "bracelet": "vòng tay",
           "earring": "bông tai khuyên tai", "pendant": "mặt dây", "crystal": "tinh thể", "raw": "thô",
           "cluster": "cụm thô", "macrame": "dây thắt", "heart": "trái tim"}

def search_text(*parts):
    t = " ".join(parts)
    extra = " ".join(v for k, v in ALIASES.items() if k in t.lower())
    return slug_text(t + " " + extra)

TYPE_ORDER = ["Vòng cổ", "Vòng tay", "Nhẫn", "Bông tai", "Mặt dây", "Đá thô", "Trang sức"]
TYPE_LABEL = {"Trang sức": "Trang sức khác"}
OTHER_STONE = "Đá khác"

def card(p, i):
    e = html.escape
    pid = e(p["id"])
    stone = p.get("stone") or ""
    t = TYPE_LABEL.get(p["type"], p["type"])
    alt = e(f'{p["name"]} — {t.lower()}{" " + stone if stone else ""} | Gems Land')
    search = e(search_text(p["name"], stone, t, p.get("desc", "")[:120]))
    sold = p["status"] == "sold"
    badges = f'<span class="chip">{e(stone)}</span>' if stone else ""
    if sold:
        badges += '<span class="chip sold">Đã có chủ</span>'
    desc = f'<p class="desc">{e(p["desc"])}</p>' if p.get("desc") else ""
    eager = 'fetchpriority="high"' if i < 4 else 'loading="lazy"'
    return f'''<li class="item" id="sp-{pid}" data-type="{e(t)}" data-stone="{e(stone or OTHER_STONE)}" data-q="{search}">
  <article class="pcard">
    <button class="media" type="button" data-open aria-label="Xem lớn: {e(p["name"])}">
      <img src="../assets/img/products/{pid}-480.webp" srcset="../assets/img/products/{pid}-480.webp 480w, ../assets/img/products/{pid}-960.webp 960w" sizes="(max-width:700px) 50vw, (max-width:1100px) 33vw, 25vw" width="480" height="600" alt="{alt}" {eager} decoding="async">
      <span class="badges">{badges}</span>
    </button>
    <div class="body">
      <p class="meta">{e(t)}{" · " + e(stone) if stone else ""}</p>
      <h3>{e(p["name"])}</h3>
      {desc}
      <div class="acts">
        <a class="btn sm" href="https://ig.me/m/_gemsland_" rel="nofollow">{"Hỏi món tương tự" if sold else "Hỏi còn hàng"}</a>
        <a class="ig" href="{e(p["permalink"])}" rel="nofollow noopener" target="_blank" aria-label="Xem bài gốc trên Instagram">Instagram ↗</a>
      </div>
    </div>
  </article>
</li>'''

def build_products():
    data = json.load(open(ROOT / "data" / "products.json", encoding="utf8"))
    items = [p for p in data if p.get("is_product")]
    for p in items:
        src = ROOT / p["image"]
        save_webp(src, PIMG / f'{p["id"]}-480.webp', 600, 78)
        save_webp(src, PIMG / f'{p["id"]}-960.webp', 1200, 80)
        with Image.open(PIMG / f'{p["id"]}-480.webp') as im:
            p["_w"], p["_h"] = im.size
    types = {}
    stones = {}
    for p in items:
        t = TYPE_LABEL.get(p["type"], p["type"]); types[t] = types.get(t, 0) + 1
        st = p.get("stone") or OTHER_STONE; stones[st] = stones.get(st, 0) + 1
    order = sorted((k for k in stones if k != OTHER_STONE), key=lambda k: -stones[k]) + ([OTHER_STONE] if OTHER_STONE in stones else [])
    stone_chips = "".join(
        f'<button type="button" class="fchip" data-f-stone="{html.escape(st)}" aria-pressed="false">{html.escape(st)} <span>{stones[st]}</span></button>'
        for st in order)
    type_opts = "".join(f'<option value="{html.escape(t)}">{html.escape(t)} ({types[t]})</option>'
                        for t in [TYPE_LABEL.get(x, x) for x in TYPE_ORDER] if t in types)
    cards = "\n".join(card(p, i) for i, p in enumerate(items))
    cards = re.sub(r'width="480" height="600"', lambda m: m.group(0), cards)
    ld = {
        "@context": "https://schema.org", "@type": "CollectionPage", "name": "Sản phẩm — Gems Land",
        "url": f"{SITE_URL}/san-pham/", "inLanguage": "vi",
        "breadcrumb": {"@type": "BreadcrumbList", "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Trang chủ", "item": f"{SITE_URL}/"},
            {"@type": "ListItem", "position": 2, "name": "Sản phẩm", "item": f"{SITE_URL}/san-pham/"}]},
        "mainEntity": {"@type": "ItemList", "numberOfItems": len(items), "itemListElement": [
            {"@type": "ListItem", "position": i + 1, "url": f'{SITE_URL}/san-pham/#sp-{p["id"]}', "name": p["name"],
             "image": f'{SITE_URL}/assets/img/products/{p["id"]}-960.webp'} for i, p in enumerate(items)]},
    }
    tpl = (ROOT / "scripts" / "san-pham.template.html").read_text(encoding="utf8")
    out = (tpl.replace("{{COUNT}}", str(len(items)))
              .replace("{{STONE_COUNT}}", str(len([k for k in stones if k != OTHER_STONE])))
              .replace("{{STONE_CHIPS}}", stone_chips)
              .replace("{{TYPE_OPTIONS}}", type_opts)
              .replace("{{CARDS}}", cards)
              .replace("{{SITE_URL}}", SITE_URL)
              .replace("{{JSONLD}}", json.dumps(ld, ensure_ascii=False)))
    (ROOT / "san-pham").mkdir(exist_ok=True)
    (ROOT / "san-pham" / "index.html").write_text(out, encoding="utf8")
    print(f"  san-pham/index.html: {len(items)} san pham, {len(stones)} loai da")

def build_seo_files():
    today = date.today().isoformat()
    urls = ["/", "/san-pham/"]
    xml = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for u in urls:
        xml.append(f"  <url><loc>{SITE_URL}{u}</loc><lastmod>{today}</lastmod></url>")
    xml.append("</urlset>")
    (ROOT / "sitemap.xml").write_text("\n".join(xml) + "\n", encoding="utf8")
    (ROOT / "robots.txt").write_text(f"User-agent: *\nAllow: /\nDisallow: /scripts/\nDisallow: /data/\n\nSitemap: {SITE_URL}/sitemap.xml\n", encoding="utf8")

if __name__ == "__main__":
    print("Anh trang chu..."); build_home_images()
    print("Trang chu VI/EN..."); [build_home(l) for l in LANGS]
    print("Trang san pham..."); build_products()
    print("Sitemap/robots..."); build_seo_files()
    print("Xong.")
