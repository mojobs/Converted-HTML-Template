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
const isSinglePostToggled = ref(false);
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
    <transition name="singlepost">
      <ul class='sidenav__menu-dropdown' v-if="isSinglePostToggled" :style="{ display: isSinglePostToggled ? 'block' : 'none' }">
      <li v-for="data in singlePostData"><a :href="data.path" class="sidenav__menu-url">{{ data.data }}</a></li>
    </ul>
    </transition>
 
  </li>
</template>
<style scoped>
.singlepost-enter-from, .singlepost-leave-to {
  transform: translateY(-10px);
  overflow: hidden;
  max-height: 0;
}
.singlepost-enter-to, .singlepost-leave-from {

  transform: translateY(0);
  overflow: hidden;
  max-height: 500px;
}
.singlepost-enter-active{
  transition: all 0.5s ease-in;
}
.singlepost-leave-active{
  transition: all 0.5s ease-out;
}

</style>

