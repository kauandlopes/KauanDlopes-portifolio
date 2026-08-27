import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on fine pointer desktop devices
    if (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Smooth RAF physics loop for follower ring
    const render = () => {
      // Lerp follow with smooth dampening (0.16)
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
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
      } else if (
        target.closest("button, a, input, select, textarea, [role='button'], .cursor-pointer")
      ) {
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

  return (
    <>
      {/* Precision Inner Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-all duration-150 ease-out hidden md:block ${
          cursorText
            ? "w-1.5 h-1.5 opacity-0"
            : isHovered
            ? "w-2 h-2 bg-[var(--accent-terra)] opacity-90 scale-90"
            : "w-2 h-2 bg-[var(--accent-terra)] shadow-[0_0_8px_rgba(184,84,52,0.6)] dark:shadow-[0_0_8px_rgba(224,116,82,0.7)]"
        } ${isClicking ? "scale-50" : ""}`}
        style={{ willChange: "transform" }}
      />

      {/* Smooth Liquid Follower Ring / Interactive Pill Badge */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-200 ease-out hidden md:flex items-center justify-center font-mono-meta ${
          cursorText
            ? "px-3.5 py-1.5 min-h-[32px] rounded-full bg-[var(--text-primary)] text-[var(--bg-page)] text-[10px] font-bold tracking-widest uppercase shadow-2xl border border-white/20 scale-100 gap-1"
            : isHovered
            ? "w-12 h-12 rounded-full border-2 border-[var(--accent-terra)] bg-[var(--accent-terra)]/15 backdrop-blur-[2px] shadow-sm scale-100"
            : "w-8 h-8 rounded-full border border-[var(--accent-terra)]/40 dark:border-[var(--accent-terra)]/50 bg-[var(--accent-terra)]/5 backdrop-blur-[0.5px] scale-100"
        } ${isClicking ? "scale-90" : ""}`}
        style={{ willChange: "transform" }}
      >
        {cursorText && (
          <span className="flex items-center gap-1">
            {cursorText}
            <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
          </span>
        )}
      </div>
    </>
  );
}
