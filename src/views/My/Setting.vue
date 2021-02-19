<template>
  <div class="setting">
    <nav-header back title="设置" />
    <div class="setPass" @click="pass">
      设置密码
    </div>
    <div class="logout" @click="logOut">
      退出登录
    </div>
  </div>
</template>
<script>
import { Toast } from "vant"
import navHeader from "../../components/Header.vue"
export default {
  components: { navHeader },
  methods: {
    logOut() {
      sessionStorage.removeItem("token")
      Toast.success("退出成功！")
      setTimeout(() => {
        this.$router.push("/")
      }, 300)
    },
    pass(){
      this.$router.push({path:'/setpwd'})
    }
  },
}
</script>

<style lang="scss" scoped>
.setting {
  font-size: 0.32rem;
  .setPass {
    margin-left: 0.4rem;
    line-height: 1rem;
  }
}
.logout {
  margin: 1rem 0.4rem;
  background-color: antiquewhite;
  line-height: 0.8rem;
  border-radius: 0.06rem;
  text-align: center;
  color: #fff;
  background-color: #e60012;
}
</style>
