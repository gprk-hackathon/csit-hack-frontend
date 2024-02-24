<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
import UsersSolutions from "@/components/UsersSolutions.vue";
import { useAuthStore } from "../stores/authstore";
const auth = useAuthStore();
</script>

<template>
  <NavBar />

  <div
    v-if="auth.token == null"
    class="flex items-center justify-center h-screen relative isolate px-6 pt-14 md:text-center"
  >
    Добро пожаловать. Пожалуйста войдите в аккаунт.
  </div>
  <div v-else>
    <div v-if="auth.token.role">
      <UsersSolutions />
    </div>
    <div
      v-else
      class="flex items-center justify-center h-screen relative isolate px-6 pt-14 md:text-center"
    >
      Здесь что-то будет
    </div>
  </div>
</template>
