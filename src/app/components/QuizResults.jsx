import { useState } from 'react';

export default function QuizResults({ score, totalQuestions, answers, questions, onRestart, onGoToArticles }) {
  const [showDetailed, setShowDetailed] = useState(false);
  
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getScoreData = () => {
    if (percentage >= 90) return {
      title: "🏆 EXPERT EM CUIDADOS CANINOS!",
      message: "Parabéns! Você é um verdadeiro especialista em cuidados com cães!",
      color: "from-yellow-400 to-orange-500",
      emoji: "🎉",
      level: "Expert"
    };
    if (percentage >= 75) return {
      title: "⭐ MUITO BOM!",
      message: "Excelente! Você tem ótimos conhecimentos sobre cuidados caninos!",
      color: "from-green-400 to-emerald-500",
      emoji: "👏",
      level: "Avançado"
    };
    if (percentage >= 60) return {
      title: "👍 BOM TRABALHO!",
      message: "Muito bem! Você tem uma boa base de conhecimentos!",
      color: "from-blue-400 to-cyan-500",
      emoji: "😊",
      level: "Intermediário"
    };
    if (percentage >= 40) return {
      title: "📚 CONTINUE APRENDENDO!",
      message: "Bom começo! Com mais estudo você será um expert!",
      color: "from-purple-400 to-pink-500",
      emoji: "💪",
      level: "Iniciante"
    };
    return {
      title: "🤔 VAMOS ESTUDAR MAIS?",
      message: "Que tal explorar nossos artigos sobre cuidados caninos?",
      color: "from-red-400 to-pink-500",
      emoji: "📖",
      level: "Novato"
    };
  };

  const scoreData = getScoreData();

  return (
    <div className="text-center">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 transform transition-all duration-500 relative overflow-hidden z-10">

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              {['🎉', '🏆', '⭐', '🎊', '🥳'][Math.floor(Math.random() * 5)]}
            </div>
          ))}
        </div>

        <div className="relative z-10">
          <div className="text-8xl mb-6 animate-bounce">{scoreData.emoji}</div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {scoreData.title}
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {scoreData.message}
          </p>
          

          <div className={`bg-gradient-to-r ${scoreData.color} rounded-3xl p-8 text-white mb-8 transform hover:scale-105 transition-all duration-300`}>
            <div className="text-7xl font-bold mb-2">
              {score}<span className="text-4xl">/{totalQuestions}</span>
            </div>
            <div className="text-3xl mb-2 font-semibold">
              {percentage}% de acertos
            </div>
            <div className="text-lg opacity-90">
              Nível: {scoreData.level}
            </div>
          </div>

          {/* Performance Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mb-8">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-4 text-left">
              <div className="text-3xl mb-2">🎯</div>
              <div className="font-bold text-blue-800">Precisão</div>
              <div className="text-blue-600">{percentage}%</div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-4 text-left">
              <div className="text-3xl mb-2">✅</div>
              <div className="font-bold text-green-800">Corretas</div>
              <div className="text-green-600">{score}</div>
            </div>
            <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl p-4 text-left">
              <div className="text-3xl mb-2">❌</div>
              <div className="font-bold text-red-800">Erradas</div>
              <div className="text-red-600">{totalQuestions - score}</div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-4 text-left">
              <div className="text-3xl mb-2">📊</div>
              <div className="font-bold text-purple-800">Nível</div>
              <div className="text-purple-600 text-sm">{scoreData.level}</div>
            </div>
          </div>

          <button
            onClick={() => setShowDetailed(!showDetailed)}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-full font-medium transition-all duration-300 mb-6"
          >
            {showDetailed ? '🔼 Ocultar Detalhes' : '🔽 Ver Detalhes das Respostas'}
          </button>

          {showDetailed && (
            <div className="text-left mb-8 max-h-96 overflow-y-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                📋 Revisão Detalhada
              </h3>
              <div className="space-y-4">
                {answers.map((answer, index) => {
                  const question = questions[answer.question];
                  const isCorrect = answer.selected === answer.correct;
                  
                  return (
                    <div key={index} className={`rounded-2xl p-6 border-2 ${
                      isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'
                    }`}>
                      <div className="flex items-start justify-between mb-4">
                        <h4 className="font-semibold text-gray-800 flex-1 text-lg">
                          {index + 1}. {question.question}
                        </h4>
                        <span className={`ml-4 px-4 py-2 rounded-full text-sm font-bold ${
                          isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                        }`}>
                          {isCorrect ? '✓ Correto' : '✗ Incorreto'}
                        </span>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div className="p-3 bg-green-100 rounded-lg border-l-4 border-green-500">
                          <span className="font-medium text-green-800">✅ Resposta correta:</span>
                          <span className="text-green-700 ml-2">{question.options[answer.correct]}</span>
                        </div>
                        
                        {!isCorrect && answer.selected !== null && (
                          <div className="p-3 bg-red-100 rounded-lg border-l-4 border-red-500">
                            <span className="font-medium text-red-800">❌ Sua resposta:</span>
                            <span className="text-red-700 ml-2">{question.options[answer.selected]}</span>
                          </div>
                        )}
                        
                        {answer.selected === null && (
                          <div className="p-3 bg-gray-100 rounded-lg border-l-4 border-gray-500">
                            <span className="font-medium text-gray-800">⏰ Tempo esgotado - Nenhuma resposta selecionada</span>
                          </div>
                        )}
                        
                        {question.explanation && (
                          <div className="p-3 bg-blue-100 rounded-lg border-l-4 border-blue-500">
                            <span className="font-medium text-blue-800">💡 Explicação:</span>
                            <p className="text-blue-700 mt-1">{question.explanation}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-1 justify-center">
            <button
              onClick={onRestart}
              className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <span className="flex items-center justify-center">
                🔄 Tentar Novamente
                <span className="ml-2 group-hover:rotate-180 transition-transform duration-300">🎯</span>
              </span>
            </button>
            
            <button
              onClick={onGoToArticles}
              className="group bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 py-4 rounded-full font-bold hover:from-green-600 hover:to-teal-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              <span className="flex items-center justify-center">
                📚 Estudar Mais
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
