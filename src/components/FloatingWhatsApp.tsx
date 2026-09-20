"use client";

import { OFFICE_INFO } from "@/lib/data";
import { MessageSquare } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group flex items-center">
      <span className="hidden sm:inline-block mr-3 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)] text-[var(--text-main)] text-xs font-heading border border-[var(--border-subtle)]/40 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Falar com a Dra. Sloane
      </span>

      <a
        href={OFFICE_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atendimento direto via WhatsApp com a Dra. Sloane Andrade"
        className="w-14 h-14 rounded-full bg-[#A6766A] hover:bg-[#8d5e53] text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 pulse-whatsapp relative"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-[#D4A396] border-2 border-white dark:border-[#0F1215]" />
      </a>
    </div>
  );
}