import React from "react";
import { GraduationCap, Briefcase, Award, Sparkles, Building2, ExternalLink, HeartHandshake, CheckCircle2 } from "lucide-react";

export default function AboutAndBio() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden bg-[var(--bg-page)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 border-b border-[var(--border-color)] pb-8">
          <div>
            <span className="font-mono-meta text-[11px] uppercase tracking-widest text-[var(--text-secondary)] flex items-center gap-2 mb-3 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              Sobre Mim & Trajetória
            </span>
            <h2 className="font-serif-title text-4xl sm:text-6xl font-normal leading-[1.02] tracking-tight text-[var(--text-primary)]">
              Aprendizado contínuo, <br />
              <span className="italic text-[var(--accent-moss-dark)]">trabalho em equipe e foco em entrega.</span>
            </h2>
          </div>
          <p className="font-sans-body text-base text-[var(--text-muted)] max-w-md lg:pb-2">
            Unindo a disciplina da formação técnica com a visão de processos de Gestão da TI para criar ferramentas que auxiliem de verdade as equipes.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Story & Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm space-y-5">
              <h3 className="font-serif-title text-2xl sm:text-3xl font-normal text-[var(--text-primary)]">
                Como cheguei até aqui.
              </h3>
              <p className="font-sans-body text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                Minha base começou no curso <strong>Técnico em Mecânica Industrial na ETEC Pedro D'Arcádia Neto</strong>, onde aprendi leitura analítica, processos de melhoria contínua e atenção aos detalhes. Depois, ingressei na <strong>FATEC Assis</strong> para cursar <strong>Gestão da Tecnologia da Informação</strong>, conectando essa visão de fluxo ao desenvolvimento de software.
              </p>
              <p className="font-sans-body text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
                No meu dia a dia como estagiário na <strong>Fomenta Vale</strong>, colaboro no desenvolvimento web, atuo com ferramentas digitais para o CIT Assis e construo integrações práticas — desde automação com <strong>WhatsApp (Evolution API e API Oficial)</strong> até o desenvolvimento da <strong>MarIA</strong>, agente inteligente integrada a regras financeiras do ERP TargetX.
              </p>

              {/* Organization Links in Box */}
              <div className="pt-5 border-t border-[var(--border-color)] flex flex-wrap items-center gap-6 font-mono-meta text-[11px] uppercase tracking-wider">
                <a
                  href="https://fomentavale.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] font-bold hover:text-[var(--text-primary)] transition-colors"
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Fomenta Vale Inovação</span>
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </a>

                <a
                  href="https://fatecassis.edu.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--text-secondary)] font-bold hover:text-[var(--text-primary)] transition-colors"
                >
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>FATEC Assis (Gestão de TI)</span>
                  <ExternalLink className="w-3 h-3 opacity-50" />
                </a>
              </div>
            </div>

            {/* Principles Cards in Pastel Colors */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
                <span className="font-mono-meta text-[10px] text-[var(--accent-moss-dark)] font-bold block mb-2 uppercase tracking-widest">01 / Escuta</span>
                <h4 className="font-serif-title text-xl font-normal text-[var(--text-primary)] mb-1.5">Entender a rotina</h4>
                <p className="font-sans-body text-[13px] text-[var(--text-muted)]">Ouvir quem usa o sistema antes de escrever código.</p>
              </div>

              <div className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
                <span className="font-mono-meta text-[10px] text-[var(--accent-terra)] font-bold block mb-2 uppercase tracking-widest">02 / Simplicidade</span>
                <h4 className="font-serif-title text-xl font-normal text-[var(--text-primary)] mb-1.5">Fazer funcionar</h4>
                <p className="font-sans-body text-[13px] text-[var(--text-muted)]">Interfaces limpas, sem excessos e fáceis de operar.</p>
              </div>

              <div className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
                <span className="font-mono-meta text-[10px] text-[var(--text-secondary)] font-bold block mb-2 uppercase tracking-widest">03 / Evolução</span>
                <h4 className="font-serif-title text-xl font-normal text-[var(--text-primary)] mb-1.5">Aprender sempre</h4>
                <p className="font-sans-body text-[13px] text-[var(--text-muted)]">Explorar novas APIs, IAs e métodos para o time.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Academic & Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            {/* Academic Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm">
              <h4 className="font-mono-meta font-bold text-[11px] uppercase tracking-widest text-[var(--text-secondary)] mb-6 flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-[var(--accent-moss-dark)]" />
                Formação Acadêmica
              </h4>

              <div className="space-y-5">
                <div className="pb-4 border-b border-[var(--border-color)]">
                  <div className="flex items-start justify-between gap-4">
                    <strong className="font-sans-body font-bold text-sm text-[var(--text-primary)] leading-tight">
                      Gestão da Tecnologia da Informação
                    </strong>
                    <span className="font-mono-meta text-[10px] text-[var(--accent-moss-dark)] font-bold shrink-0">
                      2024—2027
                    </span>
                  </div>
                  <p className="font-mono-meta text-[11px] text-[var(--text-muted)] mt-1.5 uppercase tracking-wider">
                    FATEC Assis
                  </p>
                </div>

                <div className="pb-4 border-b border-[var(--border-color)]">
                  <div className="flex items-start justify-between gap-4">
                    <strong className="font-sans-body font-bold text-sm text-[var(--text-primary)] leading-tight">
                      Técnico em Mecânica Industrial
                    </strong>
                    <span className="font-mono-meta text-[10px] text-[var(--text-muted)] font-bold shrink-0">
                      2020—2021
                    </span>
                  </div>
                  <p className="font-mono-meta text-[11px] text-[var(--text-muted)] mt-1.5 uppercase tracking-wider">
                    ETEC Assis
                  </p>
                </div>

                <div>
                  <div className="flex items-start justify-between gap-4">
                    <strong className="font-sans-body font-bold text-sm text-[var(--text-primary)] leading-tight">
                      Inglês Concluído (B1)
                    </strong>
                    <span className="font-mono-meta text-[10px] text-[var(--text-muted)] font-bold shrink-0">
                      CEDET
                    </span>
                  </div>
                  <p className="font-mono-meta text-[11px] text-[var(--text-muted)] mt-1.5 uppercase tracking-wider">
                    Centro de Desenvolvimento
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm">
              <h4 className="font-mono-meta font-bold text-[11px] uppercase tracking-widest text-[var(--text-secondary)] mb-5 flex items-center gap-2">
                <Award className="w-4 h-4 text-[var(--text-secondary)]" />
                Cursos & Certificações
              </h4>

              <div className="space-y-3 font-mono-meta text-[11px]">
                <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] flex items-center justify-between border border-transparent hover:border-[var(--border-color)] transition-colors">
                  <span className="text-[var(--text-primary)] font-bold">Java OOP, Abstração & SOLID</span>
                  <span className="text-[var(--text-muted)] uppercase tracking-wider">DIO</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] flex items-center justify-between border border-transparent hover:border-[var(--border-color)] transition-colors">
                  <span className="text-[var(--text-primary)] font-bold">Node.js API Rest & DBs</span>
                  <span className="text-[var(--text-muted)] uppercase tracking-wider">Alura</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] flex items-center justify-between border border-transparent hover:border-[var(--border-color)] transition-colors">
                  <span className="text-[var(--text-primary)] font-bold">Governança TI (COBIT/ITIL)</span>
                  <span className="text-[var(--text-muted)] uppercase tracking-wider">Ka Solution</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[var(--bg-surface)] flex items-center justify-between border border-transparent hover:border-[var(--border-color)] transition-colors">
                  <span className="text-[var(--text-primary)] font-bold">White Belt Six Sigma</span>
                  <span className="text-[var(--text-muted)] uppercase tracking-wider">RL&Assoc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
