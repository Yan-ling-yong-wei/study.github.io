<template>
  <div class="file">
    <Header title="套卷练习" back right></Header>
    <van-dropdown-menu>
      <van-dropdown-item title="套卷分类" :options="option1" />
      <van-dropdown-item title="套卷状态" :options="option2" />
    </van-dropdown-menu>
    <div class="cont">
        请稍后，套卷正在赶来的路上
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
        { text: "全部商品", value: 1 },
        { text: "新款商品", value: 2 },
        { text: "活动商品", value: 3 },
      ],
      option2: [
        { text: "默认排序", value: 'a' },
        { text: "好评排序", value: 'b' },
        { text: "销量排序", value: 'c' },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.file {
  width: 100%;
  height: 100%;
  /deep/.van-dropdown-menu__bar {
      box-shadow: none;
      border-top: 0.01rem solid #ccc;
    }
    .cont{
        width: 100%;
        height: calc(100% - 1.9rem);
        font-size: 0.2rem;
        text-align: center;
        padding-top: 0.3rem;
    }
}
</style>
