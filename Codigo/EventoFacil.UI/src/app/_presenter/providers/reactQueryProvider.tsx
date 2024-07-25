'use client'

import { QueryClientProvider } from '@tanstack/react-query'

import appQueryClient from '@/app/_presenter/providers/tanstack/appQueryClient'

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider client={appQueryClient}>{children}</QueryClientProvider>
}

export default ReactQueryProvider
