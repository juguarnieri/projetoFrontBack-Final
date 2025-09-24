import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-teal-400 text-white py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-4">
              <span className="text-2xl md:text-3xl">🦴</span>
              <Link href="/" className="text-lg md:text-xl font-bold hover:text-orange-200 transition-colors cursor-pointer">
                DogCare
              </Link>
            </div>
            <p className="text-white opacity-90 leading-relaxed text-sm md:text-base">
              Seu guia completo de cuidados caninos. Proporcionando informações confiáveis 
              para garantir o bem-estar do seu melhor amigo de quatro patas.
            </p>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-orange-400">Links Úteis</h4>
            <ul className="space-y-2">
              <li><Link href="/listagem" className="text-white opacity-90 hover:text-orange-200 transition-colors text-sm md:text-base">📚 Categorias</Link></li>
              <li><Link href="/listagem" className="text-white opacity-90 hover:text-orange-200 transition-colors text-sm md:text-base">📖 Artigos</Link></li>
              <li><Link href="/quiz" className="text-white opacity-90 hover:text-orange-200 transition-colors text-sm md:text-base">🎯 Quiz</Link></li>
              <li><Link href="/sobre-mim" className="text-white opacity-90 hover:text-orange-200 transition-colors text-sm md:text-base">👩‍💻 Sobre</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4 text-orange-400">Contato</h4>
            <ul className="space-y-2 text-white opacity-90">
              <li className="text-sm md:text-base">📧 <span className="break-all">contato@dogcare.com</span></li>
              <li className="text-sm md:text-base">📱 (19) 98755-1593</li>
              <li className="text-sm md:text-base">📍 São Paulo, SP</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-30 mt-6 md:mt-8 pt-6 md:pt-8 text-center">
          <p className="text-white opacity-80 text-xs md:text-sm">
            © 2025 DogCare. Todos os direitos reservados. Feito com ❤️ para os amantes de cães.
          </p>
        </div>
      </div>
    </footer>
  );
}
