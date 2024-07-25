'use client'

import React from 'react'

import { Box, Snackbar as MUISnackbar } from '@mui/material'
import { SnackbarCloseReason } from '@mui/material/Snackbar/Snackbar'

import { useAppStore } from '@/app/_data/store/store'

import Alert, { AlertPosition } from '../Alert'

const DEFAULT_AUTO_HIDE_DURATION_MS = 10000

const Snackbar: React.FC = () => {
  const { snackbar, hideSnackbar } = useAppStore()

  if (!snackbar) {
    return null
  }

  const autoHideDuration =
    snackbar.autoHideDuration === null ? null : snackbar.autoHideDuration || DEFAULT_AUTO_HIDE_DURATION_MS

  return (
    <MUISnackbar
      anchorOrigin={{
        vertical: snackbar.vertical ? snackbar.vertical : AlertPosition.top,
        horizontal: snackbar.horizontal ? snackbar.horizontal : AlertPosition.right,
      }}
      open={!!snackbar}
      onClose={(event: React.SyntheticEvent | Event, reason: SnackbarCloseReason) => {
        if (reason === 'timeout') {
          hideSnackbar()
        }
      }}
      autoHideDuration={autoHideDuration}
    >
      <Box>
        <Alert
          description={snackbar.description}
          severity={snackbar.severity}
          onClose={hideSnackbar}
          showIcon={snackbar.showIcon}
          html={snackbar.html}
        />
      </Box>
    </MUISnackbar>
  )
}

export default Snackbar
