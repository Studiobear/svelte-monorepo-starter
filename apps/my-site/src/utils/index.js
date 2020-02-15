export * from './md-processor'

export const formUrl = (path, host = '') => {
  const baseUrl = !process.browser ? `://${host}` : ''
  return `${baseUrl}/${path}`
}
