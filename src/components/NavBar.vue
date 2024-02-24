<script setup lang="ts">
import { useAuthStore } from "../stores/authstore";
const auth = useAuthStore();
</script>

<template>
  <nav class="bg-transparent absolute py-4 w-full z-20 top-0 left-0">
    <div class="max-w-screen-xl flex items-center justify-between mx-auto p-1">
      <div class="hidden md:flex md:w-auto md:order-1">
      </div>

      <div v-if="auth.token" class="flex rounded md:bg-green-50 md:order-2">
        <a @click="auth.logout" class="text-black focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-4 py-2 text-center mr-3 md:mr-0">Выйти</a>
      </div>

      <div class="flex items-center md:bg-green-50 md:order-3 md:mr-2 mt-2 md:mt-0 p-2 border rounded-full">
        <a href="/register" class="text-black">Регистрация</a>
      </div>
    </div>
  </nav>
</template>
