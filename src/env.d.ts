/// <reference types="astro/client" />

declare module "@cv" {
  interface Basics {
    name: string;
    label: string;
    image: string;
    email: string;
    url: string;
    summary: string;
    location: {
      address: string;
      postalCode: string;
      city: string;
      countryCode: string;
      region: string;
    };
    profiles: Array<{
      network: string;
      username: string;
      url: string;
    }>;
  }

  interface Work {
    name: string;
    position: string;
    url: string;
    startDate: string;
    endDate?: string;
    summary: string;
    highlights: string[];
  }

  interface Education {
    institution: string;
    url: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    score: string;
    courses: string[];
  }

  interface Skill {
    name: string;
    level: string;
    keywords: string[];
  }

  interface Language {
    language: string;
    fluency: string;
  }

  interface Project {
    name: string;
    isActive: boolean;
    description: string;
    highlights: string[];
    url?: string;
    github?: string;
    image?: string;
  }

  interface Publication {
    name: string;
    releaseDate: string;
    publisher: string;
    url: string;
    summary: string;
  }

  interface CV {
    basics: Basics;
    work: Work[];
    education: Education[];
    skills: Skill[];
    languages: Language[];
    projects: Project[];
    publications?: Publication[];
  }

  const cv: CV;
  export const basics: Basics;
  export const work: Work[];
  export const education: Education[];
  export const skills: Skill[];
  export const languages: Language[];
  export const projects: Project[];
  export const publications: Publication[];
  export default cv;
}
