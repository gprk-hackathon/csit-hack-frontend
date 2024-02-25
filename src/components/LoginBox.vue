<script lang="ts">
import router from "@/router";
import { useAuthStore } from "@/stores/authstore";
const auth = useAuthStore();

export default {
  data: function () {
    return {
      username: null,
      password: null,
      response: null,
      err: "",
    };
  },
  methods: {
    async signin(_: Event) {
      console.log(this.username, this.password);
      let result = await auth.signIn(this.username, this.password);
    },
  },
};
</script>
<template>
 <form @submit.prevent="signin">
  <img
        src="../assets/static/rectangle8110-yupi-500w.png"
        alt="Rectangle8110"
        class="frame-rectangle8"
      />
      <img
        src="../assets/static/rectangle9111-8f8-200h.png"
        alt="Rectangle9111"
        class="frame-rectangle9"
      />
      <img
        src="../assets/static/rectangle12112-k5ae-200h.png"
        alt="Rectangle12112"
        class="frame-rectangle12"
      />
      <input placeholder="Логин" v-model="username" id="username" type="text" class="frame-text11">
      <input placeholder="Пароль" v-model="password" id="password" type="password" class="frame-text13">
      <span class="frame-text15"><span>Забыли пароль?</span></span>
      <img
        src="../assets/static/rectangle11116-j0rn-200h.png"
        alt="Rectangle11116"
        class="frame-rectangle11"
      />
      <img
        src="../assets/static/rectangle13117-gaj-300w.png"
        alt="Rectangle13117"
        class="frame-rectangle13"
      />
      <button class="frame-text17" type="submit"><span>Вход</span></button>
    </form>
      <a class="frame-text19" href="/register"><span>Зарегистрироваться</span></a>
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
  left: 1120px;
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

