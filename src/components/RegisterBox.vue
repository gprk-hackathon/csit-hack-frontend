<script lang="ts">
import { useAuthStore } from "@/stores/authstore";
const auth = useAuthStore();
export default {
  data() {
    return {
      inputName: null,
      inputSurname: null,
      inputPatronymic: null,
      inputEmail: null,
      userStatus: null,
      inputPassword: null,

      response: null,
      err: "",
    };
  },

  methods: {
    async register(_: Event) {
      console.log("Before request"); 

      let result = await auth.register(
        this.inputName,
        this.inputSurname,
        this.inputPatronymic,
        this.inputEmail,
        this.userStatus,
        this.inputPassword
      );

      console.log(result);

      if (result != null) {
        this.err = result;
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
        @submit.prevent="register"
        class="backdrop border rounded-lg px-8 pt-6 pb-8 mb-4"
        style="background: rgba(255, 255, 255); backdrop-filter: blur(5px);"

      >
        <div class="mb-1">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="name"
          >
            
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="inputName"
            id="name"
            type="text"
            placeholder="name"
          />
        </div>

        <div class="mb-2">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="surname"
          >
            
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="inputSurname"
            id="surname"
            type="text"
            placeholder="surname"
          />
        </div>
        <div class="mb-3">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="patronymic"
          >
            
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="inputPatronymic"
            id="patronymic"
            type="text"
            placeholder="patronymic"
          />
        </div>
        <div class="mb-4">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="userStatus"
          >
            
        </label>
          <select
            v-model="userStatus"
            id="userStatus"
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          >
            <option value="студент">Студент</option>
            <option value="преподаватель">Преподаватель</option>
          </select>
        </div>


        <div class="mb-5">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="email"
          >
            
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="inputEmail"
            id="email"
            type="text"
            placeholder="email"
          />
        </div>

        <div class="mb-6">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="password"
          >
            
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="inputPassword"
            id="password"
            type="password"
            placeholder="Пароль"
          />
        </div>
        <div class="flex items-center justify-center">
          <button
            class="text-black bg-blue-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Регистрация
          </button>
        </div>
        <div class="mt-3 text-red-500">
          {{ err }}
        </div>
      </form>
    </div>
  </div>
</template>
