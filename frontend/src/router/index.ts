// Composables
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Dinner from "@/views/Dinner.vue";
import Supper from "@/views/Supper.vue";

const routes = [
  {
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    path: "/dinner",
    name: "dinner",
    component: Dinner,
  },
  {
    path: "/supper",
    name: "supper",
    component: Supper,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
