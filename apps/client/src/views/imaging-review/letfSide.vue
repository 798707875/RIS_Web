<template>
    <div class="left-contrainer">
        <div class="header">
            <span style="margin-left: 10px;">快捷检索</span>
        </div>
        <div class="left-form">
            <el-form
                ref="formRef"
                label-position="top"
                :model="form"
            >
                <div v-for="item in formList" :key="item.code" style="margin-left: 10px;">
                    <el-form-item :key="item.code" :prop="item.code">
                        <div>
                            <el-checkbox
                                :label="item.label"
                                size="large"
                                v-model="checkBoxForm[item.code]"
                            />
                        </div>
                        <div v-if="item.type=== 'input'">
                            <el-input
                                style="width: 280px"
                                placeholder="请输入"
                                v-model='form[item.code]'
                                :disabled="!checkBoxForm[item.code]"
                            />
                        </div>
                        <div v-if="item.type=== 'select'">
                            <el-select
                                placeholder="请选择"
                                style="width: 280px"
                                v-model='form[item.code]'
                                :disabled="!checkBoxForm[item.code]"
                                >
                                <el-option
                                    v-for="option in item.options"
                                    :key="option.value"
                                    :label="option.label"
                                    :value="option.value"
                                />
                            </el-select>
                        </div>
                        <div v-if="item.type=== 'date'">
                            <el-date-picker
                                :disabled="!checkBoxForm[item.code]"
                                v-model='form[item.code]'
                                type="date"
                                placeholder="请选择日期"
                                style="width: 280px;"
                            />
                        </div>
                    </el-form-item>
                </div>
            </el-form>
        </div>
        <div class="lef-botton">
            <el-button type="primary" style="width: 120px;" @click="resetFrom">清空</el-button>
            <el-button type="primary" style="width: 120px;" @click="submitFrom">查询</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const form = ref({}) as any

const checkBoxForm = ref({}) as any

const resetFrom = () => {
    Object.keys(form.value).forEach(ele => {
        form.value[ele] = ''
    })
}

const submitFrom = () => {
    console.log(form.value)
    console.log(checkBoxForm.value)
}

const formList = [
  {
    code: 'name',
    label: '姓名',
    type: 'input',
  },
  {
    code: 'patientId',
    label: '患者ID',
    type: 'input',
  },
  {
    code: 'sex',
    label: '性别',
    type: 'select',
    options: [
        {
            value: 'Option1',
            label: 'Option1',
        },
        {
            value: 'Option2',
            label: 'Option2',
        },
    ]
  },
  {
    code: 'modalityType',
    label: '设备类型',
    type: 'select',
    options: [
        {
            value: 'Option1',
            label: 'Option1',
        },
        {
            value: 'Option2',
            label: 'Option2',
        },
    ]
  },
  {
    code: 'modality',
    label: '设备',
    type: 'select',
    options: [
        {
            value: 'Option1',
            label: 'Option1',
        },
        {
            value: 'Option2',
            label: 'Option2',
        },
    ]
  },
  {
    code: 'status',
    label: '检查状态',
    type: 'select',
    options: [
        {
            value: 'Option1',
            label: 'Option1',
        },
        {
            value: 'Option2',
            label: 'Option2',
        },
    ]
  },
  {
    code: 'arrived_datetime',
    label: '到达时间',
    type: 'date',
  },
]

onMounted(() => {
    formList.forEach(ele => {
        checkBoxForm.value[ele.code] = true
    })
})
</script>

<style scoped lang="scss">

.left-contrainer {
    width: 320px;
    height: 100%;
    background-color: #ececec;
    border: 2px solid #d4d4d4;
}

.header {
    display: flex;
    align-items: center;
    height: 50px;
    border-bottom: 2px solid #d4d4d4;
}

.left-form {
    margin-top: 10px;
    height: calc(100% - 120px);
    overflow-y: scroll;
    scrollbar-width: none;
}

.lef-botton {
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
}
</style>