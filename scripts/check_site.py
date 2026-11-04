"""Kiem tra site sau khi build:  python scripts/check_site.py
Thoat 0 va in OK khi dat; thoat 1 va liet ke loi khi khong dat."""
import pathlib, re, sys, unicodedata
from urllib.parse import unquote, urlsplit

ROOT = pathlib.Path(__file__).resolve().parent.parent
PAGES = ["index.html", "san-pham/index.html", "en/index.html", "en/products/index.html"]
VN_MARKS = {"\u0300", "\u0301", "\u0302", "\u0303", "\u0306", "\u0309", "\u0323", "\u031b"}
LOANWORDS = re.compile(r"macram[eé]", re.I)


def has_vietnamese(text):
    """Co dau tieng Viet (dau thanh, mu, moc, trang, hoac chu đ). Bo qua tu muon nhu 'macramé'."""
    t = unicodedata.normalize("NFD", LOANWORDS.sub("", text))
    return "đ" in t.lower() or any(ch in VN_MARKS for ch in t)


def brand_zone_free(h):
    h = re.sub(r"<footer.*?</footer>", "", h, flags=re.S)
    h = re.sub(r'<script type="application/ld\+json">.*?</script>', "", h, flags=re.S)
    return re.sub(r'href="https://www\.instagram\.com/p/[^"]+"', "", h)


def check():
    errors, warns = [], []
    html = {}
    for rel in PAGES:
        f = ROOT / rel
        if not f.exists():
            errors.append(f"thieu trang {rel}"); continue
        html[rel] = h = f.read_text(encoding="utf8")
        if "{{" in h:
            errors.append(f"{rel}: con placeholder {{{{...}}}}")
        for ref in re.findall(r'(?:href|src)="([^"]+)"', h) + [u.split()[0] for s in re.findall(r'srcset="([^"]+)"', h) for u in s.split(",")]:
            if re.match(r"(https?:|mailto:|#|data:)", ref):
                continue
            path = unquote(urlsplit(ref).path)
            if not path:
                continue
            target = (f.parent / path).resolve()
            if target.is_dir():
                target = target / "index.html"
            if not target.exists():
                errors.append(f"{rel}: link hong {ref}")
        if re.search(r"gems ?hunter", brand_zone_free(h), re.I):
            errors.append(f"{rel}: ten cu 'Gems Hunter' xuat hien ngoai footer")
        bad_ig = set(re.findall(r"ig\.me/m/([\w.]+)", h)) - {"_gemsland_"}
        if bad_ig:
            errors.append(f"{rel}: ig.me tro toi {bad_ig}")
    if len(html) == 4:
        n = [len(re.findall(r'<li class="item"', html[r])) for r in ("san-pham/index.html", "en/products/index.html")]
        if n[0] != n[1]:
            errors.append(f"so san pham lech VI={n[0]} EN={n[1]}")
        for rel in ("en/index.html", "en/products/index.html"):
            body = re.sub(r'data-q="[^"]*"|<script.*?</script>|<footer.*?</footer>|<a [^>]*lang="vi"[^>]*>.*?</a>|Hà Nội|Nghệ An|Lục Yên|Yên Bái|Thanh Hóa', "", html[rel], flags=re.S)
            body = re.sub(r"<[^>]+>", " ", body)
            hits = sorted({w for w in body.split() if has_vietnamese(w)})
            if hits:
                warns.append(f"{rel}: con chu tieng Viet: {hits[:8]}")
    return errors, warns


if __name__ == "__main__":
    errors, warns = check()
    for w in warns:
        print("CANH BAO:", w)
    for e in errors:
        print("LOI:", e)
    if errors:
        sys.exit(1)
    print("OK")
