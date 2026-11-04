import re, unittest
from scripts import build
from scripts.tests.helpers import page, ROOT

PAGES = {("vi", "home"): "index.html", ("en", "home"): "en/index.html",
         ("vi", "products"): "san-pham/index.html", ("en", "products"): "en/products/index.html"}
SITE = "https://gems-hunter.github.io"


def setUpModule():
    for lang in ("vi", "en"):
        build.build_home(lang)
        build.build_products(lang)
    build.build_seo_files()


def alternates(h):
    return set(re.findall(r'<link rel="alternate" hreflang="([\w-]+)" href="([^"]+)">', h))


class SeoTest(unittest.TestCase):
    def test_hreflang_reciprocal(self):
        for kind in ("home", "products"):
            vi, en = alternates(page(PAGES["vi", kind])), alternates(page(PAGES["en", kind]))
            self.assertEqual(vi, en, kind)
            self.assertEqual({h for h, _ in vi}, {"vi", "en", "x-default"})
            self.assertEqual(dict(vi)["x-default"], dict(vi)["vi"])

    def test_canonical_self(self):
        for (lang, kind), rel in PAGES.items():
            m = re.search(r'<link rel="canonical" href="([^"]+)">', page(rel))
            self.assertEqual(m.group(1), SITE + build.LANGS[lang][kind], rel)

    def test_og_locale(self):
        h = page("en/index.html")
        self.assertIn('<meta property="og:locale" content="en_US">', h)
        self.assertIn('<meta property="og:locale:alternate" content="vi_VN">', h)

    def test_sitemap(self):
        x = (ROOT / "sitemap.xml").read_text(encoding="utf8")
        self.assertEqual(len(re.findall(r"<loc>", x)), 4)
        self.assertIn('xmlns:xhtml="http://www.w3.org/1999/xhtml"', x)
        for block in re.findall(r"<url>.*?</url>", x, re.S):
            self.assertEqual(len(re.findall(r"<xhtml:link ", block)), 2)

    def test_switch_links(self):
        sw = lambda rel: re.search(r'<a [^>]*data-lang-switch[^>]*href="([^"]+)"|<a [^>]*href="([^"]+)"[^>]*data-lang-switch', page(rel))
        m = sw("san-pham/index.html"); self.assertEqual(m.group(1) or m.group(2), "../en/products/")
        m = sw("en/products/index.html"); self.assertEqual(m.group(1) or m.group(2), "../../san-pham/")
        m = sw("index.html"); self.assertEqual(m.group(1) or m.group(2), "en/")
        m = sw("en/index.html"); self.assertEqual(m.group(1) or m.group(2), "../")

    def test_switch_keeps_hash_js(self):
        js = (ROOT / "assets/js/products.js").read_text(encoding="utf8")
        self.assertIn("data-lang-switch", js)
        self.assertIn("#sp-", js)


if __name__ == "__main__":
    unittest.main()
