export default function QuizLoader() {
  return (
    <div className="text-center">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-500 mx-auto mb-4"></div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Preparando Quiz
        </h2>
        <p className="text-gray-600">
          Carregando perguntas sobre cuidados caninos...
        </p>
      </div>
    </div>
  );
}