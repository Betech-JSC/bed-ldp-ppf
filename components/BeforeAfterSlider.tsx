"use client";

import React, { useState, useRef, useEffect } from "react";

export default function BeforeAfterSlider() {
  const [percentage, setPercentage] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let offsetX = clientX - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;
    const pct = (offsetX / rect.width) * 100;
    setPercentage(pct);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDraggingRef.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDraggingRef.current) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchend", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    isDraggingRef.current = true;
  };

  const handleContainerClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".slider-button")) return;
    handleMove(e.clientX);
  };

  return (
    <div className="slider-container reveal">
      <div 
        ref={containerRef} 
        className="slider-wrapper"
        onClick={handleContainerClick}
      >
        {/* Before Image */}
        <div className="slider-image before-image">
          <svg viewBox="0 0 800 450" className="svg-visual">
            <rect width="100%" height="100%" fill="#1E2024"/>
            <path d="M 100 100 Q 200 150 300 80" stroke="#444" strokeWidth="3" strokeLinecap="round"/>
            <path d="M 400 300 Q 450 250 600 320" stroke="#444" strokeWidth="2" strokeLinecap="round"/>
            <path d="M 200 320 L 250 350" stroke="#555" strokeWidth="2"/>
            <path d="M 150 280 Q 180 290 220 270" stroke="#555" strokeWidth="1"/>
            <path d="M 500 120 L 530 140" stroke="#444" strokeWidth="3"/>
            <path d="M 100 380 C 200 340, 600 340, 700 380" fill="none" stroke="#222" strokeWidth="20"/>
            <text x="50" y="80" fill="#999" fontFamily="Outfit" fontSize="28" fontWeight="bold" opacity="0.6">SƠN XE KHÔNG DÁN PPF: DỄ XƯỚC & Ố MÀU</text>
          </svg>
        </div>
        {/* After Image */}
        <div 
          className="slider-image after-image"
          style={{ width: `${percentage}%` }}
        >
          <svg viewBox="0 0 800 450" className="svg-visual" style={{ width: "800px", height: "450px", maxWidth: "none" }}>
            <rect width="100%" height="100%" fill="#0a0c10"/>
            <path d="M 100 380 C 200 340, 600 340, 700 380" fill="none" stroke="#00F2FE" strokeWidth="20" opacity="0.3"/>
            <path d="M 250 150 L 255 165 L 270 170 L 255 175 L 250 190 L 245 175 L 230 170 L 245 165 Z" fill="#00F2FE"/>
            <path d="M 550 250 L 553 260 L 563 263 L 553 266 L 550 276 L 547 266 L 537 263 L 547 260 Z" fill="#FFAB00"/>
            <path d="M 100 220 C 300 200, 500 240, 700 220" fill="none" stroke="rgba(0, 242, 254, 0.4)" strokeWidth="8" strokeLinecap="round"/>
            <text x="50" y="80" fill="#00F2FE" fontFamily="Outfit" fontSize="28" fontWeight="bold">SAU KHI DÁN PPF TPU: SIÊU BÓNG & TỰ PHỤC HỒI</text>
          </svg>
        </div>
        {/* Slider Bar */}
        <div 
          className="slider-bar"
          style={{ left: `${percentage}%` }}
          onMouseDown={startDrag}
          onTouchStart={startDrag}
        >
          <div className="slider-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M8 7l-5 5 5 5M16 7l5 5-5 5"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
