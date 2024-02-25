<script setup lang="ts">
import { useAuthStore } from "../stores/authstore";
const auth = useAuthStore();
</script>

<script lang="ts">
export default {
  props: [
    "id",
    "creater_id",
    "topic",
    "description",
    "deadline",
    "created",
    "course_id",
    "property"
  ],
};
</script>

<template>
  <div class="items-center justify-center mx-auto w-3/4 mt-36 bg-gray-100 rounded-lg">
    <div class="text-3xl">
      {{ topic }}
    </div>
    <div class="text-xl py-5">
      <span class="text-black">Дата:</span>
      <div>
        <span class="text-black">Начало:</span> <span>{{ created }}</span
        ><br />
        <span class="text-black">Конец:</span> <span>{{ deadline }}</span>
      </div>
    </div>
    <div v-if="description" class="text-xl py-5">
      <span class="text-black">Условие:</span><br />
      <span>{{ description }}</span>
    </div>
    <div
      v-if="property"
      class="flex items-center justify-center py-5 block rounded md:bg-blue-100 md:p-2"
    >
      <a type="button" :href="'/tasks/' + id">Подробнее</a>
    </div>
  </div>
</template>
