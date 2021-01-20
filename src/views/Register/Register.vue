<template>
  <div id="login">
    <div class="login_container">
      <img src="../../assets/img/log01.png" alt="" />
    </div>
    <van-form @submit="userLogin">
      <van-field
        v-model="obj.mobile"
        center
        clearable
        type="tel"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '手机号手机错误' }]"
      >
        <template #button>
          <van-button size="small" type="primary" @click="sendCode">获取验证</van-button>
        </template>
      </van-field>
      <van-field
        v-model="obj.pwd"
        type="number"
        name="验证码"
        label="验证码"
        placeholder="请输入短信验证码"
        :rules="[{ required: true, message: '验证码错误' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
    <div class="foot">
      <div class="dv">*未注册的手机号将自动注册</div>
      <div class="dv" @click="onClickRegister">密码登录</div>
    </div>
    
  </div>
</template>
<script>
import { Register, smsCode } from "@/utils/api";
export default {
  data() {
    return {
      obj: {
        mobile: "",
        sms_type: "login",
        pwd: "",
      },
    };
  },
  methods: {
    onClickRegister() {
      this.$router.push("/login");
    },
    userLogin() {
      register().then((res) => {
        console.log(res);
      });
    },
    sendCode() {
      smsCode(this.obj).then((res) => {
        console.log(res);
      });
    },
  },
};
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
  .van-button--primary{
    background: #fc5600;
    border: none;
  }
  .foot {
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 0.28rem;
    color: #888;
  }
}
</style>
