<template>
  <div class="preface">
    <Header title="考点专练" back></Header>
    <div class="top">
      <input type="text" placeholder="请输入题库名称关键词" />
      <span>
        <search theme="outline" size="20" fill="#333" />
      </span>
    </div>
    <div class="cont">
      <van-row>
        <van-col span="6">
          <van-sidebar v-model="active">
            <van-sidebar-item v-for="(item,index) in list" :key="index" :title="item.title" />
          </van-sidebar>
        </van-col>
        <van-col span="18">
            洛必达法则
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import { Search } from "@icon-park/vue";
export default {
  components: {
    Header,
    Search,
  },
  data() {
      return {
          active:"",
          list:[
              {title:"求导题库"},
              {title:"极限题库"},
              {title:"生物"},
              {title:"化学"},
              {title:"数学"},
              {title:"物理"},
          ]
      }
  },
};
</script>

<style lang="scss" scoped>
.preface {
  width: 100%;
  height: 100%;
  .top {
    width: 100%;
    height: 1.2rem;
    border-top: 0.01rem solid #ccc;
    text-align: center;
    line-height: 1.2rem;
    position: relative;
    input {
      width: 90%;
      height: 60%;
      border: none;
      border-radius: 0.2rem;
      background: #f0f2f5;
      font-size: 0.3rem;
      text-indent: 0.2rem;
    }
    span {
      position: absolute;
      right: 0.3rem;
      top: 0.06rem;
    }
  }
  .cont {
    width: 100%;
    height: calc(100% - 2.1rem);
  }
}
</style>
