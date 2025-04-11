
<script setup>
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/font-icons.css'
import '@/assets/css/style.css'
import '@/assets/img/favicon.ico'
import '@/assets/img/apple-touch-icon-72x72.png'
import '@/assets/img/apple-touch-icon-114x114.png'
import PoliticsTrendingBarComponent from '@/components/PoliticsViewComponent/PoliticsTrendingBarComponent.vue'
import PoliticsHeaderComponent from '@/components/PoliticsViewComponent/PoliticsHeaderComponent.vue'
import PoliticsNavigationComponent from '@/components/PoliticsViewComponent/PoliticsNavigationComponent.vue'


import { ref } from 'vue'
import PoliticsSideBarComponent from '@/components/PoliticsViewComponent/PoliticsSideBarComponent.vue'
import PoliticsMainComponent from '@/components/PoliticsViewComponent/PoliticsMainComponent.vue'
import PoliticsFooterComponent from '@/components/PoliticsViewComponent/PoliticsFooterComponent.vue'

const isSideBarClicked = ref(false);
const showSideBarContentOverlay = () => {
  isSideBarClicked.value = !isSideBarClicked.value;
};


</script>

<template>
<PoliticsTrendingBarComponent/>

  <!-- Bg Overlay -->
  <div   :class="{
      'content-overlay content-overlay--is-visible': isSideBarClicked,
      'content-overlay': !isSideBarClicked,
    }"></div>
<PoliticsHeaderComponent/>
<PoliticsSideBarComponent
    @close-sidebar="showSideBarContentOverlay"
    :sidebarvalue="isSideBarClicked"
  />
<PoliticsNavigationComponent @open-sidebar="showSideBarContentOverlay"/>
<PoliticsMainComponent/>
<PoliticsFooterComponent/>
</template>
