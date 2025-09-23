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
        console.log('� ID da categoria:', categoriaId);

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
        console.error('❌ Erro:', err);
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
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-teal-100 to-cyan-200">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-600 mx-auto"></div>
            <p className="mt-4 text-xl text-teal-600">Carregando categoria e artigos...</p>
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
            <button
              onClick={handleVoltarParaListagem}
              className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors"
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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-teal-100 to-cyan-200">
      <Header />
      <Banner 
        titulo={categoria ? `📚 ${categoria.titulo || categoria.title || categoria.name}` : "📚 Categoria"}
        subtitulo={categoria ? (categoria.descricao || categoria.description || "Explore os artigos desta categoria") : "Carregando categoria..."}
        imagem="/images/banner.png"
      />
      <main className="flex-grow">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex gap-4">
            <button
              onClick={handleVoltarParaHome}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              🏠 Home
            </button>
            <button
              onClick={handleVoltarParaListagem}
              className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center gap-2"
            >
              ← Voltar para Listagem
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artigos.map((artigo, index) => (
                <div
                  key={artigo.id || index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer"
                  onClick={() => handleLerArtigo(artigo)}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={artigo.image_url ? `${process.env.NEXT_PUBLIC_API_URL}/uploads/${artigo.image_url}` : '/images/banner.png'}
                      alt={artigo.titulo || artigo.title || 'Artigo'}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2 text-center">
                      {artigo.titulo || artigo.title || 'Título do Artigo'}
                    </h3>
                    
                    <div className="text-center">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLerArtigo(artigo);
                        }}
                        className="text-teal-600 font-medium text-sm hover:text-teal-700 transition-colors px-4 py-2 rounded-full bg-teal-50 hover:bg-teal-100"
                      >
                        Ler artigo →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
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
