import React from "react";
import { Briefcase, MapPin, Building2, ExternalLink } from "lucide-react";

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  tag: string;
  link?: string;
  highlights: string[];
}

const experiences: ExperienceItem[] = [
  {
    period: "Mar 2025 — Presente",
    role: "Estagiário Desenvolvedor Web",
    company: "Fomenta Vale & CIT Assis",
    location: "Assis, SP",
    tag: "Atual",
    link: "https://fomentavale.com.br",
    highlights: [
      "Desenvolvimento de páginas e interfaces web para projetos e parceiros da região de Assis/SP.",
      "Colaboração nas rotinas do CIT Assis (Centro de Inovação e Tecnologia), apoiando iniciativas de tecnologia locais.",
      "Apoio a novos voluntários e estudo de novas ferramentas para cursos e processos digitais.",
    ],
  },
  {
    period: "Ago 2024 — Jan 2025",
    role: "Técnico em TI & Apoio Operacional",
    company: "Mercado Campeão",
    location: "Assis, SP",
    tag: "Sistemas & PDV",
    highlights: [
      "Suporte a computadores, periféricos de caixa e manutenção básica da rede do estabelecimento.",
      "Operação do sistema ERP Infototal para cadastro de produtos, conferência de compras e relatórios de estoque.",
      "Apoio direto no atendimento e resolução de dúvidas de operação do sistema.",
    ],
  },
  {
    period: "Jan 2023 — Jul 2024",
    role: "Auxiliar de Geoprocessamento & Dados",
    company: "Tigremaq Comércio de Máquinas e Impl. Agrícolas",
    location: "Assis, SP",
    tag: "Dados & Campo",
    highlights: [
      "Auxílio na organização e conferência de dados para Georreferenciamento e Cadastro Ambiental Rural (CAR).",
      "Elaboração de desenhos em AutoCAD/Métrica e alimentação de planilhas de controle.",
      "Trabalho em equipe com foco em prazos e precisão na documentação.",
    ],
  },
  {
    period: "2025",
    role: "Participação & Reconhecimento",
    company: "Hackathon da Receita Federal",
    location: "Maratona Nacional",
    tag: "Inovação",
    highlights: [
      "Elaboração em equipe de projeto para reaproveitamento de componentes nobres de eletrônicos apreendidos para montagem de inaladores de baixo custo.",
      "Apresentação da proposta focada em sustentabilidade e atendimento à saúde pública.",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="jornada" className="py-24 relative overflow-hidden bg-[var(--bg-page)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 border-b border-[var(--border-color)] pb-8">
          <div>
            <span className="font-mono-meta text-[11px] uppercase tracking-widest text-[var(--accent-moss-dark)] flex items-center gap-2 mb-3 font-bold">
              <Briefcase className="w-3.5 h-3.5" />
              Trajetória Profissional
            </span>
            <h2 className="font-serif-title text-4xl sm:text-6xl font-normal leading-[1.02] tracking-tight text-[var(--text-primary)]">
              Experiências que <br />
              <span className="italic text-[var(--accent-moss-dark)]">construíram minha prática.</span>
            </h2>
          </div>
          <p className="font-sans-body text-base text-[var(--text-muted)] max-w-md lg:pb-2">
            Vivências em suporte operacional, processamento de dados e desenvolvimento de sistemas web.
          </p>
        </div>

        {/* Timeline Deck */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <article
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--border-strong)] shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Left meta (4 cols) */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full">
                  <div>
                    <span className="inline-block px-3 py-1.5 rounded bg-[var(--bg-surface)] font-mono-meta text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)] mb-4">
                      {exp.period}
                    </span>
                    <h3 className="font-serif-title text-2xl sm:text-3xl font-normal text-[var(--text-primary)] leading-tight">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <p className="font-sans-body font-semibold text-sm text-[var(--text-secondary)]">
                        {exp.company}
                      </p>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--accent-moss-dark)] hover:text-[var(--text-primary)] transition-colors"
                          aria-label="Abrir link da empresa"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="font-mono-meta text-[11px] uppercase tracking-widest text-[var(--text-muted)] mt-5 flex items-center gap-1.5 font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Right highlights (8 cols) */}
                <div className="lg:col-span-8 pl-0 lg:pl-8 lg:border-l border-[var(--border-color)]">
                  <ul className="space-y-3.5">
                    {exp.highlights.map((point, pointIdx) => (
                      <li key={pointIdx} className="flex items-start gap-3.5 text-[13px] sm:text-sm text-[var(--text-muted)] font-sans-body leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-moss)] shrink-0 mt-2" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
