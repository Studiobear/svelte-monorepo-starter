export * from './md-processor'

export const siteUrl =
  process.env.NODE_ENV === 'development'
    ? process.env.SITE_URL
    : process.env.PROD_URL
