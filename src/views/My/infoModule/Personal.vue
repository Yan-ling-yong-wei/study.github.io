<template>
  <div class="personal_container">
    <div><Header title="账户" back /></div>
    <div class="input_container"><input type="text" v-model="name" /></div>
    <div class="button_contaienr"><button @click="save">保存</button></div>
  </div>
</template>

<script>
import { Toast } from "vant"
import { setInfo } from "@/utils/api"
import Header from "../../../components/Header"
export default {
  components: {
    Header,
  },
  data() {
    return {
      name: "",
    }
  },
  created() {
    this.name = this.$route.query.name
  },
  methods: {
    save() {
      setInfo({ nickname: this.name }).then((res) => {
        // console.log(res)
        if (res.data.code === 200) {
          Toast.success("修改成功！")
          setTimeout(() => {
            this.$router.back()
          }, 500)
        }
      })
    },
  },
}
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
      font-size: 0.28rem;
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
