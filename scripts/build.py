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


def alternates(page):
    """Cac the hreflang cua mot trang (giong het nhau o moi ban ngon ngu)."""
    tags = [f'<link rel="alternate" hreflang="{l}" href="{SITE_URL}{LANGS[l][page]}">' for l in LANGS]
    tags.append(f'<link rel="alternate" hreflang="x-default" href="{SITE_URL}{LANGS["vi"][page]}">')
    return "\n".join(tags)


def lang_switch(page, lang, root):
    """Nut VI · EN tren nav; link sang ban kia co data-lang-switch de JS giu #sp-..."""
    S = strings(lang)
    parts = []
    for l in LANGS:
        href = link(root, LANGS[l][page])
        if l == lang:
            parts.append(f'<a href="{href}" lang="{l}" aria-current="true">{l.upper()}</a>')
        else:
            parts.append(f'<a href="{href}" hreflang="{l}" lang="{l}" data-lang-switch>{l.upper()}</a>')
    return f'<nav class="lang" aria-label="{html.escape(S["nav.lang"])}">' + "".join(parts) + "</nav>"


def common_extra(lang, page, root):
    L = LANGS[lang]
    extra = {"SITE_URL": SITE_URL, "CANONICAL": SITE_URL + L[page],
             "HOME": link(root, L["home"]), "PRODUCTS": link(root, L["products"]),
             "ALTERNATES": alternates(page), "LANG_SWITCH": lang_switch(page, lang, root)}
    other = next(l for l in LANGS if l != lang)
    extra["OTHER_LANG"], extra["OTHER_PAGE"] = other, link(root, LANGS[other][page])
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
OTHER_STONE = "Đá khác"


def key_of(label):
    """'Thạch anh tím' -> 'thach-anh-tim' (khoa trong nhom types./stones. cua tu dien)."""
    return re.sub(r"[^a-z0-9]+", "-", slug_text(label)).strip("-")


def label(S, group, vi_value):
    k = f"{group}.{key_of(vi_value)}"
    if k not in S:
        print(f"  ! thieu nhan {k} trong i18n, dung tam '{vi_value}'")
    return S.get(k, vi_value)


def load_en():
    f = ROOT / "data" / "products.en.json"
    return json.loads(f.read_text(encoding="utf8")) if f.exists() else {}


BRAND_RX = re.compile(r"gems ?land|gemshunter", re.I)


def one_brand(text):
    """Caption cu goi tiem la Gemsland; website chi dung mot ten Gems Hunter."""
    return BRAND_RX.sub("Gems Hunter", text or "")


def localize(p, lang, en_data, S):
    q = dict(p)
    q["name"], q["desc"] = one_brand(p["name"]), one_brand(p.get("desc", ""))
    stone = p.get("stone") or OTHER_STONE
    q.update(vi_name=q["name"], vi_type=label(strings("vi"), "types", p["type"]),
             vi_stone=p.get("stone") or "",
             type_label=label(S, "types", p["type"]), stone_label=label(S, "stones", stone),
             has_stone=bool(p.get("stone")))
    if lang == "en":
        tr = en_data.get(p["id"])
        if tr and tr.get("name"):
            q["name"], q["desc"] = tr["name"], tr.get("desc", "")
            if p.get("desc") and not tr.get("desc"):
                q["_missing_en_desc"] = True
        else:
            q["_missing_en"] = True
    return q


def card(p, i, lang, S, root):
    e = html.escape
    pid = e(p["id"])
    t, st = p["type_label"], p["stone_label"]
    shown_stone = st if p["has_stone"] else ""
    alt = e(f'{p["name"]} — {t.lower()}{" " + shown_stone if shown_stone else ""} | Gems Hunter')
    search = e(search_text(p["name"], p["vi_name"], shown_stone, p["vi_stone"], t, p["vi_type"], p.get("desc", "")[:120]))
    sold = p["status"] == "sold"
    badges = f'<span class="chip">{e(shown_stone)}</span>' if shown_stone else ""
    if sold:
        badges += f'<span class="chip sold">{e(S["shop.sold"])}</span>'
    desc = f'<p class="desc">{e(p["desc"])}</p>' if p.get("desc") else ""
    eager = 'fetchpriority="high"' if i < 4 else 'loading="lazy"'
    img = f"{root}assets/img/products/{pid}"
    ask = S["shop.ask_similar"] if sold else S["shop.ask_available"]
    return f"""<li class="item" id="sp-{pid}" data-type="{e(t)}" data-stone="{e(st)}" data-q="{search}">
  <article class="pcard">
    <button class="media" type="button" data-open aria-label="{e(S['shop.zoom'])}: {e(p['name'])}">
      <img src="{img}-480.webp" srcset="{img}-480.webp 480w, {img}-960.webp 960w" sizes="(max-width:700px) 50vw, (max-width:1100px) 33vw, 25vw" width="480" height="600" alt="{alt}" {eager} decoding="async">
      <span class="badges">{badges}</span>
    </button>
    <div class="body">
      <p class="meta">{e(t)}{" · " + e(shown_stone) if shown_stone else ""}</p>
      <h3>{e(p["name"])}</h3>
      {desc}
      <div class="acts">
        <a class="btn sm" href="https://ig.me/m/_gems.hunter_" rel="nofollow">{e(ask)}</a>
        <a class="ig" href="{e(p["permalink"])}" rel="nofollow noopener" target="_blank" aria-label="{e(S['shop.ig_post'])}">Instagram ↗</a>
      </div>
    </div>
  </article>
</li>"""


def product_items():
    data = json.loads((ROOT / "data" / "products.json").read_text(encoding="utf8"))
    items = [p for p in data if p.get("is_product")]
    for p in items:
        src = ROOT / p["image"]
        save_webp(src, PIMG / f'{p["id"]}-480.webp', 600, 78)
        save_webp(src, PIMG / f'{p["id"]}-960.webp', 1200, 80)
    return items


def build_products(lang):
    S, path = strings(lang), LANGS[lang]["products"]
    root = root_for(path)
    en_data = load_en()
    items = [localize(p, lang, en_data, S) for p in product_items()]
    missing = sum(1 for p in items if p.get("_missing_en"))
    if missing:
        print(f"  ! thieu ban dich EN: {missing} san pham")
    no_desc = sum(1 for p in items if p.get("_missing_en_desc"))
    if no_desc:
        print(f"  ! thieu mo ta EN (co ten, chua co desc): {no_desc} san pham")
    e = html.escape
    types, stones = {}, {}
    for p in items:
        types[p["type_label"]] = types.get(p["type_label"], 0) + 1
        stones[p["stone_label"]] = stones.get(p["stone_label"], 0) + 1
    other = label(S, "stones", OTHER_STONE)
    order = sorted((k for k in stones if k != other), key=lambda k: (-stones[k], k)) + ([other] if other in stones else [])
    chips = "".join(f'<button type="button" class="fchip" data-f-stone="{e(st)}" aria-pressed="false">{e(st)} <span>{stones[st]}</span></button>' for st in order)
    type_labels = [label(S, "types", x) for x in TYPE_ORDER]
    type_opts = "".join(f'<option value="{e(t)}">{e(t)} ({types[t]})</option>' for t in type_labels if t in types)
    n, ns = len(items), len([k for k in stones if k != other])
    url = f"{SITE_URL}{path}"
    ld = {"@context": "https://schema.org", "@type": "CollectionPage", "name": S["shop.og_title"],
          "url": url, "inLanguage": S["meta.lang"],
          "breadcrumb": {"@type": "BreadcrumbList", "itemListElement": [
              {"@type": "ListItem", "position": 1, "name": S["nav.home"], "item": SITE_URL + LANGS[lang]["home"]},
              {"@type": "ListItem", "position": 2, "name": S["nav.products"], "item": url}]},
          "mainEntity": {"@type": "ItemList", "numberOfItems": n, "itemListElement": [
              {"@type": "ListItem", "position": i + 1, "url": f'{url}#sp-{p["id"]}', "name": p["name"],
               "image": f'{SITE_URL}/assets/img/products/{p["id"]}-960.webp'} for i, p in enumerate(items)]}}
    extra = common_extra(lang, "products", root)
    extra.update({
        "DESCRIPTION": e(S["shop.description"].replace("{n}", str(n))),
        "LEDE": S["shop.lede"].replace("{n}", str(n)).replace("{s}", str(ns)),
        "COUNT": str(n), "COUNT_TEXT": e(S["js.count_one"] if n == 1 else S["js.count"].replace("{n}", str(n))),
        "STONE_CHIPS": chips, "TYPE_OPTIONS": type_opts,
        "CARDS": "\n".join(card(p, i, lang, S, root) for i, p in enumerate(items)),
        "JSONLD": json.dumps(ld, ensure_ascii=False), "JS": i18n.js_payload(S),
    })
    tpl = (TPL / "products.html").read_text(encoding="utf8")
    write_page(path, i18n.render(tpl, S, root, extra))
    print(f"  {path}: {n} san pham, {len(stones)} loai da")
    return n


def build_seo_files():
    today = date.today().isoformat()
    xml = ['<?xml version="1.0" encoding="UTF-8"?>',
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">']
    for page in ("home", "products"):
        for lang in LANGS:
            xml.append(f"  <url><loc>{SITE_URL}{LANGS[lang][page]}</loc><lastmod>{today}</lastmod>")
            for l in LANGS:
                xml.append(f'    <xhtml:link rel="alternate" hreflang="{l}" href="{SITE_URL}{LANGS[l][page]}"/>')
            xml.append("  </url>")
    xml.append("</urlset>")
    (ROOT / "sitemap.xml").write_text("\n".join(xml) + "\n", encoding="utf8")
    (ROOT / "robots.txt").write_text(f"User-agent: *\nAllow: /\nDisallow: /scripts/\nDisallow: /data/\nDisallow: /i18n/\n\nSitemap: {SITE_URL}/sitemap.xml\n", encoding="utf8")


if __name__ == "__main__":
    print("Anh trang chu..."); build_home_images()
    print("Trang chu VI/EN..."); [build_home(l) for l in LANGS]
    print("Trang san pham VI/EN..."); [build_products(l) for l in LANGS]
    print("Sitemap/robots..."); build_seo_files()
    print("Xong.")
