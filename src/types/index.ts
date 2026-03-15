export interface NavItem {
  name: string;
  href: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl: string | null;
  repoUrl: string | null;
  videoUrl?: string;
  featured: boolean;
  category: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Skills {
  backend: SkillCategory;
  ai: SkillCategory;
  frontend: SkillCategory;
  cloud: SkillCategory;
  languages: SkillCategory;
}

export interface Responsibility {
  title: string;
  details: string;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  period: string;
  description: string;
  responsibilities: Responsibility[];
  technologies: string[];
  url: string | null;
}

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  imageUrl: string;
  category: string;
  featured: boolean;
}
