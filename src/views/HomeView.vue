<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from "../stores/authstore";
import Courses from "../components/Courses.vue";

const auth = useAuthStore();
const router = useRouter();
</script>

<template>
  <div class="background-container">
    <button @click="router.push('/login')" class="login-button">Войти</button>
    <button @click="router.push('/register')" class="register-button">Зарегистрироваться</button>
  </div>
</template>

<style scoped>
.background-container {
  background-image: url('../assets/static/mainPage.png');
  background-size: cover; 
  background-position: center;
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.login-button, .register-button {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-button {
  background-color: #008CBA; /* Blue */
  color: white;
}

.register-button {
  background-color: #f44336; /* Red */
  color: white;
}
</style>