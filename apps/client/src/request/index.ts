import axios from "axios";
import { router } from '../main';
import { useUserStore } from '../stores/user'


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
service.interceptors.request.use((config) => {
    const userStore = useUserStore()
    console.log(userStore)
    const token = userStore.token
    if(token){
        config.headers.Authorization = token
    }
    return config
}, e => Promise.reject(e))

//响应拦截
service.interceptors.response.use(res => res, e =>{
    const userStore = useUserStore()
    // token失效处理
    if(e.response.status === 401){
        router.push('/login')
        userStore.clearUserInfo()
    }
    return Promise.reject(e)
})

export default service