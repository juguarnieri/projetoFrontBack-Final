import React from "react";

export default function Footer() {
  return (
    <footer className="bg-teal-400 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-3xl">🦴</span>
              <h3 className="text-xl font-bold">DogCare</h3>
            </div>
            <p className="text-white opacity-90 leading-relaxed">
              Seu guia completo de cuidados caninos. Proporcionando informações confiáveis 
              para garantir o bem-estar do seu melhor amigo de quatro patas.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Links Úteis</h4>
            <ul className="space-y-2">
              <li><a href="/listagem" className="text-white opacity-90 hover:text-orange-200 transition-colors">Categorias</a></li>
              <li><a href="/detalhes" className="text-white opacity-90 hover:text-orange-200 transition-colors">Artigos</a></li>
              <li><a href="/quiz" className="text-white opacity-90 hover:text-orange-200 transition-colors">Quiz Interativo</a></li>
              <li><a href="/sobre-mim" className="text-white opacity-90 hover:text-orange-200 transition-colors">Sobre</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400">Contato</h4>
            <ul className="space-y-2 text-white opacity-90">
              <li>📧 contato@dogcare.com</li>
              <li>📱 (11) 99999-9999</li>
              <li>📍 São Paulo, SP</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-30 mt-8 pt-8 text-center">
          <p className="text-white opacity-80">
            © 2025 DogCare. Todos os direitos reservados. Feito com ❤️ para os amantes de cães.
          </p>
        </div>
      </div>
    </footer>
  );
}
