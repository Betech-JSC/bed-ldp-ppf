# Hệ Thống Nhận Diện Thương Hiệu - PPF Đồng Nai

Tài liệu này xác định nền tảng chiến lược thương hiệu, ngôn ngữ thiết kế và quy chuẩn truyền thông cho **PPF Đồng Nai**, phục vụ trực tiếp cho việc triển khai giao diện và nội dung trên website.

---

## 🎯 Chiến Lược Thương Hiệu (Brand Strategy)

### 1. Ý Nghĩa Thương Hiệu (Brand Purpose)
*   **Giá trị cốt lõi:** Mang lại sự an tâm tuyệt đối cho chủ sở hữu xe bằng cách bảo vệ tối đa giá trị thẩm mỹ ban đầu của phương tiện thông qua công nghệ bảo vệ bề mặt tiên tiến nhất thế giới.
*   **Lý do tồn tại:** Chiếc xe không chỉ là phương tiện di chuyển mà còn là tài sản quý giá và niềm tự hào của chủ sở hữu. PPF Đồng Nai bảo vệ niềm tự hào đó khỏi những vết xước, tác nhân thời tiết và thời gian.

### 2. Tầm Nhìn (Brand Vision)
*   Trở thành trung tâm thi công Phim bảo vệ sơn (PPF) chuyên nghiệp, uy tín và dẫn đầu về công nghệ tại khu vực Đồng Nai và các vùng lân cận.

### 3. Sứ Mệnh (Brand Mission)
*   Cung cấp các giải pháp bảo vệ bề mặt sơn cao cấp (PPF TPU tự phục hồi vết xước) với kỹ thuật thi công tinh xảo, tỉ mỉ chuẩn từng milimet, đi kèm chính sách bảo hành dài hạn và minh bạch.

### 4. Giá Trị Cốt Lõi (Brand Values)
1.  **Chính Xác (Precision):** Tỉ mỉ trong từng mép dán, góc bo, cắt phim chính xác 100% bằng phần mềm CNC chuyên dụng, không dùng dao cắt phạm vào sơn xe.
2.  **Bền Vững (Durability):** Cam kết sử dụng vật liệu TPU cao cấp từ các thương hiệu chính hãng, nói không với màng PVC rẻ tiền mau xuống cấp.
3.  **Tận Tâm (Commitment):** Tư vấn đúng nhu cầu, đúng loại xe, hỗ trợ kỹ thuật và chăm sóc khách hàng trọn đời sản phẩm.

### 5. Cá Tính Thương Hiệu (Brand Personality)
*   **Hiện đại & Công nghệ (Tech-forward):** Luôn đi đầu về vật liệu TPU thế hệ mới nhất và phần mềm CNC.
*   **Chuyên nghiệp & Sang trọng (Premium & Professional):** Không gian phòng dán chuẩn phòng sạch, thợ kỹ thuật tay nghề cao, thái độ phục vụ lịch sự.
*   **Đáng tin cậy (Trustworthy):** Chính sách bảo hành điện tử rõ ràng lên đến 10 năm.

---

## 🎨 Nhận Diện Hình Ảnh (Visual Identity)

### 1. Hệ Màu Sắc (Brand Color System)
Hệ màu lấy cảm hứng từ công nghệ sợi carbon và các siêu xe thể thao hiện đại, sử dụng chế độ tối (dark mode) làm chủ đạo để làm nổi bật lớp màng PPF trong suốt, bóng bẩy.

```css
:root {
  /* Màu chủ đạo (Primary & Neutrals) */
  --bg-deep: #0B0C0E;        /* Đen huyền bí - Nền chính */
  --bg-card: #15181C;        /* Xám carbon đậm - Nền thẻ/khung */
  --bg-hover: #1E2228;       /* Xám trung tính - Trạng thái hover */
  
  /* Màu nhấn công nghệ (Accent Colors) */
  --accent-cyan: #00F2FE;     /* Xanh Cyan điện tử - Năng lượng, công nghệ */
  --accent-cyan-rgb: 0, 242, 254;
  --accent-blue: #0072FF;     /* Xanh Blue hoàng gia - Chuyên nghiệp, bảo vệ */
  --accent-gold: #FFAB00;     /* Vàng Gold luxury - Điểm nhấn cao cấp, bảo hành */
  
  /* Màu văn bản (Typography) */
  --text-white: #FFFFFF;      /* Chữ trắng - Tiêu đề chính */
  --text-gray-100: #EAEAEA;   /* Chữ xám nhạt - Thân bài chính */
  --text-gray-400: #9FA4AB;   /* Chữ xám vừa - Chú thích, tiêu đề phụ */
  
  /* Đường viền & Phân chia */
  --border-light: rgba(255, 255, 255, 0.08);
  --border-glow: rgba(0, 242, 254, 0.2);
}
```

### 2. Hệ Thống Phông Chữ (Typography)
*   **Font Tiêu Đề (Headings):** `Outfit` hoặc `Montserrat` (Sans-serif) - Mang lại cảm giác thể thao, góc cạnh, mạnh mẽ và công nghệ.
*   **Font Văn Bản Thân (Body):** `Inter` hoặc `Roboto` (Sans-serif) - Cực kỳ dễ đọc ở mọi kích cỡ màn hình, tạo cảm giác tinh gọn, hiện đại.

---

## 📝 Phong Cách Truyền Thông & Thông Điệp (Brand Voice & Messaging)

### 1. Giọng Điệu Thương Hiệu (Brand Voice)
*   **Gãy gọn & Tự tin:** Trình bày rõ ràng công dụng, không phóng đại quá mức nhưng khẳng định chắc chắn về chất lượng màng TPU và tay nghề kỹ thuật.
*   **Tập trung vào giải pháp:** Nhấn mạnh việc bảo vệ sơn zin, tiết kiệm chi phí sơn lại và giữ gìn giá trị bán lại của xe.
*   **Thân thiện nhưng chuyên nghiệp:** Sử dụng ngôn từ dễ hiểu cho người yêu xe, không quá chuyên ngành nhưng vẫn đảm bảo tính chính xác kỹ thuật.

### 2. Thông Điệp Cốt Lõi (Key Messaging)
*   **Slogan chính:** *"Bảo Vệ Vô Hình - Đẳng Cấp Hữu Hình"* hoặc *"Giữ Trọn Sơn Zin - Tự Tin Bứt Phá"*
*   **Thông điệp phụ:**
    *   *Dành cho ô tô:* "Lớp khiên pha lê tự phục hồi vết xước. Bảo vệ xe 24/7 trước đá dăng, nhựa cây và tia UV phá hủy bề mặt sơn."
    *   *Dành cho xe máy:* "Công nghệ PPF TPU tự phục hồi, chống ố vàng vượt trội. Thi công ôm sát mép góc, hoàn hảo từng milimet."
