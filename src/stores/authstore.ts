import { defineStore } from "pinia";
import axios from "axios";
import { URL } from "@/config";
import { router } from "@/router";
import type { Task } from "@/components/types";
import { RouterLink } from "vue-router";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    token: JSON.parse(localStorage.getItem("auth")),
  }),
  actions: {
    async signIn(login, password) {
      let result = null;
      axios
        .request({
          url: `${URL}/login`,
          method: "post",
          headers: { "Content-Type": "application/json" },
          data: JSON.stringify({ login: login, pass: password }),
          withCredentials: true,
        })
        .then((response) => {
          if (response.status == 200) {
            this.token = response.data.result;
            localStorage.setItem(
              "auth",
              JSON.stringify({
                token: this.token,
                role: response.data.role,
                id: response.data.user_id,
              })
            );
            router.back();
          } else {
            result = "Не удалось войти в систему";
          }
        })
        .catch((err) => {
          alert("Логин/пароль указаны неверно.");
        });
      return result;
    },
    async register(login, email, password) {
      let result = "";
      axios
        .request({
          url: `${URL}/register`,
          method: "post",
          headers: { "Content-Type": "application/json" },
          data: JSON.stringify({ login: login, pass: password, email: email }),
          withCredentials: true,
        })
        .then(() => {
          this.signIn(login, password);
        })
        .catch((err) => {
          alert(err);
        });
      return result;
    },
    logout() {
      this.token = null;
      localStorage.removeItem("auth");
      router.push("/");
    },
    approwe() {},
    addSolution(task: Task) {},
  },
});
