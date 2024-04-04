<template>
  <div class="about">
    <div class="form-container">
      <div class="cartIconContainer">
        <!-- <v-icon icon="$vuetify" class="vuetify"></v-icon> -->
        <h1>{{ $store.state.cartLength }}</h1>
      </div>

      <div class="ShoppingContainer">
        <div v-for="item in shoppingItem" :key="item.id" class="item-container">
          <v-card class="mx-auto" max-width="600">
            <v-img height="200px" :src="item.src" contain></v-img>

            <v-card-title>
              {{ item.title }}
            </v-card-title>

            <v-card-actions>
              <v-btn
                class="text-none ms-4 text-white"
                color="blue-darken-4"
                rounded="0"
                variant="flat"
                @click="addToCart(item)"
              >
                Add to Cart
              </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ShoppingView',
  data() {
    return {
      shoppingItem: []
    }
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch('updateCartListAction', item)
    },
    routeHandler() {
      const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))
      if (isLoggedIn) {
        this.$router.push(`${this.$route.path}`)
      } else {
        this.$router.push('/')
      }
    }
  },
  created() {
    this.routeHandler()
  },
  beforeMount() {
    this.shoppingItem = this.$store.state.shoppingData
  },
  updated() {}
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
