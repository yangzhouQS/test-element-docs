##  隐藏表单项

`form-items`属性明细中的`display`属性来控制表单项的显示或隐藏

  

```html
<template>
  <el-switch v-model="isTrue"
    active-text="显示"
    inactive-text="隐藏"
    @change="switchChange"
    ></el-switch>
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
  name1: '',
  isCheck: false
});
const dynamicFormRef = ref();
const isTrue = ref(true);
const items = computed(() => {
  return [
    {
      display: true,
      label: '活动名称',
      name: 'name',
      renderContent: () => {
        return (
          <el-input v-model={formModel.name}> </el-input>
        )
      },
      layout: {
        span: 12
      }
    },
    {
      display: isTrue.value,
      label: '表单显示项',
      name: 'name2',
      renderContent: () => {
        return (
          <el-checkbox v-model={formModel.isCheck}> </el-checkbox>
        )
      },
      layout: {
        span: 12
      }
    },
    {
      display: true,
      label: '活动地址',
      name: 'name1',
      renderContent: () => {
        return (
          <el-input v-model={formModel.name1}> </el-input>
        )
      },
      layout: {
        span: 12
      }
    }
  ]
})
const onSubmit = async () => {
  console.log('submit!', formModel);
};
const switchChange = () => {
}
</script>

```
:::