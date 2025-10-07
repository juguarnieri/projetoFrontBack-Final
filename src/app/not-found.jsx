"use client";

import { Button } from "antd";
import { HomeOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function NotFound() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 to-green-200">
      <Header />
      
      <main className="flex-grow flex items-center justify-center px-4 py-16 mt-16">
        <div className="text-center bg-white rounded-3xl shadow-2xl p-12 max-w-2xl mx-auto">
          {/* Emoji e Título */}
          <div className="mb-8">
            <div className="text-9xl mb-6 animate-bounce">🐾</div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Ops! Perdemos o rastro...
            </h1>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          {/* Mensagem explicativa */}
          <div className="mb-10">
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Parece que você seguiu uma trilha errada. A página que você está procurando não foi encontrada.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Mas não se preocupe, vamos te ajudar a voltar ao caminho certo!
            </p>
            <p className="text-orange-600 font-medium text-lg">
              Continue explorando o DogCare e descubra tudo para cuidar do seu amigo de quatro patas! 🐶
            </p>
          </div>

          {/* Botões de navegação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              type="primary"
              size="large"
              icon={<HomeOutlined />}
              onClick={handleGoHome}
              className="bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 h-12 px-8 text-lg font-medium"
            >
              Voltar ao Início
            </Button>
            
            <Button
              size="large"
              icon={<ArrowLeftOutlined />}
              onClick={handleGoBack}
              className="bg-blue-400 hover:bg-blue-500 text-white border-blue-400 hover:border-blue-500 h-12 px-8 text-lg font-medium"
            >
              Voltar à Página Anterior
            </Button>
          </div>

          {/* Informações adicionais */}
          <div className="mt-10 p-6 bg-green-50 rounded-2xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              🐕 Sugestões para você:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">•</span>
                Confira nossas dicas de cuidados caninos
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">•</span>
                Explore nossos artigos sobre saúde e bem-estar
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">•</span>
                Participe do nosso quiz interativo
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">•</span>
                Entre em contato para mais informações
              </div>
            </div>
          </div>

          {/* Código de erro */}
          <div className="mt-8 text-gray-400 text-sm">
            Erro 404 - Página não encontrada
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
