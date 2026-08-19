import React, { useState } from "react";
import {
  Sparkles,
  Bot,
  BrainCircuit,
  Cpu,
  Code2,
  Server,
  Database,
  Layers,
  MessageSquare,
  Wrench,
  Zap,
  Globe,
  Terminal,
  FileCode2,
  Workflow,
  Send,
  Boxes,
  Compass,
} from "lucide-react";

interface TechItem {
  name: string;
  category: "ai" | "frontend" | "backend" | "messaging" | "tools";
  badge?: string;
  icon?: string;
}

const techItems: TechItem[] = [
  // Inteligência Artificial & LLMs
  { name: "MarIA (Target Finance AI)", category: "ai", badge: "Criador do Agente" },
  { name: "DeepSeek API", category: "ai", badge: "LLM & Raciocínio" },
  { name: "Google AI Studio / Gemini", category: "ai", badge: "Multimodal & Prototipagem" },
  { name: "Groq LPU", category: "ai", badge: "Inferência Ultra-Rápida" },
  { name: "OpenAI GPT-4o API", category: "ai", badge: "Embeddings & Chat" },
  { name: "Function / Tool Calling", category: "ai", badge: "Arquitetura de Ações" },
  { name: "RAG & Busca Semântica", category: "ai", badge: "Notas Fiscais & Docs" },
  { name: "Prompt Engineering & Guardrails", category: "ai", badge: "Regras de Negócio" },

  // Front-End & UI
  { name: "React 19", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "JavaScript (ES6+)", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "HTML5 & CSS3 Semântico", category: "frontend" },
  { name: "Recharts & Visualização", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  { name: "Radix UI / Shadcn UI", category: "frontend" },
  { name: "Design Editorial & Responsividade", category: "frontend" },

  // Back-End & APIs
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "REST APIs & Webhooks", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Java (POO & SOLID)", category: "backend" },
  { name: "PostgreSQL & SQL", category: "backend" },
  { name: "MongoDB", category: "backend" },

  // Mensageria & Integrações
  { name: "Evolution API (WhatsApp)", category: "messaging", badge: "Instâncias & Eventos" },
  { name: "WhatsApp Cloud API Oficial", category: "messaging", badge: "Meta Business" },
  { name: "Resend / Send", category: "messaging", badge: "Email Transacional" },
  { name: "SMS Market Gateway", category: "messaging", badge: "Disparo em Lote" },
  { name: "ERP TargetX Sync", category: "messaging", badge: "Integração Operacional" },

  // Ferramentas & Métodos
  { name: "Git & GitHub", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "AutoCAD & Métrica", category: "tools" },
  { name: "Lean Six Sigma (White Belt)", category: "tools", badge: "Melhoria Contínua" },
  { name: "Scrum & Metodologias Ágeis", category: "tools" },
  { name: "Governança TI (ITIL / COBIT)", category: "tools" },
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
                <span className="w-8 h-8 rounded-lg bg-[var(--bg-surface)] text-[var(--text-secondary)] flex items-center justify-center text-xs font-mono-meta font-bold group-hover:bg-[var(--accent-moss-dark)] group-hover:text-[var(--bg-card)] transition-colors duration-300">
                  {item.category === "ai" && <Bot className="w-4 h-4" />}
                  {item.category === "frontend" && <Code2 className="w-4 h-4" />}
                  {item.category === "backend" && <Server className="w-4 h-4" />}
                  {item.category === "messaging" && <Send className="w-4 h-4" />}
                  {item.category === "tools" && <Wrench className="w-4 h-4" />}
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
