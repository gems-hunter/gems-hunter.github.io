import json, re, unittest
from scripts.tests.helpers import ROOT

from scripts.check_site import has_vietnamese  # noqa: E402
PARTICLE = re.compile(r"(?<!\w)ạa*(?!\w)")
SENTENCE_BITS = ("Trượt sang", "ủng hộ", "chốt đơn", "nhanh tay", "hạt dẻ", "chần chừ")


def products():
    return [p for p in json.loads((ROOT / "data/products.json").read_text(encoding="utf8")) if p.get("is_product")]


def en():
    return json.loads((ROOT / "data/products.en.json").read_text(encoding="utf8"))


class ContentTest(unittest.TestCase):
    def test_every_product_translated(self):
        tr = en()
        missing = [p["id"] for p in products() if not tr.get(p["id"], {}).get("name")]
        self.assertEqual(missing, [])
        no_desc = [p["id"] for p in products() if p.get("desc") and not tr[p["id"]].get("desc")]
        self.assertEqual(no_desc, [])

    def test_en_names_no_vietnamese(self):
        bad = {k: v["name"] for k, v in en().items() if has_vietnamese(v.get("name", ""))}
        self.assertEqual(bad, {})

    def test_vi_names_not_sentences(self):
        bad = [p["name"] for p in products() if PARTICLE.search(p["name"]) or any(b in p["name"] for b in SENTENCE_BITS)]
        self.assertEqual(bad, [])


if __name__ == "__main__":
    unittest.main()
