export default {}
export const API_HOST = process.env.VUE_APP_API_HOST
export const API_URL = process.env.VUE_APP_API_PROTOCOL + '://' + API_HOST
export const API_AUTH_URL = process.env.VUE_APP_API_PROTOCOL + '://' + API_HOST + '/oauth/public/v2/'
export const CDN_URL = process.env.VUE_APP_CDN_URL
export const DOMAIN = 'aeternity.com'
export const CLIENT_ID = process.env.VUE_APP_CLIENT_ID
export const CLIENT_SECRET = process.env.VUE_APP_CLIENT_SECRET
export const ENABLE_HTTP_AUTH = true
