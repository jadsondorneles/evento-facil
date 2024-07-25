'use client'

import ErrorLayout from '@/app/_presenter/components/ErroLayout'
import animationData from '@/app/_presenter/components/ErroLayout/Erro.json'

const ErrorPage = ({ error }: { error: Error }) => {
  return (
    <ErrorLayout
      animationData={animationData}
      titulo={`Ocorreu um erro!!`}
      detalheErro={`Detalhes do Erro:\n ${error.message}`}
    />
  )
}

export default ErrorPage
