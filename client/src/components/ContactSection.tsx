import React, { useState } from "react";
import { Mail, MessageCircle, Linkedin, Github, Copy, Check, ArrowUpRight, Sparkles, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "lopeskauandias@gmail.com";
  const phone = "+55 (18) 99609-6239";
  const whatsappUrl = "https://wa.me/5518996096239?text=Ol%C3%A1%20Kauan!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar.";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("E-mail copiado para a área de transferência!");
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-grid-editorial bg-[var(--bg-page)]">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-[var(--accent-terra)]/10 via-[var(--accent-moss)]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Contact Big Banner Card */}
        <div className="relative rounded-[36px] bg-[var(--accent-terra-dark)] text-[var(--bg-page)] border border-[var(--border-strong)] p-8 sm:p-14 lg:p-18 shadow-2xl overflow-hidden">
          {/* Subtle background circular decor */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full border border-white/15 pointer-events-none" />
          <div className="absolute -right-10 -bottom-10 w-60 h-60 rounded-full border border-white/20 pointer-events-none animate-spin-slow" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left side: Heading and copy */}
            <div className="lg:col-span-8">
              <span className="font-mono-meta text-[11px] uppercase tracking-widest text-[#faf2e6] flex items-center gap-2 mb-4 font-bold">
                <Sparkles className="w-4 h-4 text-white" />
                Próximo Passo · Aberto para Oportunidades & Contratos
              </span>
              <h2 className="font-serif-title text-4xl sm:text-6xl lg:text-7xl font-normal leading-[0.98] tracking-tight mb-6">
                Vamos fazer uma ideia <br />
                <span className="italic text-[#f4dcd6]">ganhar forma e clareza?</span>
              </h2>
              <p className="font-sans-body text-base sm:text-lg text-white/90 max-w-xl leading-relaxed mb-8">
                Aberto a oportunidades em desenvolvimento web, estágio, projetos de dashboards analíticos (BI), automações com WhatsApp/SMS/Email e modernização de processos.
              </p>

              {/* Direct Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-[var(--text-primary)] text-[var(--bg-page)] font-display text-sm font-bold tracking-wide shadow-lg hover:scale-105 active:scale-95 transition-all"
                  data-cursor="WHATSAPP"
                >
                  <MessageCircle className="w-4 h-4 text-[var(--accent-moss)]" />
                  <span>Conversar no WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-mono-meta text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm"
                  data-cursor="COPIAR"
                >
                  {copied ? <Check className="w-4 h-4 text-[var(--accent-moss-light)]" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? "Copiado!" : email}</span>
                </button>
              </div>
            </div>

            {/* Right side: Contact Details Card & Dramatic Portal */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="p-6 rounded-3xl bg-black/10 border border-white/20 backdrop-blur-md space-y-4 shadow-lg text-white">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center font-serif-title font-bold text-lg">
                    K
                  </div>
                  <div>
                    <strong className="font-display text-base block tracking-tight">Kauan Dias Lopes</strong>
                    <span className="font-mono-meta text-[11px] text-white/80 uppercase tracking-widest">Assis, SP</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/15 space-y-3 font-mono-meta text-xs font-semibold">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-white/60" />
                    <a href={`mailto:${email}`} className="hover:underline truncate">
                      {email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-white/60" />
                    <span>{phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-white/60" />
                    <span>Assis, São Paulo · Brasil</span>
                  </div>
                </div>

                {/* Social links row */}
                <div className="pt-4 border-t border-white/15 flex items-center gap-3">
                  <a
                    href="https://www.linkedin.com/in/kauan-dias-lopes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/15 hover:bg-white/25 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/kauandlopes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/15 hover:bg-white/25 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/15 hover:bg-white/25 transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Dramatic Exit Portal Graphic */}
              <div className="relative p-5 rounded-3xl bg-black/20 border border-white/15 flex items-center justify-between overflow-hidden">
                <div>
                  <span className="font-mono-meta text-[10px] uppercase tracking-widest text-[#f4dcd6] font-bold block">
                    DRAMATIC EXIT
                  </span>
                  <p className="font-serif-title text-sm text-white/90 italic mt-1">
                    "O código termina, a conversa começa."
                  </p>
                </div>
                {/* Glowing arched door */}
                <div className="relative w-12 h-16 rounded-t-full border-2 border-white/60 bg-gradient-to-t from-white/20 to-transparent flex items-center justify-center animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <footer className="mt-16 pt-8 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono-meta uppercase tracking-widest text-[var(--text-muted)] font-bold">
          <div>
            © {new Date().getFullYear()} Kauan Dias Lopes · Assis, SP
          </div>
          <div className="flex items-center gap-6">
            <a href="#inicio" className="hover:text-[var(--text-primary)] transition-colors">Início ↑</a>
            <a href="#projetos" className="hover:text-[var(--text-primary)] transition-colors">Projetos</a>
            <a href="#target-live" className="hover:text-[var(--text-primary)] transition-colors">Target Live</a>
            <a href="#sobre" className="hover:text-[var(--text-primary)] transition-colors">Sobre</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
