<script setup lang="ts">
import axios from "axios";
import { useAuthStore } from "../stores/authstore";
import { URL } from "@/config";
import Task from "@/components/Task.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<script lang="ts">
const auth = useAuthStore();
export default {
  data() {
    return {
      id: null,
      creater_id: null,
      topic: null,
      description: null,
      deadline: null,
      created: null,
      course_id: null,
    };
  },
  mounted: function () {
    axios
      .request({
        url: `${URL}/task/${this.$route.params.id}`,
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response.data);
        this.id = response.data.id;
        this.creater_id = response.data.creater_id;
        this.topic = response.data.topic;
        this.description = response.data.description;
        this.deadline = response.data.deadline;
        this.created = response.data.created;
        this.course_id = response.data.course_id;
      });
  },
  components: { Task },
};
</script>

<template>
  <Task
    :id="id"
    :creater_id="creater_id"
    :topic="topic"
    :description="description"
    :deadline="deadline"
    :created="created"
    :course_id="course_id"
  />
</template>
