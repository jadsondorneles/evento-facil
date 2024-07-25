import { Theme } from '@mui/material'

export const styles = {
  root: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    left: 0,
    position: 'fixed',
    top: 0,
    width: '100%',
  },
  main: (theme: Theme) => ({
    alignItems: 'stretch',
    background: theme.palette.white[100],
    borderRadius: '40px',
    boxShadow: `0px 4px 28px 2px ${theme.palette.blue[50]}`,
    display: 'flex',
    flexDirection: 'row',
    height: 'calc(100% - 40px)',
    justifyContent: 'flex-start',
    maxHeight: '650px',
    maxWidth: '1100px',
    overflow: 'hidden',
    position: 'relative',
    width: 'calc(100% - 40px)',

    '.MuiSpeedDial-root > .MuiButtonBase-root.MuiFab-root': {
      background: `linear-gradient(90deg, ${theme.palette.red[100]} 0%, ${theme.palette.purple[100]} 100%) !important`,
    },

    [theme.breakpoints.down('sm')]: {
      boxShadow: `0px 0px 0px 0px`,
    },
    [theme.breakpoints.down('md')]: {
      boxShadow: `0px 0px 0px 0px`,
      maxHeight: '100%',
      overflow: 'visible',
    },
  }),
  conteudo: (theme: Theme) => ({
    width: '100%',
    padding: '40px 30px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',

    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: 0,
    },
  }),
  calendario: (theme: Theme) => ({
    width: '440px',
    minWidth: '440px',
    background: `linear-gradient(180deg, ${theme.palette.blue[100]} 0%, ${theme.palette.purple[110]} 100%)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }),
  logo: (theme: Theme) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '10px',

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  }),
  acoes: (theme: Theme) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',

    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
  }),
  eventos: (theme: Theme) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '46px',
    paddingBottom: '36px',
    margin: '32px 0',
    overflowX: 'auto',
    height: '100%',
    padding: '20px 22px',

    [theme.breakpoints.down('md')]: {
      margin: '0 0 50px 0',
    },
  }),
  conteudoEventos: {
    width: '100%',
  },
  btnAddEvento: (theme: Theme) => ({
    background: `linear-gradient(90deg, ${theme.palette.red[100]} 0%, ${theme.palette.purple[100]} 100%)`,
    color: theme.palette.white[100],
    padding: '12px 24px',

    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }),
  boxSemEventos: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  semEventos: {
    maxWidth: '350px',
    width: '90%',
    height: 'auto',
  },
  speedDial: (theme: Theme) => ({
    [theme.breakpoints.down('md')]: {
      position: 'absolute',
      bottom: '-10px',
      right: 0,
    },
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  }),
  addEventoIcon: (theme: Theme) => ({
    color: theme.palette.purple[50],
  }),
  calendarioIcon: (theme: Theme) => ({
    color: theme.palette.teal[50],
  }),
}
