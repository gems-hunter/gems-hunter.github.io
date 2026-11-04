"""Tu dien giao dien VI/EN va render template.

Placeholder trong template:
  {{t:nhom.khoa}}  chuoi dich, chen nguyen (cho phep HTML noi tuyen)
  {{a:nhom.khoa}}  chuoi dich da escape, dung trong thuoc tinh HTML (alt, content...)
  {{ROOT}}         tien to duong dan tuong doi ve goc site ("", "../", "../../")
  {{TEN}}          gia tri sinh tu dong truyen qua `extra`
"""
import html, json, pathlib, re

I18N_DIR = pathlib.Path(__file__).resolve().parent.parent / "i18n"
_T = re.compile(r"\{\{(t|a):([\w.-]+)\}\}")


def flatten(d, prefix=""):
    out = {}
    for k, v in d.items():
        key = f"{prefix}{k}"
        if isinstance(v, dict):
            out.update(flatten(v, key + "."))
        else:
            out[key] = v
    return out


def load_strings(lang):
    return flatten(json.loads((I18N_DIR / f"{lang}.json").read_text(encoding="utf8")))


def check_parity(a, b):
    only_a, only_b = sorted(set(a) - set(b)), sorted(set(b) - set(a))
    if only_a or only_b:
        raise ValueError(f"Tu dien lech key. Chi co o ben 1: {only_a}. Chi co o ben 2: {only_b}")


def render(tpl, strings, root, extra):
    def sub(m):
        val = strings[m.group(2)]
        return html.escape(val, quote=True) if m.group(1) == "a" else val
    out = _T.sub(sub, tpl).replace("{{ROOT}}", root)
    for k, v in extra.items():
        out = out.replace("{{" + k + "}}", v)
    left = re.findall(r"\{\{[^}]*\}?\}?", out)
    if left:
        raise ValueError(f"Con placeholder chua thay: {sorted(set(left))[:10]}")
    return out


def js_payload(strings, prefix="js."):
    data = {k[len(prefix):]: v for k, v in strings.items() if k.startswith(prefix)}
    return json.dumps(data, ensure_ascii=False).replace("</", "<\\/")
