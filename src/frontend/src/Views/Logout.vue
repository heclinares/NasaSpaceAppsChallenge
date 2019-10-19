<template>
  <div class="auth-page">
  </div>
</template>

<script>
import { LOGOUT } from '@/Store/actions.type'
import store from '@/Store'

export default {
  name: 'Logout',
  created: function () {
    store.dispatch(LOGOUT)
    this.$router.push({ name: 'login' })
  }
}
</script>
