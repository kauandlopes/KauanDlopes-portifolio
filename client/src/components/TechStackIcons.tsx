import React, { useState } from "react";
import { Sparkles, BrainCircuit } from "lucide-react";
import { TechIcon } from "@/lib/techIcons";

interface TechItem {
  name: string;
  category: "ai" | "frontend" | "backend" | "messaging" | "tools";
  badge?: string;
}

const techItems: TechItem[] = [
  // Inteligência Artificial & LLMs
  { name: "MarIA", category: "ai", badge: "Agente Financeiro Próprio (Target Finance AI)" },
  { name: "DeepSeek", category: "ai", badge: "API — LLM & Raciocínio" },
  { name: "Google Gemini", category: "ai", badge: "Google AI Studio — Multimodal" },
  { name: "Groq", category: "ai", badge: "Inferência Ultra-Rápida (LPU)" },
  { name: "OpenAI", category: "ai", badge: "GPT-4o — Embeddings & Chat" },
  { name: "Function Calling", category: "ai", badge: "Tool Calling — Arquitetura de Ações" },
  { name: "RAG", category: "ai", badge: "Busca Semântica — Notas Fiscais & Docs" },
  { name: "Prompt Engineering", category: "ai", badge: "Guardrails & Regras de Negócio" },

  // Front-End & UI
  { name: "React", category: "frontend", badge: "v19" },
  { name: "TypeScript", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "JavaScript", category: "frontend", badge: "ES6+" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend", badge: "Semântico" },
  { name: "Recharts", category: "frontend", badge: "Visualização de Dados" },
  { name: "Framer Motion", category: "frontend" },
  { name: "Radix UI", category: "frontend", badge: "Shadcn UI" },

  // Back-End & APIs
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend", badge: "Express.js" },
  { name: "REST API", category: "backend", badge: "& Webhooks" },
  { name: "Python", category: "backend" },
  { name: "Java", category: "backend", badge: "POO & SOLID" },
  { name: "PostgreSQL", category: "backend", badge: "& SQL" },
  { name: "MongoDB", category: "backend" },

  // Mensageria & Integrações
  { name: "Evolution API", category: "messaging", badge: "WhatsApp — Instâncias & Eventos" },
  { name: "WhatsApp", category: "messaging", badge: "Cloud API Oficial — Meta Business" },
  { name: "Resend", category: "messaging", badge: "Email Transacional" },
  { name: "SMS Gateway", category: "messaging", badge: "SMS Market — Disparo em Lote" },
  { name: "ERP TargetX", category: "messaging", badge: "Sincronização Operacional" },

  // Ferramentas & Métodos
  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "AutoCAD", category: "tools", badge: "Métrica" },
  { name: "Lean Six Sigma", category: "tools", badge: "White Belt — Melhoria Contínua" },
  { name: "Scrum", category: "tools", badge: "Metodologias Ágeis" },
  { name: "ITIL / COBIT", category: "tools", badge: "Governança de TI" },
];

export default function TechStackIcons() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Todas", count: techItems.length },
    { id: "ai", label: "IAs & Agentes", count: techItems.filter((i) => i.category === "ai").length },
    { id: "frontend", label: "Front-End", count: techItems.filter((i) => i.category === "frontend").length },
    { id: "backend", label: "Back-End & APIs", count: techItems.filter((i) => i.category === "backend").length },
    { id: "messaging", label: "Mensageria & Integrações", count: techItems.filter((i) => i.category === "messaging").length },
    { id: "tools", label: "Ferramentas & Métodos", count: techItems.filter((i) => i.category === "tools").length },
  ];

  const filteredItems = activeCategory === "all" ? techItems : techItems.filter((i) => i.category === activeCategory);

  return (
    <section id="tecnologias" className="py-24 relative overflow-hidden bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono-meta text-xs uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 mb-3 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              Tecnologias & Ferramentas
            </span>
            <h2 className="font-serif-title text-4xl sm:text-5xl font-normal leading-none tracking-tight text-[var(--text-primary)]">
              O que utilizo no dia a dia.
            </h2>
          </div>
          <p className="font-sans-body text-base text-[var(--text-muted)] max-w-md">
            Linguagens, frameworks, bibliotecas e integrações com IAs generativas que aplico para construir sistemas funcionais e estáveis.
          </p>
        </div>

        {/* Category Pills Filter */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-mono-meta text-[11px] uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[var(--accent-moss-dark)] text-[var(--bg-card)] shadow-md"
                  : "bg-[var(--bg-card)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:bg-[var(--bg-page)] hover:border-[var(--border-strong)]"
              }`}
            >
              {cat.label} <span className="opacity-50 text-[10px] ml-1">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* AI Highlight Banner */}
        {(activeCategory === "all" || activeCategory === "ai") && (
          <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-page)] border border-[var(--border-strong)] mb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-xl bg-[var(--bg-card)] border border-[var(--border-strong)] text-[var(--accent-moss-dark)] flex items-center justify-center shrink-0 shadow-sm">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-1.5">
                  <h4 className="font-serif-title text-2xl font-normal text-[var(--text-primary)]">
                    MarIA — Inteligência Financeira Target
                  </h4>
                  <span className="px-2.5 py-1 rounded border border-[var(--border-strong)] bg-[var(--bg-card)] text-[var(--text-secondary)] font-mono-meta text-[10px] uppercase tracking-wider font-bold">
                    Agente Próprio
                  </span>
                </div>
                <p className="font-sans-body text-sm text-[var(--text-muted)] max-w-2xl leading-relaxed">
                  Responsável pelo desenvolvimento da <strong>MarIA</strong>, assistente de IA integrada ao ERP que consome regras financeiras, dados de conciliação e fechamento de caixa utilizando <strong>Function Calling</strong>, <strong>DeepSeek API</strong> e <strong>Google AI Studio</strong>.
                </p>
              </div>
            </div>
            <div className="font-mono-meta text-[11px] uppercase tracking-widest text-[var(--text-primary)] font-semibold bg-[var(--bg-card)] px-4 py-2 rounded border border-[var(--border-strong)] shrink-0 shadow-sm">
              Tool Calling Architecture
            </div>
          </div>
        )}

        {/* Compact & Clean Grid of Tech Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--border-strong)] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <span className="w-9 h-9 rounded-lg bg-[var(--bg-surface)] flex items-center justify-center group-hover:border group-hover:border-[var(--border-strong)] transition-colors duration-300">
                  <TechIcon name={item.name} className="w-[18px] h-[18px]" />
                </span>
                {item.badge && (
                  <span className="px-2 py-1 rounded bg-[var(--bg-surface)] text-[9px] font-mono-meta font-bold text-[var(--text-secondary)] uppercase tracking-wider text-right">
                    {item.badge}
                  </span>
                )}
              </div>

              <div className="font-sans-body font-semibold text-sm text-[var(--text-primary)] leading-snug">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
