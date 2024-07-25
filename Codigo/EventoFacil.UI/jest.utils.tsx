import React from 'react'

import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material'

import { render } from '@testing-library/react'
import { FieldValues, UseFormReturn, useForm } from 'react-hook-form'

import ReactQueryProvider from '@/app/_presenter/providers/reactQueryProvider'

import muiThemeConfig from '@/theme/mui-theme-config'

type UseFormWrapperProps<T extends FieldValues> = {
  children: (data: UseFormReturn<T>) => React.ReactNode
}

export const renderizarComTema = (component: React.ReactNode) => {
  return render(
    <ReactQueryProvider>
      <ThemeProvider theme={createTheme(muiThemeConfig as ThemeOptions)}>{component}</ThemeProvider>
    </ReactQueryProvider>
  )
}

// o tipo passado para o T genérico deve ser o mesmo que foi passado para o hook useForm
export const UseFormWrapper = <T extends Record<string, never>>({ children }: UseFormWrapperProps<T>) => {
  const formProps = useForm<T>()
  return children(formProps)
}
