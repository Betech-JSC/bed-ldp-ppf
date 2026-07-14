"use client";

import React, { useState } from "react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [model, setModel] = useState("");
  const [pkg, setPkg] = useState("motorbike-premium");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !model.trim()) {
      setStatus("error");
      setMessage("Vui lòng điền đầy đủ các thông tin bắt buộc (*).");
      return;
    }

    const cleanPhone = phone.replace(/[\s.-]/g, "");
    const phoneRegex = /^[0-9]{9,11}$/;
    if (!phoneRegex.test(cleanPhone)) {
      setStatus("error");
      setMessage("Số điện thoại không hợp lệ! Vui lòng nhập từ 9-11 chữ số.");
      return;
    }

    setStatus("loading");
    setMessage("Đang xử lý gửi yêu cầu...");

    // Simulate API request
    setTimeout(() => {
      setName("");
      setPhone("");
      setModel("");
      setPkg("motorbike-premium");
      setNotes("");
      setStatus("success");
      setMessage("Đăng ký thành công! Đội ngũ PPF Đồng Nai sẽ gọi lại cho bạn trong 15 phút.");

      // Reset message after 6 seconds
      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 6000);
    }, 1500);
  };

  return (
    <div className="booking-form-panel glass-card reveal">
      <h3>Đăng Ký Tư Vấn & Báo Giá</h3>
      <p>Nhập thông tin xe của bạn dưới đây, chúng tôi sẽ liên hệ tư vấn dòng phim và báo giá chính xác nhất trong 15 phút.</p>
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Họ và tên *</label>
          <input 
            type="text" 
            id="fullName" 
            placeholder="Ví dụ: Nguyễn Văn A" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Số điện thoại *</label>
          <input 
            type="tel" 
            id="phoneNumber" 
            placeholder="Ví dụ: 0912345678" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="vehicleModel">Dòng xe của bạn (Hãng xe / Tên xe) *</label>
          <input 
            type="text" 
            id="vehicleModel" 
            placeholder="Ví dụ: Honda SH 150i / Mazda CX-5" 
            value={model}
            onChange={(e) => setModel(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="packageSelect">Gói dịch vụ quan tâm</label>
          <select 
            id="packageSelect"
            value={pkg}
            onChange={(e) => setPkg(e.target.value)}
          >
            <option value="motorbike-premium">Xe máy - Gói dán PPF Cao Cấp (Premium)</option>
            <option value="motorbike-standard">Xe máy - Gói dán Tiêu Chuẩn</option>
            <option value="car-interior">Ô tô - Dán bảo vệ Nội thất</option>
            <option value="car-front">Ô tô - Bảo vệ mặt trước chống đá dăm</option>
            <option value="car-full">Ô tô - Dán Full ngoại thất cao cấp</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="userNotes">Yêu cầu đặc biệt thêm (nếu có)</label>
          <textarea 
            id="userNotes" 
            rows={3} 
            placeholder="Nhập thêm ghi chú hoặc câu hỏi của bạn tại đây..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary btn-submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Đang Gửi..." : "Gửi Yêu Cầu Tư Vấn"}
        </button>
        <div className={`form-message ${status}`}>
          {message}
        </div>
      </form>
    </div>
  );
}
