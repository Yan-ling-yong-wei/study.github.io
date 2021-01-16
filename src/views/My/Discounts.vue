<template>
  <div class="discounts">
    <Header title="我的优惠券" back></Header>
    <van-tabs v-model="active">
      <van-tab v-for="item in list" :key="item.id" :title="item.title"></van-tab>
    </van-tabs>
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
  background: #eee;
}
</style>
