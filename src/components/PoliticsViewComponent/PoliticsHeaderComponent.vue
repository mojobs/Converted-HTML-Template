

<template>
  <!-- Header -->
  <header class="header d-lg-block d-none">
    <div class="container">
      <div class="flex-parent">
        <!-- Menu -->
        <nav class="flex-child header__menu d-none d-lg-block">
          <ul class="header__menu-list">
            <li><a href="#">News</a></li>
            <li><a href="#">Advertise</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <!-- end menu -->

        <div class="flex-child text-center">
          <!-- Logo -->
          <a href="index.html" class="logo">
            <img
              class="logo__img"
              src="@/assets/img/logo_politics.png"
              srcset="@/assets/img/logo_politics.png 1x, @/assets/img/logo_politics@2x.png 2x"
              alt="logo"
            />
          </a>
        </div>

        <!-- Socials -->
        <div class="flex-child">
          <div
            class="socials socials--nobase socials--dark justify-content-end"
          >
            <a
              class="social social-facebook"
              href="#"
              target="_blank"
              aria-label="facebook"
            >
              <i class="ui-facebook"></i>
            </a>
            <a
              class="social social-twitter"
              href="#"
              target="_blank"
              aria-label="twitter"
            >
              <i class="ui-twitter"></i>
            </a>
            <a
              class="social social-google-plus"
              href="#"
              target="_blank"
              aria-label="google"
            >
              <i class="ui-google"></i>
            </a>
            <a
              class="social social-youtube"
              href="#"
              target="_blank"
              aria-label="youtube"
            >
              <i class="ui-youtube"></i>
            </a>
            <a
              class="social social-instagram"
              href="#"
              target="_blank"
              aria-label="instagram"
            >
              <i class="ui-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- end container -->
  </header>
  <!-- end header -->
</template>
