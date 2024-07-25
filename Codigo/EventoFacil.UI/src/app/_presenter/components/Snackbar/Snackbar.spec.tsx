import React from 'react'

import { screen } from '@testing-library/react'

import { useAppStore } from '@/app/_data/store/store'

import { renderizarComTema } from '@/jest.utils'

import Snackbar from './index'

jest.mock('@/app/_data/store/store', () => ({
  useAppStore: jest.fn(),
}))

describe('Snackbar', () => {
  beforeEach(() => {
    ;(useAppStore as unknown as jest.Mock).mockReturnValue({
      snackbar: null,
      hideAlert: jest.fn(),
    })
  })

  it('deve corresponder ao snapshot', () => {
    ;(useAppStore as unknown as jest.Mock).mockReturnValue({
      snackbar: {
        description: 'Test Alert',
        severity: 'info',
      },
      hideAlert: jest.fn(),
    })
    const snackbarElement = renderizarComTema(<Snackbar />)
    expect(snackbarElement).toMatchSnapshot()
  })

  it('deve renderizar sem travar', () => {
    renderizarComTema(<Snackbar />)
  })

  it('não deve exibir nada se não houver alerta', () => {
    renderizarComTema(<Snackbar />)
    expect(screen.queryByRole('alert')).toBeNull()
  })

  it('deve exibir um alerta se existir no estado', () => {
    ;(useAppStore as unknown as jest.Mock).mockReturnValue({
      snackbar: {
        description: 'Test Alert',
        severity: 'info',
      },
      hideAlert: jest.fn(),
    })

    const snackbarElement = renderizarComTema(<Snackbar />)
    expect(snackbarElement.asFragment().querySelector(`.MuiSnackbar-root`)).not.toBeNull()
  })

  it('deve renderizar corretamente o conteúdo do suporte html no componente Alert', () => {
    const testHtmlContent = '<span>Teste o conteúdo HTML no Snackbar</span>'
    const snackbarState = {
      description: 'Test Snackbar',
      html: testHtmlContent,
    }

    ;(useAppStore as unknown as jest.Mock).mockReturnValue({
      snackbar: snackbarState,
      hideAlert: jest.fn(),
    })

    const { container } = renderizarComTema(<Snackbar />)
    const renderedHtmlContent = container.querySelector('span')
    expect(renderedHtmlContent).not.toBeNull()
    expect(renderedHtmlContent?.textContent).toBe('Teste o conteúdo HTML no Snackbar')
  })

  it('deve renderizar corretamente a descrição como uma lista de strings no componente Alert', () => {
    const testDescription = ['Test Descrição', 'Test Descrição 2']
    const snackbarState = {
      description: testDescription,
    }

    ;(useAppStore as unknown as jest.Mock).mockReturnValue({
      snackbar: snackbarState,
      hideAlert: jest.fn(),
    })

    const { container } = renderizarComTema(<Snackbar />)
    const renderedDescription = container.querySelectorAll('p')
    expect(renderedDescription).toHaveLength(2)
    expect(renderedDescription[0].textContent).toBe('Test Descrição')
    expect(renderedDescription[1].textContent).toBe('Test Descrição 2')
  })
})
