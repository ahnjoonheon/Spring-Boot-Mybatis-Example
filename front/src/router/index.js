import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    /////////////////////////////////////////////////////////////////////////////////////////
    // 로그인
    /////////////////////////////////////////////////////////////////////////////////////////
    {
      path: '/login',
      name: "Login",
      component: () => import('@/views/LoginForm.vue'),
    },
    {
      path: '/logout',
      name: "Logout",
      component: () => import('@/views/Logout.vue'),
    },

    {
      path: '/join',
      name: "MemberForm",
      component: () => import('@/views/MemberForm.vue'),
    }
  ]
})

export default router
