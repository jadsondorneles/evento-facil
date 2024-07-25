export const ehString = (input: unknown): input is string => {
  return typeof input === 'string'
}
