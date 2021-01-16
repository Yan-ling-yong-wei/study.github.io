<template>
  <div class="discounts">
    <Header title="我的优惠券" back></Header>
    <van-tabs v-model="active">
      <van-tab v-for="item in list" :key="item.id" :title="item.title"></van-tab>
    </van-tabs>
    <div class="cont">
      <div class="dv" v-for="item in 3" :key="item">
        <div class="lef">
          ￥
          <i>50</i>    
        </div>
        <div class="cent">
          <h3>现金券</h3>
          <p>限品类：初三英语</p>
          <p>2018.02.14 - 2018.02.20</p>
        </div>
        <div class="rig">
          <button>立即使用</button>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import Header from "@/components/Header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      active: "",
      list: [
        { title: "全部", id: 1 },
        { title: "已使用", id: 2 },
        { title: "未使用", id: 3 },
        { title: "已过期", id: 4 },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.discounts {
  width: 100%;
  height: 100%;
  .cont{
    width: 100%;
    height: calc(100% - 1.8rem);
    background: #eee;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    .dv{
      width: 95%;
      height: 1.4rem; 
      border-radius: 0.05rem;
      margin: 0.26rem auto 0;
      display: flex;
      .lef{
        flex: 3;
        background: white;
        color: #eb6100;
        font-size: 0.3rem;
        text-align: center;
        line-height: 1.4rem;
        i{
          font-size: 0.7rem;
          font-weight: bold;
        }
      }
      .cent{
        flex: 7;
        background: white;
        border-top-right-radius: 0.2rem;
        border-bottom-right-radius: 0.2rem;
        h3{
          font-size: 0.34rem;
          font-weight: bold;
          margin: 0.16rem 0 0 0.1rem;
        }
        p{
          font-size: 0.2rem;
          color: #888;
          margin: 0.1rem 0 0 0.1rem;
        }
      }
      .rig{
        flex: 4;    
        button{
          border: none;
          width: 100%;
          height: 100%;
          border-radius: 0.1rem;
          background: #eb6100;
          font-size: 0.3rem;
          color: white;
        }
      }
    }
  }
}
</style>
