
import React from 'react';
import type { ResumeData } from '../../types';
import { Phone, Mail, Linkedin, MapPin } from 'lucide-react';

const ModernCreativeTemplate: React.FC<ResumeData> = (props) => {
    const { fullName, desiredRole, summary, contact, experience, education, skills } = props;
    
    return (
        <div className="flex text-[9pt] leading-normal h-full">
            {/* Left Column */}
            <div className="w-1/3 bg-gray-800 text-white p-6 flex flex-col">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-white tracking-tight">{fullName.split(' ')[0]}</h1>
                    <h1 className="text-3xl font-light text-gray-300 tracking-tight">{fullName.split(' ').slice(1).join(' ')}</h1>
                    <h2 className="text-md text-indigo-300 mt-2">{desiredRole}</h2>
                </header>

                <section className="mt-auto">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-300 border-b border-indigo-300 pb-1 mb-3">Contato</h3>
                    <div className="space-y-2 text-gray-300">
                        <div className="flex items-center gap-2"><Mail size={12} /> {contact.email}</div>
                        <div className="flex items-center gap-2"><Phone size={12} /> {contact.phone}</div>
                        <div className="flex items-center gap-2"><Linkedin size={12} /> {contact.linkedin}</div>
                        <div className="flex items-center gap-2"><MapPin size={12} /> {contact.location}</div>
                    </div>
                </section>
                
                <section className="mt-8">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-300 border-b border-indigo-300 pb-1 mb-3">Habilidades</h3>
                    <ul className="list-disc list-inside text-gray-300">
                        {skills.map(skill => (
                            <li key={skill.id}>{skill.name}</li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* Right Column */}
            <div className="w-2/3 bg-white p-6 overflow-y-auto">
                <section className="mb-6">
                    <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-2">Perfil</h3>
                    <p className="text-gray-600">{summary}</p>
                </section>

                <section className="mb-6">
                    <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-3">Experiência</h3>
                    {experience.map(exp => (
                        <div key={exp.id} className="mb-4 relative pl-4">
                             <div className="absolute left-0 top-1.5 h-1.5 w-1.5 bg-gray-800 rounded-full"></div>
                             <div className="absolute left-[2.5px] top-1.5 h-full w-px bg-gray-200"></div>
                            <h4 className="font-semibold text-base text-gray-900">{exp.role}</h4>
                            <div className="flex justify-between text-xs text-gray-500 mb-1">
                                <span>{exp.company}</span>
                                <span className="font-medium">{exp.period}</span>
                            </div>
                            <p className="text-gray-600">{exp.description}</p>
                        </div>
                    ))}
                </section>

                <section>
                    <h3 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-3">Formação</h3>
                    {education.map(edu => (
                        <div key={edu.id} className="mb-2 relative pl-4">
                            <div className="absolute left-0 top-1.5 h-1.5 w-1.5 bg-gray-800 rounded-full"></div>
                            <h4 className="font-semibold text-base text-gray-900">{edu.degree}</h4>
                            <div className="flex justify-between text-xs text-gray-500">
                               <span>{edu.institution}</span>
                               <span className="font-medium">{edu.period}</span>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export default ModernCreativeTemplate;
