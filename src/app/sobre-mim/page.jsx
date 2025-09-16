"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export default function SobreMim() {
  const [activeTab, setActiveTab] = useState("historia");

  const skills = [
    { name: "Frontend Development", level: 90, color: "bg-blue-500" },
    { name: "React/Next.js", level: 85, color: "bg-cyan-500" },
    { name: "JavaScript/TypeScript", level: 88, color: "bg-yellow-500" },
    { name: "UI/UX Design", level: 75, color: "bg-purple-500" },
    { name: "Node.js/Backend", level: 80, color: "bg-green-500" },
    { name: "Database Design", level: 70, color: "bg-pink-500" }
  ];

  const projetos = [
    {
      nome: "DogCare Platform",
      descricao: "Plataforma completa para cuidados caninos com sistema de categorias e artigos",
      link: "https://github.com/juguarnieri/dogcare-platform",
      status: "Em desenvolvimento"
    },
    {
      nome: "E-commerce Pet Shop",
      descricao: "Loja virtual especializada em produtos para pets",
      link: "https://github.com/juguarnieri/petshop-ecommerce",
      status: "Concluído"
    },
    {
      nome: "Veterinary Management System",
      descricao: "Sistema de gestão para clínicas veterinárias",
      link: "https://github.com/juguarnieri/vet-management",
      status: "Concluído"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-teal-100 to-cyan-200">
      <Header />
      <main className="flex-grow">
        <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {/* Avatar */}
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                    <img 
                      src="/images/avatar-julia.png" 
                      alt="Júlia Guarnieri" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback caso a imagem não exista
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="w-full h-full bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                      <span className="text-6xl text-white font-bold">J</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                Júlia Andrade Guarnieri
              </h1>
              <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed drop-shadow-md mb-8">
                Desenvolvedora Full Stack apaixonada por criar experiências digitais incríveis e ajudar pets e seus tutores
              </p>
            </div>
          </div>
        </section>

        {/* Tabs Navigation */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg">
              <div className="flex gap-2">
                {[
                  { id: "historia", label: "👩‍💻 Minha História", icon: "🌟" },
                  { id: "habilidades", label: "💪 Habilidades", icon: "⚡" },
                  { id: "projetos", label: "🚀 Projetos", icon: "🎯" },
                  { id: "contato", label: "📞 Contato", icon: "💌" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg transform scale-105"
                        : "text-gray-600 hover:text-teal-600 hover:bg-gray-50"
                    }`}
                  >
                    <span className="hidden md:inline">{tab.label}</span>
                    <span className="md:hidden text-2xl">{tab.icon}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-96">
            {/* História */}
            {activeTab === "historia" && (
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 transform transition-all duration-500 animate-fade-in">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 flex items-center">
                      <span className="text-4xl mr-4">🌟</span>
                      Minha Jornada
                    </h2>
                    <div className="space-y-6 text-gray-700 leading-relaxed">
                      <p className="text-lg">
                        Olá! Sou a <strong className="text-teal-600">Júlia</strong>, uma desenvolvedora apaixonada por tecnologia e, 
                        principalmente, por nossos amigos de quatro patas! 🐕
                      </p>
                      <p>
                        Minha jornada na programação começou há alguns anos, quando descobri que podia usar 
                        código para resolver problemas reais e fazer a diferença na vida das pessoas.
                      </p>
                      <p>
                        O projeto <strong className="text-purple-600">DogCare</strong> nasceu da minha paixão por cães e 
                        do desejo de ajudar tutores iniciantes a cuidarem melhor de seus pets. Combinando 
                        conhecimento técnico com amor pelos animais!
                      </p>
                      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-2xl border-l-4 border-teal-500">
                        <p className="font-medium text-teal-800">
                          💡 "Acredito que a tecnologia deve ser usada para criar um mundo melhor, 
                          incluindo nossos companheiros de quatro patas!"
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="relative inline-block">
                      <div className="w-80 h-80 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                        <span className="text-9xl">👩‍💻</span>
                      </div>
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-3xl">🚀</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Habilidades */}
            {activeTab === "habilidades" && (
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 transform transition-all duration-500 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                  Minhas Habilidades
                </h2>
                
                <div className="flex flex-wrap justify-center gap-4">
                  {["React", "Next.js", "JavaScript", "TypeScript", "Node.js", "TailwindCSS", "MongoDB", "PostgreSQL", "Git", , "HTML", "CSS", "React Native"].map((tech) => (
                    <span key={tech} className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Projetos */}
            {activeTab === "projetos" && (
              <div className="space-y-8 transform transition-all duration-500 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                  Meus Projetos
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projetos.map((projeto, index) => (
                    <div key={projeto.nome} className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-teal-600 transition-colors">
                          {projeto.nome}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          projeto.status === "Concluído" 
                            ? "bg-green-100 text-green-800" 
                            : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {projeto.status}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {projeto.descricao}
                      </p>
                      <div className="flex justify-center">
                        <a 
                          href={projeto.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-2 rounded-full font-medium hover:from-teal-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          Ver Projeto
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contato */}
            {activeTab === "contato" && (
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 transform transition-all duration-500 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                  Vamos Conversar!
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <div className="space-y-6">
                      <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white text-sm font-bold">@</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">Email</p>
                          <p className="text-gray-600">julia.guarnieri@exemplo.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white text-sm font-bold">in</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">LinkedIn</p>
                          <p className="text-gray-600">linkedin.com/in/julia-guarnieri</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center p-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mr-4">
                          <span className="text-white text-sm font-bold">git</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">GitHub</p>
                          <p className="text-gray-600">github.com/juguarnieri</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        Interessado em colaborar?
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Estou sempre aberta a novos projetos, especialmente aqueles que 
                        envolvem tecnologia para o bem-estar animal!
                      </p>
                      <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:from-teal-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Entre em Contato
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <ScrollToTop />
      </main>
      
      <Footer />
      
      <style jsx>{`
        @keyframes fillBar {
          from { width: 0%; }
          to { width: var(--target-width); }
        }
        
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
