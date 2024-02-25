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
      path: "/courses/:id",
      name: "course",
      component: () => import("../views/TasksView.vue"),
    },
    {
      path: "/tasks/:id",
      name: "task",
      component: () => import("../views/TaskView.vue"),
    },
    {
      path: "/add_task",
      name: "add_task",
      component: () => import("../views/AddTaskView.vue"),
    },
    {
      path: "/add_course",
      name: "add_course",
      component: () => import("../views/AddCourseView.vue"),
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
