<template>
    <el-menu 
        ref="menuRef"
        :ellipsis="false"
        menu-trigger="click"
        mode="horizontal"
        class="menuArea"
        @select='handleSelect'
    >
        <el-sub-menu index="mainMenu" :teleported="false">
            <template #title>
                <el-avatar> user </el-avatar>
                <span style="margin-left: 10px;">{{ userStore.userInfo.userName }}</span>
            </template>
            <div class="user-info">
                <el-avatar style="margin-left: 10px;"> {{ userStore.userInfo.userName }} </el-avatar>
                <div class="user-info-right">
                    <span>用户名: {{ userStore.userInfo.userName }}</span>
                    <span>邮箱: {{ userStore.userInfo.email }}</span>
                </div>
            </div>
            <el-menu-item index="updateUserInfo">修改用户信息</el-menu-item>
            <el-menu-item index="settings">个性化配置</el-menu-item>
            <el-menu-item index="logout">退出登录</el-menu-item>
        </el-sub-menu>
    </el-menu>
</template>

<script setup lang="ts">
import { ElMessageBox } from "element-plus";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const router = useRouter()
const menuRef = ref()

const handleSelect = (key: string, _keyPath: string[]) => {
    console.log(key)
    if(key === 'logout'){
        ElMessageBox.confirm(
            '确定要退出吗?',
            '提示',
            {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                type: 'warning',
            }
        )
        .then(() => {
            userStore.clearUserInfo()
            router.push('/login')
        })
    }
}

</script>

<style scoped>
.menuArea {
    height: 100%;
    border: none !important;
    background: transparent;
    border: none;
}

.user-info {
    display: flex;
    width: 240px;
}

.user-info-right {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-bottom: 15px;
}

</style>