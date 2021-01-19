<template>
  <div id="app">
    <router-view />
    <!-- @click="onClickEnvelope" -->
    <div v-drag class="mailBox">
      <mail theme="two-tone" size=".64rem" :fill="['rgb(0, 122, 255)', '#fff']" />
    </div>
    <div class="image_box_container" v-show="imageShow" @click="onClickRemove">
      <img src="./assets/img/A0启动图.jpg" alt="" />
      <div class="time_container">{{ numberIndex }}</div>
    </div>
  </div>
</template>
<script>
import { Mail } from "@icon-park/vue"
export default {
  components: {
    Mail,
  },
  directives: {
    drag: {
      inserted(el) {
        let switchPos = {
          x: 10,
          y: 85,
          startX: 0,
          startY: 0,
          endX: 0,
          endY: 0,
        }
        el.addEventListener("touchstart", function(e) {
          switchPos.startX = e.touches[0].pageX
          switchPos.startY = e.touches[0].pageY
        })
        el.addEventListener("touchend", function(e) {
          switchPos.x = switchPos.endX
          switchPos.y = switchPos.endY
          switchPos.startX = 0
          switchPos.startY = 0
        })
        el.addEventListener("touchmove", function(e) {
          if (e.touches.length > 0) {
            let offsetX = e.touches[0].pageX - switchPos.startX
            let offsetY = e.touches[0].pageY - switchPos.startY
            let x = switchPos.x - offsetX
            let y = switchPos.y - offsetY
            if (x + el.offsetWidth > document.documentElement.offsetWidth) {
              x = document.documentElement.offsetWidth - el.offsetWidth
            }
            if (y + el.offsetHeight > document.documentElement.offsetHeight) {
              y = document.documentElement.offsetHeight - el.offsetHeight
            }
            if (x < 0) {
              x = 0
            }
            if (y < 0) {
              y = 0
            }
            el.style.right = x + "px"
            el.style.bottom = y + "px"
            switchPos.endX = x
            switchPos.endY = y
            e.preventDefault()
          }
        })
      },
    },
  },
  data() {
    return {
      imageShow: false,
      timeIndex: null,
      numberIndex: 3,
    }
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
      this.imageShow = false
    },
    onClickEnvelope() {
      this.$router.push("/Envelope")
    },
  },
}
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
