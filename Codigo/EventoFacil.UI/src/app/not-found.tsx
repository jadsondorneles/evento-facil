'use client'

import ErrorLayout from '@/app/_presenter/components/ErroLayout'
import animationData from '@/app/_presenter/components/ErroLayout/Erro404.json'

const NotFoundPage = () => {
  return (
    <ErrorLayout
      animationData={animationData}
      titulo={`Ocorreu um erro!! \nPágina Não Encontrada`}
      detalheErro={`Verifique se há erros ortográficos no endereço URL ou se a página foi movida.`}
    />
  )
}

export default NotFoundPage
