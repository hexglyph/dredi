export type LocalServiceLanding = {
  key: string
  sourceSlug: string
  path: string
  label: string
  title: string
  description: string
  heroTitle: string
  heroSubtitle: string
  introTitle: string
  intro: string
  benefits: Array<{
    title: string
    text: string
  }>
  keywords: string[]
}

export const localServiceLandings = [
  {
    key: "implantes-campinas",
    sourceSlug: "implantes",
    path: "/implantes/campinas",
    label: "Implantes em Campinas",
    title: "Implantes Dentários em Campinas",
    description:
      "Implantes dentários em Campinas com o Dr. Edi, especialista com mais de 10 mil implantes. Carga imediata, prótese protocolo e planejamento individual. Agende sua avaliação.",
    heroTitle: "Implantes dentários em Campinas com o Dr. Edi, especialista com mais de 10 mil implantes realizados.",
    heroSubtitle:
      "Atendimento particular para quem quer recuperar dentes perdidos com avaliação, planejamento individual e opções de prótese sobre implante.",
    introTitle: "Recupere função e confiança com implantes planejados para o seu caso",
    intro:
      "A avaliação identifica volume ósseo, saúde bucal, expectativa estética e melhor estratégia para substituir dentes ausentes com segurança.",
    benefits: [
      {
        title: "Mais de 10 mil implantes",
        text: "Experiência prática em reabilitação oral, próteses sobre implante e planejamento de casos complexos.",
      },
      {
        title: "Planejamento personalizado",
        text: "Cada caso é avaliado individualmente para definir técnica, etapas e melhor alternativa protética.",
      },
      {
        title: "Clínica em Campinas",
        text: "Atendimento particular na Vida Odontologia, com foco em conforto, clareza e previsibilidade.",
      },
    ],
    keywords: [
      "implantes dentários em Campinas",
      "implante dentário Campinas",
      "dentista implante Campinas",
      "prótese protocolo Campinas",
      "implante carga imediata Campinas",
      "quanto custa implante dentário Campinas",
      "melhor dentista implante Campinas",
    ],
  },
  {
    key: "facetas-campinas",
    sourceSlug: "facetas-e-coroas",
    path: "/facetas/campinas",
    label: "Facetas em Campinas",
    title: "Facetas Dentárias em Campinas",
    description:
      "Facetas dentárias em Campinas: porcelana, resina e lentes de contato dental. Avaliação estética personalizada para transformar seu sorriso com naturalidade na Vida Odontologia.",
    heroTitle: "Facetas dentárias em Campinas para renovar a harmonia do sorriso.",
    heroSubtitle:
      "Avaliação estética com o Dr. Edi para entender cor, formato, proporção e melhor indicação entre facetas, coroas ou resina.",
    introTitle: "Estética dental com planejamento para um resultado natural",
    intro:
      "O tratamento é indicado para corrigir forma, cor, desgaste, pequenas fraturas e assimetrias, sempre respeitando sua saúde bucal.",
    benefits: [
      {
        title: "Sorriso mais harmônico",
        text: "Planejamento visual para equilibrar estética, proporção dental e naturalidade no resultado.",
      },
      {
        title: "Facetas e coroas",
        text: "Indicação individual entre resina, porcelana, coroas estéticas ou combinação de tratamentos.",
      },
      {
        title: "Atendimento particular",
        text: "Consulta com explicação clara das possibilidades, etapas, cuidados e manutenção.",
      },
    ],
    keywords: [
      "facetas dentárias em Campinas",
      "facetas em Campinas",
      "facetas de porcelana Campinas",
      "lentes de contato dental Campinas",
      "estética dental Campinas",
      "quanto custa faceta dentária Campinas",
    ],
  },
  {
    key: "canal-campinas",
    sourceSlug: "endodontia",
    path: "/canal/campinas",
    label: "Tratamento de canal em Campinas",
    title: "Tratamento de canal em Campinas",
    description:
      "Tratamento de canal em Campinas para dor de dente, inflamação e preservação do dente natural com atendimento odontológico profissional.",
    heroTitle: "Tratamento de canal em Campinas para aliviar a dor e preservar seu dente.",
    heroSubtitle:
      "Atendimento para sintomas como dor persistente, sensibilidade, inchaço ou infecção, com avaliação cuidadosa e orientação clara.",
    introTitle: "Endodontia para tratar a causa da dor e manter o dente natural",
    intro:
      "O tratamento de canal remove a infecção interna do dente e ajuda a preservar estrutura, função e saúde bucal.",
    benefits: [
      {
        title: "Avaliação da dor",
        text: "Análise dos sintomas e do dente afetado para indicar o tratamento mais adequado.",
      },
      {
        title: "Preservação dental",
        text: "Foco em tratar a infecção e manter o dente natural sempre que houver indicação clínica.",
      },
      {
        title: "Agendamento rápido",
        text: "Contato pelo WhatsApp para orientar o caso e organizar a avaliação na clínica em Campinas.",
      },
    ],
    keywords: [
      "tratamento de canal em Campinas",
      "canal dentário Campinas",
      "endodontia Campinas",
      "dor de dente Campinas",
    ],
  },
  {
    key: "proteses-campinas",
    sourceSlug: "proteses",
    path: "/proteses/campinas",
    label: "Próteses em Campinas",
    title: "Próteses Dentárias em Campinas",
    description:
      "Próteses dentárias em Campinas com o Dr. Edi, especialista em reabilitação oral. Prótese fixa, removível, total e sobre implante. Agende sua avaliação particular.",
    heroTitle: "Próteses dentárias em Campinas para recuperar seu sorriso.",
    heroSubtitle:
      "Avaliação particular para próteses fixas, removíveis, totais ou sobre implante, com planejamento funcional e estético.",
    introTitle: "Reabilitação oral para voltar a mastigar, falar e sorrir melhor",
    intro:
      "A escolha da prótese depende da quantidade de dentes ausentes, suporte ósseo, gengiva, mordida e expectativa estética.",
    benefits: [
      {
        title: "Especialista em próteses",
        text: "O Dr. Edi é especialista em próteses dentárias e atua com reabilitação oral há mais de 20 anos.",
      },
      {
        title: "Várias alternativas",
        text: "Prótese fixa, removível, total, protocolo ou sobre implante conforme a indicação clínica.",
      },
      {
        title: "Resultado funcional",
        text: "Planejamento para recuperar mastigação, estética, segurança e conforto no dia a dia.",
      },
    ],
    keywords: [
      "próteses dentárias em Campinas",
      "prótese dentária Campinas",
      "dentista prótese Campinas",
      "prótese protocolo Campinas",
      "prótese sobre implante Campinas",
      "especialista prótese dentária Campinas",
    ],
  },
  {
    key: "clareamento-campinas",
    sourceSlug: "clareamento",
    path: "/clareamento/campinas",
    label: "Clareamento em Campinas",
    title: "Clareamento Dental em Campinas",
    description:
      "Clareamento dental profissional em Campinas com avaliação, técnica segura e acompanhamento. Dentes mais brancos com segurança na Vida Odontologia. Agende pelo WhatsApp.",
    heroTitle: "Clareamento dental em Campinas com acompanhamento profissional.",
    heroSubtitle:
      "Avaliação para indicar a técnica de clareamento mais adequada ao seu caso, com segurança e orientação sobre manutenção.",
    introTitle: "Dentes mais claros com técnica indicada para sua saúde bucal",
    intro:
      "Antes do clareamento, avaliamos sensibilidade, restaurações, manchas, gengiva e expectativa de resultado para conduzir o tratamento com segurança.",
    benefits: [
      {
        title: "Clareamento seguro",
        text: "Indicação profissional para reduzir riscos de sensibilidade e proteger dentes e gengiva.",
      },
      {
        title: "Sorriso mais luminoso",
        text: "Tratamento para melhorar a cor dos dentes e valorizar a estética do sorriso.",
      },
      {
        title: "Orientação completa",
        text: "Cuidados antes, durante e depois para manter o resultado por mais tempo.",
      },
    ],
    keywords: [
      "clareamento dental em Campinas",
      "clareamento dentário Campinas",
      "clareamento profissional Campinas",
      "dentes brancos Campinas",
    ],
  },
  {
    key: "endodontia-campinas",
    sourceSlug: "endodontia",
    path: "/endodontia/campinas",
    label: "Endodontia em Campinas",
    title: "Endodontia em Campinas",
    description:
      "Endodontia em Campinas para dor de dente, infecção, tratamento de canal e preservação do dente natural.",
    heroTitle: "Endodontia em Campinas para tratar dor e preservar dentes naturais.",
    heroSubtitle:
      "Avaliação particular para investigar dor, sensibilidade, inflamação ou infecção e indicar o melhor tratamento endodôntico.",
    introTitle: "Tratamento endodôntico com foco em diagnóstico e preservação dental",
    intro:
      "A endodontia trata problemas internos do dente, ajudando a eliminar infecções, aliviar sintomas e evitar perdas dentárias quando há indicação.",
    benefits: [
      {
        title: "Diagnóstico da dor",
        text: "Avaliação clínica para entender origem, intensidade e sinais associados ao dente afetado.",
      },
      {
        title: "Tratamento de canal",
        text: "Conduta indicada para remover infecção interna e preservar a estrutura do dente natural.",
      },
      {
        title: "Atendimento em Campinas",
        text: "Contato pelo WhatsApp para orientar sintomas e organizar a avaliação na Vida Odontologia.",
      },
    ],
    keywords: [
      "endodontia em Campinas",
      "endodontista Campinas",
      "tratamento endodôntico Campinas",
      "tratamento de canal Campinas",
    ],
  },
  {
    key: "dentistica-campinas",
    sourceSlug: "dentistica",
    path: "/dentistica/campinas",
    label: "Dentística em Campinas",
    title: "Dentística em Campinas",
    description:
      "Dentística em Campinas para restaurações estéticas, resina, correções no sorriso e recuperação funcional dos dentes.",
    heroTitle: "Dentística em Campinas para restaurar função e estética do sorriso.",
    heroSubtitle:
      "Atendimento para restaurações, resina, pequenas correções estéticas, desgaste dental e recuperação da harmonia do sorriso.",
    introTitle: "Restaurações e correções estéticas com planejamento individual",
    intro:
      "A dentística une saúde, função e estética para restaurar dentes comprometidos, melhorar forma, fechar espaços e corrigir detalhes do sorriso.",
    benefits: [
      {
        title: "Restauração estética",
        text: "Correção de cáries, fraturas, desgastes e alterações de forma com foco em naturalidade.",
      },
      {
        title: "Resina dentária",
        text: "Opções conservadoras para melhorar contorno, proporção e harmonia do sorriso.",
      },
      {
        title: "Avaliação completa",
        text: "Análise da saúde bucal e indicação do tratamento mais adequado para cada dente.",
      },
    ],
    keywords: [
      "dentística em Campinas",
      "restauração estética Campinas",
      "resina dentária Campinas",
      "dentista restauração Campinas",
    ],
  },
] as const satisfies readonly LocalServiceLanding[]

export function getLocalServiceLanding(path: string) {
  return localServiceLandings.find((landing) => landing.path === path)
}
