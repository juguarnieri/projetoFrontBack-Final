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
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600 font-medium">
            Pergunta {questionNumber} de {totalQuestions}
          </span>
          <div className={`px-3 py-1 rounded-full text-sm font-medium ${
            timeLeft <= 10 ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
          }`}>
            {timeLeft}s
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div 
            className="bg-orange-500 rounded-full h-2 transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        
        {/* Barra de tempo */}
        <div className="w-full bg-gray-200 rounded-full h-1">
          <div 
            className={`h-1 rounded-full transition-all duration-1000 ${
              timeLeft <= 10 ? 'bg-red-500' : timeLeft <= 20 ? 'bg-yellow-500' : 'bg-green-500'
            }`}
            style={{ width: `${timePercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-8">
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 text-center">
            {question.question}
          </h2>
        </div>
      </div>

      <div className="space-y-3">
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
              className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                showFeedback
                  ? shouldHighlight
                    ? 'bg-green-500 text-white'
                    : isWrong
                    ? 'bg-red-500 text-white'
                    : 'bg-gray-100 text-gray-500'
                  : isSelected
                  ? 'bg-orange-500 text-white'
                  : 'bg-white border-2 border-gray-200 hover:border-orange-300 text-gray-700 hover:bg-orange-50'
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
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {String.fromCharCode(65 + index)}
                </span>
                <span className="flex-1">{option}</span>
                
                {showFeedback && (
                  <span className="text-xl ml-2">
                    {shouldHighlight ? '✓' : isWrong ? '✗' : ''}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {showFeedback && question.explanation && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="font-bold text-blue-800 mb-2">Explicação:</h3>
          <p className="text-blue-700">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}