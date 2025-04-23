<script setup>
import GameHeroSliderComponent from '@/components/GameViewComponents/GameHeroSliderComponent.vue';
import GameViewMainComponent from '@/components/GameViewComponents/GameViewMainComponent.vue';
import GeneralNavBarComponent from '@/components/GenericComponents/GeneralNavBarComponent.vue';
import HomeViewTopBarComponent from '@/components/HomeViewComponents/HomeViewTopBarComponent.vue';
import { onMounted, onUnmounted } from 'vue';

let themeLink = null

onMounted(() => {
  themeLink = document.createElement('link')
  themeLink.rel = 'stylesheet'
  themeLink.href = new URL('@/assets/css/colors/orange.css', import.meta.url).href // Adjust if you're using Vite or a different setup
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
<GameHeroSliderComponent/>
<GameViewMainComponent/>
</template>