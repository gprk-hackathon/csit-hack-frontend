<script lang="ts">
import axios from "axios";
import { URL } from "@/config";
import { useAuthStore } from "@/stores/authstore";
import router from "@/router";
const auth = useAuthStore();
export default {
  data: function () {
    return {
      inputName: "",
      inputContext: "",
      inputPrice: 0,
      inputEndPointDate: "",
      inputTests: "",
    };
  },
  methods: {
    async createTask(_: Event) {
      let CurDate = new Date().toISOString();
      console.log(CurDate);
      console.log(this.inputEndPointDate);

      axios
        .request({
          url: `${URL}/task`,
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token.token,
          },
          data: JSON.stringify({
            price: this.inputPrice,
            name: this.inputName,
            contains: this.inputContext,
            tests: this.inputTests,
            dataCreated: CurDate,
            endPointDate: this.inputEndPointDate,
          }),
          withCredentials: true,
        })
        .then((result) => {
          router.push(`/tasks/${result.data.id}`);
        })
        .catch((err) => {
          alert("Проверьте вводимые данные");
        });
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
        @submit.prevent="createTask"
        class="backdrop border rounded-lg px-8 pt-6 pb-8 mb-4"
      >
        <div class="mb-4">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="taskName"
          >
            Название
          </label>
          <input
            class="w-full text-gray-700 border rounded py-3 px-4 mb-3"
            v-model="inputName"
            id="taskName"
            type="text"
            placeholder="Очень интересное название"
          />
        </div>
        <div class="mb-4">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="email"
          >
            Стоимость
          </label>
          <input
            class="w-full text-gray-700 border rounded py-3 px-4 mb-3"
            v-model="inputPrice"
            id="email"
            type="number"
            placeholder="Цена"
          />
        </div>
        <div class="mb-4">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="taskContext"
          >
            Условие
          </label>
          <input
            class="w-full text-gray-700 border rounded py-3 px-4 mb-3"
            v-model="inputContext"
            id="taskContext"
            type="text"
            placeholder="Очень интересное название"
          />
        </div>
        <div class="mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="taskEndPoint"
          >
            Дедлайн
          </label>
          <input
            class="w-full text-gray-700 border rounded py-3 px-4 mb-3"
            v-model="inputEndPointDate"
            id="taskEndPoint"
            type="date"
            placeholder="Крайний срок"
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
