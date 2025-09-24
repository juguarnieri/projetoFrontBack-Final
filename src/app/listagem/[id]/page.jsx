"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import ScrollToTop from "../../components/ScrollToTop";

export default function CategoriaDetalhes() {
  const [categoria, setCategoria] = useState(null);
  const [artigos, setArtigos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();
  const router = useRouter();
  const categoriaId = params.id;

  useEffect(() => {
    const fetchCategoriaEArtigos = async () => {
      try {
        setLoading(true);

        const categoriaResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/categories/${categoriaId}`);
        setCategoria(categoriaResponse.data.data);

        try {
          const artigosResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/articles?category_id=${categoriaId}`);
          setArtigos(artigosResponse.data.data || []);
        } catch {
          const artigosResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/articles/category/${categoriaId}`);
          setArtigos(artigosResponse.data.data || []);
        }

      } catch (err) {
        setError('Erro ao carregar dados');
      } finally {
        setLoading(false);
      }
    };

    if (categoriaId) {
      fetchCategoriaEArtigos();
    }
  }, [categoriaId]);

  const handleVoltarParaListagem = () => {
    router.push('/listagem');
  };

  const handleVoltarParaHome = () => {
    router.push('/');
  };

  const handleLerArtigo = (artigo) => {
    router.push(`/artigos/${artigo.id}`);
    
    toast.info(`📖 Abrindo artigo: ${artigo.titulo || artigo.title}`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#06b6d4",
        color: "white",
      },
    });
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-600 mx-auto"></div>
            <p className="mt-4 text-xl text-orange-600">Carregando categoria e artigos...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">❌</div>
            <p className="text-xl text-red-600 mb-4">{error}</p>
            <button
              onClick={handleVoltarParaListagem}
              className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
            >
              Voltar para Listagem
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <Banner 
        titulo={categoria ? `📚 ${categoria.titulo || categoria.title || categoria.name}` : "📚 Categoria"}
        subtitulo={categoria ? (categoria.descricao || categoria.description || "Explore os artigos desta categoria") : "Carregando categoria..."}
        imagem="/images/image1.png"
      />
      <main className="flex-grow">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={handleVoltarParaHome}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm"
            >
              🏠 Início
            </button>
            <button
              onClick={handleVoltarParaListagem}
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm"
            >
              ← Ver Todas as Categorias
            </button>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              📖 Artigos desta Categoria
            </h2>
            <p className="text-lg text-gray-600">
              {artigos.length} {artigos.length === 1 ? 'artigo encontrado' : 'artigos encontrados'}
            </p>
          </div>

          {artigos.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-gray-500 text-xl">Nenhum artigo encontrado nesta categoria.</p>
              <p className="text-gray-400 mt-2">Em breve, novos conteúdos serão adicionados!</p>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="grid grid-cols-1 min-[790px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
                {artigos.slice(0, 3).map((artigo, index) => (
                  <div
                    key={artigo.id || index}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer w-full max-w-sm h-[420px] flex flex-col"
                    onClick={() => handleLerArtigo(artigo)}
                  >
                    <div className="h-56 overflow-hidden flex-shrink-0">
                      <img
                        src={artigo.image_url ? `${process.env.NEXT_PUBLIC_API_URL}/uploads/${artigo.image_url}` : '/images/banner.png'}
                        alt={artigo.titulo || artigo.title || 'Artigo'}
                        className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2 text-center flex-shrink-0 min-h-[3.5rem]">
                        {artigo.titulo || artigo.title || 'Título do Artigo'}
                      </h3>
                      
                      <div className="text-center mt-auto">
                        <button 
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLerArtigo(artigo);
                          }}
                          className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                          Ler Artigo
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {artigos.length > 3 && (
                <div className="grid grid-cols-1 min-[790px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
                  {artigos.slice(3, 6).map((artigo, index) => (
                      <div
                        key={artigo.id || (index + 3)}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer w-full max-w-sm h-[420px] flex flex-col"
                        onClick={() => handleLerArtigo(artigo)}
                      >
                        <div className="h-56 overflow-hidden flex-shrink-0">
                          <img
                            src={artigo.image_url ? `${process.env.NEXT_PUBLIC_API_URL}/uploads/${artigo.image_url}` : '/images/banner.png'}
                            alt={artigo.titulo || artigo.title || 'Artigo'}
                            className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        
                        <div className="p-6 flex flex-col flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2 text-center flex-shrink-0 min-h-[3.5rem]">
                            {artigo.titulo || artigo.title || 'Título do Artigo'}
                          </h3>
                          
                          <div className="text-center mt-auto">
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleLerArtigo(artigo);
                              }}
                              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                            >
                              Ler Artigo
                            </button>
                          </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}              {artigos.length > 6 && (
                <div className="grid grid-cols-1 min-[790px]:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
                  {artigos.slice(6).map((artigo, index) => (
                    <div
                      key={artigo.id || (index + 6)}
                      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer w-full max-w-sm h-[420px] flex flex-col"
                      onClick={() => handleLerArtigo(artigo)}
                    >
                      <div className="h-56 overflow-hidden flex-shrink-0">
                        <img
                          src={artigo.image_url ? `${process.env.NEXT_PUBLIC_API_URL}/uploads/${artigo.image_url}` : '/images/banner.png'}
                          alt={artigo.titulo || artigo.title || 'Artigo'}
                          className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2 text-center flex-shrink-0 min-h-[3.5rem]">
                          {artigo.titulo || artigo.title || 'Título do Artigo'}
                        </h3>
                        
                        <div className="text-center mt-auto">
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleLerArtigo(artigo);
                            }}
                            className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                          >
                            Ler Artigo
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </section>

        <ScrollToTop />
      </main>
      
      <Footer />
      <ToastContainer />
    </div>
  );
}
