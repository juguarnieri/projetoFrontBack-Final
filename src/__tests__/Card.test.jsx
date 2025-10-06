import { render, screen } from '@testing-library/react'
import Card from '../app/components/Card'

jest.mock('next/image', () => {
  return function Image({ src, alt, ...props }) {
    return <img src={src} alt={alt} {...props} />
  }
})

describe('Card Component', () => {
  const mockProps = {
    titulo: 'Dica de Alimentação',
    descricao: 'Dica importante: Uma dieta equilibrada é fundamental para a saúde do seu cão.',
    imagem: 'https://example.com/test-image.jpg'
  }

  test('renderiza o card com título e descrição', () => {
    render(<Card {...mockProps} />)
    
    expect(screen.getByText('Dica de Alimentação')).toBeInTheDocument()
    expect(screen.getByText(/Uma dieta equilibrada é fundamental/)).toBeInTheDocument()
  })

  test('renderiza a imagem com alt text correto', () => {
    render(<Card {...mockProps} />)
    
    const image = screen.getByAltText('Dica de Alimentação')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', 'https://example.com/test-image.jpg')
  })

  test('aplica as classes CSS corretas', () => {
    render(<Card {...mockProps} />)
    
    const cardContainer = screen.getByText('Dica de Alimentação').closest('div').parentElement
    expect(cardContainer).toHaveClass('bg-white', 'rounded-xl', 'shadow-md')
  })

  test('renderiza sem imagem quando não fornecida', () => {
    const propsWithoutImage = {
      titulo: 'Teste sem imagem',
      descricao: 'Descrição de teste'
    }
    
    render(<Card {...propsWithoutImage} />)
    
    expect(screen.getByText('Teste sem imagem')).toBeInTheDocument()
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })

  test('renderiza com fallback quando propriedades estão vazias', () => {
    const emptyProps = {}
    
    render(<Card {...emptyProps} />)
    
    const cardElement = screen.getByRole('heading', { level: 3 })
    expect(cardElement).toBeInTheDocument()
  })
})