<script setup>
import { computed, ref } from "vue";
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

const previous = () => {
    currentIndex.value = (currentIndex.value - 1 + data.length) % data.length;
};

const next = () => {
    currentIndex.value = (currentIndex.value + 1) % data.length;
};

const currentItem = computed(() => data[currentIndex.value])

</script>

<template>
  <!-- Trending Now -->
  <div class="container">
    <div class="trending-now">
      <span class="trending-now__label">
        <i class="ui-flash"></i>
        <span class="trending-now__text d-lg-inline-block d-none"
          >Newsflash</span
        >
      </span>
      <div class="newsticker">
        <ul class="newsticker__list">
          <li class="newsticker__item">
            <a :href="currentItem.url" class="newsticker__item-url">{{
              currentItem.description
            }}</a>
          </li>
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
