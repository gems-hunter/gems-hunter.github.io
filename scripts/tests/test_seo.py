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
    build.build_icons()
    build.build_404()
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

    def test_lightbox_lang_link(self):
        m = re.search(r'<a [^>]*id="lb-lang"[^>]*>', page("san-pham/index.html"))
        self.assertIsNotNone(m)
        self.assertIn('href="../en/products/"', m.group(0))
        m = re.search(r'<a [^>]*id="lb-lang"[^>]*>', page("en/products/index.html"))
        self.assertIn('href="../../san-pham/"', m.group(0))
        js = (ROOT / "assets/js/products.js").read_text(encoding="utf8")
        self.assertIn("lb-lang", js)

    def test_switch_keeps_hash_js(self):
        js = (ROOT / "assets/js/products.js").read_text(encoding="utf8")
        self.assertIn("data-lang-switch", js)
        self.assertIn("#sp-", js)


    def test_social_and_icons(self):
        for rel in PAGES.values():
            h = page(rel)
            for tag in ('og:image:width" content="1200"', 'og:image:height" content="630"', 'og:image:alt',
                        'name="twitter:card" content="summary_large_image"', 'max-image-preview:large',
                        'favicon.ico', 'apple-touch-icon.png', 'site.webmanifest'):
                self.assertIn(tag, h, (rel, tag))
        for f in ("favicon.ico", "site.webmanifest", "assets/img/icon-192.png", "assets/img/icon-512.png",
                  "assets/img/apple-touch-icon.png"):
            self.assertTrue((ROOT / f).exists(), f)

    def test_home_jsonld_graph(self):
        import json
        m = re.search(r'<script type="application/ld\+json">(.*?)</script>', page("index.html"), re.S)
        types = {n["@type"] for n in json.loads(m.group(1))["@graph"]}
        self.assertEqual(types, {"WebSite", "JewelryStore"})

    def test_image_sitemap_404_robots(self):
        x = (ROOT / "sitemap.xml").read_text(encoding="utf8")
        self.assertIn("xmlns:image=", x)
        self.assertGreater(x.count("<image:loc>"), 200)
        self.assertNotIn("-480.webp", x)
        self.assertIn('<meta name="robots" content="noindex">', page("404.html"))
        self.assertIn("Disallow: /*?feedback", (ROOT / "robots.txt").read_text(encoding="utf8"))


if __name__ == "__main__":
    unittest.main()
