<script setup>
import { ref, computed } from 'vue';
const currentYoutubeVideo = ref(null)
const setCurrentYoutubeVideo = (video) => {
    currentYoutubeVideo.value = video;
    console.log("Set video")
}
const currentPlayingVideo = computed(() => {
  if (!currentYoutubeVideo.value) return '';
  return currentYoutubeVideo.value.replace("&autoplay=1", "");
});

const youtubeVideosData = [
    {
        index : '1',
        url : "https://www.youtube.com/embed/NrmMk1Myrxc?feature=oembed&autoplay=1",
        text : "Introducing Amazon Go and the world’s most advanced",
        image : "https://i.ytimg.com/vi/NrmMk1Myrxc/default.jpg"
    },
    {
        index : '2',
        url : "https://www.youtube.com/embed/1EvqiGm0wz8?feature=oembed&autoplay=1",
        text : "10 Amazing Gadgets You Can Buy Now On Amazon",
        image : "https://i.ytimg.com/vi/1EvqiGm0wz8/default.jpg"
    },
    {
        index : '3',
        url : "https://www.youtube.com/embed/TXFrCy47ue8?feature=oembed&autoplay=1",
        text : "Top 5 Best Drones with HD Camera (Cheap and Affordable Version)",
        image : "https://i.ytimg.com/vi/TXFrCy47ue8/default.jpg"
    },
    {
        index : '4',
        url : "https://www.youtube.com/embed/rdFXddVsUuQ?feature=oembed&autoplay=1",
        text : " iPhone X Review – Pushing Me to Android",
        image : "https://i.ytimg.com/vi/rdFXddVsUuQ/default.jpg"
    },
    {
        index : '5',
        url : "https://www.youtube.com/embed/MY0UBGX2FtA?feature=oembed&autoplay=1",
        text : " iPhone X Review – Pushing Me to Android",
        image : "https://i.ytimg.com/vi/MY0UBGX2FtA/default.jpg"
    }
];
setCurrentYoutubeVideo(youtubeVideosData[0].url);
</script>



<template>
  <!-- Newest Videos -->
  <section class="bg-light pt-32 pb-32">
    <div class="container">
      <div class="title-wrap">
        <h2 class="section-title">newest videos</h2>
      </div>
      <div class="video-playlist">
        <div class="video-playlist__content thumb-container">
          <div class="embed-responsive embed-responsive-16by9">
            <iframe
              :src="currentPlayingVideo"
              class="video-playlist__content-video"
            >
            </iframe>
          </div>
        </div>

        <div class="video-playlist__list">
          <a v-for="(data, i) in youtubeVideosData" @click="setCurrentYoutubeVideo(data.url)"
            :href="data.url"
            :class="{'video-playlist__list-item' : true,  'video-playlist__list-item--active' : data.index == i+1}"
          >
            <div class="video-playlist__list-item-thumb">
              <img
                :data-src="data.image"
                :src="data.image"
                class="video-playlist__list-item-img lazyload"
                alt=""
              />
            </div>
            <div class="video-playlist__list-item-description">
              <h4 class="video-playlist__list-item-title">
                {{data.text}}
              </h4>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- end newest videos -->
</template>
