<template>
  <div id="app">
    <router-view />
    <div class="mailBox">
      <mail theme="two-tone" size="32" :fill="['rgb(0, 122, 255)', '#fff']" />
    </div>
  </div>
</template>
<script>
import { Mail } from "@icon-park/vue"
export default {
  components: {
    Mail,
  },
}
</script>
<style lang="scss" scoped>
html,
body,
#app {
  width: 100%;
  height: 100%;
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
  z-index: 999;
  span {
    display: flex;
    align-items: center;
  }
}
</style>
