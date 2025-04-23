<style scoped>
#nav-box {
  width: 1218px; 
  left: -236.013px;
}
/* For screens between 1024px and 1284px */
@media (max-width: 1284px) and (min-width: 1024px) {
  #nav-box {
    width: 1000px;
    left: -180px;
  
  }
}

/* For tablets (between 768px and 1023px) */
@media (max-width: 1023px) and (min-width: 768px) {
  #nav-box{
    width: 700px;
    left: -100px;

  }
}

/* For mobile (less than 768px) */
@media (max-width: 767px) {
 #nav-box{
    width: 100%;
    left: 0;

  }
}

</style>

<template>
  <!-- Navigation -->
  <header :class="{'nav' :true, 'nav--1' : $route.path === '/politics', 'nav--2' : $route.path === '/fashion' , 'nav--colored' : $route.path == '/game', 'nav' : $route.path == '/videos' }">
    <div class="nav__holder nav--sticky">
      <div class="container relative">
        <div class="flex-parent">
          <!-- Side Menu Button -->
          <button
            @click="$emit('open-sidebar')"
            class="nav-icon-toggle"
            id="nav-icon-toggle"
            aria-label="Open side menu"
          >
            <span class="nav-icon-toggle__box">
              <span class="nav-icon-toggle__inner"></span>
            </span>
          </button>

          <!-- Logo -->
          <a href="index.html" class="logo" v-if="$route.path =='/' || $route.path == '/fashion' || $route.path == '/game' || $route.path == '/videos'">
            <img
              class="logo__img"
              src="@/assets/img/logo_default.png"
              srcset="
                @/assets/img/logo_default.png    1x,
                @/assets/img/logo_default@2x.png 2x
              "
              alt="logo"
            />
          </a>
          <div v-else></div>

          <!-- Nav-wrap -->
          <nav class="flex-child nav__wrap d-none d-lg-block">
            <ul class="nav__menu">
              <li class="nav__dropdown active">
                <a href="index.html">Home</a>
                <ul class="nav__dropdown-menu">
                  <li><RouterLink to="/">Home Default</RouterLink></li>
                  <li><RouterLink to="/politics">Home Politics</RouterLink></li>
                  <li><RouterLink to="/fashion">Home Fashion</RouterLink></li>
                  <li><RouterLink to="/game">Home Games</RouterLink></li>
                  <li><RouterLink to="/videos">Home Videos</RouterLink></li>
                  <li><RouterLink to="index-music.html">Home Music</RouterLink></li>
                </ul>
              </li>

              <li class="nav__dropdown">
                <a href="#">Posts</a>
                <ul class="nav__dropdown-menu nav__megamenu" id="nav-box">
                  <li>
                    <div class="nav__megamenu-wrap">
                      <div class="row">
                        <div class="col nav__megamenu-item">
                          <article class="entry">
                            <div class="entry__img-holder">
                              <a href="single-post.html">
                                <img
                                  src="@/assets/img/content/grid/grid_post_1.jpg"
                                  alt=""
                                  class="entry__img"
                                />
                              </a>
                              <a
                                href="categories.html"
                                class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--violet"
                                >world</a
                              >
                            </div>

                            <div class="entry__body">
                              <h2 class="entry__title">
                                <a href="single-post.html"
                                  >Follow These Smartphone Habits of Successful
                                  Entrepreneurs</a
                                >
                              </h2>
                            </div>
                          </article>
                        </div>

                        <div class="col nav__megamenu-item">
                          <article class="entry">
                            <div class="entry__img-holder">
                              <a href="single-post.html">
                                <img
                                  src="@/assets/img/content/grid/grid_post_2.jpg"
                                  alt=""
                                  class="entry__img"
                                />
                              </a>
                              <a
                                href="categories.html"
                                class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--purple"
                                >fashion</a
                              >
                            </div>

                            <div class="entry__body">
                              <h2 class="entry__title">
                                <a href="single-post.html"
                                  >3 Things You Can Do to Get Your Customers
                                  Talking About Your Business</a
                                >
                              </h2>
                            </div>
                          </article>
                        </div>

                        <div class="col nav__megamenu-item">
                          <article class="entry">
                            <div class="entry__img-holder">
                              <a href="single-post.html">
                                <img
                                  src="@/assets/img/content/grid/grid_post_3.jpg"
                                  alt=""
                                  class="entry__img"
                                />
                              </a>
                              <a
                                href="categories.html"
                                class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--blue"
                                >business</a
                              >
                            </div>

                            <div class="entry__body">
                              <h2 class="entry__title">
                                <a href="single-post.html"
                                  >Lose These 12 Bad Habits If You're Serious
                                  About Becoming a Millionaire</a
                                >
                              </h2>
                            </div>
                          </article>
                        </div>

                        <div class="col nav__megamenu-item">
                          <article class="entry">
                            <div class="entry__img-holder">
                              <a href="single-post.html">
                                <img
                                  src="@/assets/img/content/grid/grid_post_4.jpg"
                                  alt=""
                                  class="entry__img"
                                />
                              </a>
                              <a
                                href="categories.html"
                                class="entry__meta-category entry__meta-category--label entry__meta-category--align-in-corner entry__meta-category--green"
                                >lifestyle</a
                              >
                            </div>

                            <div class="entry__body">
                              <h2 class="entry__title">
                                <a href="single-post.html"
                                  >10 Horrible Habits You're Doing Right Now
                                  That Are Draining Your Energy</a
                                >
                              </h2>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <!-- end megamenu -->
              </li>

              <li class="nav__dropdown">
                <a href="#">Pages</a>
                <ul class="nav__dropdown-menu">
                  <li><a href="about.html">About</a></li>
                  <li><a href="contact.html">Contact</a></li>
                  <li><a href="search-results.html">Search Results</a></li>
                  <li><a href="categories.html">Categories</a></li>
                  <li><a href="404.html">404</a></li>
                </ul>
              </li>

              <li class="nav__dropdown">
                <a href="#">Features</a>
                <ul class="nav__dropdown-menu">
                  <li><a href="shortcodes.html">Shortcodes</a></li>
                  <li class="nav__dropdown">
                    <a href="#">Single Post</a>
                    <ul class="nav__dropdown-menu">
                      <li><a href="single-post.html">Style 1</a></li>
                      <li><a href="single-post-politics.html">Style 2</a></li>
                      <li><a href="single-post-fashion.html">Style 3</a></li>
                      <li><a href="single-post-games.html">Style 4</a></li>
                      <li><a href="single-post-videos.html">Style 5</a></li>
                      <li><a href="single-post-music.html">Style 6</a></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#">Purchase</a>
              </li>
            </ul>
            <!-- end menu -->
          </nav>
          <!-- end nav-wrap -->

          <!-- Nav Right -->
          <div class="nav__right">
            <!-- Search -->
            <div class="nav__right-item nav__search">
              <a href="#" class="nav__search-trigger" id="nav__search-trigger">
                <i  @click="toggleSearchBar"
                  :class="{
                    'ui-search nav__search-trigger-icon ui-close':
                      isSearchBarOpened,
                    'ui-search nav__search-trigger-icon': !isSearchBarOpened,
                  }"
                ></i>
              </a>
              <div
                class="nav__search-box"
                id="nav__search-box"
                :style="{ display: isSearchBarOpened ? 'block' : 'none' }"
              >
                <form class="nav__search-form">
                  <input
                    type="text"
                    placeholder="Search an article"
                    class="nav__search-input"
                  />
                  <button
                    type="submit"
                    class="search-button btn btn-lg btn-color btn-button"
                  >
                    <i class="ui-search nav__search-icon"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <!-- end nav right -->
        </div>
        <!-- end flex-parent -->
      </div>
      <!-- end container -->
    </div>
  </header>
  <!-- end navigation -->
</template>

<script setup>
import { defineEmits, ref } from "vue";
import { RouterLink } from "vue-router";
import { useRoute } from "vue-router";
const route = useRoute();

defineEmits(["open-sidebar"]);


// For SearchBarComponent
const isSearchBarOpened = ref(false);
const toggleSearchBar = () => {
  isSearchBarOpened.value = !isSearchBarOpened.value;
  console.log("Search Bar should open");
};
</script>
