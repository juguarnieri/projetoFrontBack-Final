export default function QuizIntro({ onStart, questionsCount }) {
  return (
    <div className="text-center mb-16">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 transform transition-all duration-500 hover:scale-105 relative overflow-hidden z-10">

        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 text-6xl animate-bounce">🐕</div>
          <div className="absolute top-20 right-20 text-4xl animate-pulse">🦴</div>
          <div className="absolute bottom-10 left-20 text-5xl animate-bounce" style={{animationDelay: '1s'}}>🎾</div>
          <div className="absolute bottom-20 right-10 text-3xl animate-pulse" style={{animationDelay: '2s'}}>🐾</div>
        </div>
        
        <div className="relative z-10">
          <div className="text-8xl mb-6 animate-bounce">🐕</div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent mb-6">
            🐾 Quiz DogCare Interativo 🐾
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            🎯 Teste seus conhecimentos sobre cuidados caninos e descubra o quanto você sabe sobre nossos amigos de quatro patas! 🐶
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 text-left">
              <div className="text-4xl mb-3">�‍🦺</div>
              <h3 className="font-bold text-lg mb-2">{questionsCount} Perguntas</h3>
              <p className="text-green-100 text-justify">Sobre nossos amigos peludos</p>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 text-left">
              <div className="text-4xl mb-3">🎾</div>
              <h3 className="font-bold text-lg mb-2">Dinâmico</h3>
              <p className="text-orange-100 text-justify">Diversão garantida</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 text-left">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-bold text-lg mb-2">Resultado</h3>
              <p className="text-yellow-100 text-justify">Score de especialista</p>
            </div>
          </div>
          
          <button
            onClick={onStart}
            className="group bg-gradient-to-r from-green-500 to-orange-500 text-white px-12 py-4 rounded-full text-xl font-bold hover:from-green-600 hover:to-orange-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center">
              🐕 Começar Quiz 🦴
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">🚀</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
