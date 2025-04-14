<script setup>


import HomeFeaturePostsComponent from "@/components/HomeViewComponents/HomeFeaturePostsComponent.vue";
import HomeFooter from "@/components/HomeViewComponents/HomeFooter.vue";
import HomeMainFeaturesComponents from "@/components/HomeViewComponents/HomeMainFeaturesComponents.vue";
import HomeSideBarComponent from "@/components/HomeViewComponents/HomeSideBarComponent.vue";
import HomeTrendingNowBar from "@/components/HomeViewComponents/HomeTrendingNowBar.vue";
import HomeViewNavBarComponent from "@/components/HomeViewComponents/HomeViewNavBarComponent.vue";
import HomeViewTopBarComponent from "@/components/HomeViewComponents/HomeViewTopBarComponent.vue";
import BackToTopComponent from '@/components/BackToTopComponent.vue';
import { ref } from "vue";

// For sideBar Component
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
