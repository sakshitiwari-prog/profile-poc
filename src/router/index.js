import { createRouter, createWebHistory } from 'vue-router'
import NewsView from '../views/NewsView.vue'
import ProfileView from '../views/ProfileView.vue'
import ShoppingVue from '@/views/ShoppingVue.vue'
import CartView from '@/views/CartView.vue'
import LoginVue from '@/views/LoginVue.vue'
import LogoutView from '@/views/LogoutView.vue'
import { store } from '@/store/StoreView'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginVue
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      meta: { requiresAuth: true }
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: ShoppingVue,
      meta: { requiresAuth: true }
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
      meta: { requiresAuth: true }
    },
    {
      path: '/logout',
      name: 'logout',
      component: LogoutView,
      meta: { requiresAuth: true }
    }
  ]
})
router.beforeEach(async (to, from) => {
  if (!store.state.isLoggedIn && to.name !== 'login') {
    return { name: 'login' }
  } else if (store.state.isLoggedIn && to.path == '/') {
    console.log(to, from)
    return { name: 'profile' }
  }
})

export default router
