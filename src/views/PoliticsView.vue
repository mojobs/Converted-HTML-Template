<script setup>
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/font-icons.css'
import '@/assets/css/style.css'
import '@/assets/img/favicon.ico'
import '@/assets/img/apple-touch-icon-72x72.png'
import '@/assets/img/apple-touch-icon-114x114.png'
import PoliticsHeaderComponent from '@/components/PoliticsViewComponent/PoliticsHeaderComponent.vue'
import HomeViewNavBarComponent from '@/components/GenericComponents/GeneralNavBarComponent.vue'


import { ref, onMounted, onUnmounted } from 'vue'
import HomeSideBarComponent from '@/components/GenericComponents/GeneralSideBarComponent.vue'
import PoliticsMainComponent from '@/components/PoliticsViewComponent/PoliticsMainComponent.vue'
import PoliticsFooterComponent from '@/components/PoliticsViewComponent/PoliticsFooterComponent.vue'
import HomeTrendingNowBar from '@/components/GenericComponents/GeneralTrendingNowBar.vue'

const isSideBarClicked = ref(false);
const showSideBarContentOverlay = () => {
  isSideBarClicked.value = !isSideBarClicked.value;
};

// Dynamically load red.css theme on mount
let themeLink = null

onMounted(() => {
  themeLink = document.createElement('link')
  themeLink.rel = 'stylesheet'
  themeLink.href = new URL('@/assets/css/colors/red.css', import.meta.url).href // Adjust if you're using Vite or a different setup
  document.head.appendChild(themeLink)
})

onUnmounted(() => {
  if (themeLink && themeLink.parentNode) {
    themeLink.parentNode.removeChild(themeLink)
  }
})


</script>

<template>
<HomeTrendingNowBar style=""/>

  <!-- Bg Overlay -->
  <div   :class="{
      'content-overlay content-overlay--is-visible': isSideBarClicked,
      'content-overlay': !isSideBarClicked,
    }"></div>
<PoliticsHeaderComponent/>
<HomeViewNavBarComponent @open-sidebar="showSideBarContentOverlay" />
  <HomeSideBarComponent
    @close-sidebar="showSideBarContentOverlay"
    :sidebarvalue="isSideBarClicked"
  />
<PoliticsMainComponent/>
<PoliticsFooterComponent/>
</template>
