import json, unittest
from scripts import i18n


class FlattenTest(unittest.TestCase):
    def test_flatten(self):
        self.assertEqual(i18n.flatten({"a": {"b": "x"}, "c": "y"}), {"a.b": "x", "c": "y"})

    def test_lists_kept_as_values(self):
        self.assertEqual(i18n.flatten({"js": {"hero": [["A", "b"]]}}), {"js.hero": [["A", "b"]]})


class ParityTest(unittest.TestCase):
    def test_parity_ok(self):
        i18n.check_parity({"a": "1"}, {"a": "2"})

    def test_parity_raises_on_missing(self):
        with self.assertRaises(ValueError) as cm:
            i18n.check_parity({"a": "1", "only.vi": "x"}, {"a": "2", "only.en": "y"})
        self.assertIn("only.vi", str(cm.exception))
        self.assertIn("only.en", str(cm.exception))


class RenderTest(unittest.TestCase):
    S = {"k": "A &amp; <em>B</em>", "q": 'say "hi" & go'}

    def test_render_text_raw(self):
        self.assertEqual(i18n.render("<p>{{t:k}}</p>", self.S, "", {}), "<p>A &amp; <em>B</em></p>")

    def test_render_attr_escaped(self):
        self.assertEqual(i18n.render('<i alt="{{a:q}}">', self.S, "", {}), '<i alt="say &quot;hi&quot; &amp; go">')

    def test_render_root_and_extra(self):
        self.assertEqual(i18n.render('{{ROOT}}x/{{N}}', {}, "../", {"N": "5"}), "../x/5")

    def test_render_unknown_key_raises(self):
        with self.assertRaises(KeyError):
            i18n.render("{{t:nope}}", {}, "", {})

    def test_render_leftover_raises(self):
        with self.assertRaises(ValueError):
            i18n.render("{{FOO}}", {}, "", {})


class JsPayloadTest(unittest.TestCase):
    def test_js_payload_strips_prefix(self):
        self.assertEqual(json.loads(i18n.js_payload({"js.count": "{n} items", "nav.x": "no"})), {"count": "{n} items"})

    def test_js_payload_escapes_script_close(self):
        out = i18n.js_payload({"js.x": "</script><b>"})
        self.assertNotIn("</", out)
        self.assertEqual(json.loads(out), {"x": "</script><b>"})


if __name__ == "__main__":
    unittest.main()
