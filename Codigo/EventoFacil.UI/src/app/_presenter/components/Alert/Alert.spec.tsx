import React from 'react'

import { fireEvent } from '@testing-library/react'

import { renderizarComTema } from '@/jest.utils'

import Alert, { AlertSeverity } from './index'

describe('Alert', () => {
  it('deve corresponder ao snapshot', () => {
    const alert = renderizarComTema(<Alert description='Teste Alert' severity={AlertSeverity.info} />)
    expect(alert).toMatchSnapshot()
  })

  it('deve usar como padrão a severity "info" se nenhuma for fornecida', () => {
    const { container } = renderizarComTema(<Alert description='Teste Alert' />)
    const defaultSeverityClass = 'MuiAlert-outlinedInfo'
    const alertElementDefaultSeverity = container.querySelector(`.${defaultSeverityClass}`)
    expect(alertElementDefaultSeverity).not.toBeNull()
  })

  it('deve renderizar corretamente a descrição', () => {
    const { getByText } = renderizarComTema(<Alert description='Teste Alert Descrição' severity={AlertSeverity.info} />)
    expect(getByText('Teste Alert Descrição')).toBeTruthy()
  })

  it('não deve exibir nenhum ícone quando o ícone estiver definido como falso', () => {
    const alertElement = renderizarComTema(
      <Alert description='Teste Alert' severity={AlertSeverity.info} showIcon={false} />
    )
    const icone = alertElement.asFragment().querySelector('SvgIcon')
    expect(icone).toBeNull()
  })

  it('deve chamar o retorno de chamada onClose quando o botão Fechar for clicado', () => {
    const onCloseMock = jest.fn()
    const { getByLabelText } = renderizarComTema(
      <Alert description='Teste Alert' severity={AlertSeverity.info} onClose={onCloseMock} />
    )
    fireEvent.click(getByLabelText('close'))
    expect(onCloseMock).toHaveBeenCalled()
  })

  it('deve renderizar corretamente o conteúdo do suporte html', () => {
    const testeConteudoHtml = '<span>Teste Conteudo HTML</span>'
    const { container } = renderizarComTema(<Alert severity={AlertSeverity.info} html={testeConteudoHtml} />)
    const conteudoHTMLRenderizado = container.querySelector('span')
    expect(conteudoHTMLRenderizado).not.toBeNull()
    expect(conteudoHTMLRenderizado?.textContent).toBe('Teste Conteudo HTML')
  })
})
