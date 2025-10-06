"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import ScrollToTop from "../components/ScrollToTop";
import QuizIntro from "../components/QuizIntro";
import QuizQuestion from "../components/QuizQuestion";
import QuizResults from "../components/QuizResults";
import QuizLoader from "../components/QuizLoader";

export default function Quiz() {
  const router = useRouter();
  

  const [gameState, setGameState] = useState('intro'); // 'intro', 'loading', 'playing', 'results', 'error'
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTimerActive, setIsTimerActive] = useState(false);


  useEffect(() => {
    let interval = null;
    if (isTimerActive && timeLeft > 0 && gameState === 'playing') {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timeLeft, gameState]);

  const loadQuestions = async () => {
    setGameState('loading');
    try {
      console.log('🔗 Buscando perguntas do backend...');
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/questions`;
      console.log('🌍 URL da API:', apiUrl);
      
      const response = await axios.get(apiUrl);
      console.log('✅ Resposta da API:', response.data);
      
      if (response.data?.data && response.data.data.length > 0) {
        const apiQuestions = response.data.data.map(q => ({
          id: q.id,
          question: q.question_text,
          options: q.alternatives.map(alt => alt.alternative_text),
          correct: q.alternatives.findIndex(alt => alt.is_correct),
          explanation: q.explanation || "Consulte nossos artigos para saber mais sobre este tópico!"
        }));
        
        console.log('📝 Perguntas processadas:', apiQuestions.length);
        setQuestions(apiQuestions);
        
        setTimeout(() => {
          setGameState('playing');
          setIsTimerActive(true);
        }, 1500);
      } else {
        console.error('❌ Nenhuma pergunta encontrada na resposta');
        setGameState('error');
      }
    } catch (error) {
      console.error('❌ Erro ao carregar perguntas:', error);
      setGameState('error');
    }
  };

  const handleStartQuiz = () => {
    loadQuestions();
  };

  const handleAnswer = useCallback((answerIndex) => {
    if (selectedAnswer !== null || showFeedback) return;
    
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);
    setIsTimerActive(false);
    
    const isCorrect = answerIndex === questions[currentQuestion].correct;
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    const newAnswer = {
      question: currentQuestion,
      selected: answerIndex,
      correct: questions[currentQuestion].correct
    };
    setAnswers(prev => [...prev, newAnswer]);
    
    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
        setTimeLeft(30);
        setIsTimerActive(true);
      } else {
        setGameState('results');
        setIsTimerActive(false);
      }
    }, 3000);
  }, [selectedAnswer, showFeedback, questions, currentQuestion]);

  const handleTimeUp = useCallback(() => {
    if (showFeedback) return;
    
    setIsTimerActive(false);
    
    const newAnswer = {
      question: currentQuestion,
      selected: null,
      correct: questions[currentQuestion].correct
    };
    setAnswers(prev => [...prev, newAnswer]);
    
    setShowFeedback(true);
    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
        setTimeLeft(30);
        setIsTimerActive(true);
      } else {
        setGameState('results');
        setIsTimerActive(false);
      }
    }, 2000);
  }, [currentQuestion, questions.length, showFeedback]);

  const resetQuiz = () => {
    setGameState('intro');
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setScore(0);
    setShowFeedback(false);
    setTimeLeft(30);
    setIsTimerActive(false);
    setQuestions([]);
  };

  const goToArticles = () => {
    router.push('/listagem');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {gameState === 'intro' && (
              <QuizIntro 
                onStart={handleStartQuiz}
                questionsCount={15}
              />
            )}

            {gameState === 'loading' && (
              <QuizLoader />
            )}

            {gameState === 'error' && (
              <div className="text-center">
                <div className="bg-gray-50 rounded-lg p-8">
                  <h1 className="text-2xl font-bold text-red-600 mb-4">
                    Erro ao carregar quiz
                  </h1>
                  <p className="text-gray-600 mb-6">
                    Não foi possível carregar as perguntas. Tente novamente.
                  </p>
                  <button
                    onClick={handleStartQuiz}
                    className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600"
                  >
                    Tentar Novamente
                  </button>
                </div>
              </div>
            )}

            {gameState === 'playing' && questions.length > 0 && (
              <QuizQuestion
                question={questions[currentQuestion]}
                questionNumber={currentQuestion + 1}
                totalQuestions={questions.length}
                onAnswer={handleAnswer}
                selectedAnswer={selectedAnswer}
                showFeedback={showFeedback}
                timeLeft={timeLeft}
                onTimeUp={handleTimeUp}
              />
            )}

            {gameState === 'results' && (
              <QuizResults
                score={score}
                totalQuestions={questions.length}
                answers={answers}
                questions={questions}
                onRestart={resetQuiz}
                onGoToArticles={goToArticles}
              />
            )}
          </div>
        </section>
        
        {/* Seção de Curiosidades */}
        <section className="bg-gradient-to-br from-green-50 via-white to-orange-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block p-3 bg-orange-100 rounded-full mb-4">
                <span className="text-4xl">🐕</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Curiosidades Caninas
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-orange-500 mx-auto mb-4"></div>
              <p className="text-sm text-gray-600 max-w-2xl mx-auto">
                Descubra fatos fascinantes sobre nossos companheiros de quatro patas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="inline-block p-4 bg-orange-100 rounded-full mb-4">
                    <span className="text-3xl">👃</span>
                  </div>
                  <h3 className="text-xl font-bold text-orange-600 mb-3">Super Olfato</h3>
                  <div className="w-12 h-0.5 bg-orange-500 mx-auto mb-3"></div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Os cães têm entre <span className="font-semibold text-orange-600">220 a 300 milhões</span> de receptores olfativos, 
                    enquanto humanos têm apenas 6 milhões! Podem detectar odores até 100.000 vezes melhor que nós.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                    <span className="text-3xl">💤</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-600 mb-3">Sonhos Caninos</h3>
                  <div className="w-12 h-0.5 bg-green-500 mx-auto mb-3"></div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Assim como os humanos, os cães <span className="font-semibold text-green-600">sonham</span>! 
                    Durante o sono REM, eles podem mover as patas e fazer ruídos, 
                    provavelmente revivendo suas aventuras do dia.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="inline-block p-4 bg-red-100 rounded-full mb-4">
                    <span className="text-3xl">❤️</span>
                  </div>
                  <h3 className="text-xl font-bold text-red-600 mb-3">Batimento Cardíaco</h3>
                  <div className="w-12 h-0.5 bg-red-500 mx-auto mb-3"></div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    O coração de um cão bate entre <span className="font-semibold text-red-600">70-120 batimentos</span> 
                    por minuto, mais rápido que o humano. Cães menores tendem a ter 
                    batimentos mais acelerados que os maiores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <ScrollToTop />
      </main>

      <Footer />
    </div>
  );
}