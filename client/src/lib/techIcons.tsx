import React from "react";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiPostman,
  SiZod,
  SiNextdotjs,
  SiPython,
  SiFramer,
  SiRadixui,
  SiGithub,
  SiGit,
  SiHtml5,
  SiCss,
  SiWhatsapp,
  SiResend,
  SiDeepseek,
  SiGooglegemini,
  SiDelphi,
  SiVercel,
  SiFigma,
} from "react-icons/si";
import {
  Terminal,
  Network,
  ShieldCheck,
  Building2,
  Zap,
  MessageSquare,
  Webhook,
  Globe,
  Cog,
  FlaskConical,
  Boxes,
  HeartPulse,
  Coffee,
  Ruler,
  TrendingUp,
  RefreshCw,
  ClipboardCheck,
  Code2,
  MonitorSmartphone,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/**
 * Central registry mapping a technology / tool name to its real brand icon
 * (via react-icons/si — Simple Icons) plus that brand's signature color.
 * Anything without an official brand mark falls back to a themed lucide glyph
 * so every chip still reads as intentional, never a placeholder.
 */
type IconEntry = { Icon: IconType | LucideIcon; color: string; brand: boolean };

const registry: Record<string, IconEntry> = {
  react: { Icon: SiReact, color: "#61DAFB", brand: true },
  typescript: { Icon: SiTypescript, color: "#3178C6", brand: true },
  javascript: { Icon: SiJavascript, color: "#F7DF1E", brand: true },
  "node.js": { Icon: SiNodedotjs, color: "#5FA04E", brand: true },
  nodejs: { Icon: SiNodedotjs, color: "#5FA04E", brand: true },
  express: { Icon: SiExpress, color: "#000000", brand: true },
  "tailwind css": { Icon: SiTailwindcss, color: "#06B6D4", brand: true },
  tailwindcss: { Icon: SiTailwindcss, color: "#06B6D4", brand: true },
  postgresql: { Icon: SiPostgresql, color: "#4169E1", brand: true },
  mongodb: { Icon: SiMongodb, color: "#47A248", brand: true },
  docker: { Icon: SiDocker, color: "#2496ED", brand: true },
  postman: { Icon: SiPostman, color: "#FF6C37", brand: true },
  zod: { Icon: SiZod, color: "#3E67B1", brand: true },
  "next.js": { Icon: SiNextdotjs, color: "#000000", brand: true },
  python: { Icon: SiPython, color: "#3776AB", brand: true },
  "framer motion": { Icon: SiFramer, color: "#0055FF", brand: true },
  "radix ui": { Icon: SiRadixui, color: "#161618", brand: true },
  github: { Icon: SiGithub, color: "#181717", brand: true },
  git: { Icon: SiGit, color: "#F05032", brand: true },
  html5: { Icon: SiHtml5, color: "#E34F26", brand: true },
  css3: { Icon: SiCss, color: "#663399", brand: true },
  whatsapp: { Icon: SiWhatsapp, color: "#25D366", brand: true },
  resend: { Icon: SiResend, color: "#000000", brand: true },
  deepseek: { Icon: SiDeepseek, color: "#4D6BFE", brand: true },
  "google gemini": { Icon: SiGooglegemini, color: "#4285F4", brand: true },
  "google ai studio": { Icon: SiGooglegemini, color: "#4285F4", brand: true },
  delphi: { Icon: SiDelphi, color: "#EE1F35", brand: true },
  "object pascal": { Icon: SiDelphi, color: "#EE1F35", brand: true },
  vercel: { Icon: SiVercel, color: "#000000", brand: true },
  figma: { Icon: SiFigma, color: "#F24E1E", brand: true },

  // Sem logo oficial de marca — recebem um glifo temático coerente
  "rest api": { Icon: Globe, color: "var(--accent-moss-dark)", brand: false },
  webhooks: { Icon: Webhook, color: "var(--accent-moss-dark)", brand: false },
  rbac: { Icon: ShieldCheck, color: "var(--accent-terra)", brand: false },
  "erp targetx": { Icon: Building2, color: "var(--text-secondary)", brand: false },
  "evolution api": { Icon: Zap, color: "var(--accent-terra)", brand: false },
  "sms gateway": { Icon: MessageSquare, color: "var(--text-secondary)", brand: false },
  "function calling": { Icon: Code2, color: "var(--accent-moss-dark)", brand: false },
  groq: { Icon: Zap, color: "var(--accent-terra)", brand: false },
  sockets: { Icon: Network, color: "var(--text-secondary)", brand: false },
  ssh: { Icon: Terminal, color: "var(--text-secondary)", brand: false },
  winapi: { Icon: MonitorSmartphone, color: "var(--text-secondary)", brand: false },
  "open source": { Icon: SiGithub, color: "#181717", brand: true },
  java: { Icon: Coffee, color: "#E76F00", brand: false },
  "integração pdv": { Icon: ClipboardCheck, color: "var(--text-secondary)", brand: false },
  "engenharia mecânica": { Icon: Cog, color: "var(--text-secondary)", brand: false },
  "análise de materiais": { Icon: FlaskConical, color: "var(--text-secondary)", brand: false },
  "modelagem 3d": { Icon: Boxes, color: "var(--text-secondary)", brand: false },
  "inovação em saúde": { Icon: HeartPulse, color: "var(--accent-terra)", brand: false },
  autocad: { Icon: Ruler, color: "var(--text-secondary)", brand: false },
  "lean six sigma": { Icon: TrendingUp, color: "var(--accent-moss-dark)", brand: false },
  scrum: { Icon: RefreshCw, color: "var(--accent-moss-dark)", brand: false },
  "itil / cobit": { Icon: ClipboardCheck, color: "var(--text-secondary)", brand: false },
  recharts: { Icon: Sparkles, color: "var(--accent-terra)", brand: false },
  "vs code": { Icon: Code2, color: "var(--text-secondary)", brand: false },
};

export function resolveTechIcon(name: string): IconEntry {
  const key = name.trim().toLowerCase();
  if (registry[key]) return registry[key];
  return { Icon: Code2, color: "var(--text-secondary)", brand: false };
}

export function TechIcon({ name, className = "w-3.5 h-3.5" }: { name: string; className?: string }) {
  const { Icon, color } = resolveTechIcon(name);
  return <Icon className={className} style={{ color }} aria-hidden="true" />;
}

/** Full labeled chip used across project cards, modal and the tech grid */
export function TechChip({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[var(--bg-surface)] border border-[var(--border-color)] font-mono-meta text-[10px] uppercase tracking-wider text-[var(--text-secondary)] font-bold">
      <TechIcon name={name} />
      {name}
    </span>
  );
}
