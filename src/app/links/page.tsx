import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { OFFICE_INFO, LAWYER_PROFILE } from "@/lib/data";
import { MessageSquare, Globe, MapPin, ShieldCheck, ArrowUpRight, Scale } from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Canais Oficiais & Links | Sloane Andrade Advocacia",
  description:
    "Acesse rapidamente o WhatsApp oficial da Dra. Sloane Andrade, Instagram, localização da sede em Guaíra/SP e website institucional.",
  alternates: {
    canonical: "https://sloaneandrade-adv.vercel.app/links",
  },
};

export default function LinksPage() {
  const quickLinks = [
    {
      id: "whatsapp",
      title: "Atendimento WhatsApp Direto",
      subtitle: "(17) 98121-7474 • Fale diretamente com a advogada",
      href: OFFICE_INFO.whatsappUrl,
      icon: MessageSquare,
      highlight: true,
    },
    {
      id: "website",
      title: "Website Oficial Institucional",
      subtitle: "Conheça nossas áreas, artigos educativos e trajetória",
      href: "/",
      icon: Globe,
      highlight: false,
    },
    {
      id: "instagram",
      title: "Siga-nos no Instagram",
      subtitle: "@sloaneandradeadv • Conteúdo jurídico diário",
      href: OFFICE_INFO.social.instagram,
      icon: InstagramIcon,
      highlight: false,
    },
    {
      id: "maps",
      title: "Localização da Sede (Google Maps)",
      subtitle: "R. 14 B, 01077 - Joaquim Pereira Lelis, Guaíra/SP",
      href: "https://maps.google.com/?q=R.+14+B,+01077+-+Joaquim+Pereira+Lelis,+Gua%C3%ADra+-+SP",
      icon: MapPin,
      highlight: false,
    },
    {
      id: "linkedin",
      title: "Conectar no LinkedIn",
      subtitle: "Perfil profissional da Dra. Sloane Ferreira de Andrade",
      href: OFFICE_INFO.social.linkedin,
      icon: LinkedinIcon,
      highlight: false,
    },
  ];

  const specialties = [
    "Direito do Trabalho",
    "Acidentes de Trabalho & INSS",
    "Divórcio & Alimentos",
    "Inventário & Sucessões",
    "Contratos & Cobrança Cível",
    "Direito do Consumidor",
  ];

  return (
    <main className="min-h-[100dvh] lg:h-screen lg:max-h-screen lg:overflow-hidden w-screen max-w-full bg-[#FFFFFF] text-[#1A1D20]">
      {/* ===================== VERSÃO DESKTOP (Split Screen 50/50 - Sem Scroll) ===================== */}
      <div className="hidden lg:grid lg:grid-cols-2 h-full w-full overflow-hidden">
        
        {/* LADO ESQUERDO: Fundo Escuro com Logo e Identidade Visual */}
        <div className="relative bg-[#0F1215] text-white flex flex-col justify-between p-8 xl:p-12 h-full overflow-hidden border-r border-[#D4A396]/25">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-links-desktop" width="50" height="50" patternUnits="userSpaceOnUse">
                  <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#D4A396" strokeWidth="0.75" />
                  <circle cx="0" cy="0" r="1.5" fill="#D4A396" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-links-desktop)" />
            </svg>
          </div>

          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4A396]/40 bg-white/5 backdrop-blur-md text-xs font-heading tracking-wider text-[#D4A396]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4A396]" />
              <span>{OFFICE_INFO.oab} • OAB/SP</span>
            </div>
            <span className="text-[0.6875rem] font-heading uppercase tracking-widest text-[#D4A396]">
              Guaíra - SP
            </span>
          </div>

          <div className="relative z-10 my-auto py-4 flex flex-col items-center text-center w-full">
            <div className="relative w-[85%] max-w-[380px] h-32 xl:h-40 mb-4">
              <Image
                src="/logo_semfundo_escritabranca_paramodoescuro.png"
                alt="Sloane Andrade Advocacia"
                fill
                priority
                className="object-contain"
                sizes="380px"
              />
            </div>

            <div className="h-0.5 w-16 bg-[#D4A396]/40 mb-4" />

            <h1 className="font-heading text-xl xl:text-2xl font-semibold max-w-sm leading-snug text-white">
              {OFFICE_INFO.tagline}
            </h1>

            <p className="font-body text-xs xl:text-sm text-gray-300 max-w-xs mt-3 leading-relaxed">
              Atuação combativa e humanizada nas áreas Trabalhista, Previdenciária, Família e Cível.
            </p>
          </div>

          <div className="relative z-10 text-[0.6875rem] font-body text-gray-400 flex items-center justify-between border-t border-white/10 pt-3">
            <span>Sede: Guaíra/SP</span>
            <span>© {new Date().getFullYear()} Sloane Andrade Advocacia</span>
          </div>
        </div>

        {/* LADO DIREITO: Fundo Claro com Ações e Especialidades */}
        <div className="bg-[#FFFFFF] flex flex-col justify-between p-6 xl:p-10 h-full overflow-hidden">
          <div className="max-w-md mx-auto w-full flex flex-col justify-center h-full my-auto space-y-3 xl:space-y-4">
            
            <div className="flex flex-col items-center text-center">
              <div className="relative w-[75%] max-w-[320px] h-20 xl:h-24 mb-1">
                <Image
                  src="/logo_semfundo_escritapreta_paramodoclaro.png"
                  alt="Sloane Andrade Advocacia"
                  fill
                  priority
                  className="object-contain object-center"
                  sizes="320px"
                />
              </div>
              <span className="font-heading uppercase text-[0.6875rem] tracking-widest text-[#A6766A] block mb-0.5 font-bold">
                Acesso Rápido
              </span>
              <h2 className="font-heading text-2xl xl:text-3xl font-bold text-[#1A1D20]">
                Canais de Atendimento
              </h2>
              <p className="font-body text-xs text-gray-500 mt-0.5">
                Escolha o canal desejado para se comunicar diretamente conosco.
              </p>
            </div>

            <div className="space-y-2">
              {quickLinks.map((item) => {
                const Icon = item.icon;
                const isInternal = item.href.startsWith("/");
                const buttonClasses = `w-full p-3 xl:p-3.5 rounded-xl flex items-center justify-between group transition-all duration-300 border ${
                  item.highlight
                    ? "bg-[#A6766A] text-white border-[#A6766A] hover:bg-[#8d5e53] shadow-sm hover:shadow-md"
                    : "bg-[#FFFFFF] text-[#1A1D20] border-[#D4A396]/35 hover:border-[#A6766A] shadow-2xs hover:shadow-xs"
                }`;

                const content = (
                  <>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          item.highlight ? "bg-white/15 text-white" : "bg-[#F4EAE6] text-[#A6766A]"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <span className="font-heading text-sm font-bold block leading-snug">
                          {item.title}
                        </span>
                        <span
                          className={`font-body text-[0.6875rem] block ${
                            item.highlight ? "text-white/85" : "text-gray-500"
                          }`}
                        >
                          {item.subtitle}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight
                      className={`w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        item.highlight ? "text-white/85" : "text-[#A6766A]"
                      }`}
                    />
                  </>
                );

                return isInternal ? (
                  <Link key={item.id} href={item.href} className={buttonClasses}>
                    {content}
                  </Link>
                ) : (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses}
                  >
                    {content}
                  </a>
                );
              })}
            </div>

            <div className="p-3.5 rounded-xl border border-[#D4A396]/30 bg-[#F4EAE6]/50">
              <div className="flex items-center gap-1.5 text-[0.6875rem] uppercase tracking-wider font-heading text-[#A6766A] font-bold mb-1.5">
                <Scale className="w-3.5 h-3.5" />
                <span>Especialidades Jurídicas</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {specialties.map((spec, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 py-0.5 rounded-md text-[0.6875rem] font-body bg-white text-gray-700 border border-[#D4A396]/20"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

          </div>

          <div className="text-center text-[0.6875rem] font-body text-gray-500 pt-2 border-t border-gray-200">
            {OFFICE_INFO.address}
          </div>
        </div>
      </div>

      {/* ===================== VERSÃO MOBILE (Bio Instagram Otimizada) ===================== */}
      <div className="lg:hidden relative flex flex-col justify-between min-h-[100dvh] w-full px-5 py-6 overflow-y-auto bg-[#FFFFFF]">
        <div className="relative z-10 flex flex-col items-center text-center pt-8 pb-3">
          <div className="relative w-[80vw] max-w-[320px] h-20 mb-3">
            <Image
              src="/logo_semfundo_escritapreta_paramodoclaro.png"
              alt="Sloane Andrade Advocacia"
              fill
              priority
              className="object-contain object-center"
              sizes="320px"
            />
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#D4A396]/40 bg-[#F4EAE6] text-[0.6875rem] font-heading text-[#A6766A] font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#A6766A]" />
            <span>{LAWYER_PROFILE.name} • {OFFICE_INFO.oab}</span>
          </div>
        </div>

        <div className="relative z-10 w-full max-w-sm mx-auto space-y-2.5 my-auto py-2">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            const isInternal = item.href.startsWith("/");
            const buttonClasses = `w-full py-2.5 px-3.5 rounded-xl flex items-center justify-between group transition-all duration-300 border ${
              item.highlight
                ? "bg-[#A6766A] text-white border-[#A6766A] shadow-sm"
                : "bg-white text-[#1A1D20] border-[#D4A396]/40 shadow-2xs"
            }`;

            const content = (
              <>
                <div className="flex items-center gap-3 text-left">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      item.highlight ? "bg-white/20 text-white" : "bg-[#F4EAE6] text-[#A6766A]"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="font-heading text-xs font-bold block leading-tight">
                      {item.title}
                    </span>
                    <span
                      className={`font-body text-[0.5625rem] block leading-tight ${
                        item.highlight ? "text-white/85" : "text-gray-500"
                      }`}
                    >
                      {item.subtitle}
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  className={`w-3.5 h-3.5 flex-shrink-0 ${
                    item.highlight ? "text-white/85" : "text-[#A6766A]"
                  }`}
                />
              </>
            );

            return isInternal ? (
              <Link key={item.id} href={item.href} className={buttonClasses}>
                {content}
              </Link>
            ) : (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses}
              >
                {content}
              </a>
            );
          })}
        </div>

        <div className="relative z-10 text-center space-y-1.5 pt-3 border-t border-gray-100">
          <div className="w-full max-w-xs mx-auto py-1 px-2 rounded-lg bg-[#F4EAE6]/70 border border-[#D4A396]/20">
            <span className="font-body text-[0.625rem] text-gray-700 block truncate">
              Trabalhista • Acidentário • Divórcio • Inventário • Cível
            </span>
          </div>
          <p className="font-body text-[0.625rem] text-gray-500">
            © {new Date().getFullYear()} Sloane Andrade Advocacia • Guaíra/SP
          </p>
        </div>
      </div>
    </main>
  );
}