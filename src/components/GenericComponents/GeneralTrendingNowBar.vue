<style scoped>
.fade-enter-from{
  opacity: 0;
transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.fade-enter-to, .fade-leave-from {
opacity: 1;
transform: translateY(0);
}
.fade-enter-active{
transition: all 0.35s ease;
}
.fade-leave-active{
  transition: all 0.35s ease;
}
</style>



<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const data = [
  {
    id: "1",
    url: "single-post.html",
    description:
      "A-HA theme is multi-purpose solution for any kind of business",
  },
  {
    id: "2",
    url: "single-post-1.html",
    description:
      "Satelite cost tens of millions or even hundreds of millions of dollars to build",
  },
  {
    id: "3",
    url: "single-post-3.html",
    description: "8 Hidden Costs of Starting and Running a Business",
  },
];
const currentIndex = ref(0);

let interval = null;

const previous = () => {
    currentIndex.value = (currentIndex.value - 1 + data.length) % data.length;
    resetAutoCycle();
};

const next = () => {
    currentIndex.value = (currentIndex.value + 1) % data.length;
    resetAutoCycle();
};

const currentItem = computed(() => data[currentIndex.value])

const startAutoCycle = () =>{
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % data.length;
  }, 3500);
};

const stopAutoCycle = () =>{
  clearInterval(interval)
}

const resetAutoCycle = () => {
  stopAutoCycle();
  startAutoCycle();
};

onMounted (() => {
  startAutoCycle();
})

onUnmounted (() => {
  stopAutoCycle();
})

</script>

<template>
  <!-- Trending Now -->
  <div class="container">
    <div :class="{'trending-now':true , 'trending-now--1': $route.path === '/politics' }">
      <span class="trending-now__label">
        <i class="ui-flash"></i>
        <span class="trending-now__text d-lg-inline-block d-none"
          >Newsflash</span
        >
      </span>
      <div class="newsticker">
        <ul class="newsticker__list">
            <transition name="fade" mode="out-in">
          <li class="newsticker__item" :key="currentItem.id">
            <a :href="currentItem.url" class="newsticker__item-url">{{
              currentItem.description
            }}</a>
          </li>
        </transition>
        </ul>
  
      </div>
      <div class="newsticker-buttons">
        <button
          @click="previous()"
          class="newsticker-button newsticker-button--prev"
          id="newsticker-button--prev"
          aria-label="previous article"
        >
          <i class="ui-arrow-left"></i>
        </button>
        <button
          @click="next()"
          class="newsticker-button newsticker-button--next"
          id="newsticker-button--next"
          aria-label="next article"
        >
          <i class="ui-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>
