"use client";

import React, { useState, useRef, useEffect } from "react";

export default function BeforeAfterSlider() {
  const [percentage, setPercentage] = useState(50);
  const [containerWidth, setContainerWidth] = useState(800);
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
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };
    
    updateWidth();
    window.addEventListener("resize", updateWidth);
    
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchend", handleMouseUp);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("resize", updateWidth);
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
        <div className="slider-image">
          <img 
            src="/images/before-slider.png" 
            alt="Sơn xe khi chưa dán PPF: Nhiều vết xước xoáy và trầy dăm" 
          />
          <div className="slider-label before-label">
            Chưa dán PPF: Xước & Ố màu
          </div>
        </div>
        {/* After Image */}
        <div 
          className="slider-image after-image"
          style={{ width: `${percentage}%` }}
        >
          <img 
            src="/images/after-slider.png" 
            alt="Sơn xe sau khi dán PPF TPU: Siêu bóng và tự phục hồi" 
            style={{ width: `${containerWidth}px`, height: "100%", objectFit: "cover", maxWidth: "none" }}
          />
          <div className="slider-label after-label" style={{ width: "max-content" }}>
            Đã dán PPF: Siêu bóng & Tự phục hồi
          </div>
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
