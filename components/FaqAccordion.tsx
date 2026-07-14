"use client";

import React, { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Dán PPF có làm ảnh hưởng đến lớp sơn zin của xe không?",
    answer: "Hoàn toàn KHÔNG. Màng phim PPF TPU cao cấp được thiết kế với lớp keo acrylic an toàn tuyệt đối. Khi bóc bỏ sau nhiều năm sử dụng, phim không để lại bất kỳ vết keo nào và hoàn toàn không làm tróc lớp sơn zin nguyên bản của xe."
  },
  {
    question: "Khả năng tự phục hồi vết xước của PPF hoạt động thế nào?",
    answer: "Chất liệu TPU (Polyurethane nhiệt dẻo) có tính đàn hồi cao. Khi bề mặt bị xước dăm nhẹ, cấu trúc phân tử của màng phim chỉ bị xê dịch tạm thời. Khi gặp nhiệt độ ấm từ ánh nắng mặt trời hoặc nước ấm rửa xe, các liên kết phân tử sẽ giãn nở trở lại vị trí cũ, làm vết xước biến mất hoàn toàn."
  }
];

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion-group">
      <h3>Câu Hỏi Thường Gặp</h3>
      
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
        >
          <button 
            type="button" 
            className="faq-header"
            onClick={() => toggleAccordion(index)}
          >
            <span>{faq.question}</span>
            <span className="faq-icon">+</span>
          </button>
          <div className="faq-body">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
