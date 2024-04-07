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
      path: '/AllLogi',
      name: 'AllLogi',
      component: () => import('../../src/components/JurnalContent/OtherPages/AllLogi.vue')
    },
    {
      path: '/AllSqli',
      name: 'AllSqli',
      component: () => import('../../src/components/JurnalContent/OtherPages/AllSqli.vue')
    },
    {
      path: '/DosPage',
      name: 'DosPage',
      component: () => import('../../src/components/JurnalContent/OtherPages/DosPage.vue')
    },
    {
      path: '/LogiProxy',
      name: 'LogiProxy',
      component: () => import('../../src/components/JurnalContent/OtherPages/LogiProxy.vue')
    },
    {
      path: '/OtherLog',
      name: 'OtherLog',
      component: () => import('../../src/components/JurnalContent/OtherPages/OtherLog.vue')
    },
    {
      path: '/SpamPage',
      name: 'SpamPage',
      component: () => import('../../src/components/JurnalContent/OtherPages/SpamPage.vue')
    },
    {
      path: '/BlackList',
      name: 'BlackList',
      component: () => import('../views/BlackList.vue')
    },
    {
      path: '/BlackIP',
      name: 'BlackIP',
      component: () => import('../../src/components/BlackList/OtherPage/BlackListIP.vue')
    },
    {
      path: '/BlackCountry',
      name: 'BlackCountry',
      component: () => import('../../src/components/BlackList/OtherPage/BlackListCountry.vue')
    },
    {
      path: '/OtherBan',
      name: 'OtherBan',
      component: () => import('../../src/components/BlackList/OtherPage/OtherBan.vue')
    },
    {
      path: '/SkanVirus',
      name: 'SkanVirus',
      component: () => import('../views/SkanVirus.vue')
    },
    {
      path: '/Setting',
      name: 'Setting',
      component: () => import('../views/SettingPage.vue')
    },
    {
      path: '/Detals',
      name: 'Detals',
      component: () => import('../../src/components/ModalWindow/DetalsPage.vue')
    },
  ]
})

export default router
