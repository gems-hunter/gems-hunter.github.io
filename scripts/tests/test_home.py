import re, unittest
from scripts import build, i18n
from scripts.tests.helpers import page, strip_allowed_brand_zones, igme_targets


def setUpModule():
    for lang in ("vi", "en"):
        build.build_home(lang)


class HomeTest(unittest.TestCase):
    def test_vi_lang_and_slogan(self):
        h = page("index.html")
        self.assertIn('<html lang="vi"', h)
        self.assertIn("Có những viên đá chỉ xuất hiện một lần và chờ đúng một người.", h)
        self.assertIn("Mỗi viên đá là một câu chuyện chưa có hồi kết…", h)

    def test_en_lang_and_slogan(self):
        h = page("en/index.html")
        self.assertIn('<html lang="en"', h)
        self.assertIn("Some stones appear only once and wait for just one person.", h)
        self.assertIn("Every stone is a story with no ending yet…", h)
        self.assertNotIn("Open your mind", h)

    def test_brand_only_in_footer(self):
        for rel in ("index.html", "en/index.html"):
            body = strip_allowed_brand_zones(page(rel))
            self.assertIsNone(re.search(r"gems ?land", body, re.I), rel)

    def test_all_igme_to_gems_hunter(self):
        for rel in ("index.html", "en/index.html"):
            self.assertEqual(igme_targets(page(rel)), {"_gems.hunter_"}, rel)

    def test_assets_prefixed(self):
        h = page("en/index.html")
        refs = re.findall(r'(?:src|href)="([^"#]*assets/[^"]*)"', h)
        self.assertTrue(refs)
        self.assertTrue(all(r.startswith("../assets/") for r in refs), [r for r in refs if not r.startswith("../assets/")][:5])

    def test_js_strings_embedded(self):
        for rel in ("index.html", "en/index.html"):
            self.assertIn('<script type="application/json" id="i18n">', page(rel))

    def test_parity(self):
        i18n.check_parity(i18n.load_strings("vi"), i18n.load_strings("en"))


if __name__ == "__main__":
    unittest.main()
