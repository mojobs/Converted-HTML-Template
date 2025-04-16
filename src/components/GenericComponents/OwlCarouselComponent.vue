<template>
    <vueper-slides
      class="owl-carousel--vueper"
      :visible-slides="1"
      :bullets="false"
      :arrows="true"
      :gap="30"
      :responsive="responsiveOptions"
    >
      <vueper-slide
        v-for="article in articleData"
      >
        <article class="entry thumb thumb--size-1">
          <div
            class="entry__img-holder thumb__img-holder"
            :style="{ backgroundImage: `url('${article.articleImage}')` }"
          >
            <div class="bottom-gradient"></div>
            <div class="thumb-text-holder">
              <h2 class="thumb-entry-title">
                <a href="single-post.html">{{ article.articleText }}</a>
              </h2>
            </div>
            <a href="single-post.html" class="thumb-url"></a>
          </div>
        </article>
      </vueper-slide>
    </vueper-slides>
  </template>
<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

// These are the image imports for the owl carousel
import carouselone from "@/assets/img/content/carousel/carousel_post_1.jpg";
import carouseltwo from "@/assets/img/content/carousel/carousel_post_2.jpg";
import carouselthree from "@/assets/img/content/carousel/carousel_post_3.jpg";
import carouselfour from "@/assets/img/content/carousel/carousel_post_4.jpg";

// Dummy data (replace with real props or API data)
const articleData = [
  {
    articleImage: carouselone,
    articleText: "9 Things to Consider Before Accepting a New Job",
  },
  {
    articleImage: carouseltwo,
    articleText:
      "Gov’t Toughens Rules to Ensure 3rd Telco Player Doesn’t Slack Off",
  },
  {
    articleImage: carouselthree,
    articleText: "(Infographic) Is Work-Life Balance Even Possible?",
  },
  {
    articleImage: carouselfour,
    articleText:
      "Is Uber Considering To Sell its Southeast Asia Business to Grab?",
  },
  {
    articleImage: carouseltwo,
    articleText:
      "Gov’t Toughens Rules to Ensure 3rd Telco Player Doesn’t Slack Off",
  },
];

const responsiveOptions = {
  1200: {
    visibleSlides: 4
  },
  768: {
    visibleSlides: 2
  },
  540: {
    visibleSlides: 2
  }
}
</script>

<style scoped>
.owl-carousel--vueper {
  --vueper-slides-arrow-size: 32px;
}
.thumb__img-holder {
  background-size: cover;
  background-position: center;
  height: 300px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
}
.bottom-gradient {
  position: absolute;
  bottom: 0;
  height: 80px;
  width: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
}
.thumb-text-holder {
  position: absolute;
  bottom: 16px;
  left: 16px;
  color: #fff;
}
.thumb-entry-title {
  font-size: 1.2rem;
  font-weight: 600;
}
.thumb-url {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 1;
}
</style>