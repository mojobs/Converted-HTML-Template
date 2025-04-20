import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PoliticsView from '@/views/PoliticsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta : {bodyClass : 'bg-light style-default style-rounded'}
     
    },
    {
      path: '/politics',
      name: 'politics',
      component: PoliticsView,
      meta : {bodyClass : 'home style-politics'}
      
    },
  ],
})

export default router
