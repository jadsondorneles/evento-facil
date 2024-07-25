'use client'

import Image from 'next/image'

import { AddBox, CalendarMonth } from '@mui/icons-material'
import { Box, Button, CircularProgress, SpeedDial, SpeedDialAction, SpeedDialIcon, Typography } from '@mui/material'

import { DateSelectArg } from '@fullcalendar/core'

import AnimationEventos from '@/app/_presenter/components/AnimationEventos'
import Calendar from '@/app/_presenter/components/Calendar'
import animationErroData from '@/app/_presenter/components/ErroLayout/Erro.json'
import { Evento } from '@/app/_presenter/components/Evento'
import EventoForm from '@/app/_presenter/components/EventoForm'
import FullScreenDialog from '@/app/_presenter/components/FullScreenDialog'
import usePageController from '@/app/_presenter/controllers/usePageController'

import { styles } from './styles'

const PaginaInicial = () => {
  const {
    dataFormatada,
    errorEventos,
    eventosCalendario,
    eventosDataSelecionada,
    eventoSelecionado,
    isLoadingEventos,
    onCloseCalendario,
    onCloseEventoForm,
    onDateClick,
    onDateDialogClick,
    onEventoSelecionado,
    onOpenCalendario,
    onOpenEventoForm,
    openCalendario,
    openEventoForm,
  } = usePageController()

  return (
    <Box sx={styles.root}>
      <Box sx={styles.main}>
        <Box sx={styles.conteudo}>
          <Box sx={styles.logo}>
            <Image src={'efacil-logo.svg'} alt='Logo' width={35} height={35} />
            <Typography variant='h3'>Evento Fácil</Typography>
          </Box>
          <Box sx={styles.acoes}>
            <Typography variant='h4'>{dataFormatada}</Typography>
            <Button sx={styles.btnAddEvento} onClick={onOpenEventoForm}>
              Adicionar Evento
            </Button>
          </Box>

          {isLoadingEventos && (
            <Box sx={styles.carregandoEventos}>
              <CircularProgress size={50} thickness={5} sx={styles.circular} />
              <Typography>Carregando Eventos...</Typography>
            </Box>
          )}

          {errorEventos && (
            <Box sx={styles.boxSemEventos}>
              <AnimationEventos titulo={errorEventos.message} animationData={animationErroData} />
            </Box>
          )}

          {eventosDataSelecionada?.length === 0 ? (
            <Box sx={styles.boxSemEventos}>
              <Image src={'sem-eventos.svg'} alt='Logo' width={423} height={282} style={styles.semEventos} />
              <Typography variant='body1'>Sem eventos cadastrados para a data</Typography>
            </Box>
          ) : (
            <Box sx={styles.eventos}>
              {eventosDataSelecionada?.map((evento) => (
                <Evento key={evento.id} evento={evento} onEditClick={onEventoSelecionado} />
              ))}
            </Box>
          )}
        </Box>

        <Box sx={styles.calendario}>
          <Calendar onDateClick={onDateClick} events={eventosCalendario} />
        </Box>

        <SpeedDial ariaLabel='eventos' icon={<SpeedDialIcon />} sx={styles.speedDial}>
          <SpeedDialAction
            icon={<AddBox sx={styles.addEventoIcon} />}
            tooltipTitle='Adicionar Evento'
            tooltipOpen
            onClick={onOpenEventoForm}
          />
          <SpeedDialAction
            icon={<CalendarMonth sx={styles.calendarioIcon} />}
            tooltipTitle='Calendário'
            tooltipOpen
            onClick={onOpenCalendario}
          />
        </SpeedDial>
      </Box>

      <EventoForm open={openEventoForm} onClose={onCloseEventoForm} eventoSelecionado={eventoSelecionado} />

      <FullScreenDialog titulo='Calendário' open={openCalendario} onClose={onCloseCalendario}>
        <Calendar onDateClick={(arg: DateSelectArg) => onDateDialogClick(arg)} events={eventosCalendario} />
      </FullScreenDialog>
    </Box>
  )
}

export default PaginaInicial
