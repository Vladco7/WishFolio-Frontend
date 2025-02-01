import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import { tokenService } from '@/services/tokenService'
import { AppRoutesNames, AppRoutesPaths } from './AppRoutes'
import RegisterView from '@/views/RegisterView.vue'

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
      ]
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
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth) {
    if (tokenService.isTokenExpired()) {
      tokenService.removeToken() // Удаляем просроченный токен
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
