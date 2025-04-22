<script setup>
import HomeCopyrightComponent from "../HomeViewComponents/HomeCopyrightComponent.vue";
</script>

<template>
  <!-- Footer -->
  <footer class="footer footer--white">
    <div class="container">
      <div class="footer__widgets footer__widgets--short">
        <div class="row">
          <div class="col-lg-3">
            <a href="index.html" class="logo">
              <img
                class="logo__img"
                src="@/assets/img/logo_fashion.png"
                srcset="@/assets/img/logo_fashion.png 1x, @/assets/img/logo_fashion@2x.png 2x"
                alt="logo"
              />
            </a>
          </div>

          <div class="col-lg-6">
            <div class="widget">
              <p>
                However, while the hue has been set, that doesn't mean any of
                the outfit choices have been boring. We've scoured the latest
                collections to bring you a fashion editor's selection of the
                greatest new-season pieces to invest in, be it for a ceremony on
                a beach, in a city or nestled in a country retreat.
              </p>
            </div>
          </div>

          <div class="col-lg-3">
            <div
              class="socials socials--large socials--rounded socials--grey justify-content-lg-end"
            >
              <a
                href="#"
                class="social social-facebook social--large social--rounded"
                aria-label="facebook"
                ><i class="ui-facebook"></i
              ></a>
              <a
                href="#"
                class="social social-twitter social--large social--rounded"
                aria-label="twitter"
                ><i class="ui-twitter"></i
              ></a>
              <a
                href="#"
                class="social social-google-plus social--large social--rounded"
                aria-label="google+"
                ><i class="ui-google"></i
              ></a>
              <a
                href="#"
                class="social social-youtube social--large social--rounded"
                aria-label="youtube"
                ><i class="ui-youtube"></i
              ></a>
              <a
                href="#"
                class="social social-instagram social--large social--rounded"
                aria-label="instagram"
                ><i class="ui-instagram"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__bottom top-divider">
        <div class="row">
          <div class="col-lg-3">
            <p class="copyright">
              &copy; <HomeCopyrightComponent /> Deus | Made by
              <a href="https://deothemes.com">DeoThemes</a>
            </p>
          </div>
          <div class="col-lg-9">
            <ul class="footer__nav-menu footer__nav-menu--1">
              <li><a href="about.html">About</a></li>
              <li><a href="contact.html">News</a></li>
              <li><a href="categories.html">Advertise</a></li>
              <li><a href="shortcodes.html">Support</a></li>
              <li><a href="shortcodes.html">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- end container -->
  </footer>
  <!-- end footer -->
</template>
