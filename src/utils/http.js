import axios from "axios"

const http = axios.create({
    baseURL: "/api/app",
    timeout: 10000,
})

http.interceptors.request.use(
    (config) => {
        config.headers = {
            deviceType: "H5"
        }
        return config
    },
    (err) => {
        Promise.reject(err)
    }
)

http.interceptors.response.use(
    (res) => {
        return res
    },
    (err) => {
        Promise.reject(err)
    }
)

export default http
