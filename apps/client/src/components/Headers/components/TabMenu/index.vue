<template>
    <div>
        <el-dropdown>
            <Expand class="icon"/>
            <template #dropdown>
                <el-dropdown-menu style="width: 100vw;">
                    <el-dropdown-item>Action 1</el-dropdown-item>
                    <el-dropdown-item>Action 2</el-dropdown-item>
                    <el-dropdown-item>Action 3</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.icon {
    width: 30px;
    height: 30px;
    margin-top: 10px;
    outline: none;
}
</style>