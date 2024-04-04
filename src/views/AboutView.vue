<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="form-container">
      <div></div>
      <div class="d-flex">
        <h3>Name:</h3>
        <p>{{ $store.state.name }}</p>
      </div>
      <div class="d-flex">
        <h3>email:</h3>
        <p>{{ $store.state.email }}</p>
      </div>
      <div class="d-flex">
        <h3>phone:</h3>
        <p>{{ $store.state.phone }}</p>
      </div>
      <div class="d-flex">
        <h3>address:</h3>
        <p>{{ $store.state.address }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.routeHandler()
  },
  methods: {
    routeHandler() {
      const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))
      if (isLoggedIn) {
        this.$router.push(`${this.$route.path}`)
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>
<style>
.form-container {
  flex: 1;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
