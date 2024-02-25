<script setup lang="ts">
import SideBar from "../components/SideBar.vue";
import Tasks from "../components/Tasks.vue";
import { useAuthStore } from "../stores/authstore";
const auth = useAuthStore();
</script>

<template>
  <Tasks />
</template>
