import { useState } from 'react'

const useEventoController = () => {
  const [openDadosEvento, setDadosEvento] = useState<boolean>(false)

  const onCloseDadosEvento = () => {
    setDadosEvento(false)
  }

  const onOpenDadosEvento = () => {
    setDadosEvento(true)
  }

  return {
    openDadosEvento,
    onCloseDadosEvento,
    onOpenDadosEvento,
  }
}

export default useEventoController
