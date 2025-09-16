"use client";
import { useRouter } from "next/navigation";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  
  const cards = [
    {
      titulo: "Dica de Alimentação",
      descricao: "Dica importante: Uma dieta equilibrada é fundamental para a saúde do seu cão. Escolha rações de qualidade adequadas à idade e porte.",
      imagem: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=300&fit=crop"
    },
    {
      titulo: "Dica de Exercícios",
      descricao: "Dica essencial: Caminhadas regulares e brincadeiras são fundamentais para manter seu cão fisicamente ativo e mentalmente estimulado.",
      imagem: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=300&fit=crop"
    },
    {
      titulo: "Dica de Saúde",
      descricao: "Dica valiosa: Consultas regulares, vacinas em dia e check-ups preventivos garantem a saúde e longevidade do seu pet.",
      imagem: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=300&fit=crop"
    },
    {
      titulo: "Dica de Socialização",
      descricao: "Dica fundamental: Exposição controlada a outros animais e pessoas desde filhote desenvolve um cão equilibrado e sociável.",
      imagem: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop"
    },
    {
      titulo: "Dica de Higiene",
      descricao: "Dica essencial: Banhos regulares, escovação e cuidados com unhas e dentes mantêm seu cão limpo e saudável.",
      imagem: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <Banner 
        titulo="Bem-vindo ao DogCare! 🦴"
        subtitulo="Seu guia completo de cuidados caninos! Aqui você encontra informações essenciais para garantir o bem-estar do seu melhor amigo de quatro patas."
        imagem="https://cdn.jornaldaparaiba.com.br/wp-content/uploads/2024/01/900x0/racas-de-cachorro-7.webp?fallback=https%3A%2F%2Fcdn.jornaldaparaiba.com.br%2Fwp-content%2Fuploads%2F2024%2F01%2Fracas-de-cachorro.jpg%3Fxid%3D650492&xid=650492"
      />

      <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Dicas Essenciais
          </h2>
          <p className="text-xl text-gray-600">
            As melhores dicas para manter seu cão saudável e feliz
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 justify-items-center">
          {cards.map((card, idx) => (
            <Card key={idx} {...card} />
          ))}
        </div>
      </main>

      <section className="bg-orange-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            📚 Explore Nossas Dicas Completas
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Descubra mais dicas detalhadas, conselhos práticos e muito mais para cuidar melhor do seu pet
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => router.push('/listagem')}
              className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Ver Todas as Dicas
            </button>
            <button 
              onClick={() => router.push('/quiz')}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-500 transition-colors"
            >
              Fazer Quiz Interativo
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Veja a Idade do Seu Cachorro
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Descubra como calcular a idade do seu cão em anos humanos e entenda melhor as necessidades específicas de cada fase da vida do seu pet.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/images/cachorro-idade.png"
                  alt="Cachorro de diferentes idades"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
