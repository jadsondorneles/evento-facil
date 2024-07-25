import { Theme } from '@mui/material'

export const styles = {
  listaCores: (theme: Theme) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(8, 1fr)',
    margin: '8px 0 0 0',
    padding: '0 4px',
    gap: '14px',

    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
  }),
  corBtn: (theme: Theme, cor: string, corAtiva: string) => ({
    borderRadius: '6px',
    border: `2px solid ${corAtiva === cor ? theme.palette.white[100] : theme.palette.black[80]}`,
    width: '100%',
    height: '48px',
    flexShrink: 0,
    boxShadow: corAtiva === cor ? `0px 0px 0px 3px ${theme.palette.gray[90]}` : 'none',
    backgroundColor: cor,
    minWidth: 0,
    padding: 0,
    transition: 'all ease .35s',

    '&.Mui-disabled': {
      opacity: 0.5,
    },

    '&:hover': {
      backgroundColor: cor,
    },
  }),
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

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  }),
  btnAdicionar: (theme: Theme) => ({
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

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  }),
  dialogActions: (theme: Theme) => ({
    padding: '16px 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: '8px',

      '& .MuiBox-root': {
        width: '100%',
        margin: '0',
      },
    },
  }),
  acoes: (theme: Theme) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: '8px',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: '8px',
    },
  }),
  btnRemover: (theme: Theme) => ({
    background: `linear-gradient(90deg, ${theme.palette.red[110]} 0%, ${theme.palette.red[100]} 100%)`,
    color: theme.palette.white[100],
    padding: '12px 14px',
    minWidth: '100px',
    height: '48px',

    '&.Mui-disabled': {
      opacity: 0.5,
      color: theme.palette.white[100],
    },

    '&:hover': {
      background: `linear-gradient(90deg, ${theme.palette.red[110]} 0%, ${theme.palette.red[100]} 100%)`,
      color: theme.palette.white[100],
    },

    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  }),
  circular: (theme: Theme) => ({
    color: theme.palette.white[100],
    '& .MuiCircularProgress-root.MuiCircularProgress-indeterminate': {},
  }),
}
