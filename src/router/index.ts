import { createWebHistory, createRouter } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("../views/HomeView.vue"),
    meta: { layout: "LayoutHsc" },
  },
  {
    path: "/music",
    component: () => import("../views/MusicView.vue"),
    meta: { layout: "LayoutHsc" },
  },
  {
    path: "/books",
    component: () => import("../views/BookView.vue"),
    meta: { layout: "LayoutHsc" },
  },
  {
    path: "/movies",
    component: () => import("../views/MovieView.vue"),
    meta: { layout: "LayoutHsc" },
  },
  {
    path: "/perfume",
    component: () => import("../views/PerfumeView.vue"),
    meta: { layout: "LayoutHsc" },
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
