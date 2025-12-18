
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import { useResumeStore } from './store/useResumeStore';
import { FileText, Award, Briefcase, Zap } from 'lucide-react';

// Main App component with routing
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/gerador" element={<GeneratorPage />} />
        <Route path="/pagamento" element={<PaymentPage />} />
        <Route path="/sucesso" element={<SuccessPage />} />
        <Route path="/imprimir" element={<PrintPage />} />
      </Routes>
    </HashRouter>
  );
}

// LandingPage Component
const LandingPage: React.FC = () => {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              <FileText className="h-8 w-auto text-indigo-600" />
              <span className="text-xl font-bold tracking-tight text-gray-900">CurrículoPRO</span>
            </a>
          </div>
        </nav>
      </header>

      <main className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#808afc] to-[#4f46e5] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Destaque-se na multidão e conquiste o emprego dos seus sonhos.</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">Crie um currículo profissional em minutos. Nossos modelos são otimizados para sistemas de rastreamento de candidatos (ATS) e projetados por especialistas para maximizar suas chances.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/gerador" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Criar meu currículo agora
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">Otimizado para o Sucesso</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Por que um currículo profissional é crucial?</p>
                <p className="mt-6 text-lg leading-8 text-gray-600">Em um mercado competitivo, a primeira impressão é a que fica. Um currículo bem estruturado é sua principal ferramenta de marketing pessoal.</p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    <div className="relative pl-16">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                <Award className="h-6 w-6 text-white" />
                            </div>
                            Otimizado para ATS
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-600">Nossos modelos são construídos para passar pelos robôs de triagem (ATS), garantindo que seu currículo chegue a um recrutador.</dd>
                    </div>
                    <div className="relative pl-16">
                         <dt className="text-base font-semibold leading-7 text-gray-900">
                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                <Briefcase className="h-6 w-6 text-white" />
                            </div>
                            Design Profissional
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-600">Escolha entre modelos criados por designers, que comunicam profissionalismo e atenção aos detalhes.</dd>
                    </div>
                    <div className="relative pl-16">
                         <dt className="text-base font-semibold leading-7 text-gray-900">
                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                <FileText className="h-6 w-6 text-white" />
                            </div>
                            Exportação para PDF
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-600">Gere um PDF de alta qualidade com um clique, pronto para ser enviado para qualquer vaga de emprego.</dd>
                    </div>
                     <div className="relative pl-16">
                         <dt className="text-base font-semibold leading-7 text-gray-900">
                            <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                                <Zap className="h-6 w-6 text-white" />
                            </div>
                            Rápido e Fácil
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-600">Preencha suas informações em nosso formulário intuitivo e veja seu currículo ser montado em tempo real.</dd>
                    </div>
                </dl>
            </div>
        </div>

        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Preço Simples e Transparente</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Invista na sua carreira com um pagamento único. Sem assinaturas, sem taxas ocultas.</p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Pagamento Único</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">Acesso total ao gerador, todos os modelos e download ilimitado do seu currículo em PDF.</p>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-600">Pague apenas uma vez</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-gray-900">R$5</span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">BRL</span>
                                </p>
                                <Link to="/gerador" className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                    Começar agora
                                </Link>
                                <p className="mt-6 text-xs leading-5 text-gray-600">Plano mensal opcional de R$19,90 para salvar múltiplos currículos (em breve).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

// GeneratorPage Component
const GeneratorPage: React.FC = () => {
    const navigate = useNavigate();

    const handleFinish = () => {
        navigate('/pagamento');
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow-sm no-print">
                <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
                   <Link to="/" className="flex items-center gap-2">
                     <FileText className="h-8 w-auto text-indigo-600" />
                     <h1 className="text-2xl font-bold tracking-tight text-gray-900">Gerador de Currículo</h1>
                   </Link>
                    <button 
                        onClick={handleFinish}
                        className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Finalizar e Gerar PDF
                    </button>
                </div>
            </header>
            <main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="no-print">
                        <ResumeForm />
                    </div>
                    <div className="bg-white p-2 rounded-lg shadow-lg">
                       <ResumePreview />
                    </div>
                </div>
            </main>
        </div>
    );
};


// PaymentPage Component
const PaymentPage: React.FC = () => {
    const navigate = useNavigate();

    const handlePayment = () => {
        // Link de pagamento real do usuário
        const mercadoPagoPaymentUrl = "https://mpago.la/1G8JeoY";

        // Abre o link de pagamento em uma nova aba
        window.open(mercadoPagoPaymentUrl, '_blank');

        // Redireciona o usuário para a página de sucesso na aba atual,
        // simulando a liberação do download após iniciar o pagamento.
        navigate('/sucesso');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900">Quase pronto!</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Seu currículo está incrível! Realize o pagamento para fazer o download em PDF.
                    </p>
                </div>
                <div className="p-6 mt-8 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-medium text-gray-900">Currículo Profissional</span>
                        <span className="text-2xl font-bold text-indigo-600">R$ 5,00</span>
                    </div>
                     <p className="mt-2 text-xs text-gray-500">Pagamento único. Acesso vitalício ao seu currículo gerado.</p>
                </div>
                <div className="mt-6">
                    <button 
                        onClick={handlePayment}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Pagar com Mercado Pago e Baixar
                    </button>
                </div>
                <div className="text-center">
                    <p className="text-xs text-gray-500">
                       Você será redirecionado para um ambiente seguro de pagamento.
                    </p>
                </div>
            </div>
        </div>
    );
};

// SuccessPage Component
const SuccessPage: React.FC = () => {
    const handleDownload = () => {
        window.open('#/imprimir', '_blank');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg text-center">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="text-3xl font-extrabold text-gray-900">Pagamento Aprovado!</h2>
                <p className="mt-2 text-sm text-gray-600">
                    Seu currículo está pronto para download. Clique no botão abaixo para salvá-lo em formato PDF.
                </p>
                <div className="pt-4">
                    <button 
                        onClick={handleDownload}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Baixar Currículo em PDF
                    </button>
                </div>
                 <Link to="/gerador" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Criar outro currículo
                </Link>
            </div>
        </div>
    );
};

// PrintPage Component
const PrintPage: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      window.print();
    }, 500); // Delay to ensure render
  }, []);

  return (
    <div className="bg-white">
        <style>{`
            @page {
                size: A4;
                margin: 0;
            }
            body {
                margin: 0;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
        `}</style>
        <ResumePreview />
    </div>
  );
};
