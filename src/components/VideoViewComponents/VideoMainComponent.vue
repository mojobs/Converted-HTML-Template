<script setup>

import ringLight from '@/assets/img/content/thumb/thumb_post_5.jpg';
import money from "@/assets/img/content/review/review_post_1.jpg"

//Grid Imports
import grapes from "@/assets/img/content/grid/grid_post_27.jpg"
import waterfall from "@/assets/img/content/grid/grid_post_28.jpg"
import motherAndChild from "@/assets/img/content/grid/grid_post_29.jpg"
import blanketDog from "@/assets/img/content/grid/grid_post_30.jpg"
import workplace from "@/assets/img/content/grid/grid_post_31.jpg"
import sundress from "@/assets/img/content/grid/grid_post_32.jpg"


//SidebarImports
import watch from "@/assets/img/content/post_small/post_small_41.jpg"
import jedi from "@/assets/img/content/post_small/post_small_42.jpg"
import mac from "@/assets/img/content/post_small/post_small_43.jpg"
import ringlightMini from "@/assets/img/content/post_small/post_small_44.jpg"


const constantData = 'How to Bounce Back After a Business Venture Fails'
const gridPictureData = [grapes, waterfall, motherAndChild, blanketDog, workplace, sundress]
const recommendedData = [
  {image : watch,
    text : "Deep Rock Galactic Is A Cooperative Blast"
  },
  {image : jedi,
    text : "Deep Rock Galactic Is A Cooperative Blast"
  },
  {image : mac,
    text : "Amnesty says global superpowers are 'callously undermining the rights of millions'"
  },
  {image : ringlightMini,
    text : "Extreme Heat Waves Will Change How We Live. We’re Not Ready"
  }
]
</script>

<template>
  <!-- Ad Banner 728 -->
  <div class="text-center pt-48 pb-24">
    <a href="#">
      <img src="@/assets/img/content/placeholder_728.jpg" alt="" />
    </a>
  </div>

  <div class="main-container container pt-24" id="main-container">
    <!-- Content -->
    <div class="row">
      <!-- Posts -->
      <div class="col-lg-8 blog__content">
        <!-- Popular Videos -->
        <section class="section">
          <div class="title-wrap title-wrap--line">
            <h3 class="section-title">Popular Videos</h3>
          </div>

          <!-- Large Post -->
          <article class="entry thumb thumb--size-5 thumb--mb-20">
            <div
              class="entry__img-holder thumb__img-holder"
              :style="
                 {backgroundImage : `url('${ringLight}')`}"
            >
              <div class="bottom-gradient"></div>
              <div class="thumb-text-holder thumb-text-holder--3">
                <a
                  href="categories.html"
                  class="entry__meta-category entry__meta-category--label entry__meta-category--violet"
                  >World</a
                >
                <h2 class="thumb-entry-title">
                  <a href="single-post-videos.html"
                    >6 Personal Fears Holding You Back From Your Dream Career</a
                  >
                </h2>
                <div class="entry__meta-holder">
                  <ul class="entry__meta">
                    <li class="entry__meta-author">
                      <span>by</span>
                      <a href="#">DeoThemes</a>
                    </li>
                    <li class="entry__meta-date">Jan 21, 2018</li>
                  </ul>
                  <ul class="entry__meta">
                    <li class="entry__meta-views">
                      <i class="ui-eye"></i>
                      <span>1356</span>
                    </li>
                    <li class="entry__meta-comments">
                      <a href="#"> <i class="ui-chat-empty"></i>13 </a>
                    </li>
                  </ul>
                </div>
              </div>
              <a href="single-post-videos.html" class="thumb-url"></a>
            </div>
          </article>

          <div class="row row-20">
            <div class="col-md-4" v-for="data in gridPictureData">
              <article class="entry">
                <div class="entry__img-holder">
                  <a href="single-post-videos.html">
                    <div class="thumb-container thumb-65">
                      <img
                        :data-src="data"
                        src="@/assets/img/empty.png"
                        class="entry__img lazyload"
                        alt=""
                      />
                      <div class="play-btn"></div>
                    </div>
                  </a>
                </div>

                <div class="entry__body">
                  <div class="entry__header">
                    <h2 class="entry__title entry__title--sm">
                      <a href="single-post-videos.html"
                        >How to Bounce Back After a Business Venture Fails</a
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
                </div>
              </article>
            </div>
          </div>

          <!-- Load More -->
          <button class="btn btn-lg btn-stroke btn-wide load-more">
            <span>Load More <i class="ui-arrow-down"></i></span>
          </button>
        </section>
        <!-- end popular videos -->
      </div>
      <!-- end posts -->

      <!-- Sidebar -->
      <aside class="col-lg-4 sidebar sidebar--right">
        <!-- Widget Recommended (Rating) -->
        <aside class="widget widget-rating-posts">
          <h4 class="widget-title">Recommended</h4>
          <article class="entry">
            <div class="entry__img-holder">
              <a href="single-post-videos.html">
                <div class="thumb-container thumb-60">
                  <img
                    :data-src="money"
                    src="@/assets/img/empty.png"
                    class="entry__img lazyload"
                    alt=""
                  />
                </div>
              </a>
            </div>

            <div class="entry__body">
              <div class="entry__header">
                <h2 class="entry__title">
                  <a href="single-post-videos.html"
                    >UN’s WFP Building Up Blockchain-Based Payments System</a
                  >
                </h2>
                <ul class="entry__meta">
                  <li class="entry__meta-author">
                    <span>by</span>
                    <a href="#">DeoThemes</a>
                  </li>
                  <li class="entry__meta-date">Jan 21, 2018</li>
                </ul>
                <ul class="entry__meta">
                  <li class="entry__meta-rating">
                    <i class="ui-star"></i
                    ><!--
                      --><i class="ui-star"></i
                    ><!--
                      --><i class="ui-star"></i
                    ><!--
                      --><i class="ui-star"></i
                    ><!--
                      --><i class="ui-star-empty"></i>
                  </li>
                </ul>
              </div>
            </div>
          </article>
          <ul class="post-list-small post-list-small--2">
            <li class="post-list-small__item" v-for="data in recommendedData">
              <article class="post-list-small__entry clearfix">
                <div class="post-list-small__img-holder">
                  <div class="thumb-container thumb-70">
                    <a href="single-post-videos.html">
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
                  <h3 class="post-list-small__entry-title">
                    <a href="single-post-videos.html"
                      >{{ data.text }}</a
                    >
                  </h3>
                </div>
              </article>
            </li>
          </ul>
        </aside>
        <!-- end widget recommended (rating) -->

        <!-- Widget Ad 300 -->
        <aside class="widget widget_media_image">
          <a href="#">
            <img src="@/assets/img/content/placeholder_336.jpg" alt="" />
          </a>
        </aside>
        <!-- end widget ad 300 -->
      </aside>
      <!-- end sidebar -->
    </div>
    <!-- end content -->

    <!-- Carousel posts -->
    <section class="section mb-0">
      <div class="title-wrap title-wrap--line title-wrap--pr">
        <h3 class="section-title">featured videos</h3>
      </div>

      <!-- Slider -->
      <div
        id="owl-posts"
        class="owl-carousel owl-theme owl-carousel--arrows-outside"
      >
        <article class="entry thumb thumb--size-1">
          <div
            class="entry__img-holder thumb__img-holder"
            style="
              background-image: url('img/content/carousel/carousel_post_9.jpg');
            "
          >
            <div class="bottom-gradient"></div>
            <div class="thumb-text-holder">
              <h2 class="thumb-entry-title">
                <a href="single-post-videos.html"
                  >6 Personal Fears Holding You Back From Your Dream Career</a
                >
              </h2>
            </div>
            <a href="single-post-videos.html" class="thumb-url"></a>
          </div>
        </article>
        <article class="entry thumb thumb--size-1">
          <div
            class="entry__img-holder thumb__img-holder"
            style="
              background-image: url('img/content/carousel/carousel_post_10.jpg');
            "
          >
            <div class="bottom-gradient"></div>
            <div class="thumb-text-holder">
              <h2 class="thumb-entry-title">
                <a href="single-post-videos.html"
                  >Want to be More Successful? Go to Bed</a
                >
              </h2>
            </div>
            <a href="single-post-videos.html" class="thumb-url"></a>
          </div>
        </article>
        <article class="entry thumb thumb--size-1">
          <div
            class="entry__img-holder thumb__img-holder"
            style="
              background-image: url('img/content/carousel/carousel_post_11.jpg');
            "
          >
            <div class="bottom-gradient"></div>
            <div class="thumb-text-holder">
              <h2 class="thumb-entry-title">
                <a href="single-post-videos.html"
                  >Your Brand Plan Is More Important Than Your Business</a
                >
              </h2>
            </div>
            <a href="single-post-videos.html" class="thumb-url"></a>
          </div>
        </article>
        <article class="entry thumb thumb--size-1">
          <div
            class="entry__img-holder thumb__img-holder"
            style="
              background-image: url('img/content/carousel/carousel_post_12.jpg');
            "
          >
            <div class="bottom-gradient"></div>
            <div class="thumb-text-holder">
              <h2 class="thumb-entry-title">
                <a href="single-post-videos.html"
                  >6 Tell-Tale Signs You're Underpaid</a
                >
              </h2>
            </div>
            <a href="single-post-videos.html" class="thumb-url"></a>
          </div>
        </article>
        <article class="entry thumb thumb--size-1">
          <div
            class="entry__img-holder thumb__img-holder"
            style="
              background-image: url('img/content/carousel/carousel_post_10.jpg');
            "
          >
            <div class="bottom-gradient"></div>
            <div class="thumb-text-holder">
              <h2 class="thumb-entry-title">
                <a href="single-post-videos.html"
                  >Want to be More Successful? Go to Bed</a
                >
              </h2>
            </div>
            <a href="single-post-videos.html" class="thumb-url"></a>
          </div>
        </article>
      </div>
      <!-- end slider -->
    </section>
    <!-- end carousel posts -->
  </div>
  <!-- end main container -->
</template>
