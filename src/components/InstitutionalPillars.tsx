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

  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const triggerEl = gridRef.current || sectionRef.current;
      if (!triggerEl) return;

      // Linha conectora superior que se desenha com o scroll
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      const pillarItems = triggerEl.querySelectorAll(".pillar-item");
      if (pillarItems.length > 0) {
        // Revelação em cascata com leve rotação e fade-up
        gsap.fromTo(
          pillarItems,
          { y: 40, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: triggerEl,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Contador e animação de números/métricas
        const counters = triggerEl.querySelectorAll(".metric-counter");
        counters.forEach((el) => {
          const targetValue = parseFloat(el.getAttribute("data-target") || "0");
          const prefix = el.getAttribute("data-prefix") || "";
          const suffix = el.getAttribute("data-suffix") || "";
          const isDecimal = el.getAttribute("data-decimal") === "true";

          const counterObj = { val: 0 };
          gsap.to(counterObj, {
            val: targetValue,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: triggerEl,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
            onUpdate: () => {
              const formatted = isDecimal ? counterObj.val.toFixed(1) : Math.round(counterObj.val).toString();
              el.textContent = `${prefix}${formatted}${suffix}`;
            },
          });
        });
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
        
        <div className="relative flex items-center justify-between pb-4 border-b border-[var(--border-subtle)]/25 mb-8 text-[var(--text-muted)]">
          {/* Linha de energia Rose Gold desenhada pelo scroll */}
          <div
            ref={lineRef}
            className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-gradient-to-r from-[#A6766A] via-[#D4A396] to-transparent will-change-transform"
          />
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

        {/* Grade com os 4 Pilares */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-subtle)]/30"
        >
          {/* 1. Solidez & Prática Forense */}
          <div className="pillar-item flex flex-col items-start px-0 sm:px-6 pt-6 sm:pt-0 first:pt-0 will-change-transform">
            <div className="flex items-center gap-2 mb-2 text-[#A6766A]">
              <Award className="w-5 h-5 text-[#A6766A]" />
              <span
                className="metric-counter font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]"
                data-target="10"
                data-prefix="+"
                data-suffix=" Anos"
              >
                +10 Anos
              </span>
            </div>
            <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
              Solidez & Prática Forense
            </h3>
            <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Trajetória consolidada desde 2014, com sólida passagem pela Polícia Civil e atuação contínua em comarcas da região.
            </p>
          </div>

          {/* 2. Atendimento com a Titular */}
          <div className="pillar-item flex flex-col items-start px-0 sm:px-6 pt-6 sm:pt-0 will-change-transform">
            <div className="flex items-center gap-2 mb-2 text-[#A6766A]">
              <UserCheck className="w-5 h-5 text-[#A6766A]" />
              <span
                className="metric-counter font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]"
                data-target="100"
                data-prefix=""
                data-suffix="%"
              >
                100%
              </span>
            </div>
            <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
              Atendimento com a Titular
            </h3>
            <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Você não conversa com estagiários ou intermediários. Toda a estratégia é desenhada diretamente pela Dra. Sloane Andrade.
            </p>
          </div>

          {/* 3. Estratégia Sob Medida */}
          <div className="pillar-item flex flex-col items-start px-0 sm:px-6 pt-6 sm:pt-0 will-change-transform">
            <div className="flex items-center gap-2 mb-2 text-[#A6766A]">
              <Scale className="w-5 h-5 text-[#A6766A]" />
              <span className="font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]">
                Sob Medida
              </span>
            </div>
            <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
              Estratégia Sob Medida
            </h3>
            <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Análise aprofundada da realidade do cliente para buscar a solução mais célere, seja via acordo extrajudicial ou via judicial.
            </p>
          </div>

          {/* 4. Confiança Comprovada */}
          <div className="pillar-item flex flex-col items-start px-0 sm:px-6 pt-6 sm:pt-0 will-change-transform">
            <div className="flex items-center gap-2 mb-2 text-[#A6766A]">
              <ShieldCheck className="w-5 h-5 text-[#A6766A]" />
              <span
                className="metric-counter font-heading text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-main)]"
                data-target="5.0"
                data-prefix=""
                data-suffix=" ★"
                data-decimal="true"
              >
                5.0 ★
              </span>
            </div>
            <h3 className="font-heading text-base font-semibold text-[var(--text-main)] mb-1.5">
              Confiança Comprovada
            </h3>
            <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Nota máxima e reconhecimento de clientes no Google Reviews pela clareza, empatia e dedicação com os mínimos detalhes.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}