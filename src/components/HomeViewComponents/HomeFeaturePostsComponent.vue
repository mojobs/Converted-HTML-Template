<script setup>
import HomeFeatureSmallPosts from './HomeFeatureSmallPosts.vue';

import heroPost1 from "@/assets/img/content/hero/hero_post_1.jpg";
import heroPost2 from "@/assets/img/content/hero/hero_post_2.jpg";
import heroPost3 from "@/assets/img/content/hero/hero_post_3.jpg";

const dataset = [
  {
    id: '1',
    backgroundImage: heroPost1,
    imageSource: "@/assets/img/content/hero/hero_post_1.jpg",
    text: "3 Founders With Booming Businesses Share Stories About Their Difficult Early",
    category: 'World',
    class: 'entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--violet'
  },
  {
    id: '2',
    backgroundImage: heroPost2,
    imageSource: "@/assets/img/content/hero/hero_post_2.jpg",
    text: "3 Things You Can Do to Get Your Customers Talking About Your Business",
    category: 'Fashion',
    class: 'entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--purple'
  },
  {
    id: '3',
    backgroundImage: heroPost3,
    imageSource: "@/assets/img/content/hero/hero_post_3.jpg",
    text: "These Are the 20 Best Places to Work in 2018",
    category: 'Business',
    class: 'entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--blue'
  },
];
</script>

<template>
  <!-- Featured Posts Grid -->
  <section class="featured-posts-grid">
    <div class="container">
      <div class="row row-8">
        <div class="col-lg-6">
          <HomeFeatureSmallPosts v-for="data in dataset" :key="data.id" :data="data"/>
        </div>
        <!-- end col -->

        <div class="col-lg-6">
          <!-- Large post -->
          <div class="featured-posts-grid__item featured-posts-grid__item--lg">
            <article class="entry card featured-posts-grid__entry">
              <div class="entry__img-holder card__img-holder">
                <a href="single-post.html">
                  <img
                    src="@/assets/img/content/hero/hero_post_4.jpg"
                    alt=""
                    class="entry__img"
                  />
                </a>
                <a
                  href="categories.html"
                  class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--green"
                  >Lifestyle</a
                >
              </div>

              <div class="entry__body card__body">
                <h2 class="entry__title">
                  <a href="single-post.html"
                    >What Days and Hours are PH Online Shoppers Most Likely to
                    Buy?</a
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
          <!-- end large post -->
        </div>
      </div>
    </div>
  </section>
  <!-- end featured posts grid -->
</template>
