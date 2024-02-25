<script lang="ts">
import { useAuthStore } from "@/stores/authstore";
const auth = useAuthStore();
export default {
  data() {
    return {
      inputName: null,
      inputSurname: null,
      inputPatronymic: null,
      inputEmail: null,
      userStatus: null,
      inputPassword: null,

      response: null,
      err: "",
    };
  },

  methods: {
    async register(_: Event) {
      console.log("Before request"); 

      let result = await auth.register(
        this.inputName,
        this.inputSurname,
        this.inputPatronymic,
        this.inputEmail,
        this.userStatus,
        this.inputPassword
      );

      console.log(result);

      if (result != null) {
        this.err = result;
      }
    },
  },
};
</script>

<template>
<form @submit.prevent="register">
<div class="frame2-container">
    <div class="frame2-frame">
      <div class="frame2-component1">
        <img
          src="../assets/static/image7i149-l01-1200w.png"
          alt="image7I149"
          class="frame2-image7"
        />
        <img
          src="../assets/static/rectangle7i149-k3fw-900h.png"
          alt="Rectangle7I149"
          class="frame2-rectangle7"
        />
      </div>
      <img
        src="../assets/static/rectangle8150-x03l-600w.png"
        alt="Rectangle8150"
        class="frame2-rectangle8"
      />
      <img
        src="../assets/static/rectangle11151-sap-200h.png"
        alt="Rectangle11151"
        class="frame2-rectangle11"
      />
      <button class="frame2-text" type="submit"><span>Создать</span></button>
      <img
        src="../assets/static/rectangle14355-cscg-200h.png"
        alt="Rectangle14355"
        class="frame2-rectangle14"
      />
      <img
        src="../assets/static/rectangle15359-jtyr-200h.png"
        alt="Rectangle15359"
        class="frame2-rectangle15"
      />
      <img
        src="../assets/static/rectangle16360-s06-200h.png"
        alt="Rectangle16360"
        class="frame2-rectangle16"
      />
      <span class="frame2-text02"><span>Создание нового задания</span></span>
      <input class="frame2-text04" v-model="inputName" id="name" type="text" placeholder="Название задания">
      <input class="frame2-text06" v-model="description" id="description" type="text" placeholder="Описание задания">
      <input class="frame2-text08" v-model="deadline" id="deadline" type="date" placeholder="Дедлайн">
    </div>
  </div>
  </form>
</template>

<style scoped>
.frame2-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.frame2-frame {
  width: 100%;
  height: 832px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 1);
}
.frame2-component1 {
  top: -56px;
  left: 0px;
  width: 1689px;
  height: 888px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
}
.frame2-image7 {
  top: 0px;
  left: 475px;
  width: 1119px;
  height: 888px;
  position: absolute;
}
.frame2-rectangle7 {
  top: 56px;
  left: 0px;
  width: 487px;
  height: 832px;
  position: absolute;
}
.frame2-rectangle8 {
  top: 139px;
  left: 385px;
  width: 509px;
  height: 587px;
  position: absolute;
  border-radius: 30px;
}
.frame2-rectangle11 {
  top: 631px;
  left: 501px;
  width: 277px;
  height: 45px;
  position: absolute;
  border-radius: 30px;
}
.frame2-text {
  top: 637px;
  left: 547px;
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
.frame2-rectangle14 {
  top: 188px;
  left: 434px;
  width: 343px;
  height: 46px;
  position: absolute;
  border-radius: 10px;
}
.frame2-rectangle15 {
  top: 251px;
  left: 434px;
  width: 343px;
  height: 270px;
  position: absolute;
  border-radius: 10px;
}
.frame2-rectangle16 {
  top: 535px;
  left: 434px;
  width: 343px;
  height: 46px;
  position: absolute;
  border-radius: 10px;
}
.frame2-rectangle17 {
  top: 465px;
  left: 434px;
  width: 343px;
  height: 46px;
  position: absolute;
  border-radius: 10px;
}
.frame2-rectangle18 {
  top: 538px;
  left: 434px;
  width: 343px;
  height: 46px;
  position: absolute;
  border-radius: 10px;
}
.frame2-text02 {
  top: 78px;
  left: 411px;
  color: rgba(214, 251, 81, 1);
  height: auto;
  position: absolute;
  font-size: 40px;
  font-style: Bold;
  text-align: left;
  font-family: Kohinoor Gujarati;
  font-weight: 700;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame2-text04 {
  top: 201px;
  left: 456px;
  color: rgba(0, 0, 0, 0.5);
  height: auto;
  position: absolute;
  font-size: 16px;
  font-style: Regular;
  text-align: left;
  font-family: ABeeZee;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame2-text06 {
  top: 274px;
  left: 456px;
  color: rgba(0, 0, 0, 0.5);
  height: 246px;
  width: 300px;
  position: absolute;
  font-size: 16px;
  font-style: Regular;
  text-align: left;
  font-family: ABeeZee;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame2-text08 {
  top: 547px;
  left: 456px;
  color: rgba(0, 0, 0, 0.5);
  height: auto;
  position: absolute;
  font-size: 16px;
  font-style: Regular;
  text-align: left;
  font-family: ABeeZee;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame2-text10 {
  top: 478px;
  left: 457px;
  color: rgba(0, 0, 0, 0.5);
  height: auto;
  position: absolute;
  font-size: 16px;
  font-style: Regular;
  text-align: left;
  font-family: ABeeZee;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame2-text12 {
  top: 551px;
  left: 457px;
  color: rgba(0, 0, 0, 0.5);
  height: auto;
  position: absolute;
  font-size: 16px;
  font-style: Regular;
  text-align: left;
  font-family: ABeeZee;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame2-text14 {
  top: 407px;
  left: 476px;
  color: rgba(0, 0, 0, 0.5);
  height: auto;
  position: absolute;
  font-size: 16px;
  font-style: Regular;
  text-align: left;
  font-family: ABeeZee;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame2-text16 {
  top: 406px;
  left: 589px;
  color: rgba(0, 0, 0, 0.5);
  height: auto;
  position: absolute;
  font-size: 16px;
  font-style: Regular;
  text-align: left;
  font-family: ABeeZee;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.frame2-ellipse28 {
  top: 405px;
  left: 445px;
  width: 22px;
  height: 22px;
  position: absolute;
}
.frame2-ellipse29 {
  top: 404px;
  left: 558px;
  width: 22px;
  height: 22px;
  position: absolute;
}
</style>