import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ComicsDetalle from '../views/Comics-Detalle.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id',
    name: 'Comics-Detalle',
    component: ComicsDetalle
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
