
export interface Contact {
  phone: string;
  email: string;
  linkedin: string;
  location: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
}

export interface Skill {
  id: string;
  name: string;
}

export type TemplateName = 'classic' | 'modern' | 'executive';

export interface ResumeData {
  fullName: string;
  desiredRole: string;
  summary: string;
  contact: Contact;
  experience: Experience[];
  education: Education[];
  skills: Skill[];
  template: TemplateName;
}

export interface ResumeStore extends ResumeData {
  setField: <K extends keyof ResumeData>(field: K, value: ResumeData[K]) => void;
  setContactField: <K extends keyof Contact>(field: K, value: Contact[K]) => void;
  
  addExperience: () => void;
  updateExperience: (id: string, field: keyof Omit<Experience, 'id'>, value: string) => void;
  removeExperience: (id: string) => void;

  addEducation: () => void;
  updateEducation: (id: string, field: keyof Omit<Education, 'id'>, value: string) => void;
  removeEducation: (id: string) => void;

  addSkill: () => void;
  updateSkill: (id: string, value: string) => void;
  removeSkill: (id: string) => void;

  setTemplate: (template: TemplateName) => void;
}
