<template>
    <div class="header">
        <div class="left">111</div>
        <div class="right">
            <div>
                <DropDownMenu />
            </div>
            <div class="segmentation">|</div>
            <div class="tab-menu">
                <TabMenu />
            </div>
            <House class="icon" @click='backHome' />
            <div class="segmentation">|</div>
            <div class="current-module">
                <span>预约登记</span>
            </div>
        </div>
        
    </div>
</template>
  
<script setup lang="ts">
import DropDownMenu from './components/DropDownMenu/index.vue'
import TabMenu from './components/TabMenu/index.vue'
import { useRouter } from "vue-router";
const router = useRouter()

const backHome = () => {
    router.push('/111')
}


</script>
  
<style scoped>
.header {
    width: 100%;
    height: 48px;
    background-color: #ececec;
    border: 1px solid #d4d4d4;
    display: flex;
    justify-content: space-between;
}

.right {
    display: flex;
}

.tab-menu{
    margin-left: 10px;
}

.segmentation{
    margin-top: 12px;
    margin-left: 10px;
    color: #8790a3;
}

.icon {
    width: 26px;
    height: 26px;
    margin-top: 10px;
    margin-left: 12px;
    outline: none;
}

.current-module {
    margin-left: 10px;
    margin-right: 16px;
    margin-top: 12px;
}
</style>
  