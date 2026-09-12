export interface Chapter {
  number: number;
  title: string;
  category: 'Fundamentos' | 'Organização' | 'Primeiros Passos' | 'Proteção e Plano';
  summary: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  role: string;
  text: string;
  highlight: string;
  avatar: string;
}

export interface PaymentOption {
  id: 'mpesa' | 'emola' | 'bank' | 'whatsapp';
  name: string;
  provider: string;
  accountNumber: string;
  accountName: string;
  instructions: string[];
  badge?: string;
  color: string;
}
