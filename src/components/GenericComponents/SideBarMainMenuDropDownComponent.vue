<script setup>
// import { defineProps } from 'vue';

// defineProps({
//   sideMenuData :{
//     type : Object,
//     required : true
//   }
// })



</script>

<template>
  <li v-for="(components, index) in specificsidebarcomponents" :key="index"><a :href="components.sidebaroptionspath[index]" class="sidenav__menu-url">{{ components.sidebaroptions[index] }}</a></li>


</template>
