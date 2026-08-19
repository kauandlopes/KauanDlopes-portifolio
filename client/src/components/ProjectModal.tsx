import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowUpRight,
  CheckCircle,
  Layers,
  Cpu,
  ExternalLink,
  Github,
  Calendar,
  User,
  Sparkles,
} from "lucide-react";
import { ProjectData } from "@/data/projects";
import { TechChip } from "@/lib/techIcons";
import LiveTargetDashboard from "./LiveTargetDashboard";
import LiveTicketSystem from "./LiveTicketSystem";
import MessagingFlow from "./MessagingFlow";

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock body scroll while the modal is open, restore on close/unmount
  useEffect(() => {
    if (!project) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-[var(--text-primary)]/60 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-[28px] bg-[var(--bg-page)] border border-[var(--border-strong)] shadow-2xl p-5 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 w-10 h-10 rounded-full border border-[var(--border-strong)] bg-[var(--bg-card)] hover:bg-[var(--bg-surface)] flex items-center justify-center transition-transform hover:scale-105 active:scale-95 z-20 shadow-sm cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5 text-[var(--text-primary)]" />
            </button>

            {/* Top meta row */}
            <div className="flex flex-wrap items-center gap-3 font-mono-meta text-[11px] text-[var(--accent-terra)] uppercase tracking-widest mb-3 font-bold pr-12">
              <span>{project.category}</span>
              <span className="opacity-40">•</span>
              <span className="text-[var(--text-muted)] flex items-center gap-1.5 normal-case font-semibold">
                <Calendar className="w-3.5 h-3.5" /> {project.year}
              </span>
              <span className="opacity-40">•</span>
              <span className="text-[var(--text-muted)] flex items-center gap-1.5 normal-case font-semibold">
                <User className="w-3.5 h-3.5" /> {project.role}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif-title text-3xl sm:text-5xl font-normal leading-[1.05] tracking-tight text-[var(--text-primary)] mb-3 pr-8">
              {project.title}
            </h2>
            <p className="font-sans-body text-base sm:text-lg text-[var(--text-muted)] max-w-2xl mb-8 leading-relaxed">
              {project.subtitle}
            </p>

            {/* Live demo / media */}
            <div className="mb-9 rounded-2xl overflow-hidden border border-[var(--border-color)] bg-[var(--bg-surface)] shadow-inner">
              {project.demoType === "external" || project.demoType === "hackathon" ? (
                <div className="relative aspect-video w-full">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="p-4 sm:p-6">
                  <div className="font-mono-meta text-[10px] uppercase tracking-widest text-[var(--accent-moss-dark)] font-bold mb-4 flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    Demonstração interativa
                  </div>
                  {project.demoType === "interactive-live" && <LiveTargetDashboard />}
                  {project.demoType === "interactive-tickets" && <LiveTicketSystem />}
                  {project.demoType === "interactive-messaging" && <MessagingFlow />}
                </div>
              )}
            </div>

            {/* Challenge & Solution */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                <h4 className="font-mono-meta font-bold text-[11px] uppercase tracking-widest text-[var(--accent-terra)] mb-2 flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5" /> O Desafio
                </h4>
                <p className="font-sans-body text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.challenge}
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)]">
                <h4 className="font-mono-meta font-bold text-[11px] uppercase tracking-widest text-[var(--accent-moss-dark)] mb-2 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5" /> A Solução
                </h4>
                <p className="font-sans-body text-sm text-[var(--text-secondary)] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="mb-8">
              <h4 className="font-mono-meta text-[11px] font-bold uppercase tracking-widest text-[var(--text-primary)] mb-3">
                Resultados & Impacto
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.results.map((result, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] flex items-start gap-2.5"
                  >
                    <CheckCircle className="w-4 h-4 text-[var(--accent-moss-dark)] shrink-0 mt-0.5" />
                    <span className="font-sans-body text-xs text-[var(--text-primary)] font-medium leading-snug">
                      {result}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack with real brand icons */}
            <div className="mb-8">
              <h4 className="font-mono-meta text-[11px] font-bold uppercase tracking-widest text-[var(--text-muted)] mb-3">
                Tecnologias Utilizadas
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <TechChip key={tech} name={tech} />
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-[var(--border-color)]">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--text-primary)] text-[var(--bg-page)] font-display text-sm font-bold shadow-md hover:scale-105 active:scale-95 transition-all"
                >
                  <span>Visitar Projeto</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border-strong)] bg-[var(--bg-card)] hover:bg-[var(--bg-surface)] text-[var(--text-primary)] font-display text-sm font-bold transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Ver Código</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--border-color)] hover:bg-[var(--bg-surface)] font-display text-sm font-bold text-[var(--text-secondary)] transition-colors cursor-pointer ml-auto"
              >
                <span>Fechar</span>
                <ArrowUpRight className="w-4 h-4 rotate-45" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
