import React, { useState } from "react";
import {
  LifeBuoy,
  KeyRound,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  AlertTriangle,
  FolderLock,
  Layers,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

interface Ticket {
  id: number;
  title: string;
  client: string;
  team: string;
  status: string;
  deadline: string;
  delay: boolean;
}

const initialTickets: Ticket[] = [
  {
    id: 21,
    title: "Baixa de contas a pagar com a opção de informar cheque",
    client: "JD FERRAMENTAS",
    team: "Time Ana",
    status: "LIBERAÇÃO",
    deadline: "12/12/2025",
    delay: true,
  },
  {
    id: 67,
    title: "Nova busca pela tabela de preço no PDV",
    client: "NJGD ASSIS",
    team: "Time David",
    status: "LIBERAÇÃO",
    deadline: "16/12/2025",
    delay: true,
  },
  {
    id: 93,
    title: "Erro na solicitação de impressão de nota fiscal",
    client: "SABOR CASEIRO ASSIS",
    team: "Time David",
    status: "LIBERAÇÃO",
    deadline: "19/12/2025",
    delay: true,
  },
  {
    id: 138,
    title: "Relatório de indicadores de vendas diárias",
    client: "GRAZZIANE",
    team: "Time David",
    status: "LIBERAÇÃO",
    deadline: "05/01/2026",
    delay: false,
  },
  {
    id: 161,
    title: "Módulo Tintométrico e formulação de cores",
    client: "HIDROTINTAS TARUMÃ",
    team: "Time David",
    status: "LIBERAÇÃO",
    deadline: "07/01/2026",
    delay: false,
  },
];

const departments = [
  { name: "ADMINISTRAÇÃO", screens: 22, status: "Ativo" },
  { name: "DESENVOLVIMENTO", screens: 8, status: "Ativo" },
  { name: "QUALIDADE (QA)", screens: 21, status: "Ativo" },
  { name: "SUPORTE TÉCNICO", screens: 14, status: "Ativo" },
  { name: "IMPLANTAÇÃO", screens: 0, status: "Configurar" },
  { name: "DEMONSTRAÇÃO", screens: 0, status: "Configurar" },
];

export default function LiveTicketSystem() {
  const [activeTab, setActiveTab] = useState<"chamados" | "permissoes">("chamados");
  const [selectedDept, setSelectedDept] = useState("TODOS");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTickets = initialTickets.filter(
    (t) =>
      t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      t.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="rounded-[32px] border border-black/15 dark:border-white/15 bg-white/95 dark:bg-[#121722]/95 backdrop-blur-xl p-5 sm:p-8 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/10 dark:border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#2563eb] text-white flex items-center justify-center font-bold text-lg shadow-md">
            TC
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display font-bold text-lg sm:text-xl text-current tracking-tight">
                TargetClient · Central de Chamados & Acesso
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 font-mono-meta text-[10px] font-bold">
                ERP TARGETX
              </span>
            </div>
            <p className="font-mono-meta text-xs text-current/60">
              Gestão de sprints, tickets de suporte e controle de permissões por departamento
            </p>
          </div>
        </div>

        {/* Tab switch */}
        <div className="flex items-center gap-1.5 p-1 bg-black/[0.05] dark:bg-white/[0.08] rounded-xl border border-black/5 dark:border-white/10 font-mono-meta text-xs self-start sm:self-auto">
          <button
            onClick={() => setActiveTab("chamados")}
            className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
              activeTab === "chamados"
                ? "bg-[#1f1a14] dark:bg-[#f5efe6] text-[#f5efe6] dark:text-[#1f1a14] shadow-sm"
                : "text-current/60 hover:text-current"
            }`}
          >
            <LifeBuoy className="w-3.5 h-3.5" />
            <span>Chamados</span>
          </button>
          <button
            onClick={() => setActiveTab("permissoes")}
            className={`px-3 py-1.5 rounded-lg font-bold flex items-center gap-1.5 transition-all ${
              activeTab === "permissoes"
                ? "bg-[#1f1a14] dark:bg-[#f5efe6] text-[#f5efe6] dark:text-[#1f1a14] shadow-sm"
                : "text-current/60 hover:text-current"
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Permissões</span>
          </button>
        </div>
      </div>

      {/* Ticket Stage Pipeline Chips */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 my-6">
        <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex flex-col justify-between">
          <span className="font-mono-meta text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400">
            Abertos
          </span>
          <p className="font-serif-title text-2xl sm:text-3xl font-bold text-current mt-1">
            510 <span className="text-xs font-mono-meta text-current/50 font-normal">(49 subs)</span>
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex flex-col justify-between">
          <span className="font-mono-meta text-[10px] uppercase font-bold text-amber-600 dark:text-amber-400">
            Em Andamento
          </span>
          <p className="font-serif-title text-2xl sm:text-3xl font-bold text-current mt-1">
            62 <span className="text-xs font-mono-meta text-current/50 font-normal">(2 subs)</span>
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex flex-col justify-between">
          <span className="font-mono-meta text-[10px] uppercase font-bold text-blue-600 dark:text-blue-400">
            Liberação
          </span>
          <p className="font-serif-title text-2xl sm:text-3xl font-bold text-current mt-1">
            78 <span className="text-xs font-mono-meta text-current/50 font-normal">(16 subs)</span>
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex flex-col justify-between">
          <span className="font-mono-meta text-[10px] uppercase font-bold text-purple-600 dark:text-purple-400">
            Validação
          </span>
          <p className="font-serif-title text-2xl sm:text-3xl font-bold text-current mt-1">
            116 <span className="text-xs font-mono-meta text-current/50 font-normal">(10 subs)</span>
          </p>
        </div>

        <div className="col-span-2 sm:col-span-1 p-3.5 rounded-2xl bg-slate-500/10 border border-slate-500/20 flex flex-col justify-between">
          <span className="font-mono-meta text-[10px] uppercase font-bold text-slate-600 dark:text-slate-400">
            Concluído
          </span>
          <p className="font-serif-title text-2xl sm:text-3xl font-bold text-current mt-1">
            65
          </p>
        </div>
      </div>

      {activeTab === "chamados" ? (
        <div>
          {/* Search bar & filter pills */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-current/40" />
              <input
                type="text"
                placeholder="Buscar chamado, ID ou cliente..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] border border-black/10 dark:border-white/10 text-xs font-sans placeholder:text-current/40 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="text-xs font-mono-meta text-current/60">
              Exibindo <strong>{filteredTickets.length}</strong> chamados em acompanhamento
            </div>
          </div>

          {/* Tickets Table */}
          <div className="overflow-x-auto rounded-2xl border border-black/10 dark:border-white/10">
            <table className="w-full text-xs text-left">
              <thead className="bg-black/[0.03] dark:bg-white/[0.04] font-mono-meta text-[10px] uppercase text-current/60 border-b border-black/10 dark:border-white/10">
                <tr>
                  <th className="p-3 w-14">ID</th>
                  <th className="p-3">Chamado & Escopo</th>
                  <th className="p-3">Cliente</th>
                  <th className="p-3">Time</th>
                  <th className="p-3 text-center">Status</th>
                  <th className="p-3 text-right">Prazo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 dark:divide-white/5 font-sans">
                {filteredTickets.map((ticket) => (
                  <tr key={ticket.id} className="hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
                    <td className="p-3 font-mono-meta font-bold text-current/70">#{ticket.id}</td>
                    <td className="p-3 font-semibold text-current max-w-[280px]">
                      <div className="flex items-center gap-2">
                        <span>{ticket.title}</span>
                        {ticket.delay && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-rose-500/15 text-rose-600 dark:text-rose-400 text-[10px] font-mono-meta font-bold">
                            <AlertTriangle className="w-3 h-3" /> EM ATRASO
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-3 font-mono-meta text-current/80">{ticket.client}</td>
                    <td className="p-3">
                      <span className="px-2 py-1 rounded-md bg-black/5 dark:bg-white/10 text-[11px] font-mono-meta text-current/70">
                        {ticket.team}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <span className="px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 font-mono-meta text-[10px] font-bold">
                        {ticket.status}
                      </span>
                    </td>
                    <td className="p-3 text-right font-mono-meta text-current/70">{ticket.deadline}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Permissões por Departamento View */
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-display font-bold text-sm text-current">
              Matriz de Permissões e Acessos por Departamento
            </h4>
            <span className="text-xs font-mono-meta text-current/60">
              Controle Granular RBAC
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {departments.map((dept) => (
              <div
                key={dept.name}
                className="p-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/10 flex items-center justify-between"
              >
                <div>
                  <p className="font-display font-bold text-xs text-current">{dept.name}</p>
                  <span className="font-mono-meta text-[11px] text-blue-600 dark:text-blue-400 font-semibold">
                    {dept.screens} telas liberadas
                  </span>
                </div>
                <button
                  type="button"
                  className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-mono-meta text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors"
                >
                  <KeyRound className="w-3 h-3" />
                  <span>Permissões</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
