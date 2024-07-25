import { Theme } from '@mui/material'

export const styles = {
  cor: (theme: Theme, cor?: string) => ({
    width: '32%',
    minWidth: '28px',
    height: '12px',
    borderRadius: '100px',
    background: cor ? cor : `linear-gradient(180deg, ${theme.palette.blue[100]} 0%, ${theme.palette.purple[110]} 100%)`,
    margin: '0 0 16px 0',
  }),
}
