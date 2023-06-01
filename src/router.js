import { createRouter, createWebHistory } from "vue-router";
import AboutUs from "./components/AboutUs.vue";
import BookLesson from "./components/BookLesson.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/homepage" },
    { path: "/about-us", component: AboutUs },
    { path: "/book-lesson", component: BookLesson },
  ],
});

export default router;
