<template>
  <body
    :class="{
      'bg-light style-default style-rounded': $route.path == '/',
      'home style-politics': $route.path == '/politics',
      'bg-light style-fashion' : $route.path == '/fashion',
      'style-games' : $route.path == '/game',
      'style-videos' : $route.path == '/videos'
    }"
  >
    <!-- Bg Overlay -->
    <div class="content-overlay"></div>
    <RouterView />
  </body>
</template>

<script>
import { RouterView, useRoute } from "vue-router";
const route = useRoute();
</script>
