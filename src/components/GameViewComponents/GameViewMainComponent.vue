<script setup>

import coolRacoon from '@/assets/img/content/grid/grid_post_21.jpg'
import finalFantasy from '@/assets/img/content/post_small/post_small_25.jpg'
import daysGone from '@/assets/img/content/post_small/post_small_26.jpg'
import stalker from '@/assets/img/content/grid/grid_post_22.jpg'
import coop from '@/assets/img/content/post_small/post_small_27.jpg'
import yakuza6 from '@/assets/img/content/post_small/post_small_28.jpg'
import horizonZeroDawn from '@/assets/img/content/grid/grid_post_23.jpg'
import farCry5 from '@/assets/img/content/post_small/post_small_29.jpg'
import kingdomHearts from '@/assets/img/content/post_small/post_small_30.jpg'
import softwarePiracy from '@/assets/img/content/grid/grid_post_24.jpg'
import spiderman from '@/assets/img/content/post_small/post_small_31.jpg'
import redDeadRedemption from '@/assets/img/content/post_small/post_small_32.jpg'
import xboxVirtual from '@/assets/img/content/grid/grid_post_25.jpg'
import cuphead from '@/assets/img/content/post_small/post_small_33.jpg'
import legendOfZelda from '@/assets/img/content/post_small/post_small_34.jpg'
import shrek2 from '@/assets/img/content/grid/grid_post_26.jpg'
import divinity from '@/assets/img/content/post_small/post_small_35.jpg'
import deepRock from '@/assets/img/content/post_small/post_small_36.jpg'

const newsByCategoryData = [
    {
        section : 'NEWS',
        gridtext : 'Top Upcoming Open World RPG Games of 2018 is quickly approaching',
        gridImage : coolRacoon,
        smallImage1Text : "'Final Fantasy XV' DLC roadmap news: Plan for expansions to extend until 2019",
        smallImage1 : finalFantasy,
        smallImage2Text : "Days Gone Gamepley Demo Shows Motorcycle Rides, Brutal Fights",
        smallImage2 : daysGone
    },
    {
        section : 'REVIEWS',
        gridtext : 'Tracing The Lineage Of S.T.A.L.K.E.R.: Shadow Of Chernobyl',
        gridImage : stalker,
        smallImage1Text : "The Uncompromising Vision Of Co-op Title A Way Out",
        smallImage1 : coop,
        smallImage2Text : "Sega accidentally released a glitched demo of Yakuza 6",
        smallImage2 : yakuza6
    },
    {
        section : 'PS4',
        gridtext : 'Why Horizon Zero Dawn is my game of the year received surprisingly positive reviews',
        gridImage : horizonZeroDawn,
        smallImage1Text : "‘Far Cry 5’ evolves the franchise without trying to fix anything that wasn’t broken",
        smallImage1 : farCry5,
        smallImage2Text : "Kingdom Hearts 3 Trailer Shows Monsters Inc. World",
        smallImage2 : kingdomHearts
    },
    {
        section : 'VIDEOS',
        gridtext : "Software piracy with Rare's Sea of Thieves: Hands-on E3 preview",
        gridImage : softwarePiracy,
        smallImage1Text : "With a mix of dynamic stealth and high-flying action, Spider-Man",
        smallImage1 : spiderman,
        smallImage2Text : "Today is filled with details about Red Dead Redemption II.",
        smallImage2 : redDeadRedemption
    },
    {
        section : 'XBOX',
        gridtext : "Enjoy the power to create and control people in a virtual world where there are no rules",
        gridImage : xboxVirtual,
        smallImage1Text : "Cuphead was the clear winner, gathering nearly half of the votes. At 49 percent",
        smallImage1 : cuphead,
        smallImage2Text : "Best Nintendo Game – The Legend of Zelda: Breath of the Wild",
        smallImage2 : legendOfZelda
    },
    {
        section : 'PC',
        gridtext : "What to do when Virgil isn’t in his cave during “The Glowing Sea”",
        gridImage : shrek2,
        smallImage1Text : "Best PC Exclusive – Divinity: Original Sin II",
        smallImage1 : divinity,
        smallImage2Text : "Deep Rock Galactic Is A Cooperative Blast",
        smallImage2 : deepRock
    }
]
</script>




<template>
  <div class="main-container container pt-24" id="main-container">
    <!-- Ad Banner 970 -->
    <div class="text-center pb-48">
      <a href="#">
        <img src="@/assets/img/content/placeholder_970.jpg" alt="" />
      </a>
    </div>

    <!-- Content -->
    <div class="row">
      <!-- Posts -->
      <div class="col-lg-8 blog__content">
        <!-- News by Categories -->
        <section class="section mb-16">
          <div class="title-wrap">
            <h3 class="section-title">news by categories</h3>
          </div>

          <div class="row">
            <div class="col-md-6" v-for="data in newsByCategoryData">
              <article class="entry">
                <ul class="entry__meta">
                  <li class="entry__meta-category">
                    <a href="#">{{ data.section}}</a>
                  </li>
                </ul>
                <div class="entry__img-holder">
                  <a href="single-post-games.html">
                    <div class="thumb-container thumb-75">
                      <img
                        :data-src="data.gridImage"
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
                      <a href="single-post-games.html"
                        >{{ data.gridtext }}</a
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
              <ul class="post-list-small post-list-small--3">
                <li class="post-list-small__item">
                  <article class="post-list-small__entry clearfix">
                    <div class="post-list-small__img-holder">
                      <div class="thumb-container thumb-80">
                        <a href="single-post-games.html">
                          <img
                            :data-src="data.smallImage1"
                            src="@/assets/img/empty.png"
                            alt=""
                            class="lazyload"
                          />
                        </a>
                      </div>
                    </div>
                    <div class="post-list-small__body">
                      <h3 class="post-list-small__entry-title">
                        <a href="single-post-games.html"
                          >{{ data.smallImage1Text }}</a
                        >
                      </h3>
                      <ul class="entry__meta">
                        <li class="entry__meta-author">
                          <span>by</span>
                          <a href="#">DeoThemes</a>
                        </li>
                        <li class="entry__meta-date">Jan 21, 2018</li>
                      </ul>
                    </div>
                  </article>
                </li>
                <li class="post-list-small__item">
                  <article class="post-list-small__entry clearfix">
                    <div class="post-list-small__img-holder">
                      <div class="thumb-container thumb-80">
                        <a href="single-post-games.html">
                          <img
                            :data-src="data.smallImage2"
                            src="@/assets/img/empty.png"
                            alt=""
                            class="lazyload"
                          />
                        </a>
                      </div>
                    </div>
                    <div class="post-list-small__body">
                      <h3 class="post-list-small__entry-title">
                        <a href="single-post-games.html"
                        >{{ data.smallImage2Text }}</a
                        >
                      </h3>
                      <ul class="entry__meta">
                        <li class="entry__meta-author">
                          <span>by</span>
                          <a href="#">DeoThemes</a>
                        </li>
                        <li class="entry__meta-date">Jan 21, 2018</li>
                      </ul>
                    </div>
                  </article>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <!-- end news by categories -->
      </div>
      <!-- end posts -->

      <!-- Sidebar -->
      <aside class="col-lg-4 sidebar sidebar--right">
        <!-- Widget Socials -->
        <aside class="widget widget-socials">
          <h4 class="widget-title">Let's hang out on social</h4>
          <div class="socials socials--wide socials--large">
            <div class="row row-16">
              <div class="col">
                <a
                  class="social social-facebook"
                  href="#"
                  title="facebook"
                  target="_blank"
                  aria-label="facebook"
                >
                  <i class="ui-facebook"></i>
                  <span class="social__text">Facebook</span> </a
                ><!--
            --><a
                  class="social social-twitter"
                  href="#"
                  title="twitter"
                  target="_blank"
                  aria-label="twitter"
                >
                  <i class="ui-twitter"></i>
                  <span class="social__text">Twitter</span> </a
                ><!--
            --><a
                  class="social social-youtube"
                  href="#"
                  title="youtube"
                  target="_blank"
                  aria-label="youtube"
                >
                  <i class="ui-youtube"></i>
                  <span class="social__text">Youtube</span>
                </a>
              </div>
              <div class="col">
                <a
                  class="social social-google-plus"
                  href="#"
                  title="google"
                  target="_blank"
                  aria-label="google"
                >
                  <i class="ui-google"></i>
                  <span class="social__text">Google+</span> </a
                ><!--
            --><a
                  class="social social-instagram"
                  href="#"
                  title="instagram"
                  target="_blank"
                  aria-label="instagram"
                >
                  <i class="ui-instagram"></i>
                  <span class="social__text">Instagram</span> </a
                ><!--
            --><a
                  class="social social-rss"
                  href="#"
                  title="rss"
                  target="_blank"
                  aria-label="rss"
                >
                  <i class="ui-rss"></i>
                  <span class="social__text">Rss</span>
                </a>
              </div>
            </div>
          </div>
        </aside>
        <!-- end widget socials -->

        <!-- Widget Popular Posts -->
        <aside class="widget widget-popular-posts">
          <h4 class="widget-title">Top Picks</h4>
          <ul class="post-list-small">
            <li class="post-list-small__item">
              <article class="post-list-small__entry clearfix">
                <div class="post-list-small__img-holder">
                  <div class="thumb-container thumb-100">
                    <a href="single-post-games.html">
                      <img
                        data-src="@/assets/img/content/post_small/post_small_37.jpg"
                        src="@/assets/img/empty.png"
                        alt=""
                        class="post-list-small__img--rounded lazyload"
                      />
                    </a>
                  </div>
                </div>
                <div class="post-list-small__body">
                  <h3 class="post-list-small__entry-title">
                    <a href="single-post-games.html"
                      >Follow These Smartphone Habits of Successful
                      Entrepreneurs</a
                    >
                  </h3>
                  <ul class="entry__meta">
                    <li class="entry__meta-author">
                      <span>by</span>
                      <a href="#">DeoThemes</a>
                    </li>
                    <li class="entry__meta-date">Jan 21, 2018</li>
                  </ul>
                </div>
              </article>
            </li>
            <li class="post-list-small__item">
              <article class="post-list-small__entry clearfix">
                <div class="post-list-small__img-holder">
                  <div class="thumb-container thumb-100">
                    <a href="single-post-games.html">
                      <img
                        data-src="@/assets/img/content/post_small/post_small_38.jpg"
                        src="@/assets/img/empty.png"
                        alt=""
                        class="post-list-small__img--rounded lazyload"
                      />
                    </a>
                  </div>
                </div>
                <div class="post-list-small__body">
                  <h3 class="post-list-small__entry-title">
                    <a href="single-post-games.html"
                      >Lose These 12 Bad Habits If You're Serious About Becoming
                      a Millionaire</a
                    >
                  </h3>
                  <ul class="entry__meta">
                    <li class="entry__meta-author">
                      <span>by</span>
                      <a href="#">DeoThemes</a>
                    </li>
                    <li class="entry__meta-date">Jan 21, 2018</li>
                  </ul>
                </div>
              </article>
            </li>
            <li class="post-list-small__item">
              <article class="post-list-small__entry clearfix">
                <div class="post-list-small__img-holder">
                  <div class="thumb-container thumb-100">
                    <a href="single-post-games.html">
                      <img
                        data-src="@/assets/img/content/post_small/post_small_39.jpg"
                        src="@/assets/img/empty.png"
                        alt=""
                        class="post-list-small__img--rounded lazyload"
                      />
                    </a>
                  </div>
                </div>
                <div class="post-list-small__body">
                  <h3 class="post-list-small__entry-title">
                    <a href="single-post-games.html"
                      >June in Africa: Taxi wars, smarter cities and increased
                      investments</a
                    >
                  </h3>
                  <ul class="entry__meta">
                    <li class="entry__meta-author">
                      <span>by</span>
                      <a href="#">DeoThemes</a>
                    </li>
                    <li class="entry__meta-date">Jan 21, 2018</li>
                  </ul>
                </div>
              </article>
            </li>
            <li class="post-list-small__item">
              <article class="post-list-small__entry clearfix">
                <div class="post-list-small__img-holder">
                  <div class="thumb-container thumb-100">
                    <a href="single-post-games.html">
                      <img
                        data-src="@/assets/img/content/post_small/post_small_40.jpg"
                        src="@/assets/img/empty.png"
                        alt=""
                        class="post-list-small__img--rounded lazyload"
                      />
                    </a>
                  </div>
                </div>
                <div class="post-list-small__body">
                  <h3 class="post-list-small__entry-title">
                    <a href="single-post-games.html"
                      >PUBG Desert Map Finally Revealed, Here Are All The
                      Details</a
                    >
                  </h3>
                  <ul class="entry__meta">
                    <li class="entry__meta-author">
                      <span>by</span>
                      <a href="#">DeoThemes</a>
                    </li>
                    <li class="entry__meta-date">Jan 21, 2018</li>
                  </ul>
                </div>
              </article>
            </li>
          </ul>
        </aside>
        <!-- end widget popular posts -->

        <!-- Widget Reviews -->
        <aside class="widget widget-review-posts">
          <h4 class="widget-title">Game Reviews</h4>
          <article class="entry">
            <div class="entry__img-holder">
              <a href="single-post-games.html">
                <div class="thumb-container thumb-60">
                  <img
                    data-src="@/assets/img/content/review/review_post_3.jpg"
                    src="@/assets/img/empty.png"
                    class="entry__img lazyload"
                    alt=""
                  />
                  <span class="entry-score">9.2</span>
                </div>
              </a>
            </div>

            <div class="entry__body">
              <div class="entry__header">
                <h2 class="entry__title">
                  <a href="single-post-games.html"
                    >Deep Rock Galactic Is A Cooperative Blast</a
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
          <article class="entry">
            <div class="entry__img-holder">
              <a href="single-post-games.html">
                <div class="thumb-container thumb-60">
                  <img
                    data-src="@/assets/img/content/review/review_post_4.jpg"
                    src="@/assets/img/empty.png"
                    class="entry__img lazyload"
                    alt=""
                  />
                  <span class="entry-score">8.9</span>
                </div>
              </a>
            </div>

            <div class="entry__body">
              <div class="entry__header">
                <h2 class="entry__title">
                  <a href="single-post-games.html"
                    >With a mix of dynamic stealth and high-flying action,
                    Spider-Man</a
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
          <article class="entry">
            <div class="entry__img-holder">
              <a href="single-post-games.html">
                <div class="thumb-container thumb-60">
                  <img
                    data-src="@/assets/img/content/review/review_post_5.jpg"
                    src="@/assets/img/empty.png"
                    class="entry__img lazyload"
                    alt=""
                  />
                  <span class="entry-score">8.5</span>
                </div>
              </a>
            </div>

            <div class="entry__body">
              <div class="entry__header">
                <h2 class="entry__title">
                  <a href="single-post-games.html"
                    >With a mix of dynamic stealth and high-flying action,
                    Spider-Man</a
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

          <button class="btn btn-lg btn-light btn-wide load-more">
            <span>Load More <i class="ui-arrow-down"></i></span>
          </button>
        </aside>
        <!-- end widget reviews -->
      </aside>
      <!-- end sidebar -->
    </div>
    <!-- end content -->
  </div>
  <!-- end main container -->
</template>
