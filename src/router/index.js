import { createRouter, createWebHistory } from "vue-router";
import pathLoader from "../plugins/loader";
const routes = [
  {
    path: "/",
    name: "Home",
    component: pathLoader("home"),
  },
  {
    path: "/timeline",
    name: "timeline",
    props: true,
    component: () => import("@/components/container/timeline/timeline.vue"),
  },
  {
    path: "/about",
    name: "about",
    props: true,
    component: () => import("@/components/container/about/about.vue"),
  },
  {
    path: "/work",
    name: "work",
    props: true,
    component: () => import("@/components/container/work/work.vue"),
  },
  {
    path: "/tech",
    name: "tech",
    props: true,
    component: () => import("@/components/container/tech/tech.vue"),
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
