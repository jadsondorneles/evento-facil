import { PersistedClient, Persister } from '@tanstack/react-query-persist-client'

import { useTanstackCacheStore } from '@/app/_data/store/tanstackCacheStore'
import { isClient } from '@/app/_data/utils/browser'

const obtemDehydratedQueries = (client: PersistedClient) => {
  const queriesNovas = client.clientState.queries ?? []
  const queriesAtuais = useTanstackCacheStore.getState().data?.clientState?.queries ?? []

  return queriesAtuais.filter((q) => !queriesNovas.some((n) => q.queryHash === n.queryHash))
}

const ehMesmoEstadoCliente = (client: PersistedClient) => {
  const queriesAtuais = useTanstackCacheStore.getState().data?.clientState?.queries ?? []
  const queriesNovas = client.clientState.queries ?? []

  return (
    queriesAtuais.length === queriesNovas.length &&
    queriesAtuais.every((q) => queriesNovas.some((n) => q.queryHash === n.queryHash))
  )
}

export const zustandPersister = () =>
  ({
    persistClient: (client: PersistedClient) => {
      if (isClient() && client.clientState.queries.length > 0 && !ehMesmoEstadoCliente(client)) {
        client.clientState.queries.push(...obtemDehydratedQueries(client))
        useTanstackCacheStore.getState().setData(client)
      }
    },
    restoreClient: () => {
      return isClient() ? useTanstackCacheStore.getState().data : undefined
    },
    removeClient: () => {
      isClient() && useTanstackCacheStore.getState().clear()
    },
  }) as Persister
