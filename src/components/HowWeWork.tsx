"use client";

import { WORK_STEPS, OFFICE_INFO } from "@/lib/data";
import { MessageSquare, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function HowWeWork() {
  return (
    <section id="como-atuamos" className="py-16 sm:py-24 bg-[var(--bg-primary)] editorial-border-b w-full relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <RevealOnScroll direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bullet-indicator text-[#A6766A]" />
                <span className="font-heading uppercase text-xs tracking-widest text-[#A6766A] font-bold">
                  05 / Clareza Procedimental
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-semibold">
                Como Funciona Nosso Atendimento
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
              Uma trajetória transparente, sem juridiquês inacessível e com total previsibilidade sobre cada fase do seu procedimento.
            </p>
          </div>
        </RevealOnScroll>

        {/* 4 Passos Estruturados com entrada horizontal progressiva */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {WORK_STEPS.map((step, idx) => (
            <RevealOnScroll key={idx} delay={idx * 100} direction="zoom">
              <div
                className="h-full p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 shadow-xs flex flex-col justify-between relative group hover:border-[#A6766A] hover-lift transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-3xl font-bold text-[#A6766A]">
                      {step.number}
                    </span>
                    {idx < WORK_STEPS.length - 1 && (
                      <ArrowRight className="hidden lg:block w-4 h-4 text-[var(--border-subtle)]/60 group-hover:translate-x-1 transition-transform" />
                    )}
                  </div>

                  <span className="font-heading text-xs uppercase tracking-wider text-[#A6766A] font-semibold block mb-1">
                    {step.subtitle}
                  </span>

                  <h3 className="font-heading text-lg font-bold text-[var(--text-main)] mb-2.5">
                    {step.title}
                  </h3>

                  <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll direction="up" delay={200}>
          <div className="mt-12 text-center">
            <a
              href={OFFICE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill bg-[#A6766A] hover:bg-[#8d5e53] text-white gap-2 shadow-xs text-sm inline-flex items-center"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Iniciar Primeiro Contato via WhatsApp</span>
            </a>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}