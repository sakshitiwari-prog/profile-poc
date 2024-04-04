<template>
  <div class="about">
    <div class="form-container">
      <div class="cartIconContainer">
        <v-btn
          :loading="loading"
          class="flex-grow-1"
          height="48"
          variant="tonal"
          :disabled="loading"
          @click="logoutHandler"
        >
          logout
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LogoutView',
  data() {
    return {
      cartItem: [],
      loading: false
      // Define shoppingItem in data
    }
  },
  created() {
    this.routeHandler()
  },
  methods: {
    logoutHandler() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        localStorage.setItem('isLoggedIn', 'false')
        const isLoggedIn = localStorage.getItem('isLoggedIn')
        this.$store.dispatch('userLoggedOut', !isLoggedIn)
        this.$router.push('/')
      }, 3000)
    },
    routeHandler() {
      const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))

      if (isLoggedIn) {
        this.$router.push(`${this.$route.path}`)
      } else {
        this.$router.push('/')
      }
    },
    addToCart(item) {
      this.$store.dispatch('updateCartListAction', item)
    }
  },

  beforeMount() {
    this.cartItem = this.$store.state.cartItem
  },
  beforemount() {}
}
</script>
<style scoped>
.cartIconContainer {
  position: relative;
}
.ShoppingContainer {
  display: flex;
  width: 80%;
  justify-content: space-between;
}
.vuetify {
  position: absolute;
  h1 {
    z-index: 1;
    position: absolute;
    color: white;
    padding: 4px;
    margin: 0;
    top: -15px;
    right: -26px;
    background: red;
    border-radius: 50%;
    font-size: 14px;
  }
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.item-container {
  width: 30%;
}
.cardd {
  border-radius: 8px;
  margin-top: 10px;
}
.form-container {
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 80vh;
  border: 1px solid #d6d6d6;
  border-radius: 9px;
  overflow: auto;
}
</style>
