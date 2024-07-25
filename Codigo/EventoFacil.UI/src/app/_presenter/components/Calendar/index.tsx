import React, { useEffect, useRef, useState } from 'react'

import { Box, CircularProgress, Typography, capitalize } from '@mui/material'

import { DateSelectArg, EventSourceInput } from '@fullcalendar/core'
import ptBrLocale from '@fullcalendar/core/locales/pt-br'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'

import dayjs from '@/dates'

import { styles } from './styles'

interface CalendarProps {
  events?: EventSourceInput | undefined
  onDateClick?: (arg: DateSelectArg) => void
}

const CalendarComponent: React.FC<CalendarProps> = ({ events, onDateClick }) => {
  const calendarRef = useRef<FullCalendar | null>(null)
  const [mesCorrente, setMesCorrente] = useState('')
  const ano = new Date().getFullYear()

  useEffect(() => {
    const calendarApi = calendarRef.current?.getApi()
    if (calendarApi) {
      setMesCorrente(calendarApi.getDate().toISOString().substring(0, 7))

      const handleDatesSet = () => {
        setMesCorrente(calendarApi.getDate().toISOString().substring(0, 7))
      }

      calendarApi.on('datesSet', handleDatesSet)

      return () => {
        calendarApi.off('datesSet', handleDatesSet)
      }
    }
  }, [])

  return (
    <Box sx={styles.calendar}>
      {!mesCorrente && (
        <Box sx={styles.loading}>
          <CircularProgress sx={styles.circular} />
        </Box>
      )}
      {mesCorrente && (
        <Box sx={styles.mes}>
          <Typography variant='h1'>{dayjs(mesCorrente).format('YYYY')}</Typography>
          <Typography variant='h4'>{capitalize(dayjs(mesCorrente).format('MMMM'))}</Typography>
        </Box>
      )}
      <FullCalendar
        ref={calendarRef}
        plugins={[interactionPlugin, dayGridPlugin]}
        initialView='dayGridMonth'
        events={events}
        select={onDateClick}
        selectable={true}
        locale={ptBrLocale}
        timeZone='America/Sao_Paulo'
        handleWindowResize={true}
        windowResizeDelay={500}
      />
      {mesCorrente && (
        <Typography sx={styles.copyright} variant='body2'>
          © {ano} Evento Fácil
        </Typography>
      )}
    </Box>
  )
}

export default CalendarComponent
