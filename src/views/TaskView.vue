<script setup lang="ts">
import axios from "axios";
import { useAuthStore } from "../stores/authstore";
import { URL } from "@/config";
import TaskBox from "@/components/TaskBox.vue";
import NavBar from "@/components/NavBar.vue";
</script>

<script lang="ts">
const auth = useAuthStore();
export default {
  data() {
    return {
      name: null,
      price: null,
      contains: null,
      tests: null,
      dataCreated: null,
      endPointDate: null,
      id: null,
    };
  },
  mounted: function () {
    axios
      .request({
        url: `${URL}/tasks/${this.$route.params.id}`,
        method: "get",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + auth.token.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        this.name = response.data.name;
        this.price = response.data.price;
        this.contains = response.data.contains;
        this.tests = response.data.tests;
        this.dataCreated = response.data.dataCreated;
        this.endPointDate = response.data.endPointDate;
        this.id = response.data.id;
      });
  },
  components: { TaskBox },
};
</script>

<template>
  <NavBar />
  <TaskBox
    :name="name"
    :price="price"
    :context="contains"
    :date_started="dataCreated"
    :date_ended="endPointDate"
    :id="id"
  />
</template>
