
import React from 'react';
import type { ResumeData } from '../../types';
import { Phone, Mail, Linkedin, MapPin } from 'lucide-react';

const ClassicProfessionalTemplate: React.FC<ResumeData> = (props) => {
    const { fullName, desiredRole, summary, contact, experience, education, skills } = props;

    return (
        <div className="p-8 bg-white text-gray-800 font-sans text-[10pt] leading-snug">
            <header className="text-center mb-6 border-b pb-4 border-gray-300">
                <h1 className="text-4xl font-bold font-serif text-gray-900">{fullName}</h1>
                <h2 className="text-lg font-medium text-indigo-700 mt-1">{desiredRole}</h2>
            </header>

            <section className="flex justify-center items-center gap-x-6 gap-y-2 text-xs mb-6 flex-wrap">
                <div className="flex items-center gap-1.5"><Mail size={12} /> {contact.email}</div>
                <div className="flex items-center gap-1.5"><Phone size={12} /> {contact.phone}</div>
                <div className="flex items-center gap-1.5"><Linkedin size={12} /> {contact.linkedin}</div>
                <div className="flex items-center gap-1.5"><MapPin size={12} /> {contact.location}</div>
            </section>

            <section className="mb-6">
                <h3 className="text-sm font-bold font-serif uppercase tracking-wider text-indigo-800 border-b-2 border-indigo-200 pb-1 mb-3">Resumo Profissional</h3>
                <p className="text-gray-700">{summary}</p>
            </section>

            <section className="mb-6">
                <h3 className="text-sm font-bold font-serif uppercase tracking-wider text-indigo-800 border-b-2 border-indigo-200 pb-1 mb-3">Experiência Profissional</h3>
                {experience.map(exp => (
                    <div key={exp.id} className="mb-4">
                        <h4 className="font-bold text-base text-gray-900">{exp.role}</h4>
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>{exp.company}</span>
                            <span className="font-medium">{exp.period}</span>
                        </div>
                        <p className="mt-1 text-gray-700">{exp.description}</p>
                    </div>
                ))}
            </section>

            <section className="mb-6">
                <h3 className="text-sm font-bold font-serif uppercase tracking-wider text-indigo-800 border-b-2 border-indigo-200 pb-1 mb-3">Formação Acadêmica</h3>
                {education.map(edu => (
                    <div key={edu.id} className="mb-2">
                        <h4 className="font-bold text-base text-gray-900">{edu.degree}</h4>
                        <div className="flex justify-between text-sm text-gray-600">
                           <span>{edu.institution}</span>
                           <span className="font-medium">{edu.period}</span>
                        </div>
                    </div>
                ))}
            </section>
            
            <section>
                <h3 className="text-sm font-bold font-serif uppercase tracking-wider text-indigo-800 border-b-2 border-indigo-200 pb-1 mb-3">Habilidades</h3>
                <div className="flex flex-wrap gap-2">
                    {skills.map(skill => (
                        <span key={skill.id} className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-1 rounded-full">{skill.name}</span>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ClassicProfessionalTemplate;
