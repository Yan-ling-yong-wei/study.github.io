<template>
  <div class="phone_container">
    <div>
      <Header title="找回密码" back />
    </div>
    <div class="phone_input_container">
      <div class="pgone_input_container">
        <div class="mybox">
          <input type="text" placeholder="请输入手机号" v-model="user.mobile" />
          <div @click="sendCode">获取验证码</div>
        </div>
        <input type="text" placeholder="请输入验证码" />
        <input type="passwrod" placeholder="请输入密码" />
      </div>
    </div>
    <div class="phone_button_container"><button>完成</button></div>
  </div>
</template>

<script>
import { smsCode } from "@/utils/api"
import Header from "../../components/Header"
export default {
  components: {
    Header,
  },
  data() {
    return {
      user: {
        mobile: "",
        sms_type: "login",
      },
    }
  },
  methods: {
    sendCode() {
      smsCode(this.user).then((res) => {
        console.log(res)
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.phone_container {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  //
  .phone_input_container {
    width: 100%;
    height: 3.4rem;
    margin-top: 0.1rem;
    background-color: #fff;
    display: inline-flex;
    justify-content: center;
    align-items: center;
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
        border: 0px;
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
    button {
      width: 95%;
      height: 100%;
      outline: none;
      border: 1px solid #eb6100;
      background-color: #eb6100;
    }
  }
}
</style>
