import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      name: '',
      email: '',
      phone: '',
      address: '',
      cartItem: [],
      cartLength: 0,
      shoppingData: [
        {
          id: 0,
          title: 'Jeans',
          src: '/jeans.jpg'
        },
        {
          id: 1,
          title: 'Skirt',
          src: '/skirt.jpg'
        },
        {
          id: 2,
          title: 'Top',
          src: '/top.jpg'
        }
      ],
      isLoggedIn: false,
      routeName: ''
    }
  },
  mutations: {
    updateProfile(state, payload) {
      ;(state.name = payload.name),
        (state.email = payload.email),
        (state.phone = payload.phone),
        (state.address = payload.address)
    },
    updateCartList(state, payload) {
      let isItemExist = state.cartItem.findIndex((item) => {
        return item.id == payload.id
      })
      if (isItemExist < 0) {
        let newPayload = { ...payload, count: 1 }
        state.cartItem = [...state.cartItem, newPayload]
      } else {
        let newCartList = state.cartItem.map((cart) => {
          if (cart.id == isItemExist) {
            cart.count = cart.count + 1
          }
          return cart
        })
        state.cartItem = newCartList
      }
      state.cartLength = state.cartItem.length
    },
    updateUserLoggedIn(state, payload) {
      state.isLoggedIn = payload
    },
    updateUserLoggedOut(state, payload) {
      state.isLoggedIn = payload
    },
    updateRouteMutation(state, payload) {
      state.routeName = payload
    }
  },
  actions: {
    updateProfileAction(context, payload) {
      context.commit('updateProfile', payload)
    },
    updateCartListAction(context, payload) {
      context.commit('updateCartList', payload)
    },
    userLoggedIn(context, payload) {
      context.commit('updateUserLoggedIn', payload)
    },
    userLoggedOut(context, payload) {
      context.commit('updateUserLoggedOut', payload)
    },
    updateRouteHandler(context, payload) {
      context.commit('updateRouteMutation', payload)
    }
  }
})
const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))
store.dispatch('userLoggedIn', isLoggedIn)
if (isLoggedIn) {
  // Redirect to the current route if logged in
  // You can change this logic as per your requirements
} else {
  // Redirect to a specific route or do nothing if not logged in
}

export { store }
