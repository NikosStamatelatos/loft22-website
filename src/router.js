import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import MenuPage from "./components/MenuPage.vue";
import BlogPage from "./components/BlogPage.vue";
import FindUs from "./components/FindUs.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/home", component: HomePage },
    { path: "/menu", component: MenuPage },
    { path: "/blog", component: BlogPage },
    { path: "/find-us", component: FindUs },
  ],
});

export default router;
