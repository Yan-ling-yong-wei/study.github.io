<template>
  <div class="enshrine">
    <Header title="习题收藏" back right></Header>
    <div class="top">
      <van-dropdown-menu>
        <van-dropdown-item title="题目类型" :options="option1" />
      </van-dropdown-menu>
    </div>
    <div class="cont">
        <ul>
            <li class="li2">
                <p>
                    <span>[单选题]</span>
                    关于碳及其氧化物的说法正确的是
                </p>
                <button>查看详情</button>
            </li>
            <li class="li">没有更多了</li>
        </ul>
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
      option1: [
        { text: "单选", value: 0 },
        { text: "多选", value: 1 },
        { text: "判断", value: 2 },
        { text: "连线", value: 3 },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.enshrine {
  width: 100%;
  height: 100%;
  .top {
    width: 100%;
    height: 1rem;
    /deep/.van-dropdown-menu__bar {
      box-shadow: none;
    }
  }
  .cont {
    width: 100%;
    height: calc(100% - 1.9rem);
    background: #f0f2f5;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .li2 {
        width: 90%;
        height: 2.4rem;
        margin: 0.2rem auto 0;
        background: white;
        border-radius: 0.2rem;
        padding: 0 0.3rem;
        box-shadow: 0 0.1rem 0.16rem #ccc;
        p{
            font-size: 0.28rem;
            margin-top: 0.4rem;
            span{
                color: rgb(73, 104, 243);
            }
        }
        button {
          float: right;
          border: 0.01rem solid rgb(250, 60, 60);
          color: rgb(247, 73, 73);
          border-radius: 0.4rem;
          margin-top: 0.4rem;
          background: none;
          width: 1.6rem;
          font-size: 0.24rem;
          height: 0.5rem;
        }
      }
      .li {
        width: 100%;
        height: 0.4rem;
        text-align: center;
        font-size: 0.1rem;
        color: #aaa;
        line-height: 0.4rem;
        margin-top: 0.2rem;
      }
    }
  }
}
</style>
