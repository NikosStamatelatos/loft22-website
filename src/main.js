import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import AboutUs from "./components/AboutUs.vue";
import BookLesson from "./components/BookLesson.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/aboutus", component: AboutUs },
    { path: "/booklesson", component: BookLesson },
  ],
});

const app = createApp(App);

app.use(router);
app.mount("#app");
