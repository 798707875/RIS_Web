<template>
    <div class="contrainer">
        <div class="left">
            <leftSide />
        </div>
        <div class="right">
            <iconList />
            <PATable />
        </div>
    </div>
</template>

<script setup lang="ts">
import leftSide  from './letfSide.vue';
import PATable from './PATable.vue';
import iconList from './iconList.vue';

</script>

<style scoped>
.contrainer {
    display: flex;
    height: calc(100vh - 67px);
}

.right{
    width: 100% ;
    height: 100%;
    display: flex;
    flex-direction: column;
}


</style>