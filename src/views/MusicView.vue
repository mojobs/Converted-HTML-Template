<script setup>
import GeneralNavBarComponent from '@/components/GenericComponents/GeneralNavBarComponent.vue';
import HomeViewTopBarComponent from '@/components/HomeViewComponents/HomeViewTopBarComponent.vue';
import MusicMainComponent from '@/components/MusicViewComponent/MusicMainComponent.vue';
import MusicSliderComponent from '@/components/MusicViewComponent/MusicSliderComponent.vue';
//import MusicSliderComponent2 from '@/components/MusicViewComponent/MusicSliderComponent2.vue';

import { onMounted, onUnmounted } from 'vue';

let themeLink = null

onMounted(() => {
  themeLink = document.createElement('link')
  themeLink.rel = 'stylesheet'
  themeLink.href = new URL('@/assets/css/colors/cyan.css', import.meta.url).href // Adjust if you're using Vite or a different setup
  document.head.appendChild(themeLink)
})

onUnmounted(() => {
  if (themeLink && themeLink.parentNode) {
    themeLink.parentNode.removeChild(themeLink)
  }
})
</script>

<template>
<HomeViewTopBarComponent/>
<GeneralNavBarComponent/>
<MusicSliderComponent/>
<MusicMainComponent/>
</template>