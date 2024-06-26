import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Linkedin,
  Twitter,
  Rss,
  Twitch,
  Youtube,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
} from 'lucide-react';

export const socialNetworks = [
  {
    id: 1,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: 'https://www.linkedin.com/in/ernesto-luismaria-pariona-d%C3%ADaz/',
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: 'Home',
    icon: <HomeIcon size={25} color='#fff' strokeWidth={1} />,
    link: '/',
  },
  {
    id: 2,
    title: 'User',
    icon: <UserRound size={25} color='#fff' strokeWidth={1} />,
    link: '/about-me',
  },
  {
    id: 3,
    title: 'Book',
    icon: <BookText size={25} color='#fff' strokeWidth={1} />,
    link: '/services',
  },
  {
    id: 4,
    title: 'Target',
    icon: <CodeSquare size={25} color='#fff' strokeWidth={1} />,
    link: '/portfolio',
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: 'Frontend Developer',
    subtitle: 'Arco Iris Comunicación Integral',
    description:
      'Colabora con un equipo dinámico para desarrollar interfaces de usuario atractivas y funcionales que impulsen el éxito de nuestros clientes en el mundo digital.',
    date: 'Nov 2023 ',
  },
  {
    id: 2,
    title: 'Desarrollador web',
    subtitle: 'YarosLab',
    description: 'Desarrollo web con Python, desarrollo de módulos para ODOO',
    date: 'Dic 2013',
  },
  {
    id: 3,
    title: 'Administrador web',
    subtitle: 'Panacea Consultore',
    description:
      'Mantenimiento de las páginas de las radios de "La Zona" y "Studio92".',
    date: 'Dic 2012',
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 3,
    text: 'Años de experiencia',
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 30,
    text: 'Clientes satisfechos',
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 15,
    text: 'Proyectos finalizados',
    lineRight: false,
    lineRightMobile: false,
  },
];

export const serviceData = [
  {
    icon: <Pencil />,
    title: 'Diseño web',
    description:
      'Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario',
  },
  {
    icon: <Computer />,
    title: 'Desarrollo web',
    description:
      'Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades',
  },
  {
    icon: <Rocket />,
    title: 'SEO',
    description:
      'Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ',
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: 'Pariona Abogados',
    image: '/rpa.png',
    urlDemo: 'https://www.rpa.pe',
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: 'George Snow',
    description:
      '¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!',
    imageUrl: '/profile1.png',
  },
  {
    id: 2,
    name: 'Juan Pérez',
    description:
      'Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!',
    imageUrl: '/profile2.png',
  },
  {
    id: 3,
    name: 'María García',
    description:
      'Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!',
    imageUrl: '/profile3.png',
  },
  {
    id: 4,
    name: 'Laura Snow',
    description:
      '¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.',
    imageUrl: '/profile4.png',
  },
  {
    id: 5,
    name: 'Carlos Sánchez',
    description:
      'Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!',
    imageUrl: '/profile5.png',
  },
  {
    id: 6,
    name: 'Antonio Martínez',
    description:
      '¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!',
    imageUrl: '/profile6.png',
  },
];
