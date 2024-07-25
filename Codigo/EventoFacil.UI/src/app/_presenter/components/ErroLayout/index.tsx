import React from 'react'

import { useRouter } from 'next/navigation'

import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined'
import { Box, Button, Typography } from '@mui/material'

import Lottie, { Options } from 'react-lottie'

import styles from './styles'

interface ErrorLayoutProps {
  animationData: unknown
  detalheErro: string
  titulo: string
}

const ErrorLayout: React.FC<ErrorLayoutProps> = ({ titulo, detalheErro, animationData }) => {
  const router = useRouter()

  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }

  return (
    <Box sx={styles.errorPage}>
      <Box sx={styles.container}>
        <Box sx={styles.animacao}>
          <Lottie options={defaultOptions} isStopped={false} />
        </Box>

        <Typography sx={styles.titulo}>{titulo}</Typography>

        <Typography variant='body1' sx={styles.detalheErro}>
          {detalheErro}
        </Typography>

        <Button onClick={() => router.back()} startIcon={<ChevronLeftOutlinedIcon />} variant='outlined'>
          Voltar para a Página Anterior
        </Button>
      </Box>
    </Box>
  )
}

export default ErrorLayout
