<script setup>
import GameFooter from '@/components/GameViewComponents/GameFooter.vue';
import GameHeroSliderComponent from '@/components/GameViewComponents/GameHeroSliderComponent.vue';
import GameViewMainComponent from '@/components/GameViewComponents/GameViewMainComponent.vue';
import GeneralNavBarComponent from '@/components/GenericComponents/GeneralNavBarComponent.vue';
import HomeViewTopBarComponent from '@/components/HomeViewComponents/HomeViewTopBarComponent.vue';
import GeneralSideBarComponent from '@/components/GenericComponents/GeneralSideBarComponent.vue';
import { onMounted, onUnmounted, ref } from 'vue';


const isSideBarClicked = ref(false);
const showSideBarContentOverlay = () => {
  isSideBarClicked.value = !isSideBarClicked.value;
};
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
<GeneralNavBarComponent @open-sidebar="showSideBarContentOverlay"/>
<GeneralSideBarComponent @close-sidebar="showSideBarContentOverlay"
:sidebarvalue="isSideBarClicked"/>
<GameHeroSliderComponent/>
<GameViewMainComponent/>
<GameFooter/>
</template>