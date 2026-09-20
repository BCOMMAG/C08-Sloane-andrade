"use client";

import { useState } from "react";
import Image from "next/image";
import { LAWYER_PROFILE, OFFICE_INFO } from "@/lib/data";
import { GraduationCap, Award, Compass, Eye, ShieldCheck, CheckCircle2, MessageSquare, ChevronDown, Sparkles } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="sobre" className="py-16 sm:py-24 bg-[var(--bg-primary)] editorial-border-b w-full relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <RevealOnScroll direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bullet-indicator text-[#A6766A]" />
                <span className="font-heading uppercase text-xs tracking-widest text-[#A6766A] font-bold">
                  01 / Perfil Profissional & Trajetória
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-semibold">
                Sobre a Dra. Sloane Andrade
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
              Mais de uma década aliando dedicação dogmática, empatia acolhedora e compromisso irrestrito com a segurança jurídica de cada cliente.
            </p>
          </div>
        </RevealOnScroll>

        {/* Bloco 1: Foto Oficial em Destaque + Resumo de Alto Impacto com Expansor */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start mb-16">
          
          {/* Coluna da Foto Oficial da Dra. Sloane (5 colunas) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-start lg:sticky lg:top-28 self-start">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/5] sm:aspect-[3/4] rounded-3xl overflow-hidden border-2 border-[#D4A396]/80 shadow-2xl hover-lift group bg-[#151A1F]">
              <Image
                src={LAWYER_PROFILE.photo}
                alt={LAWYER_PROFILE.name}
                fill
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 90vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
              
              {/* Badge Inferior com Nome e OAB */}
              <div className="absolute bottom-5 left-5 right-5 text-white z-10 pointer-events-none">
                <span className="text-[0.6875rem] uppercase tracking-widest text-[#D4A396] font-heading font-semibold block mb-1">
                  Advogada Titular • {OFFICE_INFO.oab}
                </span>
                <p className="font-heading text-xl sm:text-2xl font-bold leading-tight text-white drop-shadow-sm">
                  {LAWYER_PROFILE.name}
                </p>
                <p className="text-xs text-gray-200 font-body mt-1 leading-relaxed">
                  Pós-graduada e MBA em Direito do Trabalho, Previdenciário e Acidentário
                </p>
              </div>
            </div>
          </div>

          {/* Coluna de Informações (7 colunas) */}
          <div className="lg:col-span-7 flex flex-col justify-start space-y-6">
            
            {/* Citação de Proposta de Valor */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-secondary)]/60 border border-[var(--border-subtle)]/30 border-l-4 border-l-[#A6766A] shadow-2xs">
              <p className="font-heading italic text-base sm:text-lg text-[var(--text-main)] leading-relaxed">
                &ldquo;{LAWYER_PROFILE.quote}&rdquo;
              </p>
            </div>

            {/* Resumo Breve e Objetivo de Alto Impacto (Sempre Visível) */}
            <div className="space-y-4">
              <h3 className="font-heading text-xl font-bold text-[var(--text-main)] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#A6766A]" />
                <span>Advocacia Personalizada, Próxima e Resolutiva</span>
              </h3>
              <p className="font-body text-sm sm:text-base text-[var(--text-main)] leading-relaxed font-normal">
                Com mais de 10 anos de prática forense consolidada em Guaíra/SP e comarcas paulistas, a Dra. Sloane Ferreira de Andrade conduz uma advocacia estratégica que prioriza o contato direto com a titular em todas as fases do processo. Cada caso é examinado sob medida para buscar a resposta mais rápida e segura, seja por via consensual extrajudicial ou contenciosa combativa.
              </p>

              {/* Destaques Rápidos */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/30 shadow-2xs">
                  <span className="font-heading text-xs font-bold text-[#A6766A] block">+10 Anos</span>
                  <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">Trajetória e solidez jurídica</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/30 shadow-2xs">
                  <span className="font-heading text-xs font-bold text-[#A6766A] block">100% Pessoal</span>
                  <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">Atendimento com a titular</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/30 shadow-2xs col-span-2 sm:col-span-1">
                  <span className="font-heading text-xs font-bold text-[#A6766A] block">MBA Especialista</span>
                  <span className="text-[0.6875rem] text-[var(--text-muted)] font-body">Trabalhista e Acidentário</span>
                </div>
              </div>
            </div>

            {/* Ações: Botão Saber Mais (Branco com borda marrom/terracota) + CTA WhatsApp */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="btn-pill bg-white dark:bg-[#151A1F] text-[#1A1D20] dark:text-white border-2 border-[#A6766A] hover:bg-[#A6766A] hover:text-white dark:hover:bg-[#A6766A] dark:hover:text-white gap-2 py-3 px-6 text-xs sm:text-sm font-semibold shadow-xs hover-lift transition-all cursor-pointer flex items-center"
                aria-expanded={isExpanded}
              >
                <span>{isExpanded ? "Ocultar detalhes curriculares" : "Saber mais sobre a Dra. Sloane"}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-[#A6766A] hover:bg-[#8d5e53] text-white gap-2 py-3 px-6 text-xs sm:text-sm shadow-xs hover-lift transition-all flex items-center"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Solicitar Atendimento Direto</span>
              </a>
            </div>

            {/* CONTEÚDO COMPLETO CONDICIONAL (Aparece somente quando o usuário clica em "Saber mais") */}
            {isExpanded && (
              <div className="space-y-6 pt-4 border-t border-[var(--border-subtle)]/30 animate-fade-in-down">
                
                {/* Biografia Detalhada */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/30 shadow-xs space-y-3">
                  <h4 className="font-heading text-base font-bold text-[var(--text-main)]">
                    Histórico Profissional Completo
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                    Graduada em Direito pelo Centro Universitário da Fundação Educacional de Barretos (UNIFEB) em 2016 e pós-graduada com MBA em Direito do Trabalho e Previdenciário com foco em acidente do trabalho pela Faculdade Legale. Possui cursos de extensão em Formação do Advogado Civilista e Super Formação do Advogado Trabalhista. Atuou previamente junto à Polícia Civil do Estado de São Paulo (Guaíra/SP) e consolidou uma advocacia autônoma combativa, humanizada e personalizada, com atendimento direto em âmbito consultivo e contencioso.
                  </p>
                </div>

                {/* Grid das 4 Formações e Especializações */}
                <div className="space-y-3">
                  <h4 className="font-heading text-base font-bold text-[var(--text-main)] flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[#A6766A]" />
                    <span>Formação Acadêmica & Especializações</span>
                  </h4>

                  <div className="grid sm:grid-cols-2 gap-3.5">
                    {LAWYER_PROFILE.academicSummary.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl border border-[var(--border-subtle)]/25 bg-[var(--bg-card)] shadow-2xs flex flex-col justify-between"
                      >
                        <div>
                          <span className="font-heading text-xs uppercase tracking-wider text-[#A6766A] font-semibold block mb-1">
                            {item.institution}
                          </span>
                          <h5 className="font-heading text-sm font-bold text-[var(--text-main)] leading-snug mb-1.5">
                            {item.course}
                          </h5>
                          <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed">
                            {item.details}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>

        {/* Bloco 2: Missão, Visão e Valores (Cards Estilo Editorial) */}
        <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-[var(--border-subtle)]/25">
          
          {/* Missão */}
          <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 shadow-xs flex flex-col justify-between hover-lift">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center text-[#A6766A] mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <span className="font-heading text-xs uppercase tracking-wider text-[#A6766A] font-bold block mb-1">
                Nossa Missão
              </span>
              <h3 className="font-heading text-lg font-bold text-[var(--text-main)] mb-3">
                Excelência Técnica & Empatia
              </h3>
              <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {OFFICE_INFO.pillars.mission}
              </p>
            </div>
          </div>

          {/* Visão */}
          <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 shadow-xs flex flex-col justify-between hover-lift">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center text-[#A6766A] mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <span className="font-heading text-xs uppercase tracking-wider text-[#A6766A] font-bold block mb-1">
                Nossa Visão
              </span>
              <h3 className="font-heading text-lg font-bold text-[var(--text-main)] mb-3">
                Referência em Advocacia Personalizada
              </h3>
              <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {OFFICE_INFO.pillars.vision}
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 shadow-xs flex flex-col justify-between hover-lift">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center text-[#A6766A] mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="font-heading text-xs uppercase tracking-wider text-[#A6766A] font-bold block mb-1">
                Nossos Valores
              </span>
              <h3 className="font-heading text-lg font-bold text-[var(--text-main)] mb-3">
                Compromissos Fundamentais
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm font-body text-[var(--text-muted)]">
                {OFFICE_INFO.pillars.values.map((val, vIdx) => (
                  <li key={vIdx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#A6766A] flex-shrink-0 mt-0.5" />
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}