import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/configList',
      component: () => import('@/pages/ConfigList/index.vue'),
      name: 'ConfigList',
      meta: {
        menu: false
      }
    },
    {
      path: '/configDetail/:id',
      component: () => import('@/pages/ConfigDetail/index.vue'),
      name: 'ConfigDetail'
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/ConfigList'
    }
  ]
})

export default router