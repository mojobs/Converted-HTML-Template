<script setup>
import callOfDuty from "@/assets/img/content/hero/hero_post_7.jpg";
import theWitcher from "@/assets/img/content/hero/hero_post_8.jpg";
import shrek from "@/assets/img/content/hero/hero_post_9.jpg";
import virtualWorld from "@/assets/img/content/hero/hero_post_10.jpg";
import seaOfThieves from "@/assets/img/content/hero/hero_post_11.jpg";
import horizon from "@/assets/img/content/hero/hero_post_12.jpg";

const heroSliderData = [
  {
    text: "This year's battlefield is rumored to be set during World War 2",
    image: callOfDuty,
  },
  {
    text: "'The Witcher 3 : Wild Hunt' teases announcement with timer",
    image: theWitcher,
  },
  {
    text: "What to do when Virgil is not in his cave during 'The Glowing Sea'",
    image: shrek,
  },
  {
    text: "Enjoy the power to create and control people in a virtual world where there are no rules",
    image: virtualWorld,
  },
  {
    text: "Software Piracy with Rare's Sea of Thieves: Hands-on E3 preview",
    image: seaOfThieves,
  },
  {
    text: "Why Horizon Zero Dawn is my game of the year received suprisingly positive reviews",
    image: horizon,
  },
];
</script>

<template>
  <!-- Hero Slider -->
  <section class="hero-slider">
    <div id="owl-hero-slider" class="owl-carousel owl-theme">
      <div class="hero-slider__item" v-for="data in heroSliderData">
        <article class="entry thumb">
          <div
            class="entry__img-holder thumb__img-holder"
            :style="{backgroundImage : `url('${data.image}')`}"
          >
            <div class="bottom-gradient"></div>
            <div class="thumb-text-holder thumb-text-holder--2">
              <h2 class="thumb-entry-title">
                <a href="single-post-games.html"
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
            <a href="single-post-games.html" class="thumb-url"></a>
          </div>
        </article>
      </div>
    </div>
  </section>
  <!-- end hero slider -->
</template>
