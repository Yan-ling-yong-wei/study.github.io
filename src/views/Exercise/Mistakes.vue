<template>
  <div class="mistakes">
    <Header title="错题练习" back right></Header>
    <van-row>
      <van-col span="8">
        <van-dropdown-menu>
          <van-dropdown-item title="类型不限" :options="option1" />
        </van-dropdown-menu>
      </van-col>
      <van-col span="8" @click="xiu">
        <inspection theme="outline" size="14" fill="#333" />
        巩固错题
      </van-col>
      <van-col span="8" @click="dian">
        <date-comes-back theme="outline" size="14" fill="#333" />
        移除错题
      </van-col>
    </van-row>
    <div class="cont">
      <ul>
        <li class="li2">
          <h4>
            物理学史
            <span>7道错题</span>
          </h4>
          <p>提交时间：2020/10/28 15:16:53</p>
          <button  @click="xiu">巩固错题</button>
        </li>
        <li class="li">没有更多了</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import { Dialog } from 'vant';
import { Inspection, DateComesBack } from "@icon-park/vue";
export default {
  components: {
    Header,
    Inspection,
    DateComesBack,
  },
  data() {
    return {
      option1: [
        { text: "全部", value: 0 },
        { text: "考卷练习", value: 1 },
        { text: "考点专练", value: 2 },
        { text: "仿真模考", value: 3 },
      ],
    };
  },
  methods: {
    // 移出错题
    dian() {
      Dialog.confirm({
        title: "是否做对题目后自动移出改错题",
        message:"."
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
    },
    // 巩固错题
    xiu(){
      this.$router.push({path:'/revamp'})
    },
  },
};
</script>
<style lang="scss" scoped>
.mistakes {
  width: 100%;
  height: 100%;
  .van-row {
    border-top: 0.01rem solid #ccc;
    width: 100%;
    text-align: center;
    height: 1rem;
    line-height: 1rem;
    font-size: 0.3rem;
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
            color: rgb(55, 55, 253);
            font-size: 0.28rem;
          }
        }
        p {
          font-size: 0.2rem;
          margin-top: 0.3rem;
          color: #666;
        }
        button {
          float: right;
          border: none;
          border-radius: 0.2rem;
          margin-top: 0.4rem;
          color: blueviolet;
          border: 0.01rem solid blueviolet;
          background: none;
          width: 1.8rem;
          font-size: 0.28rem;
          height: 0.7rem;
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
