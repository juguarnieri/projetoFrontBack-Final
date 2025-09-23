"use client";

export default function HistoriaTab() {
  return (
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
              Minha jornada na programação começou ano passado, quando descobri que podia usar 
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
  );
}