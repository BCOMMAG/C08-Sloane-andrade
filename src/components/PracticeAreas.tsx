"use client";

import { useState, useRef } from "react";
import { PRACTICE_AREAS, OFFICE_INFO } from "@/lib/data";
import { CheckCircle2, MessageSquare, ArrowUpRight, Scale, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function PracticeAreas() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  
  // Refs para modelo Desktop (Efeito de Sobreposição / Stacking)
  const desktopContainerRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  // Estado para acordeão resumido no modelo Mobile
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(null);

  const toggleMobileExpand = (id: string) => {
    setExpandedMobileId((prev) => (prev === id ? null : id));
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  };

  useGSAP(
    () => {
      // 1. Animação bidirecional do cabeçalho
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 2. DESKTOP: Sobreposição com Pinning — Elimina qualquer espaço em branco na parte inferior
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        if (desktopContainerRef.current && row1Ref.current && row2Ref.current) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: desktopContainerRef.current,
              start: "top 20%",
              end: "+=520",
              pin: true,
              scrub: 1,
              anticipatePin: 1,
            },
          });

          // A linha 1 encolhe sutilmente e ganha opacidade suave
          tl.to(
            row1Ref.current,
            {
              scale: 0.94,
              opacity: 0.25,
              ease: "none",
            },
            0
          );

          // A linha 2 entra suavemente por cima, cobrindo a linha 1 perfeitamente
          tl.fromTo(
            row2Ref.current,
            {
              y: 420,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              ease: "none",
            },
            0
          );
        }
      });
    },
    { scope: sectionRef }
  );

  const topRowAreas = PRACTICE_AREAS.slice(0, 3);
  const bottomRowAreas = PRACTICE_AREAS.slice(3, 6);

  return (
    <section
      id="atuacao"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-secondary)]/40 editorial-border-b w-full relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16 will-change-transform"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bullet-indicator text-[#A6766A]" />
              <span className="font-heading uppercase text-xs tracking-widest text-[#A6766A] font-bold">
                02 / Especialidades Jurídicas
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-semibold">
              Áreas de Atuação
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Abordagem técnica individualizada e focada nas soluções mais seguras para o seu trabalho, sua família e seus contratos.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MODELO DESKTOP (MD+): SOBREPOSIÇÃO PINNADA SEM ESPAÇO VAZIO INFERIOR     */}
        {/* ========================================================================= */}
        <div ref={desktopContainerRef} className="hidden md:block relative min-h-[500px]">
          {/* Linha 1 (Base - Fica no fluxo normal) */}
          <div ref={row1Ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 will-change-transform">
            {topRowAreas.map((area) => (
              <div
                key={area.id}
                className="h-full p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 shadow-md flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-2xl font-bold text-[#A6766A]">
                      {area.code}.
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center text-[#A6766A] group-hover:bg-[#A6766A] group-hover:text-white transition-colors duration-300 shadow-2xs">
                      <Scale className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="font-heading text-xs uppercase tracking-wider text-[#A6766A] font-semibold block mb-1">
                    {area.subtitle}
                  </span>

                  <h3 className="font-heading text-xl font-bold text-[var(--text-main)] mb-3 leading-snug">
                    {area.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                    {area.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[var(--border-subtle)]/20">
                    {area.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-[var(--text-main)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A6766A] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--border-subtle)]/25 flex items-center justify-between">
                  <a
                    href={`https://wa.me/5517981217474?text=Ol%C3%A1%2C%20Dra.%20Sloane.%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20${encodeURIComponent(area.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-[#A6766A] hover:text-[var(--text-main)] transition-colors group/link"
                  >
                    <span>Consultar sobre este tema</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Linha 2 (Sobrepõe a Linha 1 no mesmo espaço vertical com z-20 e sombra 2xl) */}
          <div
            ref={row2Ref}
            className="absolute inset-x-0 top-0 z-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 will-change-transform pointer-events-auto"
          >
            {bottomRowAreas.map((area) => (
              <div
                key={area.id}
                className="h-full p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border-2 border-[#D4A396]/70 shadow-2xl flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-2xl font-bold text-[#A6766A]">
                      {area.code}.
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center text-[#A6766A] group-hover:bg-[#A6766A] group-hover:text-white transition-colors duration-300 shadow-2xs">
                      <Scale className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="font-heading text-xs uppercase tracking-wider text-[#A6766A] font-semibold block mb-1">
                    {area.subtitle}
                  </span>

                  <h3 className="font-heading text-xl font-bold text-[var(--text-main)] mb-3 leading-snug">
                    {area.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                    {area.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-[var(--border-subtle)]/20">
                    {area.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-[var(--text-main)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A6766A] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--border-subtle)]/25 flex items-center justify-between">
                  <a
                    href={`https://wa.me/5517981217474?text=Ol%C3%A1%2C%20Dra.%20Sloane.%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20${encodeURIComponent(area.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-[#A6766A] hover:text-[var(--text-main)] transition-colors group/link"
                  >
                    <span>Consultar sobre este tema</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MODELO MOBILE (< MD): FORMATO RESUMIDO SEM CORTAR TÍTULOS E INFORMAÇÕES   */}
        {/* ========================================================================= */}
        <div className="block md:hidden space-y-3">
          {PRACTICE_AREAS.map((area) => {
            const isExpanded = expandedMobileId === area.id;

            return (
              <div
                key={area.id}
                className={`rounded-2xl border transition-all duration-300 bg-[var(--bg-card)] overflow-hidden ${
                  isExpanded ? "border-[#A6766A] shadow-md" : "border-[var(--border-subtle)]/35 shadow-2xs"
                }`}
              >
                {/* Linha Resumida Sem Truncate: visualiza título completo com quebra natural */}
                <div
                  onClick={() => toggleMobileExpand(area.id)}
                  className="p-3.5 flex items-center justify-between gap-3 cursor-pointer select-none"
                >
                  <div className="flex items-start gap-2.5 min-w-0 flex-1">
                    <span className="font-heading text-sm font-bold text-[#A6766A] flex-shrink-0 mt-0.5">
                      {area.code}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-heading text-sm font-bold text-[var(--text-main)] leading-snug break-words">
                        {area.title}
                      </h3>
                      <span className="text-[0.6875rem] font-heading text-[#A6766A] block mt-0.5 break-words">
                        {area.subtitle}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[0.6875rem] font-heading font-semibold transition-all flex-shrink-0 self-center ${
                      isExpanded
                        ? "bg-[#A6766A] text-white"
                        : "bg-[var(--bg-secondary)] text-[#A6766A] border border-[#A6766A]/30"
                    }`}
                    aria-expanded={isExpanded}
                  >
                    <span>{isExpanded ? "Fechar" : "Saber mais"}</span>
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Detalhes Expansíveis */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-[var(--border-subtle)]/25 space-y-3 animate-fade-in-down">
                    <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed pt-2">
                      {area.description}
                    </p>

                    <div className="space-y-2 pt-1">
                      {area.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs font-body text-[var(--text-main)]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#A6766A] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-[var(--border-subtle)]/20 flex justify-end">
                      <a
                        href={`https://wa.me/5517981217474?text=Ol%C3%A1%2C%20Dra.%20Sloane.%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20${encodeURIComponent(area.title)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pill bg-[#A6766A] hover:bg-[#8d5e53] text-white py-2 px-4 text-xs gap-1.5 inline-flex items-center"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>Consultar no WhatsApp</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Banner Inferior de Suporte Geral */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-heading text-lg font-bold text-[var(--text-main)]">
              Precisa de orientação jurídica personalizada em outra matéria cível ou trabalhista?
            </h4>
            <p className="font-body text-xs sm:text-sm text-[var(--text-muted)]">
              Agende uma análise preventiva com a Dra. Sloane Ferreira de Andrade.
            </p>
          </div>
          <a
            href={OFFICE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill bg-white dark:bg-[#151A1F] text-[#1A1D20] dark:text-white border-2 border-[#A6766A] hover:bg-[#A6766A] hover:text-white dark:hover:bg-[#A6766A] dark:hover:text-white gap-2 shadow-xs text-xs sm:text-sm whitespace-nowrap flex-shrink-0 hover-lift transition-all"
          >
            <MessageSquare className="w-4 h-4 text-[#A6766A] group-hover:text-white" />
            <span>Falar com a Advogada</span>
          </a>
        </div>
      </div>
    </section>
  );
}