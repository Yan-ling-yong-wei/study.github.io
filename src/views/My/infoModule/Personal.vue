<template>
  <div class="personal_container">
    <div><Header title="账户" back /></div>
    <div class="input_container"><input type="text" /></div>
    <div class="button_contaienr"><button>保存</button></div>
  </div>
</template>

<script>
import Header from "../../../components/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.personal_container {
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
  .input_container {
    width: 100%;
    height: 1rem;
    background-color: #fff;
    input {
      width: 100%;
      height: 100%;
      background-color: #fff;
      border: 0px;
      outline: none;
    }
  }
  .button_contaienr {
    width: 100%;
    height: 1rem;
    position: absolute;
    bottom: 0px;
    left: 0px;
    button {
      width: 100%;
      height: 1rem;
      outline: none;
      border: 0px;
      font-size: 0.3rem;
      border-radius: 0.2rem;
      color: #fff;
      background-color: #ff0000;
    }
  }
}
</style>
