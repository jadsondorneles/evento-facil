import { forwardRef } from 'react'

import Button from '@mui/material/Button'
import Dialog, { DialogProps } from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import { TransitionProps } from '@mui/material/transitions'

import { styles } from './styles'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />
})

type DialogSlideProps = DialogProps & {
  children?: React.ReactNode
  disabled?: boolean
  labelCancelar?: string
  labelConfirmar?: string
  loading?: boolean
  onClose: () => void
  onConfirmar?: () => void
  open: boolean
  titulo?: string
}

const DialogSlide = ({
  children,
  onClose,
  onConfirmar,
  open,
  titulo,
  disabled,
  labelConfirmar,
  labelCancelar,
  ...props
}: DialogSlideProps) => {
  return (
    <Dialog
      {...props}
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => (disabled ? {} : onClose())}
      aria-describedby='alert-dialog-slide'
    >
      <DialogTitle>{titulo}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose} disabled={disabled} sx={styles.btnCancelar}>
          {labelCancelar ? labelCancelar : 'Cancelar'}
        </Button>
        {onConfirmar && (
          <Button onClick={onConfirmar} disabled={disabled} sx={styles.btnConfirmar}>
            {labelConfirmar ? labelConfirmar : 'Ok'}
          </Button>
        )}
      </DialogActions>
    </Dialog>
  )
}

export default DialogSlide
