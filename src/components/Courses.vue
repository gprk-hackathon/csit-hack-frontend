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
 <div class="frame1-container">
    <div class="frame1-frame">
      <img
        src="../assets/static/image7122-ftbe-1700w.png"
        alt="image7122"
        class="frame1-image7"
      />
      <img
        src="../assets/static/rectangle7123-a1u3-400w.png"
        alt="Rectangle7123"
        class="frame1-rectangle7"
      />
      <img
        src="../assets/static/rectangle8124-fps-1300w.png"
        alt="Rectangle8124"
        class="frame1-rectangle8"
      />
      <img
        src="../assets/static/rectangle12125-zp9u-200w.png"
        alt="Rectangle12125"
        class="frame1-rectangle12"
      />
      <span class="frame1-text">
        <span>
          Курсы
          <span v-html="rawbdzr"></span>
        </span>
      </span>
      <span class="frame1-text02"><span>Все</span></span>
      <span class="frame1-text04">
        <span>
          Текущие
          <span v-html="rawt9cc"></span>
        </span>
      </span>
      <span class="frame1-text06"><span>Пройденные</span></span>
      <div class="frame1-frameiconbellnotification">
        <img
          src="../assets/static/vector133-ndd7.svg"
          alt="Vector133"
          class="frame1-vector"
        />
        <img
          src="../assets/static/vector134-bsord.svg"
          alt="Vector134"
          class="frame1-vector01"
        />
        <img
          src="../assets/static/vector135-w6xr.svg"
          alt="Vector135"
          class="frame1-vector02"
        />
      </div>
      <img
        src="../assets/static/ellipse27139-nuqr-200h.png"
        alt="Ellipse27139"
        class="frame1-ellipse27"
      />
      <div class="frame1-frameiconhomesimpledoor">
        <a href="/courses">
        <img
          src="../assets/static/vector141-jwve.svg"
          alt="Vector141"
          class="frame1-vector03"
        />
        </a>
      </div>
      <div class="frame1-frameiconchatbubbleempty">
        <img
          src="../assets/static/vector143-kvl.svg"
          alt="Vector143"
          class="frame1-vector04"
        />
      </div>
      <div class="frame1-frameiconuser">
        <img
          src="../assets/static/vector55-31x5a.svg"
          alt="Vector55"
          class="frame1-vector05"
        />
        <img
          src="../assets/static/vector56-f1zq.svg"
          alt="Vector56"
          class="frame1-vector06"
        />
      </div>
      <div class="frame1-frameiconlogout">
        <img
          src="../assets/static/vector59-x0tv.svg"
          alt="Vector59"
          class="frame1-vector07"
        />
        <img
          src="../assets/static/vector510-ozbp.svg"
          alt="Vector510"
          class="frame1-vector08"
        />
      </div>
        <div>
        <template v-for="course in courses" class="course-box">
          <CourseBox
            :name="course.name"
            :description="course.description"
            :id="course.id"
          />
        </template>
    </div>
      <div class="frame1-frameiconfireflame">
        <img
          src="../assets/static/vector513-x7g.svg"
          alt="Vector513"
          class="frame1-vector09"
        />
        <img
          src="../assets/static/vector514-6hfm.svg"
          alt="Vector514"
          class="frame1-vector10"
        />
      </div>
      <div class="frame1-frameiconsettings">
        <img
          src="../assets/static/vector2330-kaz.svg"
          alt="Vector2330"
          class="frame1-vector11"
        />
        <img
          src="../assets/static/vector2330-u1f.svg"
          alt="Vector2330"
          class="frame1-vector12"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.frame1-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.frame1-frame {
  width: 100%;
  height: 832px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 1);
}
.frame1-image7 {
  top: -121px;
  left: 367px;
  width: 1635px;
  height: 1073px;
  position: absolute;
}
.frame1-rectangle7 {
  top: 0px;
  left: 0px;
  width: 367px;
  height: 832px;
  position: absolute;
}
.frame1-rectangle8 {
  top: 18px;
  left: 27px;
  width: 1216px;
  height: 768px;
  position: absolute;
  border-radius: 30px;
}
.frame1-rectangle12 {
  top: 18px;
  left: 27px;
  width: 96px;
  height: 768px;
  position: absolute;
  border-radius: 20px 0 0 20px;
}
.frame1-text {
  top: 109px;
  left: 221px;
  color: rgba(26, 44, 76, 1);
  height: auto;
  position: absolute;
  font-size: 35px;
  font-style: Regular;
  text-align: left;
  font-family: Russo One;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame1-text02 {
  top: 171px;
  left: 221px;
  color: rgba(65, 96, 234, 1);
  height: auto;
  position: absolute;
  font-size: 18px;
  font-style: Regular;
  text-align: left;
  font-family: Abhaya Libre ExtraBold;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame1-text04 {
  top: 171px;
  left: 282px;
  color: rgba(65, 96, 234, 0.4000000059604645);
  height: auto;
  position: absolute;
  font-size: 18px;
  font-style: Regular;
  text-align: left;
  font-family: Abhaya Libre ExtraBold;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame1-text06 {
  top: 171px;
  left: 396px;
  color: rgba(65, 96, 234, 0.4000000059604645);
  height: auto;
  position: absolute;
  font-size: 18px;
  font-style: Regular;
  text-align: left;
  font-family: Abhaya Libre ExtraBold;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame1-frameiconbellnotification {
  top: 81px;
  left: 1070px;
  width: 33px;
  height: 34.73076248168945px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.frame1-vector {
  top: 0px;
  left: 0px;
  width: 31px;
  height: 28px;
  position: absolute;
}
.frame1-vector01 {
  top: 2.2737367544323206e-13px;
  left: 22.579023361206055px;
  width: 10px;
  height: 10px;
  position: absolute;
}
.frame1-vector02 {
  top: 33px;
  left: 12.626914024353027px;
  width: 6px;
  height: 2px;
  position: absolute;
}
.frame1-rectangle13 {
  top: 216px;
  left: 209px;
  width: 729px;
  height: 164px;
  position: absolute;
  border-radius: 20px;
}
.frame1-rectangle14 {
  top: 402px;
  left: 209px;
  width: 729px;
  height: 164px;
  position: absolute;
  border-radius: 20px;
}
.frame1-rectangle15 {
  top: 588px;
  left: 209px;
  width: 729px;
  height: 164px;
  position: absolute;
  border-radius: 20px;
}
.frame1-ellipse27 {
  top: 79px;
  left: 1091px;
  width: 14px;
  height: 14px;
  position: absolute;
}
.frame1-frameiconhomesimpledoor {
  top: 171px;
  left: 58px;
  width: 35px;
  height: 34.39226150512695px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.frame1-vector03 {
  top: 0px;
  left: 0px;
  width: 35px;
  height: 34px;
  position: absolute;
}
.frame1-frameiconchatbubbleempty {
  top: 343px;
  left: 58px;
  width: 35px;
  height: 34.0806770324707px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.frame1-vector04 {
  top: 0px;
  left: 0px;
  width: 35px;
  height: 34px;
  position: absolute;
}
.frame1-rectangle16 {
  top: 234px;
  left: 230px;
  width: 184px;
  height: 129px;
  position: absolute;
  border-radius: 20px;
}
.frame1-rectangle17 {
  top: 419px;
  left: 230px;
  width: 184px;
  height: 129px;
  position: absolute;
  border-radius: 20px;
}
.frame1-rectangle18 {
  top: 605px;
  left: 230px;
  width: 184px;
  height: 129px;
  position: absolute;
  border-radius: 20px;
}
.frame1-text08 {
  top: 247px;
  left: 436px;
  color: rgba(10, 37, 65, 1);
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
.frame1-text10 {
  top: 283px;
  left: 436px;
  color: rgba(10, 37, 65, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  font-style: Regular;
  text-align: left;
  font-family: ABeeZee;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame1-text12 {
  top: 467px;
  left: 436px;
  color: rgba(10, 37, 65, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  font-style: Regular;
  text-align: left;
  font-family: ABeeZee;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame1-text14 {
  top: 653px;
  left: 436px;
  color: rgba(10, 37, 65, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  font-style: Regular;
  text-align: left;
  font-family: ABeeZee;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame1-text16 {
  top: 335px;
  left: 436px;
  color: rgba(10, 37, 65, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  font-style: Regular;
  text-align: left;
  font-family: Abhaya Libre ExtraBold;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame1-text18 {
  top: 519px;
  left: 436px;
  color: rgba(10, 37, 65, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  font-style: Regular;
  text-align: left;
  font-family: Abhaya Libre ExtraBold;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame1-text20 {
  top: 705px;
  left: 436px;
  color: rgba(10, 37, 65, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  font-style: Regular;
  text-align: left;
  font-family: Abhaya Libre ExtraBold;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame1-text22 {
  top: 431px;
  left: 436px;
  color: rgba(10, 37, 65, 1);
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
.frame1-text24 {
  top: 617px;
  left: 436px;
  color: rgba(10, 37, 65, 1);
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
.frame1-frameiconuser {
  top: 79px;
  left: 1142px;
  width: 30px;
  height: 34.28571701049805px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.frame1-vector05 {
  top: 17.14284896850586px;
  left: 0px;
  width: 30px;
  height: 17px;
  position: absolute;
}
.frame1-vector06 {
  top: -1.1368683772161603e-13px;
  left: 6.428546905517578px;
  width: 17px;
  height: 17px;
  position: absolute;
}
.frame1-frameiconlogout {
  top: 723px;
  left: 62px;
  width: 30px;
  height: 38.57142639160156px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.frame1-vector07 {
  top: 12.85709285736084px;
  left: 15px;
  width: 15px;
  height: 13px;
  position: absolute;
}
.frame1-vector08 {
  top: 0px;
  left: 0px;
  width: 30px;
  height: 39px;
  position: absolute;
}
.frame1-frameiconfireflame {
  top: 255px;
  left: 58px;
  width: 35px;
  height: 39.375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.frame1-vector09 {
  top: 13.125012397766113px;
  left: 8.750000953674316px;
  width: 17px;
  height: 26px;
  position: absolute;
}
.frame1-vector10 {
  top: 0px;
  left: 0px;
  width: 35px;
  height: 39px;
  position: absolute;
}
.frame1-frameiconsettings {
  top: 427px;
  left: 58px;
  width: 35px;
  height: 35px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.frame1-vector11 {
  top: 12.249979019165039px;
  left: 12.250000953674316px;
  width: 10px;
  height: 10px;
  position: absolute;
}
.frame1-vector12 {
  top: 0px;
  left: 0px;
  width: 35px;
  height: 35px;
  position: absolute;
}

.course-box {
  left: 10vw;
  width: 80vw; /* Установите ширину на 100%, чтобы она занимала всю ширину родительского элемента */
}

</style>