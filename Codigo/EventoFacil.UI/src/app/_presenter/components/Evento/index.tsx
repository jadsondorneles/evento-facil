import EditIcon from '@mui/icons-material/Edit'
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { Box, IconButton, Typography, useTheme } from '@mui/material'

import { EventoType } from '@/app/_domain/types/api/EventoType'
import DadosEvento from '@/app/_presenter/components/Evento/_presenter/components/DadosEvento'
import useEventoController from '@/app/_presenter/components/Evento/_presenter/controllers/useEventoController'

import dayjs from '@/dates'

import { styles } from './styles'

type EventoProps = {
  evento: EventoType
  onEditClick: (evento: EventoType) => void
}

export const Evento = ({ evento, onEditClick }: EventoProps) => {
  const theme = useTheme()
  const { openDadosEvento, onCloseDadosEvento, onOpenDadosEvento } = useEventoController()

  return (
    <>
      <Box sx={styles.evento}>
        <Box sx={styles.conteudo}>
          <Box sx={styles.cor(theme, evento.cor)} />
          <Box sx={styles.dadosEvento}>
            <Typography variant='body2'>{evento.titulo}</Typography>
            <Typography variant='body1'>{evento.descricao}</Typography>
          </Box>
          <Box sx={styles.horario}>
            <QueryBuilderIcon />
            <Typography variant='h2'>{dayjs(evento.data_inicio).format('HH:mm')}</Typography>
          </Box>
        </Box>
        <Box sx={styles.btnAcoes}>
          <IconButton sx={styles.editarEvento} onClick={() => onEditClick(evento)}>
            <EditIcon />
          </IconButton>
          <IconButton sx={styles.visualizarEvento} onClick={() => onOpenDadosEvento()}>
            <VisibilityIcon />
          </IconButton>
        </Box>
      </Box>

      <DadosEvento open={openDadosEvento} onClose={onCloseDadosEvento} evento={evento} />
    </>
  )
}
