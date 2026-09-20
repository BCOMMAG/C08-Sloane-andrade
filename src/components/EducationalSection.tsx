"use client";

import { useState } from "react";
import { EDUCATIONAL_TOPICS } from "@/lib/data";
import { BookOpen, Clock, ChevronRight, ShieldAlert } from "lucide-react";

export function EducationalSection() {
  const [selectedId, setSelectedId] = useState(EDUCATIONAL_TOPICS[0].id);
  const activeTopic = EDUCATIONAL_TOPICS.find((t) => t.id === selectedId) || EDUCATIONAL_TOPICS[0];

  return (
    <section id="educativo" className="py-16 sm:py-24 bg-[var(--bg-primary)] editorial-border-b w-full relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho Ético OAB - Sem CTA comercial */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bullet-indicator text-[#A6766A]" />
              <span className="font-heading uppercase text-xs tracking-widest text-[#A6766A] font-bold">
                03 / Esclarecimento à Sociedade (CFOAB)
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-semibold">
              Conteúdo Jurídico Educativo
            </h2>
          </div>
          <div className="max-w-md">
            <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
              Esclarecimentos técnicos de utilidade pública sobre dúvidas e problemas jurídicos recorrentes no âmbito do Direito do Trabalho e Direito Civil.
            </p>
            <span className="inline-flex items-center gap-1.5 text-[0.6875rem] font-heading text-[#A6766A] mt-2">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Espaço estritamente pedagógico • Provimento 205/2021 do CFOAB</span>
            </span>
          </div>
        </div>

        {/* Layout Interativo: Lista de Artigos à Esquerda + Conteúdo Completo à Direita */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Navegador de Artigos (5 colunas) */}
          <div className="lg:col-span-5 space-y-3">
            {EDUCATIONAL_TOPICS.map((topic) => {
              const isSelected = topic.id === selectedId;
              return (
                <button
                  key={topic.id}
                  type="button"
                  onClick={() => setSelectedId(topic.id)}
                  className={`w-full p-4 sm:p-5 rounded-xl border text-left transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? "bg-[var(--bg-secondary)] border-[#A6766A] shadow-xs"
                      : "bg-[var(--bg-card)] border-[var(--border-subtle)]/30 hover:border-[#A6766A]/60"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-heading">
                      <span className="text-[#A6766A] font-bold">{topic.number}.</span>
                      <span className="text-[var(--text-muted)] uppercase tracking-wider">{topic.category}</span>
                    </div>
                    <h3 className="font-heading text-sm sm:text-base font-bold text-[var(--text-main)] leading-snug line-clamp-2">
                      {topic.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[0.6875rem] text-[var(--text-muted)] font-body">
                      <Clock className="w-3 h-3 text-[#A6766A]" />
                      <span>{topic.readTime}</span>
                    </div>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 flex-shrink-0 transition-transform ${
                      isSelected ? "text-[#A6766A] translate-x-1" : "text-[var(--border-subtle)]"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Painel de Leitura Pedagógica (7 colunas) */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 shadow-xs space-y-6">
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)]/25 pb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-secondary)] text-[#A6766A] font-heading text-xs font-bold uppercase tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>{activeTopic.category}</span>
              </span>
              <span className="text-xs font-body text-[var(--text-muted)] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#A6766A]" />
                {activeTopic.readTime}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[var(--text-main)] leading-tight">
                {activeTopic.title}
              </h3>
              <p className="font-body text-xs sm:text-sm text-[#A6766A] italic">
                {activeTopic.summary}
              </p>
            </div>

            <div className="space-y-4 font-body text-sm sm:text-base text-[var(--text-muted)] leading-relaxed border-t border-[var(--border-subtle)]/20 pt-4">
              {activeTopic.content.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-6 border-t border-[var(--border-subtle)]/25 bg-[var(--bg-secondary)]/50 -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-4 sm:p-6 rounded-b-2xl">
              <p className="text-[0.6875rem] font-body text-[var(--text-muted)] flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#A6766A] flex-shrink-0" />
                <span>{activeTopic.oabDisclaimer}</span>
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}