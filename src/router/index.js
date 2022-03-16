import { createRouter, createWebHistory } from 'vue-router'
import { auth } from "../auth";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
      beforeEnter(to, from, next) {
        if (auth.isAuthenticated()) {
          next({ name: 'home' })
        } else {
          next()
        }
      }
    },
    {
      path: '/',
      component: () => import('../views/Dashboard.vue'),
      beforeEnter(to, from, next) {
        if (auth.isAuthenticated()) {
          next();
        } else {
          next({ name: 'login' })
        }
      },
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/Home.vue'),
        },
        {
          path: '/item/edit/:id',
          name: 'item:edit',
          component: () => import('../views/Item.vue'),
        },
      ],
    },
  ]
})

