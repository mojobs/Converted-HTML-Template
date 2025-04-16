import "@/assets/css/bootstrap.min.css";

import "@/assets/css/style.css";
import "@/assets/sass/style.scss";

import "@/assets/css/bootstrap.min.css";
import "@/assets/css/font-icons.css";
import "@/assets/css/style.css";
import "@/assets/img/favicon.ico";
import "@/assets/img/apple-touch-icon-72x72.png";
import "@/assets/img/apple-touch-icon-114x114.png";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";


const app = createApp(App);

app.component("VueperSlides", VueperSlides);
app.component("VueperSlide", VueperSlide);
app.use(createPinia());
app.use(router);

app.mount("#app");
