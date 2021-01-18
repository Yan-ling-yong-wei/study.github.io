<template>
  <div class="appraisal">
    <Header title="测评记录" back right></Header>
    <div class="top">
      <van-dropdown-menu>
        <van-dropdown-item title="类型不限" :options="option1" />
        <van-dropdown-item title="时间" :options="option2" />
      </van-dropdown-menu>
    </div>
    <div class="cont">
      <ul>
        <li class="li2">
          <h4>
            物理学史
            <span><i>0</i>/8</span>
          </h4>
          <p>答题时长：0分41秒 正确率：0% </p>
          <p>提交时间：2020/10/28 15:16:53</p>
          <button>重新练习</button>
          <button>查看解析</button>
        </li>
        <li class="li">没有更多了</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Header from "../../components/Header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      option1: [
        { text: "全部", value: 1 },
        { text: "套卷练习", value: 2 },
        { text: "仿真模考", value: 3 },
        { text: "考点专练", value: 4 },
      ],
      option2: [
        { text: "全部", value: "a" },
        { text: "今天", value: "b" },
        { text: "7天", value: "c" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.appraisal {
  width: 100%;
  height: 100%;
  .top {
    width: 100%;
    height: 1rem;
    /deep/.van-dropdown-menu__bar {
      box-shadow: none;
      border-top: 0.01rem solid #ccc;
    }
  }
  .cont {
    width: 100%;
    height: calc(100% - 1.9rem);
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      .li2 {
        width: 90%;
        height: 3rem;
        margin: 0.2rem auto 0;
        background: white;
        border-radius: 0.2rem;
        padding: 0 0.3rem;
        box-shadow: 0 0.1rem 0.16rem #ccc;
        h4 {
          font-size: 0.36rem;
          margin-top: 0.4rem;
          span {
            float: right;
            font-weight: normal;
            font-size: 0.28rem;
            i{
                color: blue;
            }
          }
        }
        p {
          font-size: 0.2rem;
          margin-top: 0.18rem;
          color: #666;
        }
        button {
          float: right;
          border: none;
          border-radius: 0.2rem;
          margin: 0.4rem 0.2rem 0 0;
          color: rgb(74, 74, 243);
          background: none;
          border: 0.01rem solid rgb(74, 74, 243);
          width: 1.5rem;
          font-size: 0.24rem;
          height: 0.6rem;
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
