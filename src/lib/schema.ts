import { OFFICE_INFO, LAWYER_PROFILE } from "./data";

export function getLegalServiceSchema() {
  const siteUrl = "https://sloaneandrade.pages.dev";
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${siteUrl}/#legalservice`,
    name: OFFICE_INFO.name,
    alternateName: "Sloane Andrade Advocacia",
    description:
      "Advocacia especializada em Direito do Trabalho, Previdenciário/Acidentário, Direito Civil e Família em Guaíra/SP e região. Mais de 10 anos de experiência e atendimento humanizado.",
    url: siteUrl,
    telephone: "+5517981217474",
    email: OFFICE_INFO.email,
    priceRange: "$$",
    image: `${siteUrl}/og-image_2_optimized_300.jpg`,
    logo: `${siteUrl}/logo_semfundo_escritapreta_paramodoclaro.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. 14 B, 01077 - Joaquim Pereira Lelis",
      addressLocality: "Guaíra",
      addressRegion: "SP",
      postalCode: "14790-000",
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -20.3181,
      longitude: -48.3106,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday"],
        opens: "09:00",
        closes: "16:00",
      },
    ],
    sameAs: [
      OFFICE_INFO.social.instagram,
      OFFICE_INFO.social.facebook,
      OFFICE_INFO.social.linkedin,
    ],
    employee: [
      {
        "@type": "Person",
        name: LAWYER_PROFILE.name,
        jobTitle: LAWYER_PROFILE.role,
        description: `${LAWYER_PROFILE.oab}, ${LAWYER_PROFILE.specialties}`,
      },
    ],
  };
}