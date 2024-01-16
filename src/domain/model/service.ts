export interface Service {
  title: string;
  description: string;
  image: any;
  link: string;
  tips?: Tips[];
  right: boolean;
}

interface Tips {
  title: string;
  description: string;
}
