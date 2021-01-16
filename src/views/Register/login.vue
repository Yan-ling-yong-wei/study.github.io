<template>
  <div id="login">
    <div class="login_container">
      <img src="../../assets/img/log01.png" alt="" />
    </div>
    <div class="login_input_container">
      <div>
        <input type="text" placeholder="请输入手机号" v-model="user.mobile" />
        <input type="password" placeholder="请输入密码" v-model="user.password" />
        <div class="zhece_container">
          <span>找回密码</span>
          <span @click="onClickRegister">注册/验证登录</span>
        </div>
        <button @click="userLogin()">登录</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex"
import { login } from "@/utils/api"
export default {
  data() {
    return {
      user: {
        mobile: "15810195203",
        password: "6666666666",
        type: 1,
      },
    }
  },

  methods: {
    onClickRegister() {
      this.$router.push("/Register")
    },
    ...mapMutations(["setUser"]),
    userLogin() {
      login(this.user).then((res) => {
        console.log(res.data)
        this.setUser(res.data.data)
        this.$router.back()
      })

    },
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
      input {
        width: 100%;
        height: 0.6rem;
        border: 0;
        border-bottom: 0.1px solid #f1f1f1;
        font-size: 0.3rem;
        color: black;
      }
      .zhece_container {
        width: 100%;
        height: 0.3rem;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.3rem;
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
