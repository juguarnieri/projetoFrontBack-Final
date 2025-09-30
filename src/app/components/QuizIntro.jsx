export default function QuizIntro({ onStart, questionsCount }) {
  return (
    <div className="text-center mb-16">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <div className="relative">
          <div className="text-6xl mb-6">🐕</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Quiz DogCare
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Teste seus conhecimentos sobre cuidados caninos!
          </p>
          
          <div className="bg-gradient-to-r from-green-100 to-orange-100 rounded-xl p-4 mb-8 max-w-md mx-auto">
            <div className="text-2xl mb-2">📝</div>
            <h3 className="font-bold text-lg text-gray-800">{questionsCount || 15} Perguntas</h3>
            <p className="text-gray-600">Sobre cuidados com cães</p>
          </div>
          
          <button
            onClick={onStart}
            className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:from-green-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            🐕 Começar Quiz
          </button>
        </div>
      </div>
    </div>
  );
}