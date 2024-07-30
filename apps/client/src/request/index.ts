import axios from "axios";

const baseURL = 'http://localhost:3001'
//创建axios实例
const service = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        "Content-type" : "application/json;charset=utf-8"
    },
})

//请求拦截
// service.interceptors.request.use((config) => {
//     config.headers = config.headers || {}
//     if(localStorage.getItem("token")){
//         config.headers.token = localStorage.getItem("token") || ""
//     }
//     return config
// })

//响应拦截
// service.interceptors.response.use(({ data }) => {
//     const code : number = data.data.code
//     if(code != 200){
//         return Promise.reject(data)
//     }
//     return data
// },(err) => {
//     console.log(err)
// })

export default service