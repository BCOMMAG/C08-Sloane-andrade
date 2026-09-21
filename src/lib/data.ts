export interface PracticeArea {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface Article {
  id: string;
  number: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  oabDisclaimer: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  comment: string;
  source: string;
}

export interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: "trabalhista" | "civil" | "previdenciario" | "geral";
  label: string;
  iconName: string;
  items: FaqItem[];
}

export const OFFICE_INFO = {
  name: "Sloane Andrade Advocacia",
  shortName: "Sloane Andrade",
  lawyerName: "Dra. Sloane Ferreira de Andrade",
  oab: "OAB/SP 463.336",
  tagline: "Atuação Jurídica Estratégica, Humana e Comprometida com os Seus Direitos",
  address: "R. 14 B, 01077 - Joaquim Pereira Lelis, Guaíra - SP, 14790-000",
  addressShort: "Joaquim Pereira Lelis, Guaíra - SP",
  cityState: "Guaíra - SP",
  phone: "(17) 98121-7474",
  whatsappUrl: "https://wa.me/5517981217474?text=Ol%C3%A1%2C%20Dra.%20Sloane.%20Gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica.",
  mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=R.+14+B,+1077+-+Joaquim+Pereira+Lelis,+Gua%C3%ADra+-+SP,+14790-000",
  email: "sloaneandradeadv@gmail.com",
  experienceYears: "+10",
  workingHours: {
    weekdays: "Segunda a Quinta: 09:00 às 17:00 | Sexta: 09:00 às 16:00",
    weekends: "Sábado e Domingo: Encerrado",
  },
  social: {
    instagram: "https://www.instagram.com/sloaneandradeadv",
    facebook: "https://www.facebook.com/sloane.andrade.5/",
    linkedin: "https://www.linkedin.com/in/sloane-andrade-7595a6145/",
  },
  pillars: {
    mission: "Oferecer assessoria jurídica de excelência nas áreas do Direito Civil e do Trabalho, combinando rigor técnico, empatia e estratégia combativa para assegurar a tranquilidade e a justiça para cada cliente.",
    vision: "Ser referência regional e estadual em advocacia personalizada, reconhecida pelo acolhimento caloroso, transparência irrestrita e resolutividade sólida.",
    values: [
      "Ética e Probidade Inegociáveis (CFOAB)",
      "Atendimento Pessoal, Próximo e Humanizado",
      "Transparência Absoluta em Cada Etapa Processual",
      "Inovação Estratégica e Rigor Técnico Especializado",
    ],
  },
  metrics: [
    { value: "+10", label: "Anos de sólida trajetória jurídica" },
    { value: "5.0 ★", label: "Nota máxima no Google Reviews (+70 avaliações)" },
    { value: "100%", label: "Atendimento direto com a advogada titular" },
    { value: "Ética", label: "Conformidade integral ao CFOAB e sigilo absoluto" },
  ],
};

export const LAWYER_PROFILE = {
  name: "Dra. Sloane Ferreira de Andrade",
  role: "Advogada Titular & Fundadora",
  oab: "OAB/SP 463.336",
  specialties: "Pós-graduada e MBA em Direito do Trabalho, Previdenciário e Acidentário",
  photo: "/foto_perfil.jpeg",
  bio: "Graduada em Direito pelo Centro Universitário da Fundação Educacional de Barretos (UNIFEB) em 2016 e pós-graduada com MBA em Direito do Trabalho e Previdenciário com foco em acidente do trabalho pela Faculdade Legale. Possui cursos de extensão em Formação do Advogado Civilista e Super Formação do Advogado Trabalhista. Atuou previamente junto à Polícia Civil do Estado de São Paulo (Guaíra/SP) e consolidou uma advocacia autônoma combativa, humanizada e personalizada, com atendimento direto em âmbito consultivo e contencioso.",
  academicSummary: [
    {
      institution: "Faculdade Legale Educacional",
      course: "Pós-graduação Lato Sensu (MBA) em Direito do Trabalho e Previdenciário",
      details: "Ênfase prática em acidentes de trabalho, doenças ocupacionais, benefícios acidentários do INSS e novas rotinas processuais trabalhistas.",
    },
    {
      institution: "Centro Universitário da Fundação Educacional de Barretos (UNIFEB)",
      course: "Bacharelado em Direito (Law)",
      details: "Formação jurídica sólida e dogmática concluída em 2016.",
    },
    {
      institution: "Polícia Civil do Estado de São Paulo",
      course: "Estágio Forense e Prática Jurídica Investigativa",
      details: "Experiência de 2 anos (2014 a 2015) em apoio cartorário, análise procedimental e atuação interdisciplinar na comarca de Guaíra/SP.",
    },
    {
      institution: "Cursos Complementares de Especialização",
      course: "Formação do Advogado Civilista & Super Formação Trabalhista",
      details: "Aprimoramento contínuo em cálculos rescisórios, audiências de instrução, execução cível e direito das famílias.",
    },
  ],
  quote: "Cada caso é único. Por isso, meu foco é entender a realidade de cada cliente para buscar a solução mais adequada, sempre com clareza, responsabilidade e comprometimento. Prezo por um atendimento direto e individualizado, acompanhando cada etapa do processo com atenção e transparência.",
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "direito-trabalho",
    code: "01",
    title: "Direito do Trabalho & Verbas Rescisórias",
    subtitle: "Defesa dos Direitos Laborais e Combate a Irregularidades",
    description: "Atuação completa para empregados e prestadores na apuração rigorosa de verbas rescisórias, horas extraordinárias não pagas, reconhecimento de vínculo empregatício e reversão de demissões abusivas.",
    highlights: [
      "Revisão de rescisão contratual e cálculo minucioso de haveres",
      "Reconhecimento de vínculo empregatício sem registro em CTPS",
      "Reclamação de horas extras, adicionais noturnos e intervalos intrajornada",
      "Rescisão indireta do contrato por descumprimento do empregador",
    ],
  },
  {
    id: "acidentes-doencas",
    code: "02",
    title: "Acidentes de Trabalho & Direito Acidentário",
    subtitle: "Especialização MBA em Danos Ocupacionais e INSS",
    description: "Suporte especializado para trabalhadores vitimados por acidentes típicos ou acometidos por doenças ocupacionais e lesões por esforço repetitivo (LER/DORT), buscando indenizações e benefícios correspondentes.",
    highlights: [
      "Reparação civil por danos morais, materiais e estéticos no trabalho",
      "Estabilidade provisória acidentária e reintegração ao posto de trabalho",
      "Acompanhamento de perícias médicas judiciais trabalhistas",
      "Pensão vitalícia ou proporcional em decorrência de incapacidade laboral",
    ],
  },
  {
    id: "familia-sucessoes",
    code: "03",
    title: "Família: Divórcio, Guarda & Pensão Alimentícia",
    subtitle: "Condução Humanizada em Relações Delicadas",
    description: "Atendimento acolhedor, sigiloso e técnico para estruturar divórcios consensuais e litigiosos, partilhas justas de patrimônio, regulamentação de guarda e fixação justa de alimentos.",
    highlights: [
      "Divórcio extrajudicial em cartório (rápido e econômico) e judicial",
      "Fixação, revisão e execução com pedido de prisão de pensão alimentícia",
      "Regulamentação de guarda compartilhada e regime de convivência/visitas",
      "Reconhecimento e dissolução de união estável com partilha de bens",
    ],
  },
  {
    id: "inventario-heranca",
    code: "04",
    title: "Inventário & Planejamento Sucessório",
    subtitle: "Regularização de Bens e Proteção do Legado Familiar",
    description: "Assessoria completa para herdeiros e meeiro(a) na realização de inventários judiciais ou em cartório, prezando pela conciliação entre parentes e agilidade no desembaraço de bens e imóveis.",
    highlights: [
      "Inventário extrajudicial em cartório por escritura pública",
      "Inventário judicial em casos de herdeiros menores ou discordância",
      "Cálculo e recolhimento estratégico do imposto de transmissão (ITCMD)",
      "Sobrepartilha e alvarás judiciais para levantamento de valores residuais",
    ],
  },
  {
    id: "civel-contratos",
    code: "05",
    title: "Direito Cível, Contratos & Reparação de Danos",
    subtitle: "Segurança Jurídica para Relações Cotidianas e Negócios",
    description: "Elaboração, análise preventiva e rescisão de contratos civis e comerciais, além de ações de responsabilidade civil para reparação de danos morais e materiais por inadimplemento ou conduta ilícita.",
    highlights: [
      "Cobrança judicial e execução forçada de títulos executivos e contratos",
      "Ações indenizatórias por negativação indevida e abalo de crédito",
      "Resolução de conflitos contratuais e vícios em prestação de serviços",
      "Locações urbanas, ações de despejo por falta de pagamento e revisões",
    ],
  },
  {
    id: "consumidor",
    code: "06",
    title: "Direito do Consumidor & Defesa Contra Abusos",
    subtitle: "Equilíbrio nas Relações de Consumo e Instituições",
    description: "Defesa dos direitos do cidadão em face de cobranças abusivas, compras não entregues, produtos com vícios de fabricação e práticas ilegais de bancos, concessionárias e empresas de telecomunicações.",
    highlights: [
      "Indenização por inclusão injusta no SPC, Serasa e cartórios de protesto",
      "Revisão de juros abusivos em empréstimos e financiamentos",
      "Ações contra cancelamentos indevidos de voos e extravio de bagagens",
      "Ressarcimento por golpes digitais, transações fraudulentas e PIX indevido",
    ],
  },
];

export const EDUCATIONAL_TOPICS: Article[] = [
  {
    id: "artigo-01",
    number: "01",
    title: "Fui Demitido Sem Justa Causa: Quais São os Meus Direitos Essenciais?",
    category: "Direito do Trabalho",
    readTime: "4 min de leitura",
    summary: "Entenda o prazo legal de 10 dias para pagamento e a discriminação obrigatória das verbas rescisórias previstas na CLT.",
    content: [
      "Na rescisão imotivada do contrato de trabalho por iniciativa da empresa, o trabalhador celetista tem direito ao aviso prévio (trabalhado ou indenizado e proporcional ao tempo de serviço), saldo de salário dos dias trabalhados, 13º salário proporcional, férias vencidas e proporcionais com o terço constitucional.",
      "Além disso, a legislação trabalhista assegura o levantamento integral do saldo depositado na conta vinculada do FGTS acompanhado da multa rescisória de 40% paga pelo empregador, bem como o fornecimento das guias para habilitação ao seguro-desemprego.",
      "A empresa tem o prazo estrito de até 10 (dez) dias corridos após o término do contrato para efetuar a quitação integral. O atraso injustificado enseja a incidência da multa prevista no artigo 477 da CLT em favor do empregado.",
    ],
    oabDisclaimer: "Conteúdo meramente informativo e pedagógico, em conformidade com o Provimento 205/2021 do CFOAB.",
  },
  {
    id: "artigo-02",
    number: "02",
    title: "Acidente de Trajeto e Doença Ocupacional: Quando Há Estabilidade no Emprego?",
    category: "Direito Acidentário",
    readTime: "5 min de leitura",
    summary: "Como a emissão da CAT e a percepção de benefício acidentário asseguram a proteção de 12 meses contra demissão arbitrária.",
    content: [
      "O acidente de trabalho ocorre pelo exercício do trabalho a serviço da empresa, provocando lesão corporal ou perturbação funcional que cause a morte ou a perda/redução da capacidade laboral. Enquadram-se também as doenças profissionais e ocupacionais decorrentes das condições do ambiente.",
      "A emissão da Comunicação de Acidente de Trabalho (CAT) é dever legal da empresa até o primeiro dia útil seguinte ao do evento. Caso a empresa se recuse a emitir, o próprio trabalhador, o médico ou o sindicato podem formalizá-la.",
      "O trabalhador que recebe o benefício de auxílio por incapacidade temporária acidentária (antigo B91) goza de estabilidade provisória no emprego pelo período mínimo de 12 meses após a cessação do benefício, conforme o artigo 118 da Lei 8.213/1991.",
    ],
    oabDisclaimer: "Conteúdo meramente informativo e pedagógico, em conformidade com o Provimento 205/2021 do CFOAB.",
  },
  {
    id: "artigo-03",
    number: "03",
    title: "Divórcio em Cartório ou Judicial: Como Escolher o Caminho Mais Ágil?",
    category: "Direito de Família",
    readTime: "4 min de leitura",
    summary: "As diferenças de custo, tempo e requisitos formais para a dissolução do matrimônio pela via extrajudicial.",
    content: [
      "Desde a edição da Lei 11.441/2007, o divórcio consensual pode ser realizado de forma rápida e desburocratizada diretamente em Cartório de Notas, por meio de escritura pública, dispensando processo judicial moroso.",
      "Os requisitos fundamentais para a via extrajudicial são: o consenso integral do casal sobre a partilha de bens e alteração de nome, e a inexistência de filhos menores de idade ou incapazes (salvo se as questões de guarda e pensão já tiverem sido previamente homologadas em juízo).",
      "Mesmo no divórcio em cartório, a presença de advogado devidamente inscrito na OAB é obrigatória por lei, atuando na orientação técnica imparcial ou representando uma das partes com segurança patrimonial.",
    ],
    oabDisclaimer: "Conteúdo meramente informativo e pedagógico, em conformidade com o Provimento 205/2021 do CFOAB.",
  },
  {
    id: "artigo-04",
    number: "04",
    title: "Pensão Alimentícia: Como é Calculada e Quais os Critérios da Justiça?",
    category: "Direito de Família",
    readTime: "3 min de leitura",
    summary: "O binômio 'necessidade de quem recebe versus possibilidade de quem paga' e os mitos comuns sobre porcentagens fixas.",
    content: [
      "Ao contrário do mito popular, a legislação brasileira não estabelece uma porcentagem fixa obrigatória (como 30%) para a pensão alimentícia. O magistrado analisa o binômio necessidade do alimentando e possibilidade econômica do alimentante.",
      "As necessidades dos filhos englobam não apenas a alimentação básica, mas vestuário, moradia, educação, transporte, saúde, lazer e formação profissional condizente com o padrão social da família.",
      "Havendo alteração financeira superveniente na vida de quem paga ou de quem recebe, é perfeitamente cabível a Ação Revisional de Alimentos para adequar o valor à nova realidade probatória.",
    ],
    oabDisclaimer: "Conteúdo meramente informativo e pedagógico, em conformidade com o Provimento 205/2021 do CFOAB.",
  },
  {
    id: "artigo-05",
    number: "05",
    title: "Inventário de Bens: O Que Acontece Se Perder o Prazo de 60 Dias?",
    category: "Direito das Sucessões",
    readTime: "4 min de leitura",
    summary: "Entenda a incidência da multa fiscal estadual sobre o imposto de herança (ITCMD) e como regularizar o patrimônio herdado.",
    content: [
      "O Código de Processo Civil estipula o prazo de 2 (dois) meses (60 dias), a contar da data da abertura da sucessão (falecimento), para que os herdeiros instaurem o processo de inventário e partilha dos bens.",
      "Ultrapassado esse prazo, não há perda do direito à herança pelos sucessores legais. Todavia, haverá a aplicação de multa fiscal progressiva sobre o ITCMD (Imposto sobre Transmissão Causa Mortis e Doação) cobrada pela Fazenda Estadual.",
      "O inventário é indispensável para que herdeiros possam vender, alugar ou transferir formalmente veículos, contas bancárias e imóveis, evitando bloqueios burocráticos e perda de liquidez patrimonial.",
    ],
    oabDisclaimer: "Conteúdo meramente informativo e pedagógico, em conformidade com o Provimento 205/2021 do CFOAB.",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "rev-01",
    author: "Rosineri Edilsa Mendes Kawamura",
    rating: 5,
    timeAgo: "há 6 meses",
    comment: "Super profissional e atenciosa! Senti-me segura desde a primeira consulta. Fez um trabalho minucioso e trouxe a tranquilidade que eu precisava.",
    source: "Google Reviews",
  },
  {
    id: "rev-02",
    author: "Katia Elisa",
    rating: 5,
    timeAgo: "há 2 meses",
    comment: "Super recomendo o trabalho da Dra. Sloane Ferreira de Andrade! Uma advogada com extremo conhecimento na sua área de atuação, que realiza uma defesa brilhante e, acima de tudo, acolhe o cliente com paciência e clareza em todas as orientações. Atendimento impecável e de muita qualidade.",
    source: "Google Reviews",
  },
  {
    id: "rev-03",
    author: "TiagoBR",
    rating: 5,
    timeAgo: "há 3 meses",
    comment: "Ótimo profissional me atendeu super bem, duvidas todas esclarecidas com clareza e compromisso.",
    source: "Google Reviews",
  },
  {
    id: "rev-04",
    author: "Simone Peixoto",
    rating: 5,
    timeAgo: "há 6 meses",
    comment: "Advogada competente, me ajudou muito no que eu precisei, além de ser muito competente me atendeu e me acolheu com tanto carinho e carisma que me deixou muito tranquila nas nossas conversas. Dra Sloane Andrade só tenho a agradecer por toda sua total dedicação e atenção. Obrigada!",
    source: "Google Reviews",
  },
  {
    id: "rev-05",
    author: "Ana Laura Fidelis",
    rating: 5,
    timeAgo: "há 6 meses",
    comment: "Profissional extremamente competente, ética e dedicada. Presta um atendimento claro, atencioso e demonstra profundo conhecimento jurídico. Recomendo seus serviços com total confiança.",
    source: "Google Reviews",
  },
  {
    id: "rev-06",
    author: "Nayara Rodrigues",
    rating: 5,
    timeAgo: "há 6 meses",
    comment: "A Dra Sloane é incrível, tivemos uma consultoria na qual ela foi muito prestativa e atenciosa. Indico para todos em especial para as mulheres que querem confiança e ter uma intimidade para tratar de seus casos.",
    source: "Google Reviews",
  },
  {
    id: "rev-07",
    author: "Isabelly Jacovassi",
    rating: 5,
    timeAgo: "há 6 meses",
    comment: "Excelente profissional muito atenciosa atendimento nota mil.",
    source: "Google Reviews",
  },
  {
    id: "rev-08",
    author: "Luana Rosseti",
    rating: 5,
    timeAgo: "há 6 meses",
    comment: "Atendimento com excelência. Ela sabe o que faz e dá o nome no seu trabalho. Super indico!",
    source: "Google Reviews",
  },
  {
    id: "rev-09",
    author: "Simone Barbosa",
    rating: 5,
    timeAgo: "há 6 meses",
    comment: "Dra Sloane Andrade é muito competente e muito profissional. Atende e responde a gente muito rápido e me orientou muito bem, só tenho a agradecer!",
    source: "Google Reviews",
  },
  {
    id: "rev-10",
    author: "Álvaro Talarico",
    rating: 5,
    timeAgo: "há 6 meses",
    comment: "Excelente atendimento e profissionalismo impecável. Sloane é uma advogada muito atenciosa e comprometida com os mínimos detalhes. Indico com total confiança!",
    source: "Google Reviews",
  },
  {
    id: "rev-11",
    author: "Psicóloga Adriana Perches",
    rating: 5,
    timeAgo: "há 4 meses",
    comment: "Profissional muito atenciosa, gostei muito do atendimento! Indico com certeza.",
    source: "Google Reviews",
  },
  {
    id: "rev-12",
    author: "André TR",
    rating: 5,
    timeAgo: "há 4 meses",
    comment: "O atendimento foi muito rápido e sanou todas as minhas dúvidas com clareza.",
    source: "Google Reviews",
  },
  {
    id: "rev-13",
    author: "Bruna Duarte Rodrigues",
    rating: 5,
    timeAgo: "há 4 meses",
    comment: "Profissional maravilhosa, extremamente educada e empática, super recomendo.",
    source: "Google Reviews",
  },
  {
    id: "rev-14",
    author: "Mary Thoanny Araujo Nunes",
    rating: 5,
    timeAgo: "há um ano",
    comment: "A Dra Sloane foi muito atenciosa e precisa em um momento delicado da minha vida. Muito precisa nas palavras e de um coração enorme. Acredito muito no trabalho dela, ela me passa muita confiança.",
    source: "Google Reviews",
  },
];

export const WORK_STEPS: Step[] = [
  {
    number: "01",
    title: "Acolhimento & Escuta Atenta",
    subtitle: "Compreensão da sua história sem julgamentos",
    description: "Você conversa diretamente com a Dra. Sloane Andrade via WhatsApp ou presencialmente. Analisamos com calma seus documentos e as particularidades do seu caso.",
  },
  {
    number: "02",
    title: "Diagnóstico Jurídico & Estratégia Clara",
    subtitle: "Transparência total sobre direitos e viabilidade",
    description: "Apresentamos as alternativas cabíveis: possibilidade de acordo extrajudicial amigável e econômico ou a necessidade de medida judicial combativa.",
  },
  {
    number: "03",
    title: "Elaboração Técnica & Personalizada",
    subtitle: "Petições detalhadas com rigor dogmático",
    description: "Redação cuidadosa de instrumentos, minutas ou peças processuais com fundamentação jurisprudencial atualizada e cálculos precisos.",
  },
  {
    number: "04",
    title: "Acompanhamento Próximo & Atualização Contínua",
    subtitle: "Você nunca fica sem saber o andamento do seu processo",
    description: "Cada movimentação relevante é explicada em linguagem clara e acessível, com suporte constante até o encerramento do processo.",
  },
];

export const FAQ_DATA: FaqCategory[] = [
  {
    id: "trabalhista",
    label: "Direito do Trabalho",
    iconName: "Briefcase",
    items: [
      {
        id: "faq-t1",
        question: "Fui demitido, a quais verbas rescisórias tenho direito exatamente?",
        answer: "Se a dispensa foi sem justa causa, você tem direito a saldo de salário, aviso prévio indenizado ou trabalhado, 13º salário proporcional, férias vencidas e proporcionais com 1/3, levantamento do saldo do FGTS com acréscimo da multa de 40%, além das guias do seguro-desemprego. Em caso de pedido de demissão, algumas dessas parcelas não são devidas. A análise da rescisão garante que nenhum direito seja suprimido.",
      },
      {
        id: "faq-t2",
        question: "Trabalhei sem carteira assinada. Posso exigir o reconhecimento dos meus direitos?",
        answer: "Sim. A legislação trabalhista brasileira consagra o princípio da primazia da realidade. Comprovando-se a habitualidade, subordinação, pessoalidade e onerosidade, a Justiça do Trabalho reconhece o vínculo empregatício e condena o empregador a anotar a CTPS e pagar todo o FGTS, férias, 13º e recolhimentos do INSS devidos do período.",
      },
      {
        id: "faq-t3",
        question: "Sofro assédio moral no trabalho ou a empresa atrasa salários. Posso pedir demissão e receber meus direitos?",
        answer: "Sim, através da chamada 'Rescisão Indireta do Contrato de Trabalho' (art. 483 da CLT), que funciona como uma justa causa aplicada pelo empregado contra a empresa faltosa. Comprovada a falta patronal grave, o trabalhador recebe todas as verbas rescisórias equivalentes a uma dispensa imotivada.",
      },
      {
        id: "faq-t4",
        question: "Quanto tempo tenho para ingressar com uma ação trabalhista após sair da empresa?",
        answer: "O trabalhador dispõe do prazo constitucional estrito de até 2 (dois) anos após a rescisão contratual para ajuizar a reclamatória trabalhista, podendo pleitear os direitos referentes aos últimos 5 (cinco) anos contados da data do ajuizamento da ação.",
      },
    ],
  },
  {
    id: "civil",
    label: "Direito Civil & Família",
    iconName: "Users",
    items: [
      {
        id: "faq-c1",
        question: "Como funciona a guarda compartilhada? O genitor continua obrigado a pagar pensão alimentícia?",
        answer: "Sim. A guarda compartilhada diz respeito à tomada conjunta de decisões sobre a criação, educação e saúde dos filhos, e não anula o dever de sustento. O genitor com quem o filho não reside majoritariamente continua obrigado ao pagamento da pensão alimentícia estipulada para custear a manutenção diária do menor.",
      },
      {
        id: "faq-c2",
        question: "Quando o divórcio pode ser feito rapidamente em cartório?",
        answer: "O divórcio extrajudicial em cartório pode ser realizado sempre que houver consenso mútuo do casal sobre todos os termos (partilha de bens, retorno ao nome de solteiro) e não houver filhos menores ou incapazes não emancipados. É o procedimento mais rápido e econômico, exigindo a assistência de advogado.",
      },
      {
        id: "faq-c3",
        question: "Se um familiar faleceu com dívidas, os herdeiros são obrigados a pagar do próprio bolso?",
        answer: "Não. As dívidas deixadas pelo falecido são cobertas unicamente pelo patrimônio que compõe a herança até o limite das forças do espólio (art. 1.792 do Código Civil). Os herdeiros nunca respondem com seus próprios bens pessoais pelas dívidas deixadas pelo ente falecido.",
      },
      {
        id: "faq-c4",
        question: "Meu nome foi negativado indevidamente no SPC/Serasa. O que posso fazer?",
        answer: "A inclusão indevida em cadastros de inadimplentes sem que haja dívida legítima ou após a quitação configura dano moral in re ipsa (presumido) segundo a jurisprudência pacífica. É cabível ação judicial com pedido liminar para exclusão imediata do apontamento cumulada com indenização por danos morais.",
      },
    ],
  },
  {
    id: "previdenciario",
    label: "Direito Acidentário",
    iconName: "ShieldCheck",
    items: [
      {
        id: "faq-p1",
        question: "Sofri um acidente no trabalho ou no trajeto. Tenho direito à estabilidade provisória?",
        answer: "Sim. Caso o afastamento por acidente típico ou de trajeto tenha sido superior a 15 dias com concessão de benefício por incapacidade temporária de natureza acidentária (código 91), o trabalhador adquire estabilidade provisória no emprego de no mínimo 12 meses após a alta médica do INSS.",
      },
      {
        id: "faq-p2",
        question: "Fiquei com sequela física após acidente ou doença ocupacional. Posso receber indenização da empresa?",
        answer: "Sim. Havendo culpa, negligência na segurança ou atividade de risco da empresa, o trabalhador pode pleitear judicialmente indenização por danos materiais (reembolso de tratamentos e pensão mensal vitalícia correspondente à redução da capacidade física), além de danos morais e estéticos.",
      },
    ],
  },
];