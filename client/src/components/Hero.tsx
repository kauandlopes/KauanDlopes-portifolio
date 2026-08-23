import React from "react";
import TechCarousel from "./TechCarousel";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  MessageCircle,
  MapPin,
  Terminal,
  CheckCircle2,
  GraduationCap,
  Building2,
  ExternalLink,
  FileText
} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] pt-32 pb-16 flex flex-col justify-between overflow-hidden bg-grid-editorial bg-[var(--bg-page)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headline, Bio & Organization Links */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Top Status Chip - Clean & Editorial */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--border-strong)] bg-[var(--bg-card)] text-[var(--text-secondary)] font-mono-meta text-[11px] tracking-widest uppercase mb-6 shadow-sm font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-moss)] animate-pulse" />
              Desenvolvedor Web · Assis, SP
            </div>

            {/* Headline */}
            <h1 className="font-serif-title text-5xl sm:text-7xl xl:text-[84px] font-normal leading-[0.95] tracking-tight text-[var(--text-primary)] mb-6">
              Desenvolvendo <br />
              <span className="italic text-[var(--accent-moss-dark)]">
                soluções práticas
              </span>{" "}
              <br />
              para o dia a dia.
            </h1>

            {/* Sincere Bio */}
            <p className="font-sans-body text-lg text-[var(--text-muted)] max-w-xl leading-relaxed mb-8">
              Olá! Sou <strong className="text-[var(--text-primary)] font-semibold">Kauan Dias Lopes</strong>. Trabalho desenvolvendo aplicações web, integrações com WhatsApp e APIs de IA no dia a dia. Gosto de entender os problemas reais da operação e transformar necessidades em sistemas úteis.
            </p>

            {/* Links in Evidence: Fomenta Vale & FATEC Assis */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <a
                href="https://fomentavale.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--accent-moss-dark)] font-mono-meta text-xs font-bold hover:bg-[var(--bg-surface)] hover:border-[var(--border-strong)] transition-all shadow-sm group"
              >
                <Building2 className="w-4 h-4" />
                <span>Estagiário na Fomenta Vale</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="https://fatecassis.cps.sp.gov.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] font-mono-meta text-xs font-bold hover:bg-[var(--bg-surface)] hover:border-[var(--border-strong)] transition-all shadow-sm group"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Aluno na FATEC Assis</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projetos"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[var(--accent-moss-dark)] hover:bg-[var(--text-primary)] text-[var(--bg-card)] font-display text-xs sm:text-sm font-bold tracking-wide shadow-md transition-all duration-300"
                data-cursor="VER"
              >
                <span>Ver Projetos</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="/curriculo.pdf" // Placeholder para o CV
                download="Kauan_Dias_Lopes_Curriculo.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[var(--border-strong)] bg-[var(--bg-card)] hover:bg-[var(--bg-surface)] text-[var(--text-primary)] font-display text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-sm"
              >
                <FileText className="w-4 h-4 text-[var(--accent-terra)]" />
                <span>Baixar Currículo</span>
              </a>

              <div className="flex items-center gap-2 ml-2">
                <a
                  href="https://wa.me/5518996096239"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] hover:bg-[var(--bg-surface)] text-[var(--text-primary)] transition-all duration-200"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kauan-dias-lopes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] hover:bg-[var(--bg-surface)] text-[var(--text-primary)] transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://github.com/kauandlopes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-[var(--border-color)] bg-[var(--bg-card)] hover:bg-[var(--bg-surface)] text-[var(--text-primary)] transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Subtle Credibility Badges */}
            <div className="flex flex-wrap items-center gap-5 text-xs font-mono-meta text-[var(--text-muted)] pt-6 border-t border-[var(--border-color)]">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-moss)]" /> FATEC (2024—2027)
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-moss)]" /> ETEC Mecânica
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-moss)]" /> Hackathon Receita Federal
              </span>
            </div>
          </div>

          {/* Right Column: Framed Portrait */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative w-full max-w-[420px]">
              {/* Clean Photo Frame */}
              <div className="relative p-2.5 sm:p-3 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-strong)] shadow-sm group">
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[var(--bg-surface)] grayscale-[20%] group-hover:grayscale-0 transition-all duration-700">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/kauan-profile.jpg`}
                    alt="Kauan Dias Lopes"
                    className="w-full h-full object-cover scale-100 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                  
                  {/* Subtle vignette instead of heavy gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--text-primary)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Overlaid profile tags - Reveal on hover for a cleaner default state */}
                  <div className="absolute bottom-4 left-4 right-4 text-[var(--bg-card)] z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-serif-title text-2xl font-normal leading-none">
                          Kauan Dias Lopes
                        </p>
                        <p className="font-mono-meta text-[11px] mt-1 flex items-center gap-1 opacity-90">
                          <MapPin className="w-3 h-3" /> Assis, SP
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub info in frame */}
                <div className="mt-3 px-2 flex items-center justify-between text-[11px] font-mono-meta uppercase tracking-widest">
                  <span className="text-[var(--accent-moss-dark)] font-bold">
                    Dev Web
                  </span>
                  <span className="text-[var(--text-muted)]">Sistemas & IA</span>
                </div>
              </div>

              {/* Refined Circular Badge */}
              <a
                href="#projetos"
                className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-[var(--bg-card)] border border-[var(--border-strong)] text-[var(--text-primary)] shadow-sm flex items-center justify-center p-1.5 group cursor-pointer transition-transform duration-300 hover:scale-105 z-20"
                aria-label="Ver projetos"
              >
                <svg
                  className="w-full h-full animate-spin-slow"
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <path
                      id="heroBadgePath"
                      d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                    />
                  </defs>
                  <text className="font-mono-meta text-[9px] uppercase font-bold tracking-[0.18em] fill-current text-[var(--text-secondary)]">
                    <textPath href="#heroBadgePath">
                      PROCESSOS • SISTEMAS • WEB •
                    </textPath>
                  </text>
                </svg>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-[var(--accent-terra)] text-[var(--bg-card)] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <ArrowDown className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>

              {/* Mini console badge - simplified */}
              <div className="absolute -bottom-4 -left-4 p-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-strong)] shadow-sm font-mono-meta text-[11px] max-w-[190px] hidden sm:block">
                <div className="flex items-center gap-1.5 mb-1 text-[var(--accent-moss-dark)] font-bold">
                  <Terminal className="w-3 h-3" />
                  <span>TARGETX</span>
                </div>
                <p className="text-[var(--text-muted)] leading-tight text-[10px]">
                  Integrações WhatsApp & ERP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Carousel — clique em qualquer tecnologia para saber mais */}
      <TechCarousel />
    </section>
  );
}
