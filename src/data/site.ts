import type { ImageMetadata } from 'astro';
import suplogImage from '../assets/projects/suplog.png';
import cumbucaImage from '../assets/projects/cumbuca.png';
import comingSoonImage from '../assets/projects/em-breve.png';
import { buildWhatsappMessage, buildWhatsappUrl } from '../lib/whatsapp';

// Todo o conteúdo do site fica aqui: edite este arquivo para trocar textos, links e contatos.

export const site = {
  // Trocar pelo domínio próprio quando houver (usado em canonical, sitemap e Open Graph).
  url: 'https://pmenezesdev.github.io',
  name: 'Pedro Menezes',
  firstName: 'Pedro',
  title: 'Desenvolvedor Full-stack',
  city: 'Caruaru',
  state: 'PE',
  startYear: 2022,
  seo: {
    title: 'Pedro Menezes | Desenvolvedor Full-stack — Landing Pages, Sites e Sistemas',
    description:
      'Criação de landing pages, sites, sistemas internos e aplicações web sob medida. Desenvolvedor full-stack em Caruaru–PE atendendo todo o Brasil, com qualidade, preço justo e suporte.',
    keywords: [
      'desenvolvedor full-stack',
      'criação de landing page',
      'criação de sites',
      'sistema interno para empresas',
      'desenvolvimento de sistemas web',
      'desenvolvedor freelancer',
      'programador Caruaru',
      'criação de sites Pernambuco',
    ],
  },
  contact: {
    // Número com DDI + DDD, só dígitos.
    whatsapp: '5581989025602',
    // TODO: preencher ou deixar vazio ('') para esconder.
    email: '',
  },
  social: {
    github: 'https://github.com/pmenezesdev',
    linkedin: 'https://www.linkedin.com/in/pmenezesdev/',
    instagram: '',
  },
};

// Vendedores parceiros. Cada um divulga o link `https://seusite/?ref=<slug>`
// e a mensagem do WhatsApp chega identificando a indicação.
export const sellers: { slug: string; name: string }[] = [
  { slug: 'renata', name: 'Renata' },
  { slug: 'henrique', name: 'Henrique' },
];

export type Project = {
  title: string;
  category: string;
  description: string;
  stack: string[];
  image: ImageMetadata;
  imageAlt: string;
  liveUrl?: string;
  /** Assunto da mensagem do botão "Quero um parecido", exibido quando não há demo. */
  topic?: string;
};

export const projects: Project[] = [
  {
    title: 'Cumbuca — Soparia',
    category: 'Cardápio digital',
    description:
      'Cardápio digital de uma soparia nordestina: catálogo de caldos, cuscuz e tapioca com fotos, sacola de pedidos e mensagem do pedido pronta para enviar.',
    stack: ['HTML', 'Tailwind CSS', 'JavaScript'],
    image: cumbucaImage,
    imageAlt:
      'Página inicial do cardápio digital da Cumbuca, com uma cumbuca de sopa e o título O Autêntico Sabor do Sertão na Cumbuca',
    liveUrl: 'https://pmenezesdev.github.io/cumbuca-soparia/',
  },
  {
    title: 'SUPLOG — Comércio Exterior',
    category: 'Landing page',
    description:
      'Landing page para empresa de importação e exportação de Recife: apresentação de serviços, FAQ e formulário que envia o pedido direto para o WhatsApp do comercial.',
    stack: ['React', 'Vite', 'CSS', 'GitHub Pages'],
    image: suplogImage,
    imageAlt: 'Tela inicial da landing page da SUPLOG, com fotos de navios e contêineres',
    liveUrl: 'https://pmenezesdev.github.io/suplog/',
  },
  {
    // TODO: substituir pelos dados do projeto que ainda será lançado.
    title: 'Novo projeto',
    category: 'Em breve',
    description:
      'Um novo sistema está em desenvolvimento e será publicado aqui em breve. Quer algo parecido para o seu negócio? Vamos conversar.',
    stack: ['TypeScript', 'Node.js', 'PostgreSQL'],
    image: comingSoonImage,
    imageAlt: 'Editor de código com o novo projeto em desenvolvimento',
    topic: 'um sistema sob medida',
  },
];

export const services = [
  {
    title: 'Landing pages',
    description: 'Páginas de alta conversão para campanhas, lançamentos e captação de clientes pelo WhatsApp.',
  },
  {
    title: 'Sites institucionais',
    description: 'Seu negócio apresentado com credibilidade, rápido, responsivo e pronto para aparecer no Google.',
  },
  {
    title: 'Sistemas internos',
    description: 'Painéis, controle de estoque, agendamentos e CRMs que organizam a rotina e eliminam planilhas.',
  },
  {
    title: 'SaaS e aplicações web',
    description: 'Do MVP ao produto completo: login, pagamentos, área do cliente e painel administrativo.',
  },
  {
    title: 'E-commerce',
    description: 'Lojas virtuais com catálogo, carrinho, pagamento online e gestão de pedidos.',
  },
  {
    title: 'Automações e integrações',
    description: 'APIs, integrações com WhatsApp e outros sistemas, e rotinas que trabalham por você.',
  },
  {
    title: 'Apps mobile',
    description: 'Aplicativos para Android e iOS conectados ao seu sistema e aos seus clientes.',
  },
  {
    title: 'Manutenção e suporte',
    description: 'Atualizações, correções, melhorias e acompanhamento contínuo depois da entrega.',
  },
];

export const differentials = [
  {
    title: 'Qualidade',
    description: 'Código limpo, design cuidadoso e foco em desempenho e SEO desde o primeiro dia.',
  },
  {
    title: 'Preço justo',
    description: 'Orçamento claro, sem surpresas, com opções que cabem no momento do seu negócio.',
  },
  {
    title: 'Suporte de verdade',
    description: 'Atendimento direto com quem desenvolveu, antes, durante e depois da entrega.',
  },
];

export const process = [
  { title: 'Conversa', description: 'Entendemos seu negócio, seu público e o que você precisa.' },
  { title: 'Proposta', description: 'Você recebe escopo, prazo e valor fechados, sem letras miúdas.' },
  { title: 'Desenvolvimento', description: 'Você acompanha cada etapa e aprova antes de publicar.' },
  { title: 'Entrega e suporte', description: 'Site no ar, treinamento de uso e suporte após a entrega.' },
];

export const stack = [
  {
    title: 'Front-end',
    items: ['TypeScript', 'JavaScript', 'React', 'Next.js', 'Angular', 'Vite', 'HTML5'],
  },
  {
    title: 'Estilos',
    items: ['CSS3', 'Tailwind CSS', 'Angular Material', 'Design responsivo'],
  },
  {
    title: 'Back-end',
    items: ['Node.js', 'Express', 'Fastify', 'C#', '.NET', 'Python', 'PostgreSQL', 'Prisma'],
  },
  {
    title: 'DevOps & Cloud',
    items: ['Docker', 'Git', 'GitHub Actions', 'Firebase', 'Vercel', 'Render'],
  },
];

export const experience = [
  {
    period: '2026 — atual',
    duration: 'Tempo integral',
    company: 'E3 Digital',
    role: 'Desenvolvedor Full-stack',
    stack: 'React & Node.js',
  },
  {
    period: '2024 — atual',
    duration: 'Freelancer · remoto',
    company: 'Workana',
    role: 'Desenvolvedor Freelancer',
    stack: 'Sites & Sistemas',
  },
  {
    period: '2023 — 2024',
    duration: '7 meses',
    company: 'SuperGeeks',
    role: 'Instrutor de Programação',
    stack: 'JavaScript & Git',
  },
  {
    period: '2022 — 2023',
    duration: '10 meses',
    company: 'Programmers Beyond IT',
    role: 'Software Trainee',
    stack: 'Angular & React',
  },
];

export const faq = [
  {
    question: 'Quanto custa criar uma landing page ou site?',
    answer:
      'O valor depende do número de seções, das integrações e do prazo. Depois de uma conversa rápida pelo WhatsApp você recebe um orçamento fechado, sem custos escondidos.',
  },
  {
    question: 'Quanto tempo leva para ficar pronto?',
    answer:
      'Landing pages costumam ficar prontas em 1 a 2 semanas. Sites institucionais e sistemas variam conforme o escopo, e o prazo é definido na proposta.',
  },
  {
    question: 'Você atende empresas fora de Caruaru?',
    answer:
      'Sim. O atendimento é 100% online e atendo empresas e profissionais de todo o Brasil, com reuniões por vídeo e acompanhamento pelo WhatsApp.',
  },
  {
    question: 'O site vai aparecer no Google?',
    answer:
      'Todos os projetos são desenvolvidos com boas práticas de SEO: carregamento rápido, estrutura correta, metatags, sitemap e dados estruturados para o Google entender seu negócio.',
  },
  {
    question: 'Você cuida do domínio e da hospedagem?',
    answer:
      'Sim. Posso orientar a compra do domínio e configurar a hospedagem, e o site é entregue publicado e funcionando.',
  },
  {
    question: 'E depois da entrega, tenho suporte?',
    answer:
      'Sim. Todo projeto inclui um período de suporte, e também há planos de manutenção mensal para atualizações e melhorias contínuas.',
  },
];

export const yearsOfExperience = new Date().getFullYear() - site.startYear;

export function whatsappUrl(topic?: string) {
  return buildWhatsappUrl(
    site.contact.whatsapp,
    buildWhatsappMessage({ firstName: site.firstName, topic }),
  );
}
