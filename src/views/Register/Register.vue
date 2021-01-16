<template>
  <div id="login">
    <div class="login_container">
      <img src="../../assets/img/log01.png" alt="" />
    </div>
    <div class="login_input_container">
      <div>
        <div>
          <input type="text" placeholder="请输入手机号" v-model="user.mobile" />
          <span class="research_container">获取验证码</span>
        </div>
        <input type="password" placeholder="请输入密码" v-model="user.passworf" />
        <div>
          <span>*未注册的手机号将自动注册</span>
          <span @click="onClickRegister">使用密码登录</span>
        </div>
        <button @click="userLogin">登录</button>
      </div>
    </div>
  </div>
</template>
<script>
import { Register } from "@/utils/api"
export default {
  methods: {
    onClickRegister() {
      this.$router.push("/login")
    },
    userLogin() {
      register().then((res) => {
        console.log(res)
      })
    },
  },
  data() {
    return {
      user: {
        mobile: "",
        password: "",
        type: 2,
      },
    }
  },
}
</script>
<style lang="scss" scoped>
#login {
  width: 100%;
  height: 100%;
  .login_container {
    width: 100%;
    height: 25%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    img {
      width: 4.7rem;
      height: 1rem;
    }
  }
  .login_input_container {
    width: 100%;
    height: 40%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    div {
      width: 80%;
      height: 100%;
      div {
        width: 100%;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        .research_container {
          width: 26%;
          color: #efbed6;
          line-height: 0.7rem;
          height: 0.7rem;
          border-bottom: 1px solid #f1f1f1;
          font-size: 0.3rem;
        }
      }
      input {
        width: 100%;
        height: 0.7rem;
        border: 0px;
        border-bottom: 0.1px solid #f1f1f1;
        font-size: 0.3rem;
        color: black;
      }
      div {
        width: 100%;
        height: 0.3rem;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.2rem;
        color: #999;
      }
      button {
        font-size: 0.3rem;
        background-color: #fc5600;
        color: #fff;
        border: 1px solid #fc5600;
        width: 100%;
        height: 0.9rem;
        border-radius: 1rem;
        margin-top: 0.8rem;
      }
    }
  }
}
</style>
