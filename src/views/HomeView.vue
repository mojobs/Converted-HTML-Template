<script setup>
import HomeFeaturePostsComponent from "@/components/HomeFeaturePostsComponent.vue";
import HomeFooter from "@/components/HomeFooter.vue";
import HomeMainFeaturesComponents from "@/components/HomeMainFeaturesComponents.vue";
import HomeSideBarComponent from "@/components/HomeSideBarComponent.vue";
import HomeTrendingNowBar from "@/components/HomeTrendingNowBar.vue";
import HomeViewNavBarComponent from "@/components/HomeViewNavBarComponent.vue";
import HomeViewTopBarComponent from "@/components/HomeViewTopBarComponent.vue";
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
