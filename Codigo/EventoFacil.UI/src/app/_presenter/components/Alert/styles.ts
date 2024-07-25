import { Theme } from '@mui/material'

const styles = {
  root: {
    alignItems: 'center',
  },
  error: (theme: Theme) => ({
    backgroundColor: theme.palette.red[20],
    border: `2px solid ${theme.palette.red[100]}`,
    color: theme.palette.red[100],
    '& .MuiAlert-action': {
      color: theme.palette.red[100],
    },
    '& .MuiAlert-icon': {
      color: theme.palette.red[100],
    },
  }),
  info: (theme: Theme) => ({
    backgroundColor: theme.palette.blue[20],
    border: `2px solid ${theme.palette.blue[100]}`,
    color: theme.palette.blue[100],
    '& .MuiAlert-action': {
      color: theme.palette.blue[100],
    },
    '& .MuiAlert-icon': {
      color: theme.palette.blue[100],
    },
  }),
  success: (theme: Theme) => ({
    backgroundColor: theme.palette.green[20],
    border: `2px solid ${theme.palette.green[100]}`,
    color: theme.palette.green[100],
    '& .MuiAlert-action': {
      color: theme.palette.green[100],
    },
    '& .MuiAlert-icon': {
      color: theme.palette.green[100],
    },
  }),
  warning: (theme: Theme) => ({
    backgroundColor: theme.palette.orange[20],
    border: `2px solid ${theme.palette.orange[100]}`,
    color: theme.palette.orange[100],
    '& .MuiAlert-action': {
      color: theme.palette.orange[100],
    },
    '& .MuiAlert-icon': {
      color: theme.palette.orange[100],
    },
  }),
  borderless: {
    border: 'none',
  },
}

export default styles
