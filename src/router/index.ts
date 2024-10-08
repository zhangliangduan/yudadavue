import {createMemoryHistory, createRouter, createWebHashHistory, createWebHistory} from "vue-router";
import { routes } from "@/router/routes";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
