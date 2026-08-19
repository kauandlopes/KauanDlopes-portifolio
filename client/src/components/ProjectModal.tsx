import React from "react";
import { X, ArrowUpRight, CheckCircle, Layers, Cpu, ExternalLink, Calendar, User } from "lucide-react";

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  role: string;
  image: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[32px] bg-[#fbf8f2] dark:bg-[#151a24] border border-black/15 dark:border-white/15 shadow-2xl p-6 sm:p-10 text-current transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 rounded-full border border-black/10 dark:border-white/15 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5 text-current" />
        </button>

        {/* Top Tag & Category */}
        <div className="flex flex-wrap items-center gap-3 font-mono-meta text-xs text-[#b85434] dark:text-[#e07452] uppercase tracking-wider mb-2">
          <span>{project.category}</span>
          <span>•</span>
          <span className="text-current/60 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> {project.year}
          </span>
          <span>•</span>
          <span className="text-current/60 flex items-center gap-1">
            <User className="w-3.5 h-3.5" /> {project.role}
          </span>
        </div>

        {/* Title */}
        <h2 className="font-serif-title text-3xl sm:text-5xl font-normal leading-[1.05] tracking-tight mb-4">
          {project.title}
        </h2>
        <p className="font-sans-body text-base sm:text-lg text-current/80 max-w-2xl mb-8">
          {project.subtitle}
        </p>

        {/* Hero Image */}
        <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-black/10 dark:border-white/15 mb-8 bg-black/5">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Detailed Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Challenge */}
          <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/10">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#b85434] dark:text-[#e07452] mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              O Desafio
            </h4>
            <p className="font-sans-body text-sm text-current/80 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="p-5 rounded-2xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/10">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-[#4f6349] dark:text-[#81b29a] mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4" />
              A Solução
            </h4>
            <p className="font-sans-body text-sm text-current/80 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Results & Key Highlights */}
        <div className="mb-8">
          <h4 className="font-display font-bold text-sm uppercase tracking-wider text-current mb-3">
            Resultados & Impacto
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.results.map((result, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-black/[0.02] dark:bg-white/[0.03] border border-black/5 dark:border-white/10 flex items-start gap-2.5"
              >
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span className="font-sans-body text-xs text-current/90">{result}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-8">
          <h4 className="font-mono-meta text-xs uppercase tracking-wider text-current/60 mb-2">
            Tecnologias Utilizadas
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full border border-black/10 dark:border-white/15 bg-black/[0.03] dark:bg-white/[0.05] font-mono-meta text-xs text-current/80 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-black/10 dark:border-white/10">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1f1a14] dark:bg-[#f5efe6] text-[#f5efe6] dark:text-[#1f1a14] font-display text-sm font-bold shadow-md hover:scale-105 transition-all"
            >
              <span>Visitar Projeto Online</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          <button
            onClick={onClose}
            className="px-6 py-3 rounded-full border border-black/15 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10 font-display text-sm font-bold transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
