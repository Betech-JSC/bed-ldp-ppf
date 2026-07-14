"use client";

import React, { useState, useEffect } from "react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FaqAccordion from "@/components/FaqAccordion";
import BookingForm from "@/components/BookingForm";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const [activeSection, setActiveSection] = useState("trang-chu");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ["trang-chu", "showcase", "bang-gia", "quy-trinh", "thu-vien", "lien-he"];
      let current = "trang-chu";
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = sectionId;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const glassCards = document.querySelectorAll(".glass-card");
    const handleMouseMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    };

    glassCards.forEach(card => {
      card.addEventListener("mousemove", handleMouseMove as any);
    });

    return () => {
      glassCards.forEach(card => {
        card.removeEventListener("mousemove", handleMouseMove as any);
      });
    };
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* HEADER / NAVIGATION */}
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-container">
          <a href="#" className="logo">
            <span className="logo-accent">PPF</span> ĐỒNG NAI
          </a>
          
          <button 
            className={`nav-toggle ${navActive ? "active" : ""}`} 
            onClick={() => setNavActive(!navActive)}
            aria-label="Mở menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          <nav className={`nav-menu ${navActive ? "active" : ""}`}>
            <a 
              href="#trang-chu" 
              className={`nav-link ${activeSection === "trang-chu" ? "active" : ""}`}
              onClick={() => setNavActive(false)}
            >
              Trang Chủ
            </a>
            <a 
              href="#showcase" 
              className={`nav-link ${activeSection === "showcase" ? "active" : ""}`}
              onClick={() => setNavActive(false)}
            >
              Về PPF
            </a>
            <a 
              href="#bang-gia" 
              className={`nav-link ${activeSection === "bang-gia" ? "active" : ""}`}
              onClick={() => setNavActive(false)}
            >
              Bảng Giá
            </a>
            <a 
              href="#quy-trinh" 
              className={`nav-link ${activeSection === "quy-trinh" ? "active" : ""}`}
              onClick={() => setNavActive(false)}
            >
              Quy Trình
            </a>
            <a 
              href="#thu-vien" 
              className={`nav-link ${activeSection === "thu-vien" ? "active" : ""}`}
              onClick={() => setNavActive(false)}
            >
              Thư Viện
            </a>
            <a 
              href="#lien-he" 
              className={`nav-link ${activeSection === "lien-he" ? "active" : ""}`}
              onClick={() => setNavActive(false)}
            >
              Liên Hệ
            </a>
            <a href="tel:0933156388" className="btn btn-accent btn-nav-phone">
              <svg className="btn-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.27c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.26 1.12l-2.2 2.2z"/>
              </svg>
              0933.156.388
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO BANNER SECTION */}
        <section id="trang-chu" className="hero">
        <div className="container hero-container">
          <div className="hero-content reveal">
            <div className="badge badge-gold">
              ★ CÔNG NGHỆ BẢO VỆ SƠN TIÊN TIẾN NHẤT
            </div>
            <h1 className="hero-title">
              BẢO VỆ VÔ HÌNH <br />
              <span className="text-gradient">ĐẲNG CẤP HỮU HÌNH</span>
            </h1>
            <p className="hero-desc">
              Lớp khiên pha lê TPU tự phục hồi vết xước. Bảo vệ xế yêu tuyệt đối trước đá dăm, tác nhân môi trường và giữ trọn lớp sơn nguyên bản lâu dài.
            </p>
            <div className="hero-actions">
              <a href="#lien-he" className="btn btn-primary">
                Nhận Báo Giá Ngay
                <svg className="btn-icon" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </a>
              <a href="#bang-gia" className="btn btn-secondary">Xem Bảng Giá</a>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-num">99%</span>
                <span className="stat-lbl">Chống xước dăm</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">100%</span>
                <span className="stat-lbl">Phim TPU nhập khẩu</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">10Y</span>
                <span className="stat-lbl">Bảo hành chính hãng</span>
              </div>
            </div>
          </div>
          
          <div className="hero-image-wrapper reveal">
            <div className="hero-glow"></div>
            <svg className="hero-svg-car" viewBox="0 0 600 350" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bản vẽ quét laser xe hơi dán PPF bảo vệ sơn">
              <defs>
                <linearGradient id="carGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00F2FE" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#0072FF" stopOpacity="0.2"/>
                </linearGradient>
                <linearGradient id="glowGrad" x1="0.5" y1="0" x2="0.5" y2="1">
                  <stop offset="0%" stopColor="#00F2FE" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#00F2FE" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <ellipse cx="300" cy="300" rx="220" ry="30" fill="url(#glowGrad)"/>
              <path d="M80 260 L140 240 Q170 230 180 200 L210 120 Q225 90 280 90 L380 95 Q420 100 440 130 L490 200 Q510 220 540 230 L560 250 Q580 265 570 280 L540 290 L490 290 Q475 260 440 260 Q405 260 390 290 L210 290 Q195 260 160 260 Q125 260 110 290 L60 290 Q50 280 80 260 Z" fill="#14171c" stroke="url(#carGrad)" strokeWidth="2.5"/>
              <path d="M220 120 L275 97 L370 102 L410 135 L435 180 L205 180 Z" fill="rgba(0, 242, 254, 0.05)" stroke="url(#carGrad)" strokeWidth="1.5"/>
              <path d="M300 97 L300 180" stroke="url(#carGrad)" strokeWidth="1.5"/>
              
              <circle cx="160" cy="275" r="35" fill="#08090b" stroke="url(#carGrad)" strokeWidth="3"/>
              <circle cx="160" cy="275" r="25" fill="none" stroke="url(#carGrad)" strokeWidth="1" strokeDasharray="4 4"/>
              <circle cx="160" cy="275" r="8" fill="url(#carGrad)"/>
              
              <circle cx="440" cy="275" r="35" fill="#08090b" stroke="url(#carGrad)" strokeWidth="3"/>
              <circle cx="440" cy="275" r="25" fill="none" stroke="url(#carGrad)" strokeWidth="1" strokeDasharray="4 4"/>
              <circle cx="440" cy="275" r="8" fill="url(#carGrad)"/>

              <path d="M80 180 L520 180" stroke="#00F2FE" strokeWidth="2" opacity="0.6" strokeDasharray="5 5"/>
              <path d="M120 150 L480 150" stroke="#00F2FE" strokeWidth="1.5" opacity="0.4"/>
              <path d="M150 120 L450 120" stroke="#00F2FE" strokeWidth="1" opacity="0.2"/>
              
              <polygon points="120,50 480,50 300,180" fill="url(#glowGrad)" opacity="0.4"/>
            </svg>
          </div>
        </div>
      </section>

      {/* PPF TECHNOLOGY & BENEFITS */}
      <section id="showcase" className="section showcase">
        <div className="container">
          <div className="section-title-wrapper text-center reveal">
            <div className="badge">
              GIẢI PHÁP BẢO VỆ HOÀN HẢO
            </div>
            <h2 className="section-title">Tại Sao Nên Chọn PPF TPU Cao Cấp?</h2>
            <p className="section-subtitle">
              Khác với phủ ceramic thông thường hay dán keo xe giá rẻ, PPF TPU mang lại lớp bảo vệ vật lý đàn hồi siêu việt với công nghệ tự phục hồi vết xước.
            </p>
          </div>
          
          <BeforeAfterSlider />
          
          <div className="grid grid-3 benefit-grid">
            <div className="glass-card reveal">
              <div className="benefit-icon">🛡️</div>
              <h3 className="benefit-title">Chống Trầy Xước Vật Lý</h3>
              <p className="benefit-desc">
                Vật liệu TPU dày 7.5 - 8.5 mil triệt tiêu lực tác động của đá dăm, mảnh thủy tinh, hay va quẹt nhẹ khi lưu thông.
              </p>
            </div>
            <div className="glass-card reveal">
              <div className="benefit-icon">🔄</div>
              <h3 className="benefit-title">Tự Phục Hồi Vết Xước</h3>
              <p className="benefit-desc">
                Các vết trầy xước dăm, xước xoáy khi rửa xe sẽ tự động biến mất khi tiếp xúc với nhiệt độ ấm (ánh nắng mặt trời hoặc nước ấm).
              </p>
            </div>
            <div className="glass-card reveal">
              <div className="benefit-icon">🧪</div>
              <h3 className="benefit-title">Chống Ố Vàng & Hóa Chất</h3>
              <p className="benefit-desc">
                Màng phủ kỵ nước giúp bề mặt kháng axit từ nước mưa, nhựa cây, phân chim và tia UV làm xỉn màu, ố vàng sơn xe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING & PACKAGES */}
      <section id="bang-gia" className="section bg-darker">
        <div className="container">
          <div className="section-title-wrapper text-center reveal">
            <div className="badge badge-gold">
              BẢNG GIÁ DỊCH VỤ
            </div>
            <h2 className="section-title">Các Gói Dán PPF Chuyên Nghiệp</h2>
            <p className="section-subtitle">
              Lựa chọn gói dán phù hợp tối ưu nhất cho xe máy và xe hơi của bạn với cam kết chất lượng tuyệt đối.
            </p>
          </div>

          <div className="comparison-box glass-card reveal">
            <h3 className="comparison-title text-center">So Sánh Phim PPF TPU & Keo Dán PVC Thông Thường</h3>
            <div className="table-responsive">
              <table className="comp-table">
                <thead>
                  <tr>
                    <th>Tính năng</th>
                    <th className="text-cyan text-center">PPF TPU (Khuyên Dùng)</th>
                    <th>Keo dán PVC giá rẻ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Khả năng tự phục hồi xước</td>
                    <td className="text-cyan font-bold">Có (Dưới tác dụng nhiệt)</td>
                    <td>Không (Mất thẩm mỹ)</td>
                  </tr>
                  <tr>
                    <td>Độ dày bảo vệ</td>
                    <td className="text-cyan font-bold">Dày 7.5 - 8.5 mil (Chống đá văng tốt)</td>
                    <td>Dày 2 - 3 mil (Dễ rách, thủng)</td>
                  </tr>
                  <tr>
                    <td>Thời gian chống ố vàng</td>
                    <td className="text-cyan font-bold">5 - 10 năm</td>
                    <td>3 - 6 tháng (Bắt đầu ố vàng)</td>
                  </tr>
                  <tr>
                    <td>Độ bóng bề mặt</td>
                    <td className="text-cyan font-bold">Tăng 30% - 40% độ bóng sơn</td>
                    <td>Làm mờ, giảm độ bóng theo thời gian</td>
                  </tr>
                  <tr>
                    <td>Khi bóc gỡ phim</td>
                    <td className="text-cyan font-bold">An toàn 100% không để lại keo thừa</td>
                    <td>Dễ bong tróc sơn zin, keo dính chặt</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-2 package-grids">
            <div className="package-group-card glass-card reveal">
              <div className="package-header">
                <span className="group-icon">🏍️</span>
                <h3>Dành Cho Xe Máy</h3>
                <p>Bảo vệ toàn diện cho các dòng xe SH, Vespa, Exciter, PKL...</p>
              </div>
              
              <ul className="package-list">
                <li className="package-item">
                  <div className="pkg-info">
                    <span className="pkg-name">Gói Tiêu Chuẩn (Standard)</span>
                    <span className="pkg-desc">Dán PPF phần sơn bóng chính chịu lực, chống trầy cốp xe và yếm trước.</span>
                  </div>
                  <div className="pkg-price-box">
                    <span className="pkg-price">từ 1.2M</span>
                    <span className="pkg-warranty">BH: 3 Năm</span>
                  </div>
                </li>
                <li className="package-item border-cyan">
                  <div className="pkg-info">
                    <span className="pkg-name text-cyan">Gói Cao Cấp (Premium) <span className="badge badge-gold mini-badge">Bán Chạy</span></span>
                    <span className="pkg-desc">Dán full 100% chi tiết sơn xe bóng và nhám, bảo vệ tối đa các góc khuất.</span>
                  </div>
                  <div className="pkg-price-box">
                    <span className="pkg-price text-cyan">từ 2.5M</span>
                    <span className="pkg-warranty text-gold">BH: 5 Năm</span>
                  </div>
                </li>
                <li className="package-item">
                  <div className="pkg-info">
                    <span className="pkg-name">Gói Cao Cấp Nhất (Luxury)</span>
                    <span className="pkg-desc">Sử dụng màng PPF TPU Mỹ siêu chịu lực, tăng bóng tối đa, phủ thêm lớp Ceramic bề mặt.</span>
                  </div>
                  <div className="pkg-price-box">
                    <span className="pkg-price">từ 4.5M</span>
                    <span className="pkg-warranty">BH: 7 Năm</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="package-group-card glass-card reveal">
              <div className="package-header">
                <span className="group-icon">🚗</span>
                <h3>Dành Cho Ô Tô</h3>
                <p>Các gói dán bảo vệ các chi tiết ngoại thất, nội thất ô tô.</p>
              </div>
              
              <ul className="package-list">
                <li className="package-item">
                  <div className="pkg-info">
                    <span className="pkg-name">Gói Bảo Vệ Nội Thất</span>
                    <span className="pkg-desc">Dán PPF chi tiết nhựa bóng piano, màn hình giải trí, bảng điều khiển trung tâm.</span>
                  </div>
                  <div className="pkg-price-box">
                    <span className="pkg-price">từ 2.0M</span>
                    <span className="pkg-warranty">BH: 5 Năm</span>
                  </div>
                </li>
                <li className="package-item">
                  <div className="pkg-info">
                    <span className="pkg-name">Gói Bảo Vệ Mặt Trước (Cản trước, Capo, Đèn)</span>
                    <span className="pkg-desc">Bảo vệ các khu vực nhạy cảm, chịu tác động trực tiếp của đá dăm khi đi cao tốc.</span>
                  </div>
                  <div className="pkg-price-box">
                    <span className="pkg-price">từ 12.0M</span>
                    <span className="pkg-warranty">BH: 7 Năm</span>
                  </div>
                </li>
                <li className="package-item border-cyan">
                  <div className="pkg-info">
                    <span className="pkg-name text-cyan">Gói Dán Full Xe (Toàn Bộ Ngoại Thất)</span>
                    <span className="pkg-desc">Bọc kín toàn bộ bề mặt sơn bóng ngoại thất xe, chống xước, chống bẩn và giữ bóng tuyệt đối.</span>
                  </div>
                  <div className="pkg-price-box">
                    <span className="pkg-price text-cyan">từ 35.0M</span>
                    <span className="pkg-warranty text-gold">BH: 10 Năm</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="quy-trinh" className="section">
        <div className="container">
          <div className="section-title-wrapper text-center reveal">
            <div className="badge">
              QUY TRÌNH THI CÔNG
            </div>
            <h2 className="section-title">Quy Trình Thi Công 5 Bước Chuẩn Sạch</h2>
            <p className="section-subtitle">
              Hiệu quả bảo vệ của PPF phụ thuộc lớn vào sự tỉ mỉ trong khâu chuẩn bị bề mặt và kỹ thuật dán của kỹ thuật viên.
            </p>
          </div>

          <div className="grid grid-2 process-grid">
            <div className="process-steps-wrapper">
              <div className="process-step-item reveal">
                <span className="step-num">01</span>
                <div className="step-content">
                  <h4>Vệ sinh xe chuyên sâu (Detail Wash)</h4>
                  <p>Rửa xe đa bước, tẩy bụi sắt, tẩy nhựa đường bằng đất sét Clay-bar chuyên dụng để làm sạch hoàn toàn tạp chất bề mặt.</p>
                </div>
              </div>
              
              <div className="process-step-item reveal">
                <span className="step-num">02</span>
                <div className="step-content">
                  <h4>Hiệu chỉnh bề mặt sơn (Paint Correction)</h4>
                  <p>Đánh bóng loại bỏ các vết xước xoáy, xước dăm nhẹ trên bề mặt sơn zin để đảm bảo bề mặt bằng phẳng nhất trước khi dán.</p>
                </div>
              </div>
              
              <div className="process-step-item reveal">
                <span className="step-num">03</span>
                <div className="step-content">
                  <h4>Thiết kế & Cắt phim bằng máy CNC</h4>
                  <p>Phim PPF được thiết kế và cắt bằng phần mềm máy tính theo form xe chuẩn 100%, hạn chế việc dùng dao cắt trực tiếp trên xe.</p>
                </div>
              </div>
              
              <div className="process-step-item reveal">
                <span className="step-num">04</span>
                <div className="step-content">
                  <h4>Thi công dán ướt (Wrapping PPF)</h4>
                  <p>Kỹ thuật viên dán phim ướt chuyên nghiệp tiến hành gạt bỏ bọt khí, vuốt ôm sát mép góc xe tỉ mỉ dưới điều kiện phòng khép kín sạch bụi.</p>
                </div>
              </div>
              
              <div className="process-step-item reveal">
                <span className="step-num">05</span>
                <div className="step-content">
                  <h4>Kiểm tra chất lượng & Sấy nhiệt cố định</h4>
                  <p>Tiến hành kiểm tra kỹ từng mép cạnh phim, sấy nhiệt gia tăng độ bám dính của keo rồi bàn giao xe đạt chứng nhận hoàn hảo.</p>
                </div>
              </div>
            </div>
            
            <div className="process-image-panel reveal">
              <div className="glow-box"></div>
              <svg className="process-svg" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mô phỏng thi công gạt nước và ôm góc dán PPF">
                <rect width="100%" height="100%" rx="20" fill="#14171c" stroke="var(--border-light)"/>
                <path d="M100 250 C 150 180, 350 180, 400 250" stroke="#0072FF" strokeWidth="12" strokeLinecap="round"/>
                <path d="M100 250 C 150 180, 350 180, 400 250" stroke="#00F2FE" strokeWidth="4" strokeLinecap="round"/>
                
                <path d="M 220 150 L 320 190 L 300 220 L 200 180 Z" fill="rgba(0, 242, 254, 0.2)" stroke="#00F2FE" strokeWidth="2"/>
                <path d="M 200 180 L 220 150" stroke="#00F2FE" strokeWidth="4"/>
                
                <circle cx="180" cy="200" r="3" fill="#00F2FE"/>
                <circle cx="210" cy="220" r="2" fill="#00F2FE"/>
                <circle cx="280" cy="210" r="4" fill="#00F2FE"/>
                <circle cx="340" cy="230" r="3" fill="#00F2FE"/>
                
                <polygon points="120,80 140,70 160,80 160,100 140,110 120,100" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" fill="none"/>
                <polygon points="360,380 380,370 400,380 400,400 380,410 360,400" stroke="rgba(0, 242, 254, 0.1)" strokeWidth="1" fill="none"/>
                
                <text x="50" y="440" fill="#999" fontFamily="Outfit" fontSize="16">THI CÔNG PHÒNG SẠCH KHÔNG BỤI 100%</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO GALLERY */}
      <section id="thu-vien" className="section bg-darker">
        <div className="container">
          <div className="section-title-wrapper text-center reveal">
            <div className="badge badge-gold">
              THƯ VIỆN ẢNH THỰC TẾ
            </div>
            <h2 className="section-title">Sản Phẩm Đã Hoàn Thiện</h2>
            <p className="section-subtitle">
              Xem hình ảnh thực tế các dòng xe hơi, xe máy cao cấp đã được thi công phủ màng PPF TPU bảo vệ tại showroom.
            </p>
          </div>

          <div className="grid grid-3 gallery-grid">
            <div className="gallery-card glass-card reveal">
              <div className="gallery-img-mock">
                <svg viewBox="0 0 350 250" className="svg-visual" role="img" aria-label="Hình ảnh xe Honda SH 350i dán PPF TPU bóng bảo vệ sơn xe">
                  <rect width="100%" height="100%" fill="#16191E"/>
                  <path d="M 50 180 Q 175 140 300 180" stroke="#00F2FE" strokeWidth="4" fill="none"/>
                  <text x="30" y="50" fill="#FFF" fontFamily="Outfit" fontWeight="bold">Honda SH 350i</text>
                  <text x="30" y="80" fill="#999" fontSize="12">Gói dán Full xe Premium TPU</text>
                </svg>
              </div>
              <div className="gallery-info">
                <h4>Honda SH 350i</h4>
                <p>Dán PPF TPU bóng bảo vệ toàn diện nước sơn xi măng nguyên bản.</p>
              </div>
            </div>

            <div className="gallery-card glass-card reveal">
              <div className="gallery-img-mock">
                <svg viewBox="0 0 350 250" className="svg-visual" role="img" aria-label="Hình ảnh xe Mercedes E300 dán PPF bảo vệ sơn và đèn trước">
                  <rect width="100%" height="100%" fill="#16191E"/>
                  <path d="M 50 180 Q 175 120 300 180" stroke="#0072FF" strokeWidth="4" fill="none"/>
                  <text x="30" y="50" fill="#FFF" fontFamily="Outfit" fontWeight="bold">Mercedes-Benz E300</text>
                  <text x="30" y="80" fill="#999" fontSize="12">Gói bảo vệ mặt trước + Cột piano</text>
                </svg>
              </div>
              <div className="gallery-info">
                <h4>Mercedes-Benz E300 AMG</h4>
                <p>Dán trọn cản trước, đèn pha và toàn bộ chi tiết nhựa bóng đen Piano cột B/C.</p>
              </div>
            </div>

            <div className="gallery-card glass-card reveal">
              <div className="gallery-img-mock">
                <svg viewBox="0 0 350 250" className="svg-visual" role="img" aria-label="Hình ảnh xe Vespa GTS dán PPF bảo vệ sơn bóng">
                  <rect width="100%" height="100%" fill="#16191E"/>
                  <path d="M 50 160 Q 175 160 300 160" stroke="#FFAB00" strokeWidth="4" fill="none"/>
                  <text x="30" y="50" fill="#FFF" fontFamily="Outfit" fontWeight="bold">Vespa GTS Super Sport</text>
                  <text x="30" y="80" fill="#999" fontSize="12">Gói dán PPF chống xước cao cấp</text>
                </svg>
              </div>
              <div className="gallery-info">
                <h4>Vespa GTS Super Sport</h4>
                <p>Bọc màng bảo vệ ôm sát toàn bộ các đường cong góc cạnh phức tạp của xe.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS & CONTACT FORM */}
      <section id="lien-he" className="section">
        <div className="container">
          <div className="grid grid-2 contact-grid">
            <div className="contact-info-panel reveal">
              <div className="badge">LIÊN HỆ & TƯ VẤN</div>
              <h2>Bảo Vệ Xe Của Bạn Ngay Hôm Nay</h2>
              <p className="contact-lead-text">
                Đặt lịch hẹn hôm nay để nhận ưu đãi phủ Ceramic bề mặt miễn phí khi dán gói PPF Premium.
              </p>

              <div className="contact-meta">
                <div className="meta-item">
                  <span className="meta-icon">📍</span>
                  <div>
                    <strong>Địa chỉ Showroom:</strong>
                    <p>Xa lộ Hà Nội, Khu Phố 33, Phường Tam Hiệp, TP. Biên Hòa, Đồng Nai (Gần ngã tư Tam Hiệp)</p>
                  </div>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">📞</span>
                  <div>
                    <strong>Hotline tư vấn 24/7:</strong>
                    <p><a href="tel:0933156388">0933.156.388</a></p>
                  </div>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">💬</span>
                  <div>
                    <strong>Hỗ trợ Zalo:</strong>
                    <p><a href="https://zalo.me/0933156388" target="_blank" rel="noopener">Zalo: PPF Đồng Nai</a></p>
                  </div>
                </div>
              </div>

              <FaqAccordion />
            </div>

            <BookingForm />
          </div>
        </div>
      </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-container">
          <div className="footer-brand">
            <a href="#" className="logo"><span className="logo-accent">PPF</span> ĐỒNG NAI</a>
            <p>Trung tâm nâng cấp và thi công phim dán bảo vệ bề mặt sơn chuyên nghiệp số 1 tại Biên Hòa, Đồng Nai.</p>
          </div>
          <div className="footer-links">
            <h4>Liên Kết Nhanh</h4>
            <ul>
              <li><a href="#trang-chu">Trang Chủ</a></li>
              <li><a href="#showcase">Về PPF</a></li>
              <li><a href="#bang-gia">Bảng Giá</a></li>
              <li><a href="#quy-trinh">Quy Trình</a></li>
              <li><a href="#lien-he">Liên Hệ</a></li>
            </ul>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 PPF Đồng Nai. Bảo vệ hoàn hảo giá trị xế yêu. Thiết kế bởi Antigravity.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
