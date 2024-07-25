import mockRouter from 'next-router-mock'

import '@testing-library/jest-dom'
import { fireEvent, screen } from '@testing-library/react'

import { renderizarComTema } from '@/jest.utils'

import animationData from './Erro404.json'
import ErrorLayout from './index'

// Mock do componente Lottie
jest.mock('react-lottie', () => {
  return function DummyLottie() {
    return <div data-testid='lottie-mock'></div>
  }
})

jest.mock('next/navigation', () => require('next-router-mock'))

describe('ErrorLayout', () => {
  const renderComponent = () => {
    return renderizarComTema(
      <ErrorLayout
        animationData={animationData}
        titulo='Ocorreu um erro!!'
        detalheErro='Erro: Descrição da mensagem de erro'
      />
    )
  }

  it('deve corresponder ao snapshot', () => {
    const component = renderComponent()
    expect(component).toMatchSnapshot()
  })

  describe('ao clicar no botão Voltar', () => {
    it('redireciona o usuário para a página anterior', () => {
      renderComponent()
      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
      expect(fireEvent.click(button!)).toBeTruthy()

      expect(mockRouter).toMatchObject({
        pathname: '/',
      })
    })
  })
})
