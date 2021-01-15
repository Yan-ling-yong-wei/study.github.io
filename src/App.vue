<template>
  <div id="app">
    <router-view />
    <div class="mailBox">
      <mail theme="two-tone" size="32" :fill="['rgb(0, 122, 255)', '#fff']" />
    </div>
    <div class="image_box_container" v-show="imageShow" @click="onClickRemove">
      <img src="./assets/img/A0启动图.jpg" alt="" />
      <div class="time_container">{{ numberIndex }}</div>
    </div>
  </div>
</template>
<script>
import { Mail } from "@icon-park/vue";
export default {
  components: {
    Mail,
  },
  data() {
    return {
      imageShow: false,
      timeIndex: null,
      numberIndex: 3,
    };
  },
  created() {
    // setInterval(() => {
    //   if (this.numberIndex <= 0) {
    //     clearInterval = this.timeIndex;
    //     this.imageShow = false;
    //   } else {
    //     this.numberIndex--;
    //   }
    // }, 1000);
  },
  methods: {
    onClickRemove() {
      this.imageShow = false;
    },
  },
};
</script>
<style lang="scss" scoped>
html,
body,
#app {
  width: 100%;
  height: 100%;
  position: relative;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 0.4rem;
}
.mailBox {
  position: fixed;
  right: 0.2rem;
  bottom: 1.4rem;
  width: 1.24rem;
  height: 1.24rem;
  background-color: rgb(0, 122, 255);
  box-shadow: rgba(0, 0, 0, 0.16) 0 5px 14px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  span {
    display: flex;
    align-items: center;
  }
}
  .image_box_container {
    z-index: 2;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    img {
      width: 100%;
      height: 100%;
    }
    .time_container {
      position: absolute;
      top: 0;
      right: 0;
      width: 0.5rem;
      height: 0.5rem;
      font-size: 0.2rem;
      border-radius: 50%;
      text-align: center;
      line-height: 0.5rem;
      border: 1px solid #ccc;
    }
  }
</style>
