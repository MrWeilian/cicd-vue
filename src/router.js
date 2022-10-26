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
      path: '/:pathMatch(.*)*',
      redirect: '/ConfigList'
    }
  ]
})

export default router