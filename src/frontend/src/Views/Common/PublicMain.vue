<template>
  <div>
    <!-- Top header start -->
    <header class="top-header hidden-xs" id="top" :style="'position: absolute; top: 0; z-index: 2; background-color: ' + headerColor + '; width: 100%;'">
      <div class="container" style="width: 100%; max-width: 100%;">
        <div class="row">
          <div class="col-xs-12 col-sm-4" style="margin-left: 8%; padding-left: 20px;">
            <div class="list-inline">
              <h2 style="text-decoration: initial; color: #2ec4b6; margin-top: 20px;">CYCLE CHAIN</h2>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 text-right">
            <ul class="top-social-media" style="margin-top: 17px">
              <li>
                <router-link
                  :to="{name: 'login'}"
                  class="sign-in"
                  style="background: transparent;padding: 15px 20px;color: #2ec4b6;border: 0px solid #fff;"
                  active-class="active">
                  <i class="fa fa-key"></i> Login
                </router-link>
              </li>
              <li>
                <router-link
                  :to="{name: 'register'}"
                  class="sign-in"
                  style="background: #2ec4b6; padding: 14px; border-radius: 0px;"
                  active-class="active">
                  <i class="fa fa-user"></i> Register
                </router-link>
              </li>
              <!--
              <li>
                <a href="#" class="hidden-xs hidden-sm" onclick="$('#lang-selector').toggle(); return false;">
                  <img src="/static/img/flag-en.png" style="width: 21px;"/>
                </a>
                <ul id="lang-selector" style="top: 54px;" class="">
                  <li class="">
                    <a href="/en/">
                      <img src="/static/img/flag-en.png" style="width: 21px;margin-right: 10px;" class="pull-left"/>
                      English
                    </a>
                  </li>
                  <li>
                    <a href="/nl/">
                      <img src="/static/img/flag-nl.png"  style="width: 21px;margin-right: 10px;" class="pull-left"/>
                      Nederlands
                    </a>
                  </li>
                  <li>
                    <a href="/es/">
                      <img src="/static/img/flag-es.png"  style="width: 21px;margin-right: 10px;" class="pull-left"/>
                      Español
                    </a>
                  </li>
                </ul>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </header>
    <!-- Top header end -->
    
    <!-- Main content -->
    <div id="public-content" class="public-content">
      <component v-bind:is="comp" :isDashboard=false>
      </component>
    </div>
    
    <!-- Footer start -->
    <footer-comp>
    </footer-comp>
    <!-- Footer end -->

    <!-- Copy right start -->
    <div class="copy-right">
      <div class="container">
        2019 <a href="/" target="_blank">Cycle chain</a>. Trademarks and brands are the property of their respective owners.
      </div>
    </div>
    <!-- Copy end right-->
  </div>
</template>

<script>
import Home from '@/Views/Home'
import Product from '@/Views/Product'
import footerComp from '@/Components/Footer'

export default {
  name: 'publicMainBase',
  props: {
    comp: { type: String, required: true, default: '' }
  },
  data () {
    return {
      showDropDown: false,
      title: 'Home',
      headerColor: 'transparent' // 'rgba(4, 34, 54, 0.5)'
    }
  },
  computed: {
  },
  components: {
    Home,
    Product,
    footerComp
  },
  created: function () {
  }
}
</script>
