<script lang="ts">
import axios from "axios";
import router from "@/router";
import { URL } from "@/config";
import { useAuthStore } from "@/stores/authstore";
const auth = useAuthStore();
export default {
  data: function () {
    return {
      inputReference: "",
    };
  },
  methods: {
    async createSolution(_: Event) {
      if (this.inputReference.length > 10) {
        axios
          .request({
            url: `${URL}/tasks/${this.$route.params.id}/solution`,
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + auth.token.token,
            },
            data: JSON.stringify({
              author_Id: auth.token.id,
              reference: this.inputReference,
              problem_id: this.$route.params.id,
              approve: false,
            }),
            withCredentials: true,
          })
          .then((result) => {
            router.push("/");
          })
          .catch(() => {
            alert("Проверьте вводимые данные");
          });
      } else{
        alert("Проверьте вводимые данные");
      }
    },
  },
};
</script>

<template>
  <div
    class="flex items-center justify-center h-screen relative isolate px-6 pt-14 md:text-center"
  >
    <div class="w-full max-w-xs">
      <form
        @submit.prevent="createSolution"
        class="backdrop border rounded-lg px-8 pt-6 pb-8 mb-4"
      >
        <div class="mb-4">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="solutionReference"
          >
            Название
          </label>
          <input
            class="w-full text-gray-700 border rounded py-3 px-4 mb-3"
            v-model="inputReference"
            id="solutionReference"
            type="text"
            placeholder="Ссылка на решение"
          />
        </div>
        <div class="flex items-center justify-center">
          <button
            class="text-black bg-blue-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Создать
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
