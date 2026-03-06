export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  url: string;
  tags: string[];
}

export interface ClientProject {
  id: string;
  clientName: string;
  projectTitle: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
  year: string;
  result: string;
}

export interface Testimonial {
  id: string;
  feedback: string;
  quote: string;
  author: string;
  logo?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  education: string;
  strength: string;
}

import mobileImg from '../assets/mobile.png';

export const services: Service[] = [
  {
    id: 'sites',
    title: 'Sites',
    icon: 'Globe',
    description:
      'Desenvolvimento de sites full-stack customizados com base nas necessidades do seu negócio',
    image: 'https://images.pexels.com/photos/34212896/pexels-photo-34212896.jpeg',
    imageAlt: 'Web development workspace by Jakub Zerdzicki on Pexels',
  },
  {
    id: 'apps',
    title: 'Aplicações',
    icon: 'Smartphone',
    description: 'Aplicações móveis que vão tornar a sua ideia numa realidade',
    image: mobileImg,
    imageAlt: 'Mobile app development by Mohamed_hassan on Pixabay',
  },
  {
    id: 'design',
    title: 'Design',
    icon: 'Palette',
    description:
      'Tornamos o seu produto não apenas funcional mas também esteticamente apelativo',
    image: 'https://images.pexels.com/photos/7640741/pexels-photo-7640741.jpeg',
    imageAlt: 'Creative design team by Yan Krukau on Pexels',
  },
];

export const projects: Project[] = [
  {
    id: 'barbershop',
    title: 'Barbearia',
    description:
      'Site para barbearia não funcional, apenas para demonstração de layout e design',
    image: 'https://www.mpstechnologies.eu/BarberShop.png',
    imageAlt: 'Barbearia project screenshot',
    url: 'https://barbershop-mps.netlify.app',
    tags: ['React', 'CSS', 'Design'],
  },
  {
    id: 'moviefy',
    title: 'Moviefy',
    description:
      'Site de informações sobre filmes onde o foco é o uso e manipulação de APIs',
    image: 'https://www.mpstechnologies.eu/moviefy.png',
    imageAlt: 'Moviefy project screenshot',
    url: 'https://wearemoviefy.netlify.app/',
    tags: ['React', 'API', 'JavaScript'],
  },
  {
    id: 'frota',
    title: 'Frota',
    description:
      'Site focado em administração interna de uma frota de carros com gestão e controlo total',
    image: 'https://www.mpstechnologies.eu/frota.png',
    imageAlt: 'Frota project screenshot',
    url: 'https://gestor-frota.netlify.app/',
    tags: ['React', 'Dashboard', 'Admin'],
  },
];

import sayfeLogo from '../assets/sayfe_logo.png';

export const testimonials: Testimonial[] = [
  {
    id: 'client-1',
    feedback:
      'Superação de espectativas na qualidade e no preenchimento de requisitos funcionais da aplicação.',
    quote: 'Decidi incluir o bónus porque o vosso trabalho foi espectacular.',
    author: 'Sayfe',
    logo: sayfeLogo,
  },
];

import misaelAvatar from '../assets/misael.png';
import pedroAvatar from '../assets/pedro.png';
import samuelAvatar from '../assets/samuel.png';

export const team: TeamMember[] = [
  {
    id: 'misael',
    name: 'Misael Armando',
    role: 'Desenvolvedor full-stack',
    location: 'Lisboa, Portugal',
    avatar: misaelAvatar,
    education: 'Técnico de Programação e Gestão de Sistemas Informáticos',
    strength: 'Especialista em teoria e tecnologia, sugerindo sempre as melhores soluções técnicas para cada desafio.',
  },
  {
    id: 'pedro',
    name: 'Pedro Bonfim',
    role: 'Product Manager',
    location: 'Loures, Portugal',
    avatar: pedroAvatar,
    education: 'Técnico de Programação e Gestão de Sistemas Informáticos',
    strength: 'Garante que a equipa trabalhe sem distrações, gerindo projetos com foco em eficiência e entrega.',
  },
  {
    id: 'samuel',
    name: 'Samuel Santos',
    role: 'Desenvolvedor full-stack',
    location: 'Loures, Portugal',
    avatar: samuelAvatar,
    education: 'Técnico de Programação e Gestão de Sistemas Informáticos',
    strength: 'Focado na execução e resolução de problemas; quando há uma tarefa, encontra sempre o caminho para a concluir.',
  },
];
