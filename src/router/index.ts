import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomePage.vue"),
  },
  {
    path: "/restaurants",
    name: "restaurants",
    component: () => import("../views/RestaurantsPage.vue"),
  },
  {
    path: "/menu",
    name: "menu",
    component: () => import("../views/MenuPage.vue"),
  },
  {
    path: "/menu-item",
    name: "menu-item",
    component: () => import("../views/MenuItemPage.vue"),
  },
  {
    // path: "/category/:slug",
    path: "/category",
    name: "category",
    component: () => import("../views/CategoryMenu.vue"),
  },
  {
    path: "/cabinet",
    name: "cabinet",
    component: () => import("../views/CabinetPage.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginPage.vue"),
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: () => import("../views/SignUpPage.vue"),
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("../views/CartPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
