<script setup lang="ts">
import { useAuthStore } from "../stores/authstore";
const auth = useAuthStore();
</script>

<script lang="ts">
export default {
  props: [
    "name",
    "context",
    "price",
    "date_started",
    "date_ended",
    "id",
    "property",
    "solution",
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
      <div>
        <span class="text-black">Начало:</span> <span>{{ date_started }}</span
        ><br />
        <span class="text-black">Конец:</span> <span>{{ date_ended }}</span>
      </div>
    </div>
    <div v-if="context" class="text-xl py-5">
      <span class="text-black">Условие:</span><br />
      <span>{{ context }}</span>
    </div>
    <div class="text-xl py-5">
      <span class="text-black"> Цена:</span><br />
      <span>{{ price }} у.е</span>
    </div>
    <div
      v-if="property"
      class="flex items-center justify-center py-5 block rounded md:bg-blue-100 md:p-2"
    >
      <a type="button" :href="'/tasks/' + id">Подробнее</a>
    </div>
    <div v-else>
      <div
        v-if="auth.token.role"
        class="flex items-center justify-center py-5 block rounded md:bg-green-50 md:p-2"
      >
        <a type="button" :href="'/tasks/' + id + '/add-solution'">
          Предложить решение
        </a>
      </div>
      <div v-else class="py-5 block rounded md:bg-blue-50 md:p-2">
        <a type="button" :href="'/tasks/' + id + '/solutions'">
          Проверить решения
        </a>
      </div>
    </div>
  </div>
</template>
