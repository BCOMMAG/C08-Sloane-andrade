"use client";

import { OFFICE_INFO } from "@/lib/data";
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight, ShieldCheck } from "lucide-react";

export function ContactSection() {
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.7497746401666!2d-48.3128!3d-20.3181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bb8b663ea595e7%3A0xb36ef274d6f46146!2sR.%2014%20B%2C%201077%20-%20Joaquim%20Pereira%20Lelis%2C%20Gua%C3%ADra%20-%20SP%2C%2014790-000!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr";

  return (
    <section id="contato" className="py-16 sm:py-24 bg-[var(--bg-primary)] editorial-border-b w-full relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bullet-indicator text-[#A6766A]" />
              <span className="font-heading uppercase text-xs tracking-widest text-[#A6766A] font-bold">
                07 / Canais Oficiais de Atendimento
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-semibold">
              Contato & Localização
            </h2>
          </div>
          <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
            Sede física em Guaíra/SP com estrutura completa para atendimento presencial e suporte online para clientes em todo o território nacional.
          </p>
        </div>

        {/* Grid: Dados à Esquerda + Google Maps à Direita */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Coluna 1: Informações e Ações (5 colunas) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              
              {/* Card WhatsApp */}
              <div className="p-5 rounded-2xl bg-[var(--bg-secondary)]/70 border border-[var(--border-subtle)]/40 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#A6766A] text-white flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading text-xs uppercase tracking-wider text-[#A6766A] font-bold block mb-0.5">
                    WhatsApp & Ligação Direta
                  </span>
                  <p className="font-heading text-lg font-bold text-[var(--text-main)]">
                    {OFFICE_INFO.phone}
                  </p>
                  <p className="text-xs font-body text-[var(--text-muted)] mt-1">
                    Atendimento ágil para esclarecimento inicial e agendamento de consultas.
                  </p>
                </div>
              </div>

              {/* Card Endereço */}
              <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[#A6766A] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading text-xs uppercase tracking-wider text-[#A6766A] font-bold block mb-0.5">
                    Endereço da Sede
                  </span>
                  <p className="font-body text-sm font-semibold text-[var(--text-main)]">
                    {OFFICE_INFO.address}
                  </p>
                  <p className="text-xs font-body text-[var(--text-muted)] mt-1">
                    Guaíra - São Paulo • CEP 14790-000
                  </p>
                </div>
              </div>

              {/* Card E-mail */}
              <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[#A6766A] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading text-xs uppercase tracking-wider text-[#A6766A] font-bold block mb-0.5">
                    E-mail Institucional
                  </span>
                  <p className="font-body text-sm font-semibold text-[var(--text-main)] break-all">
                    {OFFICE_INFO.email}
                  </p>
                </div>
              </div>

              {/* Card Horário */}
              <div className="p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--bg-secondary)] text-[#A6766A] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading text-xs uppercase tracking-wider text-[#A6766A] font-bold block mb-0.5">
                    Horário de Atendimento
                  </span>
                  <p className="font-body text-xs sm:text-sm text-[var(--text-main)]">
                    {OFFICE_INFO.workingHours.weekdays}
                  </p>
                  <p className="font-body text-xs text-[var(--text-muted)] mt-0.5">
                    {OFFICE_INFO.workingHours.weekends}
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-2">
              <a
                href={OFFICE_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full btn-pill bg-[#A6766A] hover:bg-[#8d5e53] text-white py-3.5 gap-2 shadow-md text-sm sm:text-base cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Iniciar Conversa no WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Coluna 2: Mapa Interativo do Google (7 colunas) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative w-full h-[380px] sm:h-[480px] lg:h-full min-h-[380px] rounded-2xl overflow-hidden border border-[var(--border-subtle)]/40 shadow-xs">
              <iframe
                title="Localização do Escritório Sloane Andrade Advocacia em Guaíra SP"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[25%] contrast-[1.05]"
              />
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-white/95 dark:bg-[#151A1F]/95 backdrop-blur-md border border-[var(--border-subtle)]/30 text-xs shadow-md">
                <span className="font-heading font-bold text-[var(--text-main)] block">
                  Sloane Andrade Advocacia
                </span>
                <span className="text-[var(--text-muted)] font-body">
                  R. 14 B, 01077 - Guaíra/SP
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}