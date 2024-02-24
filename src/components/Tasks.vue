<script setup lang="ts">
import { URL } from "../config";
import { useAuthStore } from "../stores/authstore";
</script>

<script lang="ts">
import TaskBox from "./TaskBox.vue";
import axios from "axios";
import type { Task } from "./types";
const auth = useAuthStore();
export default {
  data: function (): {
    tasks: Task[];
  } {
    return {
      tasks: [],
    };
  },
  mounted: function () {
    axios
      .request({
        url: `${URL}/tasks`,
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        this.tasks = response.data.map((task: Task) => ({
          name: task.name,
          price: task.price,
          contains: task.contains,
          tests: task.tests,
          dataCreated: task.dataCreated,
          endPointDate: task.endPointDate,
          id: task.id
        }));
      });
    console.log(this.tasks);
  },
  components: { TaskBox },
};
</script>

<template>
  <div>
    <div class="grid grid-cols-3 gap-y-10 gap-x-10">
      <template v-for="task in tasks">
        <TaskBox
          :name="task.name"
          :price="task.price"
          :date_started="task.dataCreated"
          :date_ended="task.endPointDate"
          :id="task.id"
          :property="true"
        />
      </template>
    </div>
  </div>
</template>
