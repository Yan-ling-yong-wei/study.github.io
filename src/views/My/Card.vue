<template>
  <div class="card">
    <div class="top">
      <div class="back">
        <left
          theme="two-tone"
          size=".5rem"
          :fill="['#000', '#fff']"
          @click.native="$router.back()"
        />
      </div>
      <h3>我的学习卡</h3>
      <div class="dui" @click="dui">学习卡兑换</div>
    </div>
    <div class="cont">
      <div class="dv" v-for="item in 2" :key="item">
        <div class="head">
          <p></p>
          <h3>学习卡</h3>
        </div>
        <div class="fot">
          <div class="lef">
            <p>思雅英语学习套餐</p>
            <p class="p1">学习卡号：12710008762</p>
          </div>
          <div class="rig">
              <img src="../../assets/img/dui.png">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Left } from "@icon-park/vue";
export default {
  methods: {
    dui() {
      this.$router.push({ path: "/learn" });
    },
  },
  components: {
    Left,
  },
};
</script>
<style lang="scss" scoped>
.card {
  width: 100%;
  height: 100%;
  .top {
    width: 100%;
    height: 0.9rem;
    background: white;
    display: flex;
    align-items: center;
    .back {
      flex: 1;
    }
    h3 {
      flex: 1;
      font-size: 0.36rem;
      text-align: center;
    }
    .dui {
      flex: 1;
      text-align: right;
      font-size: 0.3rem;
      color: #444;
      padding-right: 0.2rem;
    }
  }
  .cont {
    width: 100%;
    height: calc(100% - 0.9rem);
    background: #eee;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    .dv {
      margin: 0.26rem auto 0;
      width: 90%;
      height: 2.8rem;
      color: white;
    //   background: linear-gradient(#f7ba91, #dd5c00);
    background: #F07724;
      border-radius: 0.3rem;
      .head {
        width: 90%;
        height: 1.3rem;
        border-bottom: 0.03rem solid #f8c7a6;
        text-align: center;
        margin: 0 auto;
        p {
          width: 0.8rem;
          height: 0.05rem;
          background: white;
          margin-top: 0.2rem;
          display: inline-block;
        }
        h3 {
          font-size: 0.38rem;
          margin-top: 0.2rem;
        }
      }
      .fot {
        width: 100%;
        height: 1.5rem;
        display: flex;
        .lef {
          flex: 7;
          p {
            font-size: 0.3rem;
            color: #eee;
            margin: 0.34rem 0 0 0.3rem;
          }
          .p1 {
            font-size: 0.2rem;
          }
        }
        .rig {
          flex: 3;
          text-align: center;
          img{
              width: 75%;
              height: 90%;
              margin-top: 0.1rem;
          }
        }
      }
    }
  }
}
</style>
