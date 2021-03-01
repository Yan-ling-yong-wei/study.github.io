<template>
  <div id="login">
    <div class="login_container">
      <img src="../../assets/img/log01.png" alt="" />
    </div>
    <van-form @submit="userLogin">
      <van-field
        v-model="user.mobile"
        name="手机号"
        label="手机号"
        type="tel"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '手机号格式错误' }]"
      />
      <van-field
        v-model="user.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '密码格式错误' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <div class="foot">
      <div class="dv" @click="go">找回密码</div>
      <div class="dv" @click="onClickRegister">注册/验证登录</div>
    </div>
  </div>
</template>
<script>
import { Toast } from "vant"
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
    go() {
      this.$router.push({ path: "/Retrieve" })
    },
    ...mapMutations(["setUser"]),
    async userLogin() {
      let { data } = await login(this.user)
      if (data.code === 200) {
        sessionStorage.setItem("userId", data.data.id)
        sessionStorage.setItem("token", data.data.remember_token)
        Toast.success("登录成功！")
        setTimeout(() => {
          if (localStorage.getItem("currentRoute")) {
            this.$router.push(localStorage.getItem("currentRoute"))
            localStorage.removeItem('currentRoute')
          } else {
            this.$router.push("/")
          }
        }, 500)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
#login {
  width: 100%;
  height: 100%;
  padding: 0 0.3rem;
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
  /deep/.van-button--info {
    background: #fc5600;
    border: none;
  }
  .foot {
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 0.3rem;
    color: #888;
  }
}
</style>
