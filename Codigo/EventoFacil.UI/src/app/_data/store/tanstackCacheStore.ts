import { QueryKey } from '@tanstack/query-core'
import { PersistedClient } from '@tanstack/react-query-persist-client'
import isEqual from 'lodash/isEqual'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { isClient } from '@/app/_data/utils/browser'
import ZustandStoreKeys from '@/app/_domain/constantes/zustandStoreKeys'

type TanstackCacheStoreType = {
  clear: () => void
  data: PersistedClient | null
  getQueryCache: <TData>(queryKey: QueryKey) => TData | null
  setData: (value: PersistedClient) => void
}

export const useTanstackCacheStore = create<TanstackCacheStoreType>()(
  persist(
    (set, get) => ({
      data: null,
      setData: (value: PersistedClient) => set({ data: value }),
      clear: () => set({ data: null }),
      getQueryCache: <TData>(queryKey: QueryKey) => {
        const query = get().data?.clientState.queries?.find((query) => isEqual(query.queryKey, queryKey))
        return query ? (query.state.data as TData) : null
      },
    }),
    {
      name: ZustandStoreKeys.tanstackCacheStore,
      skipHydration: !isClient(),
    }
  )
)
