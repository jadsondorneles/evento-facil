import { AxiosError } from 'axios'

export default class ApiRequestError extends AxiosError {
  constructor(apiErrorMessage: string, originalError?: AxiosError) {
    super(
      originalError?.message,
      originalError?.code,
      originalError?.config,
      originalError?.request,
      originalError?.response
    )

    // Copia todas as outras propriedades do erro original
    Object.assign(this, originalError)

    this.message = apiErrorMessage
  }
}
