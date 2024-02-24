<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
import UsersSolutions from "@/components/UsersSolutions.vue";
import { useAuthStore } from "../stores/authstore";
import backgroundImage from '@/src/assets/mainPage.png';

const auth = useAuthStore();
</script>

<template>

  <div
    v-if="auth.token == null"
    class="bg-image flex items-center justify-center h-screen relative isolate px-6 pt-14 md:text-center"
  >
  Добро пожаловать. Пожалуйста войдите в аккаунт.
</div>
  <div v-else>
    <div v-if="auth.token.role">
      <UsersSolutions />
    </div>
    <div
      v-else
      class="bg-image flex items-center justify-center h-screen relative isolate px-6 pt-14 md:text-center"
    >
      Здесь что-то будет
    </div>
  </div>
  
</template>

<style scoped>
.bg-image {
  background-image: url('~@/src/assets/mainPage.png'); 
  background-size: cover;
  background-position: center;
  
}
</style>
