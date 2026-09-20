"use client";

import Image from "next/image";
import Link from "next/link";
import { OFFICE_INFO, LAWYER_PROFILE } from "@/lib/data";
import { MessageSquare, ChevronRight, ShieldCheck, Award, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] w-full flex flex-col justify-between pt-24 pb-8 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-12 overflow-hidden editorial-border-b bg-[#0F1215] text-white"
    >
      {/* Background Decorativo com Overlay e Gradiente Rose Gold */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,163,150,0.22),rgba(255,255,255,0))]" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#D4A396]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-[#A6766A]/15 rounded-full blur-3xl" />
        
        {/* Padrão geométrico suave no fundo */}
        <div className="absolute inset-0 opacity-[0.04]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-center my-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Coluna Texto (Esquerda / 7 colunas) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            
            {/* Badge de Autoridade */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4A396]/40 bg-white/5 backdrop-blur-md text-xs sm:text-sm font-heading tracking-wide text-[#D4A396] w-fit">
              <ShieldCheck className="w-4 h-4 text-[#D4A396]" />
              <span>Dra. Sloane Ferreira de Andrade • {OFFICE_INFO.oab}</span>
            </div>

            {/* Headline Principal */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.12] tracking-tight text-white font-semibold">
              Segurança jurídica e atuação{" "}
              <span className="text-[#D4A396] relative">
                estratégica
              </span>{" "}
              na defesa dos seus direitos e do seu trabalho.
            </h1>

            {/* Subtítulo Enxuto e Claro */}
            <p className="font-body text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl leading-relaxed">
              Advocacia artesanal e humanizada com mais de 10 anos de experiência prática em Direito do Trabalho, Previdenciário/Acidentário, Família e Cível. Atendimento direto com a advogada titular em Guaíra/SP e região.
            </p>

            {/* CTAs de Alta Conversão */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill bg-[#A6766A] hover:bg-[#8d5e53] text-white border border-[#D4A396]/40 gap-2.5 py-3 sm:py-3.5 px-6 sm:px-7 text-sm sm:text-base font-semibold shadow-lg group transition-all text-center justify-center flex items-center cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#F4EAE6] group-hover:scale-110 transition-transform" />
                <span>Conversar com a Advogada</span>
              </a>

              <Link
                href="#sobre"
                className="btn-pill border border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white gap-2 py-3 sm:py-3.5 px-6 text-sm sm:text-base font-semibold group transition-all text-center justify-center flex items-center"
              >
                <span>Conhecer a Dra. Sloane</span>
                <ChevronRight className="w-4 h-4 text-[#D4A396] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Badges Rápidos de Credibilidade */}
            <div className="pt-4 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm font-heading text-gray-300">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#D4A396] flex-shrink-0" />
                <span>MBA em Direito do Trabalho & Previdenciário</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4A396] flex-shrink-0" />
                <span>Atendimento Presencial e Online</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4A396] flex-shrink-0" />
                <span>Rigor Ético CFOAB</span>
              </div>
            </div>
          </div>

          {/* Coluna Imagem Profissional (Direita / 5 colunas) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-2xl overflow-hidden border border-[#D4A396]/35 shadow-2xl group">
              <Image
                src={LAWYER_PROFILE.photo}
                alt={LAWYER_PROFILE.name}
                fill
                priority
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 40vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              
              {/* Card Flutuante Inferior com Dados Oficiais */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-[#D4A396]/30 text-white">
                <p className="font-heading text-base font-semibold leading-tight text-[#F4EAE6]">
                  {LAWYER_PROFILE.name}
                </p>
                <p className="text-xs text-[#D4A396] font-heading mt-0.5">
                  {LAWYER_PROFILE.role} • {LAWYER_PROFILE.oab}
                </p>
                <p className="text-[0.6875rem] text-gray-300 mt-1 leading-snug">
                  Graduada UNIFEB • MBA em Direito do Trabalho e Previdenciário (Legale)
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}