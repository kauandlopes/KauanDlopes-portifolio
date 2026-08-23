import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Enable only on desktop pointer devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null;
      if (cursorTarget) {
        setIsHovered(true);
        setCursorText(cursorTarget.getAttribute("data-cursor") || "VER");
      } else if (target.closest("button, a, input, [role='button']")) {
        setIsHovered(true);
        setCursorText("");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  if (!isVisible) return null;

  const ringStyle = cursorText
    ? "w-16 h-16 bg-[#1f1a14] dark:bg-[#f5efe6] text-[#f5efe6] dark:text-[#1f1a14] shadow-xl"
    : isHovered
    ? "w-12 h-12 border-2 border-[#b85434] dark:border-[#e07452] bg-[#b85434]/15 dark:bg-[#e07452]/20"
    : "w-8 h-8 border border-[#1f1a14]/25 dark:border-[#f5efe6]/25";

  return (
    <>
      {/* Central Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#b85434] dark:bg-[#e07452] transition-opacity duration-200 hidden md:block"
        style={{
          width: isHovered ? "6px" : "8px",
          height: isHovered ? "6px" : "8px",
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          willChange: "transform",
        }}
      />

      {/* Perfectly Centered Outer Ring / Badge */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] rounded-full flex items-center justify-center font-mono-meta text-[10px] font-bold uppercase tracking-wider transition-all duration-200 ease-out hidden md:flex ${ringStyle}`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          willChange: "transform, width, height",
        }}
      >
        {cursorText}
      </div>
    </>
  );
}
