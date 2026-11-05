# Gemsland — website tĩnh song ngữ VI / EN (HTML / CSS / JS thuần)

Một thương hiệu duy nhất là **Gemsland**. Tên cũ Gems Hunter (và tài khoản `_gems.hunter_`) chỉ còn ở footer và JSON-LD. Mọi nút nhắn tin đều mở `ig.me/m/_gemsland_`.

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
assets/js/app.js                 Điểm vào (module): khởi tạo trang + router chuyển trang không tải lại
assets/js/router.js              Bấm link nội bộ -> lấy HTML (có cache, tải trước khi rê chuột) -> thay nội dung, nhớ vị trí cuộn
assets/js/common.js              Nav, drawer, reveal (chạy lại mỗi trang); ánh sáng chuột, chế độ góp ý (chạy một lần)
assets/js/main.js, products.js   JS riêng của trang chủ / trang sản phẩm: init(signal) trả về hàm dọn dẹp
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
- Tên miền `https://gemsland.github.io`, đặt ở `SITE_URL` trong `scripts/build.py`.

## Chế độ góp ý (`?feedback`)
Mở `https://gemsland.github.io/?feedback` trên **máy tính** để bật [Agentation](https://agentation.com): bấm biểu tượng ở góc phải dưới, chọn phần tử (hoặc bôi chữ, kéo vùng) rồi ghi chú. Muốn sang trang khác thì đóng thanh công cụ (✕), bấm link như bình thường (URL vẫn giữ `?feedback`), rồi mở lại; mỗi trang giữ ghi chú riêng. Bấm *Send Annotations* một lần là gửi **ghi chú của tất cả các trang**, gửi xong tự xoá. Chế độ chỉ bật khi URL có `?feedback`; bỏ nó khỏi URL rồi tải lại là tắt. Khách bình thường không tải gì thêm.

Nội dung gửi gồm ghi chú, selector của phần tử, trang, kích thước màn hình. Nơi nhận cấu hình trong `CONFIG` ở `assets/js/feedback.js`:
- **Email**: lấy access key ở https://web3forms.com rồi điền `web3formsKey`.
- **Telegram**: deploy Cloudflare Worker trong `scripts/feedback-relay/` (hướng dẫn ở đầu `worker.js`), điền URL worker vào `telegramRelay`. Bot token chỉ nằm trong secret của worker.
- **GitHub issue**: nếu worker có `GITHUB_TOKEN` (quyền *Issues: Read and write*), mỗi lần gửi góp ý còn được thêm thành comment vào issue đang mở mới nhất có nhãn `feedback`; chưa có thì worker tự mở issue mới. Đóng issue khi xử lý xong, lần sau sẽ mở issue mới. Link issue được gửi kèm trong tin Telegram.

`assets/js/vendor/agentation.mjs` là bản đóng gói sẵn Agentation + React. Cập nhật: `cd scripts/feedback && npm install && npm run build`.

### Thêm sản phẩm mới từ web
Ở chế độ `?feedback` có nút **＋ Thêm sản phẩm** (góc trái dưới, dùng được cả trên điện thoại): chọn ảnh, điền tên, loại đá, loại món, trạng thái, mô tả và **mã bí mật**. Luồng:
1. Trình duyệt nén ảnh rồi gửi tới worker (`scripts/feedback-relay/worker.js`, đường dẫn `/upload`).
2. Worker kiểm tra mã, tạo nhánh `inbox/<ngày-giờ>-<tên>` chứa `photo.jpg` + `info.json`, mở Pull Request và báo Telegram.
3. GitHub Action `.github/workflows/claude-inbox.yml` chạy Claude theo mục "Xử lý inbox" trong `CLAUDE.md`: đưa ảnh vào `assets/img-src/products/`, thêm vào `data/manual.json` + bản tiếng Anh, build, test, commit vào PR, comment tóm tắt.
4. Xem lại PR, bấm **Merge** là lên web.

Cài đặt một lần:
- Worker: `npx wrangler secret put GITHUB_TOKEN` (fine-grained token, chỉ repo này, quyền *Contents*, *Pull requests* và *Issues*: Read and write) và `npx wrangler secret put UPLOAD_CODE` (mã bí mật), rồi `npx wrangler deploy`.
- GitHub: cài app Claude cho repo (https://github.com/apps/claude) và thêm secret `CLAUDE_CODE_OAUTH_TOKEN` (gói Pro/Max, lấy bằng `claude setup-token`) hoặc `ANTHROPIC_API_KEY` trong Settings → Secrets and variables → Actions.
- Xử lý lại một PR: tab Actions → "Xu ly san pham moi (inbox)" → Run workflow, nhập số PR.

Sản phẩm chỉ có trên web nằm trong `data/manual.json` (ảnh gốc ở `assets/img-src/products/`), hiện ở đầu trang sản phẩm, không có link Instagram.

## Deploy GitHub Pages
- Repo phải tên đúng `gemsland.github.io` (thuộc org `gemsland`).
- Settings → Pages → Source: *Deploy from a branch* → `main` / `/ (root)`.
- Mỗi lần `git push` lên `main`, trang tự cập nhật sau 1–2 phút.
- Story nổi bật (`assets/instagram/*/stories/`) không được đưa lên git vì có ảnh chat của khách.

## Lưu ý
- Tên, loại đá, loại món được tách tự động từ caption nên vẫn có thể sai: nên đọc lại `data/products.json`.
- Caption cũ gọi tiệm là "Gems Hunter" / "Gems Land". Khi build, các chữ này được đổi thành "Gemsland" trong tên và mô tả.
- Bản dịch tiếng Anh trong `data/products.en.json` là dịch máy và cần người trong tiệm đọc lại.
- Ảnh gốc từ Instagram còn watermark `@gemsland`: nên thay bằng ảnh gốc của tiệm khi có.
