import { CHECKOUT_URL } from '../config/checkout';

export interface Chapter {
  number: number;
  title: string;
  category: string;
  summary: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const BOOK_DATA = {
  title: 'Antes de Investir, Aprenda Isto',
  subtitle: 'Um Guia Prático Para Começar Certo',
  author: 'Rosario Paulino',
  edition: '1ª Edição — Dezembro de 2025',
  brand: 'Rumos Seguros',
  format: 'Livro Digital (PDF Interativo)',
  pages: 34,
  chaptersCount: 30,
  readingTime: 'Aproximadamente 45 a 60 minutos',
  originalPrice: 649,
  currentPrice: 349,
  currency: 'MT',
  discountPercentage: 46,
  guaranteeDays: 7,
  checkoutUrl: CHECKOUT_URL,
};

export const FAQS: FAQItem[] = [
  {
    question: 'Como e quando vou receber o livro após o pagamento?',
    answer: 'A disponibilização é imediata e digital. Assim que o pagamento de 349 MT for confirmado (seja por M-Pesa, e-Mola ou Cartão), o acesso completo à edição oficial do livro é enviado para o seu e-mail e disponibilizado também no seu WhatsApp, garantindo que tenha sempre o seu exemplar guardado.'
  },
  {
    question: 'Por que o preço está em valor promocional de 349 MT?',
    answer: 'O preço original do livro é de 649 MT, mas disponibilizamos esta edição com um valor promocional de lançamento de 349 MT para tornar este conhecimento acessível a qualquer trabalhador ou profissional em Moçambique, sem comprometer o orçamento do mês. Por um valor inferior ao de uma refeição simples, tem acesso a 30 capítulos práticos com ferramentas aplicáveis à nossa realidade económica — esta oferta é por tempo limitado e o valor subirá em breve.'
  },
  {
    question: 'Não tenho cartão de crédito ou conta bancária. Como posso pagar?',
    answer: 'Pode pagar diretamente do seu telemóvel através de M-Pesa (Vodacom) ou e-Mola (Movitel) em menos de 1 minuto, sem precisar de cartões Visa ou contas bancárias internacionais. Aceitamos também transferência bancária.'
  },
  {
    question: 'Consigo ler no telemóvel ou preciso de computador?',
    answer: 'Sim, o livro foi diagramado especialmente em formato digital universal e otimizado para leitura fluida e confortável no ecrã de telemóveis Android, iPhone, tablets ou computadores, sem letras miúdas e sem necessidade de aplicações complexas.'
  },
  {
    question: 'Nunca investi e não tenho conhecimento de finanças. Vou entender?',
    answer: 'Com certeza. O livro foi escrito exatamente para quem está no início absoluto. Os 30 capítulos são curtos (1 a 2 páginas cada), com linguagem clara, direta e exemplos reais do quotidiano, sem jargões de economistas.'
  },
  {
    question: 'O livro promete rentabilidades milagrosas ou recomenda comprar ações específicas?',
    answer: 'Não. A Rumos Seguros condena expressamente promessas irreais. O livro é um guia de educação financeira, mentalidade, organização pessoal e gestão de risco para que aprenda a tomar as suas próprias decisões com segurança.'
  },
  {
    question: 'E se eu adquirir e achar que o livro não é para mim?',
    answer: 'Conta com a nossa Garantia Incondicional de 7 Dias. Se após a leitura sentir que o conteúdo não agregou valor prático, basta enviar-nos uma mensagem no WhatsApp ou e-mail que devolveremos 100% dos seus 349 MT sem burocracias.'
  },
  {
    question: 'Eu vivo em Angola, posso comprar nesta página?',
    answer: 'Esta página atual está configurada para Moçambique em Meticais (M-Pesa, e-Mola, etc.). No entanto, se quiser adquirir em Angola ou no exterior, pode contactar a nossa equipa no WhatsApp para receber as coordenadas internacionais ou em Kwanzas!'
  }
];
