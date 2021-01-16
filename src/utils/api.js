import http from "./http"
export const getBanner = () => http.get("/banner")
export const login = (data) => http.post("/login", data)
// export const register = (data) => http.post()
export const userInfo = (data) => http.get("/userInfo")
