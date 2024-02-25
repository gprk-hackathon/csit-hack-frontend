<script setup lang="ts">
import { URL } from "../config";
import { useAuthStore } from "../stores/authstore";
</script>

<script lang="ts">
import CourseBox from "./CourseBox.vue";
import axios from "axios";
import type { Course } from "./types";
import SideBar from "./SideBar.vue";
const auth = useAuthStore();
export default {
  data: function (): {
    courses: Course[];
  } {
    return {
      courses: [],
    };
  },
  mounted: function () {
    axios
      .request({
        url: `${URL}/course`,
        method: "get",
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        this.courses = response.data.map((course: Course) => ({
          id: course.id,
          name: course.name,
          description: course.description
        }));
      });
    console.log(this.courses);
  },
  components: { CourseBox },
};
</script>

<template>
  <div>
    <div class="grid grid-cols-1 gap-y-10 gap-x-10">
      <template v-for="course in courses" class="course-box">
        <CourseBox
          :name="course.name"
          :description="course.description"
          :id="course.id"
        />
      </template>
    </div>
  </div>
</template>

<style scoped>
.course-box {
  left: 10vw;
  width: 80vw; /* Установите ширину на 100%, чтобы она занимала всю ширину родительского элемента */
}

</style>