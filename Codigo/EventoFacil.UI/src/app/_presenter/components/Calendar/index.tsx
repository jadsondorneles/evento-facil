import React, { useState } from 'react'

import { Box, Typography, capitalize } from '@mui/material'

import { DateSelectArg, DatesSetArg, EventSourceInput } from '@fullcalendar/core'
import ptBrLocale from '@fullcalendar/core/locales/pt-br'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import FullCalendar from '@fullcalendar/react'

import { styles } from './styles'

interface CalendarProps {
  events?: EventSourceInput | undefined
  onDateClick?: (arg: DateSelectArg) => void
}

const Calendar: React.FC<CalendarProps> = ({ events, onDateClick }) => {
  const [dataSelecionada, setDataSelecionada] = useState<Date>(new Date())
  const ano = new Date().getFullYear()

  const onChangeMonth = (arg: DatesSetArg) => {
    setDataSelecionada(new Date(arg.start))
  }

  return (
    <Box sx={styles.calendar}>
      <Box sx={styles.mes}>
        <Typography variant='h1'>{dataSelecionada.getFullYear()}</Typography>
        <Typography variant='h4'>{capitalize(dataSelecionada.toLocaleString('pt-BR', { month: 'long' }))}</Typography>
      </Box>
      <FullCalendar
        plugins={[interactionPlugin, dayGridPlugin]}
        initialView='dayGridMonth'
        events={events}
        select={onDateClick}
        selectable={true}
        locale={ptBrLocale}
        datesSet={onChangeMonth}
      />
      <Typography sx={styles.copyright} variant='labelLight'>
        © {ano} Evento Fácil
      </Typography>
    </Box>
  )
}

export default Calendar
