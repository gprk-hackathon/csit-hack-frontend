import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/authstore";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/add-task",
      name: "add-task",
      component: () => import("../views/NewTaskView.vue"),
    },
    {
      path: "/courses",
      name: "courses",
      component: () => import("../views/CoursesView.vue"),
    },
    {
      path: "/tasks/:id",
      name: "task",
      component: () => import("../views/TaskView.vue"),
    },
    {
      path: "/tasks/:id/solutions",
      name: "solutions",
      component: () => import("../views/SolutionView.vue"),
    },
    {
      path: "/tasks/:id/add-solution",
      name: "task-solution",
      component: () => import("../views/NewSolutionView.vue"),
    },
  ],
});

router.beforeEach(async (to) => {
  const publicPages = ["/", "/login", "/register", "/courses"];
  const authRequired = !publicPages.includes(to.path);
  const auth = useAuthStore();

  // if (authRequired && !auth.token) {
    // return "/login";
  // }
});

export default router;
