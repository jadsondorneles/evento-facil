import { Theme } from '@mui/material'

export const styles = {
  evento: (theme: Theme) => ({
    width: '100%',
    borderRadius: '16px',
    background: theme.palette.white[100],
    boxShadow: `0px 4px 28px 2px ${theme.palette.blue[50]}`,
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'relative',
  }),
  conteudo: (theme: Theme) => ({
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    gap: '8px',
    flexDirection: 'row',
    width: '100%',

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
  cor: (theme: Theme, cor?: string) => ({
    width: '12px',
    minWidth: '12px',
    borderRadius: '100px',
    background: cor ? cor : `linear-gradient(180deg, ${theme.palette.blue[100]} 0%, ${theme.palette.purple[110]} 100%)`,
    margin: '16px 0px 16px 16px',

    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 32px)',
      height: '12px',
      margin: '16px 0 0px 0',
    },
  }),
  dadosEvento: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    textAlign: 'left',
    padding: '16px',
    width: '100%',
  },
  horario: (theme: Theme) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '8px',
    padding: '16px',
    borderLeft: `1px solid ${theme.palette.blue[50]}`,

    [theme.breakpoints.down('sm')]: {
      flexDirection: 'row',
      borderTop: `1px solid ${theme.palette.blue[50]}`,
      borderLeft: 0,
      padding: '16px 16px 26px 16px',
      width: '100%',
    },
  }),
  btnAcoes: {
    position: 'absolute',
    right: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    bottom: '-22px',
  },
  deletarEvento: (theme: Theme) => ({
    color: theme.palette.white[100],
    background: `linear-gradient(90deg, ${theme.palette.red[110]} 0%, ${theme.palette.red[100]} 100%)`,
  }),
  editarEvento: (theme: Theme) => ({
    color: theme.palette.white[100],
    background: `linear-gradient(90deg, ${theme.palette.teal[40]} 0%, ${theme.palette.teal[100]} 100%)`,
  }),
  visualizarEvento: (theme: Theme) => ({
    color: theme.palette.white[100],
    background: `linear-gradient(90deg, ${theme.palette.blue[100]} 0%, ${theme.palette.purple[100]} 100%)`,
  }),
}
