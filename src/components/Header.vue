<template>
  <div id="header">
    <div v-if="back">
      <left theme="two-tone" size=".44rem" :fill="['#000', '#fff']" @click.native="$router.back()" />
    </div>
    <div v-else></div>
    <div class="tittle">{{ title }}</div>
    <div v-if="right" class="search">
      <search theme="outline" size=".44rem" fill="#595959" @click.native="$emit('rightClick')" />
    </div>
    <div v-else>
      <slot />
    </div>
  </div>
</template>
<script>
import { Search, Left } from "@icon-park/vue"
export default {
  props: {
    title: {
      type: String,
      default: "主页",
    },
    back: {
      type: Boolean,
      default: false,
    },
    right: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Search,
    Left,
  },
}
</script>
<style lang="scss" scoped>
#header {
  width: 100%;
  height: 0.9rem;
  display: flex;
  padding: 0 0.2rem;
  align-items: center;
  justify-content: space-between;
  font-size: 0.36rem;
  background-color: #fff;
  .tittle {
    text-align: center;
  }
  .search {
    display: flex;
    justify-content: flex-end;
  }
  div {
    height: 100%;
    width: 33%;
    line-height: 0.9rem;
    span {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
}
</style>
