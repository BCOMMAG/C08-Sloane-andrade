# Sloane Andrade Advocacia — Website & Landing Page Institucional

Aplicação web institucional de alto padrão desenvolvida para a **Dra. Sloane Ferreira de Andrade** (OAB/SP 463.336), sediada em Guaíra/SP.

Projeto desenvolvido com design editorial sofisticado, paleta Rose Gold & Terracota, tipografia refinada (*Philosopher + Mulish*), suporte completo a temas Claro/Escuro e estrita conformidade com o Código de Ética e Disciplina da OAB (Resolução CFOAB 02/2015) e o Provimento 205/2021 do CFOAB.

---

## 🏛️ Dados Institucionais

- **Escritório**: Sloane Andrade Advocacia
- **Advogada Titular**: Dra. Sloane Ferreira de Andrade (OAB/SP 463.336)
- **Endereço**: R. 14 B, 01077 - Joaquim Pereira Lelis, Guaíra - SP, CEP 14790-000
- **WhatsApp / Telefone**: (17) 98121-7474
- **E-mail**: sloaneandradeadv@gmail.com
- **Tempo de Mercado**: Mais de 10 anos de solidez jurídica
- **Horário de Atendimento**: Segunda a Quinta: 09:00 às 17:00 | Sexta: 09:00 às 16:00

---

## 🎨 Design System & Estética

- **Tipografia**:
  - Títulos & Headers: **Philosopher** (Google Fonts)
  - Textos & Artigos: **Mulish** (Google Fonts)
- **Paleta de Cores (60-30-10)**:
  - Fundo Dominante (60%): `#FFFFFF` (Claro) / `#0F1215` (Escuro)
  - Estrutural & Texto (30%): `#1A1D20` (Claro) / `#F3F4F6` (Escuro)
  - Destaque Principal (10%): `#D4A396` (Ouro Rosê / Rose Gold)
  - Variação Escura / Hovers: `#A6766A` (Terracota Rosado)
  - Variação Clara / Cards: `#F4EAE6` (Off-White Rosado)

---

## 🚀 Stack Técnica

- **Framework**: Next.js 16 (App Router) + React 19 + TypeScript
- **Estilização**: Tailwind CSS v4
- **Scroll & Transições**: Lenis Smooth Scroll + GSAP
- **Ícones**: Lucide React
- **Tema**: Claro / Escuro persistente em `localStorage`
- **SEO & AI**: Schema.org LegalService (JSON-LD), `sitemap.xml`, `robots.txt`, `llms.txt`

---

## 🧭 Rotas

- `/` — Landing Page principal completa (Hero, Pilares, Sobre, Áreas de Atuação, Conteúdo Educativo OAB, Google Reviews, Como Atuamos, FAQ Dinâmico, Contato/Google Maps, Footer e WhatsApp Flutuante).
- `/links` — Rota Link-in-Bio com Split Screen no Desktop e cartão adaptado para dispositivos móveis e Instagram.

---

## 💻 Como Rodar Localmente

```bash
# Instalar dependências
npm install

# Rodar servidor local
npm run dev

# Gerar build de produção
npm run build

# Iniciar build
npm start
```