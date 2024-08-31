import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/loan-list",
    name: "LoanListPage",

    component: () => import("../views/LoanListPage.vue"),
  },
  {
    path: "/loan-details/:id",
    name: "LoanDetailsPage",

    component: () => import("../views/LoanDetailsPage.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
