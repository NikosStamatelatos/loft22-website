import { createRouter, createWebHistory } from "vue-router";
import AboutMe from "./components/AboutMe.vue";
import BookLesson from "./components/BookLesson.vue";
import TheHomePage from "./nav/TheHomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TheHomePage },
    { path: "/about-me", component: AboutMe },
    { path: "/book-lesson", component: BookLesson },
  ],
});

export default router;
