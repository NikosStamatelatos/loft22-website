import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import MenuPage from "./components/MenuPage.vue";
import TheCompanyPage from "./components/TheCompanyPage.vue";
import TheStore from "./components/TheStore.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/arxiki", component: HomePage },
    { path: "/menu", component: MenuPage },
    { path: "/etaireia", component: TheCompanyPage },
    { path: "/katastima", component: TheStore },
  ],
});

export default router;
