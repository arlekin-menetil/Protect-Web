import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../views/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/SkanVirus',
      name: 'SkanVirus',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SkanVirus.vue')
    },
    {
      path: '/Protect',
      name: 'Protect',
      component: () => import('../views/ContentProtection.vue')
    },
    {
      path: '/Jurnual',
      name: 'Jurnual',
      component: () => import('../views/JurnualVue.vue')
    },
    {
      path: '/BlackList',
      name: 'BlackList',
      component: () => import('../views/BlackList.vue')
    },
    {
      path: '/Sidebar',
      name: 'Sidebar',
      component: () => import('../../src/components/MenuNavigation/SideBar.vue')
    },
  ]
})

export default router
