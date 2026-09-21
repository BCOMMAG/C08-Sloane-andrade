"use client";

import { useState, useRef } from "react";
import { FAQ_DATA, OFFICE_INFO } from "@/lib/data";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export function FaqSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const bottomCardRef = useRef<HTMLDivElement>(null);

  const [activeTab, setActiveTab] = useState<string>("trabalhista");
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "faq-t1": true,
    "faq-c1": true,
    "faq-p1": true,
  });

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

      // 2. Acordeões em cascata bidirecional
      if (listRef.current) {
        const items = listRef.current.querySelectorAll(".faq-accordion-item");
        if (items.length > 0) {
          gsap.fromTo(
            items,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: listRef.current,
                start: "top 85%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      }

      // 3. Card inferior
      if (bottomCardRef.current) {
        gsap.fromTo(
          bottomCardRef.current,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bottomCardRef.current,
              start: "top 90%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    },
    { scope: sectionRef, dependencies: [activeTab] }
  );

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  };

  const handleTabChange = (catId: string) => {
    setActiveTab(catId);
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);
  };

  const currentCategory = FAQ_DATA.find((c) => c.id === activeTab) || FAQ_DATA[0];

  const getSpecificQuestionUrl = (question: string) => {
    const text = `Olá, Dra. Sloane! Estive lendo a dúvida "${question}" no seu site, mas ainda fiquei com dúvidas sobre a minha situação. Poderia me orientar?`;
    return `https://wa.me/5517981217474?text=${encodeURIComponent(text)}`;
  };

  const getGeneralFaqUrl = () => {
    const text = `Olá, Dra. Sloane! Minha dúvida não está listada nas perguntas frequentes do site. Gostaria de uma orientação jurídica para o meu caso.`;
    return `https://wa.me/5517981217474?text=${encodeURIComponent(text)}`;
  };

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-16 sm:py-24 bg-[var(--bg-secondary)]/30 editorial-border-b w-full relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[var(--border-subtle)]/30 gap-6 mb-12 sm:mb-16 will-change-transform"
        >
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

        {/* Abas de Categorias */}
        <div className="flex flex-wrap gap-2.5 mb-8 pb-4 border-b border-[var(--border-subtle)]/25">
          {FAQ_DATA.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleTabChange(cat.id)}
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
        <div ref={listRef} className="max-w-4xl space-y-3.5">
          {currentCategory.items.map((item) => {
            const isOpen = !!openItems[item.id];
            return (
              <div
                key={item.id}
                className="faq-accordion-item rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 overflow-hidden transition-all duration-200 will-change-transform shadow-2xs hover:border-[#A6766A]/60"
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
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-xs sm:text-sm font-body text-[var(--text-muted)] leading-relaxed border-t border-[var(--border-subtle)]/20 pt-4 space-y-4">
                    <p>{item.answer}</p>

                    {/* Botão Contextual por Pergunta */}
                    <div className="pt-2 flex items-center justify-between border-t border-[var(--border-subtle)]/15">
                      <span className="text-[0.6875rem] text-[var(--text-muted)]">
                        Precisa de análise para o seu caso particular?
                      </span>
                      <a
                        href={getSpecificQuestionUrl(item.question)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-[#A6766A] hover:text-[#8d5e53] transition-colors"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                        <span>Tirar dúvida sobre este ponto</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Card de Encerramento com Botão Principal "Sua dúvida não está aqui?" */}
        <div
          ref={bottomCardRef}
          className="mt-12 p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-subtle)]/35 max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 will-change-transform shadow-sm"
        >
          <div className="flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-[#A6766A] flex-shrink-0" />
            <div>
              <h4 className="font-heading text-sm sm:text-base font-bold text-[var(--text-main)]">
                Sua dúvida não está aqui?
              </h4>
              <p className="text-xs sm:text-sm font-body text-[var(--text-muted)]">
                Converse diretamente com a Dra. Sloane Andrade para uma orientação jurídica individualizada.
              </p>
            </div>
          </div>
          <a
            href={getGeneralFaqUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill bg-[#25D366] hover:bg-[#20ba59] hover:scale-105 text-white text-xs sm:text-sm px-5 py-3 gap-2 whitespace-nowrap shadow-sm hover-lift transition-all flex items-center flex-shrink-0 cursor-pointer font-semibold"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span>Falar com a Advogada</span>
          </a>
        </div>
      </div>
    </section>
  );
}