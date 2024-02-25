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
        url: `${URL}/task/get_by_course_id/${this.$route.params.id}`,
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        this.tasks = response.data.map((task: Task) => ({
          id: task.id,
          creater_id: task.creater_id,
          topic: task.topic,
          description: task.description,
          deadline: task.deadline,
          created: task.created,
          course_id: task.course_id
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
          :id="task.id"
          :creater_id="task.creater_id"
          :topic="task.topic"
          :description="task.description"
          :deadline="task.deadline"
          :created="task.created"
          :course_id="task.course_id"
          :property="true"
        />
      </template>
    </div>
  </div>
</template>
