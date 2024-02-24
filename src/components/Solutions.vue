<script setup lang="ts">
import { URL } from "../config";
import { useAuthStore } from "../stores/authstore";
</script>

<script lang="ts">
import SolutionBox from "./SolutionBox.vue";
import axios from "axios";
import type { Solution } from "./types";
const auth = useAuthStore();
export default {
  data: function (): {
    solutions: Solution[];
  } {
    return {
      solutions: [],
    };
  },
  mounted: function () {
    axios
      .request({
        url: `${URL}/tasks/${this.$route.params.id}/solutions`,
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        this.solutions = response.data.map((solution: Solution) => ({
          id: solution.id,
          reference: solution.reference,
          approve: solution.approve,
          author_Id: solution.author_Id,
          problemiId: solution.problem_id,
        }));
      });
    console.log(this.solutions);
  },
  components: { SolutionBox },
};
</script>

<template>
  <div>
    <div class="grid grid-cols-3 gap-y-10 gap-x-10">
      <template v-for="solution in solutions">
        <SolutionBox
          :reference="solution.reference"
          :approve="solution.approve"
          :id="solution.id"
        />
      </template>
    </div>
  </div>
</template>
