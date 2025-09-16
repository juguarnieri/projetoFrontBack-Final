"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import QuizIntro from "../components/QuizIntro";
import QuizQuestion from "../components/QuizQuestion";
import QuizResults from "../components/QuizResults";
import QuizLoader from "../components/QuizLoader";
import ParticleEffect from "../components/ParticleEffect";
import './quiz-animations.css';

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
  const [showParticles, setShowParticles] = useState(false);
  const [particleType, setParticleType] = useState('success');


  // Timer effect
  useEffect(() => {
    let interval = null;
    if (isTimerActive && timeLeft > 0 && gameState === 'playing') {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timeLeft, gameState]);

  // Carrega perguntas da API
  const loadQuestions = async () => {
    setGameState('loading');
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/questions`);
      if (response.data?.data && response.data.data.length > 0) {
        // Transforma dados da API para o formato esperado
        const apiQuestions = response.data.data.map(q => ({
          id: q.id,
          question: q.question_text,
          options: q.alternatives.map(alt => alt.alternative_text),
          correct: q.alternatives.findIndex(alt => alt.is_correct),
          explanation: q.explanation || "Consulte nossos artigos para saber mais sobre este tópico!"
        }));
        setQuestions(apiQuestions);
        
        // Simula carregamento por 2 segundos para melhor UX
        setTimeout(() => {
          setGameState('playing');
          setIsTimerActive(true);
        }, 2000);
      } else {
        // Se não há perguntas na API, mostra erro
        setGameState('error');
      }
    } catch (error) {
      console.error('Erro ao carregar perguntas da API:', error);
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
    
    // Registra a resposta
    const isCorrect = answerIndex === questions[currentQuestion].correct;
    
    // Ativa efeito de partículas
    setParticleType(isCorrect ? 'success' : 'error');
    setShowParticles(true);
    setTimeout(() => setShowParticles(false), 3000);
    
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    const newAnswer = {
      question: currentQuestion,
      selected: answerIndex,
      correct: questions[currentQuestion].correct
    };
    setAnswers(prev => [...prev, newAnswer]);
    
    // Avança para próxima pergunta após 3 segundos
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
        // Efeito especial para finalização
        setParticleType('success');
        setShowParticles(true);
        setTimeout(() => setShowParticles(false), 5000);
      }
    }, 3000);
  }, [selectedAnswer, showFeedback, questions, currentQuestion]);

  const handleTimeUp = useCallback(() => {
    if (showFeedback) return;
    
    setIsTimerActive(false);
    
    // Registra resposta como não respondida
    const newAnswer = {
      question: currentQuestion,
      selected: null,
      correct: questions[currentQuestion].correct
    };
    setAnswers(prev => [...prev, newAnswer]);
    
    // Mostra feedback por 2 segundos
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
    setShowParticles(false);
  };

  const goToArticles = () => {
    router.push('/listagem');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden">
      {/* Efeito de partículas */}
      <ParticleEffect isActive={showParticles} type={particleType} />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute top-20 left-10 text-6xl animate-float">🐕</div>
        <div className="absolute top-40 right-20 text-4xl animate-float" style={{animationDelay: '1s'}}>🦴</div>
        <div className="absolute bottom-40 left-20 text-5xl animate-float" style={{animationDelay: '2s'}}>🎾</div>
        <div className="absolute bottom-20 right-10 text-3xl animate-float" style={{animationDelay: '3s'}}>🐾</div>
        <div className="absolute top-1/2 left-1/4 text-4xl animate-float" style={{animationDelay: '0.5s'}}>❤️</div>
        <div className="absolute top-1/3 right-1/3 text-3xl animate-float" style={{animationDelay: '1.5s'}}>🏠</div>
      </div>
      
      <Header />
      <main className="flex-grow relative z-10">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {gameState === 'intro' && (
              <QuizIntro 
                onStart={handleStartQuiz}
                questionsCount={questions.length || 10}
              />
            )}

            {gameState === 'loading' && (
              <QuizLoader />
            )}

            {gameState === 'error' && (
              <div className="text-center">
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 transform transition-all duration-500 relative overflow-hidden z-10">
                  <div className="text-8xl mb-6">❌</div>
                  <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">
                    Ops! Algo deu errado
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                    Não foi possível carregar as perguntas do quiz. Verifique sua conexão e tente novamente.
                  </p>
                  <button
                    onClick={handleStartQuiz}
                    className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white px-12 py-4 rounded-full text-xl font-bold hover:from-orange-600 hover:via-pink-600 hover:to-purple-600 transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl"
                  >
                    Tentar Novamente 🔄
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
        <ScrollToTop />
      </main>
      <Footer />
    </div>
  );
}