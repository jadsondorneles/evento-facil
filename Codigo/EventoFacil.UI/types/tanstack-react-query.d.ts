import { QueryMeta as QueryMetaTanstack } from '@tanstack/react-query'

declare module '@tanstack/react-query' {
  export interface QueryMeta extends QueryMetaTanstack {
    errorMessage?: string
    executeOnErrorHandler?: () => void
    onError?: (error: Error) => void
    persist?: boolean
  }
}
