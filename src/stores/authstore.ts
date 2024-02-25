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
    token: Cookies.get("Access-Token"),
  }),
  actions: {
    async signIn(login: any, password: any) {
      let result = null;
      axios
        .request({
          url: `${URL}/auth`,
          method: "post",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          data: `username=${login}&password=${password}`,
          // withCredentials: true,
        })
        .then((response) => {
          if (response.status == 200) {
            router.back();
          } else {
            result = "Не удалось войти в систему";
          }
        })
        .catch((err) => {
          alert(err);
        });
      return result;
    },

    async register(name: any, surname: any, patronymic: any, email: any, status: any, password: any) {
      let result = "";
    
      const id = uuidv4();

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
            role_id: 1,
          }),
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
      Cookies.remove("Access-Token"); 
      router.push("/");
    },
    approwe() {},
    addSolution(task: Task) {},
  },
});


