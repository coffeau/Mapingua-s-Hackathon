import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/HomeDogs',
    name:  'Home',
    component: () => import('../views/HomePage.vue')
  },
  {
    path:'/Requisicao',
    name: 'Requisicao',
    component: () => import('../views/FormView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
