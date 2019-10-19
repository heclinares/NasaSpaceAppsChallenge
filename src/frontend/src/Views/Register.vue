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
            <form v-on:submit.prevent="onSubmit">
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="text" v-model="name" placeholder="Game title">
              </fieldset>
              <fieldset class="form-group">
                <select class="form-control form-control-lg" v-model="gameType" placeholder="Select one">
                  <option value="RPG">RPG</option>
                  <option value="RTS">Real time strategy (RTS)</option>
                  <option value="FPS">First person shooter (FPS)</option>
                  <option value="Other">Other</option>
                </select>
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="text" v-model="url" placeholder="Download link" required>
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="text" v-model="img" placeholder="Image url">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="text" v-model="description" placeholder="Game description">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="number" v-model="price" placeholder="Game price (AE)">
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right" style="background: rgb(255, 13, 106)">
                Submit game
              </button>
            </form>
          </div>
          <div class="text-center footer-text">
            Gameternity 2019 </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { gameContract, /* shopContract, */ addGame, deploy } from '@/Common/contract'

require('../../assets/css/login-register.css')

export default {
  name: 'RwvRegister',
  data () {
    return {
      name: '',
      gameType: '',
      url: '',
      img: '',
      description: '',
      price: 0
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
  },
  methods: {
    onSubmit () {
      // Deploy new Game
      deploy(gameContract,
        'init',
        [this.name, this.url, this.img, this.description, this.price, 'ID1'],
        {}).then((game) => {
        console.log('Game deployed!')
        console.log('Adding to shop...')
        addGame(game).then((addGResp) => {
          console.log('Game added!')
          this.$router.push({ name: 'home' })
        })
      })

      /*
       In case you need to deploy a new shop
       Un comment this:
      deploy(shopContract,
        'init',
        [],
        {}).then((shop) => {
        console.log('Shop deployed!')
        console.log(shop)
      }) */
    }
  },
  created () {
  }
}
</script>
