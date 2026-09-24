# KHONG Architects — Portfolio Landing Page

Trang web giới thiệu dự án kiến trúc cao cấp của **KHONG Architects**, được xây dựng trên nền tảng **Astro** theo định hướng thiết kế tối giản, hiện đại và tối ưu hóa hiệu năng tuyệt đối.

---

## 🎨 Figma Design
- **Figma Design Link**: [Figma Design Link]() *(Đang cập nhật)*

---

## 🌐 Tiêu Chuẩn Kỹ Thuật & Audit Compliance

Dự án tuân thủ đầy đủ các chuẩn mực phát triển web hiện đại:

### 1. 🏆 Tiêu Chuẩn W3C (W3C HTML5 & CSS3 Standards)
- **Semantic HTML5**: Sử dụng chuẩn xác các thẻ ngữ nghĩa ngữ cảnh như `<header>`, `<main>`, `<footer>`, `<nav>`, `<article>`, `<address>` giúp cấu trúc trang web mạch lạc và rõ ràng.
- **CSS3 Clean Variables System**: Hệ thống biến CSS nhất quán (`--paper`, `--ink`, `--soft-ink`, `--focus`, `--font-site`). Toàn bộ chữ dùng American Typewriter khi thiết bị có sẵn font này; thiết bị khác dùng font dự phòng trong cùng một font stack.

### 2. 🔍 Audit SEO & Cấu Hình Indexing Hiện Đại
- **Kiểm Soát Indexing Chuẩn Xác**:
  - Trang chủ (`/`): Cấu hình `<meta name="robots" content="index, follow, max-image-preview:large" />` cho phép các công cụ tìm kiếm index ưu tiên.
  - Các đường dẫn phụ (`/project/`, `/project/[slug]/`, `/concept/`, `/prize/`): Chặn index bằng `<meta name="robots" content="noindex, follow" />` tránh bị phân tán thứ hạng tìm kiếm.
- **Robots.txt Directives**: Cấu hình tệp `public/robots.txt` cho phép crawl trang chủ và hạn chế crawl các route chưa cần thiết.
- **OpenGraph & Metadata**: Đầy đủ các thẻ Meta OpenGraph (`og:title`, `og:description`, `og:image`, `og:url`, `og:site_name`) và thẻ `canonical` trên từng trang.

### 3. ⚡ Tối Ưu Hệu Năng & Core Web Vitals
- **Static Site Generation (SSG)**: Xuất toàn bộ mã nguồn thành HTML/CSS/JS tĩnh tại `/dist`, giúp thời gian tải trang nhanh tức thì.
- **Tải Ảnh Tối Ưu**: Sử dụng định dạng ảnh thế hệ mới (AVIF/WebP) với `decoding="async"` và `loading="lazy"` cho các ảnh nằm ngoài tầm nhìn ban đầu.
- **Zero Layout Shift (CLS = 0)**: Cấu hình tỷ lệ khung hình (`aspect-ratio: 1 / 1`) và hệ thống phông chữ cố định, giúp giao diện không bị giật lag khi tải trang.

### 4. ♿ Accessibility (WCAG 2.1 AA Standards)
- **Bàn Phím & Phím Tắt Navigation**: Hỗ trợ thẻ nhảy nhanh nội dung `<a class="skip-link" href="#main">Skip to content</a>`.
- **Độ Tương Phản Tốt**: Đạt chuẩn độ tương phản màu sắc chữ trên nền trắng (`--ink: #1b1b1b` trên `--paper: #ffffff`).
- **Thẻ ARIA Landmark**: Bổ sung `role="status"`, `aria-live="polite"`, `aria-label` cho thanh menu, thanh tiến trình cuộn trang và bộ nạp trang.

---

## 🛠️ Cấu Trúc Dự Án

```
khong-architects-landing/
├── public/
│   ├── hotlink-ok/          # Tài nguyên hình ảnh kiến trúc & hoa sen cao cấp
│   ├── favicon.ico          # Favicon & Touch Icons
│   └── robots.txt           # Điều hướng Robots Crawler
├── src/
│   ├── components/
│   │   └── RouteLoading.astro  # Component chuyển trang mượt mà
│   ├── data/
│   │   └── projects.js         # Nguồn dữ liệu dự án trung tâm
│   └── pages/
│       ├── index.astro         # Trang chủ Landing Page (Kính mờ & Nét vẽ hoa sen)
│       ├── [section].astro     # Trang Concept & Prize (Trạng thái Under Development)
│       └── project/
│           ├── index.astro     # Trang danh sách dự án (Thanh cuộn thước chia độ)
│           └── [slug].astro    # Trang chi tiết dự án (Bố cục 4 cột linh hoạt)
└── astro.config.mjs
```

---

## 💻 Hướng Dẫn Phát Triển Local

1. **Cài Đặt Thư viện:**
   ```bash
   npm install
   ```

2. **Chạy Server Phát Triển Local:**
   ```bash
   npm run dev
   ```

3. **Xây Dựng Bản Production (Build Static):**
   ```bash
   npm run build
   ```

4. **Xem Trước Bản Build:**
   ```bash
   npm run preview
   ```

---

## 🚀 Triển Khai Lên Cloudflare Pages

Dự án được cấu hình tự động triển khai (Auto Deploy) qua GitHub. Mỗi khi push commit mới lên nhánh `main`, Cloudflare Pages sẽ tự động kích hoạt tiến trình build:

- **Build Command:** `npm run build`
- **Build Output Directory:** `dist`
- **Root Directory:** `/`
