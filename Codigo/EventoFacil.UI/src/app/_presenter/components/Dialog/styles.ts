import { Theme } from '@mui/material'

export const styles = {
  btnCancelar: (theme: Theme) => ({
    background: theme.palette.black[90],
    color: theme.palette.white[100],
    padding: '12px 14px',

    '&.Mui-disabled': {
      opacity: 0.5,
      color: theme.palette.white[100],
    },

    '&:hover': {
      background: theme.palette.black[90],
      color: theme.palette.white[100],
    },
  }),
  btnConfirmar: (theme: Theme) => ({
    minWidth: '100px',
    height: '48px',
    background: `linear-gradient(90deg, ${theme.palette.red[100]} 0%, ${theme.palette.purple[100]} 100%)`,
    color: theme.palette.white[100],
    padding: '12px 14px',

    '&.Mui-disabled': {
      opacity: 0.6,
    },

    '&:hover': {
      background: `linear-gradient(90deg, ${theme.palette.red[100]} 0%, ${theme.palette.purple[100]} 100%)`,
      color: theme.palette.white[100],
    },
  }),
}
