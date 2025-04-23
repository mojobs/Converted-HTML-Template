<script setup lang="ts">
import HomeCopyrightComponent from '../HomeViewComponents/HomeCopyrightComponent.vue';

</script>

<template>
  <!-- Footer -->
  <footer class="footer footer--dark">
    <div class="container">
      <div class="footer__widgets">
        <div class="footer__widgets-top">
          <div class="row justify-content-between align-items-center">
            <div class="col-md-4">
              <a href="index.html">
                <img
                  src="@/assets/img/logo_games_white.png"
                  srcset="
                    @/assets/img/logo_games_white.png    1x,
                    @/assets/img/logo_games_white@2x.png 2x
                  "
                  class="logo__img"
                  alt=""
                />
              </a>
            </div>

            <div class="col-md-6">
              <div
                class="socials socials--large socials--nobase justify-content-md-end"
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
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-2 col-md-6">
            <aside class="widget widget_nav_menu">
              <h4 class="widget-title">Cover Stories</h4>
              <ul>
                <li>
                  <a href="single-post-games.html">Why Horizon Zero Dawn</a>
                </li>
                <li><a href="single-post-games.html">Superman</a></li>
                <li><a href="single-post-games.html">Best Nintendo Game</a></li>
                <li><a href="single-post-games.html">Kingdom Hearts 3</a></li>
                <li><a href="single-post-games.html">Dragon Ball</a></li>
                <li><a href="single-post-games.html">God of War</a></li>
              </ul>
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

          <div class="col-lg-2 col-md-6">
            <aside class="widget widget_nav_menu">
              <h4 class="widget-title">Useful Links</h4>
              <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="single-post-games.html">Projects</a></li>
                <li><a href="single-post-games.html">Wordpress Themes</a></li>
                <li><a href="categories.html">Advertise</a></li>
              </ul>
            </aside>
          </div>

          <div class="col-lg-4 col-md-6">
            <aside class="widget widget_tag_cloud">
              <h4 class="widget-title">Tags</h4>
              <div class="tagcloud">
                <a href="#">action</a>
                <a href="#">adventure</a>
                <a href="#">console</a>
                <a href="#">racing</a>
                <a href="#">RPG</a>
                <a href="#">strategy</a>
                <a href="#">top list</a>
                <a href="#">sport</a>
                <a href="#">PS4</a>
                <a href="#">Xbox</a>
                <a href="#">Virtual Life</a>
                <a href="#">Science Fiction</a>
              </div>
            </aside>
          </div>
        </div>
        <!-- end row -->
      </div>
      <!-- end footer widgets -->
    </div>
    <!-- end container -->

    <div class="footer__bottom footer__bottom--dark">
      <div class="container text-center">
        <ul class="footer__nav-menu footer__nav-menu--1">
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">News</a></li>
          <li><a href="categories.html">Advertise</a></li>
          <li><a href="shortcodes.html">Support</a></li>
          <li><a href="shortcodes.html">Contact</a></li>
        </ul>
        <p class="copyright">
          <HomeCopyrightComponent/><a href="">Deus | Made by DeoThemes</a>
        </p>
      </div>
    </div>
    <!-- end footer bottom -->
  </footer>
  <!-- end footer -->
</template>
