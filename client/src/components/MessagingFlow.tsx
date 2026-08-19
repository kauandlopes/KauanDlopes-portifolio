import React, { useState } from "react";
import {
  MessageSquare,
  Mail,
  Smartphone,
  Database,
  RefreshCw,
  Send,
  CheckCircle,
  Zap,
  ArrowRight,
  ShieldCheck,
  Server,
  Activity,
} from "lucide-react";

export default function MessagingFlow() {
  const [activeChannel, setActiveChannel] = useState<"whatsapp" | "email" | "sms" | "erp">("whatsapp");
  const [isSimulating, setIsSimulating] = useState(false);
  const [logs, setLogs] = useState<string[]>([
    "[EVOLUTION_API] Instância conectada via WebSocket (Status: OPEN)",
    "[TARGETX_ERP] Webhook de pedidos ativo no endpoint /api/v1/sync",
    "[RESEND_EMAIL] Chave de API validada · Domínio autenticado DKIM/SPF",
    "[SMS_MARKET] Gateway pronto para disparos em lote",
  ]);

  const handleSimulate = () => {
    setIsSimulating(true);
    const newLog = `[DISPATCH_${activeChannel.toUpperCase()}] Pedido #168391 acionado → Disparo concluído com sucesso via Gateway.`;
    setTimeout(() => {
      setLogs((prev) => [newLog, ...prev.slice(0, 5)]);
      setIsSimulating(false);
    }, 600);
  };

  return (
    <div className="rounded-[32px] border border-black/15 dark:border-white/15 bg-white/95 dark:bg-[#121722]/95 backdrop-blur-xl p-5 sm:p-8 shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/10 dark:border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-emerald-500/20">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display font-bold text-lg sm:text-xl text-current tracking-tight">
                Hub de Mensageria Multicanal & ERP TargetX
              </h3>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-mono-meta text-[10px] font-bold">
                API GATEWAY
              </span>
            </div>
            <p className="font-mono-meta text-xs text-current/60">
              Evolution API · WhatsApp Oficial · Resend E-mail · SMS Market · Sincronização ERP
            </p>
          </div>
        </div>

        {/* Action button */}
        <button
          onClick={handleSimulate}
          disabled={isSimulating}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1f1a14] dark:bg-[#f5efe6] text-[#f5efe6] dark:text-[#1f1a14] font-mono-meta text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all disabled:opacity-50 self-start sm:self-auto"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isSimulating ? "animate-spin text-emerald-500" : ""}`} />
          <span>{isSimulating ? "Disparando..." : "Simular Disparo"}</span>
        </button>
      </div>

      {/* Interactive Topology Graph */}
      <div className="my-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
          {/* Node 1: WhatsApp (Evolution + Oficial) */}
          <div
            onClick={() => setActiveChannel("whatsapp")}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              activeChannel === "whatsapp"
                ? "bg-emerald-500/10 border-emerald-500 shadow-md ring-2 ring-emerald-500/20"
                : "bg-black/[0.02] dark:bg-white/[0.03] border-black/5 dark:border-white/10 hover:border-emerald-500/50"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-600 flex items-center justify-center">
                <MessageSquare className="w-4 h-4" />
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            </div>
            <p className="font-display font-bold text-xs text-current">WhatsApp API</p>
            <p className="font-mono-meta text-[10px] text-current/60 mt-0.5">
              Evolution API + Oficial Meta
            </p>
          </div>

          {/* Node 2: Email (Resend / Send) */}
          <div
            onClick={() => setActiveChannel("email")}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              activeChannel === "email"
                ? "bg-blue-500/10 border-blue-500 shadow-md ring-2 ring-blue-500/20"
                : "bg-black/[0.02] dark:bg-white/[0.03] border-black/5 dark:border-white/10 hover:border-blue-500/50"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-600 flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </div>
              <span className="w-2 h-2 rounded-full bg-blue-500" />
            </div>
            <p className="font-display font-bold text-xs text-current">Resend / Email</p>
            <p className="font-mono-meta text-[10px] text-current/60 mt-0.5">
              Templates dinâmicos & SMTP
            </p>
          </div>

          {/* Node 3: SMS Market */}
          <div
            onClick={() => setActiveChannel("sms")}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              activeChannel === "sms"
                ? "bg-purple-500/10 border-purple-500 shadow-md ring-2 ring-purple-500/20"
                : "bg-black/[0.02] dark:bg-white/[0.03] border-black/5 dark:border-white/10 hover:border-purple-500/50"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-600 flex items-center justify-center">
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="w-2 h-2 rounded-full bg-purple-500" />
            </div>
            <p className="font-display font-bold text-xs text-current">SMS Market</p>
            <p className="font-mono-meta text-[10px] text-current/60 mt-0.5">
              Alertas críticos e lote
            </p>
          </div>

          {/* Node 4: ERP TargetX */}
          <div
            onClick={() => setActiveChannel("erp")}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              activeChannel === "erp"
                ? "bg-amber-500/10 border-amber-500 shadow-md ring-2 ring-amber-500/20"
                : "bg-black/[0.02] dark:bg-white/[0.03] border-black/5 dark:border-white/10 hover:border-amber-500/50"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-600 flex items-center justify-center">
                <Database className="w-4 h-4" />
              </div>
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            </div>
            <p className="font-display font-bold text-xs text-current">ERP TargetX</p>
            <p className="font-mono-meta text-[10px] text-current/60 mt-0.5">
              Cadastro de Clientes & PDV
            </p>
          </div>
        </div>
      </div>

      {/* Terminal Output Logs */}
      <div className="p-4 rounded-2xl bg-black/90 text-emerald-400 font-mono-meta text-xs border border-white/10 shadow-inner">
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-white/50 text-[10px]">
          <span className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            MESSAGING PIPELINE MONITOR
          </span>
          <span>LATENCY: 42ms</span>
        </div>
        <div className="space-y-1.5 overflow-hidden">
          {logs.map((log, index) => (
            <div key={index} className="truncate">
              <span className="text-white/40">[{new Date().toLocaleTimeString()}]</span> {log}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
