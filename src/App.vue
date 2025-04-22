<template>
  <body
    :class="{
      'bg-light style-default style-rounded': $route.path == '/',
      'home style-politics': $route.path == '/politics',
      'bg-light style-fashion' : $route.path == '/fashion'
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
