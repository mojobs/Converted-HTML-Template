<script setup>
import jeans from "@/assets/img/content/grid/grid_post_15.jpg";
import blackLady from "@/assets/img/content/grid/grid_post_16.jpg";
import whiteLady from "@/assets/img/content/grid/grid_post_17.jpg";

//Import for the shopping picks content
import indianWomen from "@/assets/img/content/list/list_post_7.jpg";
import jeansAndBag from "@/assets/img/content/list/list_post_8.jpg";
import hairwoman from "@/assets/img/content/list/list_post_9.jpg";
import frenchCouple from "@/assets/img/content/list/list_post_10.jpg";
import officeWoman from "@/assets/img/content/list/list_post_11.jpg";
import gayDude from "@/assets/img/content/list/list_post_12.jpg";
const latestNewsData = [
  {
    image: jeans,
    text: "7 Ways to Make a Jeans-and-Tee Outfit Look Different Each Time",
  },
  {
    image: blackLady,
    text: "The Self-Portrait Dress That We'll All Want in Six Months Time",
  },
  {
    image: whiteLady,
    text: "We've Found It: The Most Sophisticated Bridal Lingerie Ever",
  },
];

const shoppingPicks = [
  {
    image: indianWomen,
    text: "H&M's Spring Collection Has Just Landed, and It's Giving Us Life",
  },
  {
    image: jeansAndBag,
    text: "Tomi Slim-Fit Cotton Drawstring Trousers",
  },
  {
    image: hairwoman,
    text: "Why Hair Essences Are The Next Big Thing",
  },
  {
    image: frenchCouple,
    text: "Where to Buy Olivia Palermo’s Favourite Leather Jacket",
  },
  {
    image: officeWoman,
    text: "The Color Every Celebrity Will Be Wearing",
  },
  {
    image: gayDude,
    text: "A Celebrity Guide to Wearing White Denim",
  }
];
</script>

<template>
  <div class="main-container container pt-40" id="main-container">
    <!-- Letest News -->
    <section class="section mb-16">
      <div class="title-wrap">
        <h3 class="section-title">Latest News</h3>
      </div>
      <div class="row card-row">
        <div class="col-md-4" v-for="data in latestNewsData">
          <article class="entry card card--1">
            <div class="entry__img-holder card__img-holder">
              <a href="single-post-fashion.html">
                <div class="thumb-container thumb-70">
                  <img
                    :data-src="data.image"
                    src="@/assets/img/empty.png"
                    class="entry__img lazyload"
                    alt=""
                  />
                </div>
              </a>
            </div>

            <div class="entry__body card__body">
              <div class="entry__header">
                <ul class="entry__meta">
                  <li class="entry__meta-category">
                    <a href="#">Trends</a>
                  </li>
                  <li class="entry__meta-date">5 Days Ago</li>
                </ul>
                <h2 class="entry__title">
                  <a href="single-post-fashion.html">{{ data.text }}</a>
                </h2>
                <ul class="entry__meta">
                  <li class="entry__meta-author">
                    <span>by</span>
                    <a href="#">DeoThemes</a>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
    <!-- end latest news -->

    <!-- Content -->
    <div class="row">
      <!-- Posts -->
      <div class="col-lg-8 blog__content mb-48">
        <!-- Shopping Picks -->
        <div class="title-wrap">
          <h3 class="section-title">Shopping Picks</h3>
        </div>
        <div class="content-box">
          <section class="section mb-0">
            <article class="entry card post-list" v-for="data in shoppingPicks">
              <div
                class="entry__img-holder post-list__img-holder card__img-holder"
                :style="{backgroundImage : `url('${data.image}')`}"
              >
                <a href="single-post-fashion.html" class="thumb-url"></a>
                <img
                  :src="data.image"
                  alt=""
                  class="entry__img d-none"
                />
              </div>

              <div class="entry__body post-list__body card__body">
                <div class="entry__header">
                  <ul class="entry__meta">
                    <li class="entry__meta-category">
                      <a href="#">Trends</a>
                    </li>
                    <li class="entry__meta-date">5 Days Ago</li>
                  </ul>
                  <h2 class="entry__title">
                    <a href="single-post-fashion.html"
                      >{{ data.text }}</a
                    >
                  </h2>
                  <ul class="entry__meta">
                    <li class="entry__meta-author">
                      <span>by</span>
                      <a href="#">DeoThemes</a>
                    </li>
                  </ul>
                </div>
                <div class="entry__excerpt">
                  <p>
                    iPrice Group report offers insights on daily e-commerce
                    activity in the ...
                  </p>
                </div>
              </div>
            </article>
          </section>
        </div>
        <!-- end content box -->
      </div>
      <!-- end posts -->

      <!-- Sidebar -->
      <aside class="col-lg-4 sidebar sidebar--right">
        <!-- Widget Newsletter -->
        <aside class="widget widget_mc4wp_form_widget">
          <h4 class="widget-title">Newsletter</h4>
          <p class="newsletter__text">
            <i class="ui-email newsletter__icon"></i>
            Subscribe for our daily news
          </p>
          <form class="mc4wp-form" method="post">
            <div class="mc4wp-form-fields">
              <div class="form-group">
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Your email"
                  required
                />
              </div>
              <div class="form-group">
                <input
                  type="submit"
                  class="btn btn-lg btn-color"
                  value="Sign Up"
                />
              </div>
            </div>
          </form>
        </aside>
        <!-- end widget newsletter -->

        <!-- Widget Socials -->
        <aside class="widget widget-socials text-center">
          <div class="socials socials--rounded socials--large">
            <a
              class="social social-facebook"
              href="#"
              title="facebook"
              target="_blank"
              aria-label="facebook"
            >
              <i class="ui-facebook"></i> </a
            ><!--
        --><a
              class="social social-twitter"
              href="#"
              title="twitter"
              target="_blank"
              aria-label="twitter"
            >
              <i class="ui-twitter"></i> </a
            ><!--
        --><a
              class="social social-youtube"
              href="#"
              title="youtube"
              target="_blank"
              aria-label="youtube"
            >
              <i class="ui-youtube"></i>
            </a>
            <a
              class="social social-google-plus"
              href="#"
              title="google"
              target="_blank"
              aria-label="google"
            >
              <i class="ui-google"></i> </a
            ><!--
        --><a
              class="social social-instagram"
              href="#"
              title="instagram"
              target="_blank"
              aria-label="instagram"
            >
              <i class="ui-instagram"></i> </a
            ><!--
        --><a
              class="social social-rss"
              href="#"
              title="rss"
              target="_blank"
              aria-label="rss"
            >
              <i class="ui-rss"></i>
            </a>
          </div>
        </aside>
        <!-- end widget socials -->

        <!-- Widget Latest Videos -->
        <aside class="widget widget-latest-videos">
          <h4 class="widget-title">Latest Videos</h4>
          <article class="entry">
            <div class="entry__img-holder">
              <a href="single-post-fashion.html">
                <div class="thumb-container thumb-50">
                  <img
                    data-src="@/assets/img/content/grid/grid_post_18.jpg"
                    src="@/assets/img/empty.png"
                    class="entry__img lazyload"
                    alt=""
                  />
                </div>
              </a>
              <div class="entry__play-time"><i class="ui-play"></i>3:21</div>
            </div>
            <div class="entry__body">
              <div class="entry__header">
                <h2 class="entry__title">
                  <a href="single-post-fashion.html"
                    >9 Elegant Wedding-Guest Outfit Ideas You Can Always Rely
                    Upon</a
                  >
                </h2>
              </div>
            </div>
          </article>
          <article class="entry">
            <div class="entry__img-holder">
              <a href="single-post-fashion.html">
                <div class="thumb-container thumb-50">
                  <img
                    data-src="@/assets/img/content/grid/grid_post_19.jpg"
                    src="@/assets/img/empty.png"
                    class="entry__img lazyload"
                    alt=""
                  />
                </div>
              </a>
              <div class="entry__play-time"><i class="ui-play"></i>3:21</div>
            </div>
            <div class="entry__body">
              <div class="entry__header">
                <h2 class="entry__title">
                  <a href="single-post-fashion.html"
                    >Amazing Workwear Buys to Realise Your Office Attire
                    Goals</a
                  >
                </h2>
              </div>
            </div>
          </article>
          <article class="entry">
            <div class="entry__img-holder">
              <a href="single-post-fashion.html">
                <div class="thumb-container thumb-50">
                  <img
                    data-src="@/assets/img/content/grid/grid_post_20.jpg"
                    src="@/assets/img/empty.png"
                    class="entry__img lazyload"
                    alt=""
                  />
                </div>
              </a>
              <div class="entry__play-time"><i class="ui-play"></i>3:21</div>
            </div>
            <div class="entry__body">
              <div class="entry__header">
                <h2 class="entry__title">
                  <a href="single-post-fashion.html"
                    >Showcase Individuality—so Why Is It Creating a outfit?</a
                  >
                </h2>
              </div>
            </div>
          </article>
        </aside>
        <!-- end widget latest videos -->

        <!-- Widget Instagram -->
        <aside class="widget widget-instagram">
          <h4 class="widget-title">Instagram Feed</h4>
          <ul class="widget-instagram__list clearfix">
            <li>
              <a href="#"
                ><img src="@/assets/img/content/instagram/1_small.jpg" alt=""
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="@/assets/img/content/instagram/2_small.jpg" alt=""
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="@/assets/img/content/instagram/3_small.jpg" alt=""
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="@/assets/img/content/instagram/4_small.jpg" alt=""
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="@/assets/img/content/instagram/5_small.jpg" alt=""
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="@/assets/img/content/instagram/6_small.jpg" alt=""
              /></a>
            </li>
          </ul>
        </aside>
        <!-- end widget instagram -->

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
  </div>
  <!-- end main container -->
</template>
