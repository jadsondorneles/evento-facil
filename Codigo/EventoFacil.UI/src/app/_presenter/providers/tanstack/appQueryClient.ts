import { QueryCache, QueryClient } from '@tanstack/react-query'
import { persistQueryClient } from '@tanstack/react-query-persist-client'

import { useAppStore } from '@/app/_data/store/store'
import { zustandPersister } from '@/app/_data/zustand/zustandPersister'
import { AlertSeverity } from '@/app/_presenter/components/Alert'

export const queryCache = new QueryCache({
  onError: (error, query) => {
    const { showSnackbar } = useAppStore.getState()
    ;(query.meta?.executeOnErrorHandler as (() => void) | undefined)?.()

    if ((query.meta?.onError as ((error: Error) => void) | undefined) && error instanceof Error) {
      ;(query.meta?.onError as (error: Error) => void)(error)
    } else if (query.meta?.errorMessage) {
      showSnackbar({
        html: query.meta.errorMessage as string,
        severity: AlertSeverity.error,
      })
    } else {
      showSnackbar({
        html: (error as Error).message || 'Erro desconhecido',
        severity: AlertSeverity.error,
      })
    }
  },
})

const appQueryClient: QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      gcTime: Infinity,
      retry: 0,
    },
  },
  queryCache,
})

persistQueryClient({
  maxAge: Infinity,
  queryClient: appQueryClient,
  persister: zustandPersister(),
  dehydrateOptions: {
    shouldDehydrateQuery: (query) => {
      return !!query.meta?.persist && !!query.state.data
    },
  },
})

export default appQueryClient
