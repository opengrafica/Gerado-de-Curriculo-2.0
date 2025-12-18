
import React from 'react';
import type { ResumeData, TemplateName } from '../types';
import { useResumeStore } from '../store/useResumeStore';
import { Phone, Mail, Linkedin, MapPin, Star } from 'lucide-react';
import ClassicProfessionalTemplate from './templates/ClassicProfessional';
import ModernCreativeTemplate from './templates/ModernCreative';
import ExecutivePremiumTemplate from './templates/ExecutivePremium';

const templates: { name: TemplateName; label: string }[] = [
    { name: 'classic', label: 'Clássico Profissional' },
    { name: 'modern', label: 'Moderno Criativo' },
    { name: 'executive', label: 'Executivo Premium' },
];

export default function ResumePreview() {
    const resumeData = useResumeStore();
    const { template, setTemplate } = resumeData;

    const renderTemplate = () => {
        switch (template) {
            case 'classic':
                return <ClassicProfessionalTemplate {...resumeData} />;
            case 'modern':
                return <ModernCreativeTemplate {...resumeData} />;
            case 'executive':
                return <ExecutivePremiumTemplate {...resumeData} />;
            default:
                return <ClassicProfessionalTemplate {...resumeData} />;
        }
    };
    
    return (
        <div>
            <div className="p-4 bg-gray-50 rounded-t-lg no-print">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">Selecione o Modelo</h3>
                <div className="grid grid-cols-3 gap-2">
                    {templates.map(t => (
                        <button
                            key={t.name}
                            onClick={() => setTemplate(t.name)}
                            className={`px-3 py-2 text-xs font-medium rounded-md transition-colors ${
                                template === t.name 
                                ? 'bg-indigo-600 text-white shadow' 
                                : 'bg-white text-gray-700 hover:bg-gray-100 border'
                            }`}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
            </div>
            <div id="resume-container" className="aspect-[210/297] w-full bg-white shadow-lg overflow-hidden">
                {renderTemplate()}
            </div>
        </div>
    );
}
