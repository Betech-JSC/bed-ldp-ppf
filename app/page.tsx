"use client";

import React, { useState, useEffect } from "react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FaqAccordion from "@/components/FaqAccordion";
import BookingForm from "@/components/BookingForm";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [navActive, setNavActive] = useState(false);
  const [activeSection, setActiveSection] = useState("trang-chu");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
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
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      {/* HEADER / NAVIGATION */}
      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="container header-container">
          <a href="#" className="logo">
            <img src="/images/logo.png" alt="PPF Đồng Nai Logo" className="logo-img" />
          </a>

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
            <a href="tel:0961090628" className="btn btn-accent btn-nav-phone mobile-only-phone">
              <svg className="btn-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.27c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.26 1.12l-2.2 2.2z"/>
              </svg>
              096 109 06 28
            </a>
          </nav>

          <div className="header-action">
            <a href="tel:0961090628" className="btn btn-accent desktop-only-phone">
              <svg className="btn-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.11-.27c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.26 1.12l-2.2 2.2z"/>
              </svg>
              096 109 06 28
            </a>
          </div>
          
          <button 
            className={`nav-toggle ${navActive ? "active" : ""}`} 
            onClick={() => setNavActive(!navActive)}
            aria-label="Mở menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
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
            <img 
              src="/images/ford-ppf.png" 
              alt="Xe Ford Ranger Raptor dán phim bảo vệ sơn PPF cao cấp" 
              className="hero-svg-car"
              style={{ borderRadius: '16px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-md)', width: '100%', height: 'auto', display: 'block', position: 'relative', zIndex: 1 }}
            />
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
              <div className="process-img-wrapper">
                <img 
                  src="/images/process-teckwrap.png" 
                  alt="Thi công dán PPF TeckWrap trong phòng sạch chuẩn" 
                  className="process-img"
                />
                <div className="process-img-caption">
                  THI CÔNG PHÒNG SẠCH KHÔNG BỤI 100%
                </div>
              </div>
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
                <img 
                  src="/images/gallery-1.jpg" 
                  alt="Ford Everest Platinum dán PPF" 
                />
              </div>
              <div className="gallery-info">
                <h4>Ford Everest Platinum</h4>
                <p>Dán phim PPF TPU bóng bảo vệ sơn xe, giữ trọn màu sơn xanh rêu đặc biệt nguyên bản.</p>
              </div>
            </div>

            <div className="gallery-card glass-card reveal">
              <div className="gallery-img-mock">
                <img 
                  src="/images/gallery-2.png" 
                  alt="Hyundai Grand i10 dán PPF"
                />
              </div>
              <div className="gallery-info">
                <h4>Hyundai Grand i10</h4>
                <p>Dán PPF chống xước cản trước, đèn pha và các chi tiết nội - ngoại thất nhựa bóng.</p>
              </div>
            </div>

            <div className="gallery-card glass-card reveal">
              <div className="gallery-img-mock">
                <img 
                  src="/images/gallery-3.jpg" 
                  alt="Ford Everest dán PPF"
                />
              </div>
              <div className="gallery-info">
                <h4>Ford Everest</h4>
                <p>Hiệu chỉnh bề mặt sơn chuyên sâu kết hợp phủ màng bảo vệ PPF TPU cao cấp.</p>
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
                    <p>10A/7 Xa Lộ Hà Nội, Khu Phố 5, Phường Tam Hiệp, Biên Hòa, Đồng Nai</p>
                  </div>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">📞</span>
                  <div>
                    <strong>Hotline tư vấn 24/7:</strong>
                    <p><a href="tel:0961090628">096 109 06 28</a></p>
                  </div>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">✉️</span>
                  <div>
                    <strong>Email liên hệ:</strong>
                    <p><a href="mailto:ppfdongnai@gmail.com">ppfdongnai@gmail.com</a></p>
                  </div>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">💬</span>
                  <div>
                    <strong>Facebook Messenger:</strong>
                    <p><a href="https://m.me/ppfdongnai" target="_blank" rel="noopener">PPF Đồng Nai</a></p>
                  </div>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">🔗</span>
                  <div>
                    <strong>Liên kết hệ thống:</strong>
                    <p><a href="https://scarcityvietnam.com.vn" target="_blank" rel="noopener">scarcityvietnam.com.vn</a></p>
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
            <a href="#" className="logo">
              <img src="/images/logo.png" alt="PPF Đồng Nai Logo" className="logo-img" />
            </a>
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
            <p>&copy; 2026 PPF Đồng Nai. Bảo vệ hoàn hảo giá trị xế yêu.</p>
          </div>
        </div>
      </footer>

      {/* FLOATING ACTION WIDGET */}
      <div className="floating-widget">
        <a 
          href="https://zalo.me/0961090628" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="float-btn float-zalo"
          aria-label="Chat qua Zalo"
        >
          <svg viewBox="0 0 24 24" style={{ width: '28px', height: '28px' }}>
            <path fill="#ffffff" d="M12 3c-5.5 0-10 3.8-10 8.5 0 2.7 1.5 5.1 3.9 6.7l-1 3c-.1.3.1.6.4.5l3.5-1.5c1 .5 2.1.8 3.2.8 5.5 0 10-3.8 10-8.5S17.5 3 12 3z" />
            <path fill="#0068FF" d="M14.2 15h-4.6v-1.1l2.8-3.4H10V9.4h4.2v1.1l-2.8 3.4h2.8V15z" />
          </svg>
        </a>
        <a 
          href="tel:0961090628" 
          className="float-btn float-phone"
          aria-label="Gọi hotline"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
      </div>
    </>
  );
}
