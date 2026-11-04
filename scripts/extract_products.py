"""Doc caption Instagram (assets/instagram/*/posts.json) -> data/products.json.
Chay lai moi khi tai them anh moi tu Instagram."""
import json, re, unicodedata, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "assets" / "instagram"

STONES = [  # (keyword regex, ten hien thi)
    (r"aquamarine", "Aquamarine"), (r"moonstone|đá mặt trăng", "Moonstone"),
    (r"labradorite|xà cừ", "Labradorite"), (r"opal", "Opal"),
    (r"rose quartz|thạch anh hồng", "Thạch anh hồng"), (r"smoky", "Thạch anh khói"),
    (r"amethyst|thạch anh tím", "Thạch anh tím"), (r"citrine|thạch anh vàng", "Citrine"),
    (r"clear quartz|thạch anh trắng|clear crystal|diamond quartz|white cluster", "Thạch anh trắng"),
    (r"tourmaline", "Tourmaline"), (r"garnet|ngọc hồng lựu", "Garnet"),
    (r"topaz", "Topaz"), (r"fluorite", "Fluorite"), (r"agate|mã não|geode", "Mã não"),
    (r"lepidolite", "Lepidolite"), (r"apatite", "Apatite"), (r"peridot", "Peridot"),
    (r"jade|ngọc bích|cẩm thạch", "Ngọc"), (r"pearl|ngọc trai", "Ngọc trai"), (r"kyanite", "Kyanite"),
    (r"pyrite", "Pyrite"), (r"selenite", "Selenite"), (r"lapis", "Lapis Lazuli"),
    (r"prehnite", "Prehnite"), (r"rutile|rutilated", "Thạch anh tóc"), (r"quartz|thạch anh", "Thạch anh"),
]
TYPES = [
    (r"necklace|vòng cổ|dây chuyền", "Vòng cổ"), (r"bracelet|vòng tay|lắc tay", "Vòng tay"),
    (r"earring|bông tai|khuyên tai", "Bông tai"), (r"\bring\b|\brings\b|nhẫn", "Nhẫn"),
    (r"pendant|mặt dây", "Mặt dây"), (r"cluster|geode|raw|thô|tinh thể|crystal point|tower|trụ", "Đá thô"),
]
TAGLINE = re.compile(r"^(new available|available|limited edition|super limited|new design|special|restock|pre-?order|new|customer'?s order|hidden treasure)\W*$", re.I)

SMALLCAPS = dict(zip("ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡʏᴢ", "ABCDEFGHIJKLMNOPQRSTUVWYZ"))
def norm(s):
    s = unicodedata.normalize("NFKC", s)
    return "".join(SMALLCAPS.get(ch, ch) for ch in s)

def nice(name):
    if name.isupper() and len(name) > 3:
        name = " ".join(w.capitalize() if w.lower() != "x" else "x" for w in name.split())
    return name

def clean_name(line):
    line = re.sub(r"[^\w\s&'’.,/()\-+×x]", " ", line)          # bo emoji / ky hieu
    line = re.sub(r"\b(Album|Available|High Quality|Designed by:.*)\b\.?", " ", line, flags=re.I)
    line = re.sub(r"\s+", " ", line).strip(" .,-_|")
    return line

def has_letters(l):
    return len(re.findall(r"[A-Za-zÀ-ỹ]", l)) >= 3

def first_match(table, text, default=None):
    t = text.lower()
    for rx, label in table:
        if re.search(rx, t):
            return label
    return default

def parse(p, brand):
    raw = norm(p.get("alt", ""))
    if raw.startswith("Photo by") or raw.startswith("Photo shared by"):
        caption = ""
    else:
        caption = raw
    lines = [l.strip() for l in caption.split("\n") if l.strip()]
    status_line = " ".join(lines[:3]).lower()
    cands = []
    for l in lines[:8]:
        if not has_letters(l):
            continue
        c = clean_name(l).strip("[]<>×x ").strip()
        if not c or TAGLINE.match(c) or len(c) > 60 or len(c) < 4:
            continue
        if re.search(r"dm for|from gemsland|swipe|designed by|^now$|^new$", c, re.I):
            continue
        cands.append(c)
    keyed = [c for c in cands if first_match(STONES, c) or first_match(TYPES, c)]
    name = nice((keyed or cands or [""])[0])
    desc = ""
    for l in lines:
        if len(l) > 50 and re.search(r"[ăâđêôơưàáạảãằắặẳẵầấậẩẫèéẹẻẽềếệểễìíịỉĩòóọỏõồốộổỗờớợởỡùúụủũừứựửữỳýỵỷỹ]", l.lower()):
            desc = re.sub(r"\s+", " ", re.sub(r"[^\w\s,.!?:;\"'()/%\-–…]", "", l)).strip()
            break
    # uu tien ten mon, sau do moi den caption
    stone = first_match(STONES, name) or first_match(STONES, caption[:400])
    kind = first_match(TYPES, name) or first_match(TYPES, caption[:300], "Đá thô" if brand == "gemshunter" else "Trang sức")
    if "đã có chủ" in caption.lower() or "sold" in status_line or "customer" in status_line:
        status = "sold"
    elif "available" in caption.lower() or "restock" in status_line:
        status = "available"
    else:
        status = "ask"
    is_feedback = bool(re.search(r"feedback", caption[:200], re.I))
    is_product = bool(stone or kind not in ("Trang sức",)) and not is_feedback
    if not name:
        name = " ".join(x for x in [kind if kind not in ("Trang sức",) else "", stone or ""] if x) or "Món đồ từ " + ("Gems Hunter" if brand == "gemshunter" else "Gems Land")
    return {
        "id": p["code"], "brand": brand, "name": name, "stone": stone, "type": kind, "status": status,
        "desc": desc[:260], "image": "assets/instagram/" + p["file"], "permalink": p["permalink"],
        "carousel": p.get("carousel", False), "video": p.get("kind") == "reel", "feedback": is_feedback,
        "is_product": is_product,
    }

products = []
for brand in ("gemsland", "gemshunter"):
    f = SRC / brand / "posts.json"
    if f.exists():
        for p in json.load(open(f, encoding="utf8")):
            products.append(parse(p, brand))
out = ROOT / "data"; out.mkdir(exist_ok=True)
ov_file = out / "overrides.json"
if ov_file.exists():
    ov = json.load(open(ov_file, encoding="utf8"))
    for p in products:
        if p["id"] in ov.get("exclude", []):
            p["is_product"] = False
            p["excluded"] = True
        p.update(ov.get("fix", {}).get(p["id"], {}))
json.dump(products, open(out / "products.json", "w", encoding="utf8"), ensure_ascii=False, indent=1)
print(len(products), "products ->", out / "products.json")
