<script lang="ts">
import { useAuthStore } from "@/stores/authstore";
const auth = useAuthStore();
export default {
  data: function () {
    return {
      inputLogin: null,
      inputPassword: null,
      inputEmail: null,
      response: null,
      err: "",
    };
  },
  methods: {
    async register(_: Event) {
      let result = await auth.register(
        this.inputLogin,
        this.inputEmail,
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
      >
        <div class="mb-4">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="username"
          >
            Логин
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="inputLogin"
            id="username"
            type="text"
            placeholder="login"
          />
        </div>
        <div class="mb-4">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="email"
          >
            Почта
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
            Пароль
          </label>
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            v-model="inputPassword"
            id="password"
            type="password"
            placeholder="******************"
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
