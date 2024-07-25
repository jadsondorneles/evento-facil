import { useEffect, useState } from 'react'

import { useTheme } from '@mui/material'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'

import { atualizaEvento, deletaEvento, salvaEvento } from '@/app/_data/services/eventoService'
import { useAppStore } from '@/app/_data/store/store'
import { TanstackQueryKeys } from '@/app/_domain/constantes/tanstackQueryKeys'
import { EventoFormData } from '@/app/_domain/types/EventoFormData'
import { EventoType } from '@/app/_domain/types/api/EventoType'
import { AlertSeverity } from '@/app/_presenter/components/Alert'

import dayjs from '@/dates'

type UseEventoFormControllerProps = { eventoSelecionado?: EventoType | null; onClose: () => void }

const useEventoFormController = ({ onClose, eventoSelecionado }: UseEventoFormControllerProps) => {
  const theme = useTheme()
  const queryClient = useQueryClient()

  const { control, reset, handleSubmit, setValue } = useForm<EventoFormData>()

  const [corAtiva, setCorAtiva] = useState<string>('')
  const { showSnackbar } = useAppStore()

  const coresBtns = [
    theme.palette.red[50],
    theme.palette.purple[50],
    theme.palette.pink[50],
    theme.palette.teal[50],
    theme.palette.green[50],
    theme.palette.yellow[100],
    theme.palette.orange[50],
    theme.palette.brown[50],
  ]

  const onCloseForm = () => {
    reset({})
    onClose()
  }

  const onChangeCor = (cor: string) => {
    setCorAtiva(cor)
    setValue('cor', cor)
  }

  const salvaEventoMutation = useMutation({
    mutationFn: async (data: EventoType) => {
      return await salvaEvento(data)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [TanstackQueryKeys.eventos] })

      showSnackbar({
        html: 'Evento salvo com sucesso!',
        severity: AlertSeverity.success,
        autoHideDuration: 3000,
      })

      onCloseForm()
    },
    onError: (error: Error) => {
      showSnackbar({
        html: error.message,
        severity: AlertSeverity.error,
        autoHideDuration: 3000,
      })
    },
  })

  const atualizaEventoMutation = useMutation({
    mutationFn: async (data: Partial<EventoType>) => {
      return await atualizaEvento(eventoSelecionado?.id ?? 0, data)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [TanstackQueryKeys.eventos] })

      showSnackbar({
        html: 'Evento atualizado com sucesso!',
        severity: AlertSeverity.success,
        autoHideDuration: 3000,
      })

      onCloseForm()
    },
    onError: (error: Error) => {
      showSnackbar({
        html: error.message,
        severity: AlertSeverity.error,
        autoHideDuration: 3000,
      })
    },
  })

  const deletaEventoMutation = useMutation({
    mutationFn: async (id: number) => {
      return await deletaEvento(id)
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [TanstackQueryKeys.eventos] })

      showSnackbar({
        html: 'Evento deletado com sucesso!',
        severity: AlertSeverity.success,
        autoHideDuration: 3000,
      })

      onCloseForm()
    },
    onError: (error: Error) => {
      showSnackbar({
        html: error.message,
        severity: AlertSeverity.error,
        autoHideDuration: 3000,
      })
    },
  })

  const onFormSubmit = handleSubmit((data) => {
    if (!data) return

    const dataInicio = dayjs(data.dataInicioEvento)
    const horaInicio = dayjs(data.horaInicioEvento)
    const dataFim = dayjs(data.dataFimEvento)
    const horaFim = dayjs(data.horaFimEvento)

    const dataInicioFormatada = dataInicio
      .set('hour', horaInicio.hour())
      .set('minute', horaInicio.minute())
      .format('YYYY-MM-DD HH:mm:ss')
    const dataFimFormatada = dataFim
      .set('hour', horaFim.hour())
      .set('minute', horaFim.minute())
      .format('YYYY-MM-DD HH:mm:ss')

    const payload = {
      titulo: data.titulo,
      descricao: data.descricao,
      data_inicio: dataInicioFormatada,
      data_termino: dataFimFormatada,
      cor: data.cor,
    } as EventoType

    if (eventoSelecionado) {
      return atualizaEventoMutation.mutateAsync(payload)
    }

    return salvaEventoMutation.mutateAsync(payload)
  })

  useEffect(() => {
    if (eventoSelecionado !== null && eventoSelecionado !== undefined) {
      const eventoData = {
        titulo: eventoSelecionado.titulo,
        descricao: eventoSelecionado.descricao,
        dataInicioEvento: dayjs(eventoSelecionado.data_inicio),
        horaInicioEvento: dayjs(eventoSelecionado.data_inicio),
        dataFimEvento: dayjs(eventoSelecionado.data_termino),
        horaFimEvento: dayjs(eventoSelecionado.data_termino),
        cor: eventoSelecionado.cor,
      }
      reset(eventoData)
      setCorAtiva(eventoSelecionado.cor)
    } else {
      reset({})
      setCorAtiva('')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventoSelecionado])

  return {
    form: {
      control,
      onSubmit: onFormSubmit,
    },
    corAtiva,
    coresBtns,
    isLoadingDados: salvaEventoMutation.isPending || atualizaEventoMutation.isPending,
    isLoadingDeleta: deletaEventoMutation.isPending,
    onChangeCor,
    onCloseForm,
    onDeletaEvento: (id: number) => deletaEventoMutation.mutateAsync(id),
    theme,
  }
}

export default useEventoFormController
