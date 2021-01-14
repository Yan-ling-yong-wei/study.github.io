<template>
  <div id="study">
    <nav-header back title="我的学习">
      <calendar-dot theme="two-tone" size="18" :fill="['#aaa', '#fff']" @click.native="$router.push('/calendar')" />
    </nav-header>
    <van-tabs v-model="active">
      <van-tab v-for="(item, index) in tab" :key="index" :title="item + '(0)'"></van-tab>
    </van-tabs>
    <main>
      <div>
        <img src="http://wap.365msmk.com/img/empty.0d284c2e.png" alt="" />
        <p class="tips">还没有课程，快去选择课程学习吧</p>
        <div class="btn" @click="$router.push('/course')">选择课程</div>
      </div>
    </main>
  </div>
</template>

<script>
import { CalendarDot } from "@icon-park/vue"
import navHeader from "@/components/Header"

export default {
  name: "Study",
  components: { navHeader, CalendarDot },
  data() {
    return {
      tab: ["直播课", "点播课", "音频课", "图文课", "面授课", "会员课"],
      active: 0,
    }
  },
}
</script>

<style scoped lang="scss">
.i-icon {
  display: flex;
  justify-content: flex-end;
}
.van-tabs {
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
}
/deep/.van-tab__text {
  font-size: 0.3rem;
}
//#eb6100
/deep/.van-tab--active {
  color: #eb6100 !important;
  font-weight: normal;
}
/deep/.van-tabs__line {
  background-color: #eb6100;
}
main {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 3rem;
      height: 3rem;
    }
    p {
      margin-top: 0.4rem;
      font-size: 0.3rem;
      color: #8c8c8c;
    }
    .btn {
      width: 1.76rem;
      height: 0.56rem;
      margin: 0.8rem 0;
      font-size: 0.26rem;
      border-radius: 0.1rem;
      color: #fff;
      background: #eb6100;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
