import React from 'react'

import { Box, Typography } from '@mui/material'

import Lottie, { Options } from 'react-lottie'

import styles from './styles'

interface AnimationEventosProps {
  animationData: unknown
  titulo: string
}

const AnimationEventos = ({ animationData, titulo }: AnimationEventosProps) => {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Box sx={styles.root}>
      <Box>
        <Box>
          <Lottie options={defaultOptions} isStopped={false} />
        </Box>
        <Typography sx={styles.titulo}>{titulo}</Typography>
      </Box>
    </Box>
  )
}

export default AnimationEventos
