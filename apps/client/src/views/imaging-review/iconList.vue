<template>
    <div class="icon_contrainer">
        <div 
            v-for="item in iconList"
            :key="item.key"
            class="item-icon"
            >
            <div class="icon-container">
                <img :src="item.iconValue" class="icon"/>
                <div style="font-size: 10px; margin-top: 3px;">{{item.title}}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const iconList = [
    {
        'key': 1,
        'name': 'refresh',
        'title': '刷新',
        "iconValue": 'src/assets/RefreshRight.svg',
    },
    {
        'key': 2,
        'name': 'editPatient',
        'title': '编辑病人',
        "iconValue": 'src/assets/EditPatient.svg',
    },
    {
        'key': 3,
        'name': 'advancedQuery',
        'title': '高级查询',
        "iconValue": 'src/assets/Search.svg',
    },
]

</script>

<style scoped>
.icon_contrainer {
    height: 51px;
    width: 100%;
    background-color: #ececec;
    border-bottom: 2px solid #d4d4d4;
    display: flex;
}

.item-icon {
    margin-left: 10px; 
    height: 50px; 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
}

.icon {
    width: 24px;
    height: 24px;
}

.icon-container {
    text-align: center; /* 文字居中 */
    display: inline-flex; /* 使用 Flexbox 以便更好地控制内部元素 */
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
    flex-direction: column; /* 使元素垂直排列 */
}


</style>