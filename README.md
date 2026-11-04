# Gems Land — website tĩnh (HTML / CSS / JS thuần)

## Cấu trúc
```
index.html                 Trang chủ
san-pham/index.html        Trang sản phẩm (SINH TỰ ĐỘNG – đừng sửa tay, sửa template)
assets/css/main.css        Style chung + trang chủ
assets/css/products.css    Style trang sản phẩm
assets/js/main.js          Hiệu ứng trang chủ
assets/js/products.js      Lọc / tìm kiếm / xem lớn sản phẩm
assets/img/                Ảnh webp đã tối ưu cho web (sinh tự động)
assets/img/products/       Ảnh sản phẩm <mã>-480.webp và <mã>-960.webp (sinh tự động)
assets/instagram/          Ảnh gốc tải từ Instagram (bài viết + story nổi bật) và posts.json
data/products.json         Dữ liệu sản phẩm (sinh tự động từ caption Instagram)
data/overrides.json        SỬA TAY Ở ĐÂY: loại bỏ bài không phải sản phẩm (exclude) và sửa tên/đá/loại món (fix)
scripts/extract_products.py  Đọc caption Instagram + overrides.json -> data/products.json
scripts/build.py           Tạo ảnh webp, sinh san-pham/index.html, sitemap.xml, robots.txt
scripts/san-pham.template.html  Khung HTML trang sản phẩm
```

## Quy trình
1. Sửa `data/overrides.json`:
   - `exclude`: thêm mã bài Instagram (vd `DasPfZIFF7e`) để ẩn bài không phải sản phẩm.
   - `fix`: `{"<mã bài>": {"name": "...", "stone": "Opal", "type": "Vòng cổ", "status": "sold", "desc": "..."}}`.
2. `python scripts/extract_products.py` rồi `python scripts/build.py` (cần Python 3 + Pillow: `pip install pillow`).
3. Mở `index.html` hoặc chạy `python -m http.server` rồi vào http://localhost:8000.

## SEO đã có
- Mỗi sản phẩm nằm sẵn trong HTML (không render bằng JS), có `alt`, ảnh webp lazy-load, `srcset`.
- `<title>`, meta description, canonical, Open Graph, JSON-LD (JewelryStore ở trang chủ,
  CollectionPage + ItemList + Breadcrumb ở trang sản phẩm), `sitemap.xml`, `robots.txt`.
- Tên miền: `https://gems-hunter.github.io` (đặt trong `SITE_URL` của `scripts/build.py` và trong `index.html`).

## Deploy GitHub Pages
- Repo phải tên đúng `gems-hunter.github.io` (thuộc tài khoản/org `gems-hunter`).
- Settings → Pages → Source: *Deploy from a branch* → `main` / `/ (root)`.
- Mỗi lần `git push` lên `main`, trang tự cập nhật sau 1–2 phút.
- Story nổi bật (`assets/instagram/*/stories/`) không được đưa lên git vì có ảnh chat của khách.

## Lưu ý
- Tên / loại đá / loại món được tách tự động từ caption nên còn sai sót: cần đọc lại `data/products.json`.
- Ảnh gốc từ Instagram còn watermark; nên thay bằng ảnh gốc của tiệm khi có.
