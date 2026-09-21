"use client";

import { useState, useRef } from "react";
import { EDUCATIONAL_TOPICS, OFFICE_INFO } from "@/lib/data";
import { BookOpen, Clock, ChevronRight, ShieldAlert, MessageSquare, ChevronDown } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function EducationalSection() {
  const [selectedId, setSelectedId] = useState(EDUCATIONAL_TOPICS[0].id);
  const activeTopic = EDUCATIONAL_TOPICS.find((t) => t.id === selectedId) || EDUCATIONAL_TOPICS[0];

  // Estado para acordeão mobile condensado
  const [expandedMobileTopicId, setExpandedMobileTopicId] = useState<string | null>(null);

  const toggleMobileTopic = (id: string) => {
    setExpandedMobileTopicId((prev) => (prev === id ? null : id));
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  };

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Cabeçalho com animação bidirecional
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

      // 2. Coluna esquerda
      if (leftColRef.current) {
        gsap.fromTo(
          leftColRef.current,
          { x: -35, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: leftColRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      // 3. Coluna direita
      if (rightColRef.current) {
        gsap.fromTo(
          rightColRef.current,
          { x: 35, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: rightColRef.current,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  const getWhatsAppMessageUrl = (topicTitle: string) => {
    const text = `Olá, Dra. Sloane! Li o conteúdo educativo sobre "${topicTitle}" no seu site e gostaria de saber mais a respeito do meu caso.`;
    return `https://wa.me/5517981217474?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="educativo"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-primary)] editorial-border-b w-full relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Ético OAB */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16 will-change-transform"
        >
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

        {/* ========================================================================= */}
        {/* MODELO DESKTOP (MD+): LISTA LATERAL + PAINEL DE LEITURA COM BOTÃO CTA     */}
        {/* ========================================================================= */}
        <div className="hidden md:grid lg:grid-cols-12 gap-8 items-start">
          {/* Navegador de Artigos à Esquerda */}
          <div ref={leftColRef} className="lg:col-span-5 space-y-3 will-change-transform">
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
                  <div className="space-y-1 min-w-0 flex-1 pr-3">
                    <div className="flex items-center gap-2 text-xs font-heading">
                      <span className="text-[#A6766A] font-bold">{topic.number}.</span>
                      <span className="text-[var(--text-muted)] uppercase tracking-wider">{topic.category}</span>
                    </div>
                    <h3 className="font-heading text-sm sm:text-base font-bold text-[var(--text-main)] leading-snug break-words">
                      {topic.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[0.6875rem] text-[var(--text-muted)] font-body pt-0.5">
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

          {/* Painel de Leitura Pedagógica com Botão Personalizado de WhatsApp */}
          <div ref={rightColRef} className="lg:col-span-7 p-6 sm:p-10 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/40 shadow-xs space-y-6 will-change-transform">
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

            {/* BOTÃO PERSONALIZADO NO FINAL DE CADA CONTEÚDO (Item 6) */}
            <div className="pt-5 border-t border-[var(--border-subtle)]/30 flex flex-col sm:flex-row items-center justify-between gap-4 bg-[var(--bg-secondary)]/40 p-4 rounded-xl">
              <div className="text-left">
                <span className="font-heading text-xs font-bold text-[var(--text-main)] block">
                  Ficou com alguma dúvida específica sobre este tema?
                </span>
                <span className="text-[0.6875rem] font-body text-[var(--text-muted)]">
                  Converse diretamente com a Dra. Sloane Ferreira de Andrade.
                </span>
              </div>

              <a
                href={getWhatsAppMessageUrl(activeTopic.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-[#25D366] hover:bg-[#20ba59] hover:scale-105 text-white py-2.5 px-5 text-xs font-semibold gap-2 shadow-sm whitespace-nowrap transition-all flex items-center flex-shrink-0 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Gostaria de saber mais</span>
              </a>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)]/25 bg-[var(--bg-secondary)]/30 -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-4 sm:p-6 rounded-b-2xl">
              <p className="text-[0.6875rem] font-body text-[var(--text-muted)] flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#A6766A] flex-shrink-0" />
                <span>{activeTopic.oabDisclaimer}</span>
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MODELO MOBILE (< MD): FORMATO RESUMIDO SEM CORTAR TÍTULOS E INFORMAÇÕES   */}
        {/* ========================================================================= */}
        <div className="block md:hidden space-y-3">
          {EDUCATIONAL_TOPICS.map((topic) => {
            const isExpanded = expandedMobileTopicId === topic.id;

            return (
              <div
                key={topic.id}
                className={`rounded-2xl border transition-all duration-300 bg-[var(--bg-card)] overflow-hidden ${
                  isExpanded ? "border-[#A6766A] shadow-md" : "border-[var(--border-subtle)]/35 shadow-2xs"
                }`}
              >
                {/* Linha Resumida Sem Truncate: Título completo com quebra natural */}
                <div
                  onClick={() => toggleMobileTopic(topic.id)}
                  className="p-3.5 flex items-start justify-between gap-3 cursor-pointer select-none"
                >
                  <div className="flex items-start gap-2.5 min-w-0 flex-1">
                    <span className="font-heading text-sm font-bold text-[#A6766A] flex-shrink-0 mt-0.5">
                      {topic.number}
                    </span>
                    <div className="min-w-0 flex-1">
                      <span className="text-[0.6875rem] font-heading uppercase tracking-wider text-[#A6766A] block break-words">
                        {topic.category}
                      </span>
                      <h3 className="font-heading text-sm font-bold text-[var(--text-main)] leading-snug break-words">
                        {topic.title}
                      </h3>
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

                {/* Conteúdo Expansível no Mobile */}
                {isExpanded && (
                  <div className="px-4 pb-4 pt-1 border-t border-[var(--border-subtle)]/25 space-y-3 animate-fade-in-down">
                    <p className="font-body text-xs text-[#A6766A] italic pt-2">
                      {topic.summary}
                    </p>

                    <div className="space-y-2 text-xs font-body text-[var(--text-muted)] leading-relaxed">
                      {topic.content.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>

                    {/* Botão WhatsApp personalizado no mobile */}
                    <div className="pt-3 border-t border-[var(--border-subtle)]/20 flex flex-col gap-2">
                      <a
                        href={getWhatsAppMessageUrl(topic.title)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pill bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 text-xs font-semibold gap-2 shadow-xs justify-center flex items-center"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-white" />
                        <span>Gostaria de saber mais</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}