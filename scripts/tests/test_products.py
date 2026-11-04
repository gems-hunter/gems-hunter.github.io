import json, re, unittest
from scripts import build
from scripts.tests.helpers import page, igme_targets

VI, EN = "san-pham/index.html", "en/products/index.html"


def setUpModule():
    for lang in ("vi", "en"):
        build.build_products(lang)


def cards(h):
    return re.findall(r'<li class="item"[^>]*>', h)


class ProductsPageTest(unittest.TestCase):
    def test_counts_equal(self):
        self.assertGreater(len(cards(page(VI))), 0)
        self.assertEqual(len(cards(page(VI))), len(cards(page(EN))))

    def test_en_type_labels(self):
        h = page(EN)
        self.assertIn('data-type="Necklace"', h)
        self.assertNotIn('data-type="Vòng cổ"', h)
        self.assertIn('<html lang="en"', h)

    def test_filter_chips_match_cards(self):
        for rel in (VI, EN):
            h = page(rel)
            chips = set(re.findall(r'data-f-stone="([^"]+)"', h))
            stones = set(re.findall(r'<li class="item"[^>]*data-stone="([^"]+)"', h))
            self.assertEqual(chips, stones, rel)

    def test_en_search_bilingual(self):
        rings = [c for c in cards(page(EN)) if 'data-type="Ring"' in c]
        self.assertTrue(rings)
        q = re.search(r'data-q="([^"]*)"', rings[0]).group(1)
        self.assertIn("ring", q)
        self.assertIn("nhan", q)

    def test_jsonld_language(self):
        ld = json.loads(re.search(r'<script type="application/ld\+json">(.*?)</script>', page(EN), re.S).group(1))
        self.assertEqual(ld["inLanguage"], "en")
        self.assertIn("/en/products/#sp-", ld["mainEntity"]["itemListElement"][0]["url"])

    def test_order_buttons(self):
        for rel in (VI, EN):
            self.assertEqual(igme_targets(page(rel)), {"_gems.hunter_"}, rel)

    def test_count_label_in_js(self):
        self.assertIn('"count": "{n} pieces"', page(EN))


class LocalizeTest(unittest.TestCase):
    P = {"id": "X1", "name": "Vòng cổ Aquamarine", "desc": "mô tả", "type": "Vòng cổ", "stone": "Aquamarine"}

    def test_missing_translation_falls_back(self):
        p = build.localize(self.P, "en", {}, build.strings("en"))
        self.assertEqual(p["name"], "Vòng cổ Aquamarine")
        self.assertTrue(p["_missing_en"])
        self.assertEqual(p["type_label"], "Necklace")

    def test_translation_used(self):
        p = build.localize(self.P, "en", {"X1": {"name": "Aquamarine Necklace", "desc": "desc"}}, build.strings("en"))
        self.assertEqual((p["name"], p["desc"]), ("Aquamarine Necklace", "desc"))
        self.assertFalse(p.get("_missing_en"))

    def test_vi_keeps_original(self):
        p = build.localize(self.P, "vi", {}, build.strings("vi"))
        self.assertEqual((p["name"], p["type_label"]), ("Vòng cổ Aquamarine", "Vòng cổ"))


if __name__ == "__main__":
    unittest.main()
