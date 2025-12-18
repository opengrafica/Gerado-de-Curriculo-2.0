
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ResumeStore, Experience, Education, Skill, TemplateName } from '../types';

const initialResumeState = {
  fullName: 'João da Silva',
  desiredRole: 'Desenvolvedor Front-end Sênior',
  summary: 'Profissional com mais de 8 anos de experiência em desenvolvimento de interfaces web responsivas e de alta performance. Especialista em React, TypeScript e ecossistema moderno de JavaScript. Busco desafios que me permitam contribuir para produtos inovadores e colaborar com equipes talentosas.',
  contact: {
    phone: '(11) 98765-4321',
    email: 'joao.silva@email.com',
    linkedin: 'linkedin.com/in/joaodasilva',
    location: 'São Paulo, SP'
  },
  experience: [
    { id: 'exp1', role: 'Desenvolvedor Front-end Sênior', company: 'Tech Solutions Inc.', period: 'Jan 2020 - Presente', description: 'Liderança técnica em projetos de e-commerce, migração de legados para React e otimização de performance, resultando em 30% de aumento na velocidade de carregamento.' },
    { id: 'exp2', role: 'Desenvolvedor Front-end Pleno', company: 'Web Agency Creative', period: 'Jun 2017 - Dez 2019', description: 'Desenvolvimento de websites e aplicações interativas para clientes de diversos setores, utilizando HTML5, CSS3, e JavaScript (jQuery e React).'},
  ],
  education: [
    { id: 'edu1', institution: 'Universidade de São Paulo (USP)', degree: 'Bacharelado em Ciência da Computação', period: '2013 - 2017' },
  ],
  skills: [
    { id: 'skill1', name: 'React' },
    { id: 'skill2', name: 'TypeScript' },
    { id: 'skill3', name: 'Node.js' },
    { id: 'skill4', name: 'Tailwind CSS' },
    { id: 'skill5', name: 'Figma' },
  ],
  template: 'classic' as TemplateName,
};


export const useResumeStore = create<ResumeStore>()(
  persist(
    (set) => ({
      ...initialResumeState,
      setField: (field, value) => set({ [field]: value }),
      setContactField: (field, value) => set((state) => ({ contact: { ...state.contact, [field]: value } })),
      
      addExperience: () => set((state) => ({
        experience: [...state.experience, { id: `exp${Date.now()}`, role: '', company: '', period: '', description: '' }]
      })),
      updateExperience: (id, field, value) => set((state) => ({
        experience: state.experience.map(exp => exp.id === id ? { ...exp, [field]: value } : exp)
      })),
      removeExperience: (id) => set((state) => ({
        experience: state.experience.filter(exp => exp.id !== id)
      })),

      addEducation: () => set((state) => ({
        education: [...state.education, { id: `edu${Date.now()}`, institution: '', degree: '', period: '' }]
      })),
      updateEducation: (id, field, value) => set((state) => ({
        education: state.education.map(edu => edu.id === id ? { ...edu, [field]: value } : edu)
      })),
      removeEducation: (id) => set((state) => ({
        education: state.education.filter(edu => edu.id !== id)
      })),

      addSkill: () => set((state) => ({
        skills: [...state.skills, { id: `skill${Date.now()}`, name: '' }]
      })),
      updateSkill: (id, value) => set((state) => ({
        skills: state.skills.map(skill => skill.id === id ? { ...skill, name: value } : skill)
      })),
      removeSkill: (id) => set((state) => ({
        skills: state.skills.filter(skill => skill.id !== id)
      })),
      
      setTemplate: (template) => set({ template }),
    }),
    {
      name: 'resume-storage', // name of the item in the storage (must be unique)
    }
  )
);
