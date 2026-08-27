import React, { useState, useEffect, useCallback, useRef } from "react";
import { projects, ProjectData } from "@/data/projects";
import {
  ExternalLink,
  RefreshCw,
  ChevronLeft,
  ChevronRight,
  Lock,
  Plus,
  X,
  ShieldCheck,
  Globe,
  Sparkles,
  Maximize2,
} from "lucide-react";
import LiveTargetDashboard from "./LiveTargetDashboard";
import LiveTicketSystem from "./LiveTicketSystem";
import MessagingFlow from "./MessagingFlow";

const browserProjects = projects.slice(0, 6);

const tabUrls: Record<string, string> = {
  "target-live": "targetx.com.br/live-bi",
  "maria-ai": "targetx.com.br/maria-ai",
  "target-client": "targetx.com.br/client-tickets",
  "mensageria-hub": "targetx.com.br/connect-hub",
  "vostro-store": "vostro.targetx.com.br",
  "delivery-targetx": "delivery.targetx.com.br",
};

const categoryColors: Record<string, string> = {
  "Proprietário / Enterprise": "#4f6349",
  "Proprietário / IA Corporativa": "#354024",
  "Proprietário / Automação": "#6b4f2a",
  "E-Commerce / Front-End": "#7a5c38",
  "Food Tech / Delivery": "#b85e42",
  "Open Source / Desktop": "#3d5a7a",
  "Inovação Social & Saúde Pública": "#5a4b7a",
};

function SafariFavicon({ project }: { project: ProjectData }) {
  const color = categoryColors[project.category] || "#4f6349";
  const initial = project.shortTitle.charAt(0).toUpperCase();
  return (
    <span
      className="w-3.5 h-3.5 rounded-sm flex items-center justify-center text-[7px] font-bold text-white shrink-0 shadow-xs"
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
  const [refreshKey, setRefreshKey] = useState(0);

  const goTo = useCallback((idx: number) => {
    if (idx === activeIdx) return;
    setIsAnimating(true);
    setIsLoading(true);
    setTimeout(() => {
      setActiveIdx(idx);
      setIsAnimating(false);
      setTimeout(() => setIsLoading(false), 500);
    }, 180);
  }, [activeIdx]);

  const handleRefresh = () => {
    setIsLoading(true);
    setRefreshKey((k) => k + 1);
    setTimeout(() => setIsLoading(false), 600);
  };

  const project = browserProjects[activeIdx];
  const url = tabUrls[project.id] || (project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, "") : "targetx.com.br");
  const accentColor = categoryColors[project.category] || "#4f6349";

  return (
    <div
      className="w-full rounded-[22px] overflow-hidden shadow-2xl border border-[var(--border-strong)] bg-[var(--bg-card)] select-none transition-all duration-300"
      style={{ background: "linear-gradient(180deg, #ede3cf 0%, #e0d2b7 100%)" }}
    >
      {/* ── Window Chrome Top Header ── */}
      <div
        className="px-4 pt-3.5 pb-0 border-b border-[rgba(180,155,110,0.35)]"
        style={{ background: "linear-gradient(180deg, #f0e6d2 0%, #e5d7be 100%)" }}
      >
        {/* Title & Navigation Bar */}
        <div className="flex items-center gap-3 mb-3">
          {/* Traffic Lights */}
          <div className="flex items-center gap-1.5">
            <button
              className="w-3 h-3 rounded-full bg-[#e06b53] hover:opacity-80 transition-opacity"
              title="Fechar aba"
            />
            <button
              className="w-3 h-3 rounded-full bg-[#e5b84c] hover:opacity-80 transition-opacity"
              title="Minimizar"
            />
            <button
              className="w-3 h-3 rounded-full bg-[#62b265] hover:opacity-80 transition-opacity"
              title="Expandir"
            />
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-0.5">
            <button
              onClick={() => goTo((activeIdx - 1 + browserProjects.length) % browserProjects.length)}
              className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-black/10 transition-colors cursor-pointer"
              title="Voltar"
            >
              <ChevronLeft className="w-4 h-4 text-[#5a4a28]" />
            </button>
            <button
              onClick={() => goTo((activeIdx + 1) % browserProjects.length)}
              className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-black/10 transition-colors cursor-pointer"
              title="Avançar"
            >
              <ChevronRight className="w-4 h-4 text-[#5a4a28]" />
            </button>
          </div>

          {/* Safari Address Bar */}
          <div
            className="flex-1 flex items-center justify-between gap-2 px-3.5 py-1.5 rounded-xl border transition-all"
            style={{
              background: "rgba(255,255,255,0.75)",
              borderColor: "rgba(180,155,110,0.45)",
              boxShadow: "inset 0 1px 2px rgba(0,0,0,0.04)",
            }}
          >
            <div className="flex items-center gap-2 min-w-0">
              <Lock className="w-3 h-3 text-[#6b8f5e] shrink-0" />
              <span className="font-mono-meta text-[11px] text-[#4a3e20] truncate font-medium">
                https://{url}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleRefresh}
                className="p-1 hover:bg-black/10 rounded-md transition-colors cursor-pointer text-[#7a6540]"
                title="Recarregar página"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin text-[#b85434]" : ""}`} />
              </button>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#b85434]/10 hover:bg-[#b85434]/20 text-[#b85434] font-mono-meta text-[10px] font-bold tracking-wider transition-colors cursor-pointer"
                  title="Abrir site oficial em nova guia"
                >
                  <span>Abrir</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Safari Tabs */}
        <div className="flex items-end gap-1 overflow-x-auto hide-scrollbar">
          {browserProjects.map((proj, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={proj.id}
                onClick={() => goTo(idx)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-t-xl text-[11px] font-mono-meta font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer shrink-0 min-w-0 max-w-[170px] relative"
                style={{
                  background: isActive
                    ? "linear-gradient(180deg, #fdfbf7 0%, #f9f5ec 100%)"
                    : "transparent",
                  color: isActive ? "#2c2415" : "#7a684c",
                  borderTop: isActive ? "2px solid #b85434" : "2px solid transparent",
                  borderLeft: isActive ? "1px solid rgba(180,155,110,0.4)" : "1px solid transparent",
                  borderRight: isActive ? "1px solid rgba(180,155,110,0.4)" : "1px solid transparent",
                  marginBottom: isActive ? "-1px" : "0",
                  zIndex: isActive ? 10 : 1,
                  boxShadow: isActive ? "0 -2px 6px rgba(0,0,0,0.03)" : "none",
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
        </div>
      </div>

      {/* ── Browser Viewport Area ── */}
      <div
        className="relative overflow-hidden bg-[#faf7f0] dark:bg-[#191612]"
        style={{ minHeight: "560px", height: "640px" }}
      >
        {/* Animated Loading Bar */}
        <div
          className="absolute top-0 left-0 h-1 transition-all duration-300 rounded-r-full z-20"
          style={{
            width: isLoading ? "80%" : isAnimating ? "100%" : "0%",
            background: "linear-gradient(90deg, #b85434, #e07452)",
            opacity: isLoading || isAnimating ? 1 : 0,
          }}
        />

        {/* Content Container */}
        <div
          className="w-full h-full transition-opacity duration-200 overflow-y-auto"
          style={{ opacity: isAnimating ? 0 : 1 }}
        >
          {/* If the project has an external live URL (e.g. Vostro, Delivery), render real interactive iframe */}
          {project.liveUrl ? (
            <div className="relative w-full h-full flex flex-col bg-white">
              {/* Subtle Protected Mode Floating Pill */}
              <div className="absolute top-3 right-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-white font-mono-meta text-[10px] tracking-wider uppercase shadow-xl pointer-events-none border border-white/20">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Visualização Interativa · Scroll & Hover</span>
              </div>

              {/* Real Iframe */}
              <iframe
                key={`${project.id}-${refreshKey}`}
                src={project.liveUrl}
                title={project.title}
                className="w-full flex-1 border-0 bg-white"
                sandbox="allow-scripts allow-same-origin allow-forms"
                loading="lazy"
                onLoad={() => setIsLoading(false)}
              />
            </div>
          ) : (
            /* For internal proprietary systems, render their dedicated live engines */
            <div className="p-4 sm:p-6 h-full flex flex-col justify-start">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--border-color)]">
                <div className="flex items-center gap-2">
                  <span
                    className="font-mono-meta text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded"
                    style={{ background: accentColor + "18", color: accentColor }}
                  >
                    {project.badge}
                  </span>
                  <span className="font-mono-meta text-[11px] text-[var(--text-secondary)] font-semibold">
                    {project.title}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 font-mono-meta text-[10px] text-[var(--accent-moss-dark)] font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Demonstração em Tempo Real</span>
                </div>
              </div>

              <div className="flex-1">
                {project.demoType === "interactive-live" && <LiveTargetDashboard />}
                {project.demoType === "interactive-tickets" && <LiveTicketSystem />}
                {project.demoType === "interactive-messaging" && <MessagingFlow />}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Status Footer ── */}
      <div
        className="px-6 py-2.5 flex items-center justify-between border-t border-[rgba(180,155,110,0.3)] font-mono-meta text-[10px] text-[#7a6540]"
        style={{ background: "linear-gradient(180deg, #e7d8be 0%, #decdb1 100%)" }}
      >
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#4a3e20]">{project.role}</span>
          <span className="opacity-40">•</span>
          <span>{project.category}</span>
        </div>

        {/* Tab Pagination Indicators */}
        <div className="flex items-center gap-1.5">
          {browserProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-300 cursor-pointer"
              style={{
                width: i === activeIdx ? 16 : 6,
                height: 6,
                background: i === activeIdx ? "#b85434" : "rgba(184,84,52,0.3)",
              }}
              title={`Aba ${i + 1}`}
            />
          ))}
        </div>

        <span className="font-bold text-[#b85434]">
          {project.liveUrl ? "🌐 Iframe Conectado" : "⚡ Engine Ativa"}
        </span>
      </div>
    </div>
  );
}
