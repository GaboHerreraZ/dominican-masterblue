export interface Faq {
  question: string;
  answer: string;
}

export interface Faqs {
  title: string;
  description: string;
  subtitle: string;
  faqs?: Faq[];
}
