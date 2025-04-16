<script setup>
import HomeCopyrightComponent from "./HomeCopyrightComponent.vue";

import suitman from "@/assets/img/content/grid/grid_post_1.jpg";
import laptop from "@/assets/img/content/post_small/post_small_2.jpg";

const popularPosts = [
  {
    text : 'Follow These Smartphone Habits of Successful Entrepreneurs',
    image : suitman
  },
  {
    text : 'Lose These 12 Bad Habits If You\'re Serious About Becoming a Millionaire',
    image : laptop
  }
]
</script>

<template>
  <!-- Footer -->
  <footer class="footer footer--dark">
    <div class="container">
      <div class="footer__widgets">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <aside class="widget widget-logo">
              <a href="index.html">
                <img
                  src="@/assets/img/logo_default_white.png"
                  srcset="
                    @/assets/img/logo_default_white.png    1x,
                    @/assets/img/logo_default_white@2x.png 2x
                  "
                  class="logo__img"
                  alt=""
                />
              </a>
              <p class="copyright">
                  &copy; <HomeCopyrightComponent/> Deus  |  Made by <a href="https://deothemes.com">DeoThemes</a>
                </p>
              <div class="socials socials--large socials--rounded mb-24">
                <a href="#" class="social social-facebook" aria-label="facebook"
                  ><i class="ui-facebook"></i
                ></a>
                <a href="#" class="social social-twitter" aria-label="twitter"
                  ><i class="ui-twitter"></i
                ></a>
                <a
                  href="#"
                  class="social social-google-plus"
                  aria-label="google+"
                  ><i class="ui-google"></i
                ></a>
                <a href="#" class="social social-youtube" aria-label="youtube"
                  ><i class="ui-youtube"></i
                ></a>
                <a
                  href="#"
                  class="social social-instagram"
                  aria-label="instagram"
                  ><i class="ui-instagram"></i
                ></a>
              </div>
            </aside>
          </div>

          <div class="col-lg-2 col-md-6">
            <aside class="widget widget_nav_menu">
              <h4 class="widget-title">Useful Links</h4>
              <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">News</a></li>
                <li><a href="categories.html">Advertise</a></li>
                <li><a href="shortcodes.html">Support</a></li>
                <li><a href="shortcodes.html">Features</a></li>
                <li><a href="shortcodes.html">Contact</a></li>
              </ul>
            </aside>
          </div>

          <div class="col-lg-4 col-md-6">
            <aside class="widget widget-popular-posts">
              <h4 class="widget-title">Popular Posts</h4>
              <ul class="post-list-small">
                <li class="post-list-small__item" v-for="data in popularPosts">

                  <article class="post-list-small__entry clearfix">
                    <div class="post-list-small__img-holder">
                      <div class="thumb-container thumb-100">
                        <a href="single-post.html">
                          <img
                            :data-src="data.image"
                            src="@/assets/img/empty.png"
                            alt=""
                            class="post-list-small__img--rounded lazyload"
                          />
                        </a>
                      </div>
                    </div>
                    <div class="post-list-small__body">
                      <h3 class="post-list-small__entry-title">
                        <a href="single-post.html"
                          >{{ data.text }}</a
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
          </div>

          <div class="col-lg-3 col-md-6">
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
                      required=""
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
          </div>
        </div>
      </div>
    </div>
    <!-- end container -->
  </footer>
  <!-- end footer -->
</template>
