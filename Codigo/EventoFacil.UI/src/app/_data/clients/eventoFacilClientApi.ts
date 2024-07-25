import axios from 'axios'

import { getApiResponseErrorMessage } from '@/app/_data/services/apiResponseService'
import { isClient } from '@/app/_data/utils/browser'
import { BrowserEnvVariables } from '@/app/_domain/constantes/envVariables'
import ApiRequestError from '@/app/_domain/errors/ApiRequestError'

import { env } from '@/utils/env'

const eventoFacilClientApi = axios.create()

eventoFacilClientApi.interceptors.request.use((config) => {
  const controller = new AbortController()

  if (!isClient()) {
    console.error('O cliente API está sendo usado no lado do servidor. Deve ser usado apenas no lado do cliente.', {
      config,
    })
    controller.abort()
  }

  config.baseURL = env(BrowserEnvVariables.EVENTO_FACIL_API_URL)

  return {
    ...config,
    signal: controller.signal,
  }
})

eventoFacilClientApi.interceptors.response.use(
  (response) => response,
  async (axiosError) => {
    if (!isClient()) {
      console.error('O cliente API está sendo usado no lado do servidor. Deve ser usado apenas no lado do cliente.')
      return Promise.reject(axiosError)
    }

    if (axiosError.response?.status === 403) {
      const message = axiosError?.response?.data?.message || ''

      if (!message) {
        return Promise.reject(axiosError)
      }

      return Promise.reject(new ApiRequestError(message, axiosError))
    }

    return Promise.reject(new ApiRequestError(getApiResponseErrorMessage(axiosError), axiosError))
  }
)

export default eventoFacilClientApi
