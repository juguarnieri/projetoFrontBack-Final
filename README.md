# 🐕 DogCare - Plataforma Completa de Cuidados Caninos

<div align="center">

![DogCare Banner](public/images/banner.png)

### 🌟 Seu guia completo para cuidar do seu melhor amigo de quatro patas

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Axios](https://img.shields.io/badge/Axios-1.12.2-purple?style=for-the-badge&logo=axios)](https://axios-http.com/)

</div>

---

## 📋 Sobre o Projeto

**DogCare** é uma plataforma web moderna e responsiva dedicada ao cuidado integral de cães. Desenvolvida com as mais recentes tecnologias web, oferece informações essenciais, dicas práticas, quiz interativo e uma experiência de usuário excepcional para proprietários de pets.

### ✨ Funcionalidades Principais

- 🏠 **Homepage Interativa**: Dicas essenciais de cuidados caninos com cards visuais
- 📚 **Sistema de Categorias**: Organize informações por tópicos específicos
- 📰 **Artigos Detalhados**: Conteúdo completo sobre cuidados com pets
- 🎯 **Quiz Interativo**: Teste seus conhecimentos sobre cuidados caninos
- 🔍 **Busca Avançada**: Encontre rapidamente o conteúdo desejado
- 📱 **Design Responsivo**: Experiência perfeita em todos os dispositivos
- 🎨 **Animações Fluidas**: Interface moderna com efeitos visuais atraentes

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **[Next.js 15.5.2](https://nextjs.org/)** - Framework React para produção
- **[React 19.1.0](https://reactjs.org/)** - Biblioteca para interfaces de usuário
- **[TailwindCSS 4.0](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Axios 1.12.2](https://axios-http.com/)** - Cliente HTTP para requisições
- **[React Toastify](https://fkhadra.github.io/react-toastify/)** - Notificações elegantes
- **[Ant Design](https://ant.design/)** - Biblioteca de componentes UI

### Ferramentas de Desenvolvimento
- **[ESLint](https://eslint.org/)** - Linter para JavaScript
- **[PostCSS](https://postcss.org/)** - Processador CSS

### Recursos Adicionais
- **App Router** - Sistema de roteamento do Next.js 13+
- **Server Components** - Renderização do lado do servidor
- **Image Optimization** - Otimização automática de imagens
- **Responsive Design** - Layout adaptativo para todos os dispositivos

---

## 🚀 Instalação e Execução

### Pré-requisitos
- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**
- **Git**

### 1. Clone o Repositório
```bash
git clone https://github.com/juguarnieri/projetoFrontBack-Final.git
cd projetoFrontBack-Final
```

### 2. Instale as Dependências
```bash
# Usando npm
npm install

# Ou usando yarn
yarn install
```

### 3. Configure as Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto:
```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 4. Execute o Projeto

#### Desenvolvimento
```bash
# Usando npm
npm run dev

# Ou usando yarn
yarn dev
```

#### Produção
```bash
# Build do projeto
npm run build
npm run start

# Ou usando yarn
yarn build
yarn start
```

### 5. Acesse a Aplicação
- **Desenvolvimento**: http://localhost:3000
- **Produção**: http://localhost:3000

---

## 📁 Estrutura do Projeto

```
projetoFrontBack-Final/
├── 📁 public/                    # Arquivos estáticos
│   ├── 📁 images/               # Imagens do projeto
│   │   ├── avatar-julia.png
│   │   ├── banner.png
│   │   ├── banner1.png
│   │   └── cachorro-idade.png
│   └── 🖼️ *.svg                # Ícones SVG
├── 📁 src/
│   └── 📁 app/                  # App Router do Next.js
│       ├── 📁 artigos/          # Páginas de artigos
│       │   └── 📁 [id]/        # Artigo dinâmico por ID
│       ├── 📁 components/       # Componentes React
│       │   ├── 🧩 ArtigosModal.jsx
│       │   ├── 🎨 Banner.jsx
│       │   ├── 📋 Card.jsx
│       │   ├── 📂 CategoriasList.jsx
│       │   ├── 🦶 Footer.jsx
│       │   ├── 🔝 Header.jsx
│       │   ├── 📖 HistoriaTab.jsx
│       │   ├── ✨ ParticleEffect.jsx
│       │   ├── 🛒 Produtos.jsx
│       │   ├── 🎯 Quiz*.jsx     # Componentes do Quiz
│       │   ├── ⬆️ ScrollToTop.jsx
│       │   └── 🔍 SearchBar.jsx
│       ├── 📁 listagem/         # Páginas de listagem
│       │   ├── 📄 page.jsx      # Lista de categorias
│       │   └── 📁 [id]/        # Categoria por ID
│       ├── 📁 quiz/             # Sistema de Quiz
│       │   ├── 📄 page.jsx      # Página principal do quiz
│       │   └── 🎨 quiz-animations.css
│       ├── 📁 sobre-mim/        # Página sobre desenvolvedor
│       ├── 🎨 globals.css       # Estilos globais
│       ├── 🏗️ layout.jsx        # Layout principal
│       └── 🏠 page.jsx          # Página inicial
├── ⚙️ eslint.config.mjs         # Configuração ESLint
├── 📝 jsconfig.json             # Configuração JavaScript
├── ⚡ next.config.mjs           # Configuração Next.js
├── 📦 package.json              # Dependências e scripts
├── 🎨 postcss.config.mjs        # Configuração PostCSS
└── 📚 README.md                 # Documentação do projeto
```

---

## 🌐 Funcionalidades Detalhadas

### 🏠 Página Inicial
- **Banner Atrativo**: Apresentação visual da plataforma
- **Cards de Dicas**: 5 categorias essenciais de cuidados:
  - 🍖 Alimentação
  - 🏃 Exercícios
  - 🏥 Saúde
  - 🐕‍🦺 Socialização
  - 🛁 Higiene
- **Navegação Intuitiva**: Botões para explorar conteúdo e quiz

### 📚 Sistema de Listagem
- **Categorias Organizadas**: Visualização em grid responsivo
- **Busca Inteligente**: Filtro em tempo real
- **Detalhes Dinâmicos**: Páginas específicas por categoria
- **Loading States**: Feedback visual durante carregamentos

### 📰 Artigos
- **Conteúdo Rico**: Artigos detalhados sobre cuidados caninos
- **Navegação Fluida**: Transições suaves entre páginas
- **Design Atraente**: Layout otimizado para leitura
- **Sistema de Comentários**: Interface preparada para interação

### 🎯 Quiz Interativo
- **Estados Dinâmicos**: Intro → Loading → Jogando → Resultados
- **Timer Funcional**: 30 segundos por pergunta
- **Feedback Imediato**: Respostas corretas/incorretas
- **Pontuação Completa**: Sistema de score detalhado
- **API Integration**: Carregamento dinâmico de perguntas

### 🎨 Seção de Curiosidades
- **Cards Visuais**: Design moderno com gradientes
- **Animações**: Efeitos hover e transformações
- **Conteúdo Educativo**: Fatos interessantes sobre cães
- **Layout Responsivo**: Adaptação para mobile/desktop

### 👩‍💻 Sobre Desenvolvedor
- **Perfil Profissional**: Apresentação da desenvolvedora
- **Skills Visuais**: Barras de progresso animadas
- **Portfolio**: Projetos desenvolvidos
- **Contato**: Links para redes sociais e repositórios

---

## 🔌 API Integration

### Endpoints Utilizados

#### Categorias
```javascript
GET ${NEXT_PUBLIC_API_URL}/api/categories
GET ${NEXT_PUBLIC_API_URL}/api/categories/{id}
```

#### Artigos
```javascript
GET ${NEXT_PUBLIC_API_URL}/api/articles
GET ${NEXT_PUBLIC_API_URL}/api/articles?category_id={id}
GET ${NEXT_PUBLIC_API_URL}/api/articles/category/{id}
```

#### Quiz
```javascript
GET ${NEXT_PUBLIC_API_URL}/api/questions
```

### Exemplos de Uso da API

#### 📂 Carregando Categorias
```javascript
const fetchCategorias = async () => {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/categories`;
    const response = await axios.get(apiUrl);
    
    let categoriasData = response.data;
    if (!Array.isArray(response.data)) {
      if (response.data.categories && Array.isArray(response.data.categories)) {
        categoriasData = response.data.categories;
      } else if (response.data.data && Array.isArray(response.data.data)) {
        categoriasData = response.data.data;
      }
    }
    
    setCategorias(categoriasData);
  } catch (error) {
    console.error('Erro ao carregar categorias:', error);
  }
};
```

#### 📰 Carregando Artigos por Categoria
```javascript
const fetchArtigosPorCategoria = async (categoriaId) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/articles?category_id=${categoriaId}`
    );
    setArtigos(response.data.data || []);
  } catch (error) {
    // Fallback para endpoint alternativo
    const fallbackResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/articles/category/${categoriaId}`
    );
    setArtigos(fallbackResponse.data.data || []);
  }
};
```

#### 🎯 Carregando Perguntas do Quiz
```javascript
const loadQuestions = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/questions`
    );
    
    if (response.data?.data && response.data.data.length > 0) {
      const apiQuestions = response.data.data.map(q => ({
        id: q.id,
        question: q.question_text,
        options: q.alternatives.map(alt => alt.alternative_text),
        correct: q.alternatives.findIndex(alt => alt.is_correct),
        explanation: q.explanation || "Consulte nossos artigos para saber mais!"
      }));
      
      setQuestions(apiQuestions);
      setGameState('playing');
    }
  } catch (error) {
    console.error('Erro ao carregar perguntas:', error);
    setGameState('error');
  }
};
```

#### 🖼️ Tratamento de Imagens
```javascript
// Para imagens de categorias
const imageSrc = categoria.image_url 
  ? `${process.env.NEXT_PUBLIC_API_URL}/uploads/${categoria.image_url}`
  : '/images/banner.png';

// Para imagens de artigos com fallback
<img
  src={artigo.image_url 
    ? `${process.env.NEXT_PUBLIC_API_URL}/uploads/${artigo.image_url}` 
    : '/images/banner.png'
  }
  alt={artigo.titulo || 'Artigo'}
  onError={(e) => {
    e.target.src = '/images/banner.png';
  }}
/>
```

---

## 🎨 Design System

### Paleta de Cores
- **Primárias**: 
  - 🟠 Orange: `#f97316` (CTA buttons, highlights)
  - 🔵 Teal: `#0d9488` (Secondary elements)
  - ⚪ White: `#ffffff` (Background, cards)
- **Gradientes**:
  - 🌅 Orange to Teal: `from-orange-500 to-teal-500`
  - 🌄 Teal variants: `from-teal-100 to-cyan-200`

### Typography
- **Headings**: Font-bold, responsive sizes (text-4xl, text-5xl)
- **Body**: Text-gray-600, text-gray-700
- **Interactive**: Hover states com color transitions

### Componentes Visuais
- **Cards**: Rounded corners, shadows, hover effects
- **Buttons**: Gradient backgrounds, smooth transitions
- **Forms**: Clean inputs, focus states
- **Animations**: Smooth transforms, fade effects

---

## 📱 Responsividade

### Breakpoints TailwindCSS
- 📱 **Mobile**: < 640px
- 📱 **SM**: ≥ 640px
- 💻 **MD**: ≥ 768px
- 🖥️ **LG**: ≥ 1024px
- 🖥️ **XL**: ≥ 1280px

### Layouts Adaptativos
```javascript
// Grid responsivo para cards
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// Grid customizado para 790px
className="grid grid-cols-1 min-[790px]:grid-cols-2 lg:grid-cols-3 gap-4"

// Flexbox responsivo para botões
className="flex flex-col sm:flex-row gap-4"
```

---

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Build Manual
```bash
# Gerar build de produção
npm run build

# Testar build localmente
npm run start
```

### Configuração de Ambiente para Produção
```env
NEXT_PUBLIC_API_URL=https://sua-api-backend.com
```

---

## 🧪 Scripts Disponíveis

```json
{
  "dev": "next dev",           // Servidor de desenvolvimento
  "build": "next build",       // Build de produção
  "start": "next start",       // Servidor de produção
  "lint": "eslint"             // Verificação de código
}
```

---

## 🤝 Contribuição

### Como Contribuir
1. **Fork** o projeto
2. **Clone** seu fork
3. **Crie** uma branch para sua feature
4. **Commit** suas mudanças
5. **Push** para sua branch
6. **Abra** um Pull Request

### Padrões de Código
- ✅ Use ESLint para manter consistência
- 📝 Documente componentes complexos
- 🧪 Teste funcionalidades antes do commit
- 🎨 Mantenha o design system

---

## 🐛 Troubleshooting

### Problemas Comuns

#### 1. Erro de Conexão com API
```bash
# Verifique se a variável de ambiente está configurada
echo $NEXT_PUBLIC_API_URL

# Certifique-se que o backend está rodando
curl http://localhost:3001/api/categories
```

#### 2. Erro de Build
```bash
# Limpe o cache do Next.js
rm -rf .next

# Reinstale as dependências
rm -rf node_modules package-lock.json
npm install
```

#### 3. Problemas de Responsividade
- Verifique se está usando os breakpoints corretos do Tailwind
- Teste em diferentes dispositivos usando as ferramentas do desenvolvedor

---

## 👩‍💻 Desenvolvedor

<div align="center">

### 🌟 Júlia Guarnieri

[![GitHub](https://img.shields.io/badge/GitHub-juguarnieri-black?style=for-the-badge&logo=github)](https://github.com/juguarnieri)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-julia--guarnieri-blue?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/julia-guarnieri)

**Frontend Developer** especializada em React, Next.js e UI/UX Design

</div>

---

## 📄 Licença

Este projeto está sob licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Suporte

- 📧 **Email**: [contato@dogcare.com](mailto:contato@dogcare.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/juguarnieri/projetoFrontBack-Final/issues)
- 💬 **Discussões**: [GitHub Discussions](https://github.com/juguarnieri/projetoFrontBack-Final/discussions)

---

<div align="center">

### 🐕 Feito com ❤️ para nossos amigos de quatro patas

**DogCare** - Cuidando de quem cuidamos 🐾

---

⭐ **Se este projeto te ajudou, não esqueça de dar uma estrela!** ⭐

</div>
