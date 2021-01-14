<template>
  <div id="header">
    <h3>特色课</h3>
    <search theme="outline" size="24" fill="#595959" />
  </div>
</template>
<script>
import { Search  } from "@icon-park/vue";
export default {
    components:{
        Search,
    }
}
</script>
<style lang="scss" scoped>
#header {
  width: 100%;
  height: 0.9rem;
  h3 {
    color: #595959;
    font-size: 0.38rem;
    position: absolute;
    left: 50%;
    line-height: 0.9rem;
    transform: translateX(-50%);
  }
  .i-icon-search {
    position: absolute;
    right: 0.2rem;
    display: flex;
    margin-top: 0.2rem;
  }
}
</style>
