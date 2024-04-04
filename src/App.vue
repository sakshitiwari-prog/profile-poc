<template>
  <header v-if="$store.state.isLoggedIn">
    <div class="wrapper">
      <nav>
        <RouterLink to="/profile">Profile</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/news">News</RouterLink>
        <RouterLink to="/shopping">Shopping</RouterLink>
        <RouterLink to="/cart">Cart</RouterLink>
        <RouterLink to="/logout">Logout</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  data() {
    return {
      isNavVisible: false
    }
  },
  beforeRouteLeave() {},
  updated() {
    if (this.$store.state.isLoggedIn == false && this.$route.path == '/') {
      this.isNavVisible = false
    } else {
      this.isNavVisible = true
    }
  }
}
</script>

<style scoped>
/* Your CSS styles */
</style>
