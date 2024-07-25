import React from 'react'

import type { Metadata } from 'next'
import { EnvScript } from 'next-runtime-env'
import { unstable_noStore as noStore } from 'next/cache'

import { BrowserEnvVariables } from '@/app/_domain/constantes/envVariables'
import Snackbar from '@/app/_presenter/components/Snackbar'
import ReactQueryProvider from '@/app/_presenter/providers/reactQueryProvider'

import Theme from '@/theme/theme'

import './styles.css'

export const metadata: Metadata = {
  title: 'Evento Fácil',
  description: 'Organize seus eventos de forma fácil e prática',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Desative o cache do Next.js para esse arquivo. Ele é usado para injetar variáveis de ambiente
  noStore()

  return (
    <html lang='pt-BR'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#411F91' />
        <meta name='description' content='Evento Fácil' />
        <link rel='icon' href='/efacil-logo.svg'></link>
        <EnvScript
          nonce='env-script-nonce'
          env={{
            [BrowserEnvVariables.EVENTO_FACIL_API_URL]: process.env[BrowserEnvVariables.EVENTO_FACIL_API_URL],
          }}
        />
      </head>
      <ReactQueryProvider>
        <Theme>
          <body>
            <Snackbar />
            {children}
          </body>
        </Theme>
      </ReactQueryProvider>
    </html>
  )
}
