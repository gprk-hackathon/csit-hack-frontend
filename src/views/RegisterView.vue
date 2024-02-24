<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import RegisterBox from "@/components/RegisterBox.vue";
</script>

<template>
  <div class="background-container">
    <!-- <NavBar />  -->
    <RegisterBox />
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