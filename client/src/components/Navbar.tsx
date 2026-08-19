import React, { useState, useEffect } from "react";
import { ArrowUpRight, MessageCircle, Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Projetos", href: "#projetos" },
    { label: "Tecnologias", href: "#tecnologias" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[var(--bg-page)]/90 backdrop-blur-md border-b border-[var(--border-color)] py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          href="#inicio"
          className="flex items-center gap-3 group focus:outline-none"
          aria-label="Ir para o início"
        >
          <div className="w-10 h-10 rounded-xl bg-[var(--accent-moss-dark)] text-[var(--bg-card)] flex items-center justify-center font-serif-title text-xl font-bold tracking-tighter shadow-sm group-hover:scale-105 transition-transform duration-300">
            K
          </div>
          <div className="flex flex-col">
            <span className="font-sans-body font-bold text-sm tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-moss-dark)] transition-colors">
              Kauan Dias Lopes
            </span>
            <span className="font-mono-meta text-[11px] text-[var(--text-muted)] uppercase tracking-widest">
              Dev Web
            </span>
          </div>
        </a>

        {/* Live Status Chip in Center (Desktop) */}
        <div className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-strong)] font-mono-meta text-[11px] uppercase tracking-widest text-[var(--text-secondary)] shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-moss)] animate-pulse" />
          <span className="font-semibold">Fomenta Vale & FATEC</span>
        </div>

        {/* Nav Links + CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <nav className="flex items-center gap-6 text-[11px] font-mono-meta uppercase tracking-widest text-[var(--text-secondary)]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[var(--text-primary)] transition-colors relative py-1 group font-bold"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[var(--accent-moss-dark)] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center pl-6 border-l border-[var(--border-color)]">
            {/* Direct WhatsApp CTA */}
            <a
              href="https://wa.me/5518996096239"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--accent-moss-dark)] hover:bg-[var(--text-primary)] text-[var(--bg-card)] font-display text-xs font-bold tracking-wide shadow-md hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Contato</span>
            </a>
          </div>
        </div>

        {/* Mobile menu triggers */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menu móvel"
            className="p-2.5 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-card)] text-[var(--text-primary)] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-4 pb-6 bg-[var(--bg-surface)] border-b border-[var(--border-strong)] shadow-md space-y-3 absolute w-full left-0 top-[100%]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2.5 text-xs font-mono-meta uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--accent-moss-dark)] font-bold border-b border-[var(--border-color)]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5518996096239"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-4 inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[var(--accent-moss-dark)] text-[var(--bg-card)] font-display text-sm font-bold shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      )}
    </header>
  );
}
