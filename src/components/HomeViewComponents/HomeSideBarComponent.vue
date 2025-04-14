<script setup>
import { defineEmits, defineProps, ref } from "vue";
import SpecificPersonalSideBarDropDownComponent from "../GenericComponents/SpecificPersonalSideBarDropDownComponent.vue";
defineEmits(["close-sidebar"]);
defineProps({
  sidebarvalue: {
    type: Boolean,
    required: true,
  },
});
const sideMenuData = [
  {
    index: 0,
    datamenu: "Home",
  },
  {
    index: 1,
    datamenu: "Pages",
  },
  {
    index: 2,
    datamenu: "Features",
  },
];

const specificsidebarcomponents = [
  {
    sidebaroptions: [
      "Home Default",
      "Home Politics",
      "Home Fashion",
      "Home Games",
      "Home Videos",
      "Home Music",
    ],
    sidebaroptionspath: [
      "index.html",
      "index-politics.html",
      "index-fashion.html",
      "index-games.html",
      "index-videos.html",
      "index-music.html",
    ],
  },
  {
    sidebaroptions: ["About", "Contact", "Search Results", "Categories", "404"],
    sidebaroptionspath: [
      "about.html",
      "contact.html",
      "search-results.html",
      "categories.html",
      "404.html",
    ],
  },
  {
    sidebaroptions: ["Single Post", "Shortcodes"],
    sidebaroptionspath: ["#", "shortcodes.html"],
  },
];

const singlePostData = [
  {
    data : 'Style 1',
    path : 'single-post.html'
  },
  {
    data : 'Style 2',
    path : 'single-post-politics.html'
  },
  {
    data : 'Style 3',
    path : 'single-post-fashion.html'
  },
  {
    data : 'Style 4',
    path : 'single-post-games.html'
  },
  {
    data : 'Style 5',
    path : 'single-post-videos.html'
  },
  {
    data : 'Style 6',
    path : 'single-post-music.html'
  },
]

const openedIndex = ref(null);
const toggleInternalSideBarContent = (index) => {
  openedIndex.value = openedIndex.value === index ? "null" : index;
};
</script>

<template>
  <header
    :class="{
      'sidenav sidenav--is-open': sidebarvalue,
      'sidenav': !sidebarvalue,
    }"
    id="sidenav"
  >
    <!-- close -->
    <div class="sidenav__close">
      <button
        @click="$emit('close-sidebar')"
        class="sidenav__close-button"
        id="sidenav__close-button"
        aria-label="close sidenav"
      >
        <i class="ui-close sidenav__close-icon"></i>
      </button>
    </div>

    <!-- Nav -->
    <nav class="sidenav__menu-container">
      <ul class="sidenav__menu" role="menubar">
        <li
          v-for="(data, i) in sideMenuData"
          :key="data.datamenu"
          :class="{ 'sidenav__menu--is-open': openedIndex === i }"
        >
          <a href="#" class="sidenav__menu-url">{{ data.datamenu }}</a>
          <button
            @click="toggleInternalSideBarContent(i)"
            class="sidenav__menu-toggle"
            aria-haspopup="true"
            aria-label="Open dropdown"
          >
            <i class="ui-arrow-down"></i>
          </button>
          <ul
            :class="{ 'sidenav__menu-dropdown': true, 'show': openedIndex === i }"
            :style="{ display: openedIndex === i ? 'block' : 'none' }"
          >
            <li
              v-for="(option, index) in specificsidebarcomponents[i]
                ?.sidebaroptions"
              :key="index"
            >
            <template v-if="option === 'Single Post'">
              <SpecificPersonalSideBarDropDownComponent :singlePostData="singlePostData"/>
            </template>
              <a v-else
                :href="specificsidebarcomponents[i]?.sidebaroptionspath[index]"
                class="sidenav__menu-url"
                >{{ option }}</a
              >
            </li>
         
            
          </ul>
        </li>

        <!-- Categories -->
        <li>
          <a href="#" class="sidenav__menu-url">World</a>
        </li>
        <li>
          <a href="#" class="sidenav__menu-url">Business</a>
        </li>
        <li>
          <a href="#" class="sidenav__menu-url">Fashion</a>
        </li>
        <li>
          <a href="#" class="sidenav__menu-url">Lifestyle</a>
        </li>
        <li>
          <a href="#" class="sidenav__menu-url">Advertise</a>
        </li>
      </ul>
    </nav>

    <div class="socials sidenav__socials">
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
  </header>
  <!-- end sidenav -->
</template>
