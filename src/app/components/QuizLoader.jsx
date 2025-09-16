export default function QuizLoader() {
  return (
    <div className="flex flex-col items-center justify-center h-96">
      <div className="relative">

        <div className="animate-spin rounded-full h-24 w-24 border-b-4 border-gradient-to-r from-blue-500 to-purple-500"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl animate-bounce">🐕</div>
        </div>
        

        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <div className="text-2xl font-bold text-gray-700 mb-2 animate-pulse">
          Carregando Quiz...
        </div>
        <div className="text-gray-500 animate-bounce">
          Preparando perguntas incríveis sobre cães! 🦴
        </div>
      </div>
      

      <div className="flex space-x-2 mt-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce"
            style={{ animationDelay: `${i * 0.3}s` }}
          ></div>
        ))}
      </div>
    </div>
  );
}
