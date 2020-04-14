import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './views/home.vue'
import playground from './views/playground.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },
  {
    path: '/playground',
    name: '画板',
    component: playground,
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

export default router
