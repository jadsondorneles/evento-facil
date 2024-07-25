import { AxiosError } from 'axios'

import { ehString } from '@/app/_data/utils/string'

const getAxiosErrorMessage = (error: AxiosError) => {
  const data = error.response?.data

  if (!data) return

  if (ehString(data)) {
    return data
  }

  const message = (data as Record<string, unknown>).message
  if (ehString(message)) {
    return message
  }
}

export const getApiResponseErrorMessage = (error: unknown, defaultMessage?: string): string => {
  const fallbackMessage = defaultMessage || 'Erro desconhecido. Por favor, tente novamente'
  if (error instanceof AxiosError) {
    return getAxiosErrorMessage(error) || fallbackMessage
  }

  if (error instanceof Error) {
    return error.message || fallbackMessage
  }

  return fallbackMessage
}
