import service from "../request/index";
import { ILoginData, IRegisterData } from "../type/login";

// 登录接口
export function login(data: ILoginData) {
    return service({
        url: "/auth/sign_in",
        method: "post",
        data
    })
}

// 注册接口
export function register(data: IRegisterData) {
    return service({
        url: "/users",
        method: "post",
        data
    })
}