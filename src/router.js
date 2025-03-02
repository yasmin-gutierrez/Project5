import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import CardDetail from './views/CardDetail.vue'
import LoginPage from './views/LoginPage.vue'
import SettingsPage from './views/SettingsPage.vue'

const routes = [
  { path: '/Project5/', name: 'Home', component: HomePage },
  { path: '/Project5/other', name: 'Other', component: () => import('@/views/OtherPage.vue') },
  { path: '/Project5/employees/:id', name: 'CardDetail', component: CardDetail },
  { path: '/Project5/login', name: 'LoginPage', component: LoginPage },
  { path: '/Project5/settings', name: 'SettingsPage', component: SettingsPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

//navigation guard 
router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next({name: 'LoginPage', query: {redirect: to.fullpath}})
  } else {
    next()
  }
})

export default router
