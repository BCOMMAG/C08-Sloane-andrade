"use client";

import { useState } from "react";
import { FAQ_DATA, OFFICE_INFO } from "@/lib/data";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function FaqSection() {
  const [activeTab, setActiveTab] = useState<string>("trabalhista");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "faq-t1": true,
    "faq-c1": true,
    "faq-p1": true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const currentCategory = FAQ_DATA.find((c) => c.id === activeTab) || FAQ_DATA[0];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[var(--bg-secondary)]/30 editorial-border-b w-full relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <RevealOnScroll direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="bullet-indicator text-[#A6766A]" />
                <span className="font-heading uppercase text-xs tracking-widest text-[#A6766A] font-bold">
                  06 / Dúvidas Frequentes
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-[var(--text-main)] font-semibold">
                Perguntas e Respostas
              </h2>
            </div>
            <p className="font-body text-sm sm:text-base text-[var(--text-muted)] max-w-xl leading-relaxed">
              Respostas diretas e esclarecedoras para as principais questões que recebemos diariamente no escritório.
            </p>
          </div>
        </RevealOnScroll>

        {/* Abas de Categorias */}
        <div className="flex flex-wrap gap-2.5 mb-8 pb-4 border-b border-[var(--border-subtle)]/25">
          {FAQ_DATA.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-heading font-semibold transition-all cursor-pointer ${
                activeTab === cat.id
                  ? "bg-[#A6766A] text-white shadow-xs"
                  : "bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border-subtle)]/30 hover:border-[#A6766A]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Acordeão de Perguntas */}
        <div className="max-w-4xl space-y-3.5">
          {currentCategory.items.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[var(--bg-secondary)]/40 transition-colors"
                >
                  <span className="font-heading text-base sm:text-lg font-bold text-[var(--text-main)] leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[var(--bg-secondary)] flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#A6766A]" : "text-[var(--text-muted)]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm font-body text-[var(--text-muted)] leading-relaxed border-t border-[var(--border-subtle)]/20 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Chamada para Dúvida Específica */}
        <div className="mt-12 p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[#A6766A] flex-shrink-0" />
            <span className="text-xs sm:text-sm font-body text-[var(--text-main)]">
              Sua dúvida não está listada acima? Converse diretamente com a Dra. Sloane Andrade.
            </span>
          </div>
          <a
            href={OFFICE_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill bg-white dark:bg-[#151A1F] text-[#1A1D20] dark:text-white border-2 border-[#A6766A] hover:bg-[#A6766A] hover:text-white dark:hover:bg-[#A6766A] dark:hover:text-white text-xs px-5 py-2.5 gap-2 whitespace-nowrap hover-lift transition-all"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#A6766A]" />
            <span>Tirar Dúvida</span>
          </a>
        </div>

      </div>
    </section>
  );
}