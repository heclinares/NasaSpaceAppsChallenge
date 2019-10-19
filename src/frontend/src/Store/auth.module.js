import ApiService from '@/Common/api.service'
import OauthService from '@/Common/oauth.service'
import { LOGIN, LOGOUT, REGISTER, CHECK_AUTH, UPDATE_USER, REFRESH } from './actions.type'
import { SET_AUTH, SET_USER, GET_USER, IS_AUTH, PURGE_AUTH, SET_ERROR } from './mutations.type'
import { API_AUTH_URL, API_URL, CLIENT_ID, CLIENT_SECRET } from '@/Common/config.js'
import alertify from 'alertifyjs'
import 'alertifyjs/build/css/alertify.min.css'

const initialState = {
  errors: null,
  user: {
    favs: []
  },
  auth: {},
  isAuthenticated: !!OauthService.getToken().token
}

export const state = Object.assign({}, initialState)

/* const state = {
  errors: null,
  user: {},
  isAuthenticated: !!OauthService.getToken().token
} */

const getters = {
  currentUser (state) {
    return state.user
  },
  isAuthenticated (state) {
    return state.isAuthenticated
  }
}

const actions = {
  [LOGIN] (context, credentials) {
    var loginOptions = 'client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '&'
    var loginUrl = API_AUTH_URL

    return new Promise((resolve) => {
      ApiService
        .post('token',
          loginOptions + 'grant_type=password&username=' + encodeURIComponent(credentials.email) + '&password=' + encodeURIComponent(credentials.password),
          loginUrl,
          {'Content-Type': 'application/x-www-form-urlencoded'}
        )
        .then(({data}) => {
          context.commit(SET_AUTH, data)
          window.localStorage.setItem('LOGIN', 'true')
          resolve(data)
        })
        .catch(({response}) => {
          response = response.data

          if (typeof response.error_description !== 'undefined') {
            context.commit(SET_ERROR, response.error_description)
          } else {
            context.commit(SET_ERROR, 'Email or password incorrect')
            // context.commit(SET_ERROR, [response.error_description])
          }
        })
    })
  },
  [REFRESH] (context) {
    var loginOptions = 'client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '&'
    var loginUrl = API_AUTH_URL

    return new Promise((resolve) => {
      ApiService
        .post('token',
          loginOptions + 'grant_type=refresh_token&refresh_token=' + encodeURIComponent(OauthService.getToken().refresh_token),
          loginUrl,
          {'Content-Type': 'application/x-www-form-urlencoded'}
        )
        .then(({data}) => {
          context.commit(SET_AUTH, data)
          resolve(data)
        })
        .catch(({response}) => {
          if (typeof response.data.message !== 'undefined') {
            context.commit(SET_ERROR, response.data.message)
          } else {
            context.commit(SET_ERROR, response.data.error_description)
          }
        })
    })
  },
  [LOGOUT] (context) {
    context.commit(PURGE_AUTH)
  },
  [REGISTER] (context, credentials) {
    var loginUrl = API_URL

    return new Promise((resolve, reject) => {
      ApiService
        .post('public/user/register', {email: credentials.email, domain: credentials.domain, username: credentials.name, role: credentials.role, password: credentials.password, confirmPassword: credentials.password, recaptcha: credentials.recaptcha, nonce: ApiService.nonce + 1},
          loginUrl)
        .then(({data}) => {
          if (data.error === true) {
            alertify.alert('Error', data.response)
          } else {
            if (data.result === 'Error') {
              if (typeof data.data !== 'undefined') {
                alertify.alert('Error', data.data)
              } else {
                alertify.alert('Error', data.message)
              }
            } else {
              alertify.alert('Info', 'User ' + credentials.email + ' registered successfully. You need to confirm your email before login, we have sent you an email with a confirmation code.')
              // context.commit(SET_AUTH, data.user)
              resolve(data)
            }
          }
          resolve(data)
        })
        .catch((response) => {
          if (response.error === true) {
            if (typeof response.data !== 'undefined') {
              if (typeof response.data.error_description !== 'undefined') {
                alertify.alert('Error', response.data.error_description)
              }
            } else {
              alertify.alert('Error', response.response)
            }
          }
          throw response
          // context.commit(SET_ERROR, response.data.error_description)
        })
    })
  },
  [CHECK_AUTH] (context, refresh) {
    /* if (typeof refresh === 'boolean') {
      actions.commit(REFRESH)
    } else */
    if (typeof OauthService.getToken().token !== 'undefined') {
      ApiService.setHeader()
      ApiService
        .get('private/user', {nonce: ApiService.nonce})
        .then(({data}) => {
          console.log(data)
          if (data.error === false) {
            context.commit(SET_USER, data.response)
          } else {
            console.log('[ERROR] User error')
          }
        })
        .catch(({response}) => {
          context.commit(SET_ERROR, response.data.message)
        })
    } else {
      context.commit(PURGE_AUTH)
    }
  },
  [UPDATE_USER] (context, payload) {
    const {email, username, password, image, bio} = payload
    const user = {
      email,
      username,
      bio,
      image
    }
    if (password) {
      user.password = password
    }

    return ApiService
      .put('user/get', user)
      .then(({data}) => {
        context.commit(SET_AUTH, data.user)
        return data
      })
  }
}

const mutations = {
  [SET_ERROR] (state, error) {
    state.errors = null
    if (typeof error !== 'undefined') {
      if (error !== 'Success') {
        // state.errors = [error]
        alertify.alert('Error', error)
      }
    }
  },
  [SET_AUTH] (state, auth) {
    if (typeof auth.access_token !== 'undefined') {
      state.isAuthenticated = true
      state.auth = auth
      state.errors = {}

      OauthService.saveToken(auth.access_token, auth.refresh_token)
    }
  },
  [SET_USER] (state, user) {
    state.isAuthenticated = true
    state.user = user
    if (typeof state.user.favs === 'undefined') {
      state.user.favs = []
    }
    state.errors = {}
  },
  [GET_USER] (state) {
    return state.user
  },
  [IS_AUTH] (state) {
    return state.isAuthenticated
  },
  [PURGE_AUTH] (state) {
    state.isAuthenticated = false
    state.user = {}
    state.errors = {}
    OauthService.destroyToken()
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
