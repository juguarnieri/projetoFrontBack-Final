"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import CategoriasList from "../components/CategoriasList";
import SearchBar from "../components/SearchBar";
import ScrollToTop from "../components/ScrollToTop";

export default function Listagem() {
  const [categorias, setCategorias] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        setLoading(true);
        const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/categories`;
        console.log('🔗 Fazendo requisição para:', apiUrl);
        console.log('🌍 NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL);
        
        const response = await axios.get(apiUrl);
        console.log('✅ Resposta do backend:', response.data);
        console.log('✅ Tipo da resposta:', typeof response.data);
        console.log('✅ É array?:', Array.isArray(response.data));
        
        // Verificar se response.data é um array, se não, tentar acessar uma propriedade que contenha o array
        let categoriasData = response.data;
        if (!Array.isArray(response.data)) {
          // Se a resposta não é um array, pode estar em response.data.categories ou response.data.data
          if (response.data.categories && Array.isArray(response.data.categories)) {
            categoriasData = response.data.categories;
          } else if (response.data.data && Array.isArray(response.data.data)) {
            categoriasData = response.data.data;
          } else {
            console.error('❌ Resposta do backend não é um array:', response.data);
            categoriasData = [];
          }
        }
        
        console.log('✅ Categorias processadas:', categoriasData);
        setCategorias(categoriasData);
        
        toast.success("📚 Categorias carregadas com sucesso!", {
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
          progressStyle: {
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          },
        });
      } catch (err) {
        console.error('❌ Erro ao buscar categorias:', err);
        console.error('❌ Status:', err.response?.status);
        console.error('❌ Dados:', err.response?.data);
        console.error('❌ URL tentada:', `${process.env.NEXT_PUBLIC_API_URL}/categories`);
        
        toast.error("❌ Erro ao carregar categorias do backend!", {
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
          progressStyle: {
            backgroundColor: "rgba(255, 255, 255, 0.3)",
          },
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCategorias();
  }, []);

  const handleDetalhes = (categoria) => {
    router.push(`/listagem/${categoria.id}`);
    
    toast.info(`🔍 Carregando categoria: ${categoria.titulo}`, {
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
      progressStyle: {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
      },
    });
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-teal-100 to-cyan-200">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-600 mx-auto"></div>
            <p className="mt-4 text-xl text-teal-600">Carregando categorias...</p>
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

        <Banner 
          titulo="📚 Categorias de Cuidados"
          subtitulo="Explore nosso conteúdo organizado por categorias e encontre exatamente o que precisa para cuidar do seu cão"
          imagem="/images/banner1.png"
        />
        
        <div className="text-center mt-12 mb-8">
          <p className="text-teal-700 text-lg font-medium max-w-3xl mx-auto">
            Bem-vindo às nossas categorias! Aqui você encontra dicas especializadas e artigos práticos para cuidar melhor do seu melhor amigo.
          </p>
        </div>

        <SearchBar onSearch={handleSearch} />
        
        <CategoriasList 
          categorias={categorias} 
          onDetalhes={handleDetalhes} 
          searchTerm={searchTerm} 
        />
        
        <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  ⚖️ Peso Ideal do seu Cão
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Manter o peso ideal é fundamental para a saúde e bem-estar do seu cão. 
                  Um peso adequado previne doenças, melhora a qualidade de vida e aumenta a longevidade do seu pet.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-center lg:justify-start">
                    <span className="text-2xl mr-3">🐕‍🦺</span>
                    <span className="text-gray-700">Porte pequeno: 1-10kg</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <span className="text-2xl mr-3">🐕</span>
                    <span className="text-gray-700">Porte médio: 11-25kg</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <span className="text-2xl mr-3">🐕‍🦮</span>
                    <span className="text-gray-700">Porte grande: 26-45kg</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start">
                    <span className="text-2xl mr-3">🦮</span>
                    <span className="text-gray-700">Porte gigante: 45kg+</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="relative inline-block">
                  <img 
                    src="https://cdn.dooca.store/1545/posts/19-capa-raca-por-tam.jpg" 
                    alt="Cão saudável na balança" 
                    className="rounded-2xl shadow-2xl max-w-md w-full h-auto"
                  />
                  <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg">
                    <span className="text-2xl">⚖️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <ScrollToTop />
      </main>
      
      <Footer />
      <ToastContainer
        toastStyle={{
          backgroundColor: "#06b6d4",
          color: "white",
        }}
      />
    </div>
  );
}
