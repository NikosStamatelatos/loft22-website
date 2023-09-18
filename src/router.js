import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import MenuPage from "./components/MenuPage.vue";
import TheCompanyPage from "./components/TheCompanyPage.vue";
import TheStore from "./components/TheStore.vue";
import PrivacyPolicy from "./components/PrivacyPolicy.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/homepage", component: HomePage },
    { path: "/menu", component: MenuPage },
    { path: "/etaireia", component: TheCompanyPage },
    { path: "/store", component: TheStore },
    { path: "/privacy-policy", component: PrivacyPolicy },
  ],
});

export default router;
