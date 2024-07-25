import { Theme } from '@mui/material'

export const styles = {
  dialog: (theme: Theme) => ({
    background: `linear-gradient(180deg, ${theme.palette.blue[100]} 0%, ${theme.palette.purple[110]} 100%)`,
  }),
  appbar: (theme: Theme) => ({
    background: theme.palette.blue[100],
    height: '64px',
  }),
  container: (theme: Theme) => ({
    background: `linear-gradient(180deg, ${theme.palette.blue[100]} 0%, ${theme.palette.purple[110]} 100%)`,
    position: 'absolute',
    top: '64px',
    left: 0,
    width: '100%',
    height: 'calc(100% - 64px)',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflowY: 'auto',
    overflowX: 'hidden',
  }),
  main: {
    width: 'calc(100% - 40px)',
    maxWidth: '500px',
    padding: '40px 0',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}
