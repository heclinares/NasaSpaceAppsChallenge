<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12 box-container">
          <router-link :to="{ name: 'home' }">
            <div class="text-center">
              <h1 style="text-decoration: initial; color: #ff0d6a; margin-bottom: 40px;">Gameternity</h1>
            </div>
          </router-link>
          <div class="white-box">
            <h1 class="text-xs-center" style="color: #000">Sign in</h1>
            <p class="text-xs-center">
              <router-link :to="{ name: 'register' }">
                Upload a game
              </router-link>
            </p>
            
            <ul v-if="errors" class="error-messages">
              <li
                v-for="v in errors">
                {{ v }}
              </li>
            </ul>
            
            <form v-on:submit.prevent="onSubmit(email, password)">
              <div @click="tryLogin" style="cursor: pointer; width: auto; height: 50px; color: #eee; font-size: 15px; background: rgb(255, 13, 106); border-radius: 24px;">
                <img src="/static/img/Aeternity.svg" style="width: 50px"> Login using Aeternity
              </div>
              <!--
               USE THESE FIELDS IF YOU WANT TO ADD NORMAL LOGIN 
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  v-model="email"
                  placeholder="Email">
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  v-model="password"
                  placeholder="Password">
              </fieldset>
              <button class="btn btn-lg btn-primary pull-right">
                Sign in
              </button> -->
            </form>
          </div>
          <div class="text-center footer-text">
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { LoginService } from '@/Common/api.service'
import {
  Crypto
} from '@aeternity/aepp-sdk'
require('../../assets/css/login-register.css')

export default {
  name: 'RwvLogin',
  data () {
    return {
      email: null,
      password: null
    }
  },
  methods: {
    tryLogin () {
      LoginService.getToken().then(({data}) => {
        console.log(data)
        var priv = Crypto.generateKeyPairFromSecret(Crypto.hexStringToByte('165e6b751ef44d0cd2b6447fc0d456605be27c207fcd8beac2982b3c5bc8267afd111407359c7302f710fcb92a1128892434048ba50dc8eabb5c916acda86cd7'))
        console.log(priv)
        var test = Crypto.sign(data.response, priv.secretKey)
        console.log(test)
      })
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  }
}
</script>
