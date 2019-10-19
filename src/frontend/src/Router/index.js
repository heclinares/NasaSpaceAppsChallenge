import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      props: { comp: 'Home' },
      component: () => import('@/Views/Common/PublicMain')
    },
    {
      name: 'logout',
      path: '/logout',
      component: () => import('@/Views/Logout')
    },
    {
      name: 'register',
      path: '/register',
      component: () => import('@/Views/Register')
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/Views/Login')
    },
    {
      name: 'product',
      path: '/product/:code',
      props: { comp: 'Product' },
      component: () => import('@/Views/Common/PublicMain')
    }
  ]
})
