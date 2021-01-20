<template>
  <div id="study">
    <nav-header back title="我的学习">
      <calendar-dot theme="two-tone" size="18" :fill="['#aaa', '#fff']" @click.native="$router.push('/calendar')" />
    </nav-header>
    <van-tabs v-model="active">
      <van-tab v-for="item in tab" :key="item.type" :title="item.name + `(${item.num})`" :name="item.type"></van-tab>
    </van-tabs>
    <main>
      <div v-if="showList.length === 0" class="null">
        <img src="http://120.53.31.103:86/img/empty.0d284c2e.png" alt="" />
        <p class="tips">还没有课程，快去选择课程学习吧</p>
        <div class="btn" @click="$router.push('/course')">选择课程</div>
      </div>
      <div v-else class="lists">
        <div class="item" v-for="item in showList" :key="item.course_id" @click="$router.push({ path: '/courDetail', query: { id: item.course_id } })">
          <h3>{{ item.title }}</h3>
          <div class="time">
            <history theme="outline" size=".24rem" fill="#666" />
            <span>{{ item.start_play_date | timeFormat }} ~ {{ item.end_play_date | timeFormat }} | 共{{ item.section_num }}课时</span>
          </div>
          <div class="rate">
            <div class="line">
              <span :style="{ width: item.progress_rate + '%' }"></span>
            </div>
            <div>已学习{{ item.progress_rate }}%</div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { myStudy } from "@/utils/api"
import { CalendarDot, History } from "@icon-park/vue"
import navHeader from "@/components/Header"

export default {
  name: "Study",
  components: { navHeader, CalendarDot, History },
  filters: {
    timeFormat(val) {
      let date = new Date(val * 1000)
      function addZero(num) {
        return num.toString().padStart(2, "0")
      }
      return `${addZero(date.getMonth() + 1)}月${addZero(date.getDate())}日 ${addZero(date.getHours())}:${addZero(date.getMinutes())}`
    },
  },
  data() {
    return {
      tab: [],
      active: 2,
      showList: [],
    }
  },
  async created() {
    let { data: res } = await myStudy(2)
    // console.log(res)
    this.tab = res.data.typeNum
    this.showList = res.data.courseList
  },
  watch: {
    active() {
      console.log(this.active)
      myStudy(this.active).then((res) => {
        // console.log(res)
        this.showList = res.data.data.courseList
      })
      this.showList
    },
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
#study {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.null {
  margin-top: 2rem;

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
main {
  flex-grow: 1;
  padding: 0 0.3rem 0.3rem;
  overflow: auto;
  .item {
    margin-top: 0.3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 2.54rem;
    padding: 0.44rem 0.28rem;
    box-shadow: 0 0 0.15rem rgba(0, 0, 0, 0.1);
    border-radius: 0.1rem;
    h3 {
      font-size: 0.32rem;
    }
    .time {
      margin-top: -0.4rem;
      display: flex;
      align-items: center;
      span {
        display: flex;
        font-size: 0.24rem;
        color: #666;
      }
    }
    .rate {
      font-size: 0.24rem;
      color: #666;
      display: flex;
      align-items: center;
      .line {
        height: 0.1rem;
        width: 2.4rem;
        background-color: #f5f5f5;
        margin-right: 0.2rem;
        position: relative;
        border-radius: 0.1rem;
        overflow: hidden;
        span {
          position: absolute;
          top: 0;
          display: inline-block;
          height: 100%;
          // width: 10%;
          background-color: #666;
        }
      }
    }
  }
}
</style>
