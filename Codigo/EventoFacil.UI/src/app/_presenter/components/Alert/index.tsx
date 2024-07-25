'use client'

import React from 'react'

import { IconButton, Alert as MUIAlert, Typography } from '@mui/material'

import { sanitize } from 'isomorphic-dompurify'
import mergeSx from 'merge-sx'
import { FaCheck, FaCircleInfo, FaCircleXmark, FaTriangleExclamation, FaXmark } from 'react-icons/fa6'

import styles from './styles'

export enum AlertSeverity {
  error = 'error',
  info = 'info',
  success = 'success',
  warning = 'warning',
}

export enum AlertPosition {
  bottom = 'bottom',
  center = 'center',
  left = 'left',
  right = 'right',
  top = 'top',
}

export type AlertOrigin = {
  horizontal: AlertPosition.left | AlertPosition.center | AlertPosition.right
  vertical: AlertPosition.top | AlertPosition.bottom
}

export type Alert = {
  autoHideDuration?: number | null
  borderless?: boolean
  description?: string | string[]
  horizontal?: AlertOrigin['horizontal']
  html?: string
  onClose?: () => void
  severity?: AlertSeverity
  showIcon?: boolean
  vertical?: AlertOrigin['vertical']
}

const getIconForSeverity = (showIcon: boolean, severity: AlertSeverity) => {
  if (!showIcon) {
    return <></>
  }

  let Icon
  switch (severity) {
    case AlertSeverity.error:
      Icon = <FaCircleXmark />
      break
    case AlertSeverity.info:
      Icon = <FaCircleInfo />
      break
    case AlertSeverity.success:
      Icon = <FaCheck />
      break
    case AlertSeverity.warning:
      Icon = <FaTriangleExclamation />
      break
    default:
      Icon = <FaCircleInfo />
      break
  }

  return Icon
}

const Alert: React.FC<Alert> = ({
  description,
  severity = AlertSeverity.info,
  showIcon = true,
  onClose,
  html,
  borderless,
}) => {
  const alertIcon = getIconForSeverity(showIcon, severity)

  return (
    <MUIAlert
      variant='outlined'
      severity={severity}
      icon={alertIcon}
      action={
        onClose && (
          <IconButton aria-label='close' color='inherit' size='small' onClick={onClose}>
            <FaXmark />
          </IconButton>
        )
      }
      sx={mergeSx(styles[severity], styles.root, borderless ? styles.borderless : undefined)}
      onClose={onClose}
    >
      {html ? (
        <div dangerouslySetInnerHTML={{ __html: sanitize(html) }} />
      ) : Array.isArray(description) ? (
        description.map((desc, index) => (
          <Typography key={index} variant='body1'>
            {desc}
          </Typography>
        ))
      ) : (
        <Typography variant='body1'>{description}</Typography>
      )}
    </MUIAlert>
  )
}

export default Alert
