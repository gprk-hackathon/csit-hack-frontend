<script setup lang="ts">
import { useAuthStore } from "../stores/authstore";
const auth = useAuthStore();
</script>

<script lang="ts">
export default {
  props: [
    "id",
    "name",
    "description",
  ],
};
</script>

<template>
  <div class="items-center justify-center mx-auto w-3/4 mt-36 bg-gray-100 rounded-lg">
    <div class="text-3xl">
      {{ name }}
    </div>
    <div class="text-xl py-5">
      <span class="text-black">Дата:</span>
    </div>
    <div v-if="description" class="text-xl py-5">
      <span class="text-black">Условие:</span><br />
      <span>{{ description }}</span>
    </div>
    <!-- Add this button inside your course box -->
    <router-link :to="`/courses/${id}`" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
      Подробнее
    </router-link>
  </div>
</template>
