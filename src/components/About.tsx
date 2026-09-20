"use client";

import Image from "next/image";
import { LAWYER_PROFILE, OFFICE_INFO } from "@/lib/data";
import { GraduationCap, Award, Compass, Eye, ShieldCheck, CheckCircle2, MessageSquare } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function About() {
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
              Mais de uma década aliando dedicação dogmática, empatia acolhedora e compromisso irrestrito com a segurança patrimonial e familiar de cada cliente.
            </p>
          </div>
        </RevealOnScroll>

        {/* Bloco 1: Perfil, Citação e Foto */}
        <div className="grid lg:grid-cols-12 gap-10 items-center mb-16">
          
          <div className="lg:col-span-5 flex justify-center">
            <RevealOnScroll direction="none">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-[var(--border-subtle)]/40 shadow-xl hover-lift">
              <Image
                src={LAWYER_PROFILE.photo}
                alt={LAWYER_PROFILE.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs uppercase tracking-widest text-[#D4A396] font-heading font-semibold block mb-1">
                  Advogada Titular
                </span>
                <p className="font-heading text-lg font-bold leading-tight">
                  {LAWYER_PROFILE.name}
                </p>
                <p className="text-xs text-gray-300 font-body">
                  {LAWYER_PROFILE.oab} • OAB/SP
                </p>
              </div>
            </div>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="p-6 rounded-2xl bg-[var(--bg-secondary)]/60 border border-[var(--border-subtle)]/30 border-l-4 border-l-[#A6766A]">
              <p className="font-heading italic text-base sm:text-lg text-[var(--text-main)] leading-relaxed">
                &ldquo;{LAWYER_PROFILE.quote}&rdquo;
              </p>
            </div>

            <p className="font-body text-sm sm:text-base text-[var(--text-muted)] leading-relaxed">
              {LAWYER_PROFILE.bio}
            </p>

            {/* Linha do Tempo / Formação Acadêmica */}
            <div className="space-y-4 pt-2">
              <h3 className="font-heading text-lg font-bold text-[var(--text-main)] flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#A6766A]" />
                <span>Formação Acadêmica & Especializações</span>
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                {LAWYER_PROFILE.academicSummary.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-[var(--border-subtle)]/25 bg-[var(--bg-card)] shadow-2xs flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-heading text-xs uppercase tracking-wider text-[#A6766A] font-semibold block mb-1">
                        {item.institution}
                      </span>
                      <h4 className="font-heading text-sm font-bold text-[var(--text-main)] leading-snug mb-1.5">
                        {item.course}
                      </h4>
                      <p className="font-body text-xs text-[var(--text-muted)] leading-relaxed">
                        {item.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-[#A6766A] hover:bg-[#8d5e53] text-white gap-2 shadow-xs text-sm w-fit"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Solicitar Atendimento Direto</span>
              </a>
            </div>

          </div>
        </div>

        {/* Bloco 2: Missão, Visão e Valores (Cards Estilo Stacking / Editorial) */}
        <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-[var(--border-subtle)]/25">
          
          {/* Missão */}
          <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 shadow-xs flex flex-col justify-between">
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
          <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[var(--bg-secondary)] flex items-center justify-center text-[#A6766A] mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <span className="font-heading text-xs uppercase tracking-wider text-[#A6766A] font-bold block mb-1">
                Nossa Visão
              </span>
              <h3 className="font-heading text-lg font-bold text-[var(--text-main)] mb-3">
                Referência em Advocacia Artesanal
              </h3>
              <p className="font-body text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                {OFFICE_INFO.pillars.vision}
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 shadow-xs flex flex-col justify-between">
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