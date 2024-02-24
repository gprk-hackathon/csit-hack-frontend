<script setup lang="ts">
import axios from "axios";
import { useAuthStore } from "../stores/authstore";
import { URL } from "@/config";
</script>

<script lang="ts">
const auth = useAuthStore();
export default {
  props: ["reference", "approve", "id", "problem_id"],
  data: function (): {
    appr: boolean;
  } {
    return {
      appr: this.approve,
    };
  },
  methods: {
    async approveSolution(_: Event) {
      axios
        .request({
          url: `${URL}/task/${this.$route.params.id}/solution/${this.id}`,
          method: "put",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + auth.token.token,
          },
        })
        .then((response) => {
          this.appr = !this.appr;
        });
    },
  },
};
</script>

<template>
  <div
    class="items-center justify-center mx-auto w-3/4 mt-36 bg-gray-100 rounded-lg"
  >
    <form @submit.prevent="approveSolution">
      <div v-if="reference" class="text-xl py-5">
        <span class="text-black">Решение:</span><br />
        <span>{{ reference }}</span>
      </div>
      <div class="text-xl py-5">
        <span class="text-black"> Статус:</span><br />
        <span v-if="appr"> Принято </span>
        <span v-else> Не принято </span>
      </div>
      <div v-if="auth.token.role == 0" class="flex items-center justify-center">
        <button
          class="text-black bg-blue-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          <span v-if="appr"> Отменить </span>
          <span v-else> Принять </span>
        </button>
      </div>
      <div
        v-else
        class="flex items-center justify-center py-5 block rounded md:bg-green-50 md:p-2"
      >
      <a type="button" :href="'/tasks/' + id">Подробнее о задаче</a>
      </div>
    </form>
  </div>
</template>
