import { StateCreator } from 'zustand'

import { Alert } from '@/app/_presenter/components/Alert'

export interface SnackbarSlice {
  hideSnackbar: () => void
  showSnackbar: (snackbar: Alert) => void
  snackbar: Alert | null
}

export const snackbarSlice: StateCreator<SnackbarSlice> = (set, _) => ({
  snackbar: null,
  showSnackbar: async (snackbar: Alert) => {
    set({ snackbar: snackbar })
  },
  hideSnackbar: async () => {
    set({ snackbar: null })
  },
})
