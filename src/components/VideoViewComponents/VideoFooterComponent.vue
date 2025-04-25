<script setup>
import HomeCopyrightComponent from '../HomeViewComponents/HomeCopyrightComponent.vue';


</script>

<template>
  <!-- Footer -->
  <footer class="footer footer--grey">
    <div class="container">
      <div class="footer__widgets">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <aside class="widget widget-logo">
              <a href="index.html">
                <img
                  src="@/assets/img/logo_videos.png"
                  srcset="@/assets/img/logo_videos.png 1x, @/assets/img/logo_videos@2x.png 2x"
                  class="logo__img"
                  alt=""
                />
              </a>
              <p class="mt-24">
                We bring you the most advanced themes that perfect for news,
                magazine, personal blog, etc. Check our landing page for
                details.
              </p>
              <p class="mb-32">
                Contact us: <a href="https://deothemes.com">deothemes.com</a>
              </p>
              <div
                class="socials socials--large socials--white-base socials--rounded mb-24"
              >
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

          <div class="col-lg-4 col-md-6">
            <aside class="widget widget-twitter">
              <h4 class="widget-title">Latest Tweets</h4>
              <div class="tweets-container">
                <div id="tweets"></div>
              </div>
            </aside>
          </div>

          <div class="col-lg-4 col-md-6">
            <aside class="widget widget_categories">
              <h4 class="widget-title">Categories</h4>
              <ul>
                <li>
                  <a href="categories.html"
                    >World <span class="categories-count">5</span></a
                  >
                </li>
                <li>
                  <a href="categories.html"
                    >Lifestyle <span class="categories-count">7</span></a
                  >
                </li>
                <li>
                  <a href="categories.html"
                    >Business <span class="categories-count">5</span></a
                  >
                </li>
                <li>
                  <a href="categories.html"
                    >Fashion <span class="categories-count">8</span></a
                  >
                </li>
                <li>
                  <a href="categories.html"
                    >Investment <span class="categories-count">10</span></a
                  >
                </li>
                <li>
                  <a href="categories.html"
                    >Technology <span class="categories-count">6</span></a
                  >
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </div>
    <!-- end container -->

    <div class="footer__bottom footer__bottom--white">
      <div class="container text-center">
        <ul class="footer__nav-menu footer__nav-menu--1">
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">News</a></li>
          <li><a href="categories.html">Advertise</a></li>
          <li><a href="shortcodes.html">Support</a></li>
          <li><a href="shortcodes.html">Contact</a></li>
        </ul>
        <p class="copyright">
          <HomeCopyrightComponent/>
          Deus | Made by <a href="https://deothemes.com">DeoThemes</a>
        </p>
      </div>
    </div>
    <!-- end footer bottom -->
  </footer>
  <!-- end footer -->
</template>
