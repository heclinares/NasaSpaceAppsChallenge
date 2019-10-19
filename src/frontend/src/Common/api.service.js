import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import OauthService from '@/Common/oauth.service'
import { API_URL, API_HOST } from '@/Common/config'
import router from '@/Router'
import alertify from 'alertifyjs'
import 'alertifyjs/build/css/alertify.min.css'
// import { REFRESH } from '@/Store/actions.type'
// import store from '@/Store'

const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
    Vue.axios.defaults.credentials = false
  },

  setHeader () {
    Vue.axios.defaults.headers.common['Authorization'] = `Bearer ${OauthService.getToken().token}`
  },

  nonce: new Date().getTime(),

  query (resource, params) {
    return Vue.axios
      .get(resource, params)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  },

  get (resource, slug = '', url) {
    this.nonce += 1
    if (typeof url !== 'undefined') {
      Vue.axios.defaults.baseURL = url
    } else {
      Vue.axios.defaults.baseURL = API_URL
    }
    return Vue.axios
      .get(`${resource}`)
      .catch((error) => {
        // let originalRequest = error.config
        if (typeof error.response === 'undefined') {
          error.response = error
        }

        if (error.response.status === 401) {
          if (window.localStorage.getItem('LOGIN') === 'true') {
            window.localStorage.setItem('LOGIN', 'false')
            alertify.alert('Error', 'Bad login credentials or session expired')
          }
          router.push({ name: 'login' })
          throw error
          // originalRequest._retry = true // now it can be retried
          // store.dispatch(REFRESH)
        } else {
          if (typeof error.response.data.message !== 'undefined') {
            alertify.alert('Error', error.response.data.message)
          }
          throw error
        }
      })
  },

  post (resource, params, url, headers, responseType) {
    console.log(params)
    if (typeof headers === 'undefined') {
      headers = {
        'Content-Type': 'application/json',
        'Host': API_HOST
      }
    } else {
      if (headers === '') {
        headers = {
          'Content-Type': 'application/json',
          'Host': API_HOST
        }
      }
    }
    headers['X-NONCE'] = this.nonce

    this.nonce += 1
    if (typeof url !== 'undefined') {
      if (url !== '') {
        Vue.axios.defaults.baseURL = url
      }
    } else {
      Vue.axios.defaults.baseURL = API_URL
    }

    if (typeof responseType === 'undefined') {
      responseType = ''
    }

    return Vue.axios.post(`${resource}`, params,
      {
        headers: headers,
        responseType: responseType
      })
      .catch((error) => {
        // let originalRequest = error.config
        if (typeof error.response === 'undefined') {
          error.response = error
        }

        if (error.response.status === 401) {
          if (window.localStorage.getItem('LOGIN') === 'true') {
            window.localStorage.setItem('LOGIN', 'false')
            alertify.alert('Error', 'Bad login credentials or session expired')
          }
          router.push({ name: 'login' })
          throw error
          // originalRequest._retry = true // now it can be retried
          // store.dispatch(REFRESH)
        } else {
          if (typeof error.response.data.message !== 'undefined') {
            alertify.alert('Error', error.response.data.message)
          }
          throw error
        }
      })
  },

  update (resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params)
  },

  put (resource, params) {
    return Vue.axios
      .put(`${resource}`, params)
  },

  delete (resource) {
    return Vue.axios
      .delete(resource)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  }
}

export default ApiService

export const LoginService = {
  getToken () {
    return ApiService.get('login-request?uuid=us1', {nonce: ApiService.nonce})
  }
}
