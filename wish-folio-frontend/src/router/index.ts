import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { AppRoutesNames, AppRoutesPaths } from './AppRoutes'
import RegisterView from '@/views/RegisterView.vue'
import { useTokenStore } from '@/stores/token/token'
import FriendsView from '@/views/FriendsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: MainLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: AppRoutesNames.HOME,
          component: HomeView,
        },
        {
          path: AppRoutesPaths[AppRoutesNames.FRIENDS],
          name: AppRoutesNames.FRIENDS,
          component: FriendsView,
        },
      ],
    },
    {
      path: AppRoutesPaths[AppRoutesNames.LOGIN],
      name: AppRoutesNames.LOGIN,
      component: LoginView,
    },
    {
      path: AppRoutesPaths[AppRoutesNames.REGISTER],
      name: AppRoutesNames.REGISTER,
      component: RegisterView,
    },
  ],
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  const { isTokenExpired, removeToken } = useTokenStore()
  if (requiresAuth) {
    if (isTokenExpired) {
      removeToken()
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
