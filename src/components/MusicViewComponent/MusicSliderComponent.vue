<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import meghanTrainor from "@/assets/img/content/hero/hero_post_19.jpg"
import blackCouple from "@/assets/img/content/hero/hero_post_20.jpg"
import concert from "@/assets/img/content/hero/hero_post_21.jpg"
import guitarist from "@/assets/img/content/hero/hero_post_22.jpg"

const thumbsSwiper = ref(null);

const modules = [FreeMode, Navigation, Thumbs];

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

const thumbsSwiperData = [
  {
    image: new URL(
      "@/assets/img/content/hero/hero_post_19_thumb.jpg",
      import.meta.url
    ).href,
  },
  {
    image: new URL(
      "@/assets/img/content/hero/hero_post_20_thumb.jpg",
      import.meta.url
    ).href,
  },
  {
    image: new URL(
      "@/assets/img/content/hero/hero_post_21_thumb.jpg",
      import.meta.url
    ).href,
  },
  {
    image: new URL(
      "@/assets/img/content/hero/hero_post_22_thumb.jpg",
      import.meta.url
    ).href,
  },
];
</script>

<template>
  <section class="hero-slider-1">
    <!-- Main Swiper -->
    <swiper
      :loop="true"
      :spaceBetween="10"
      :navigation="true"
      :thumbs="{ swiper: thumbsSwiper }"
      :modules="modules"
      class="mySwiper2"
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }"
    >
      <!-- Slides manually written here (as you had them) -->
      <!-- example for one -->
      <swiper-slide>
        <div class="carousel-cell hero-slider-1__item">
          <article class="hero-slider-1__entry entry">
            <div
              class="hero-slider-1__thumb-img-holder"
              :style="{backgroundImage: `url('${meghanTrainor}')`}"
            >
              <div class="bottom-gradient"></div>
            </div>
            <div class="hero-slider-1__thumb-text-holder">
              <div class="container">
                <h2 class="hero-slider-1__entry-title">
                  <a href="single-post-music.html">
                    Meghan Trainor and 'Queer Eye' Cast Team Up for Spotify
                    Takeover
                  </a>
                </h2>
              </div>
            </div>
          </article>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="carousel-cell hero-slider-1__item">
          <article class="hero-slider-1__entry entry">
            <div
              class="hero-slider-1__thumb-img-holder"
             :style="{backgroundImage: `url('${blackCouple}')`}"
            >
              <div class="bottom-gradient"></div>
            </div>
            <div class="hero-slider-1__thumb-text-holder">
              <div class="container">
                <h2 class="hero-slider-1__entry-title">
                  <a href="single-post-music.html"
                    >WATCH Suprise Performance, Shoots Whiskey at Nashville’s
                    Bluebird Cafe</a
                  >
                </h2>
              </div>
            </div>
          </article>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="carousel-cell hero-slider-1__item">
          <article class="hero-slider-1__entry entry">
            <div
              class="hero-slider-1__thumb-img-holder"
             :style="{backgroundImage: `url('${concert}')`}"
            >
              <div class="bottom-gradient"></div>
            </div>
            <div class="hero-slider-1__thumb-text-holder">
              <div class="container">
                <h2 class="hero-slider-1__entry-title">
                  <a href="single-post-music.html"
                    >'American Idol': How the Show's Inclusive New Season
                    Reflects the Country's Progress</a
                  >
                </h2>
              </div>
            </div>
          </article>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="carousel-cell hero-slider-1__item">
          <article class="hero-slider-1__entry entry">
            <div
              class="hero-slider-1__thumb-img-holder"
              :style="{backgroundImage: `url('${guitarist}')`}"
            >
              <div class="bottom-gradient"></div>
            </div>
            <div class="hero-slider-1__thumb-text-holder">
              <div class="container">
                <h2 class="hero-slider-1__entry-title">
                  <a href="single-post-music.html"
                    >Jack, Chris &amp; More to Headline 2018 Pilgrimage
                    Festival</a
                  >
                </h2>
              </div>
            </div>
          </article>
        </div>
      </swiper-slide>

      <!-- Add remaining SwiperSlides manually as needed -->
    </swiper>

    <!-- Thumbs Swiper -->
    <div class="carousel-thumbs-holder">
      <div class="container"  >
        <swiper
          @swiper="setThumbsSwiper"
          :loop="true"
          :spaceBetween="10"
          :slidesPerView="4"
          :freeMode="true"
          :watchSlidesProgress="true"
          :modules="modules"
          class="mySwiper"
          id="swiper-slides"
         
        >
          <swiper-slide v-for="(thumb, index) in thumbsSwiperData" :key="index">
            <div class="carousel-cell">
              <div class="carousel-thumbs__item">
                <div class="carousel-thumbs__img-holder">
                  <img :src="thumb.image" alt="thumb" />
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<style scoped>
#swiper-slides{
  max-width: 594px;
  margin: auto;
  padding: 5px;
  position : absolute;
  top: 50px;
  left: 50%;
  transform: translate(-50%, -50%);

  
  
}
</style>