export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'design';
  level: number;
  icon: string;
  iconUrl?: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
  type: 'work' | 'education' | 'freelance';
}

export interface ContactInfo {
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  location: string;
}

export interface AnimationVariants {
  hidden: { opacity: number; y?: number; x?: number; scale?: number };
  visible: { opacity: number; y?: number; x?: number; scale?: number };
}