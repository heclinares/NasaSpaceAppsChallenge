
import Vue from 'vue'

import App from './App'
import router from '@/Router'
import store from '@/Store'

import ApiService from '@/Common/api.service'
import DateFilter from '@/Common/date.filter'
import ErrorFilter from '@/Common/error.filter'

// import VueInsProgressBar from 'vue-ins-progress-bar'
import { loadProgressBar } from 'axios-progress-bar'
import 'axios-progress-bar/dist/nprogress.css'
import * as VueGoogleMaps from 'vue2-google-maps'

require('../assets/css/app.css')

Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.filter('error', ErrorFilter)

/* const optionsBar = {
  position: 'fixed',
  show: true,
  height: '3px'
}

Vue.use(VueInsProgressBar, optionsBar) */

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBDKvxKIKgOV2Vyh4FVDTsW7zzRNwxhd3c',
    libraries: 'places'
  }
})

loadProgressBar()

ApiService.init()

var publicViews = [
  'register',
  'login',
  'home',
  'public-list',
  'public-detail',
  'public-agency-detail',
  'public-broker-detail',
  'product'
]

// Ensure we checked auth before each page load.
router.beforeEach(
  (to, from, next) => {
    if (publicViews.indexOf(to.name) < 0) {
      return Promise
        .all(/* [store.dispatch(CHECK_AUTH)] */)
        .then(next)
    } else {
      next()
    }
  }
)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
