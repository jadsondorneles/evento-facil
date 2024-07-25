import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

import { SnackbarSlice, snackbarSlice } from './slices/snackbarSlice'

type StoreState = SnackbarSlice

export const useAppStore = create<StoreState>(
  devtools(
    (set, get, api) => ({
      ...snackbarSlice(set, get, api),
    }),
    { name: 'tce-store' }
  ) as () => StoreState
)
