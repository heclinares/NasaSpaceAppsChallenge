<template>
  <footer>
    <div class="main-container">
      <div class="footer-section">
        <h3>Cycle Chain</h3>
        <ul>
          <router-link
            :to="{name: 'home'}"
            class="sign-in"
            active-class="active">
          <li>About</li>
          </router-link>
          <li>Our Team</li>
          <router-link
            :to="{name: 'home'}"
            class="sign-in"
            active-class="active">
          <li>News & press mentions</li>
          </router-link><router-link
            :to="{name: 'home'}"
            class="sign-in"
            active-class="active">
          <li>Contact</li>
          </router-link>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>

export default {
  name: 'footerComp'
}
</script>
