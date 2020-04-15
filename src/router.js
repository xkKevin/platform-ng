import Vue from 'vue'
import VueRouter from 'vue-router'
import home from './views/home.vue'
import visAnalysis from './views/vis-analysis.vue'
import modelAnalysis from './views/model-analysis.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home,
  },

  {
    path: '/model-analysis',
    name: '模型分析',
    component: modelAnalysis,
  },
  {
    path: '/vis-analysis',
    name: '可视分析',
    component: visAnalysis,
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})

export default router
