import { createRouter, createWebHistory } from 'vue-router'
import GroupsView from '../views/GroupsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'group',
      component: GroupsView
    },
    {
      path: '/event',
      name: 'event',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EventsView.vue')
    },
    {
      path: '/registerEvent',
      name: 'registerEvent',
      component: () => import('../views/RegisterEventsView.vue')
    }
  ]
})

export default router
