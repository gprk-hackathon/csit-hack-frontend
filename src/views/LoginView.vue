<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import LoginBox from "@/components/LoginBox.vue";

</script>

<template>
  <div class="background-container">
    <NavBar /> 
    <LoginBox />
  </div>
</template>

<style scoped>
.background-container {
  background-image: url('mainPage.png');
  background-size: cover; 
  background-position: center;
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;

}

</style>