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
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginGroupView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterGroupView.vue')
    }
  ]
})

export default router
