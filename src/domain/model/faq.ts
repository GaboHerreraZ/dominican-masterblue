export interface Faq {
  question: string;
  answer: string;
}

export interface Faqs {
  title: string;
  description: string;
  faqs?: Faq[];
}
