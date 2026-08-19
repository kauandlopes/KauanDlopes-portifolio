import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  DollarSign,
  ShoppingCart,
  BarChart3,
  Users,
  Clock,
  Star,
  ArrowUpRight,
  Sparkles,
  Layers,
  ChevronRight,
} from "lucide-react";

// Real hourly dataset from the user's provided Target Live dashboard
const salesData = [
  { time: "08:00", sales: 21.5, ticket: 21.5, orders: 1 },
  { time: "09:00", sales: 185.0, ticket: 92.5, orders: 2 },
  { time: "10:00", sales: 94.0, ticket: 31.3, orders: 3 },
  { time: "11:00", sales: 620.0, ticket: 56.3, orders: 11 },
  { time: "12:00", sales: 1420.0, ticket: 64.5, orders: 22 },
  { time: "13:00", sales: 1680.0, ticket: 70.0, orders: 24 },
  { time: "14:00", sales: 540.0, ticket: 45.0, orders: 12 },
  { time: "15:00", sales: 320.0, ticket: 40.0, orders: 8 },
  { time: "16:00", sales: 290.0, ticket: 36.2, orders: 8 },
  { time: "17:00", sales: 480.0, ticket: 48.0, orders: 10 },
  { time: "18:00", sales: 950.0, ticket: 59.3, orders: 16 },
  { time: "19:00", sales: 1380.0, ticket: 69.0, orders: 20 },
  { time: "20:00", sales: 557.42, ticket: 39.8, orders: 14 },
];

const rankingAttendants = [
  { id: 1, name: "TABLET AUTOATENDIMENTO", pa: 3.0, ticket: "R$ 65,67", total: "R$ 6.173,00", share: "72%" },
  { id: 2, name: "ROBERTA SOUZA", pa: 1.8, ticket: "R$ 21,48", total: "R$ 859,12", share: "10%" },
  { id: 3, name: "MICHELI CARDOSO", pa: 1.8, ticket: "R$ 22,74", total: "R$ 523,10", share: "6%" },
  { id: 4, name: "KEVIN EDUARDO", pa: 1.9, ticket: "R$ 26,18", total: "R$ 209,40", share: "3%" },
  { id: 5, name: "MAIARA CRISTINA", pa: 1.6, ticket: "R$ 18,61", total: "R$ 186,10", share: "2%" },
];

const openOrders = [
  { id: "#3535", client: "Matheus Molina", value: "R$ 72,00", time: "9h 06min", alert: true },
  { id: "#9557", client: "Maple Bear Escola", value: "R$ 24,90", time: "1d 11h", alert: false },
  { id: "#9508", client: "Food Restaurante", value: "R$ 425,90", time: "3d 10h", alert: true },
  { id: "#0003", client: "Edson Assis", value: "R$ 37,00", time: "7d 06h", alert: false },
];

export default function LiveTargetDashboard() {
  const [activeTab, setActiveTab] = useState<"faturamento" | "ticket">("faturamento");
  const [period, setPeriod] = useState<"hoje" | "7d" | "mes">("hoje");
  const [abcFilter, setAbcFilter] = useState<"faturamento" | "volume">("faturamento");

  return (
    <div className="relative rounded-[32px] border border-black/15 dark:border-white/15 bg-[#ffffff]/90 dark:bg-[#121722]/95 backdrop-blur-xl p-5 sm:p-8 shadow-2xl overflow-hidden">
      {/* Top Header of the BI Dashboard */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-black/10 dark:border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-500/20">
            TL
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display font-bold text-lg sm:text-xl text-current tracking-tight">
                Target Live · Business Intelligence
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-mono-meta text-[10px] font-bold">
                ● LIVE SYNC
              </span>
            </div>
            <p className="font-mono-meta text-xs text-current/60">
              Análise operacional e fechamento de vendas em tempo real
            </p>
          </div>
        </div>

        {/* Date filter pill */}
        <div className="flex items-center gap-1.5 p-1 bg-black/[0.05] dark:bg-white/[0.08] rounded-xl border border-black/5 dark:border-white/10 self-start md:self-auto font-mono-meta text-xs">
          <button
            onClick={() => setPeriod("hoje")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              period === "hoje"
                ? "bg-[#1f1a14] dark:bg-[#f5efe6] text-[#f5efe6] dark:text-[#1f1a14] shadow-sm"
                : "text-current/60 hover:text-current"
            }`}
          >
            Hoje
          </button>
          <button
            onClick={() => setPeriod("7d")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              period === "7d"
                ? "bg-[#1f1a14] dark:bg-[#f5efe6] text-[#f5efe6] dark:text-[#1f1a14] shadow-sm"
                : "text-current/60 hover:text-current"
            }`}
          >
            7 Dias
          </button>
          <button
            onClick={() => setPeriod("mes")}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              period === "mes"
                ? "bg-[#1f1a14] dark:bg-[#f5efe6] text-[#f5efe6] dark:text-[#1f1a14] shadow-sm"
                : "text-current/60 hover:text-current"
            }`}
          >
            Mês
          </button>
        </div>
      </div>

      {/* KPI 4-Card Summary Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        {/* Card 1: Faturamento */}
        <div className="p-4 sm:p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/5 dark:border-white/10 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-mono-meta text-current/60 mb-2">
            <span>FATURAMENTO TOTAL</span>
            <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-600 flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <p className="font-serif-title text-3xl font-semibold tracking-tight text-current">
            R$ 8.557,92
          </p>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+12.4%</span>
            <span className="text-current/50 font-normal">vs período anterior</span>
          </div>
        </div>

        {/* Card 2: Ticket Médio */}
        <div className="p-4 sm:p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/5 dark:border-white/10 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-mono-meta text-current/60 mb-2">
            <span>TICKET MÉDIO</span>
            <div className="w-7 h-7 rounded-lg bg-blue-500/15 text-blue-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <p className="font-serif-title text-3xl font-semibold tracking-tight text-current">
            R$ 56,67
          </p>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+3.9%</span>
            <span className="text-current/50 font-normal">por pedido</span>
          </div>
        </div>

        {/* Card 3: Comandas Fechadas */}
        <div className="p-4 sm:p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/5 dark:border-white/10 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-mono-meta text-current/60 mb-2">
            <span>COMANDAS FECHADAS</span>
            <div className="w-7 h-7 rounded-lg bg-purple-500/15 text-purple-600 flex items-center justify-center">
              <ShoppingCart className="w-4 h-4" />
            </div>
          </div>
          <p className="font-serif-title text-3xl font-semibold tracking-tight text-current">
            151
          </p>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Fluxo contínuo</span>
          </div>
        </div>

        {/* Card 4: Giro de Mesa */}
        <div className="p-4 sm:p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.04] border border-black/5 dark:border-white/10 flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-mono-meta text-current/60 mb-2">
            <span>GIRO DE MESA</span>
            <div className="w-7 h-7 rounded-lg bg-amber-500/15 text-amber-600 flex items-center justify-center">
              <BarChart3 className="w-4 h-4" />
            </div>
          </div>
          <p className="font-serif-title text-3xl font-semibold tracking-tight text-current">
            3.7 <span className="text-sm font-sans font-normal text-current/50">giros/dia</span>
          </p>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Excelente rotação</span>
          </div>
        </div>
      </div>

      {/* Main Charts & Analytics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left 7 cols: Interactive Hourly Area Chart */}
        <div className="lg:col-span-7 p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/10 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="font-display font-bold text-sm tracking-tight text-current">
                {activeTab === "faturamento" ? "Faturamento Bruto por Horário" : "Ticket Médio por Horário"}
              </h4>
              <span className="font-mono-meta text-[11px] text-current/60">
                Picos de vendas: 12h00 às 13h30 e 19h00 às 20h00
              </span>
            </div>
            <div className="flex items-center gap-1 font-mono-meta text-xs">
              <button
                onClick={() => setActiveTab("faturamento")}
                className={`px-2.5 py-1 rounded-lg transition-colors font-bold ${
                  activeTab === "faturamento"
                    ? "bg-blue-600 text-white"
                    : "bg-black/5 dark:bg-white/10 text-current/70"
                }`}
              >
                Faturamento
              </button>
              <button
                onClick={() => setActiveTab("ticket")}
                className={`px-2.5 py-1 rounded-lg transition-colors font-bold ${
                  activeTab === "ticket"
                    ? "bg-blue-600 text-white"
                    : "bg-black/5 dark:bg-white/10 text-current/70"
                }`}
              >
                Ticket
              </button>
            </div>
          </div>

          {/* Recharts Area */}
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="ticketGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#b85434" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#b85434" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.15} vertical={false} />
                <XAxis dataKey="time" stroke="#888888" fontSize={10} tickLine={false} />
                <YAxis
                  stroke="#888888"
                  fontSize={10}
                  tickLine={false}
                  tickFormatter={(val) => `R$${val}`}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="p-3 rounded-xl bg-[#1f1a14] dark:bg-[#f5efe6] text-[#f5efe6] dark:text-[#1f1a14] shadow-xl text-xs font-mono-meta">
                          <p className="font-bold border-b border-white/20 dark:border-black/20 pb-1 mb-1">
                            {data.time}
                          </p>
                          <p className="text-blue-400 dark:text-blue-600">
                            Faturamento: R$ {data.sales.toFixed(2)}
                          </p>
                          <p className="text-[#e07452] dark:text-[#b85434]">
                            Ticket: R$ {data.ticket.toFixed(2)}
                          </p>
                          <p className="text-emerald-400 dark:text-emerald-600">
                            Comandas: {data.orders}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area
                  type="monotone"
                  dataKey={activeTab === "faturamento" ? "sales" : "ticket"}
                  stroke={activeTab === "faturamento" ? "#2563eb" : "#b85434"}
                  strokeWidth={3}
                  fill={activeTab === "faturamento" ? "url(#salesGrad)" : "url(#ticketGrad)"}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right 5 cols: Curva ABC Concentration Breakdown */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-display font-bold text-sm tracking-tight text-current">
                Curva ABC de Produtos
              </h4>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-600 font-mono-meta text-[10px] font-bold">
                PARETO 80/20
              </span>
            </div>
            <p className="font-mono-meta text-[11px] text-current/60 mb-4">
              Concentração de receita por sortimento de cardápio
            </p>

            <div className="space-y-3">
              {/* Classe A */}
              <div className="p-3 rounded-xl bg-white dark:bg-[#1a202c] border border-black/5 dark:border-white/10 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white font-bold text-sm flex items-center justify-center shadow-sm">
                    A
                  </div>
                  <div>
                    <p className="font-display font-bold text-xs text-current">73 Produtos Líderes</p>
                    <p className="font-mono-meta text-[10px] text-current/60">78.6% do Faturamento Total</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-display font-bold text-sm text-emerald-600 dark:text-emerald-400">
                    R$ 6.725,13
                  </p>
                  <span className="font-mono-meta text-[10px] text-current/50">Alta demanda</span>
                </div>
              </div>

              {/* Classe B */}
              <div className="p-3 rounded-xl bg-white dark:bg-[#1a202c] border border-black/5 dark:border-white/10 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500 text-white font-bold text-sm flex items-center justify-center shadow-sm">
                    B
                  </div>
                  <div>
                    <p className="font-display font-bold text-xs text-current">47 Produtos Moderados</p>
                    <p className="font-mono-meta text-[10px] text-current/60">16.3% do Faturamento Total</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-display font-bold text-sm text-amber-600 dark:text-amber-400">
                    R$ 1.392,95
                  </p>
                  <span className="font-mono-meta text-[10px] text-current/50">Giro médio</span>
                </div>
              </div>

              {/* Classe C */}
              <div className="p-3 rounded-xl bg-white dark:bg-[#1a202c] border border-black/5 dark:border-white/10 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-rose-500 text-white font-bold text-sm flex items-center justify-center shadow-sm">
                    C
                  </div>
                  <div>
                    <p className="font-display font-bold text-xs text-current">36 Produtos de Cauda</p>
                    <p className="font-mono-meta text-[10px] text-current/60">5.1% do Faturamento Total</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-display font-bold text-sm text-rose-600 dark:text-rose-400">
                    R$ 439,84
                  </p>
                  <span className="font-mono-meta text-[10px] text-current/50">Oportunidade</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs font-mono-meta text-current/60">
            <span>Total auditado: 156 itens</span>
            <span className="text-blue-600 dark:text-blue-400 font-bold">Relatório Gerencial ↗</span>
          </div>
        </div>
      </div>

      {/* Bottom Grid: Ranking Atendentes & Open Orders Tracker */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Attendants Ranking Table (7 cols) */}
        <div className="lg:col-span-7 p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/10">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-display font-bold text-sm tracking-tight text-current flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600" />
              Ranking de Atendentes & Produtividade
            </h4>
            <span className="font-mono-meta text-xs text-current/60">5 operadores</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="font-mono-meta text-[10px] text-current/50 uppercase border-b border-black/10 dark:border-white/10 pb-2">
                  <th className="pb-2">Vendedor</th>
                  <th className="pb-2 text-right">PA</th>
                  <th className="pb-2 text-right">Ticket</th>
                  <th className="pb-2 text-right">Total Faturado</th>
                  <th className="pb-2 text-right">Impacto</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5 dark:divide-white/5">
                {rankingAttendants.map((attendant) => (
                  <tr key={attendant.id} className="hover:bg-black/[0.02] dark:hover:bg-white/[0.02] transition-colors">
                    <td className="py-2.5 font-bold flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-black/5 dark:bg-white/10 text-[10px] flex items-center justify-center font-mono-meta">
                        {attendant.id}
                      </span>
                      <span className="truncate max-w-[150px]">{attendant.name}</span>
                    </td>
                    <td className="py-2.5 text-right font-mono-meta">{attendant.pa}</td>
                    <td className="py-2.5 text-right font-mono-meta text-current/70">{attendant.ticket}</td>
                    <td className="py-2.5 text-right font-mono-meta font-bold text-blue-600 dark:text-blue-400">
                      {attendant.total}
                    </td>
                    <td className="py-2.5 text-right font-mono-meta text-emerald-600 dark:text-emerald-400">
                      {attendant.share}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Live Open Orders Tracker (5 cols) */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-display font-bold text-sm tracking-tight text-current flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-600" />
                Comandas Abertas em Tempo Real
              </h4>
              <span className="px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-600 font-mono-meta text-[10px] font-bold">
                12 Abertas
              </span>
            </div>

            <div className="space-y-2.5">
              {openOrders.map((order) => (
                <div
                  key={order.id}
                  className="p-2.5 rounded-xl bg-white dark:bg-[#1a202c] border border-black/5 dark:border-white/10 flex items-center justify-between text-xs"
                >
                  <div>
                    <span className="font-mono-meta font-bold text-current">{order.id}</span>
                    <p className="text-[11px] text-current/70 truncate max-w-[130px]">{order.client}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono-meta font-bold text-current">{order.value}</p>
                    <span
                      className={`font-mono-meta text-[10px] px-1.5 py-0.5 rounded ${
                        order.alert
                          ? "bg-rose-500/15 text-rose-600 dark:text-rose-400"
                          : "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400"
                      }`}
                    >
                      {order.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-black/5 dark:border-white/10 flex items-center justify-between text-xs font-mono-meta">
            <span className="text-current/60">Total em aberto: R$ 72,00</span>
            <span className="text-purple-600 dark:text-purple-400 font-bold">Abrir Comandas ↗</span>
          </div>
        </div>
      </div>
    </div>
  );
}
