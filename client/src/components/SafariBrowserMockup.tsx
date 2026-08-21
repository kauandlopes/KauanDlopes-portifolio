import React, { useState, useEffect, useCallback } from "react";
import { projects } from "@/data/projects";
import { ExternalLink, RefreshCw, ChevronLeft, ChevronRight, Plus, X } from "lucide-react";

const browserProjects = projects.slice(0, 6);

const tabUrls: Record<string, string> = {
  "target-live":      "targetx.com.br/live",
  "maria-ai":         "targetx.com.br/maria",
  "target-client":    "targetx.com.br/client",
  "mensageria-hub":   "targetx.com.br/connect",
  "vostro-store":     "vostro.targetx.com.br",
  "delivery-targetx": "delivery.targetx.com.br",
};

const categoryColors: Record<string, string> = {
  "Proprietário / Enterprise":    "#4f6349",
  "Proprietário / IA Corporativa":"#354024",
  "Proprietário / Automação":     "#6b4f2a",
  "E-Commerce / Front-End":       "#7a5c38",
  "Food Tech / Delivery":         "#b85e42",
  "Open Source / Desktop":        "#3d5a7a",
  "Inovação Social & Saúde Pública":"#5a4b7a",
};

function SafariFavicon({ project }: { project: typeof projects[0] }) {
  const color = categoryColors[project.category] || "#4f6349";
  const initial = project.shortTitle.charAt(0).toUpperCase();
  return (
    <span
      className="w-3.5 h-3.5 rounded-sm flex items-center justify-center text-[7px] font-bold text-white shrink-0"
      style={{ background: color }}
    >
      {initial}
    </span>
  );
}

export default function SafariBrowserMockup() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  const goTo = useCallback((idx: number) => {
    if (idx === activeIdx) return;
    setIsAnimating(true);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 600);
    setTimeout(() => {
      setActiveIdx(idx);
      setIsAnimating(false);
    }, 220);
  }, [activeIdx]);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      goTo((activeIdx + 1) % browserProjects.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [activeIdx, autoPlay, goTo]);

  const project = browserProjects[activeIdx];
  const url = tabUrls[project.id] || "targetx.com.br";
  const accentColor = categoryColors[project.category] || "#4f6349";

  return (
    <div
      className="w-full rounded-[18px] overflow-hidden shadow-2xl border border-[var(--border-strong)] select-none"
      style={{ background: "linear-gradient(180deg, #e8dcc8 0%, #ddd0b8 100%)" }}
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* ── Window chrome ── */}
      <div
        className="px-4 pt-3 pb-0"
        style={{ background: "linear-gradient(180deg, #ede2cb 0%, #e2d3b6 100%)" }}
      >
        {/* Title bar */}
        <div className="flex items-center gap-3 mb-2.5">
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setAutoPlay(false)}
              className="w-3 h-3 rounded-full cursor-pointer transition-opacity hover:opacity-80"
              style={{ background: "#c0845c" }}
              title="Pausar rotação"
            />
            <div className="w-3 h-3 rounded-full" style={{ background: "#c4a84f" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#6b8f5e" }} />
          </div>

          {/* Address bar */}
          <div
            className="flex-1 flex items-center gap-2 px-3 py-1.5 rounded-lg border"
            style={{
              background: "rgba(255,255,255,0.55)",
              borderColor: "rgba(180,155,110,0.4)",
            }}
          >
            {isLoading ? (
              <RefreshCw className="w-3 h-3 text-[#7a6540] animate-spin shrink-0" />
            ) : (
              <div
                className="w-2.5 h-2.5 rounded-full shrink-0 transition-colors duration-500"
                style={{ background: accentColor }}
              />
            )}
            <span className="font-mono-meta text-[11px] text-[#5a4a28] truncate font-medium">
              {url}
            </span>
          </div>

          {/* Nav arrows */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => goTo((activeIdx - 1 + browserProjects.length) % browserProjects.length)}
              className="w-6 h-6 rounded flex items-center justify-center hover:bg-black/10 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5 text-[#5a4a28]" />
            </button>
            <button
              onClick={() => goTo((activeIdx + 1) % browserProjects.length)}
              className="w-6 h-6 rounded flex items-center justify-center hover:bg-black/10 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-3.5 h-3.5 text-[#5a4a28]" />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-end gap-0.5 overflow-x-auto hide-scrollbar">
          {browserProjects.map((proj, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={proj.id}
                onClick={() => goTo(idx)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-t-lg text-[11px] font-mono-meta font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 min-w-0 max-w-[160px] relative"
                style={{
                  background: isActive
                    ? "linear-gradient(180deg, #f9f4ea 0%, #f4ecd8 100%)"
                    : "transparent",
                  color: isActive ? "#3a2e18" : "#7a6540",
                  borderTop: isActive ? "1.5px solid rgba(180,155,110,0.5)" : "1.5px solid transparent",
                  borderLeft: isActive ? "1.5px solid rgba(180,155,110,0.4)" : "1.5px solid transparent",
                  borderRight: isActive ? "1.5px solid rgba(180,155,110,0.4)" : "1.5px solid transparent",
                  marginBottom: isActive ? "-1px" : "0",
                  zIndex: isActive ? 2 : 1,
                }}
              >
                <SafariFavicon project={proj} />
                <span className="truncate">{proj.shortTitle}</span>
                {isActive && (
                  <span className="ml-auto pl-1 opacity-40 hover:opacity-100 transition-opacity">
                    <X className="w-2.5 h-2.5" />
                  </span>
                )}
              </button>
            );
          })}
          <button className="p-2 hover:bg-black/10 rounded-lg transition-colors cursor-pointer shrink-0">
            <Plus className="w-3 h-3 text-[#7a6540]" />
          </button>
        </div>
      </div>

      {/* ── Viewport ── */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #f9f4ea 0%, #f2e8d2 100%)",
          minHeight: 340,
        }}
      >
        {/* Loading bar */}
        <div
          className="absolute top-0 left-0 h-0.5 transition-all duration-500 rounded-r-full z-10"
          style={{
            width: isLoading ? "70%" : isAnimating ? "100%" : "0%",
            background: `linear-gradient(90deg, ${accentColor}, ${accentColor}88)`,
            opacity: isLoading ? 1 : 0,
            transition: isLoading ? "width 0.5s ease" : "opacity 0.3s ease",
          }}
        />

        {/* Page content */}
        <div
          className="p-0 transition-all duration-200"
          style={{
            opacity: isAnimating ? 0 : 1,
            transform: isAnimating ? "translateY(6px)" : "translateY(0)",
          }}
        >
          {/* Fake browser top bar inside page */}
          <div
            className="px-6 py-3 flex items-center gap-3 border-b"
            style={{
              borderColor: "rgba(180,155,110,0.25)",
              background: "rgba(255,255,255,0.4)",
            }}
          >
            <span
              className="font-mono-meta text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded"
              style={{ background: accentColor + "18", color: accentColor }}
            >
              {project.badge}
            </span>
            <span className="font-mono-meta text-[10px] text-[#9a8660] uppercase tracking-widest">
              {project.category}
            </span>
            <span className="ml-auto font-mono-meta text-[10px] text-[#b09970]">
              {project.year}
            </span>
          </div>

          {/* Main content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left: Info */}
            <div className="p-7 flex flex-col justify-between">
              <div>
                <h3
                  className="font-serif-title text-3xl sm:text-4xl font-normal leading-tight mb-3"
                  style={{ color: "#2b271d" }}
                >
                  {project.shortTitle}
                </h3>
                <p className="font-sans-body text-sm text-[#857b68] leading-relaxed mb-5">
                  {project.subtitle}
                </p>

                {/* Results */}
                <div className="space-y-2 mb-6">
                  {project.results.map((result, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0 mt-1.5"
                        style={{ background: accentColor }}
                      />
                      <span className="font-sans-body text-[13px] text-[#5a4a28]">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="font-mono-meta text-[10px] px-2.5 py-1 rounded-full border font-semibold uppercase tracking-wider"
                    style={{
                      background: accentColor + "12",
                      borderColor: accentColor + "30",
                      color: accentColor,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Screenshot */}
            <div
              className="relative overflow-hidden"
              style={{ borderLeft: "1px solid rgba(180,155,110,0.2)" }}
            >
              <img
                key={project.id}
                src={project.image}
                alt={project.shortTitle}
                className="w-full h-full object-cover"
                style={{
                  minHeight: 280,
                  filter: "sepia(15%) contrast(0.95) brightness(0.98)",
                }}
              />
              {/* Vintage vignette */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(249,244,234,0.25) 0%, transparent 60%, rgba(180,150,90,0.15) 100%)",
                }}
              />
              {/* External link button */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono-meta text-[11px] font-bold transition-all hover:scale-105"
                  style={{
                    background: "rgba(249,244,234,0.9)",
                    border: "1px solid rgba(180,155,110,0.5)",
                    color: accentColor,
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <ExternalLink className="w-3 h-3" />
                  Abrir site
                </a>
              )}
            </div>
          </div>

          {/* Status bar */}
          <div
            className="px-6 py-2 flex items-center justify-between border-t"
            style={{
              borderColor: "rgba(180,155,110,0.2)",
              background: "rgba(255,255,255,0.3)",
            }}
          >
            <span className="font-mono-meta text-[10px] text-[#a09070]">
              {project.role}
            </span>
            <div className="flex items-center gap-1.5">
              {browserProjects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="rounded-full transition-all duration-300 cursor-pointer"
                  style={{
                    width: i === activeIdx ? 16 : 6,
                    height: 6,
                    background: i === activeIdx ? accentColor : accentColor + "40",
                  }}
                />
              ))}
            </div>
            <span
              className="font-mono-meta text-[10px] font-bold"
              style={{ color: accentColor }}
            >
              {autoPlay ? "▶ auto" : "⏸ pausado"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
