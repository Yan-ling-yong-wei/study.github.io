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
  // console.log(data)
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

//获取城市 /sonArea/0
// export const getCity = (data) => http.get("/sonArea/410000")
//点击进入详情页
export const getDetail = (id) => http.get("/teacher/info/" + id)
//详情页老师介绍
export const getjie = (id) => http.get("/teacher/" + id)

//关注老师接口
export const setCollect = (id) => http.get("/teacher/collect/" + id)

//获取我关注的老师
export const getCollect = (data) => {
  // console.log(data)
  let str = ""
  for (const key in data) {
    str += `${key}=${data[key]}&`
  }
  // console.log(str)
  return http.get("/collect?" + str)
}

//图片上传到服务器
export const uploaderImg = (formData) => http.post("/public/img", formData)

//发送获取验证码
export const smsCode = (obj) => http.post("/smsCode", obj)

//课程详情页数据
export const getCourBas = (id) => http.get("/courseInfo/basis_id=" + id)

//课程收藏
export const getKeCollect = (data) => http.post("/collect", data)

//课程取消收藏
// export const setQushou = (data) => http.post("/collect/cancel", data)
export const setQushou = (id) => {
  return http.put("/collect/cancel/" + id + "/1")
}

//搜索接口
export const getSearch = (data) => {
  // console.log(data);
  let str = ""
  for (const key in data) {
    str += `${key}=${data[key]}&`
  }
  // console.log(str)
  return http.get("/courseBasis?" + str)
}

//我的学习
// myStudy / 2
export const myStudy = (type) => http.get("/myStudy/" + type)

//立即报名
export const DanPresent = (data) => http.post("/order/downOrder", data)

//设置更改密码
export const setPaswd = (data) => http.post("/password", data)

//获取三级联动
export const setSJ = (id) => http.get("/sonArea/" + id)

//获取课程评价
export const courseComment = async (data) => {
  let { data: res } = await http.post("/courseComment", data)
  return res.data
}

// myStudy/comment/200
export const getComment = async (id) => {
  let { data: res } = await http.get("/myStudy/comment/" + id)
  return res.data
}

export const setComment = async (obj) => {
  let { data: res } = await http.post("/myStudy/comment/", obj)
  return res.data
}
