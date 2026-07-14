# KHONG Architects Landing Page

Dự án này là trang web tĩnh được phát triển bằng framework **Astro**. Dưới đây là hướng dẫn chi tiết cách tải mã nguồn lên GitHub và cấu hình triển khai tự động lên **Cloudflare Pages**.

---

## 🛠️ Hướng Dẫn Đưa Lên GitHub

Sau khi khởi tạo mã nguồn cục bộ, bạn hãy thực hiện các bước sau để đẩy code lên GitHub của mình:

1. **Tạo Kho Chứa (Repository) Mới trên GitHub:**
   - Truy cập [github.com/new](https://github.com/new).
   - Đặt tên cho kho chứa (ví dụ: `khong-architects-landing`).
   - **Lưu ý quan trọng:** Không chọn thêm README, `.gitignore` hoặc License (để tránh xung đột lịch sử commit).
   - Nhấn **Create repository**.

2. **Liên Kết và Đẩy Code Cục Bộ Lên GitHub:**
   - Mở Terminal tại thư mục dự án và chạy các lệnh sau (thay thế URL bằng URL kho chứa của bạn):
     ```bash
     git remote add origin <URL_KHO_CHỨA_GITHUB_CỦA_BẠN>
     git branch -M main
     git push -u origin main
     ```

---

## 🚀 Hướng Dẫn Triển Khai Lên Cloudflare Pages

Bạn có hai cách để triển khai trang web này lên Cloudflare Pages. Phương pháp 1 được khuyến khích sử dụng vì tính đơn giản và tự động tối đa.

### Cách 1: Liên kết trực tiếp GitHub với Cloudflare Pages (Khuyến khích)

Cloudflare sẽ tự động theo dõi repo GitHub của bạn. Mỗi khi bạn push code mới lên nhánh `main`, Cloudflare sẽ tự động build và deploy.

1. Đăng nhập vào trang quản trị [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Chọn **Workers & Pages** từ thanh menu bên trái.
3. Nhấp vào nút **Create application** -> Chọn tab **Pages** -> Nhấp vào **Connect to Git**.
4. Liên kết tài khoản GitHub của bạn và chọn kho chứa vừa tạo (`khong-architects-landing`).
5. Cấu hình cài đặt Build (Build settings):
   - **Framework preset:** Chọn `Astro` (Cloudflare sẽ tự điền các lệnh build bên dưới).
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
6. Nhấp vào **Save and Deploy**. Cloudflare sẽ bắt đầu build và cấp cho bạn một tên miền phụ dạng `*.pages.dev` miễn phí. Bạn cũng có thể dễ dàng cấu hình tên miền riêng của mình (`khongarchitects.vn`) tại đây.

---

### Cách 2: Triển khai thông qua GitHub Actions

Nếu bạn muốn kiểm soát quá trình build trực tiếp trên GitHub và đẩy bản dựng hoàn thiện sang Cloudflare, dự án này đã đi kèm file cấu hình GitHub Actions tại địa chỉ `.github/workflows/deploy.yml`.

Để sử dụng cách này:
1. Bạn cần lấy **Account ID** và **API Token** từ tài khoản Cloudflare của mình.
2. Vào phần cài đặt Repo trên GitHub: **Settings -> Secrets and variables -> Actions**.
3. Thêm hai Repository Secrets sau:
   - `CLOUDFLARE_API_TOKEN`: Token có quyền truy cập Cloudflare Pages.
   - `CLOUDFLARE_ACCOUNT_ID`: ID tài khoản Cloudflare của bạn.
4. Mỗi lần bạn push code lên nhánh `main`, GitHub Actions sẽ tự động chạy build và deploy sang Cloudflare.

---

## 💻 Phát Triển Dưới Local

Nếu bạn muốn chạy thử nghiệm dự án ở máy cá nhân:

```bash
# Cài đặt thư viện
npm install

# Chạy server phát triển
npm run dev

# Xây dựng phiên bản production cục bộ
npm run build

# Xem trước phiên bản đã build
npm run preview
```
