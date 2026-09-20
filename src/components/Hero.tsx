"use client";

import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO } from "@/lib/data";
import { MessageSquare, ChevronRight, ShieldCheck, Award, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] w-full flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-12 overflow-hidden editorial-border-b text-white"
    >
      {/* Imagem de Fundo com troca Desktop / Mobile + Overlays Escuros de Alta Legibilidade */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        
        {/* Mobile: header_mobile.jpeg */}
        <div className="relative w-full h-full block md:hidden">
          <Image
            src="/header_mobile.jpeg"
            alt="Sloane Andrade Advocacia"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Desktop: header_desktop.jpeg com alta fidelidade */}
        <div className="relative w-full h-full hidden md:block">
          <Image
            src="/header_desktop.jpeg"
            alt="Sloane Andrade Advocacia"
            fill
            priority
            quality={95}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>

        {/* Gradientes e Overlays: no mobile, mantém contraste escuro total; no desktop, mantém a imagem 100% nítida, iluminada e sem blur */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/55 md:from-black/80 md:via-black/30 md:via-50% md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/65 md:from-black/30 md:via-transparent md:to-transparent" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#D4A396]/15 rounded-full blur-3xl md:hidden" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between">
        
        {/* Topo do Hero: Badge + Título Principal */}
        <div className="pt-2 sm:pt-4 lg:pt-4 max-w-3xl animate-fade-in-down">
          
          {/* Badge de Autoridade */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4A396]/50 bg-black/40 backdrop-blur-md text-xs sm:text-sm font-heading tracking-wide text-[#D4A396] mb-5 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#D4A396]" />
            <span>Dra. Sloane Ferreira de Andrade • {OFFICE_INFO.oab}</span>
          </div>

          {/* Headline Principal */}
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.12] tracking-tight text-white font-semibold drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]">
            Segurança jurídica e atuação{" "}
            <span className="text-[#D4A396] relative">
              estratégica
            </span>{" "}
            na defesa dos seus direitos e do seu trabalho.
          </h1>
        </div>

        {/* Base do Hero: Subtítulo + Botões de Conversão + Destaques de Rodapé */}
        <div className="pb-2 sm:pb-4 lg:pb-4 max-w-3xl mt-6 sm:mt-8 lg:mt-auto animate-fade-in-up">
          
          <p className="font-body text-xs sm:text-base lg:text-lg text-gray-200 max-w-2xl leading-relaxed mb-6 font-normal drop-shadow-sm">
            Advocacia personalizada e humanizada com mais de 10 anos de experiência prática em Direito do Trabalho, Previdenciário/Acidentário, Família e Cível. Atendimento direto e dedicado com a titular em Guaíra/SP e região.
          </p>

          {/* CTAs com Hover e Microinterações */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1">
            <a
              href={OFFICE_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill bg-[#A6766A] hover:bg-[#8d5e53] hover:scale-[1.02] text-white border border-[#D4A396]/50 gap-2.5 py-3 sm:py-3.5 px-6 sm:px-7 text-xs sm:text-sm font-semibold tracking-normal shadow-xl group transition-all text-center justify-center flex items-center cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-[#F4EAE6] group-hover:scale-110 transition-transform" />
              <span>Conversar com a Advogada</span>
            </a>

            <Link
              href="#sobre"
              className="btn-pill border border-white/30 bg-white/10 hover:bg-white/20 hover:scale-[1.02] backdrop-blur-sm text-white gap-2 py-3 sm:py-3.5 px-6 text-xs sm:text-sm font-semibold tracking-normal group transition-all text-center justify-center flex items-center"
            >
              <span>Conhecer o Escritório</span>
              <ChevronRight className="w-4 h-4 text-[#D4A396] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Barra de Atributos de Prestígio */}
          <div className="hidden lg:flex items-center justify-between py-3 border-t border-white/20 mt-8 text-white/90 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="bullet-indicator text-[#D4A396]" />
              <span className="font-heading uppercase text-xs tracking-widest text-white/90 font-bold">
                Guaíra / SP • Advocacia Personalizada
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-heading text-white/80">
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#D4A396]" />
                MBA Legale
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D4A396]" />
                Atendimento Presencial e Online
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}