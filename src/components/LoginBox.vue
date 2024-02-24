<script lang="ts">
import router from "@/router";
import { useAuthStore } from "@/stores/authstore";
const auth = useAuthStore();

export default {
  data: function () {
    return {
      username: null,
      password: null,
      response: null,
      err: "",
    };
  },
  methods: {
    async signin(_: Event) {
      console.log(this.username, this.password);
      let result = await auth.signIn(this.username, this.password);
    },
  },
};
</script>
<template>
  <div class="flex items-center justify-center h-screen relative isolate px-6 pt-14 md:text-center">
    <div class="w-full max-w-xs">
      <form @submit.prevent="signin" class="backdrop border rounded-lg px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="username">Логин</label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" v-model="username" id="username" type="text" placeholder="login" />
        </div>
        <div class="mb-6">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="password">Пароль</label>
          <input class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" v-model="password" id="password" type="password" placeholder="******************" />
        </div>
        <div class="flex items-center justify-between">
          <button class="text-white bg-purple-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Войти</button>
          <a class="inline-block align-baseline font-bold text-sm" href="/register">Регистрация</a>
        </div>
        <div class="mt-3 text-red-500">{{ err }}</div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.backdrop {
  width: 458px;
  height: 367px;
  top: 359px;
  left: 129px;
  border-radius: 30px;
  background: #FFFFFF;
}

input {
  background: #F5F5F5;
}

button {
  background: #683EEF;
}
</style>
