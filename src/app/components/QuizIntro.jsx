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
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Quiz DogCare Interativo
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Teste seus conhecimentos sobre cuidados caninos e descubra o quanto você sabe sobre nossos amigos de quatro patas!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-8">
            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 text-left">
              <div className="text-4xl mb-3">📝</div>
              <h3 className="font-bold text-lg mb-2">{questionsCount} Perguntas</h3>
              <p className="text-blue-100 text-justify">Cuidados essenciais</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 text-left">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-lg mb-2">Dinâmico</h3>
              <p className="text-purple-100 text-justify">Feedback instantâneo</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 text-left">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-bold text-lg mb-2">Ranking</h3>
              <p className="text-green-100 text-justify">Resultado detalhado</p>
            </div>
          </div>
          
          <button
            onClick={onStart}
            className="group bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white px-12 py-4 rounded-full text-xl font-bold hover:from-orange-600 hover:via-pink-600 hover:to-purple-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center">
              Começar Quiz
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">🚀</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
