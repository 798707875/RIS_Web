<template>
    <div class="container">
        <div class="leftSide">
            <letfSide />
        </div>
        <div>
            <rightSide />
        </div>
    </div>
</template>

<script setup lang="ts">
import letfSide from '@/views/information-registration/leftSide/index.vue';
import rightSide from '@/views/information-registration/rightSide/index.vue'

</script>

<style scoped>

.container {
    display: flex;
}

.leftSide {
    width: 320px;
    height: 1000px;
    background-color: #ececec;
    border: 2px solid #d4d4d4;
}
</style>