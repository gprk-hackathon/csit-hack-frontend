<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAuthStore } from "../stores/authstore";
import Courses from "../components/Courses.vue";
import LoginBox from "@/components/LoginBox.vue";

const auth = useAuthStore();
const router = useRouter();
</script>

<template>
  <div class="frame-container">
    <div class="frame-frame">
      <div class="frame-component1">
        <img
          src="../assets/static/image714-pr5o-1200w.png"
          alt="image714"
          class="frame-image7"
        />
        <img
          src="../assets/static/rectangle715-ex1s-900h.png"
          alt="Rectangle715"
          class="frame-rectangle7"
        />
      </div>
      <span class="frame-text">
        <span>
          Учись с
          <span v-html="rawv5p8"></span>
        </span>
      </span>
      <span class="frame-text02"><span>Git</span></span>
      <span class="frame-text04"><span>Glitch</span></span>
      <span class="frame-text06">
        <span>
          <span>
            Образовательная платформа для
            <span v-html="rawhhyh"></span>
          </span>
          <br />
          <span>
            студентов IT-специальностей
            <span v-html="rawjp7h"></span>
          </span>
        </span>
      </span>
      <LoginBox/>
    </div>
  </div>
</template>

<style scoped>
.frame-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.frame-frame {
  width: 100%;
  height: 832px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 1);
}
.frame-component1 {
  top: -56px;
  left: 0px;
  width: 1689px;
  height: 888px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.frame-image7 {
  top: 0px;
  left: 475px;
  width: 1125px;
  height: 987px;
  position: absolute;
}
.frame-rectangle7 {
  top: 56px;
  left: 0px;
  width: 487px;
  height: 841px;
  position: absolute;
}
.frame-text {
  top: 184px;
  left: 129px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 50px;
  font-style: Bold;
  text-align: left;
  font-family: Kohinoor Gujarati;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame-text02 {
  top: 190px;
  left: 345px;
  color: rgba(65, 96, 234, 1);
  height: auto;
  position: absolute;
  font-size: 50px;
  font-style: Regular;
  text-align: left;
  font-family: Days One;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame-text04 {
  top: 190px;
  left: 429px;
  color: rgba(214, 251, 81, 1);
  height: auto;
  position: absolute;
  font-size: 50px;
  font-style: Regular;
  text-align: left;
  font-family: Days One;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame-text06 {
  top: 268px;
  left: 129px;
  color: rgba(217, 217, 217, 1);
  height: auto;
  position: absolute;
  font-size: 25px;
  font-style: Regular;
  text-align: left;
  font-family: Anek Latin;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame-rectangle8 {
  top: 359px;
  left: 129px;
  width: 458px;
  height: 374px;
  position: absolute;
  border-radius: 30px;
}
.frame-rectangle9 {
  top: 416px;
  left: 186px;
  width: 343px;
  height: 60px;
  position: absolute;
  border-radius: 10px;
}
.frame-rectangle12 {
  top: 517px;
  left: 186px;
  width: 343px;
  height: 54px;
  position: absolute;
  border-radius: 10px;
}
.frame-text11 {
  top: 434px;
  left: 213px;
  color: rgba(0, 0, 0, 0.5);
  height: auto;
  position: absolute;
  font-size: 20px;
  font-style: Regular;
  text-align: left;
  font-family: ABeeZee;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame-text13 {
  top: 532px;
  left: 213px;
  color: rgba(0, 0, 0, 0.5);
  height: auto;
  position: absolute;
  font-size: 20px;
  font-style: Regular;
  text-align: left;
  font-family: ABeeZee;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame-text15 {
  top: 587px;
  left: 407px;
  color: rgba(65, 96, 234, 1);
  height: auto;
  position: absolute;
  font-size: 15px;
  font-style: Regular;
  text-align: left;
  font-family: ABeeZee;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame-rectangle11 {
  top: 640px;
  left: 266px;
  width: 184px;
  height: 45px;
  position: absolute;
  border-radius: 30px;
}
.frame-rectangle13 {
  top: 31px;
  right: 75px;
  width: 247px;
  height: 45px;
  position: absolute;
  border-color: rgba(255, 255, 255, 1);
  border-style: solid;
  border-width: 3px;
  border-radius: 30px;
}
.frame-text17 {
  top: 651px;
  left: 332px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 20px;
  font-style: Regular;
  text-align: left;
  font-family: Abhaya Libre ExtraBold;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame-text19 {
  top: 42px;
  left: 1014px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 20px;
  font-style: Regular;
  text-align: left;
  font-family: Abhaya Libre ExtraBold;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame-line1 {
  top: 605px;
  left: 407px;
  width: 122px;
  height: 1px;
  position: absolute;
}
</style>
