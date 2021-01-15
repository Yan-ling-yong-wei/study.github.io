<template>
  <div class="learn">
    <Header back title="学习卡兑换"></Header>
    <div class="cont">
      <div class="top">
        <p>卡号：<input type="text" placeholder="请输入学习卡号" /></p>
        <p>密码：<input type="text" placeholder="请输入学习卡密码" /></p>
      </div>
      <div class="fot">
        <button>立即兑换</button>
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
};
</script>
<style lang="scss" scoped>
.learn {
  width: 100%;
  height: 100%;
  background: #eee;
  .cont {
    width: 100%;
    background: white;
    height: calc(100% - 1rem);
    margin-top: 0.1rem;
    overflow: hidden;
    .top {
      width: 90%;
      height: 3rem;
      margin: 0 auto;
      p {
        padding: 0.3rem 0 0.3rem 0;
        border-bottom: 0.01rem solid #ccc;
        font-size: 0.32rem;
        font-weight: bold;
        input {
            font-weight: normal;
          border: none;
        }
      }
    }
    .fot {
      width: 100%;
      height: 2rem;
      margin-top: 2rem;
      text-align: center;
      button {
        width: 90%;
        height: 1rem;
        border: none;
        border-radius: 0.1rem;
        color: white;
        background: #eb6100;
        font-size: 0.3rem;
      }
    }
  }
}
</style>
