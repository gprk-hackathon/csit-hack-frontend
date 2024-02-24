<script setup lang="ts">
import { useAuthStore } from "../stores/authstore";
const auth = useAuthStore();
</script>

<template>
  <div
    class="sidebar bg-blue-100 absolute py-4 w-full z-20 top-0 left-0 border-b border-gray-300"
  >
    <div
      class="max-w-screen-xl flex-col flex-wrap items-center justify-between mx-auto p-1"
    >
      <a href="/" class="flex items-center rounded md:bg-green-50 md:p-1">
        Home
      </a>
    </div>
 
    <div class="max-w-screen-xl flex-col flex-wrap items-center justify-between mx-auto p-1">
      <a
        href="/tasks"
        class="flex items-center rounded md:bg-green-50 md:p-1"
        >Курсы</a
      >
    </div>

    <div class="max-w-screen-xl flex-col flex-wrap items-down justify-between mx-auto p-1">
      <a
        v-if="auth.token"
        @click="auth.logout"
        class="flex items-center rounded md:bg-green-50 md:p-1"
        >Выйти</a
      >
      <a
        v-else
        href="/login"
        class="flex items-center rounded md:bg-green-50 md:p-1"
        >Войти</a
      >
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  display: grid;
  width: 5vw;
  left: 1vw;
  top:5vh;
  height: 90vh;
  position: relative;
  overflow: auto;
  border-radius: 10px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10%; /* Добавьте равное расстояние между кнопками */
}

.sidebar a {
  text-decoration: none;
  color: #343a40;
}

</style>
