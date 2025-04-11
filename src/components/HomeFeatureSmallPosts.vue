<script setup>
import { defineProps } from "vue";
defineProps({
    data : {
        type: Object,
        required : true
    }
});
</script>

<template>
  <!-- Small post -->
  <div class="featured-posts-grid__item featured-posts-grid__item--sm">
    <article class="entry card post-list featured-posts-grid__entry">
      <div
        class="entry__img-holder post-list__img-holder card__img-holder"
        :style="{ backgroundImage: `url('${data.backgroundImage}')` }"
      >
        <a href="single-post.html" class="thumb-url"></a>
        <img
          :src= "data.imageSource" 
          alt=""
          class="entry__img d-none"
        />
        <a
          href="categories.html"
          :class="data.class"
          >{{ data.category }}</a
        >
      </div>

      <div class="entry__body post-list__body card__body">
        <h2 class="entry__title">
          <a href="single-post.html"
            >{{ data.text }}</a
          >
        </h2>
        <ul class="entry__meta">
          <li class="entry__meta-author">
            <span>by</span>
            <a href="#">DeoThemes</a>
          </li>
          <li class="entry__meta-date">Jan 21, 2018</li>
        </ul>
      </div>
    </article>
  </div>
  <!-- end post -->
</template>
