<template>
  <div class="vip">
    <Header title="会员列表" back></Header>
    <div class="cont">
      <div class="dv" v-for="item in list" :key="item.id">
        <div class="logo">
          <img :src="item.img" />
        </div>
        <div class="center">
          <h4>{{ item.title }}</h4>
          <p>年卡仅需123元</p>
          <p>仅限18岁以下学生购买</p>
        </div>
        <div class="logo">
          <button @click="kai">立即开通</button>
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
      list: [
        { img: require("../../assets/img/tong.jpg"), title: "青铜会员", id: 1 },
        { img: require("../../assets/img/yin.jpg"), title: "白银会员", id: 2 },
        { img: require("../../assets/img/jin.jpg"), title: "黄金会员", id: 3 },
        {
          img: require("../../assets/img/baijin.jpg"),
          title: "铂金会员",
          id: 4,
        },
      ],
    };
  },
  methods: {
      kai(){
          this.$router.push({path:'/open'})
      }
  },
};
</script>
<style lang="scss" scoped>
.vip {
  width: 100%;
  height: 100%;
  background: #eee;
  .cont {
    width: 100%;
    height: calc(100% - 1rem);
    margin-top: 0.1rem;
    display: flex;
    flex-direction: column;
    .dv {
      width: 100%;
      height: 1.6rem;
      margin-top: 0.1rem;
      background: white;
      display: flex;
      .logo {
        flex: 3;
        text-align: center;
        img {
          width: 60%;
          margin-top: 0.24rem;
        }
        button {
          width: 80%;
          height: 0.56rem;
          border: none;
          border-radius: 0.1rem;
          font-size: 0.2rem;
          margin-top: 0.5rem;
          background: linear-gradient(to bottom right, #eacaa4, #bd9267);
        }
      }
      .center {
        flex: 7;
        h4 {
          font-size: 0.34rem;
          margin: 0.3rem 0 0.1rem 0.2rem;
        }
        p {
          font-size: 0.2rem;
          margin: 0 0 0.1rem 0.2rem;
          color: #888;
        }
      }
    }
  }
}
</style>
