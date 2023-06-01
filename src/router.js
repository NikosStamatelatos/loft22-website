import { createRouter, createWebHistory } from "vue-router";
import AboutUs from "./components/AboutUs.vue";
import BookLesson from "./components/BookLesson.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/about-us", component: AboutUs },
    { path: "/booklesson", component: BookLesson },
  ],
});

export default router;
