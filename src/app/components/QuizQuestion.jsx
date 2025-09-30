import { useEffect } from 'react';

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
  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
    }
  }, [timeLeft, onTimeUp]);

  if (!question) return null;

  const progressPercentage = (questionNumber / totalQuestions) * 100;

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      {/* Header simples */}
      <div className="bg-gradient-to-r from-green-500 to-orange-500 p-4">
        <div className="flex justify-between items-center text-white">
          <span className="font-semibold">
            🐕 Pergunta {questionNumber} de {totalQuestions}
          </span>
          <span className={`font-bold ${timeLeft <= 10 ? 'text-red-200' : 'text-white'}`}>
            ⏰ {timeLeft}s
          </span>
        </div>
        
        <div className="w-full bg-white bg-opacity-30 rounded-full h-2 mt-3">
          <div 
            className="bg-white rounded-full h-2 transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="p-6">
        {/* Pergunta */}
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
            {question.question}
          </h2>
        </div>

        {/* Alternativas */}
        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === question.correct;
            const isWrong = showFeedback && isSelected && !isCorrect;
            const shouldHighlight = showFeedback && isCorrect;
            
            return (
              <button
                key={index}
                onClick={() => !showFeedback && onAnswer(index)}
                disabled={showFeedback}
                className={`w-full p-4 rounded-lg text-left font-medium transition-all duration-300 ${
                  showFeedback
                    ? shouldHighlight
                      ? 'bg-green-500 text-white'
                      : isWrong
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-100 text-gray-500'
                    : isSelected
                    ? 'bg-gradient-to-r from-green-500 to-orange-500 text-white'
                    : 'bg-gray-50 border border-gray-200 hover:border-green-300 text-gray-700 hover:bg-green-50'
                }`}
              >
                <div className="flex items-center">
                  <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold mr-4 ${
                    showFeedback && shouldHighlight
                      ? 'bg-green-100 text-green-600'
                      : showFeedback && isWrong
                      ? 'bg-red-100 text-red-600'
                      : isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-green-100 text-green-600'
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="flex-1">{option}</span>
                  
                  {showFeedback && (
                    <span className="text-xl ml-2">
                      {shouldHighlight ? '✅' : isWrong ? '❌' : ''}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Explicação */}
        {showFeedback && question.explanation && (
          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="flex items-start">
              <span className="text-xl mr-3">💡</span>
              <div>
                <h3 className="font-bold text-green-800 mb-1">Explicação:</h3>
                <p className="text-green-700">{question.explanation}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
