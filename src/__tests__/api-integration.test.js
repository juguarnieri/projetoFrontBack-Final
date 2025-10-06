import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios

describe('API Integration Tests', () => {
  const originalEnv = process.env

  beforeEach(() => {
    jest.resetAllMocks()
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_API_URL: 'http://localhost:3001'
    }
  })

  afterEach(() => {
    process.env = originalEnv
  })

  describe('Categories API', () => {
    test('busca categorias com sucesso', async () => {
      const mockCategories = {
        data: [
          {
            id: 1,
            titulo: 'Alimentação',
            descricao: 'Dicas sobre alimentação canina',
            image_url: 'alimentacao.jpg'
          },
          {
            id: 2,
            titulo: 'Exercícios',
            descricao: 'Atividades físicas para cães',
            image_url: 'exercicios.jpg'
          }
        ]
      }

      mockedAxios.get.mockResolvedValueOnce(mockCategories)

      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`)

      expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:3001/api/categories')
      expect(response.data).toEqual(mockCategories.data)
      expect(response.data).toHaveLength(2)
      expect(response.data[0]).toHaveProperty('titulo', 'Alimentação')
    })

    test('trata erro na busca de categorias', async () => {
      const mockError = new Error('Network Error')
      mockedAxios.get.mockRejectedValueOnce(mockError)

      try {
        await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`)
      } catch (error) {
        expect(error.message).toBe('Network Error')
      }

      expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:3001/api/categories')
    })

    test('busca categoria específica por ID', async () => {
      const mockCategory = {
        data: {
          id: 1,
          titulo: 'Alimentação',
          descricao: 'Dicas sobre alimentação canina',
          image_url: 'alimentacao.jpg',
          artigos: [
            {
              id: 1,
              titulo: 'Ração ideal para filhotes',
              conteudo: 'Conteúdo do artigo...'
            }
          ]
        }
      }

      mockedAxios.get.mockResolvedValueOnce(mockCategory)

      const categoryId = 1
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/categories/${categoryId}`)

      expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:3001/api/categories/1')
      expect(response.data).toHaveProperty('titulo', 'Alimentação')
      expect(response.data).toHaveProperty('artigos')
      expect(response.data.artigos).toHaveLength(1)
    })
  })

  describe('Quiz API', () => {
    test('busca perguntas do quiz com sucesso', async () => {
      const mockQuestions = {
        data: {
          data: [
            {
              id: 1,
              pergunta: 'Qual a frequência ideal para alimentar um cão adulto?',
              opcoes: ['1 vez ao dia', '2 vezes ao dia', '3 vezes ao dia', '4 vezes ao dia'],
              resposta_correta: 1,
              explicacao: 'Cães adultos devem ser alimentados 2 vezes ao dia.'
            }
          ]
        }
      }

      mockedAxios.get.mockResolvedValueOnce(mockQuestions)

      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/questions`)

      expect(mockedAxios.get).toHaveBeenCalledWith('http://localhost:3001/api/questions')
      expect(response.data.data).toHaveLength(1)
      expect(response.data.data[0]).toHaveProperty('pergunta')
      expect(response.data.data[0]).toHaveProperty('opcoes')
      expect(response.data.data[0].opcoes).toHaveLength(4)
    })

    test('valida estrutura das perguntas do quiz', async () => {
      const mockQuestions = {
        data: {
          data: [
            {
              id: 1,
              pergunta: 'Pergunta teste?',
              opcoes: ['A', 'B', 'C', 'D'],
              resposta_correta: 0,
              explicacao: 'Explicação teste'
            }
          ]
        }
      }

      mockedAxios.get.mockResolvedValueOnce(mockQuestions)

      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/questions`)
      const question = response.data.data[0]

      expect(question).toHaveProperty('id')
      expect(question).toHaveProperty('pergunta')
      expect(question).toHaveProperty('opcoes')
      expect(question).toHaveProperty('resposta_correta')
      expect(question).toHaveProperty('explicacao')

      expect(typeof question.id).toBe('number')
      expect(typeof question.pergunta).toBe('string')
      expect(Array.isArray(question.opcoes)).toBe(true)
      expect(typeof question.resposta_correta).toBe('number')
      expect(typeof question.explicacao).toBe('string')
    })
  })
})