jest.mock('@/utils/env', () => {
  return {
    // use the process env vars as default for tests
    env: (key) => process.env[key],
  }
})
