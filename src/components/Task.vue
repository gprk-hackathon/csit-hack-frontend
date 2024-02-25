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
   methods: {
    formatDateDay(dateStr) {
      const date = new Date(dateStr);
      const options = { day: 'numeric' };
      const formatter = new Intl.DateTimeFormat('ru-RU', options);
      return formatter.format(date);
    },
    formatDateMonth(dateStr) {
      const date = new Date(dateStr);
      const options = { month: 'long' };
      const formatter = new Intl.DateTimeFormat('ru-RU', options);
      return formatter.format(date);
    }
  }
};
</script>

<template>
  <div class="frame6-container">
    <div class="frame6-frame">
      <img
        src="../assets/static/image74149-tvi9-1700w.png"
        alt="image74149"
        class="frame6-image7"
      />
      <img
        src="../assets/static/rectangle74150-vkgm-400w.png"
        alt="Rectangle74150"
        class="frame6-rectangle7"
      />
      <img
        src="../assets/static/rectangle84150-ekkf-1300w.png"
        alt="Rectangle84150"
        class="frame6-rectangle8"
      />
      <img
        src="../assets/static/rectangle124150-35fc-200w.png"
        alt="Rectangle124150"
        class="frame6-rectangle12"
      />
    <input class="frame6-rectangle15" v-model="inputName" id="name" type="text" placeholder="Ссылка на репозиторий">
      <span class="frame6-text"><span>{{ topic }}</span></span>
      <div class="frame6-frameiconbellnotification">
        <img
          src="../assets/static/vector4150-asll.svg"
          alt="Vector4150"
          class="frame6-vector"
        />
        <img
          src="../assets/static/vector4150-lys.svg"
          alt="Vector4150"
          class="frame6-vector01"
        />
        <img
          src="../assets/static/vector4151-hy0f.svg"
          alt="Vector4151"
          class="frame6-vector02"
        />
      </div>
      <img
        src="../assets/static/rectangle134151-t4vp-200h.png"
        alt="Rectangle134151"
        class="frame6-rectangle13"
      />
      <img
        src="../assets/static/rectangle254857-8qp8-200h.png"
        alt="Rectangle254857"
        class="frame6-rectangle25"
      />
      <img
        src="../assets/static/rectangle284858-6q4-200h.png"
        alt="Rectangle284858"
        class="frame6-rectangle28"
      />
      <img
        src="../assets/static/rectangle274857-u18p-200h.png"
        alt="Rectangle274857"
        class="frame6-rectangle27"
      />
      <img
        src="../assets/static/rectangle294858-bpc-200h.png"
        alt="Rectangle294858"
        class="frame6-rectangle29"
      />
      <img
        src="../assets/static/rectangle144155-nqsv-200h.png"
        alt="Rectangle144155"
        class="frame6-rectangle14"
      />
      <img
        src="../assets/static/rectangle234756-s9zo-200h.png"
        alt="Rectangle234756"
        class="frame6-rectangle23"
      />
      <img
        src="../assets/static/ellipse274151-hdle-200h.png"
        alt="Ellipse274151"
        class="frame6-ellipse27"
      />
      <div class="frame6-frameiconhomesimpledoor">
        <img
          src="../assets/static/vector4151-5z1m.svg"
          alt="Vector4151"
          class="frame6-vector03"
        />
      </div>
      <div class="frame6-frameiconchatbubbleempty">
        <img
          src="../assets/static/vector4151-kmjw.svg"
          alt="Vector4151"
          class="frame6-vector04"
        />
      </div>
      <div class="frame6-frameiconsettings">
        <img
          src="../assets/static/vector4152-a3ya.svg"
          alt="Vector4152"
          class="frame6-vector05"
        />
        <img
          src="../assets/static/vector4152-127.svg"
          alt="Vector4152"
          class="frame6-vector06"
        />
      </div>
      <div class="frame6-frameiconuser">
        <img
          src="../assets/static/vector4153-pudh.svg"
          alt="Vector4153"
          class="frame6-vector07"
        />
        <img
          src="../assets/static/vector4153-c7ro.svg"
          alt="Vector4153"
          class="frame6-vector08"
        />
      </div>
      <div class="frame6-frameiconlogout">
        <img
          src="../assets/static/vector4153-ccyk.svg"
          alt="Vector4153"
          class="frame6-vector09"
        />
        <img
          src="../assets/static/vector4153-ekkk.svg"
          alt="Vector4153"
          class="frame6-vector10"
        />
      </div>
      <div class="frame6-frameiconfireflame">
        <img
          src="../assets/static/vector4153-7387.svg"
          alt="Vector4153"
          class="frame6-vector11"
        />
        <img
          src="../assets/static/vector4153-zmmz.svg"
          alt="Vector4153"
          class="frame6-vector12"
        />
      </div>
      <span class="frame6-text02"><span>{{ formatDateDay(deadline) }}</span></span>
      <span class="frame6-text04"><span>10</span></span>
      <span class="frame6-text06"><span>{{ formatDateMonth(deadline) }}</span></span>
      <span class="frame6-text08"><span>баллов</span></span>
      <span class="frame6-text10"><span>10 баллов</span></span>
      <span class="frame6-text12"><span>0 баллов</span></span>
      <span class="frame6-text14">
        <span>
          Ссылка на репозиторий
          <span v-html="raw9kpy"></span>
        </span>
      </span>
      <img
        src="../assets/static/rectangle224156-ilsw-200h.png"
        alt="Rectangle224156"
        class="frame6-rectangle22"
      />
      <span class="frame6-text16"><span>Копировать</span></span>
      <span class="frame6-text18">
        <span>
          Нужна помощь?
          <span v-html="rawmxy1"></span>
        </span>
      </span>
      <img
        src="../assets/static/rectangle244757-3ail-200h.png"
        alt="Rectangle244757"
        class="frame6-rectangle24"
      />
      <span class="frame6-text20"><span>7.03.2023</span></span>
      <span class="frame6-text22"><span>3.03.2023</span></span>
      <span class="frame6-text24"><span>Нарушено форматирование -90%</span></span>
      <span class="frame6-text26">
        <span>
          <span>Переменная вычисляется неоднократно -100%</span>
          <br />
          <span>
            Нарушено форматирование
            <span v-html="raww1nb"></span>
          </span>
        </span>
      </span>
      <div class="frame6-frameiconnavarrowdown">
        <img
          src="../assets/static/vector4522-rqu.svg"
          alt="Vector4522"
          class="frame6-vector13"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.frame6-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.frame6-frame {
  width: 100%;
  height: 832px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 1);
}
.frame6-image7 {
  top: -121px;
  left: 367px;
  width: 1635px;
  height: 1073px;
  position: absolute;
}
.frame6-rectangle7 {
  top: 0px;
  left: 0px;
  width: 367px;
  height: 832px;
  position: absolute;
}
.frame6-rectangle8 {
  top: 18px;
  left: 27px;
  width: 1216px;
  height: 768px;
  position: absolute;
  border-radius: 30px;
}
.frame6-rectangle12 {
  top: 18px;
  left: 27px;
  width: 96px;
  height: 768px;
  position: absolute;
  border-radius: 20px 0 0 20px;
}
.frame6-text {
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
.frame6-frameiconbellnotification {
  top: 81px;
  left: 1070px;
  width: 33px;
  height: 34.73076248168945px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.frame6-vector {
  top: 0px;
  left: 0px;
  width: 31px;
  height: 28px;
  position: absolute;
}
.frame6-vector01 {
  top: 2.2737367544323206e-13px;
  left: 22.579023361206055px;
  width: 10px;
  height: 10px;
  position: absolute;
}
.frame6-vector02 {
  top: 33px;
  left: 12.626914024353027px;
  width: 6px;
  height: 2px;
  position: absolute;
}
.frame6-rectangle13 {
  top: 171px;
  left: 199px;
  width: 729px;
  height: 137px;
  position: absolute;
  border-radius: 20px;
}
.frame6-rectangle25 {
  top: 501px;
  left: 199px;
  width: 594px;
  height: 100px;
  position: absolute;
  border-color: rgba(26, 44, 76, 0.8500000238418579);
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
}
.frame6-rectangle28 {
  top: 625px;
  left: 199px;
  width: 594px;
  height: 100px;
  position: absolute;
  border-color: rgba(26, 44, 76, 0.8500000238418579);
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
}
.frame6-rectangle27 {
  top: 501px;
  left: 199px;
  width: 594px;
  height: 36px;
  position: absolute;
  border-color: rgba(10, 37, 65, 0.8500000238418579);
  border-style: solid;
  border-width: 2px;
  border-radius: 5px 5px 0 0;
}
.frame6-rectangle29 {
  top: 627px;
  left: 199px;
  width: 594px;
  height: 36px;
  position: absolute;
  border-color: rgba(10, 37, 65, 0.8500000238418579);
  border-style: solid;
  border-width: 2px;
  border-radius: 5px 5px 0 0;
}
.frame6-rectangle15 {
  top: 372px;
  left: 209px;
  width: 729px;
  padding-left:25px;
  height: 44px;
  position: absolute;
  border-color: rgba(65, 96, 234, 1);
  border-style: solid;
  border-width: 2px;
  border-radius: 20px;
}
.input-rectangle15 {
  top: 382px;
  left: 219px;
  width: 729px;
  height: 44px;
  position: absolute;
}
.frame6-rectangle14 {
  top: 190px;
  left: 959px;
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 20px;
}
.frame6-rectangle23 {
  top: 190px;
  left: 1078px;
  width: 100px;
  height: 100px;
  position: absolute;
  border-radius: 20px;
}
.frame6-ellipse27 {
  top: 79px;
  left: 1091px;
  width: 14px;
  height: 14px;
  position: absolute;
}
.frame6-frameiconhomesimpledoor {
  top: 171px;
  left: 58px;
  width: 35px;
  height: 34.39226150512695px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.frame6-vector03 {
  top: 0px;
  left: 0px;
  width: 35px;
  height: 34px;
  position: absolute;
}
.frame6-frameiconchatbubbleempty {
  top: 343px;
  left: 58px;
  width: 35px;
  height: 34.0806770324707px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.frame6-vector04 {
  top: 0px;
  left: 0px;
  width: 35px;
  height: 34px;
  position: absolute;
}
.frame6-frameiconsettings {
  top: 421px;
  left: 58px;
  width: 35px;
  height: 35px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.frame6-vector05 {
  top: 12.249979019165039px;
  left: 12.250000953674316px;
  width: 10px;
  height: 10px;
  position: absolute;
}
.frame6-vector06 {
  top: 0px;
  left: 0px;
  width: 35px;
  height: 35px;
  position: absolute;
}
.frame6-frameiconuser {
  top: 79px;
  left: 1142px;
  width: 30px;
  height: 34.28571701049805px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.frame6-vector07 {
  top: 17.14284896850586px;
  left: 0px;
  width: 30px;
  height: 17px;
  position: absolute;
}
.frame6-vector08 {
  top: -1.1368683772161603e-13px;
  left: 6.428546905517578px;
  width: 17px;
  height: 17px;
  position: absolute;
}
.frame6-frameiconlogout {
  top: 723px;
  left: 62px;
  width: 30px;
  height: 38.57142639160156px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.frame6-vector09 {
  top: 12.85709285736084px;
  left: 15px;
  width: 15px;
  height: 13px;
  position: absolute;
}
.frame6-vector10 {
  top: 0px;
  left: 0px;
  width: 30px;
  height: 39px;
  position: absolute;
}
.frame6-frameiconfireflame {
  top: 255px;
  left: 58px;
  width: 35px;
  height: 39.375px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.frame6-vector11 {
  top: 13.125012397766113px;
  left: 8.750000953674316px;
  width: 17px;
  height: 26px;
  position: absolute;
}
.frame6-vector12 {
  top: 0px;
  left: 0px;
  width: 35px;
  height: 39px;
  position: absolute;
}
.frame6-text02 {
  top: 204px;
  left: 983px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 45px;
  font-style: Regular;
  text-align: left;
  font-family: Days One;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame6-text04 {
  top: 204px;
  left: 1101px;
  color: rgba(10, 37, 65, 0.8500000238418579);
  height: auto;
  position: absolute;
  font-size: 45px;
  font-style: Regular;
  text-align: left;
  font-family: Days One;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame6-text06 {
  top: 254px;
  left: 991px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 12px;
  font-style: Regular;
  text-align: left;
  font-family: ABeeZee;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame6-text08 {
  top: 254px;
  left: 1107px;
  color: rgba(10, 37, 65, 0.8500000238418579);
  height: auto;
  position: absolute;
  font-size: 12px;
  font-style: Regular;
  text-align: left;
  font-family: ABeeZee;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame6-text10 {
  top: 512px;
  left: 717px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 12px;
  font-style: Regular;
  text-align: left;
  font-family: ABeeZee;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame6-text12 {
  top: 638px;
  left: 717px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 12px;
  font-style: Regular;
  text-align: left;
  font-family: ABeeZee;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame6-text14 {
  top: 341px;
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
.frame6-rectangle22 {
  top: 372px;
  left: 793px;
  width: 135px;
  height: 44px;
  position: absolute;
  border-radius: 0 20px 20px 0;
}
.frame6-text16 {
  top: 384px;
  left: 810px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 16px;
  font-style: Regular;
  text-align: left;
  font-family: Abhaya Libre ExtraBold;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame6-text18 {
  top: 430px;
  left: 219px;
  color: rgba(10, 37, 65, 0.8500000238418579);
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
.frame6-line5 {
  top: 449px;
  left: 219px;
  width: 113px;
  height: 1px;
  position: absolute;
}
.frame6-rectangle24 {
  top: 275px;
  left: 1078px;
  width: 100px;
  height: 15px;
  position: absolute;
  border-radius: 0 0 20px 20px;
}
.frame6-text20 {
  top: 510px;
  left: 221px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  font-style: Regular;
  text-align: left;
  font-family: Abyssinica SIL;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame6-text22 {
  top: 636px;
  left: 219px;
  color: rgba(255, 255, 255, 1);
  height: auto;
  position: absolute;
  font-size: 14px;
  font-style: Regular;
  text-align: left;
  font-family: Abyssinica SIL;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame6-text24 {
  top: 552px;
  left: 219px;
  color: rgba(10, 37, 65, 1);
  height: auto;
  position: absolute;
  font-size: 12px;
  font-style: Regular;
  text-align: left;
  font-family: ABeeZee;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame6-text26 {
  top: 678px;
  left: 219px;
  color: rgba(10, 37, 65, 1);
  height: auto;
  position: absolute;
  font-size: 12px;
  font-style: Regular;
  text-align: left;
  font-family: ABeeZee;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame6-frameiconnavarrowdown {
  top: 295px;
  left: 577px;
  width: 15px;
  height: 7.5px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
}
.frame6-vector13 {
  top: 0px;
  left: 0px;
  width: 15px;
  height: 7px;
  position: absolute;
}
</style>
