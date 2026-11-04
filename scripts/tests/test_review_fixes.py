import json, unittest
from scripts import build, check_site
from scripts.tests import test_content
from scripts.tests.helpers import ROOT


class SingularCountTest(unittest.TestCase):
    def test_count_one_label(self):
        self.assertEqual(build.strings("en")["js.count_one"], "1 piece")
        self.assertEqual(build.strings("vi")["js.count_one"], "1 sản phẩm")
        js = (ROOT / "assets/js/products.js").read_text(encoding="utf8")
        self.assertIn("count_one", js)


class PartialTranslationTest(unittest.TestCase):
    def test_name_only_translation_flagged(self):
        p = {"id": "X1", "name": "Vòng cổ", "desc": "mô tả gốc", "type": "Vòng cổ", "stone": ""}
        q = build.localize(p, "en", {"X1": {"name": "Necklace"}}, build.strings("en"))
        self.assertEqual(q["name"], "Necklace")
        self.assertTrue(q.get("_missing_en_desc"))


class VietnameseDetectTest(unittest.TestCase):
    def test_detects_all_vietnamese_letters(self):
        for s in ("Mã não", "tím", "Đá", "ò", "ý"):
            self.assertTrue(test_content.has_vietnamese(s), s)
            self.assertTrue(check_site.has_vietnamese(s), s)
        for s in ("Macramé Necklace", "Aquamarine", "Crystals & Chillin'"):
            self.assertFalse(test_content.has_vietnamese(s), s)


if __name__ == "__main__":
    unittest.main()
