<script setup lang="ts">
import { useAuthStore } from "../stores/authstore";
const auth = useAuthStore();
</script>

<script lang="ts">
export default {
  props: [
    "id",
    "creater_id",
    "topic",
    "description",
    "deadline",
    "created",
    "course_id",
    "property"
  ],
};
</script>

<template>
<router-link :to="`/tasks/${id}`">
    <img
        src="../assets/static/rectangle16144-ul8o-200h.png"
        alt="Rectangle16144"
        class="frame1-rectangle16"
      />
      <img
        src="../assets/static/rectangle13136-tdkzu-200h.png"
        alt="Rectangle13136"
        class="frame1-rectangle13"
      />
<span class="frame1-text08">
        <span>
          {{ topic }}
          <span v-html="rawvnyq"></span>
        </span>
      </span>
      <span class="frame1-text10">
        <span>
          {{ description }}
          <span v-html="raw6dl7"></span>
        </span>
      </span>
    </router-link>
</template>