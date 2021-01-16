<template>
  <div class="Famous_container">
    <div><Header title="名师" back /></div>
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
      active: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.Famous_container {
  width: 100%;
  height: 100%;
}
</style>
