<script setup>
import { defineProps, ref } from 'vue';
defineProps(
     {
          singlePostData: {
               type : Array,
               required : true
          }
     }
)
const isSinglePostToggled = ref(null);
const toggleSinglePost = () =>{
     isSinglePostToggled.value = !isSinglePostToggled.value
}
</script>

<template>
  <li :class="{'sidenav__menu--is-open' : isSinglePostToggled}">
    <a href="#" class="sidenav__menu-url">Single Post</a>
    <button @click="toggleSinglePost"
      class="sidenav__menu-toggle"
      aria-haspopup="true"
      aria-label="Open dropdown"
    >
      <i class="ui-arrow-down"></i>
    </button>
    <ul :class="{'sidenav__menu-dropdown': true, 'show' : isSinglePostToggled}" :style="{ display: isSinglePostToggled ? 'block' : 'none' }">
      <li v-for="data in singlePostData"><a :href="data.path" class="sidenav__menu-url">{{ data.data }}</a></li>
    </ul>
  </li>
</template>
