<template>
  <div class="exam">
    <Header title="仿真考试" back right></Header>
    <van-dropdown-menu>
      <van-dropdown-item title="考试类型" :options="option1" />
      <van-dropdown-item title="考试状态" :options="option2" />
      <van-dropdown-item title="参考状态" :options="option3" />
    </van-dropdown-menu>
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
        { text: "全部", value: 1 },
        { text: "模拟考试", value: 2 },
        { text: "真实考试", value: 3 },
      ],
      option2: [
        { text: "全部", value: "a" },
        { text: "未开始", value: "b" },
        { text: "进行中", value: "c" },
        { text: "已结束", value: "d" },
      ],
      option3: [
        { text: "全部", value: "a" },
        { text: "已做", value: "b" },
        { text: "未做", value: "c" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.exam {
  width: 100%;
  height: 100%;
  /deep/.van-dropdown-menu__bar {
      box-shadow: none;
      border-top: 0.01rem solid #ccc;
    }
}
</style>
