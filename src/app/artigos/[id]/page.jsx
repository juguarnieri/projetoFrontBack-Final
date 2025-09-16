"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function ArtigoDetalhes() {
  const [artigo, setArtigo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const router = useRouter();
  const artigoId = params.id;

  useEffect(() => {
    const fetchArtigo = async () => {
      try {
        setLoading(true);
        setError(null);


        const artigoUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/articles/${artigoId}`;
        console.log('🔗 Buscando artigo:', artigoUrl);
        
        const artigoResponse = await axios.get(artigoUrl);
        console.log('✅ Artigo encontrado:', artigoResponse.data);
        

        let artigoData = artigoResponse.data;
        if (artigoResponse.data.data) {
          artigoData = artigoResponse.data.data;
        }
        
        setArtigo(artigoData);
        
        toast.success("📖 Artigo carregado com sucesso!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          style: {
            backgroundColor: "#10b981",
            color: "white",
          },
        });

      } catch (err) {
        console.error('❌ Erro ao buscar artigo:', err);
        console.error('❌ Status:', err.response?.status);
        console.error('❌ Dados:', err.response?.data);
        
        setError(err.response?.data?.message || 'Erro ao carregar artigo');
        
        toast.error("❌ Erro ao carregar artigo!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
          style: {
            backgroundColor: "#ef4444",
            color: "white",
          },
        });
      } finally {
        setLoading(false);
      }
    };

    if (artigoId) {
      fetchArtigo();
    }
  }, [artigoId]);

  const handleVoltarParaListagem = () => {
    router.push('/listagem');
  };

  const handleVoltarParaHome = () => {
    router.push('/');
  };

  const handleVoltarParaCategoria = () => {
    if (artigo?.category_id) {
      router.push(`/listagem/${artigo.category_id}`);
    } else {
      router.push('/listagem');
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-teal-100 to-cyan-200">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-600 mx-auto"></div>
            <p className="mt-4 text-xl text-teal-600">Carregando artigo...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-teal-100 to-cyan-200">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">❌</div>
            <p className="text-xl text-red-600 mb-4">{error}</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleVoltarParaHome}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                🏠 Home
              </button>
              <button
                onClick={handleVoltarParaListagem}
                className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
              >
                ← Voltar para Listagem
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!artigo) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-teal-100 to-cyan-200">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-xl text-gray-600 mb-4">Artigo não encontrado</p>
            <button
              onClick={handleVoltarParaListagem}
              className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              ← Voltar para Listagem
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-teal-100 to-cyan-200">
      <Header />
      <main className="flex-grow">

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={handleVoltarParaHome}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              🏠 Home
            </button>
            <button
              onClick={handleVoltarParaListagem}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              📚 Todas as Categorias
            </button>
            <button
              onClick={handleVoltarParaCategoria}
              className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2"
            >
              ← Voltar para Categoria
            </button>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {artigo.titulo || artigo.title || 'Título do Artigo'}
            </h1>
            
            <div className="flex items-center justify-center gap-6 text-gray-600 mb-8">
              <span className="text-sm">
                📅 {artigo.created_at ? new Date(artigo.created_at).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric'
                }) : 'Data não disponível'}
              </span>
              {artigo.autor && (
                <span className="text-sm">
                  ✍️ {artigo.autor}
                </span>
              )}
            </div>
          </div>

          {artigo.image_url && (
            <div className="mb-12">
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${artigo.image_url}`}
                alt={artigo.titulo || artigo.title || 'Imagem do artigo'}
                className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
          )}

          {(artigo.descricao || artigo.description) && (
            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-2xl mb-12 border-l-4 border-teal-500">
              <h2 className="text-xl font-semibold text-teal-800 mb-3">📝 Resumo</h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                {artigo.descricao || artigo.description}
              </p>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="prose prose-lg max-w-none">
              {artigo.content ? (
                <div 
                  dangerouslySetInnerHTML={{ __html: artigo.content }}
                  className="text-gray-800 leading-relaxed"
                />
              ) : (
                <div className="text-gray-800 leading-relaxed">
                  <p className="mb-6">
                    {artigo.descricao || artigo.description || 'Conteúdo do artigo não disponível.'}
                  </p>
                  
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      🐕 Dicas Importantes
                    </h3>
                    <p>
                      Este artigo contém informações valiosas para cuidar melhor do seu cão. 
                      Sempre consulte um veterinário para orientações específicas sobre a saúde 
                      e bem-estar do seu pet.
                    </p>
                    
                    <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
                      <p className="text-amber-800">
                        <strong>💡 Lembre-se:</strong> Cada cão é único e pode ter necessidades específicas. 
                        O que funciona para um pode não funcionar para outro.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navegação no final */}
          <div className="text-center">
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={handleVoltarParaCategoria}
                className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2"
              >
                ← Voltar para Categoria
              </button>
              <button
                onClick={handleVoltarParaListagem}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                📚 Ver Todas as Categorias
              </button>
            </div>
          </div>
        </article>

        <ScrollToTop />
      </main>
      
      <Footer />
      <ToastContainer />
    </div>
  );
}
