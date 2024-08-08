<template>
    <div class="container">
        <div 
            v-for="item in customTabList"
            :key="item.key"
            class="item-icon"
            :class="[
                {
                    'is-active': route.name === item.path
                }
            ]"
            @click="activeHeaderTab(item)">
            <div class="icon">
                <el-tooltip :content="item.title">
                    <img :src="item.iconValue" />
                </el-tooltip>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";

const router = useRouter()
const route = useRoute()

const customTabList = [
    {
        'key': 2,
        'name': 'InformationRegistration',
        'title': '患者注册',
        "path": 'information-registration',
        "iconValue": 'src/assets/Edit.svg',
    },
    {
        'key': 1,
        'name': 'ImagingReview',
        'title': '患者管理',
        "path": 'imaging-review',
        "iconValue": 'src/assets/View.svg',
    },
]

const activeHeaderTab = (item: any) => {
    console.log(item.iconValue)
    router.push('/' + item.path)
}

</script>

<style scoped>
.container {
    display: flex;
}

.is-active {
    background-color: #288ef4;
    border: 1px solid #288ef4;
    color: #ffffff;
}

.item-icon {
    margin-right: 10px; 
    height: 50px; 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
}

.icon {
    width: 24px;
    height: 24px;
}

</style>