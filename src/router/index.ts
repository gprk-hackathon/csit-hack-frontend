import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/authstore";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/MainView.vue"),
    },
  ],
});

router.beforeEach(async (to) => {
  const publicPages = ["/", "/login", "/register"];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();

  if (authRequired && !auth.token) {
    return "/login";
  }
});

export default router;
