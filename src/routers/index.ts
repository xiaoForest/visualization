import { createRouter, createWebHistory } from 'vue-router'

export const routerHistory = createWebHistory()

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/',
    },
    {
      name: 'home',
      path: '/',
      component: () => import('@/views/index.vue')
    }
  ]
})

export { routers }
