import { forwardRef } from 'react'

import CloseIcon from '@mui/icons-material/Close'
import { AppBar, Box } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import Slide from '@mui/material/Slide'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
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

type FullScreenDialogProps = {
  children?: React.ReactNode
  onClose: () => void
  open: boolean
  titulo?: string
}

const FullScreenDialog = ({ titulo, children, onClose, open }: FullScreenDialogProps) => {
  return (
    <Dialog fullScreen open={open} onClose={onClose} TransitionComponent={Transition} sx={styles.dialog}>
      <AppBar sx={styles.appbar}>
        <Toolbar>
          <IconButton edge='start' color='inherit' onClick={onClose} aria-label='close'>
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
            {titulo}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={styles.container}>
        <Box sx={styles.main}>{children}</Box>
      </Box>
    </Dialog>
  )
}

export default FullScreenDialog
