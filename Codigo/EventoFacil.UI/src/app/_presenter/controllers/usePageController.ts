import { useState } from 'react'

import { DateSelectArg } from '@fullcalendar/core'
import { useQuery } from '@tanstack/react-query'

import { getEventos } from '@/app/_data/services/eventoService'
import { TanstackQueryKeys } from '@/app/_domain/constantes/tanstackQueryKeys'
import { EventoType } from '@/app/_domain/types/api/EventoType'

import dayjs from '@/dates/index'

const usePageController = () => {
  const [openEventoForm, setOpenEventoForm] = useState<boolean>(false)
  const [openCalendario, setOpenCalendario] = useState<boolean>(false)
  const [dataSelecionada, setDataSelecionada] = useState<Date>(dayjs().toDate())
  const [eventoSelecionado, setEventoSelecionado] = useState<EventoType | null>(null)

  const dataFormatada = dayjs(dataSelecionada).locale('pt-Br').format('dddd, D [de] MMMM, YYYY')

  const {
    data: eventos,
    isLoading,
    error,
  } = useQuery({
    queryKey: [TanstackQueryKeys.eventos],
    queryFn: async () => await getEventos(),
  })

  const eventosDataSelecionada = eventos?.filter((evento) =>
    dayjs(evento.data_inicio).isSame(dayjs(dataSelecionada), 'day')
  )

  const eventosCalendario = eventos?.map((evento) => ({
    title: evento.titulo,
    date: evento.data_inicio,
  }))

  const onCloseEventoForm = () => {
    setOpenEventoForm(false)
    setEventoSelecionado(null)
  }

  const onCloseCalendario = () => {
    setOpenCalendario(false)
  }

  const onOpenCalendario = () => {
    setOpenCalendario(true)
  }

  const onOpenEventoForm = () => {
    setEventoSelecionado(null)
    setOpenEventoForm(true)
  }

  const onDateClick = (dateSelect: DateSelectArg) => {
    setDataSelecionada(dayjs(dateSelect.start).add(1, 'day').toDate())
  }

  const onDateDialogClick = (dateSelect: DateSelectArg) => {
    setDataSelecionada(dayjs(dateSelect.start).add(1, 'day').toDate())
    onCloseCalendario()
  }

  const onEventoSelecionado = (evento: EventoType | null) => {
    onOpenEventoForm()
    setEventoSelecionado(evento)
  }

  return {
    onCloseCalendario,
    onCloseEventoForm,
    onDateClick,
    onOpenCalendario,
    onOpenEventoForm,
    openCalendario,
    openEventoForm,
    dataFormatada,
    isLoadingEventos: isLoading,
    errorEventos: error,
    eventosDataSelecionada,
    eventosCalendario,
    eventoSelecionado,
    onEventoSelecionado,
    onDateDialogClick,
  }
}

export default usePageController
