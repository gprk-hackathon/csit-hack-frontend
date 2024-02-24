<script setup lang="ts">
import { useAuthStore } from "../stores/authstore";
const auth = useAuthStore();
</script>

<template>
  <nav
    class="bg-blue-100 absolute py-4 w-full z-20 top-0 left-0 border-b border-gray-300"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1"
    >
      <a href="/" class="flex items-center rounded md:bg-green-50 md:p-1"> Практика </a>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      >
        <ul
          class="flex flex-col p-4 md:p-2 font-medium border rounded-lg md:flex-row md:space-x-8"
        >
          <li>
            <a
              href="/tasks"
              class="block py-2 pl-3 pr-4 text-black rounded md:bg-green-50 md:p-1"
              >Задачи</a
            >
          </li>
          <li v-if="auth.token && auth.token.role == 0">
            <a
              href="/add-task"
              class="block py-2 pl-3 pr-4 text-black rounded md:bg-green-50 md:p-1"
              >Новая задача
            </a>
          </li>
        </ul>
      </div>

      <div v-if="auth.token" class="flex rounded md:bg-green-50 md:order-2">
        <a
          @click="auth.logout"
          class="text-black focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-4 py-2 text-center mr-3 md:mr-0"
          >Выйти</a
        >
      </div>
      <div v-else class="flex md:order-2 md:bg-green-50 md:order-2">
        <a
          href="/login"
          class="text-black focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-4 py-2 text-center mr-3 md:mr-0"
          >Войти</a
        >
      </div>
    </div>
  </nav>
</template>
