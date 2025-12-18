
import React from 'react';
import type { ResumeData } from '../../types';
import { Phone, Mail, Linkedin, MapPin } from 'lucide-react';

const ExecutivePremiumTemplate: React.FC<ResumeData> = (props) => {
    const { fullName, desiredRole, summary, contact, experience, education, skills } = props;

    return (
        <div className="p-10 bg-white text-gray-800 font-serif text-[10.5pt] leading-relaxed">
            <header className="mb-8">
                <h1 className="text-5xl font-extrabold tracking-tight text-gray-900">{fullName}</h1>
                <h2 className="text-xl font-medium text-indigo-600 tracking-wide mt-2">{desiredRole}</h2>
            </header>

            <div className="grid grid-cols-3 gap-8">
                {/* Main Content Column */}
                <div className="col-span-2">
                    <section className="mb-8">
                        <p className="border-l-4 border-indigo-500 pl-4 text-gray-700 italic">{summary}</p>
                    </section>
                    
                    <section className="mb-8">
                        <h3 className="text-base font-bold uppercase tracking-widest text-gray-500 mb-4">Experiência</h3>
                        {experience.map(exp => (
                            <div key={exp.id} className="mb-5">
                                <div className="flex justify-between items-baseline">
                                    <h4 className="font-bold text-lg text-gray-900">{exp.role}</h4>
                                    <span className="text-xs font-sans font-semibold text-gray-500">{exp.period}</span>
                                </div>
                                <h5 className="text-md font-medium text-indigo-700 mb-1">{exp.company}</h5>
                                <p className="text-gray-600 font-sans text-sm">{exp.description}</p>
                            </div>
                        ))}
                    </section>
                </div>

                {/* Sidebar Column */}
                <div className="col-span-1">
                    <section className="mb-8">
                        <h3 className="text-base font-bold uppercase tracking-widest text-gray-500 mb-4">Contato</h3>
                        <div className="space-y-2 text-sm font-sans">
                            <div className="flex items-center gap-2"><Mail size={14} className="text-indigo-600" /> {contact.email}</div>
                            <div className="flex items-center gap-2"><Phone size={14} className="text-indigo-600" /> {contact.phone}</div>
                            <div className="flex items-center gap-2"><Linkedin size={14} className="text-indigo-600" /> {contact.linkedin}</div>
                            <div className="flex items-center gap-2"><MapPin size={14} className="text-indigo-600" /> {contact.location}</div>
                        </div>
                    </section>
                    
                    <section className="mb-8">
                        <h3 className="text-base font-bold uppercase tracking-widest text-gray-500 mb-4">Formação</h3>
                        {education.map(edu => (
                            <div key={edu.id} className="mb-3">
                                <h4 className="font-bold text-md text-gray-900">{edu.degree}</h4>
                                <p className="text-sm text-gray-600 font-sans">{edu.institution}</p>
                                <p className="text-xs text-gray-500 font-sans">{edu.period}</p>
                            </div>
                        ))}
                    </section>
                    
                    <section>
                        <h3 className="text-base font-bold uppercase tracking-widest text-gray-500 mb-4">Habilidades</h3>
                        <ul className="font-sans text-sm">
                            {skills.map(skill => (
                                <li key={skill.id} className="mb-1 flex items-center">
                                    <span className="w-2 h-2 bg-indigo-500 block mr-2 flex-shrink-0"></span>
                                    <span>{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ExecutivePremiumTemplate;
