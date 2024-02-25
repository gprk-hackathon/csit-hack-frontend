<script setup lang="ts">
import SideBar from "../components/SideBar.vue";
import Courses from "../components/Courses.vue";
import { useAuthStore } from "../stores/authstore";
const auth = useAuthStore();
</script>

<template>
  <SideBar />
  <Courses />
</template>
