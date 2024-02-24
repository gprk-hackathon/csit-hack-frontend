<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
import LoginBox from "../components/LoginBox.vue";
import UsersSolutions from "../components/UsersSolutions.vue";
import Tasks from "../components/Tasks.vue";
import { useAuthStore } from "../stores/authstore";
</script>

<script lang="ts">
const auth = useAuthStore();
export default {
  props: ["is_register"],
  data: function (): {
    is_reg: boolean;
  } {
    return {
      is_reg: this.is_register,
    };
  },
  methods: {
    async is_register(_: Event) {
          this.is_register = !this.is_register;
    },
  },
};
</script>

<template>
  <NavBar />

  <div
    v-if="auth.token == null"
    class="flex items-center justify-center h-screen relative isolate px-6 pt-14 md:text-center"
  >
  <div v-if=is_reg>
    <LoginBox />
  </div>
  <div v-else>
    <RegisterBox />
  </div>
  </div>
  <div v-else>
    <div v-if="auth.token.role">
      <UsersSolutions />
    </div>
    <div
      v-else>
      <Tasks />
    </div>
  </div>
</template>
