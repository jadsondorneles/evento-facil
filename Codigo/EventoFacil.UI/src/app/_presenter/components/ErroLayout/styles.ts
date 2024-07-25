import { Theme } from '@mui/material'

const styles = {
  errorPage: (theme: Theme) => ({
    alignItems: 'center',
    backgroundColor: theme.palette.black[5],
    display: 'flex',
    height: '100vh',
    justifyContent: 'center',
    textAlign: 'center',
    width: '100vw',
  }),
  container: {
    maxWidth: '526px',
  },
  animacao: {
    width: 'calc(100% - 40px)',
    maxWidth: 550,
  },
  titulo: {
    fontSize: '2rem',
    fontWeight: '700 !important',
    letterSpacing: '-.03em',
    lineHeight: '1.2em !important',
    marginBottom: '32px',
    marginTop: '32px',
    whiteSpace: 'pre-wrap',
  },
  detalheErro: {
    marginBottom: '32px',
    whiteSpace: 'pre-wrap',
  },
}

export default styles
