"use client";

import { useEffect, useState } from "react";

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) return;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="hidden md:block fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none bg-transparent"
    >
      <div
        className="h-full bg-gradient-to-r from-[#D4A396] via-[#A6766A] to-[#D4A396] origin-left transition-transform duration-75 ease-out shadow-[0_0_8px_rgba(212,163,150,0.6)]"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
    </div>
  );
}
