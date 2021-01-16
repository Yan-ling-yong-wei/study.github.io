<template>
  <div class="phone_container">
    <div>
      <Header title="绑定手机号" back />
    </div>
    <div class="phone_input_container">
      <div class="pgone_input_container">
        <div class="mybox">
          <input type="text" placeholder="请输入手机号" />
          <div><div>获取验证码</div></div>
        </div>
        <input type="text" placeholder="请输入验证码" />
      </div>
    </div>
    <div class="phone_button_container"><button >确定</button></div>
  </div>
</template>

<script>
import Header from "../../components/Header";
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.phone_container {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  //
  .phone_input_container {
    width: 100%;
    height: 2.5rem;
    margin-top: 0.1rem;
    background-color: #fff;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #CDCDCD;
    .pgone_input_container {
      width: 95%;
      height: 100%;
      font-size: 0.3rem;
      .mybox {
        width: 100%;
        height: 1rem;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        div {
          width: 2.8rem;
          height: 100%;
          border-bottom: 1px solid #ddd;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          div {
            width: 2.2rem;
            height: 70%;
            text-align: center;
            line-height: 0.5rem;
            color: #fff;
            background-color: #eb6100;
          }
        }
      }
      input {
        width: 100%;
        height: 1rem;
        border: 0;
        outline: none;
        border-radius: 3px;
        border-bottom: 1px solid #ddd;
      }
    }
  }
  .phone_button_container {
    width: 100%;
    height: 1rem;
    color: #fff;
    font-size: 0.3rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;   
    button{
        width: 95%;
        height: 100%;
        outline: none;
        border: 1px solid #eb6100;
        background-color: #eb6100;

    }
  }
}
</style>
