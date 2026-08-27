import React from "react";
import SafariBrowserMockup from "./SafariBrowserMockup";

export default function ProjectShowcase() {
  return (
    <section id="projetos" className="py-24 relative overflow-hidden bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10 border-b border-[var(--border-color)] pb-8">
          <div>
            <span className="font-mono-meta text-[11px] uppercase tracking-widest text-[var(--accent-terra)] flex items-center gap-2 mb-3 font-bold">
              ✦ Catálogo de Projetos
            </span>
            <h2 className="font-serif-title text-4xl sm:text-6xl font-normal leading-[1.02] tracking-tight text-[var(--text-primary)]">
              Sistemas que fazem <br />
              <span className="italic text-[var(--accent-terra)]">a operação acontecer.</span>
            </h2>
          </div>
          <p className="font-sans-body text-base text-[var(--text-muted)] max-w-sm lg:pb-2">
            De centrais de Business Intelligence a hubs de mensageria e comércio digital. Acompanhe a demonstração interativa dos principais sistemas.
          </p>
        </div>

        {/* Safari Browser Mockup — troca de projeto em tempo real */}
        <div>
          <SafariBrowserMockup />
        </div>
      </div>
    </section>
  );
}
