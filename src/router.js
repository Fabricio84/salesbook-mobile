import { createRouter, createWebHistory } from 'vue-router'

import SignIn from './views/SignIn.vue'
import Home from './views/Home.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: SignIn },
    { path: '/home', component: Home },
  ]
})