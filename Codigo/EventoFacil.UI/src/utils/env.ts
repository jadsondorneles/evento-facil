import { PUBLIC_ENV_KEY } from 'next-runtime-env'

import { isClient } from '@/app/_data/utils/browser'

/**
 * Lê uma variável de ambiente segura do navegador ou de qualquer ambiente
 * variável do servidor (process.env) definida no arquivo @see {@link ./app/layout.tsx}.
 *
 * Uso:
 * ```ts
 * const API_URL = env('API_URL')
 * ```
 */
export function env(key: string): string | undefined {
  if (isClient()) {
    return window[PUBLIC_ENV_KEY]?.[key] || ''
  }
  return process.env[key]
}
