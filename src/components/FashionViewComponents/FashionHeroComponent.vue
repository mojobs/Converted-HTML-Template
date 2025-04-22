<script setup>
import orangeWoman from "@/assets/img/content/post_small/post_small_23.jpg";
import whiteWoman from "@/assets/img/content/post_small/post_small_24.jpg";

const topNewsData = [
  {
    text: "The Over-50 Women Showing Us All How It's Done on Instagram",
    image: orangeWoman,
  },
  {
    text : 'Fendi’s Biggest Front Row Surprise? Social Media’s Most Popular Twins',
    image : whiteWoman
  }
];
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="row row-24">
        <div class="col-xl-7">
          <!-- Large post -->
          <div class="hero__item">
            <article class="entry">
              <div class="entry__img-holder">
                <a href="single-post-fashion.html">
                  <img
                    src="@/assets/img/content/hero/hero_post_6.jpg"
                    alt=""
                    class="entry__img"
                  />
                </a>
              </div>

              <div class="entry__body">
                <ul class="entry__meta">
                  <li class="entry__meta-category">
                    <a href="#">Trends</a>
                  </li>
                  <li class="entry__meta-date">5 Days Ago</li>
                </ul>
                <h2 class="entry__title">
                  <a href="single-post-fashion.html"
                    >At Prada, Supermodels, Virtual Models, and a History-Making
                    Moment</a
                  >
                </h2>
              </div>
            </article>
          </div>
          <!-- end large post -->
        </div>
        <!-- end col -->

        <div class="col-xl-5">
          <h4 class="widget-title">Top News</h4>
          <ul class="post-list-small post-list-small--2 mb-32">
            <li class="post-list-small__item" v-for="data in topNewsData">
              <article class="post-list-small__entry clearfix">
                <div class="post-list-small__img-holder">
                  <div class="thumb-container thumb-70">
                    <a href="single-post-fashion.html">
                      <img
                        :data-src="data.image"
                        src="@/assets/img/empty.png"
                        alt=""
                        class="lazyload"
                      />
                    </a>
                  </div>
                </div>
                <div class="post-list-small__body">
                  <ul class="entry__meta">
                    <li class="entry__meta-category">
                      <a href="#">Trends</a>
                    </li>
                    <li class="entry__meta-date">5 Days Ago</li>
                  </ul>
                  <h3 class="post-list-small__entry-title">
                    <a href="single-post-fashion.html"
                      >{{ data.text }}</a
                    >
                  </h3>
                </div>
              </article>
            </li>
          </ul>
        </div>
        <!-- end col -->
      </div>
    </div>
  </section>
  <!-- end hero -->
</template>
