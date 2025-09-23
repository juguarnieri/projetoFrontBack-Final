import { useEffect, useState } from 'react';

export default function QuizQuestion({ 
  question, 
  questionNumber, 
  totalQuestions, 
  onAnswer, 
  selectedAnswer, 
  showFeedback, 
  timeLeft,
  onTimeUp 
}) {
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {

    if (question?.options) {
      const shuffled = [...question.options].sort(() => Math.random() - 0.5);
      setShuffledOptions(shuffled);
    }
  }, [question]);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
    }
  }, [timeLeft, onTimeUp]);

  if (!question) return null;

  const progressPercentage = (questionNumber / totalQuestions) * 100;
  const timePercentage = (timeLeft / 30) * 100;

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:shadow-3xl quiz-card relative z-10">

      <div className="bg-gradient-to-r from-green-500 via-orange-500 to-yellow-500 p-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white font-semibold text-lg flex items-center">
              <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-3 text-sm">
                🐾
              </span>
              🐕 Pergunta {questionNumber} de {totalQuestions} 🦴
            </span>
            <div className="flex items-center text-white bg-white/20 rounded-full px-4 py-2">
              <div className={`w-3 h-3 rounded-full mr-2 ${timeLeft <= 10 ? 'bg-red-400 animate-pulse' : 'bg-green-400'}`}></div>
              <span className={`text-lg font-bold ${timeLeft <= 10 ? 'text-red-200 animate-pulse' : 'text-white'}`}>
                {timeLeft}s
              </span>
            </div>
          </div>
          
          <div className="w-full bg-white bg-opacity-30 rounded-full h-3 mb-2">
            <div 
              className="bg-white rounded-full h-3 transition-all duration-500 shadow-lg"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
          
          <div className="w-full bg-white bg-opacity-30 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-1000 ${
                timeLeft <= 10 ? 'bg-red-400 animate-pulse' : timeLeft <= 20 ? 'bg-yellow-400' : 'bg-green-400'
              }`}
              style={{ width: `${timePercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="p-8 md:p-12">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <span className="text-white text-2xl font-bold">🐕</span>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-orange-50 rounded-3xl p-8 border border-green-200 shadow-md">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 leading-relaxed text-center">
              {question.question}
            </h2>
          </div>
        </div>

        <div className="space-y-4">
          {shuffledOptions.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === question.correct;
            const isWrong = showFeedback && isSelected && !isCorrect;
            const shouldHighlight = showFeedback && isCorrect;
            
            return (
              <button
                key={`${question.id}-${index}`}
                onClick={() => !showFeedback && onAnswer(index)}
                disabled={showFeedback}
                className={`w-full group relative p-6 rounded-2xl text-left font-medium transition-all duration-300 transform hover:scale-105 ${
                  showFeedback
                    ? shouldHighlight
                      ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg'
                      : isWrong
                      ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-500 border border-gray-200'
                    : isSelected
                    ? 'bg-gradient-to-r from-green-500 to-orange-500 text-white shadow-lg'
                    : 'bg-white border-2 border-gray-200 hover:border-green-300 text-gray-700 hover:bg-green-50'
                } shadow-md hover:shadow-xl`}
              >
                <div className="flex items-center">
                  <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full text-lg font-bold mr-6 flex-shrink-0 ${
                    showFeedback && shouldHighlight
                      ? 'bg-green-100 text-green-600'
                      : showFeedback && isWrong
                      ? 'bg-red-100 text-red-600'
                      : isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-green-100 text-green-600 group-hover:bg-green-200'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1 text-lg leading-relaxed pr-4">{option}</span>
                  
                  {showFeedback && (
                    <span className="text-3xl ml-4 flex-shrink-0">
                      {shouldHighlight ? '✅' : isWrong ? '❌' : ''}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {showFeedback && question.explanation && (
          <div className="mt-8 p-6 bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl border border-green-200 transform transition-all duration-500">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-orange-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-white text-xl">💡</span>
              </div>
              <div>
                <h3 className="font-bold text-green-800 mb-2 text-lg">Explicação:</h3>
                <p className="text-green-700 leading-relaxed text-lg">
                  {question.explanation}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
