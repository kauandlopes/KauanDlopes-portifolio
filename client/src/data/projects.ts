export type ProjectDemoType =
  | "interactive-live"
  | "interactive-tickets"
  | "interactive-messaging"
  | "external"
  | "hackathon";

export interface ProjectData {
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
  demoType: ProjectDemoType;
  liveUrl?: string;
  githubUrl?: string;
}

const getAsset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

export const projects: ProjectData[] = [
  {
    id: "target-live",
    title: "Target Live — Business Intelligence em Tempo Real",
    shortTitle: "Target Live BI",
    subtitle: "Dashboard analítico conectado a pontos de venda com faturamento, giro de mesa e curva ABC.",
    category: "Proprietário / Enterprise",
    year: "2025—2026",
    role: "Full-Stack & BI Developer",
    image: getAsset("assets/target-live-preview.jpg"),
    badge: "Proprietário",
    description:
      "Plataforma corporativa de Business Intelligence conectada aos pontos de venda e fechamentos de contas, com métricas instantâneas de faturamento, ticket médio, giro de mesa e curva ABC de produtos (Pareto 80/20).",
    challenge:
      "Transformar centenas de lançamentos de vendas e comandas abertas em indicadores simples e imediatos para decisões no caixa e na cozinha.",
    solution:
      "Arquitetura de agregação em tempo real com gráficos interativos, métricas consolidadas e auditoria de fechamento por método de pagamento.",
    results: [
      "Faturamento em tempo real (R$ 8.557,92 no dia)",
      "Curva ABC separando 73 produtos líderes (Classe A)",
      "Redução de 40% no tempo de auditoria de fechamento",
    ],
    techStack: ["React", "TypeScript", "Node.js", "Recharts", "Tailwind CSS", "REST API", "PostgreSQL"],
    demoType: "interactive-live",
  },
  {
    id: "maria-ai",
    title: "MarIA — Agente Inteligente Financeiro & ERP",
    shortTitle: "MarIA Target AI",
    subtitle: "Assistente de IA financeira com Function Calling integrada a regras de negócio e conciliação.",
    category: "Proprietário / IA Corporativa",
    year: "2025—2026",
    role: "Criador & Desenvolvedor de IA",
    image: getAsset("assets/messaging-preview.jpg"),
    badge: "Proprietário",
    description:
      "Agente de IA financeira corporativa capaz de consultar saldos, realizar conciliações, responder dúvidas fiscais e sugerir ações de caixa via Tool Calling e APIs de modelos avançados.",
    challenge:
      "Conectar modelos de linguagem a bancos de dados e regras financeiras sem alucinações e com estrita observância das permissões do ERP.",
    solution:
      "Pipelines de Function Calling com DeepSeek API e Google AI Studio, validações estruturadas via Zod e guardrails de segurança.",
    results: [
      "Consultas financeiras em linguagem natural para operadores",
      "Execução segura de funções via Tool Calling",
      "Zero alucinação em métricas contábeis auditadas",
    ],
    techStack: ["DeepSeek", "Google AI Studio", "Groq", "Function Calling", "Node.js", "Zod"],
    demoType: "interactive-messaging",
  },
  {
    id: "target-client",
    title: "TargetClient — Central de Chamados & Acessos RBAC",
    shortTitle: "TargetClient",
    subtitle: "Esteira corporativa de tickets, acompanhamento de sprints e controle granular de permissões.",
    category: "Proprietário / Enterprise",
    year: "2025—2026",
    role: "Full-Stack Developer",
    image: getAsset("assets/target-live-preview.jpg"),
    badge: "Proprietário",
    description:
      "Sistema de tickets e atendimento técnico corporativo que organiza mais de 500 chamados entre times de Desenvolvimento, Suporte, Implantação e Qualidade, com matriz de permissões por departamento.",
    challenge:
      "Organizar a fila de chamados por urgência e garantir que cada departamento tenha acesso apenas às rotinas autorizadas.",
    solution:
      "Esteira visual dividida em estágios (Abertos, Em Andamento, Liberação, Validação, Concluído) com alertas de prazo e painel de permissões por perfil.",
    results: [
      "Centralização de mais de 500 chamados ativos",
      "Matriz de controle de acessos para 6 departamentos",
      "Maior previsibilidade nas datas de liberação de versão",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "RBAC"],
    demoType: "interactive-tickets",
  },
  {
    id: "mensageria-hub",
    title: "Hub de Mensageria Multicanal & ERP TargetX",
    shortTitle: "Mensageria ERP",
    subtitle: "Gateway unificado com Evolution API, WhatsApp Oficial, Resend e SMS Market.",
    category: "Proprietário / Automação",
    year: "2025—2026",
    role: "Integration Engineer & Backend",
    image: getAsset("assets/messaging-preview.jpg"),
    badge: "Proprietário",
    description:
      "Plataforma que centraliza o disparo de mensagens a clientes a partir de eventos do ERP TargetX: WhatsApp via Evolution API e API Oficial, e-mails via Resend e SMS via SMS Market.",
    challenge:
      "Gerenciar múltiplos canais com diferentes limites de taxa e formatos sem duplicar disparos ou perder notificações críticas.",
    solution:
      "Gateway unificado de webhooks e filas de disparo que normaliza mensagens e registra logs de entrega em tempo real.",
    results: [
      "Integração de WhatsApp, e-mail e SMS numa só interface",
      "Sincronização automática com a base de clientes do ERP",
      "Taxa de entrega superior a 98% com fallback inteligente",
    ],
    techStack: ["Evolution API", "WhatsApp", "Resend", "SMS Gateway", "Node.js", "Webhooks", "ERP TargetX"],
    demoType: "interactive-messaging",
  },
  {
    id: "vostro-store",
    title: "Vostro — Vitrine Digital & E-Commerce",
    shortTitle: "Vostro E-Commerce",
    subtitle: "Catálogo online curado com design editorial, navegação fluida e foco em conversão.",
    category: "E-Commerce / Front-End",
    year: "2024—2025",
    role: "UI/UX & Web Developer",
    image: getAsset("assets/vostro-preview.jpg"),
    badge: "Em Produção",
    description:
      "Plataforma e-commerce e vitrine virtual para a marca Vostro (vostro.targetx.com.br), valorizando coleções de vestuário através de navegação fluida e tipografia clássica.",
    challenge:
      "Construir uma vitrine digital sofisticada e rápida sem a sobrecarga visual dos e-commerces genéricos.",
    solution:
      "Layout minimalista inspirado em editoriais de moda, com catálogo dinâmico e integração à infraestrutura de pedidos TargetX.",
    results: [
      "Em produção em vostro.targetx.com.br",
      "Navegação mobile-first de alto desempenho",
      "Fluxo de compra organizado por coleções",
    ],
    techStack: ["React", "JavaScript", "Tailwind CSS", "REST API"],
    demoType: "external",
    liveUrl: "https://vostro.targetx.com.br/",
  },
  {
    id: "delivery-targetx",
    title: "Delivery TargetX — Plataforma de Pedidos",
    shortTitle: "Delivery TargetX",
    subtitle: "Cardápio digital ágil conectado ao fluxo de cozinha, caixa e despacho.",
    category: "Food Tech / Delivery",
    year: "2024—2025",
    role: "Web Developer",
    image: getAsset("assets/target-live-preview.jpg"),
    badge: "Em Produção",
    description:
      "Plataforma web de pedidos e delivery rápido (delivery.targetx.com.br) conectada diretamente ao sistema de cozinha e PDV, com personalização de pedidos e acompanhamento em tempo real.",
    challenge:
      "Garantir estabilidade e velocidade em horários de pico sem travar a interface durante a montagem dos pedidos.",
    solution:
      "Interface leve e responsiva com carrinho dinâmico, checkout simplificado e integração direta ao fluxo de comandas.",
    results: [
      "Em operação em delivery.targetx.com.br",
      "Redução no tempo de montagem de pedidos",
      "Conexão direta com cozinha e despacho",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "React", "REST API", "Integração PDV"],
    demoType: "external",
    liveUrl: "https://delivery.targetx.com.br",
  },
  {
    id: "delphi-tunnel",
    title: "Gerenciador de Túnel SSH & Proxy (Delphi / Pascal)",
    shortTitle: "Túnel Delphi",
    subtitle: "Gerenciamento de conexões, túneis SSH e rotas de comunicação em Object Pascal — open source.",
    category: "Open Source / Desktop",
    year: "2024—2025",
    role: "Desenvolvedor Delphi (Autor)",
    image: getAsset("assets/target-live-preview.jpg"),
    badge: "Open Source",
    description:
      "Aplicação desktop em Delphi para criação, escuta e gerenciamento de túneis SSH, proxies e rotas seguras, com reconexão automática e controle direto de portas.",
    challenge:
      "Manter conexões de túnel estáveis em redes corporativas sujeitas a oscilações, sem queda de serviço.",
    solution:
      "Arquitetura multithread em Object Pascal com tratamento de eventos Indy Sockets e logs de pacotes em tempo real.",
    results: [
      "Código-fonte aberto e publicado no GitHub",
      "Gerenciamento simples de portas e pontes de conexão",
      "Reconexão automática transparente",
    ],
    techStack: ["Delphi", "Object Pascal", "SSH", "Sockets", "WinAPI", "Open Source"],
    demoType: "external",
    githubUrl: "https://github.com/kauandlopes",
  },
  {
    id: "hackathon-receita",
    title: "Inovação em Saúde — Hackathon Receita Federal",
    shortTitle: "Hackathon Receita",
    subtitle: "Conversão sustentável de cigarros eletrônicos apreendidos em inaladores terapêuticos.",
    category: "Inovação Social & Saúde Pública",
    year: "2025",
    role: "Pesquisa, Engenharia & Proposta",
    image: getAsset("assets/hackathon-preview.jpg"),
    badge: "Premiado",
    description:
      "Projeto premiado na maratona da Receita Federal propondo a descaracterização e reaproveitamento de componentes de cigarros eletrônicos apreendidos (baterias, sensores e circuitos) para inaladores terapêuticos de baixo custo voltados ao SUS.",
    challenge:
      "Resolver o descarte ambiental perigoso de vapes apreendidos e a carência de dispositivos respiratórios acessíveis na rede pública.",
    solution:
      "Estudo de desmontagem, sanitização, reaproveitamento de baterias de lítio e projeto modular de carcaça médica reciclável.",
    results: [
      "Reconhecimento oficial por originalidade e impacto social",
      "Plano de desvio de lixo eletrônico dos aterros",
      "Proposta de economia de custos para o sistema de saúde",
    ],
    techStack: ["Engenharia Mecânica", "Análise de Materiais", "Modelagem 3D", "Inovação em Saúde"],
    demoType: "hackathon",
  },
];
