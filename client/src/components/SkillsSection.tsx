import React from "react";
import { Code2, Server, MessageSquare, ShieldCheck, Cpu, Terminal, Sparkles, CheckCircle2 } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  tag: string;
  skills: { name: string; level: string; note?: string }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Front-End & UI/UX Editorial",
    icon: <Code2 className="w-5 h-5 text-[#b85434] dark:text-[#e07452]" />,
    tag: "INTERFACES VIVAS",
    skills: [
      { name: "React & Next.js", level: "Avançado", note: "Componentes performáticos" },
      { name: "TypeScript & JavaScript", level: "Avançado", note: "ES6+, tipagem estrita" },
      { name: "Tailwind CSS & Vanilla CSS", level: "Avançado", note: "Design systems e tokens" },
      { name: "Recharts & Visualização", level: "Intermediário", note: "Dashboards analíticos" },
      { name: "HTML5 Semântico & Acessibilidade", level: "Avançado", note: "SEO e microinterações" },
    ],
  },
  {
    title: "Back-End & Arquitetura de APIs",
    icon: <Server className="w-5 h-5 text-[#4f6349] dark:text-[#81b29a]" />,
    tag: "SERVIÇOS & DADOS",
    skills: [
      { name: "Node.js & Express", level: "Avançado", note: "REST APIs escaláveis" },
      { name: "Python & Automação", level: "Intermediário", note: "Scripts e processamento" },
      { name: "Java (OOP & SOLID)", level: "Intermediário", note: "Arquitetura limpa" },
      { name: "MongoDB & PostgreSQL", level: "Intermediário", note: "Modelagem relacional e NoSQL" },
      { name: "Webhooks & Event Streams", level: "Avançado", note: "Sincronização em tempo real" },
    ],
  },
  {
    title: "Mensageria & Integração com ERP",
    icon: <MessageSquare className="w-5 h-5 text-[#235d94] dark:text-[#5390d9]" />,
    tag: "CONECTIVIDADE OMNICANAL",
    skills: [
      { name: "Evolution API (WhatsApp)", level: "Especialista", note: "Gestão de instâncias" },
      { name: "WhatsApp Cloud API Oficial", level: "Avançado", note: "Templates e webhooks Meta" },
      { name: "Resend & Send (Email Transacional)", level: "Avançado", note: "Entrega e autenticação" },
      { name: "SMS Market Gateway", level: "Avançado", note: "Disparos críticos e lote" },
      { name: "ERP TargetX Sync", level: "Avançado", note: "PDV, compras e clientes" },
    ],
  },
  {
    title: "Governança, Métodos & Ferramentas",
    icon: <ShieldCheck className="w-5 h-5 text-[#a97f3d] dark:text-[#d9a759]" />,
    tag: "QUALIDADE & GESTÃO",
    skills: [
      { name: "Git, GitHub & CI/CD", level: "Avançado", note: "Versionamento estruturado" },
      { name: "Docker & Containerização", level: "Intermediário", note: "Ambientes padronizados" },
      { name: "White Belt Six Sigma", level: "Certificado", note: "Melhoria contínua de processos" },
      { name: "Governança TI (COBIT / ITIL)", level: "Certificado", note: "SLA e alinhamento estratégico" },
      { name: "Scrum & Metodologias Ágeis", level: "Prático", note: "Gestão de sprints e entregas" },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/[0.02] dark:bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <span className="font-mono-meta text-xs uppercase tracking-widest text-[#b85434] dark:text-[#e07452] flex items-center gap-2 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Competências Técnicas & Metodologias
            </span>
            <h2 className="font-serif-title text-4xl sm:text-6xl font-normal leading-[1.02] tracking-tight text-current">
              Tecnologia aplicada <br />
              <span className="italic text-[#b85434] dark:text-[#e07452]">ao contexto real.</span>
            </h2>
          </div>
          <p className="font-sans-body text-base text-current/75 max-w-md">
            Ferramentas modernas selecionadas pela capacidade de resolver problemas práticos de negócio com estabilidade e facilidade de manutenção.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 rounded-[28px] bg-[#fbf8f2] dark:bg-[#161c26] border border-black/10 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-black/5 dark:bg-white/10 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <span className="font-mono-meta text-[10px] text-current/50 uppercase tracking-widest">
                    {category.tag}
                  </span>
                </div>

                <h3 className="font-serif-title text-2xl font-normal text-current mb-6">
                  {category.title}
                </h3>

                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/5 flex items-center justify-between"
                    >
                      <div>
                        <p className="font-display font-semibold text-xs sm:text-sm text-current">
                          {skill.name}
                        </p>
                        {skill.note && (
                          <p className="font-mono-meta text-[10px] text-current/50 mt-0.5">
                            {skill.note}
                          </p>
                        )}
                      </div>
                      <span className="font-mono-meta text-[10px] px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/10 text-current/70 font-semibold">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
