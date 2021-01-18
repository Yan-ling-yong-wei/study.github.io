import http from "./http"

//首页轮播图
export const getBanner = () => http.get("/banner")

//密码登陆
export const login = (data) => http.post("/login", data)
// export const register = (data) => http.post()

//用户信息获取
export const userInfo = (data) => http.get("/userInfo")

//首页推荐
export const recommend = () => http.get("/recommend/appIndex")

// 特色课
export const courseBasis = (data) => {
  console.log(data)
  let str = ""
  for (const key in data) {
    str += `${key}=${data[key]}&`
  }
  // console.log(str)
  return http.get("/courseBasis?" + str)
}
//分类
export const courseClassify = () => http.get("/courseClassify")

//获取登陆用户信息
export const getUCenterInfo = () => http.get("/getUCenterInfo")

//设置用户信息
export const setInfo = (data) => http.put("/user", data)

//关注老师接口
export const setCollect= (id)=> http.get('/teacher/collect/'+id)

//获取我关注的老师
export const getCollect = (data)=>{
  // console.log(data)
  let str = ""
  for (const key in data) {
    str += `${key}=${data[key]}&`
  }
  // console.log(str)
  return http.get("/collect?" + str)
}