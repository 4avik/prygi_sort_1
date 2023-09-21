import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/Product.vue'),
      props(route){
        return { productIndex: route.query.productIndex }
      }
    }
  ]
})

export default router
