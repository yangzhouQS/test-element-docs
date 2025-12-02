##  基础用法

支持所有`el-form`的组件属性，直接挂载在`dynamic-form`

`model`为`el-form`的原始属性，传入表单项的model

`form-items`属性将表单项以对象数组的形式配置，其中`renderContent`为表单项的内容渲染函数


:::demo  

```html
<template>
  <flex-box :item-num="flexConfig.length" :item-config="flexConfig">
    <template #item-1>
      <box :clear-padding="['bottom']">
        <dynamic-form ref="dynamicFormRef"
          :model="formModel"
          label-width="100px"
          :form-items="items"
          >
        </dynamic-form>
      </box>
    </template>
    <template #item-2>
    <flex-line :left-padding="true" :right-padding="true" >
      <template #right>
        <box>
          <el-button type="primary" link >取消</el-button>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <!-- <el-button type="primary" @click="hide">隐藏表单</el-button> -->
        </box>
      </template>
    </flex-line>
    </template>
  </flex-box>
</template>
<script lang="tsx" setup>
const { reactive, watch, ref, computed } = Vue;

const flexConfig = [
  {
    tag: 'item-1',
    isFixed: false,
  },
  {
    tag: 'item-2',
    isFixed: true,
  }
]

const formModel = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
});
const dynamicFormRef = ref();
const items = reactive([
    {
      display: true,
      label: '活动名称',
      renderContent: () => {
        return (
          <el-input v-model={formModel.name}> </el-input>
        )
      },
    },
    {
      display: true,
      label: '活动区域',
      renderContent: () => {
        return (
          <el-select v-model={formModel.region} placeholder="请选择">
            <el-option label="上海" value="上海" />
            <el-option label="北京" value="北京" />
          </el-select>
        )
      },
    },
    {
      display: true,
      label: '活动时间',
      renderContent: () => {
        return (
          <>
            <el-col span={11}>
              <el-date-picker
                v-model={formModel.date1}
                type="date"
                placeholder="选择日期"
                style="width: 100%"
              />
            </el-col>
            <el-col span={2} style="text-align: center">
              <span>-</span>
            </el-col>
            <el-col span={11}>
              <el-time-picker
                v-model={formModel.date2}
                placeholder="选择时间"
                style="width: 100%"
              />
            </el-col>
          </>
        )
      },
    },
    {
      display: true,
      label: '实时送达',
      renderContent: () => {
        return (
          <el-switch v-model={formModel.delivery}></el-switch>
        )
      },
    },
    {
      display: true,
      label: '活动类型',
      renderContent: () => {
        return (
          <el-checkbox-group v-model={formModel.type}>
            <el-checkbox label="在线活动" name="type" />
            <el-checkbox label="促销活动" name="type" />
            <el-checkbox label="离线活动" name="type" />
            <el-checkbox label="品牌曝光" name="type" />
          </el-checkbox-group>
        )
      },
    },
    {
      display: true,
      label: '资源',
      renderContent: () => {
        return (
          <el-radio-group v-model={formModel.resource}>
            <el-radio label="主办方" />
            <el-radio label="聚会地点" />
          </el-radio-group>
        )
      },
    },
    {
      display: true,
      label: '活动形式',
      name: 'desc',
      renderContent: () => {
        return (
          <el-input v-model={formModel.desc} type="textarea" />
        )
      },
    },
  ])
const onSubmit = async () => {
  console.log('submit!', formModel);
};
const hide = () => {
  items.forEach((item) => {
    if(item.name === 'desc') {
      item.display = !item.display
    }
  })
}
</script>

```
:::