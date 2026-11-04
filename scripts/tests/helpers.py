import re, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent.parent


def page(rel):
    return (ROOT / rel).read_text(encoding="utf8")


def strip_allowed_brand_zones(h):
    """Bo footer va JSON-LD: hai vung duoc phep nhac ten cu Gems Hunter."""
    h = re.sub(r"<footer.*?</footer>", "", h, flags=re.S)
    return re.sub(r'<script type="application/ld\+json">.*?</script>', "", h, flags=re.S)


def igme_targets(h):
    return set(re.findall(r"ig\.me/m/([\w.]+)", h))
