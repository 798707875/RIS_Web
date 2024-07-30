/**
 * 表单数据接口
 */
export interface ILoginData{
    login: string
    password: string
}

export class LoginData{
    ruleForm: ILoginData = {
        login: "",
        password: ""
    }
}

export interface IRegisterData{
    username: string
    password: string
    email: string
}

export class RegisterData{
    ruleForm: IRegisterData = {
        username: "",
        password: "",
        email: ''
    }
}
