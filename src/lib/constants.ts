import {
  Skill,
  Project,
  Experience,
  ContactInfo,
} from "../types";

// Certificate Images
import tsCertificate from "figma:asset/3bcaa016fee69c985d48fedbc17736f49214ba3b.png";
import reactCertificate from "figma:asset/650a9d440c2f50e570bc306c393cda3efa0080cd.png";
import jsCertificate from "figma:asset/0a7a09e118c65a5859d212dfc31c9eb14c6bd808.png";
import cssCertificate from "figma:asset/28fdf842458df3b47b10d1b74f5b11e869fcc0e9.png";
import htmlCertificate from "figma:asset/fffa7ab732f97edff148fcaa51906df7829ae7b2.png";
import nestCertificate from "figma:asset/eed5e69760a4afe6b153b3fd4a78be485271380b.png";

export const PERSONAL_INFO = {
  name: "Josué Farías",
  title: "Fullstack Developer",
  subtitle:
    "Creando experiencias digitales excepcionales con tecnologías modernas",
  bio: "Desarrollador Fullstack de Asunción, Paraguay con pasión por crear soluciones digitales innovadoras. Combino +1 año de experiencia práctica con habilidades en diseño, pensamiento sistemático y visión estratégica para desarrollar aplicaciones web escalables.",
};

export const SKILLS: Skill[] = [
  {
    id: "1",
    name: "React.js",
    category: "frontend",
    level: 95,
    icon: "⚛️",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    description:
      "Framework principal para desarrollo de aplicaciones web modernas",
  },
  {
    id: "2",
    name: "Next.js",
    category: "frontend",
    level: 90,
    icon: "▲",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    description:
      "Framework React para aplicaciones web full-stack",
  },
  {
    id: "3",
    name: "TypeScript",
    category: "frontend",
    level: 70,
    icon: "📘",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description:
      "Tipado estático para JavaScript, mejorando la robustez del código",
  },
  {
    id: "4",
    name: "Tailwind CSS",
    category: "frontend",
    level: 92,
    icon: "🎨",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    description:
      "Framework CSS utility-first para diseños responsivos",
  },
  {
    id: "5",
    name: "Node.js",
    category: "backend",
    level: 85,
    icon: "🟢",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    description:
      "Runtime de JavaScript para desarrollo backend escalable",
  },
  {
    id: "6",
    name: "NestJS",
    category: "backend",
    level: 75,
    icon: "🔴",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    description:
      "Framework progresivo de Node.js para aplicaciones del lado del servidor",
  },
  {
    id: "7",
    name: "PostgreSQL",
    category: "backend",
    level: 80,
    icon: "💾",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    description: "Base de datos relacional avanzada",
  },
  {
    id: "8",
    name: "MongoDB",
    category: "backend",
    level: 78,
    icon: "💾",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    description:
      "Base de datos NoSQL para aplicaciones modernas",
  },
  {
    id: "9",
    name: "GraphQL",
    category: "backend",
    level: 50,
    icon: "💾",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
    description: "Lenguaje de consulta para APIs",
  },
  {
    id: "10",
    name: "Git",
    category: "tools",
    level: 90,
    icon: "🌿",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    description:
      "Control de versiones y colaboración en proyectos",
  },
  {
    id: "11",
    name: "Vercel",
    category: "tools",
    level: 92,
    icon: "▲",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    description:
      "Plataforma de deployment para aplicaciones web modernas",
  },
  {
    id: "12",
    name: "Figma",
    category: "design",
    level: 85,
    icon: "🎨",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    description:
      "Herramienta de diseño para prototipado y colaboración",
  },
  {
    id: "13",
    name: "Framer Motion",
    category: "design",
    level: 88,
    icon: "✨",
    iconUrl: "YOUR_FRAMER_LOGO_URL",
    description: "Biblioteca de animaciones para React",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Nutri AI",
    description:
      "Dashboard nutricional inteligente con IA que combina ciencia nutricional avanzada",
    longDescription:
      "NutriAI combina inteligencia artificial avanzada con ciencia nutricional para crear el plan alimenticio perfecto que se adapta a tu ADN metabólico único. Una aplicación web completa con dashboard interactivo, análisis de precisión y optimización 24/7.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "OpenAI API",
    ],
    imageUrl: "https://subir-imagen.com/images/2025/10/01/Screenshot-2025-10-01-124639.png",
    githubUrl: "https://github.com/josueFariasVega/nutri-ai",
    liveUrl: "https://nutri-ai-sigma.vercel.app/",
    featured: true,
    status: "completed",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    company: "Desarrollo Fullstack",
    position: "Fullstack Developer (Frontend + Backend)",
    duration: "2024 - Presente",
    description: [
      "Desarrollo de aplicaciones web completas tanto en frontend con React/Next.js como backend con NestJS",
      "Implementación de APIs REST robustas y escalables utilizando NestJS, TypeORM y PostgreSQL",
      "Diseño y desarrollo de arquitecturas backend modulares siguiendo principios SOLID y patrones de diseño",
      "Integración de servicios backend con interfaces modernas de React utilizando TypeScript",
      "Gestión de autenticación, autorización y seguridad en aplicaciones fullstack",
    ],
    technologies: [
      "React",
      "Next.js",
      "NestJS",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "TypeORM",
    ],
    type: "freelance",
  },
  {
    id: "2",
    company: "Formación Autodidacta",
    position: "Desarrollo Web & Backend",
    duration: "2021 - 2024",
    description: [
      "Inicio en desarrollo web desde 2021 con aprendizaje autodidacta continuo",
      "+3 años de contacto con desarrollo web, +1 año de experiencia formal",
      "Especialización progresiva en tecnologías backend: Node.js, NestJS, bases de datos SQL y NoSQL",
      "Enfoque en arquitecturas escalables, APIs RESTful y patrones de desarrollo backend",
      "Desarrollo de proyectos personales integrando frontend y backend de forma profesional",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "NestJS",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    type: "education",
  },
];

export const CERTIFICATES = [
  {
    id: "1",
    title: "Curso de TypeScript",
    issuer: "Ademass",
    date: "2024",
    imageUrl: tsCertificate,
    description: "Dominio de tipado estático avanzado, genéricos e interfaces para aplicaciones robustas."
  },
  {
    id: "2",
    title: "Curso de React",
    issuer: "Ademass",
    date: "2024",
    imageUrl: reactCertificate,
    description: "Desarrollo de interfaces modernas, hooks personalizados y gestión de estado."
  },
  {
    id: "3",
    title: "Curso de JavaScript",
    issuer: "Ademass",
    date: "2023",
    imageUrl: jsCertificate,
    description: "Fundamentos sólidos de ECMAScript, asincronía y manipulación del DOM."
  },
  {
    id: "4",
    title: "Taller de CSS3",
    issuer: "Ademass",
    date: "2023",
    imageUrl: cssCertificate,
    description: "Creación de diseños modernos y responsivos con Flexbox, Grid y animaciones."
  },
  {
    id: "5",
    title: "Curso de HTML5",
    issuer: "Ademass",
    date: "2023",
    imageUrl: htmlCertificate,
    description: "Estructura semántica web, accesibilidad y formularios avanzados."
  },
  {
    id: "6",
    title: "Curso de NestJS",
    issuer: "Ademass",
    date: "2024",
    imageUrl: nestCertificate,
    description: "Desarrollo de APIs escalables y modulares con arquitectura profesional."
  }
];

export const CONTACT_INFO: ContactInfo = {
  email: "jf0981157235@gmail.com",
  github: "https://github.com/josueFariasVega",
  linkedin:
    "https://www.linkedin.com/in/josue-farias-426326267/",
  twitter: "https://twitter.com/josuefarías",
  location: "Asunción, Paraguay",
};