# Gems Hunter — website tĩnh song ngữ VI / EN (HTML / CSS / JS thuần)

Một thương hiệu duy nhất là **Gems Hunter**. Hai tài khoản Instagram `_gems.hunter_` và `_gemsland_` chỉ xuất hiện ở footer. Mọi nút nhắn tin đều mở `ig.me/m/_gems.hunter_`.

| Trang | Tiếng Việt | English |
|---|---|---|
| Trang chủ | `/` | `/en/` |
| Sản phẩm | `/san-pham/` | `/en/products/` |

## Cấu trúc
```
scripts/templates/home.html      Khung trang chủ (dùng chung cho VI và EN)
scripts/templates/products.html  Khung trang sản phẩm
scripts/templates/footer.html    Footer dùng chung
i18n/vi.json, i18n/en.json       TOÀN BỘ chữ giao diện. Sửa chữ thì sửa ở đây, giữ key giống nhau ở 2 file
data/products.json               Dữ liệu sản phẩm (sinh tự động từ caption Instagram)
data/overrides.json              SỬA TAY: ẩn bài không phải sản phẩm (exclude), sửa tên/đá/loại món (fix)
data/products.en.json            SỬA TAY: tên + mô tả tiếng Anh của từng sản phẩm {"<mã bài>": {"name", "desc"}}
assets/css, assets/js            Style và hiệu ứng (JS đọc chữ từ <script id="i18n"> nhúng trong trang)
assets/img/                      Ảnh webp đã tối ưu (sinh tự động)
assets/instagram/                Ảnh gốc tải từ Instagram + posts.json
scripts/extract_products.py      Caption Instagram + overrides.json -> data/products.json
scripts/build.py                 Sinh ảnh webp, 4 trang HTML, sitemap.xml, robots.txt
scripts/check_site.py            Kiểm tra site sau khi build (link hỏng, placeholder sót, thương hiệu, hreflang…)
scripts/tests/                   Test (python3 -m unittest)
```
Các file `index.html`, `san-pham/index.html`, `en/index.html`, `en/products/index.html` đều **do build sinh ra, đừng sửa tay**. Hãy sửa template hoặc file i18n.

## Quy trình
1. Sửa dữ liệu nếu cần:
   - `data/overrides.json`: `exclude` để ẩn bài, `fix` theo mẫu `{"<mã bài>": {"name": "...", "stone": "Opal", "type": "Vòng cổ", "status": "sold"}}`.
   - `data/products.en.json`: thêm hoặc sửa bản dịch. Sản phẩm mới mà chưa có bản dịch thì trang EN tạm dùng tên gốc, và build in `! thieu ban dich EN`.
2. `python scripts/extract_products.py` rồi `python scripts/build.py` (cần Python 3 + Pillow: `pip install pillow`).
3. `python scripts/check_site.py`, phải in ra `OK`.
4. Test: `python3 -m unittest discover -s scripts/tests -t .`
5. Xem thử: `python -m http.server` rồi mở http://localhost:8000 (bản EN ở http://localhost:8000/en/).

Thêm chữ mới vào giao diện: thêm key vào **cả hai** file `i18n/vi.json` và `i18n/en.json`, rồi dùng trong template:
- `{{t:nhom.khoa}}` cho nội dung, được phép chứa HTML như `<em>`;
- `{{a:nhom.khoa}}` cho thuộc tính (alt, content…), nội dung được tự escape.
Nếu hai file lệch key, build sẽ báo lỗi.

## SEO đã có
- Mỗi sản phẩm nằm sẵn trong HTML (không render bằng JS), có `alt`, ảnh webp lazy-load, `srcset`.
- `<html lang>`, `<title>`, meta description, canonical, Open Graph (`og:locale` và `og:locale:alternate`), `hreflang` vi/en/x-default.
- JSON-LD: JewelryStore ở trang chủ; CollectionPage + ItemList + Breadcrumb ở trang sản phẩm, có `inLanguage`.
- `sitemap.xml` liệt kê 4 URL, có `xhtml:link` chéo giữa hai ngôn ngữ. `robots.txt` chặn `/scripts/`, `/data/`, `/i18n/`.
- Tên miền `https://gems-hunter.github.io`, đặt ở `SITE_URL` trong `scripts/build.py`.

## Deploy GitHub Pages
- Repo phải tên đúng `gems-hunter.github.io` (thuộc org `gems-hunter`).
- Settings → Pages → Source: *Deploy from a branch* → `main` / `/ (root)`.
- Mỗi lần `git push` lên `main`, trang tự cập nhật sau 1–2 phút.
- Story nổi bật (`assets/instagram/*/stories/`) không được đưa lên git vì có ảnh chat của khách.

## Lưu ý
- Tên, loại đá, loại món được tách tự động từ caption nên vẫn có thể sai: nên đọc lại `data/products.json`.
- Caption cũ gọi tiệm là "Gemsland". Khi build, chữ này được đổi thành "Gems Hunter" trong tên và mô tả.
- Bản dịch tiếng Anh trong `data/products.en.json` là dịch máy và cần người trong tiệm đọc lại.
- Ảnh gốc từ Instagram còn watermark `@gemsland`: nên thay bằng ảnh gốc của tiệm khi có.
