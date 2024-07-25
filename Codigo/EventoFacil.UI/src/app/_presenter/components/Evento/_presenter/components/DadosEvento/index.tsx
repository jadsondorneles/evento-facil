import { Box, Grid, Typography, useTheme } from '@mui/material'

import { EventoType } from '@/app/_domain/types/api/EventoType'
import DialogSlide from '@/app/_presenter/components/Dialog'

import dayjs from '@/dates'

import { styles } from './styles'

type DadosEventoProps = {
  evento: EventoType
  onClose: () => void
  open: boolean
}

const DadosEvento = ({ open, onClose, evento }: DadosEventoProps) => {
  const theme = useTheme()
  const dataFormatada = (data: string) => dayjs(data).format('D [de] MMMM, YYYY [ás] HH:mm')

  return (
    <DialogSlide open={open} onClose={onClose} titulo='Informações do Evento' labelCancelar='Fechar'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Box sx={styles.cor(theme, evento.cor)} />
          <Typography gutterBottom>{evento.titulo}</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Typography variant='h5'>{evento.descricao}</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Typography variant='label2'>Data de Início do Evento</Typography>
          <Typography>{dataFormatada(evento.data_inicio)}</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Typography variant='label2'>Data de Encerramento do Evento</Typography>
          <Typography>{dataFormatada(evento.data_termino)}</Typography>
        </Grid>
      </Grid>
    </DialogSlide>
  )
}

export default DadosEvento
