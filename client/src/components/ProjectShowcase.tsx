import React, { useState } from "react";
import { ArrowUpRight, Sparkles, Eye } from "lucide-react";
import ProjectModal, { ProjectData } from "./ProjectModal";

const projectsList: ProjectData[] = [
  {
    id: "target-live",
    title: "Target Live — Business Intelligence",
    subtitle: "Dashboard analítico em tempo real para faturamento, giro de mesa e curva ABC.",
    category: "BI & Analytics / Web App",
    year: "2025—2026",
    role: "Full-Stack & BI Developer",
    image: "/assets/target-live-preview.jpg",
    description:
      "Plataforma completa de Business Intelligence conectada aos pontos de venda e fechamentos de contas. Apresenta métricas instantâneas como faturamento bruto, ticket médio por comanda, taxa de giro de mesa, performance individual de atendentes e curva ABC de produtos (Pareto 80/20).",
    challenge:
      "Transformar centenas de registros de vendas e comandas abertas em indicadores visuais diretos, permitindo que gerentes tomem decisões de compras e estoques sem atrasos de relatório.",
    solution:
      "Desenvolvimento de arquitetura com streaming de eventos e agregação de dados em tempo real, renderizando gráficos interativos via Recharts e tabelas dinâmicas de fechamento com status de pagamento (Pix, Cartão, Dinheiro).",
    results: [
      "Visão de faturamento em tempo real (R$ 8.557,92 no dia)",
      "Curva ABC precisa separando 73 produtos líderes (Classe A)",
      "Redução de 40% no tempo de auditoria de fechamento de caixa",
    ],
    techStack: ["React", "TypeScript", "Node.js", "Recharts", "Tailwind CSS", "REST API", "PostgreSQL"],
    liveUrl: "#target-live",
  },
  {
    id: "target-client",
    title: "TargetClient — Central de Chamados & Acessos",
    subtitle: "Plataforma integrada de chamados, gestão de sprints e controle granular de permissões RBAC.",
    category: "Enterprise System / Help Desk",
    year: "2025—2026",
    role: "Full-Stack Developer",
    image: "/assets/target-live-preview.jpg",
    description:
      "Sistema de tickets e atendimento técnico corporativo que organiza mais de 500 chamados entre times de Desenvolvimento, Suporte, Implantação e Qualidade. Inclui painel de permissões por departamento e usuário para controle de acessos no ecossistema Target.",
    challenge:
      "Evitar gargalos na esteira de liberação de software e garantir que cada departamento tenha acesso estritamente às suas rotinas autorizadas.",
    solution:
      "Criação de esteira visual de chamados (Abertos, Em Andamento, Liberação, Validação, Concluído) com sinalização de alertas em atraso e módulo RBAC por departamento.",
    results: [
      "Gestão centralizada de mais de 500 tickets ativos",
      "Matriz de controle de acessos para 6 departamentos",
      "Maior previsibilidade nas datas de liberação de versões",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "RBAC", "ERP TargetX"],
    liveUrl: "#target-chamados",
  },
  {
    id: "mensageria-hub",
    title: "Hub de Mensageria Multicanal & ERP TargetX",
    subtitle: "Automação e mensageria integrada com Evolution API, WhatsApp Oficial, Resend e SMS Market.",
    category: "Automação & Integrações / APIs",
    year: "2025—2026",
    role: "Integration Engineer & Backend",
    image: "/assets/messaging-preview.jpg",
    description:
      "Aplicação de mensageria omnicanal que centraliza o disparo de mensagens para clientes a partir de eventos do ERP TargetX. Suporta WhatsApp via Evolution API e API Oficial do WhatsApp (Meta), e-mails transacionais via Resend/Send, SMS corporativo via SMS Market e base unificada de contatos.",
    challenge:
      "Conectar múltiplos canais de comunicação com formatos e taxas de entrega diferentes a um ERP proprietário sem duplicar disparos ou perder notificações críticas.",
    solution:
      "Construção de um gateway unificado de webhooks e filas de disparo que normaliza mensagens, gerencia instâncias de WhatsApp e registra logs de entrega em tempo real.",
    results: [
      "Integração bidirecional com WhatsApp, Email e SMS",
      "Sincronização automática com a base de clientes do ERP",
      "Taxa de entrega superior a 98% com fallback inteligente",
    ],
    techStack: ["Evolution API", "WhatsApp Official API", "Resend", "SMS Market", "Node.js", "Webhooks", "ERP TargetX"],
    liveUrl: "#mensageria",
  },
  {
    id: "vostro-store",
    title: "Vostro — Vitrine Digital & E-commerce",
    subtitle: "Catálogo online curado com foco em design editorial, navegação fluida e conversão.",
    category: "E-Commerce / Front-End",
    year: "2024—2025",
    role: "UI/UX & Web Developer",
    image: "/assets/vostro-preview.jpg",
    description:
      "Plataforma e-commerce e vitrine virtual para a marca Vostro (vostro.targetx.com.br), desenvolvida para valorizar coleções de vestuário e acessórios através de uma experiência limpa, tipografia clássica e catálogo rápido.",
    challenge:
      "Criar uma vitrine digital sofisticada e rápida que transmita exclusividade de marca sem a sobrecarga visual dos e-commerces genéricos.",
    solution:
      "Layout minimalista inspirado em editoriais de moda, com filtros contextuais, cards de produto interativos e integração com a infraestrutura de pedidos TargetX.",
    results: [
      "Ambiente de vitrine em produção em vostro.targetx.com.br",
      "Navegação mobile-first de alto desempenho",
      "Fluxo de compra direto e organizado por coleções",
    ],
    techStack: ["React", "JavaScript", "Tailwind CSS", "REST API", "UI/UX Editorial"],
    liveUrl: "https://vostro.targetx.com.br/",
  },
  {
    id: "delivery-targetx",
    title: "Delivery TargetX — Plataforma de Pedidos",
    subtitle: "Sistema ágil de delivery e cardápio interativo para restaurantes e estabelecimentos.",
    category: "Food Tech / Delivery",
    year: "2024—2025",
    role: "Web Developer",
    image: "/assets/target-live-preview.jpg",
    description:
      "Plataforma web de pedidos e delivery rápido (delivery.targetx.com.br) conectada diretamente ao sistema de cozinha e PDV. Permite personalização de pedidos, cálculo de taxas e acompanhamento em tempo real para os clientes.",
    challenge:
      "Garantir estabilidade e velocidade em horários de pico sem travar a interface do cliente durante a montagem dos pedidos.",
    solution:
      "Interface leve e responsiva com carrinho dinâmico, checkout simplificado e integração direta com o fluxo de comandas do restaurante.",
    results: [
      "Em operação em delivery.targetx.com.br",
      "Redução no tempo de montagem de pedidos pelo consumidor",
      "Conexão direta com a cozinha e despacho",
    ],
    techStack: ["HTML5/CSS3", "JavaScript", "React", "REST API", "Integração PDV"],
    liveUrl: "https://delivery.targetx.com.br",
  },
  {
    id: "hackathon-receita",
    title: "Hackathon Receita Federal 2025 — Inaladores",
    subtitle: "Conversão sustentável de cigarros eletrônicos apreendidos em inaladores terapêuticos.",
    category: "Inovação Social & Saúde Pública",
    year: "2025",
    role: "Pesquisa, Engenharia & Proposta",
    image: "/assets/hackathon-preview.jpg",
    description:
      "Projeto premiado na maratona da Receita Federal propondo a descaracterização e reaproveitamento de componentes nobres de cigarros eletrônicos apreendidos (baterias recarregáveis, sensores de fluxo e circuitos) para montagem de inaladores terapêuticos portáteis de baixo custo voltados ao SUS.",
    challenge:
      "Resolver dois problemas simultâneos: o descarte ambiental perigoso de milhares de vapes apreendidos e a carência de dispositivos respiratórios acessíveis na rede pública.",
    solution:
      "Estudo detalhado de desmontagem, sanitização, reaproveitamento de baterias de lítio e projeto modular de carcaça médica reciclável para administração controlada de medicamentos inalatórios.",
    results: [
      "Reconhecimento oficial por originalidade e impacto social",
      "Plano de desvio de toneladas de lixo eletrônico dos aterros",
      "Proposta de economia de custos para o sistema de saúde",
    ],
    techStack: ["Engenharia Mecânica", "Análise de Materiais", "Modelagem 3D", "Inovação em Saúde"],
    liveUrl: undefined,
  },
];

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <section id="projetos" className="py-24 relative overflow-hidden bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 border-b border-[var(--border-color)] pb-8">
          <div>
            <span className="font-mono-meta text-[11px] uppercase tracking-widest text-[var(--accent-terra)] flex items-center gap-2 mb-3 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              Catálogo de Projetos Selecionados
            </span>
            <h2 className="font-serif-title text-4xl sm:text-6xl font-normal leading-[1.02] tracking-tight text-[var(--text-primary)]">
              Sistemas que fazem <br />
              <span className="italic text-[var(--accent-terra)]">a operação acontecer.</span>
            </h2>
          </div>
          <p className="font-sans-body text-base text-[var(--text-muted)] max-w-md lg:pb-2">
            De centrais de Business Intelligence a hubs de comunicação multicanal e comércio digital. Cada projeto parte de um problema real de processo e busca clareza operacional.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl p-6 bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-terra)] shadow-sm hover:shadow-xl hover:translate-y-[-6px] transition-all duration-300 flex flex-col justify-between cursor-pointer"
              data-cursor="ABRIR"
            >
              {/* Media Container */}
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[var(--bg-surface)] mb-6 border border-[var(--border-color)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[var(--bg-card)] border border-[var(--border-strong)] text-[var(--text-primary)] text-xs font-mono-meta font-bold shadow-md">
                    <Eye className="w-3.5 h-3.5" /> Detalhes do Projeto
                  </span>
                </div>

                {/* Category tag */}
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded bg-[var(--bg-card)] border border-[var(--border-strong)] text-[var(--text-secondary)] font-mono-meta text-[10px] font-bold uppercase tracking-widest shadow-sm">
                  {project.category.split("/")[0]}
                </div>
              </div>

              {/* Card Content */}
              <div>
                <div className="flex items-center justify-between text-[11px] font-mono-meta text-[var(--accent-terra)] font-bold uppercase tracking-widest mb-3">
                  <span>0{index + 1} / {project.year}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>

                <h3 className="font-serif-title text-2xl font-normal leading-tight text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-terra)] transition-colors">
                  {project.title}
                </h3>
                <p className="font-sans-body text-[13px] sm:text-sm text-[var(--text-muted)] line-clamp-2 mb-6">
                  {project.subtitle}
                </p>
              </div>

              {/* Tech Stack Pills footer */}
              <div className="pt-4 border-t border-[var(--border-color)] flex flex-wrap gap-2">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] font-mono-meta text-[10px] uppercase tracking-wider text-[var(--text-secondary)] font-bold"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="px-2.5 py-1 rounded border border-[var(--border-color)] font-mono-meta text-[10px] uppercase tracking-wider text-[var(--accent-terra)] font-bold">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Deep-dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
