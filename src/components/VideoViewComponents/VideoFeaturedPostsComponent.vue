<script setup>
//Imports for the Large Posts
import skatingGirl from "@/assets/img/content/hero/hero_post_13.jpg";
import rainbowKini from "@/assets/img/content/hero/hero_post_14.jpg";

//Imports for the Small Posts
import watch from "@/assets/img/content/hero/hero_post_15.jpg";
import starWars from "@/assets/img/content/hero/hero_post_16.jpg";
import violin from "@/assets/img/content/hero/hero_post_17.jpg";
import rainbowmac from "@/assets/img/content/hero/hero_post_18.jpg";
const constantData =
  "People Who Take Cold Showers Take Fewer Sick Days, Study Finds";
const featuredPostsData = [
  {
    section: "World",
    class:
      "entry__meta-category entry__meta-category--label entry__meta-category--violet",
    bigImage: skatingGirl,
    text: constantData,
    smallPost1: watch,
    smallPost2: starWars
  },
  {
    section: "Technology",
    class:
      "entry__meta-category entry__meta-category--label entry__meta-category--cyan",
    bigImage: rainbowKini,
    text: constantData,
    smallPost1: violin,
    smallPost2: rainbowmac,
  },
];
</script>

<template>
  <!-- Featured Posts Grid -->
  <section class="featured-posts-grid featured-posts-grid--1">
    <div class="container">
      <div class="row">
        <div class="col-lg-6" v-for="data in featuredPostsData">
          <article class="entry thumb thumb--size-4">
            <div
              class="entry__img-holder thumb__img-holder"
              :style="{ backgroundImage: `url('${data.bigImage}')` }"
            >
              <div class="bottom-gradient"></div>
              <div class="thumb-text-holder thumb-text-holder--3">
                <a href="categories.html" :class="data.class">{{
                  data.section
                }}</a>
                <ul class="entry__meta">
                  <li class="entry__meta-author">
                    <span>by</span>
                    <a href="#">DeoThemes</a>
                  </li>
                  <li class="entry__meta-date">Jan 21, 2018</li>
                </ul>
                <h2 class="thumb-entry-title">
                  <a href="single-post-videos.html">{{data.text}}</a>
                </h2>
              </div>
              <a href="single-post-videos.html" class="thumb-url"></a>
            </div>
          </article>

          <div class="row">
            <div class="col-lg-6">
              <article class="entry thumb thumb--size-1">
                <div
                  class="entry__img-holder thumb__img-holder"
                  :style="
                    {backgroundImage : `url('${data.smallPost1}')`}
                  "
                >
                  <div class="bottom-gradient"></div>
                  <div class="thumb-text-holder thumb-text-holder--4">
                    <h2 class="thumb-entry-title">
                      <a href="single-post-videos.html"
                        >{{data.text}}</a
                      >
                    </h2>
                  </div>
                  <a href="single-post-videos.html" class="thumb-url"></a>
                </div>
              </article>
            </div>
            <div class="col-lg-6">
              <article class="entry thumb thumb--size-1">
                <div
                  class="entry__img-holder thumb__img-holder"
                  :style="
                    {backgroundImage : `url('${data.smallPost2}')`}
                  "
                >
                  <div class="bottom-gradient"></div>
                  <div class="thumb-text-holder thumb-text-holder--4">
                    <h2 class="thumb-entry-title">
                      <a href="single-post-videos.html"
                        >{{data.text}}</a
                      >
                    </h2>
                  </div>
                  <a href="single-post-videos.html" class="thumb-url"></a>
                </div>
              </article>
            </div>
          </div>
          <!-- end row -->
        </div>
        <!-- end col -->
      </div>
    </div>
  </section>
  <!-- end featured posts grid -->
</template>
