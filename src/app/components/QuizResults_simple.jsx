export default function QuizResults({ score, totalQuestions, answers, questions, onRestart, onGoToArticles }) {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getScoreData = () => {
    if (percentage >= 90) return {
      title: "Excelente!",
      message: "Você é um especialista em cuidados caninos!",
      color: "bg-green-500"
    };
    if (percentage >= 75) return {
      title: "Muito Bom!",
      message: "Você tem ótimos conhecimentos sobre cães!",
      color: "bg-blue-500"
    };
    if (percentage >= 60) return {
      title: "Bom trabalho!",
      message: "Você tem uma boa base de conhecimentos!",
      color: "bg-orange-500"
    };
    if (percentage >= 40) return {
      title: "Continue estudando!",
      message: "Com mais estudo você será um expert!",
      color: "bg-yellow-500"
    };
    return {
      title: "Vamos estudar mais?",
      message: "Explore nossos artigos sobre cuidados caninos!",
      color: "bg-red-500"
    };
  };

  const scoreData = getScoreData();

  return (
    <div className="text-center">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Resultado do Quiz
        </h1>

        <div className={`${scoreData.color} text-white rounded-lg p-6 mb-6`}>
          <div className="text-4xl md:text-6xl font-bold mb-2">
            {percentage}%
          </div>
          <div className="text-lg">
            {score} de {totalQuestions} respostas corretas
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            {scoreData.title}
          </h2>
          <p className="text-gray-600">
            {scoreData.message}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onRestart}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Refazer Quiz
          </button>
          <button
            onClick={onGoToArticles}
            className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
          >
            Ver Artigos
          </button>
        </div>
      </div>
    </div>
  );
}