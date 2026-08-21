import React, { useState, useEffect, useRef } from "react";
import { TechIcon } from "@/lib/techIcons";
import { X } from "lucide-react";

interface Tech {
  name: string;
  description: string;
  detail: string;
  color: string;
}

const techs: Tech[] = [
  { name: "React", description: "Biblioteca de UI", detail: "Utilizo React v19 com hooks avancados, Context API e componentes performaticos para construir interfaces reativas e modulares.", color: "#61dafb" },
  { name: "TypeScript", description: "Tipagem estatica", detail: "TypeScript garante consistencia e seguranca no codigo. Uso tipagem estrita em todos os projetos para reduzir bugs em producao.", color: "#3178c6" },
  { name: "Node.js", description: "Back-end JavaScript", detail: "Node.js e minha base para construcao de APIs REST escalaveis, webhooks em tempo real e integracoes com servicos externos.", color: "#68a063" },
  { name: "Python", description: "Scripts & IA", detail: "Python me permite criar scripts de automacao, processar dados e integrar modelos de linguagem como DeepSeek e Gemini.", color: "#3572a5" },
  { name: "PostgreSQL", description: "Banco de dados relacional", detail: "Utilizo PostgreSQL para modelagem de dados estruturados, queries otimizadas e integridade transacional nos sistemas que desenvolvo.", color: "#336791" },
  { name: "MongoDB", description: "Banco NoSQL", detail: "MongoDB e usado para armazenar dados flexiveis como logs de eventos, sessoes de chat e documentos dinamicos de processos.", color: "#47a248" },
  { name: "Docker", description: "Containerizacao", detail: "Docker garante ambientes padronizados e portaveis. Uso containers para isolar servicos e simplificar deploys em producao.", color: "#2496ed" },
  { name: "Git", description: "Controle de versao", detail: "Git e parte do meu fluxo diario. Trabalho com branches, pull requests e CI/CD para manter codigo organizado e rastreavel.", color: "#f05032" },
  { name: "Tailwind CSS", description: "Utilitario CSS", detail: "Tailwind CSS acelera o desenvolvimento de interfaces coesas. Uso com design tokens e classes customizadas para sistemas de design.", color: "#06b6d4" },
  { name: "Next.js", description: "Framework React", detail: "Next.js para aplicacoes com SSR, rotas de API integradas e performance otimizada com code splitting automatico.", color: "#000000" },
  { name: "Evolution API", description: "WhatsApp Automation", detail: "Especialista em Evolution API para gerenciar instancias de WhatsApp, webhooks de eventos e automacao de mensagens para clientes.", color: "#25d366" },
  { name: "OpenAI", description: "IA Generativa", detail: "Integro GPT-4o via API para geracao de texto, embeddings semanticos e sistemas de perguntas e respostas contextuais.", color: "#412991" },
  { name: "Google Gemini", description: "Multimodal AI", detail: "Google AI Studio e Gemini API para tarefas multimodais, analise de documentos e integracao com pipelines de IA financeira.", color: "#4285f4" },
  { name: "Java", description: "POO & SOLID", detail: "Formacao em Java com foco em Orientacao a Objetos, padroes SOLID e arquitetura limpa para sistemas robustos e manutenivies.", color: "#ed8b00" },
  { name: "Scrum", description: "Metodologia Agil", detail: "Gerencio sprints, planning e retrospectivas com Scrum. Metodologia aplicada no dia a dia para entregas iterativas e alinhadas.", color: "#0052cc" },
  { name: "GitHub", description: "Versionamento & CI/CD", detail: "GitHub Actions para automatizar pipelines de CI/CD, testes e deploys. Repositorios organizados com boas praticas de contribuicao.", color: "#181717" },
];

const allTechs = [...techs, ...techs];

interface PopoverState {
  tech: Tech;
  x: number;
  y: number;
}

export default function TechCarousel() {
  const [popover, setPopover] = useState<PopoverState | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setPopover(null);
        setIsPaused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleItemClick(tech: Tech, e: React.MouseEvent) {
    e.stopPropagation();
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const scrollY = window.scrollY;
    setPopover({ tech, x: rect.left + rect.width / 2, y: rect.top + scrollY - 8 });
    setIsPaused(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => { setPopover(null); setIsPaused(false); }, 5000);
  }

  const safeX = popover ? Math.min(Math.max(popover.x - 160, 12), (typeof window !== "undefined" ? window.innerWidth : 800) - 332) : 0;

  return (
    <>
      {popover && (
        <div
          ref={popoverRef}
          className="fixed z-[200] pointer-events-auto"
          style={{ left: safeX, top: popover.y - 168 }}
        >
          <div
            className="w-80 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-strong)] p-5"
            style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.18)" }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: popover.tech.color + "20", border: `1.5px solid ${popover.tech.color}40` }}
                >
                  <TechIcon name={popover.tech.name} className="w-5 h-5" />
                </span>
                <div>
                  <p className="font-display font-bold text-sm text-[var(--text-primary)]">{popover.tech.name}</p>
                  <p className="font-mono-meta text-[10px] font-semibold uppercase tracking-widest" style={{ color: popover.tech.color }}>{popover.tech.description}</p>
                </div>
              </div>
              <button
                onClick={() => { setPopover(null); setIsPaused(false); }}
                className="w-7 h-7 rounded-lg bg-[var(--bg-surface)] hover:bg-[var(--border-color)] flex items-center justify-center transition-colors shrink-0 cursor-pointer"
              >
                <X className="w-3.5 h-3.5 text-[var(--text-muted)]" />
              </button>
            </div>
            <div className="h-px bg-[var(--border-color)] mb-3" />
            <p className="font-sans-body text-sm text-[var(--text-muted)] leading-relaxed">{popover.tech.detail}</p>
            <div className="mt-4 h-0.5 rounded-full" style={{ background: `linear-gradient(90deg, ${popover.tech.color}, transparent)` }} />
          </div>
          <div
            className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[var(--bg-card)] border-r border-b border-[var(--border-strong)]"
            style={{ bottom: -7 }}
          />
        </div>
      )}

      <div className="w-full border-y border-[var(--border-color)] bg-[var(--bg-surface)]/50 py-3 mt-16 overflow-hidden">
        <div
          className="flex items-center gap-6 w-max"
          style={{
            animation: "tech-scroll 40s linear infinite",
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {allTechs.map((tech, i) => (
            <button
              key={`${tech.name}-${i}`}
              onClick={(e) => handleItemClick(tech, e)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--border-strong)] hover:shadow-md transition-all duration-200 cursor-pointer group shrink-0"
              title={`Clique para saber mais sobre ${tech.name}`}
            >
              <span className="w-5 h-5 flex items-center justify-center">
                <TechIcon name={tech.name} className="w-4 h-4" />
              </span>
              <span className="font-mono-meta text-[11px] font-semibold uppercase tracking-widest text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors whitespace-nowrap">
                {tech.name}
              </span>
              <span className="text-[var(--accent-terra)] opacity-40 text-[10px]">✦</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
