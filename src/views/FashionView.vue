<template>
<GeneralNavBarComponent @open-sidebar="showSideBarContentOverlay"/>
<GeneralSideBarComponent @close-sidebar="showSideBarContentOverlay"
:sidebarvalue="isSideBarClicked"/>
<FashionHeroComponent/>

</template>
<script setup>
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/font-icons.css'
import '@/assets/css/style.css'
import '@/assets/img/favicon.ico'
import '@/assets/img/apple-touch-icon-72x72.png'
import '@/assets/img/apple-touch-icon-114x114.png'


import GeneralNavBarComponent from '@/components/GenericComponents/GeneralNavBarComponent.vue'
import GeneralSideBarComponent from '@/components/GenericComponents/GeneralSideBarComponent.vue'
import { onUnmounted, onMounted, ref } from 'vue'
import FashionHeroComponent from '@/components/FashionViewComponents/FashionHeroComponent.vue'

const isSideBarClicked = ref(false);
const showSideBarContentOverlay = () => {
  isSideBarClicked.value = !isSideBarClicked.value;
};

// Dynamically load pink.css theme on mount
let themeLink = null

onMounted(() => {
  themeLink = document.createElement('link')
  themeLink.rel = 'stylesheet'
  themeLink.href = new URL('@/assets/css/colors/pink.css', import.meta.url).href // Adjust if you're using Vite or a different setup
  document.head.appendChild(themeLink)
})

onUnmounted(() => {
  if (themeLink && themeLink.parentNode) {
    themeLink.parentNode.removeChild(themeLink)
  }
})



</script>