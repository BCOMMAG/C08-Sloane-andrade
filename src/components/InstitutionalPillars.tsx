"use client";

import { useEffect, useRef } from "react";
import { OFFICE_INFO } from "@/lib/data";
import { Award, UserCheck, Scale, ShieldCheck } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function InstitutionalPillars() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const pillars = [
    {
      icon: Award,
      metric: "+10 Anos",
      title: "Solidez & Prática Forense",
      desc: "Trajetória consolidada desde 2014, com sólida passagem pela Polícia Civil e atuação contínua em comarcas da região.",
    },
    {
      icon: UserCheck,
      metric: "100% Pessoal",
      title: "Atendimento com a Titular",
      desc: "Você não conversa com estagiários ou intermediários. Toda a estratégia é desenhada diretamente pela Dra. Sloane Andrade.",
    },
    {
      icon: Scale,
      metric: "Personalizado",
      title: "Estratégia Sob Medida",
      desc: "Análise aprofundada da realidade do cliente para buscar a solução mais célere, seja via acordo extrajudicial ou via judicial.",
    },
    {
      icon: ShieldCheck,
      metric: "5.0 ★",
      title: "Confiança Comprovada",
      desc: "Nota máxima e reconhecimento de clientes no Google Reviews pela clareza, empatia e dedicação com os mínimos detalhes.",
    },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const triggerEl = gridRef.current || sectionRef.current;
      if (triggerEl) {
        const pillarItems = triggerEl.querySelectorAll(".pillar-item");
        if (pillarItems.length > 0) {
          gsap.fromTo(
            pillarItems,
            { x: 90, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.85,
              stagger: 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: triggerEl,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="pilares"
      ref={sectionRef}
      className="w-full border-b border-[var(--border-subtle)]/30 bg-[var(--bg-secondary)]/50 py-10 sm:py-14 relative shadow-2xs overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/25 mb-8 text-[var(--text-muted)]">
          <div className="flex items-center gap-2.5">
            <Scale className="w-4 h-4 text-[#A6766A]" />
            <span className="font-heading uppercase text-xs tracking-widest font-bold text-[var(--text-main)]">
              Pilares Institucionais de Atuação
            </span>
          </div>
          <span className="font-heading text-xs tracking-wider text-[var(--text-muted)] hidden sm:inline">
            Guaíra - SP • Atendimento Presencial e Digital
          </span>
        </div>

        {/* Grade com os 4 Pilares que realizam Fade-in sequencial da direita para a esquerda ao rolar a página */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-subtle)]/30"
        >
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="pillar-item flex flex-col items-start px-0 sm:px-6 pt-6 sm:pt-0 first:pt-0 will-change-transform"
              >
                <div className="flex items-center gap-2 mb-2 text-[#A6766A]">
                  <Icon className="w-5 h-5 text-[#A6766A]" />
                  <span className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]">
                    {item.metric}
                  </span>
                </div>
                <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
                  {item.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}