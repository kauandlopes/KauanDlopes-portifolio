import React, { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsClosing(true);
        setTimeout(() => {
          onComplete();
        }, 850);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  // 8 Shutter Columns in warm vintage paper
  const columns = Array.from({ length: 8 });

  return (
    <div
      className={`fixed inset-0 z-[99999] flex flex-col justify-between select-none overflow-hidden transition-opacity duration-700 ${
        isClosing ? "pointer-events-none" : ""
      }`}
      aria-label="Carregando portfólio"
      role="status"
    >
      {/* Background shutter columns in warm vintage paper tones */}
      <div className="absolute inset-0 grid grid-cols-8 w-full h-full pointer-events-none z-0">
        {columns.map((_, i) => (
          <div
            key={i}
            className="h-full bg-[#f3ece0] dark:bg-[#12161f] border-r border-[#231c16]/5 dark:border-white/5 loader-column"
            style={{
              transform: isClosing ? "scaleY(0)" : "scaleY(1)",
              transformOrigin: i % 2 === 0 ? "top" : "bottom",
              transitionDelay: `${i * 45}ms`,
            }}
          />
        ))}
      </div>

      {/* Content overlay */}
      <div
        className={`relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-12 text-[#231c16] dark:text-[#f8f4ee] transition-opacity duration-500 ${
          isClosing ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Top header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-[#231c16] text-[#faf6f0] dark:bg-[#faf6f0] dark:text-[#231c16] flex items-center justify-center font-serif-title italic font-bold text-sm shadow-md">
              K
            </span>
            <span className="font-mono-meta text-xs uppercase tracking-widest text-[#231c16]/80 dark:text-[#f8f4ee]/80 font-bold">
              Kauan Dias Lopes
            </span>
          </div>
          <div className="font-mono-meta text-xs text-[#231c16]/50 dark:text-[#f8f4ee]/50 tracking-wider">
            [ ASSIS, SP · 2026 ]
          </div>
        </div>

        {/* Center monogram & message */}
        <div className="max-w-xl my-auto">
          <p className="font-mono-meta text-[11px] uppercase tracking-widest text-[#c46d54] dark:text-[#e2826a] font-bold mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c46d54] dark:bg-[#e2826a] animate-pulse" />
            Atelier de Desenvolvimento & Processos
          </p>
          <h1 className="font-serif-title text-4xl sm:text-6xl font-normal leading-[1.05] tracking-tight">
            Sistemas, automação e clareza <span className="italic text-[#c46d54] dark:text-[#e2826a]">operacional.</span>
          </h1>
        </div>

        {/* Bottom loader bar & Counter */}
        <div className="space-y-4">
          <div className="flex items-end justify-between">
            <div className="text-xs font-mono-meta text-[#231c16]/60 dark:text-[#f8f4ee]/60">
              FATEC Assis · Web Developer & BI
            </div>
            <div className="font-mono-meta text-4xl sm:text-6xl font-bold tracking-tighter text-[#231c16] dark:text-[#f8f4ee]">
              {progress}
              <span className="text-xl sm:text-2xl text-[#c46d54] dark:text-[#e2826a] font-normal">%</span>
            </div>
          </div>

          {/* Progress track */}
          <div className="w-full h-[3px] bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#c46d54] via-[#bf924e] to-[#6e8467] transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
