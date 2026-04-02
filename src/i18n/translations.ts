export type Language = 'en' | 'es';

export interface Translations {
  nav: {
    projects: string;
    stack: string;
    philosophy: string;
    contact: string;
  };
  hero: {
    badge: string;
    headline: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    statsYears: string;
    statsProjects: string;
    statsAvailability: string;
    statsSatisfaction: string;
  };
  projects: {
    badge: string;
    heading: string;
    viewAll: string;
  };
  stack: {
    badge: string;
    heading: string;
  };
  philosophy: {
    badge: string;
    heading: string;
  };
  contact: {
    badge: string;
    heading: string;
    email: string;
    linkedin: string;
    github: string;
  };
  footer: {
    location: string;
    rights: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      projects: 'Projects',
      stack: 'Stack',
      philosophy: 'Philosophy',
      contact: 'Contact',
    },
    hero: {
      badge: 'Available for strategic projects',
      headline: 'Architecting systems where AI is the gold standard of quality.',
      subtitle: 'Senior Software Engineer specializing in High-Performance .NET Architectures and AI Orchestration. Bridging legacy reliability with cognitive automation.',
      ctaPrimary: 'EXECUTE PROJECT_SCAN',
      ctaSecondary: 'READ DOCS.TXT',
      statsYears: 'Years of experience',
      statsProjects: 'Projects delivered',
      statsAvailability: 'Availability',
      statsSatisfaction: 'Client satisfaction',
    },
    projects: {
      badge: 'Case studies',
      heading: 'Selected Architectures',
      viewAll: 'View all',
    },
    stack: {
      badge: 'Technology',
      heading: 'Tech Stack',
    },
    philosophy: {
      badge: 'Principles',
      heading: 'Engineering Philosophy',
    },
    contact: {
      badge: 'Get in touch',
      heading: 'Let\'s Build Something',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: {
      location: 'Managua, Nicaragua',
      rights: 'All rights reserved',
    },
  },
  es: {
    nav: {
      projects: 'Proyectos',
      stack: 'Stack',
      philosophy: 'Filosofía',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Disponible para proyectos estratégicos',
      headline: 'Arquitectando sistemas donde la IA es el estándar de oro en calidad.',
      subtitle: 'Senior Software Engineer especializando en Arquitecturas .NET de Alto Rendimiento y Orquestación de IA. Conectando la confiabilidad legacy con automatización cognitiva.',
      ctaPrimary: 'EJECUTAR PROJECT_SCAN',
      ctaSecondary: 'LEER DOCS.TXT',
      statsYears: 'Años de experiencia',
      statsProjects: 'Proyectos entregados',
      statsAvailability: 'Disponibilidad',
      statsSatisfaction: 'Satisfacción del cliente',
    },
    projects: {
      badge: 'Casos de estudio',
      heading: 'Arquitecturas Seleccionadas',
      viewAll: 'Ver todo',
    },
    stack: {
      badge: 'Tecnología',
      heading: 'Stack Tecnológico',
    },
    philosophy: {
      badge: 'Principios',
      heading: 'Filosofía de Ingeniería',
    },
    contact: {
      badge: 'Contáctame',
      heading: 'Construyamos Algo Juntos',
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub',
    },
    footer: {
      location: 'Managua, Nicaragua',
      rights: 'Todos los derechos reservados',
    },
  },
};

export function getTranslations(lang: Language): Translations {
  return translations[lang];
}
