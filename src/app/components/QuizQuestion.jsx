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

      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-6 relative overflow-hidden animate-gradient">
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white font-semibold text-lg animate-float">
              ⭐ Pergunta {questionNumber} de {totalQuestions}
            </span>
            <div className="flex items-center text-white">
              <div className="relative">
                <div className={`text-3xl mr-2 ${timeLeft <= 10 ? 'animate-bounce' : 'animate-float'}`}>⏰</div>
                <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center ${
                  timeLeft <= 10 ? 'bg-red-500 animate-pulse' : 'bg-blue-500'
                }`}>
                  <span className="text-xs font-bold text-white">{timeLeft}</span>
                </div>
              </div>
              <span className={`text-2xl font-bold ml-2 ${timeLeft <= 10 ? 'text-red-300 animate-pulse' : 'text-white'}`}>
                {timeLeft}s
              </span>
            </div>
          </div>
          
          <div className="w-full bg-white bg-opacity-30 rounded-full h-3 mb-2">
            <div 
              className="progress-bar h-3 rounded-full transition-all duration-500 shadow-lg"
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
        <div className="text-center mb-8">
          <div className="text-6xl mb-4 animate-bounce">🤔</div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed typing-effect">
            {question.question}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
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
                className={`group relative quiz-option p-6 rounded-2xl text-left font-medium transition-all duration-300 transform hover:scale-105 ${
                  showFeedback
                    ? shouldHighlight
                      ? 'option-correct text-white shadow-lg animate-glow'
                      : isWrong
                      ? 'option-incorrect text-white shadow-lg'
                      : 'bg-gray-200 text-gray-500'
                    : isSelected
                    ? 'option-selected text-white shadow-lg animate-glow'
                    : 'bg-gradient-to-r from-gray-100 to-gray-200 hover:from-blue-100 hover:to-purple-100 text-gray-700 hover:text-blue-700'
                } shadow-md hover:shadow-xl`}
              >
                <div className="flex items-center">
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold mr-4 ${
                    showFeedback && shouldHighlight
                      ? 'bg-green-600 text-white'
                      : showFeedback && isWrong
                      ? 'bg-red-600 text-white'
                      : isSelected
                      ? 'bg-white text-blue-600'
                      : 'bg-blue-500 text-white group-hover:bg-purple-500'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1 text-justify">{option}</span>
                  
                  {showFeedback && (
                    <span className="text-2xl ml-2">
                      {shouldHighlight ? '✅' : isWrong ? '❌' : ''}
                    </span>
                  )}
                </div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 transform -skew-x-12"></div>
              </button>
            );
          })}
        </div>

        {showFeedback && question.explanation && (
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-l-4 border-blue-500 transform transition-all duration-500 hover:scale-102">
            <div className="flex items-start">
              <div className="text-3xl mr-4">💡</div>
              <div>
                <h3 className="font-bold text-blue-800 mb-2 text-lg">Explicação:</h3>
                <p className="text-blue-700 leading-relaxed">
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
