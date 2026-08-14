# ONE PUNCH MAN: The Strongest — SEA Meta & Database Manager 🥊⚡

> **Bilingual (English & Tiếng Việt)** web application to analyze, simulate, and manage meta data for **ONE PUNCH MAN: The Strongest (FingerFun SEA Version)**.
> Built to deploy seamlessly on **GitHub Pages (`github.io`)**.

---

## 🌟 Key Features / Tính Năng Nổi Bật

### 1. 🌐 Song Ngữ Toàn Diện (Bilingual English / Tiếng Việt)
- Chuyển đổi ngôn ngữ tức thì với 1 cú click.
- Toàn bộ chỉ số, kỹ năng đánh thường, tuyệt kỹ, siêu tuyệt kỹ (thần binh), nội tại, lõi Core và mẹo trận đấu đều hỗ trợ cả tiếng Anh và tiếng Việt.

### 2. 🗃️ Kho Dữ Liệu Tướng Meta SEA (UR / SSR+ / SSR / SR)
- Tích hợp sẵn bộ dữ liệu các tướng hàng đầu meta SEA (UR Saitama, UR Tatsumaki, UR Boros, UR Sonic, SSR+ Atomic Samurai, SSR+ Silverfang, SSR+ Mosquito Girl, SSR+ Geryuganshoop, Bomb Core, Gyoro-Gyoro, Zombieman, v.v.).
- Bộ lọc nâng cao theo Phẩm chất (UR, SSR+, SSR, SR, R), Hệ (Cách Đấu, Vũ Trang, Khoa Học, Siêu Năng), Phe Phái (Anh Hùng, Quái Nhân, Tội Phạm, Võ Sĩ), Xếp Hạng Tier (SSS, SS, S, A, B).
- Xem chi tiết đòn đánh thức tỉnh, chỉ số ATK, HP, DEF, SPD và trang bị khuyên dùng.

### 3. 🛡️ Xếp Trận Pháp 6 Vị Trí & Tối Ưu Lõi (Lineup & Core Simulator)
- Bàn cờ chiến thuật 3x2 (Hàng trước 1-3, Hàng sau 4-6).
- Tự động kiểm tra điều kiện kích hoạt Lõi Core (1 Cách Đấu + 1 Vũ Trang + 1 Khoa Học + 1 Siêu Năng).
- Công cụ sắp xếp thứ tự tốc độ ra chiêu (Turn Order Speed Tuning).
- Tính toán tổng lực chiến ước tính và lưu nhiều preset đội hình khác nhau.
- Sao chép tóm tắt đội hình chia sẻ với bang hội và bạn bè.

### 4. 🏆 Bảng Xếp Hạng Meta Tier Matrix
- Phân chia sức mạnh nhân vật theo từng chế độ: Đấu Trường Trực Tiếp (Live Arena), Đỉnh Phong Luận Võ (Apex Tournament), Boss Bang Hội & PvE.

### 5. ⚔️ Kho Trang Bị & Set Đồ (Gear & Set Planner)
- Danh mục chi tiết hiệu ứng kích hoạt Set 2 Món và Set 4 Món (Hiệp Sĩ, Âu Phục, Nguyên Thủy, Kiếm Khách, Tù Nhân, Thường Phục, Tia Chớp, Võ Thuật, v.v.).
- Gợi ý phân bổ dòng chỉ số ưu tiên (Tốc độ > Công% > Máu% > Bạo kích).

### 6. 📅 Lịch Banner SEA & Quản Lý Vé Gacha (Banner Roadmap)
- Theo dõi lịch phát hành và tái bản tướng UR/SSR+ theo đúng lộ trình server SEA FingerFun.
- Bảng tính kinh tế Vé Đen (Black Tickets) và Đá Tiến Hóa / Mảnh Đỏ cần thiết cho mốc 180 quay bảo hiểm.

### 7. 💾 Quản Trị Dữ Liệu & JSON Sync (Metadata Management)
- Thêm mới, chỉnh sửa, nhân bản, hoặc xóa nhân vật tùy biến.
- Tự động lưu trữ vào `LocalStorage`.
- Xuất dữ liệu ra file `.json` để sao lưu và Nhập `.json` để đồng bộ giữa các thiết bị.
- Nút "Khôi phục dữ liệu gốc SEA" an toàn bất cứ lúc nào.

---

## 🚀 Hướng Dẫn Chạy & Triển Khai (How to Run & Deploy)

### Chạy Trên Máy Cục Bộ (Run Locally)
```bash
# 1. Cài đặt thư viện phụ thuộc
npm install

# 2. Khởi chạy máy chủ phát triển
npm run dev

# 3. Mở trình duyệt tại http://localhost:5173
```

### Triển Khai Tự Động Lên GitHub Pages (`github.io`)
Dự án đã được thiết lập sẵn file workflow tự động hóa `.github/workflows/deploy.yml`:
1. Đẩy mã nguồn lên kho lưu trữ GitHub của bạn (`git push origin main`).
2. Vào **Settings** > **Pages** trên GitHub repository:
   - Tại mục **Build and deployment** > **Source**, chọn **GitHub Actions**.
3. GitHub Actions sẽ tự động biên dịch và xuất bản trang web của bạn lên địa chỉ:
   `https://<username>.github.io/<tên-repo>/`

---

## 🛠️ Công Nghệ Sử Dụng (Tech Stack)
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS + Custom OPM Glassmorphism & Cyber Anime Palette
- **Icons**: Lucide React
- **Storage**: Browser LocalStorage + JSON File Importer/Exporter
- **CI/CD**: GitHub Actions for GitHub Pages
