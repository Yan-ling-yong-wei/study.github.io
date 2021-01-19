import axios from "axios"
import vueRouter from "vue-router"
import { Guid } from "@/utils/guid.js"
import { Toast } from "vant"
const http = axios.create({
  baseURL: "http://120.53.31.103:84/api/app",
  timeout: 10000,
})
let reqCount = 0,
  toast
http.interceptors.request.use(
  (config) => {
    reqCount++
    if (reqCount !== 0) {
      toast = Toast.loading({
        message: "正在加载...",
        duration: 0,
        forbidClick: true,
      })
    }

    if (!sessionStorage.getItem("DeviceId")) {
      let DeviceID = Guid.NewGuid().ToString("D")
    }
    let token = sessionStorage.getItem("token")
    config.headers = {
      Authorization: `Bearer ${token}`,
      DeviceID: sessionStorage.getItem("DeviceId"),
      deviceType: "H5",
    }
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

http.interceptors.response.use(
  (res) => {
    if (res.data.code === 200) {
      reqCount--
      if (reqCount === 0) toast.clear()
    } else {
      toast.clear()
      Toast.fail(res.data.msg)
    }
    return res
  },
  (err) => {
    // console.log(err.request, err.message)
    if (err.message.includes("timeout")) {
      toast.clear()
      Toast.fail("连接超时！")
    }
    return Promise.reject(err)
  }
)

export default http
