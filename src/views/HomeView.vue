<script setup>
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/font-icons.css'
import '@/assets/css/style.css'
import '@/assets/img/favicon.ico'
import '@/assets/img/apple-touch-icon-72x72.png'
import '@/assets/img/apple-touch-icon-114x114.png'

import HomeFeaturePostsComponent from "@/components/HomeViewComponents/HomeFeaturePostsComponent.vue";
import HomeFooter from "@/components/HomeViewComponents/HomeFooter.vue";
import HomeMainFeaturesComponents from "@/components/HomeViewComponents/HomeMainFeaturesComponents.vue";
import HomeSideBarComponent from "@/components/HomeViewComponents/HomeSideBarComponent.vue";
import HomeTrendingNowBar from "@/components/HomeViewComponents/HomeTrendingNowBar.vue";
import HomeViewNavBarComponent from "@/components/HomeViewComponents/HomeViewNavBarComponent.vue";
import HomeViewTopBarComponent from "@/components/HomeViewComponents/HomeViewTopBarComponent.vue";
import BackToTopComponent from '@/components/BackToTopComponent.vue';
import { ref } from "vue";

const isSideBarClicked = ref(false);
const showSideBarContentOverlay = () => {
  isSideBarClicked.value = !isSideBarClicked.value;
};


</script>

<template>
  <HomeViewTopBarComponent />
  <!-- Bg Overlay -->
  <div
    :class="{
      'content-overlay content-overlay--is-visible': isSideBarClicked,
      'content-overlay': !isSideBarClicked,
    }"
  ></div>

  <HomeViewNavBarComponent @open-sidebar="showSideBarContentOverlay" />
  <HomeSideBarComponent
    @close-sidebar="showSideBarContentOverlay"
    :sidebarvalue="isSideBarClicked"
  />

  <HomeTrendingNowBar />
  <HomeFeaturePostsComponent/>
  <HomeMainFeaturesComponents/>
  <HomeFooter/>
  <BackToTopComponent/>

</template>
