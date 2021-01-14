<template>
  <div id="app">
    <router-view />
    <div class="mailBox">
      <mail theme="two-tone" size="32" :fill="['rgb(0, 122, 255)', '#fff']" />
    </div>
    <div class="image_box_container" v-show="imageShow" @click="onClickRemove">
      <img src="./assets/img/A0启动图.jpg" alt="" />
      <div class="time_container">{{ Numberindex }}</div>
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
      imageShow: true,
      Timeindex: null,
      Numberindex: 3,
    };
  },
  created() {
    setInterval(() => {
      if (this.Numberindex <= 0) {
        clearInterval = this.Timeindex;
        this.imageShow = false;
      } else {
        this.Numberindex--;
      }
    }, 1000);
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
  // font-family: Avenir, Helvetica, Arial, sans-serif;
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
  box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 14px;
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
    z-index: 2;
    top: 0px;
    left: 0px;
    img {
      width: 100%;
      height: 100%;
    }
    .time_container {
      position: absolute;
      top: 0rem;
      right: 0rem;
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
