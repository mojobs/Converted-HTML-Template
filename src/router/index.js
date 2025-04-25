import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PoliticsView from '@/views/PoliticsView.vue'
import FashionView from '@/views/FashionView.vue'
import GameView from '@/views/GameView.vue'
import VideoView from '@/views/VideoView.vue'
import MusicView from '@/views/MusicView.vue'

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
    {
      path: '/fashion',
      name: 'fashion',
      component: FashionView,
      meta : {bodyClass : 'bg-light style-fashion'}
      
    },
    {
      path: '/game',
      name: 'game',
      component: GameView,
      meta : {bodyClass : 'style-games'}
      
    },
    {
      path: '/videos',
      name: 'videos',
      component: VideoView,
      meta : {bodyClass : 'style-videos'}
      
    },
    {
      path: '/music',
      name: 'music',
      component: MusicView,
      meta : {bodyClass : 'bg-dark style-music'}
      
    }
  ],
})

export default router
