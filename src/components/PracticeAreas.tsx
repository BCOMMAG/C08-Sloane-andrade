"use client";

import { useEffect, useRef } from "react";
import { PRACTICE_AREAS, OFFICE_INFO } from "@/lib/data";
import { CheckCircle2, MessageSquare, ArrowUpRight, Scale } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function PracticeAreas() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!gridRef.current) return;

      const cards = gridRef.current.querySelectorAll(".practice-card-item");
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 45,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="atuacao"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-secondary)]/40 editorial-border-b w-full relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <RevealOnScroll direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16">
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
        </RevealOnScroll>

        {/* Grid de 6 Áreas de Atuação com Efeito 3D Cascade */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {PRACTICE_AREAS.map((area) => (
            <div
              key={area.id}
              className="practice-card-item h-full p-6 sm:p-8 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 shadow-xs hover:border-[#A6766A] hover:shadow-lg hover-lift transition-all duration-300 flex flex-col justify-between group will-change-transform"
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