<template>
    <div class="container">
        <div class="login-form">
            <el-card class="login-card">
                <template #header>
                    <div class="card-header">
                        <div style="text-align: center;">放射科登录系统</div>
                    </div>
                </template>
                <el-tabs @tab-click="handleTabClick" v-model="activeName">
                    <el-tab-pane label="登录" name="login"></el-tab-pane>
                    <el-tab-pane label="注册" name="register"></el-tab-pane>
                </el-tabs>
                <el-form
                    ref="ruleFormRef"
                    :rules="rules"
                    style="max-width: 600px; margin-top: 5px;"
                    :model="ruleForm"
                    status-icon
                    label-width="auto"
                >
                    <el-form-item v-show="activeName == 'login'" label="用户名/邮箱：" prop="login" label-position="top">
                        <el-input v-model="ruleForm.login" size="large" autocomplete="off" placeholder="请输入用户名或邮箱" />
                    </el-form-item>
                    <el-form-item v-show="activeName !== 'login'" label="用户名：" prop="userName" label-position="top">
                        <el-input v-model="ruleForm.userName" size="large" autocomplete="off" placeholder="请输入用户名" />
                    </el-form-item>
                    <el-form-item v-show="activeName !== 'login'" label="邮箱：" prop="email" label-position="top">
                        <el-input v-model="ruleForm.email" size="large" autocomplete="off" placeholder="请输入邮箱" />
                    </el-form-item>
                    <el-form-item label="密码：" prop="passWord" label-position="top">
                        <el-input v-model="ruleForm.passWord" size="large" type="password" autocomplete="off" placeholder="请输入密码" show-password />
                    </el-form-item>
                    <el-form-item v-show="activeName !== 'login'" label="确认密码：" prop="confirm" label-position="top">
                        <el-input v-model="ruleForm.confirm" size="large" type="password" autocomplete="off" placeholder="请确认密码" show-password />
                    </el-form-item>
                    <el-form-item prop="check">
                        <el-checkbox v-model="ruleForm.check" label="已阅读并同意用户协议和隐私政策" />
                    </el-form-item>
                    <el-form-item>
                        <div class="login-button">
                            <el-button type="primary" size="large" @click="submitForm(ruleFormRef)">
                                提交
                            </el-button>
                            <el-button @click="resetForm(ruleFormRef)" size="large">重置</el-button>
                        </div>
                    </el-form-item>
                </el-form>
            </el-card>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage, FormRules, type FormInstance, type TabsPaneContext } from 'element-plus'
import { useRouter } from "vue-router";
import { login, register } from '../../apis/login'

const router = useRouter()
const ruleFormRef = ref<FormInstance>()
const activeName = ref('login')
const ruleForm = reactive({
    login: '',
    userName: '',
    email: '',
    passWord: '',
    confirm: '',
    check: ''
})

const validateConfirm = (_rule: any, value: any, callback: any) => {
    if(activeName.value === 'login'){
        callback()
    }else{
        if (value === '') {
            callback(new Error('请确认密码'))
        } else if (value !== ruleForm.passWord) {
            callback(new Error("两次输入的密码不一致"))
        } else {
            callback()
        }
    }
}

const validateUserName = (_rule: any, value: any, callback: any) => {
    if(activeName.value === 'login'){
        callback()
    }else{
        if (value === '') {
            callback(new Error('请确认用户名'))
        } else {
            callback()
        }
    }
}

const validateEmail = (_rule: any, value: any, callback: any) => {
    if(activeName.value === 'login'){
        callback()
    }else{
        if (value === '') {
            callback(new Error('请确认邮箱'))
        } else {
            callback()
        }
    }
}

const validateLogin = (_rule: any, value: any, callback: any) => {
    if(activeName.value !== 'login'){
        callback()
    }else{
        if (value === '') {
            callback(new Error('请确认用户名/邮箱'))
        } else {
            callback()
        }
    }
}

const rules = reactive<FormRules<typeof ruleForm>>({
    login: [{ required: true, validator: validateLogin, trigger: 'blur' },],
    userName: [{ required: true, validator: validateUserName, trigger: 'blur' },],
    email: [{ required: true, validator: validateEmail, trigger: 'blur' },],
    passWord: [{ required: true, message: '请输入密码', trigger: 'blur' },],
    confirm: [{ required: true, validator: validateConfirm, trigger: 'blur' }],
})

const handleTabClick = (_tab: TabsPaneContext) => {
    ruleFormRef.value?.resetFields()
}

const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate(async (valid) => {
        if (valid) {
            if(!ruleForm.check){
                ElMessage({
                    message: '未勾选用户协议.',
                    type: 'warning',
                })
                return
            }
            // 登录
            if(activeName.value === 'login'){
                const res = await login({
                    'login': ruleForm.login,
                    'password': ruleForm.passWord
                })
                console.log(res.data)
                if(res.data.status){
                    ElMessage({
                        message: '登录成功.',
                        type: 'success',
                    })
                    router.push('/')
                }else{
                    ElMessage({
                        message: res.data.errors.join(','),
                        type: 'error',
                    })
                }
            }else{
                // 注册
                try{
                    const res = await register({
                        'username': ruleForm.userName,
                        'password': ruleForm.passWord,
                        'email': ruleForm.email
                    })
                    if(res.data.status){
                        ElMessage({
                            message: '注册成功.',
                            type: 'success',
                        })
                        router.push('/')
                    }else{
                        ElMessage({
                            message: res.data.errors.join(','),
                            type: 'error',
                        })
                    }
                }catch(error){
                    ElMessage({
                        message: '注册失败.',
                        type: 'error',
                    })
                }
            }
        } else {
            console.log('error submit!')
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

</script>

<style scoped>
.container {
    width: 100%;
    height: 100vh;
    background-image: url("src/assets/bg.jpg");
}

.login-form {
    display: flex;
    justify-content: center;
}

.login-card {
    position: relative;
    top: 8vh;
    width: 480px
}

.login-button{
    margin-left: 140px;
}

.el-card.is-always-shadow, .el-card.is-hover-shadow:focus, .el-card.is-hover-shadow:hover{
    border-radius: 20px;
}

</style>