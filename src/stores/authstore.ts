import { defineStore } from "pinia";
import axios from "axios";
import { URL } from "@/config";
import { router } from "@/router";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";
import type { Task } from "@/components/types";
import { RouterLink } from "vue-router";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    token: Cookies.get("auth"),
  }),
  actions: {
    async signIn(login: any, password: any) {
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
            Cookies.set(
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

    async register(name: any, surname: any, patronymic: any, email: any, status: any, password: any) {
      let result = "";
    
      const id = uuidv4();
      console.log("in request"); 

      axios
        .request({
          url: `${URL}/register`,
          method: "POST",
          headers: { "Content-Type": "application/json" },
          data: JSON.stringify({
            id : id,
            username : email, 
            password: password, 
            surname: surname,
            name : name,
            patronymic : patronymic,
            role_id: status,
          }),
          withCredentials: true,
        })
        .then(() => {
          this.signIn(email, password);
        })
        .catch((err) => {
          alert(err);
        });
    
      return result;
    },
    
    logout() {
      token: null as string | null,
      Cookies.remove("auth"); 
      router.push("/");
    },
    approwe() {},
    addSolution(task: Task) {},
  },
});


