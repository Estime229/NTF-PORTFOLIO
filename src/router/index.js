import { createRouter, createWebHistory } from "vue-router";
import pathLoader from "../plugins/loader";
const routes = [
  {
    path: "/",
    name: "Home",
    component: pathLoader("home"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
