"use client";

import { OFFICE_INFO } from "@/lib/data";
import { Award, UserCheck, Scale, ShieldCheck } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function InstitutionalPillars() {
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

  return (
    <section id="pilares" className="w-full border-b border-[var(--border-subtle)]/30 bg-[var(--bg-secondary)]/50 py-10 sm:py-14 relative shadow-2xs overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <RevealOnScroll direction="up">
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
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-subtle)]/30">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <RevealOnScroll key={idx} delay={idx * 80} direction="zoom">
                <div
                  className="flex flex-col items-start px-0 sm:px-6 pt-6 sm:pt-0 first:pt-0"
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
              </RevealOnScroll>
            );
          })}
        </div>

      </div>
    </section>
  );
}