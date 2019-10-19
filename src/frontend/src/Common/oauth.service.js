const ID_TOKEN = 'access_token'
const ID_REFRESH_TOKEN = 'refresh_token'

export default {
  getToken () {
    return {token: window.localStorage.getItem(ID_TOKEN), refresh_token: window.localStorage.getItem(ID_REFRESH_TOKEN)}
  },

  saveToken (token, refresh) {
    console.log('-- OAUTH SAVE_TOKEN --')
    console.log(token)
    window.localStorage.setItem(ID_TOKEN, token)
    window.localStorage.setItem(ID_REFRESH_TOKEN, refresh)
  },

  destroyToken () {
    console.log('-- OAUTH DESTROY_TOKEN --')
    window.localStorage.removeItem(ID_TOKEN)
    window.localStorage.removeItem(ID_REFRESH_TOKEN)
  }
}
