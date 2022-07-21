import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cars/:id",
    name: "car",
    component: () => import("../views/cars/CarView.vue"),
    props: true,
  },
  {
    path: "/manufacturers",
    name: "manufacturers",
    component: () => import("../views/manufacturer/ManufacturersView.vue"),
  },
  {
    path: "/manufacturers/new",
    name: "newManufacturer",
    component: () => import("../views/manufacturer/NewManufacturerView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
