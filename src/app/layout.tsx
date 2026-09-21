import type { Metadata } from "next";
import { Philosopher, Mulish } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SmoothScroll } from "@/components/SmoothScroll";
import { getLegalServiceSchema } from "@/lib/schema";

const philosopher = Philosopher({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sloaneandrade-adv.vercel.app"),
  title: {
    default: "Sloane Andrade Advocacia | Guaíra - SP",
    template: "%s | Sloane Andrade Advocacia",
  },
  description:
    "Escritório de advocacia em Guaíra/SP especializado em Direito do Trabalho, Previdenciário/Acidentário, Direito Civil e Família. OAB/SP 463.336. Mais de 10 anos de experiência com atendimento humanizado.",
  keywords: [
    "advogada guaíra sp",
    "sloane andrade advocacia",
    "advogado trabalhista guaíra",
    "acidente de trabalho inss guaíra",
    "divórcio e pensão alimentícia guaíra",
    "inventário e partilha de bens sp",
    "direito civil barretos guaíra",
  ],
  authors: [{ name: "Dra. Sloane Ferreira de Andrade" }],
  creator: "Dra. Sloane Ferreira de Andrade",
  publisher: "Sloane Andrade Advocacia",
  alternates: {
    canonical: "https://sloaneandrade-adv.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://sloaneandrade-adv.vercel.app",
    title: "Sloane Andrade Advocacia | Guaíra - SP",
    description:
      "Segurança jurídica e atuação estratégica na defesa dos seus direitos e do seu trabalho. Mais de 10 anos de experiência e atendimento humanizado.",
    siteName: "Sloane Andrade Advocacia",
    images: [
      {
        url: "/logo_semfundo_escritapreta_paramodoclaro.png",
        width: 1200,
        height: 630,
        alt: "Sloane Andrade Advocacia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sloane Andrade Advocacia | Guaíra - SP",
    description:
      "Segurança jurídica e atuação estratégica na defesa dos seus direitos e do seu trabalho. Dra. Sloane Ferreira de Andrade OAB/SP 463.336.",
    images: ["/logo_semfundo_escritapreta_paramodoclaro.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon_16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon_512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicon_180x180.png", sizes: "180x180", type: "image/png" },
      { url: "/favicon-apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon_32x32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = getLegalServiceSchema();

  return (
    <html
      lang="pt-BR"
      className={`${philosopher.variable} ${mulish.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-body selection:bg-[var(--accent)] selection:text-white">
        <ThemeProvider>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}