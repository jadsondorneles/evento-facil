import React, { JSXElementConstructor } from 'react'

import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  TextField,
  Typography,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'

import { Controller } from 'react-hook-form'

import { EventoType } from '@/app/_domain/types/api/EventoType'
import DateTimePicker from '@/app/_presenter/components/DateTimePicker'
import useEventoFormController from '@/app/_presenter/components/EventoForm/_presenter/controllers/useEventoFormController'

import { styles } from './styles'

type EventoFormProps = {
  eventoSelecionado?: EventoType | null
  onClose: () => void
  open: boolean
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown, string | JSXElementConstructor<unknown>>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

const EventoForm = ({ eventoSelecionado, open, onClose }: EventoFormProps) => {
  const {
    form,
    corAtiva,
    coresBtns,
    onChangeCor,
    onCloseForm,
    theme,
    isLoadingDados,
    onDeletaEvento,
    isLoadingDeleta,
  } = useEventoFormController({
    onClose,
    eventoSelecionado,
  })

  const isLoading = isLoadingDados || isLoadingDeleta

  return (
    <Dialog TransitionComponent={Transition} keepMounted open={open} onClose={() => (isLoading ? {} : onCloseForm())}>
      <Box component='form' onSubmit={(e) => form.onSubmit(e)}>
        <DialogTitle>{eventoSelecionado ? 'Editar Evento' : 'Adicionar Evento'}</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Controller
                defaultValue=''
                name={`titulo`}
                control={form.control}
                rules={{ required: 'O Título é obrigatório' }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    value={value}
                    onChange={onChange}
                    label='Título'
                    fullWidth
                    margin='normal'
                    error={!!error}
                    helperText={error ? error.message : null}
                    disabled={isLoading}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Controller
                defaultValue=''
                name={`descricao`}
                control={form.control}
                rules={{ required: 'A Descrição é obrigatório' }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TextField
                    value={value}
                    onChange={onChange}
                    label='Descrição'
                    fullWidth
                    type='text'
                    margin='normal'
                    multiline
                    maxRows={4}
                    error={!!error}
                    helperText={error ? error.message : null}
                    disabled={isLoading}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <DateTimePicker
                control={form.control}
                name='dataInicioEvento'
                label='Data Início do Evento'
                type='date'
                disabled={isLoading}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <DateTimePicker
                control={form.control}
                name='horaInicioEvento'
                label='Hora Início do Evento'
                type='time'
                disabled={isLoading}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <DateTimePicker
                control={form.control}
                name='dataFimEvento'
                label='Data Fim do Evento'
                type='date'
                disabled={isLoading}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <DateTimePicker
                control={form.control}
                name='horaFimEvento'
                label='Hora Fim do Evento'
                type='time'
                disabled={isLoading}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <Typography variant='labelLight'>Cor</Typography>
              <Box sx={styles.listaCores}>
                {coresBtns.map((cor) => (
                  <Button
                    key={cor}
                    sx={styles.corBtn(theme, cor, corAtiva)}
                    onClick={() => onChangeCor(cor)}
                    disabled={isLoading}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={styles.dialogActions}>
          <Box>
            {eventoSelecionado && (
              <Button sx={styles.btnRemover} disabled={isLoading} onClick={() => onDeletaEvento(eventoSelecionado.id)}>
                {isLoadingDeleta ? <CircularProgress size={26} color='primary' sx={styles.circular} /> : 'Remover'}
              </Button>
            )}
          </Box>
          <Box sx={styles.acoes}>
            <Button onClick={onCloseForm} sx={styles.btnCancelar} disabled={isLoading}>
              Cancelar
            </Button>
            <Button color='primary' type='submit' sx={styles.btnAdicionar} disabled={isLoading}>
              {isLoadingDados ? <CircularProgress size={26} color='primary' sx={styles.circular} /> : 'Adicionar'}
            </Button>
          </Box>
        </DialogActions>
      </Box>
    </Dialog>
  )
}

export default EventoForm
