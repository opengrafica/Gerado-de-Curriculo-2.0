
import React, { useState } from 'react';
import { useResumeStore } from '../store/useResumeStore';
import type { Experience, Education, Skill } from '../types';
import { ChevronDown, ChevronUp, PlusCircle, Trash2 } from 'lucide-react';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="bg-white rounded-lg shadow-md mb-6">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left p-4 flex justify-between items-center bg-gray-50 rounded-t-lg border-b">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {isOpen ? <ChevronUp className="text-gray-500"/> : <ChevronDown className="text-gray-500" />}
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

const Input: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; placeholder?: string }> = ({ label, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>
);

const TextArea: React.FC<{ label: string; value: string; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; placeholder?: string }> = ({ label, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={4}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    />
  </div>
);


export default function ResumeForm() {
    const store = useResumeStore();

    return (
        <div className="p-4 bg-gray-100 rounded-lg">
            <Section title="Informações Pessoais">
                <Input label="Nome Completo" value={store.fullName} onChange={(e) => store.setField('fullName', e.target.value)} placeholder="Ex: Maria dos Santos" />
                <Input label="Cargo Desejado" value={store.desiredRole} onChange={(e) => store.setField('desiredRole', e.target.value)} placeholder="Ex: Gerente de Projetos" />
                <TextArea label="Resumo Profissional" value={store.summary} onChange={(e) => store.setField('summary', e.target.value)} placeholder="Fale um pouco sobre sua carreira e objetivos..." />
            </Section>

            <Section title="Contato">
                <Input label="Telefone" value={store.contact.phone} onChange={(e) => store.setContactField('phone', e.target.value)} placeholder="(XX) XXXXX-XXXX" />
                <Input label="E-mail" value={store.contact.email} onChange={(e) => store.setContactField('email', e.target.value)} placeholder="seu.email@dominio.com" />
                <Input label="LinkedIn" value={store.contact.linkedin} onChange={(e) => store.setContactField('linkedin', e.target.value)} placeholder="linkedin.com/in/seu-perfil" />
                <Input label="Localização" value={store.contact.location} onChange={(e) => store.setContactField('location', e.target.value)} placeholder="Cidade, Estado" />
            </Section>

            <Section title="Experiência Profissional">
                {store.experience.map((exp: Experience, index: number) => (
                    <div key={exp.id} className="mb-4 p-4 border rounded-md relative">
                        <Input label="Cargo" value={exp.role} onChange={(e) => store.updateExperience(exp.id, 'role', e.target.value)} />
                        <Input label="Empresa" value={exp.company} onChange={(e) => store.updateExperience(exp.id, 'company', e.target.value)} />
                        <Input label="Período" value={exp.period} onChange={(e) => store.updateExperience(exp.id, 'period', e.target.value)} placeholder="Ex: Jan 2020 - Presente" />
                        <TextArea label="Descrição" value={exp.description} onChange={(e) => store.updateExperience(exp.id, 'description', e.target.value)} />
                        <button onClick={() => store.removeExperience(exp.id)} className="absolute top-2 right-2 text-red-500 hover:text-red-700">
                           <Trash2 size={18} />
                        </button>
                    </div>
                ))}
                <button onClick={store.addExperience} className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium">
                   <PlusCircle size={18} /> Adicionar Experiência
                </button>
            </Section>

            <Section title="Formação Acadêmica">
                {store.education.map((edu: Education) => (
                    <div key={edu.id} className="mb-4 p-4 border rounded-md relative">
                        <Input label="Instituição" value={edu.institution} onChange={(e) => store.updateEducation(edu.id, 'institution', e.target.value)} />
                        <Input label="Curso / Grau" value={edu.degree} onChange={(e) => store.updateEducation(edu.id, 'degree', e.target.value)} />
                        <Input label="Período" value={edu.period} onChange={(e) => store.updateEducation(edu.id, 'period', e.target.value)} placeholder="Ex: 2018 - 2022" />
                        <button onClick={() => store.removeEducation(edu.id)} className="absolute top-2 right-2 text-red-500 hover:text-red-700">
                            <Trash2 size={18} />
                        </button>
                    </div>
                ))}
                <button onClick={store.addEducation} className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium">
                    <PlusCircle size={18} /> Adicionar Formação
                </button>
            </Section>

            <Section title="Habilidades">
                <div className="grid grid-cols-2 gap-4">
                    {store.skills.map((skill: Skill) => (
                        <div key={skill.id} className="flex items-center">
                            <input
                                type="text"
                                value={skill.name}
                                onChange={(e) => store.updateSkill(skill.id, e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                            <button onClick={() => store.removeSkill(skill.id)} className="ml-2 text-red-500 hover:text-red-700">
                                <Trash2 size={18} />
                            </button>
                        </div>
                    ))}
                </div>
                <button onClick={store.addSkill} className="mt-4 flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium">
                    <PlusCircle size={18} /> Adicionar Habilidade
                </button>
            </Section>
        </div>
    );
}
