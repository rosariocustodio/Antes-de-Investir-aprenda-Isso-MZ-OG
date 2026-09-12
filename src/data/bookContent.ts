import { Chapter, PaymentOption, Testimonial } from '../types';

export const BONUSES_LIST = [
  {
    id: 1,
    title: 'BÔNUS #1: Guia Rápido Anti-Golpes e Burlas Financeiras',
    subtitle: 'Baseado no Capítulo 23 do Guia',
    value: 750,
    description: 'Um checklist de bolso com as 7 perguntas obrigatórias para identificar esquemas de pirâmide, promessas falsas de lucros rápidos e fraudes digitais antes de perder o seu dinheiro.',
    badge: '100% GRÁTIS HOJE',
    icon: 'ShieldAlert'
  },
  {
    id: 2,
    title: 'BÔNUS #2: Matriz de Orçamento & Regra Prática 50-30-20',
    subtitle: 'Baseado no Capítulo 9 do Guia',
    value: 950,
    description: 'O modelo simples para dividir o salário mensal em 50% necessidades vitais, 30% despesas pessoais e 20% poupança e investimentos, sem passar privações desnecessárias.',
    badge: '100% GRÁTIS HOJE',
    icon: 'PieChart'
  },
  {
    id: 3,
    title: 'BÔNUS #3: Checklist de Segurança Pré-Aplicação',
    subtitle: 'Baseado no Capítulo 8 do Guia',
    value: 600,
    description: 'O filtro de segurança que todo investidor prudente deve preencher antes de colocar o primeiro Metical em qualquer ativo ou aplicação financeira.',
    badge: '100% GRÁTIS HOJE',
    icon: 'CheckSquare'
  },
  {
    id: 4,
    title: 'BÔNUS #4: Roteiro Prático Para os Próximos 12 Meses',
    subtitle: 'Baseado no Capítulo 28 do Guia',
    value: 1200,
    description: 'O plano de ação passo a passo para os próximos 365 dias, para que você saiba exatamente o que fazer a cada mês para construir estabilidade e tranquilidade.',
    badge: '100% GRÁTIS HOJE',
    icon: 'Calendar'
  }
];

export const TOTAL_PACKAGE_VALUE = 4750; // 1250 livro + 3500 bônus

export const BOOK_DATA = {
  title: 'Antes de Investir Dinheiro, Aprenda Isso',
  subtitle: 'Um Guia Prático Para Começar Certo',
  author: 'Rosario Paulino',
  edition: '1ª Edição — Dezembro de 2025',
  brand: 'Rumos Seguros',
  format: 'Livro Digital (PDF Interativo)',
  pages: 34,
  chaptersCount: 29,
  readingTime: 'Aproximadamente 45 a 60 minutos',
  originalPrice: 1250,
  currentPrice: 397,
  currency: 'MT',
  discountPercentage: 68,
  guaranteeDays: 7,
  contactWhatsApp: '+258840000000', // Editável pelo usuário
  supportEmail: 'suporte@rumosseguros.com'
};

export const CHAPTERS_LIST: Chapter[] = [
  { number: 1, title: 'Por que a maioria das pessoas perde dinheiro', category: 'Fundamentos', summary: 'A diferença entre decisões emocionais e estratégicas, e por que a impaciência destrói patrimônios.' },
  { number: 2, title: 'Planejamento financeiro inicial', category: 'Fundamentos', summary: 'Metas SMART e como transformar sonhos vagos em objetivos com prazo e valor calculados.' },
  { number: 3, title: 'Controle de gastos mensais', category: 'Organização', summary: 'A técnica de "Pagar a si mesmo primeiro" e como rastrear os vazamentos silenciosos no orçamento.' },
  { number: 4, title: 'Diferença entre gastar, poupar e investir', category: 'Fundamentos', summary: 'Como mudar a mentalidade de quem apenas gasta para quem multiplica o poder de compra.' },
  { number: 5, title: 'Erros financeiros mais comuns', category: 'Fundamentos', summary: 'Dívidas caras, falta de orçamento e como evitar que o dinheiro desapareça sem explicação.' },
  { number: 6, title: 'Mentalidade correta antes de investir', category: 'Fundamentos', summary: 'Pensar em décadas e usar os juros compostos a favor do seu futuro com paciência.' },
  { number: 7, title: 'Como organizar o dinheiro antes de investir', category: 'Organização', summary: 'Diagnóstico financeiro e a construção de alicerces sólidos antes de qualquer risco.' },
  { number: 8, title: 'O que fazer antes de colocar o primeiro dinheiro em risco', category: 'Primeiros Passos', summary: 'O checklist obrigatório de segurança pré-aplicação que separa o investidor consciente do impulsivo.' },
  { number: 9, title: 'Listas práticas e exemplos simples', category: 'Organização', summary: 'A Regra 50-30-20 na prática: 50% necessidades, 30% desejos e 20% prioridades e poupança.' },
  { number: 10, title: 'Como criar reserva de emergência', category: 'Primeiros Passos', summary: 'O cálculo dos 3 a 6 meses de despesas básicas e onde alocar com liquidez diária e segurança.' },
  { number: 11, title: 'Avaliando opções de investimento iniciais', category: 'Primeiros Passos', summary: 'Renda Fixa, liquidez, rentabilidade e a importância de entender exatamente onde o capital está.' },
  { number: 12, title: 'Lidando com medo de perder dinheiro', category: 'Fundamentos', summary: 'Como transformar o medo paralisante em cautela informada através da educação contínua.' },
  { number: 13, title: 'Erros de investimento de iniciantes', category: 'Primeiros Passos', summary: 'Falta de constância, tentar adivinhar o momento certo do mercado e a armadilha da ganância.' },
  { number: 14, title: 'Estratégias para investir pouco dinheiro', category: 'Primeiros Passos', summary: 'Desmistificando o mito: como começar com quantias modestas e aportes regulares.' },
  { number: 15, title: 'Como estudar sobre investimentos', category: 'Fundamentos', summary: 'Fontes confiáveis, indicadores básicos (inflação e juros) e como fugir de falsos gurus.' },
  { number: 16, title: 'Construindo hábitos financeiros saudáveis', category: 'Organização', summary: 'Registro diário, revisão mensal e o hábito de celebrar pequenas vitórias ao longo do caminho.' },
  { number: 17, title: 'Como evitar decisões impulsivas', category: 'Proteção e Plano', summary: 'A Regra das 24 Horas e como se blindar contra o bombardeio de boatos e euforia alheia.' },
  { number: 18, title: 'Exemplos de sucesso com planejamento', category: 'Fundamentos', summary: 'Casos inspiradores de quem começou do zero e priorizou a constância e quitação de passivos.' },
  { number: 19, title: 'Como definir objetivos financeiros claros', category: 'Organização', summary: 'As três perguntas essenciais: O que quero? Em quanto tempo? De quanto preciso?' },
  { number: 20, title: 'Qual é a quantia segura do seu dinheiro para investir', category: 'Proteção e Plano', summary: 'Nunca invista dinheiro que você precisará nos próximos meses para necessidades vitais.' },
  { number: 21, title: 'Separação de contas pessoais e investimentos', category: 'Organização', summary: 'Como dividir na prática o dinheiro do dia a dia, da poupança e dos investimentos.' },
  { number: 22, title: 'Como aumentar renda antes de investir', category: 'Organização', summary: 'Fontes alternativas e habilidades práticas para gerar mais fôlego financeiro.' },
  { number: 23, title: 'Como evitar golpes e falsas promessas financeiras', category: 'Proteção e Plano', summary: 'Sinais vermelhos: lucros garantidos, pressão para aplicar rápido e falta de transparência.' },
  { number: 24, title: 'Investir com pouco dinheiro: mito ou realidade', category: 'Primeiros Passos', summary: 'Por que o aprendizado com pouco valor é a melhor escola para preservar grandes capitais no futuro.' },
  { number: 25, title: 'Como acompanhar seus resultados sem ansiedade', category: 'Proteção e Plano', summary: 'Por que não se deve olhar cotações todo dia e como acompanhar de forma serena.' },
  { number: 26, title: 'Quando não investir: momentos certos de esperar', category: 'Proteção e Plano', summary: 'Saber a hora de pagar dívidas caras e organizar a casa antes de arriscar no mercado.' },
  { number: 27, title: 'Erros que fazem pessoas desistirem de investir', category: 'Proteção e Plano', summary: 'Expectativa irreal de retorno rápido e comparação destrutiva com a vida dos outros.' },
  { number: 28, title: 'Plano financeiro simples para os próximos 12 meses', category: 'Proteção e Plano', summary: 'O roteiro em 5 passos para guiar suas ações mensais com disciplina e tranquilidade.' },
  { number: 29, title: 'Resumo das práticas financeiras essenciais', category: 'Proteção e Plano', summary: 'A síntese profissional para uma jornada segura, consistente e bem-sucedida.' },
];

export const SAMPLE_CHAPTER_EXCERPT = {
  introTitle: 'O Medo de Perder Dinheiro e a Busca por Segurança',
  introContent: `Se você está aqui, é provável que já tenha sentido aquela pontada de ansiedade ao pensar em investir dinheiro. O medo de perder o que foi conquistado com tanto esforço é real e totalmente compreensível. Afinal, a mídia está cheia de histórias de pessoas que "perderam tudo" ou que caíram em golpes financeiros, o que naturalmente gera cautela.

Esse medo, no entanto, não deve ser um obstáculo, mas sim um sinal de alerta saudável. Ele indica que você valoriza seu patrimônio e que precisa de conhecimento para se sentir seguro. O investidor inteligente não ignora o risco, ele o compreende e o gerencia através da informação e do planejamento.

A verdade é que o maior risco não está no mercado, mas sim na falta de preparo. Investir sem conhecimento é como dirigir um carro sem saber as regras de trânsito: você pode até chegar ao destino, mas a chance de um acidente é altíssima. O erro mais comum e mais custoso é pular a etapa fundamental da educação financeira.

Este guia foi criado para ser o seu mapa, a sua autoescola financeira. Nossa promessa é simples: oferecer a clareza e a segurança de que você precisa para começar certo.`,
  chapter1Title: 'Capítulo 1: Por que a maioria das pessoas perde dinheiro',
  chapter1Content: `A maioria das pessoas não perde dinheiro por conta de uma grande crise econômica ou de uma queda súbita e inesperada do mercado financeiro. Em vez disso, elas perdem dinheiro devido a decisões que são tomadas com base na falta de informação adequada e nas emoções momentâneas. No mundo do mercado financeiro, o dinheiro tende a passar das mãos de quem é impaciente para as mãos de quem é paciente, ou seja, para aqueles que conseguem manter a calma e a estratégia mesmo em tempos de incerteza.

Um dos principais motivos para essa situação é a falta de educação financeira, que é fundamental para fazer escolhas acertadas. Muitas pessoas tentam investir sem entender conceitos básicos, como os juros compostos, a diversificação de investimentos ou a liquidez dos ativos, o que pode facilmente levar a perdas financeiras significativas. Sem um plano claro e bem definido, iniciantes no mundo dos investimentos podem sentir-se perdidos e vulneráveis, acabando por seguir qualquer dica ou notícia que pareça assustadora, sem a devida análise crítica.

Outro problema comum é a busca por caminhos fáceis e atalhos que prometem riqueza rápida. A crença de que é possível enriquecer rapidamente leva muitas pessoas a caírem em promessas de ganhos fáceis, que frequentemente se revelam fraudes ou investimentos extremamente arriscados...`
};

export const PAYMENT_METHODS: PaymentOption[] = [
  {
    id: 'mpesa',
    name: 'M-Pesa (Vodacom)',
    provider: 'Vodacom Moçambique',
    accountNumber: '84 XXX XXXX (Rumos Seguros)',
    accountName: 'Rumos Seguros / Rosario Paulino',
    badge: 'Mais Popular em Moçambique',
    color: 'from-red-600 to-red-800',
    instructions: [
      'No seu telemóvel, marque *150#',
      'Selecione a opção "Transferir Dinheiro"',
      'Insira o número oficial da Rumos Seguros: 84 XXX XXXX',
      'Digite o valor promocional exato: 397 MT',
      'Confirme o nome do titular e digite o seu PIN',
      'Envie o SMS de confirmação ou o código da transação para o nosso WhatsApp de suporte para liberação imediata do e-book'
    ]
  },
  {
    id: 'emola',
    name: 'E-Mola (Movitel)',
    provider: 'Movitel Moçambique',
    accountNumber: '86/87 XXX XXXX (Rumos Seguros)',
    accountName: 'Rumos Seguros',
    badge: 'Rápido e sem taxas extras',
    color: 'from-orange-600 to-amber-700',
    instructions: [
      'No seu telemóvel, marque *898#',
      'Escolha "Transferência de Dinheiro"',
      'Digite o número de conta E-Mola oficial',
      'Introduza o valor: 397 MT',
      'Insira o seu PIN para confirmar',
      'O link de download e a fatura serão enviados diretamente para o seu e-mail e WhatsApp'
    ]
  },
  {
    id: 'bank',
    name: 'Transferência Bancária (Moçambique)',
    provider: 'Millennium BIM / BCI / Standard Bank',
    accountNumber: 'NIB: 0001 0000 XXXXXXXXXXX XX',
    accountName: 'Rumos Seguros',
    color: 'from-blue-700 to-slate-900',
    instructions: [
      'Acesse o seu aplicativo bancário ou dirija-se a um caixa eletrónico (ATM)',
      'Efetue a transferência de 397 MT para a conta/NIB indicado',
      'No descritivo/referência, coloque o seu primeiro nome e número de telefone',
      'Envie o comprovativo para o e-mail ou WhatsApp oficial para receber o seu arquivo em PDF na hora'
    ]
  },
  {
    id: 'whatsapp',
    name: 'Atendimento Direto no WhatsApp',
    provider: 'Apoio Oficial Rumos Seguros',
    accountNumber: '+258 84 000 0000',
    accountName: 'Assistente Rumos Seguros',
    badge: 'Atendimento Humano',
    color: 'from-emerald-600 to-teal-800',
    instructions: [
      'Clique no botão para falar diretamente com nossa equipe no WhatsApp',
      'Receba as coordenadas de pagamento da sua preferência em tempo real',
      'O livro é enviado diretamente na sua conversa em menos de 3 minutos'
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Manuel Tembe',
    location: 'Maputo, Moçambique',
    role: 'Contabilista & Pai de Família',
    text: 'Eu sempre tive medo de mexer em investimentos porque um colega de trabalho perdeu quase todas as economias num esquema de internet que prometia 30% ao mês. Quando li o Capítulo 23 deste livro, percebi exatamente onde estava a armadilha. O livro do Rosario Paulino me deu a calma que eu precisava. Hoje tenho minha reserva calculada e durmo em paz.',
    highlight: 'Evitou que eu caísse em golpes da internet',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: 'Amina Selemane',
    location: 'Matola, Moçambique',
    role: 'Enfermeira',
    text: 'O que mais me tocou foi o Capítulo 3, que ensina a pagar a si mesmo primeiro. Todo mês o meu salário caía e no dia 15 eu já não sabia para onde tinha ido o dinheiro. Com a regra 50-30-20 do livro, consegui poupar meus primeiros 10.000 MT para emergências da família em apenas 3 meses.',
    highlight: 'Consegui poupar pela primeira vez na vida',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    name: 'Edgar Cossa',
    location: 'Beira, Moçambique',
    role: 'Técnico de Manutenção',
    text: 'Livro direto ao ponto! Nada daquelas palavras complicadas que os economistas usam na televisão. Li em duas noites no telemóvel enquanto voltava para casa. O capítulo sobre começar com pouco dinheiro me provou que eu não precisava ser rico para começar a cuidar do meu futuro.',
    highlight: 'Linguagem simples que qualquer pessoa entende',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
  }
];

export const FAQS = [
  {
    question: 'Como e quando vou receber o livro após o pagamento?',
    answer: 'A entrega é imediata e digital. Assim que o pagamento de 397 MT for confirmado (seja por M-Pesa, e-Mola ou Cartão), o acesso completo à edição oficial do livro é liberado no seu e-mail e enviado também para o seu WhatsApp, garantindo que tenha sempre o seu exemplar guardado.'
  },
  {
    question: 'Por que o preço está com desconto (de 1.250 MT por apenas 397 MT)?',
    answer: 'Esta é uma condição de lançamento oficial da 1ª Edição promovida pela Rumos Seguros para democratizar o acesso à educação financeira real em Moçambique, permitindo que qualquer trabalhador consiga adquirir o material sem comprometer o orçamento do mês.'
  },
  {
    question: 'Consigo ler no telemóvel ou preciso de computador?',
    answer: 'Sim, o livro foi diagramado especialmente em formato digital universal e otimizado para leitura fluida e confortável no ecrã de telemóveis Android, iPhone, tablets ou computadores, sem letras miúdas e sem necessidade de aplicações complexas.'
  },
  {
    question: 'Nunca investi e não tenho conhecimento de finanças. Vou entender?',
    answer: 'Com certeza. O livro foi escrito exatamente para quem está no início absoluto. Os 29 capítulos são curtos (1 a 2 páginas cada), com linguagem clara, direta e exemplos reais do cotidiano, sem jargões de economistas.'
  },
  {
    question: 'O livro promete rentabilidades milagrosas ou recomenda comprar ações específicas?',
    answer: 'Não. A Rumos Seguros condena expressamente promessas irreais. O livro é um guia de educação financeira, mentalidade, organização pessoal e gestão de risco para que você aprenda a tomar suas próprias decisões com segurança.'
  },
  {
    question: 'E se eu comprar e achar que o livro não é para mim?',
    answer: 'Você conta com a nossa Garantia Incondicional de 7 Dias. Se após a leitura você achar que o conteúdo não agregou valor prático, basta nos enviar uma mensagem no WhatsApp ou e-mail que devolveremos 100% dos seus 397 MT sem burocracias.'
  },
  {
    question: 'Eu vivo em Angola, posso comprar nesta página?',
    answer: 'Esta página atual está configurada para Moçambique em Meticais (M-Pesa, E-Mola, BIM, etc.). Em breve lançaremos a versão oficial em Kwanzas (Kz) com Multicaixa Express. No entanto, se quiser adquirir agora em Angola ou exterior, pode chamar nossa equipe no WhatsApp para receber as coordenadas internacionais ou em Kwanzas!'
  }
];
