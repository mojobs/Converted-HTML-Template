<style>
  .move-enter-from{
    transform: translateX(50px);
    opacity: 0;
  }
  .move-leave-to{
    transform: translateX(-50px);
    opacity: 1;
  }
  .move-leave-active, .move-enter-active{
transition: all 0.3s ease;
  }
</style>


<script setup>
import america from "@/assets/img/content/hero/hero_post_5.jpg";
import clock from "@/assets/img/content/grid/grid_post_7.jpg";
import pope from "@/assets/img/content/grid/grid_post_8.jpg";

// Images for Popular Posts sideBar
import obama from "@/assets/img/content/post_small/post_small_5.jpg";
import housing from "@/assets/img/content/post_small/post_small_6.jpg";
import warren from "@/assets/img/content/post_small/post_small_7.jpg";
import flags from "@/assets/img/content/post_small/post_small_8.jpg";
import rushmore from "@/assets/img/content/post_small/post_small_9.jpg";
import california from "@/assets/img/content/post_small/post_small_10.jpg";
import protest from "@/assets/img/content/post_small/post_small_11.jpg";
import heat from "@/assets/img/content/post_small/post_small_12.jpg";

//Imports for Political News Section
import painting from '@/assets/img/content/grid/grid_post_9.jpg'
import bigRushmore from '@/assets/img/content/grid/grid_post_10.jpg'
import office from '@/assets/img/content/grid/grid_post_11.jpg'
import trump from '@/assets/img/content/grid/grid_post_12.jpg'
import crudeoil from '@/assets/img/content/grid/grid_post_13.jpg'
import university from '@/assets/img/content/grid/grid_post_14.jpg'


//Imports for most Viewwed Section
import smallpainting from '@/assets/img/content/post_small/post_small_13.jpg'
import smallguitar from '@/assets/img/content/post_small/post_small_14.jpg'
import smallcrudeoil from '@/assets/img/content/post_small/post_small_15.jpg'
import statueofliberty from '@/assets/img/content/post_small/post_small_16.jpg'
import smallnewspaper from '@/assets/img/content/post_small/post_small_17.jpg'
import smalltrump from '@/assets/img/content/post_small/post_small_18.jpg'
import smalluniversity from '@/assets/img/content/post_small/post_small_19.jpg'
import smallocean from '@/assets/img/content/post_small/post_small_20.jpg'
import smallopera from '@/assets/img/content/post_small/post_small_21.jpg'
import smallprotest from '@/assets/img/content/post_small/post_small_22.jpg'

const popularPostData = [
  {
    text: "Barack Obama and Family Visit Balinese Paddy Fields",
    image: obama,
  },
  {
    text: "Liberals to outline long-term Indigenous housing plan in budge",
    image: housing,
  },
  {
    text: "5 Pieces of Hard-Won Wisdom From Billionaire Warren Buffett",
    image: warren,
  },
  {
    text: "Liberals to outline long-term Indigenous housing plan in budge",
    image: flags,
  },
  {
    text: "This Secret Room In Mount Rushmore Is Having A Moment",
    image: rushmore,
  },
  {
    text: "California Democrats' snub of party icon Dianne Feinstein",
    image: california,
  },
  {
    text: "How To Find Protests In Your City When You Don’t Know Where To Start",
    image: protest,
  },
  {
    text: "Extreme Heat Waves Will Change How We Live. We’re Not Ready",
    image: heat,
  },
];

const headlineData = [
  {
    key: 1,
    text: "It's not a concentration camp: Bangladesh defends plan to house Rohingya on island with armed police",
  },
  {
    key: 2,
    text: "Saudi Arabia to build opera house in bid to shed conservative image, lure tourists",
  },
  { key: 3, text: "SpaceX launches experimental Starlink internet satellites" },
  {
    key: 4,
    text: "Canada seeks to get more women into UN peacekeeping operations",
  },
  {
    key: 5,
    text: "Ford North America president out after inappropriate behaviour",
  },
  {
    key: 6,
    text: "More than 90 Nigerian schoolgirls feared missing after Boko Haram attack video",
  },
  {
    key: 7,
    text: "Countries move too slowly against corruption, watchdog group says",
  },
  {
    key: 8,
    text: "U.S. Embassy targeted in Montenegro, attacker kills only himself",
  },
  {
    key: 9,
    text: "Amnesty says global superpowers are 'callously undermining the rights of millions'",
  },
  {
    key: 10,
    text: "U.S. Embassy targeted in Montenegro, attacker kills only himself",
  },
];

const mostViewedData = [
  {text : 'It\'s not a concentration camp\': Bangladesh defends plan to house Rohingya on island with armed police',
    image : smallpainting
  },
  {text : '5 Pieces of Hard-Won Wisdom From Billionaire Warren Buffett',
    image : smallguitar
  },
  {text : 'Amnesty says global superpowers are \'callously undermining the rights of millions\'',
    image : smallcrudeoil
  },
  {text : 'Extreme Heat Waves Will Change How We Live. We’re Not Ready',
    image : statueofliberty
  },
  {text : 'Liberals to outline long-term Indigenous housing plan in budge',
    image : smallnewspaper
  },
]

const mostViewedDatatwo = [
{text : 'Donald Trump and Family Visit Balinese Paddy Fields During Vacation',
    image : smalltrump
  },
  {text : 'More than 90 Nigerian schoolgirls feared missing after Boko Haram attack video',
    image : smalluniversity
  },
  {text : 'How To Find Protests In Your City When You Don’t Know Where To Start',
    image : smallocean
  },
  {text : 'Saudi Arabia to build opera house in bid to shed conservative image, lure tourists California Democrats\' snub of party icon Dianne Feinstein',
  image : smallopera
  },
  {text : '\'California Democrats\' snub of party icon Dianne Feinstein',
  image : smallprotest
  },
]
</script>

<template>
  <div class="main-container container" id="main-container">
    <!-- Content -->
    <div class="row row-20">
      <!-- Posts -->
      <div class="col-lg-6 order-lg-2">
        <section class="section mb-16">
          <article class="entry thumb thumb--size-3 thumb--mb-20">
            <div
              class="entry__img-holder thumb__img-holder"
              :style="{ backgroundImage: `url('${america}')` }"
            >
              <div class="bottom-gradient"></div>
              <div class="thumb-text-holder thumb-text-holder--2">
                <ul class="entry__meta">
                  <li>
                    <a href="#" class="entry__meta-category">politics</a>
                  </li>
                </ul>
                <h2 class="thumb-entry-title">
                  <a href="single-post-politics.html"
                    >Trump endorses raising minimum age for more weapons,
                    revives idea of arming teachers</a
                  >
                </h2>
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
              <a href="single-post-politics.html" class="thumb-url"></a>
            </div>
          </article>
          <div class="row row-20">
            <div class="col-md-6">
              <article class="entry">
                <div class="entry__img-holder">
                  <a href="single-post-politics.html">
                    <div class="thumb-container thumb-65">
                      <img
                        :data-src="clock"
                        src="@/assets/img/empty.png"
                        class="entry__img lazyload"
                        alt=""
                      />
                    </div>
                  </a>
                </div>

                <div class="entry__body">
                  <div class="entry__header">
                    <ul class="entry__meta">
                      <li>
                        <a href="#" class="entry__meta-category">politics</a>
                      </li>
                    </ul>
                    <h2 class="entry__title">
                      <a href="single-post-politics.html"
                        >Trump endorses raising minimum age for more weapons,
                        revives idea of arming teachers</a
                      >
                    </h2>
                  </div>
                  <div class="entry__excerpt">
                    <p>
                      iPrice Group report offers insights on daily e-commerce
                      activity in the ...
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div class="col-md-6">
              <article class="entry">
                <div class="entry__img-holder">
                  <a href="single-post-politics.html">
                    <div class="thumb-container thumb-65">
                      <img
                        :data-src="pope"
                        src="@/assets/img/empty.png"
                        class="entry__img lazyload"
                        alt=""
                      />
                    </div>
                  </a>
                </div>

                <div class="entry__body">
                  <div class="entry__header">
                    <ul class="entry__meta">
                      <li>
                        <a href="#" class="entry__meta-category">politics</a>
                      </li>
                    </ul>
                    <h2 class="entry__title">
                      <a href="single-post-politics.html"
                        >Pope Francis's robe during the weekly general audience
                        at the Vatican</a
                      >
                    </h2>
                  </div>
                  <div class="entry__excerpt">
                    <p>
                      iPrice Group report offers insights on daily e-commerce
                      activity in the ...
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
      <!-- end posts -->

      <!-- Sidebar -->
      <aside class="col-lg-3 sidebar order-lg-1">
        <!-- Widget Headlines -->
        <aside class="widget widget-headlines">
          <h4 class="widget-title">More Headlines</h4>
          <!-- Slider -->
          <div
            id="owl-headlines"
            class="owl-carousel owl-theme owl-loaded owl-drag"
          >
            <div class="owl-stage-outer">
              <div class="owl-stage">
                <transition-group name="move">
                  <div class="owl-item">
                    <ul class="post-list-small post-list-small--1">
                      <li
                        class="post-list-small__item"
                        v-for="data in headlineData"
                        :key="data.key"
                      >
                        <article class="post-list-small__entry clearfix">                        <div class="post-list-small__body">
                            <h3 class="post-list-small__entry-title">
                              <a href="single-post-politics.html">{{
                                data.text
                              }}</a>
                            </h3>
                          </div>
                        </article>
                      </li>
                    </ul>
                  </div>
                </transition-group>
              </div>
            </div>
          </div>
          <!-- end slider -->

          <!-- Slider nav -->
          <div class="owl-custom-nav text-center">
            <button
              class="owl-custom-nav__btn owl-custom-nav__btn--prev"
              aria-label="previous slide"
            >
              <i class="ui-arrow-left"></i>
              <span class="owl-custom-nav__label">Prev</span>
            </button>
            <button
              class="owl-custom-nav__btn owl-custom-nav__btn--next"
              aria-label="next slide"
            >
              <span class="owl-custom-nav__label">Next</span>
              <i class="ui-arrow-right"></i>
            </button>
          </div>
        </aside>
        <!-- end widget headlines -->
      </aside>
      <!-- end sidebar -->

      <!-- Sidebar -->
      <aside class="col-lg-3 sidebar order-lg-3">
        <!-- Widget Popular Posts -->
        <aside class="widget widget-popular-posts">
          <h4 class="widget-title">Weekly Popular</h4>
          <ul class="post-list-small post-list-small--1">
            <li
              class="post-list-small__item"
              v-for="data in popularPostData"
              :key="data.image"
            >
              <article class="post-list-small__entry clearfix">
                <div class="post-list-small__img-holder">
                  <div class="thumb-container thumb-80">
                    <a href="single-post-politics.html">
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
                    <a href="single-post-politics.html">{{ data.text }}</a>
                  </h3>
                </div>
              </article>
            </li>
          </ul>
        </aside>
        <!-- end widget popular posts -->
      </aside>
      <!-- end sidebar -->
    </div>
    <!-- end content -->

    <!-- Ad Banner 728 -->
    <div class="text-center pb-48">
      <a href="#">
        <img src="@/assets/img/content/placeholder_728.jpg" alt="" />
      </a>
    </div>

    <!-- More Politics News -->
    <section class="section mb-24">
      <div class="title-wrap title-wrap--line">
        <h3 class="section-title">More Politics News</h3>
      </div>
      <div class="row row-20">
        <div class="col-md-3">
          <article class="entry">
            <div class="entry__img-holder">
              <a href="single-post-politics.html">
                <div class="thumb-container thumb-65">
                  <img
                    :data-src="painting"
                    src="@/assets/img/empty.png"
                    class="entry__img lazyload"
                    alt=""
                  />
                </div>
              </a>
            </div>

            <div class="entry__body">
              <div class="entry__header">
                <ul class="entry__meta">
                  <li>
                    <a href="#" class="entry__meta-category">politics</a>
                  </li>
                </ul>
                <h2 class="entry__title">
                  <a href="single-post-politics.html"
                    >'It's not a concentration camp': Bangladesh defends plan to
                    on island</a
                  >
                </h2>
              </div>
              <div class="entry__excerpt">
                <p>
                  iPrice Group report offers insights on daily e-commerce
                  activity in the ...
                </p>
              </div>
            </div>
          </article>
        </div>
        <div class="col-md-6">
          <article class="entry thumb thumb--size-3 thumb--mb-20">
            <div
              class="entry__img-holder thumb__img-holder"
            :style="{backgroundImage : `url('${bigRushmore}')`}"
            >
              <div class="bottom-gradient"></div>
              <div class="thumb-text-holder thumb-text-holder--2">
                <ul class="entry__meta">
                  <li>
                    <a href="#" class="entry__meta-category">politics</a>
                  </li>
                </ul>
                <h2 class="thumb-entry-title">
                  <a href="single-post-politics.html"
                    >This Secret Room In Mount Rushmore Is Having A Moment</a
                  >
                </h2>
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
              <a href="single-post-politics.html" class="thumb-url"></a>
            </div>
          </article>
        </div>
        <div class="col-md-3">
          <article class="entry">
            <div class="entry__img-holder">
              <a href="single-post-politics.html">
                <div class="thumb-container thumb-65">
                  <img
                    :data-src="office"
                    src="@/assets/img/empty.png"
                    class="entry__img lazyload"
                    alt=""
                  />
                </div>
              </a>
            </div>

            <div class="entry__body">
              <div class="entry__header">
                <ul class="entry__meta">
                  <li>
                    <a href="#" class="entry__meta-category">politics</a>
                  </li>
                </ul>
                <h2 class="entry__title">
                  <a href="single-post-politics.html"
                    >Saudi Arabia to build opera house in bid to shed
                    conservative image, lure tourists</a
                  >
                </h2>
              </div>
              <div class="entry__excerpt">
                <p>
                  iPrice Group report offers insights on daily e-commerce
                  activity in the ...
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="row row-20">
        <div class="col-md-6">
          <article class="entry thumb thumb--size-3 thumb--mb-20">
            <div
              class="entry__img-holder thumb__img-holder"
              :style="{backgroundImage : `url('${trump}')`}"
            >
              <div class="bottom-gradient"></div>
              <div class="thumb-text-holder thumb-text-holder--2">
                <ul class="entry__meta">
                  <li>
                    <a href="#" class="entry__meta-category">politics</a>
                  </li>
                </ul>
                <h2 class="thumb-entry-title">
                  <a href="single-post-politics.html"
                    >Trump endorses raising minimum age for more weapons,
                    revives idea of arming teachers</a
                  >
                </h2>
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
              <a href="single-post-politics.html" class="thumb-url"></a>
            </div>
          </article>
        </div>
        <div class="col-md-3">
          <article class="entry">
            <div class="entry__img-holder">
              <a href="single-post-politics.html">
                <div class="thumb-container thumb-65">
                  <img
                    :data-src="crudeoil"
                    src="@/assets/img/empty.png"
                    class="entry__img lazyload"
                    alt=""
                  />
                </div>
              </a>
            </div>

            <div class="entry__body">
              <div class="entry__header">
                <ul class="entry__meta">
                  <li>
                    <a href="#" class="entry__meta-category">politics</a>
                  </li>
                </ul>
                <h2 class="entry__title">
                  <a href="single-post-politics.html"
                    >Amnesty says global superpowers are 'callously undermining
                    the rights of millions'</a
                  >
                </h2>
              </div>
              <div class="entry__excerpt">
                <p>
                  iPrice Group report offers insights on daily e-commerce
                  activity in the ...
                </p>
              </div>
            </div>
          </article>
        </div>
        <div class="col-md-3">
          <article class="entry">
            <div class="entry__img-holder">
              <a href="single-post-politics.html">
                <div class="thumb-container thumb-65">
                  <img
                    :data-src="university"
                    src="@/assets/img/empty.png"
                    class="entry__img lazyload"
                    alt=""
                  />
                </div>
              </a>
            </div>

            <div class="entry__body">
              <div class="entry__header">
                <ul class="entry__meta">
                  <li>
                    <a href="#" class="entry__meta-category">politics</a>
                  </li>
                </ul>
                <h2 class="entry__title">
                  <a href="single-post-politics.html"
                    >More than 90 Nigerian schoolgirls feared missing after Boko
                    Haram attack video</a
                  >
                </h2>
              </div>
              <div class="entry__excerpt">
                <p>
                  iPrice Group report offers insights on daily e-commerce
                  activity in the ...
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
    <!-- end more politics news -->

    <!-- Carousel posts -->
    <section class="section mb-24">
      <div class="title-wrap title-wrap--line title-wrap--pr">
        <h3 class="section-title">insight &amp; analysis</h3>
      </div>

      <!-- Slider -->
      <div
        id="owl-posts"
        class="owl-carousel owl-theme owl-carousel--arrows-outside"
      >
        <article class="entry">
          <div class="entry__img-holder">
            <a href="single-post-politics.html">
              <div class="thumb-container thumb-65">
                <img
                  data-src="@/assets/img/content/carousel/carousel_post_5.jpg"
                  src="@/assets/img/empty.png"
                  class="entry__img lazyload"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div class="entry__body">
            <div class="entry__header">
              <ul class="entry__meta">
                <li>
                  <a href="#" class="entry__meta-category">david smith</a>
                </li>
              </ul>
              <h2 class="entry__title">
                <a href="single-post-politics.html"
                  >Federal budget to spend up to $1 billion on cybersecurity</a
                >
              </h2>
            </div>
          </div>
        </article>
        <article class="entry">
          <div class="entry__img-holder">
            <a href="single-post-politics.html">
              <div class="thumb-container thumb-65">
                <img
                  data-src="@/assets/img/content/carousel/carousel_post_6.jpg"
                  src="@/assets/img/empty.png"
                  class="entry__img lazyload"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div class="entry__body">
            <div class="entry__header">
              <ul class="entry__meta">
                <li>
                  <a href="#" class="entry__meta-category">elizabeth Green</a>
                </li>
              </ul>
              <h2 class="entry__title">
                <a href="single-post-politics.html"
                  >US Administration is Waging a Silent War on Asylum Seekers</a
                >
              </h2>
            </div>
          </div>
        </article>
        <article class="entry">
          <div class="entry__img-holder">
            <a href="single-post-politics.html">
              <div class="thumb-container thumb-65">
                <img
                  data-src="@/assets/img/content/carousel/carousel_post_7.jpg"
                  src="@/assets/img/empty.png"
                  class="entry__img lazyload"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div class="entry__body">
            <div class="entry__header">
              <ul class="entry__meta">
                <li>
                  <a href="#" class="entry__meta-category">john doe</a>
                </li>
              </ul>
              <h2 class="entry__title">
                <a href="single-post-politics.html"
                  >U.S. To Expel 60 Russian Foreign Service Officers</a
                >
              </h2>
            </div>
          </div>
        </article>
        <article class="entry">
          <div class="entry__img-holder">
            <a href="single-post-politics.html">
              <div class="thumb-container thumb-65">
                <img
                  data-src="@/assets/img/content/carousel/carousel_post_8.jpg"
                  src="@/assets/img/empty.png"
                  class="entry__img lazyload"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div class="entry__body">
            <div class="entry__header">
              <ul class="entry__meta">
                <li>
                  <a href="#" class="entry__meta-category">kathlyn wood</a>
                </li>
              </ul>
              <h2 class="entry__title">
                <a href="single-post-politics.html"
                  >John Bolton, North Korea and the Art of the Deal</a
                >
              </h2>
            </div>
          </div>
        </article>
        <article class="entry">
          <div class="entry__img-holder">
            <a href="single-post-politics.html">
              <div class="thumb-container thumb-65">
                <img
                  data-src="@/assets/img/content/carousel/carousel_post_6.jpg"
                  src="@/assets/img/empty.png"
                  class="entry__img lazyload"
                  alt=""
                />
              </div>
            </a>
          </div>
          <div class="entry__body">
            <div class="entry__header">
              <ul class="entry__meta">
                <li>
                  <a href="#" class="entry__meta-category">elizabeth Green</a>
                </li>
              </ul>
              <h2 class="entry__title">
                <a href="single-post-politics.html"
                  >US Administration is Waging a Silent War on Asylum Seekers</a
                >
              </h2>
            </div>
          </div>
        </article>
      </div>
      <!-- end slider -->
    </section>
    <!-- end carousel posts -->

    <!-- Most Viewed -->
    <section class="section mb-32">
      <div class="title-wrap title-wrap--line">
        <h3 class="section-title">Most Viewed</h3>
      </div>
      <div class="row">
        <div class="col-lg-4">
          <ul class="post-list-small post-list-small--2 mb-32">
            <li class="post-list-small__item" v-for="data in mostViewedData">
              <article class="post-list-small__entry clearfix">
                <div class="post-list-small__img-holder">
                  <div class="thumb-container thumb-70">
                    <a href="single-post-politics.html">
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
                    <a href="single-post-politics.html"
                      >{{ data.text }}</a
                    >
                  </h3>
                </div>
              </article>
            </li>
          </ul>
        </div>
        <div class="col-lg-4">
          <ul class="post-list-small post-list-small--2 mb-32">
            <li class="post-list-small__item" v-for="data in mostViewedDatatwo">
              <article class="post-list-small__entry clearfix">
                <div class="post-list-small__img-holder">
                  <div class="thumb-container thumb-70">
                    <a href="single-post-politics.html">
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
                    <a href="single-post-politics.html"
                      >{{ data.text }}</a
                    >
                  </h3>
                </div>
              </article>
            </li>
          </ul>
        </div>
        <div class="col-lg-4 text-right text-md-center">
          <a href="#">
            <img src="@/assets/img/content/placeholder_300_600.jpg" alt="" />
          </a>
        </div>
      </div>
    </section>
    <!-- end most viewed -->
  </div>
  <!-- end main container -->
</template>
