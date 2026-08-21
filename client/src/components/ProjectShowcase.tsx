import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Eye } from "lucide-react";
import { projects, ProjectData } from "@/data/projects";
import { TechIcon } from "@/lib/techIcons";
import ProjectModal from "./ProjectModal";
import SafariBrowserMockup from "./SafariBrowserMockup";

/** Small rotating seal — the same visual device used in the Hero portrait,
 *  echoed here so the "vintage stamp" motif reads as a signature, not a one-off. */
function CatalogSeal() {
  return (
    <div className="hidden md:flex w-24 h-24 rounded-full bg-[var(--bg-card)] border border-[var(--border-strong)] shadow-sm items-center justify-center shrink-0 relative">
      <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
        <defs>
          <path id="catalogSealPath" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
        </defs>
        <text className="font-mono-meta text-[8px] uppercase font-bold tracking-[0.2em] fill-current text-[var(--text-secondary)]">
          <textPath href="#catalogSealPath">CATÁLOGO • ACERVO • CÓDIGO •</textPath>
        </text>
      </svg>
      <span className="absolute w-2.5 h-2.5 rounded-full bg-[var(--accent-terra)]" />
    </div>
  );
}

export default function ProjectShowcase() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("Todos");

  const filters = useMemo(() => {
    const groups = projects.map((p) => p.category.split("/")[0].trim());
    return ["Todos", ...Array.from(new Set(groups))];
  }, []);

  const filteredProjects = useMemo(
    () =>
      activeFilter === "Todos"
        ? projects
        : projects.filter((p) => p.category.split("/")[0].trim() === activeFilter),
    [activeFilter]
  );

  return (
    <section id="projetos" className="py-24 relative overflow-hidden bg-[var(--bg-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10 border-b border-[var(--border-color)] pb-8">
          <div className="flex items-start gap-6">
            <CatalogSeal />
            <div>
              <span className="font-mono-meta text-[11px] uppercase tracking-widest text-[var(--accent-terra)] flex items-center gap-2 mb-3 font-bold">
                ✦ Catálogo de Projetos
              </span>
              <h2 className="font-serif-title text-4xl sm:text-6xl font-normal leading-[1.02] tracking-tight text-[var(--text-primary)]">
                Sistemas que fazem <br />
                <span className="italic text-[var(--accent-terra)]">a operação acontecer.</span>
              </h2>
            </div>
          </div>
          <p className="font-sans-body text-base text-[var(--text-muted)] max-w-sm lg:pb-2">
            De centrais de Business Intelligence a hubs de mensageria e comércio digital. Filtre por frente de atuação ou clique num card para ver a demonstração ao vivo.
          </p>
        </div>

        {/* Safari Browser Mockup — troca de projeto em tempo real */}
        <div className="mb-14">
          <SafariBrowserMockup />
        </div>

        {/* Dynamic category filter */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full font-mono-meta text-[11px] uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer border ${
                activeFilter === f
                  ? "bg-[var(--text-primary)] text-[var(--bg-page)] border-[var(--text-primary)] shadow-md"
                  : "bg-[var(--bg-card)] border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--border-strong)] hover:text-[var(--text-primary)]"
              }`}
            >
              {f}
              <span className="opacity-50 ml-1.5">
                ({f === "Todos" ? projects.length : projects.filter((p) => p.category.split("/")[0].trim() === f).length})
              </span>
            </button>
          ))}
        </div>

        {/* Project Cards Grid — animated in/out on filter change */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl p-6 bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--accent-terra)] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-[transform,box-shadow,border-color] duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Media */}
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
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded bg-[var(--bg-card)] border border-[var(--border-strong)] text-[var(--text-secondary)] font-mono-meta text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    {project.badge}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono-meta text-[var(--accent-terra)] font-bold uppercase tracking-widest mb-3">
                    <span>{project.category}</span>
                    <span className="text-[var(--text-muted)]">{project.year}</span>
                  </div>
                  <h3 className="font-serif-title text-2xl font-normal leading-tight text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-terra)] transition-colors">
                    {project.shortTitle}
                  </h3>
                  <p className="font-sans-body text-[13px] sm:text-sm text-[var(--text-muted)] line-clamp-2 mb-6">
                    {project.subtitle}
                  </p>
                </div>

                {/* Real brand tech icons */}
                <div className="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        title={tech}
                        className="w-7 h-7 rounded-md bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-center justify-center"
                      >
                        <TechIcon name={tech} className="w-3.5 h-3.5" />
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="font-mono-meta text-[10px] font-bold text-[var(--text-muted)] ml-1">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[var(--text-muted)] group-hover:text-[var(--accent-terra)] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="text-center py-16 font-sans-body text-[var(--text-muted)]">
            Nenhum projeto nessa categoria ainda.
          </p>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
