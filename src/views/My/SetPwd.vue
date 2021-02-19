<template>
  <div class="setpwd">
    <div class="cont">
      <div class="num">
        <input type="text" placeholder="请输入手机号" v-model="number" />
        <span @click="yz">获取验证码</span>
      </div>
      <div class="num">
        <input type="text" placeholder="请输入验证码" v-model="yzm" />
      </div>
      <div class="num">
        <input type="password" placeholder="请输入密码" v-model="pwd" />
      </div>
      <button @click="gai">确定</button>
    </div>
  </div>
</template>
<script>
import { smsCode, setPaswd } from "@/utils/api";
export default {
  data() {
    return {
      number: "",
      yzm: "",
      pwd: "",
    };
  },
  methods: {
    yz() {
      smsCode({
        mobile: this.number,
        sms_type: "getPassword",
      }).then((res) => {
        console.log(res);
      });
    },
    gai() {
      setPaswd({
        mobile: this.number,
        password: this.pwd,
        sms_code: this.yzm,
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.setpwd {
  width: 100%;
  height: 100%;
  .cont {
    width: 90%;
    margin: 0 auto;
    height: 6rem;
    // background: blue;
    overflow: hidden;
    .num {
      height: 1rem;
      margin-top: 0.15rem;
      background-color: #fff;
      border-bottom: 1px solid #dad8d8;
      input {
        border: none;
        font-size: 0.28rem;
        height: 100%;
        &::-webkit-input-placeholder {
          color: #aaa;
        }
      }
      span {
        color: red;
        float: right;
        font-size: 0.1rem;
        margin-top: 0.3rem;
      }
    }
    button {
      width: 80%;
      height: 1rem;
      background: #e61324;
      color: white;
      border: none;
      border-radius: 0.1rem;
      font-size: 0.3rem;
      display: block;
      margin: 1rem auto 0;
      box-shadow: 0 0 0.3rem #f35360;
    }
  }
}
</style>
