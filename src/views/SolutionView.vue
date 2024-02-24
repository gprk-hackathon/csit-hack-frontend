<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
import Solutions from "../components/Solutions.vue";
import { useAuthStore } from "../stores/authstore";
const auth = useAuthStore();
</script>

<template>
  <NavBar />
  <div v-if="auth.token">
    <Solutions />
  </div>
  <div
    v-else
    class="flex items-center justify-center h-screen relative isolate px-6 pt-14 md:text-center"
  >
    <a class="inline-block align-baseline bg-gray-50" href="/register">
      <u> Зарегистрируйтесь, пожалуйста</u>
    </a>
  </div>
</template>
