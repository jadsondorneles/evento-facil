import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Forneça o caminho para seu aplicativo Next.js para carregar os arquivos next.config.js e .env em seu ambiente de teste
  dir: './',
})

/** @type {import("jest").Config} */
export const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  verbose: true,
  snapshotSerializers: ['<rootDir>/cleanMUISerializer.js'],
  setupFilesAfterEnv: [
    '<rootDir>/__mocks__/env.js',
    '<rootDir>/__mocks__/next-navigation.js',
    '<rootDir>/__mocks__/nextjs-dynamic.js',
    '<rootDir>/__mocks__/react-merge-refs.js',
    '<rootDir>/jest.setup.config.js',
  ],
}
const jestConfig = async () => {
  const nextJestConfig = await createJestConfig(customJestConfig)()
  return {
    ...nextJestConfig,
    moduleNameMapper: {
      // Solução alternativa para colocar nossa simulação SVG em primeiro lugar
      '\\.svg$': '<rootDir>/__mocks__/svg.js',
      '^@/(.*)$': '<rootDir>/src/$1',
      'jest.utils$': '<rootDir>/jest.utils.tsx',
      ...nextJestConfig.moduleNameMapper,
    },
    transformIgnorePatterns: ['node_modules/(?!(@uidotdev/usehooks)/)'],
  }
}

// createJestConfig é exportado desta forma para garantir que next/jest possa carregar a configuração Next.js que é assíncrona
export default jestConfig
