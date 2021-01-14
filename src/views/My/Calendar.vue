<template>
  <div>
    <nav-header back title="学习日历" />
    <van-calendar title="日历" :poppable="false" :show-confirm="false" :style="{ height: '500px' }" />
  </div>
</template>

<script>
import navHeader from "@/components/Header"
export default {
  components: {
    navHeader,
  },
}
</script>

<style></style>
