import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
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
