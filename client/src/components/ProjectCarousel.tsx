import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ExternalLink,
  Play,
  Layers,
  Cpu,
  CheckCircle,
  Activity,
  LifeBuoy,
  Zap,
  Bot,
  Globe,
  ArrowUpRight,
  Maximize2,
  X,
} from "lucide-react";
import LiveTargetDashboard from "./LiveTargetDashboard";
import LiveTicketSystem from "./LiveTicketSystem";
import MessagingFlow from "./MessagingFlow";

export interface CarouselProject {
  id: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  category: string;
  year: string;
  role: string;
  image: string;
  badge: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  type: "interactive-live" | "interactive-tickets" | "interactive-messaging" | "ai-agent" | "external-vostro" | "external-delivery" | "hackathon";
  externalUrl?: string;
}

const projects: CarouselProject[] = [
  {
    id: "delphi-tunnel",
    title: "Gerenciador de Túnel SSH & Proxy (Delphi / Pascal)",
    shortTitle: "Túnel Delphi (Open Source)",
    subtitle: "Gerenciador de conexões de rede, túneis SSH e rotas seguras desktop em Object Pascal.",
    category: "Open Source / Desktop & Rede",
    year: "2024—2025",
    role: "Desenvolvedor Delphi (Autor)",
    image: "/assets/target-live-preview.jpg",
    badge: "Open Source (GitHub)",
    description:
      "Ferramenta desktop desenvolvida em Delphi para estabelecer e monitorar túneis SSH, redirecionamento de portas e rotas seguras de comunicação com reconexão automática e tratamento de sockets.",
    challenge:
      "Garantir a manutenção de conexões de túnel em ambientes de rede instáveis com reconexão transparente e controle direto de portas.",
    solution:
      "Arquitetura multithread em Object Pascal com tratamento de eventos Indy, logs de tráfego em tempo real e sinalização visual de status.",
    results: [
      "Código-fonte aberto e disponível no GitHub",
      "Gerenciamento intuitivo de múltiplos túneis de porta",
      "Reconexão automática transparente sem queda de serviço",
    ],
    techStack: ["Delphi", "Object Pascal", "SSH Protocols", "Sockets", "WinAPI", "Open Source"],
    type: "external-vostro",
    externalUrl: "https://github.com/kauandlopes",
  },
  {
    id: "target-live",
    title: "Target Live — Business Intelligence em Tempo Real",
    shortTitle: "Target Live BI",
    subtitle: "Dashboard analítico conectado a pontos de venda com faturamento, giro de mesa e curva ABC.",
    category: "Proprietário / Enterprise",
    year: "2025—2026",
    role: "Desenvolvimento Full-Stack & BI",
    image: "/assets/target-live-preview.jpg",
    badge: "Proprietário / Enterprise",
    description:
      "Plataforma corporativa de Business Intelligence desenvolvida para fornecer aos gestores visibilidade instantânea sobre faturamento, ticket médio, taxa de giro de mesa e curva ABC de produtos (Pareto 80/20).",
    challenge:
      "Transformar centenas de lançamentos de vendas e comandas abertas em indicadores simples e imediatos para a tomada de decisão no caixa e na cozinha.",
    solution:
      "Arquitetura de agregação com gráficos interativos via Recharts, métricas consolidadas e auditoria de fechamento de contas por método de pagamento.",
    results: [
      "Acompanhamento de faturamento instantâneo (R$ 8.557,92)",
      "Curva ABC precisa separando 73 produtos líderes (Classe A)",
      "Redução no tempo de conferência e fechamento de caixa",
    ],
    techStack: ["React", "TypeScript", "Recharts", "Node.js", "Tailwind CSS", "REST API"],
    type: "interactive-live",
  },
  {
    id: "maria-ai",
    title: "MarIA — Agente Inteligente Financeiro & ERP",
    shortTitle: "MarIA Target AI",
    subtitle: "Assistente de IA financeira com Function Calling integrada a regras de negócio e conciliação.",
    category: "Proprietário / IA Corporativa",
    year: "2025—2026",
    role: "Criador & Desenvolvedor de IA",
    image: "/assets/messaging-preview.jpg",
    badge: "Proprietário / Enterprise",
    description:
      "Agente de IA financeira corporativa capaz de consultar saldos, realizar conciliações, responder dúvidas sobre regras fiscais e sugerir ações de caixa utilizando Tool Calling e APIs de modelos avançados.",
    challenge:
      "Conectar modelos de linguagem a bancos de dados e regras financeiras sem alucinações e com estrita observância das permissões do ERP.",
    solution:
      "Desenvolvimento de pipelines de Function Calling com DeepSeek API e Google AI Studio, aplicando validações estruturadas via schemas Zod e guardrails de segurança.",
    results: [
      "Consultas financeiras em linguagem natural para operadores",
      "Execução segura de funções via Tool Calling",
      "Zero alucinação em métricas contábeis auditadas",
    ],
    techStack: ["DeepSeek API", "Google AI Studio", "Groq", "Function Calling", "Node.js", "Zod"],
    type: "interactive-messaging",
  },
  {
    id: "target-client",
    title: "TargetClient — Central de Chamados & Acessos RBAC",
    shortTitle: "TargetClient",
    subtitle: "Esteira corporativa de tickets, acompanhamento de sprints e controle granular de permissões.",
    category: "Proprietário / Enterprise",
    year: "2025—2026",
    role: "Desenvolvedor Full-Stack",
    image: "/assets/target-live-preview.jpg",
    badge: "Proprietário / Enterprise",
    description:
      "Sistema corporativo de tickets e atendimento que organiza mais de 500 chamados técnicos entre times de Desenvolvimento, Suporte, Implantação e Qualidade, com matriz de permissões por departamento.",
    challenge:
      "Organizar a fila de chamados por urgência e garantir que cada departamento tenha acesso apenas às rotinas autorizadas.",
    solution:
      "Esteira visual dividida em estágios (Abertos, Em Andamento, Liberação, Validação, Concluído) com indicadores de prazo e painel de permissões por perfil.",
    results: [
      "Centralização de mais de 500 chamados ativos",
      "Matriz de controle de acessos para múltiplos departamentos",
      "Previsibilidade nas datas de liberação de versão",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "RBAC"],
    type: "interactive-tickets",
  },
  {
    id: "mensageria-hub",
    title: "Hub de Mensageria Multicanal & ERP TargetX",
    shortTitle: "Mensageria ERP",
    subtitle: "Gateway unificado com Evolution API, WhatsApp Oficial Meta, Resend e SMS Market.",
    category: "Proprietário / Automação",
    year: "2025—2026",
    role: "Engenharia de Integração",
    image: "/assets/messaging-preview.jpg",
    badge: "Proprietário / Enterprise",
    description:
      "Plataforma proprietária que centraliza o envio de mensagens para clientes a partir de eventos do ERP TargetX. Conecta instâncias da Evolution API, API Oficial do WhatsApp, e-mails via Resend e SMS via SMS Market.",
    challenge:
      "Gerenciar múltiplos canais com diferentes limites de taxa e formatos sem gerar mensagens duplicadas ou perder notificações.",
    solution:
      "Construção de filas de disparo com controle de status, webhooks de confirmação e sincronização direta com a base de clientes do ERP.",
    results: [
      "Integração de WhatsApp, E-mail e SMS em uma só interface",
      "Sincronização em tempo real com clientes do ERP",
      "Alta taxa de entrega com fallback automático",
    ],
    techStack: ["Evolution API", "WhatsApp Cloud API", "Resend", "SMS Market", "Node.js", "Webhooks"],
    type: "interactive-messaging",
  },
  {
    id: "vostro-store",
    title: "Vostro — Vitrine Digital & E-Commerce",
    shortTitle: "Vostro E-Commerce",
    subtitle: "Catálogo online e-commerce desenvolvido com design editorial limpo e foco em conversão.",
    category: "Proprietário / Produção",
    year: "2024—2025",
    role: "Desenvolvimento Front-End & UI",
    image: "/assets/vostro-preview.jpg",
    badge: "Em Produção (vostro.targetx.com.br)",
    description:
      "Plataforma e-commerce e vitrine virtual para a marca Vostro (vostro.targetx.com.br), criada para valorizar coleções de vestuário através de navegação fluida e estética moderna.",
    challenge:
      "Construir uma vitrine leve e responsiva com foco em navegação rápida e experiência de compra clara.",
    solution:
      "Layout minimalista inspirado em editoriais de moda, com catálogo dinâmico e integração com a infraestrutura de pedidos.",
    results: [
      "Projeto em produção em vostro.targetx.com.br",
      "Navegação mobile-first rápida",
      "Catálogo organizado por coleções e categorias",
    ],
    techStack: ["React", "JavaScript", "Tailwind CSS", "REST API", "UI Editorial"],
    type: "external-vostro",
    externalUrl: "https://vostro.targetx.com.br/",
  },
  {
    id: "delivery-targetx",
    title: "Delivery TargetX — Plataforma de Pedidos",
    shortTitle: "Delivery TargetX",
    subtitle: "Cardápio digital ágil e sistema de pedidos conectado ao fluxo de atendimento e PDV.",
    category: "Proprietário / Produção",
    year: "2024—2025",
    role: "Desenvolvedor Web",
    image: "/assets/target-live-preview.jpg",
    badge: "Em Produção (delivery.targetx.com.br)",
    description:
      "Plataforma web de pedidos e delivery rápido (delivery.targetx.com.br) conectada diretamente ao sistema de cozinha e caixa.",
    challenge:
      "Permitir pedidos rápidos sem atrito em horários de pico, com personalização de itens e carrinho dinâmico.",
    solution:
      "Interface leve com checkout direto e integração aos canais de expedição do restaurante.",
    results: [
      "Em operação em delivery.targetx.com.br",
      "Processo simplificado de montagem de pedidos",
      "Conexão direta com a cozinha",
    ],
    techStack: ["HTML5/CSS3", "JavaScript", "React", "REST API", "Integração PDV"],
    type: "external-delivery",
    externalUrl: "https://delivery.targetx.com.br",
  },
  {
    id: "hackathon-receita",
    title: "Inovação em Saúde — Hackathon Receita Federal",
    shortTitle: "Hackathon Receita",
    subtitle: "Conversão sustentável de componentes apreendidos em inaladores terapêuticos de baixo custo.",
    category: "Projeto Acadêmico & Social",
    year: "2025",
    role: "Pesquisa & Modelagem de Proposta",
    image: "/assets/hackathon-preview.jpg",
    badge: "Projeto Acadêmico Premiado",
    description:
      "Proposta premiada na maratona da Receita Federal propondo o reaproveitamento de componentes nobres de cigarros eletrônicos apreendidos (baterias recarregáveis e sensores) para montagem de inaladores terapêuticos para o SUS.",
    challenge:
      "Aliar destinação ecológica para apreensões a uma necessidade urgente de equipamentos respiratórios acessíveis.",
    solution:
      "Estudo detalhado de desmontagem, sanitização e projeto de carcaça modular para administração controlada de medicamentos.",
    results: [
      "Reconhecido pela originalidade e impacto social positivo",
      "Proposta de reaproveitamento de materiais nobres",
      "Projeto focado em saúde pública e sustentabilidade",
    ],
    techStack: ["Mecânica Industrial", "Análise de Materiais", "Modelagem 3D", "Inovação"],
    type: "hackathon",
  },
];

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeModalProject, setActiveModalProject] = useState<CarouselProject | null>(null);

  const currentProject = projects[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projetos" className="py-24 relative overflow-hidden bg-[var(--bg-page)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 border-b border-[var(--border-color)] pb-8">
          <div>
            <span className="font-mono-meta text-[11px] uppercase tracking-widest text-[var(--accent-terra)] flex items-center gap-2 mb-3 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              Projetos & Aplicações
            </span>
            <h2 className="font-serif-title text-4xl sm:text-6xl font-normal leading-[1.02] tracking-tight text-[var(--text-primary)]">
              Carrossel de <span className="italic text-[var(--accent-terra)]">projetos práticos.</span>
            </h2>
          </div>
          <p className="font-sans-body text-base text-[var(--text-muted)] max-w-md lg:pb-2">
            Navegue pelo carrossel para ler os detalhes de cada sistema. Clique no projeto em destaque para abrir a demonstração interativa ou visitar o link oficial.
          </p>
        </div>

        {/* Carousel Navigation Bar / Slide Strip */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar py-2">
            {projects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => setCurrentIndex(idx)}
                className={`px-5 py-2.5 rounded-full font-mono-meta text-[11px] uppercase tracking-widest whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center gap-2 border ${
                  idx === currentIndex
                    ? "bg-[var(--text-primary)] text-[var(--bg-page)] border-[var(--text-primary)] font-bold shadow-md scale-105"
                    : "bg-[var(--bg-card)] border-[var(--border-color)] text-[var(--text-secondary)] hover:bg-[var(--bg-surface)] hover:text-[var(--text-primary)]"
                }`}
              >
                <span className={idx === currentIndex ? "text-[var(--accent-moss)]" : ""}>0{idx + 1}</span>
                <span>{proj.shortTitle}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrev}
              aria-label="Projeto anterior"
              className="w-10 h-10 rounded-full border border-[var(--border-strong)] bg-[var(--bg-card)] hover:bg-[var(--bg-surface)] flex items-center justify-center text-[var(--text-primary)] transition-transform active:scale-90 cursor-pointer shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Próximo projeto"
              className="w-10 h-10 rounded-full border border-[var(--border-strong)] bg-[var(--bg-card)] hover:bg-[var(--bg-surface)] flex items-center justify-center text-[var(--text-primary)] transition-transform active:scale-90 cursor-pointer shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Highlighted Project Main Card (In Evidence) */}
        <div className="rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:border-[var(--border-strong)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
            {/* Project Media Preview (5 cols) */}
            <div className="lg:col-span-5 relative group">
              <div
                onClick={() => setActiveModalProject(currentProject)}
                className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-[var(--bg-surface)] border border-[var(--border-color)] shadow-md cursor-pointer group"
                data-cursor="ABRIR"
              >
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-card)] via-transparent to-transparent flex flex-col justify-between p-5 text-[var(--text-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1.5 rounded-lg bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-strong)] text-[10px] font-mono-meta uppercase tracking-widest font-bold shadow-sm">
                      {currentProject.badge}
                    </span>
                    <span className="w-9 h-9 rounded-full bg-[var(--bg-card)] border border-[var(--border-strong)] flex items-center justify-center shadow-md">
                      <Maximize2 className="w-4 h-4" />
                    </span>
                  </div>

                  <div className="flex items-center justify-between mt-auto bg-[var(--bg-card)]/90 backdrop-blur-md rounded-lg p-3 border border-[var(--border-strong)] shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span className="font-mono-meta text-[11px] font-bold uppercase tracking-widest">
                      Explorar demonstração
                    </span>
                    <span className="w-8 h-8 rounded-full bg-[var(--text-primary)] text-[var(--bg-page)] flex items-center justify-center shadow">
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project In-Depth Story & Highlights (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 font-mono-meta text-[11px] text-[var(--accent-terra)] font-bold uppercase tracking-widest mb-4">
                  <span>{currentProject.category}</span>
                  <span>•</span>
                  <span>{currentProject.year}</span>
                  <span>•</span>
                  <span>{currentProject.role}</span>
                </div>

                <h3 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.05] tracking-tight text-[var(--text-primary)] mb-4">
                  {currentProject.title}
                </h3>

                <p className="font-sans-body text-[15px] sm:text-base text-[var(--text-muted)] leading-relaxed mb-8 max-w-2xl">
                  {currentProject.description}
                </p>

                {/* Challenge & Solution 2-column cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
                    <h5 className="font-mono-meta text-[10px] font-bold text-[var(--accent-terra)] uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Layers className="w-3.5 h-3.5" /> O Desafio
                    </h5>
                    <p className="font-sans-body text-[13px] text-[var(--text-secondary)] leading-relaxed">
                      {currentProject.challenge}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
                    <h5 className="font-mono-meta text-[10px] font-bold text-[var(--accent-moss-dark)] uppercase tracking-widest mb-2 flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5" /> A Solução
                    </h5>
                    <p className="font-sans-body text-[13px] text-[var(--text-secondary)] leading-relaxed">
                      {currentProject.solution}
                    </p>
                  </div>
                </div>

                {/* Results checklist */}
                <div className="space-y-2.5 mb-8">
                  {currentProject.results.map((res, rIdx) => (
                    <div key={rIdx} className="flex items-center gap-3 font-sans-body text-sm font-medium text-[var(--text-primary)]">
                      <CheckCircle className="w-4 h-4 text-[var(--accent-moss-dark)] shrink-0" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action bar */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[var(--border-color)]">
                <div className="flex flex-wrap gap-2">
                  {currentProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded bg-[var(--bg-surface)] border border-[var(--border-color)] font-mono-meta text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setActiveModalProject(currentProject)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--text-primary)] hover:bg-[var(--accent-terra-dark)] text-[var(--bg-page)] font-display text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Entrar no Projeto</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  {currentProject.externalUrl && (
                    <a
                      href={currentProject.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full border border-[var(--border-strong)] font-display text-xs font-bold hover:bg-[var(--bg-surface)] text-[var(--text-primary)] transition-colors"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>Link Externo</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Modal Drawer when clicking to enter project */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[var(--bg-page)] border border-[var(--border-strong)] shadow-2xl p-6 sm:p-12 text-[var(--text-primary)] transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full border border-[var(--border-strong)] bg-[var(--bg-card)] hover:bg-[var(--bg-surface)] flex items-center justify-center transition-transform hover:scale-105 active:scale-95 cursor-pointer z-20 shadow-sm"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5 text-[var(--text-primary)]" />
            </button>

            {/* Modal Header */}
            <div className="mb-10">
              <div className="flex flex-wrap items-center gap-3 font-mono-meta text-[11px] text-[var(--accent-terra)] uppercase tracking-widest mb-4 font-bold">
                <span>{activeModalProject.category}</span>
                <span>•</span>
                <span>{activeModalProject.year}</span>
                <span>•</span>
                <span>{activeModalProject.role}</span>
              </div>
              <h2 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.02] tracking-tight mb-4">
                {activeModalProject.title}
              </h2>
              <p className="font-sans-body text-base sm:text-lg text-[var(--text-muted)] max-w-3xl leading-relaxed">
                {activeModalProject.subtitle}
              </p>
            </div>

            {/* Embedded Live Demonstration based on type */}
            <div className="mb-10 rounded-2xl overflow-hidden border border-[var(--border-color)] p-6 sm:p-8 bg-[var(--bg-surface)] shadow-inner">
              <div className="font-mono-meta text-[11px] uppercase tracking-widest text-[var(--accent-moss-dark)] font-bold mb-6 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Demonstração Interativa ao Vivo
              </div>

              {activeModalProject.type === "interactive-live" && <LiveTargetDashboard />}
              {activeModalProject.type === "interactive-tickets" && <LiveTicketSystem />}
              {(activeModalProject.type === "interactive-messaging" || activeModalProject.type === "ai-agent") && <MessagingFlow />}

              {activeModalProject.type === "external-vostro" && (
                <div className="text-center py-12 space-y-5 bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)]">
                  <p className="font-sans-body text-base text-[var(--text-secondary)]">
                    A vitrine digital Vostro está ativa e disponível publicamente.
                  </p>
                  <a
                    href="https://vostro.targetx.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[var(--text-primary)] text-[var(--bg-page)] font-display text-sm font-bold shadow-md hover:scale-105 transition-transform"
                  >
                    <span>Acessar vostro.targetx.com.br</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}

              {activeModalProject.type === "external-delivery" && (
                <div className="text-center py-12 space-y-5 bg-[var(--bg-card)] rounded-xl border border-[var(--border-color)]">
                  <p className="font-sans-body text-base text-[var(--text-secondary)]">
                    O aplicativo Delivery TargetX está em operação comercial.
                  </p>
                  <a
                    href="https://delivery.targetx.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[var(--text-primary)] text-[var(--bg-page)] font-display text-sm font-bold shadow-md hover:scale-105 transition-transform"
                  >
                    <span>Acessar delivery.targetx.com.br</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}

              {activeModalProject.type === "hackathon" && (
                <div className="space-y-6">
                  <div className="aspect-video w-full rounded-2xl overflow-hidden border border-[var(--border-color)] shadow-sm">
                    <img
                      src="/assets/hackathon-preview.jpg"
                      alt="Hackathon Receita Federal"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-sans-body text-base text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-card)] p-5 rounded-xl border border-[var(--border-color)]">
                    Projeto premiado na maratona nacional da Receita Federal pela sustentabilidade e conversão de componentes apreendidos em inaladores para atendimento de saúde pública.
                  </p>
                </div>
              )}
            </div>

            {/* Tech Stack and Close Action */}
            <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-[var(--border-color)]">
              <div className="flex flex-wrap gap-2.5">
                {activeModalProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-md border border-[var(--border-color)] bg-[var(--bg-surface)] font-mono-meta text-[10px] font-bold uppercase tracking-widest text-[var(--text-secondary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="px-8 py-3.5 rounded-full border border-[var(--border-strong)] hover:bg-[var(--bg-surface)] font-display text-sm font-bold transition-colors cursor-pointer text-[var(--text-primary)]"
              >
                Voltar ao Carrossel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
