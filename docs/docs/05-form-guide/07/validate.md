##  表单校验

在`form-items`明细中 `rules` 属性传入约定的验证规则， 并将 `prop` 属性设置为需要验证的特殊键值即可

保存时调用表单实例的`validate`方法获取验证结果

  

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
const items = computed(() => {
  return [
    {
      display: true,
      label: '活动名称',
      prop: 'name',
      rules: [
        { required: true, message: '请输入活动名称', trigger: 'blur' },
        { min: 3, max: 5, message: '长度为 3 至 5', trigger: 'blur' },
      ],
      renderContent: () => {
        return (
          <el-input v-model={formModel.name}> </el-input>
        )
      },
    },
    {
      display: true,
      label: '活动区域',
      prop: 'region',
      rules: [
        {
          required: true,
          message: '请选择活动区域',
          trigger: 'change',
        }],
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
      prop: 'date1',
      rules: [
        {
          type: 'date',
          required: true,
          message: '请选择日期',
          trigger: 'change',
        },
      ],
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
      prop: 'delivery',
      renderContent: () => {
        return (
          <el-switch v-model={formModel.delivery}></el-switch>
        )
      },
    },
    {
      display: true,
      label: '活动类型',
      prop: 'type',
      rules: [
        {
          type: 'array',
          required: true,
          message: '请选择活动类型',
          trigger: 'change',
        }
      ],
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
      prop: 'resource',
      rules: [
        {
          required: true,
          message: '请选择活动资源',
          trigger: 'change',
        },
      ],
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
      prop: 'desc',
      rules: [
        { required: true, message: '请输入活动形式', trigger: 'blur' },
      ],
      renderContent: () => {
        return (
          <el-input v-model={formModel.desc} type="textarea" />
        )
      },
    },
  ]
})
const onSubmit = async () => {
  const formRef = dynamicFormRef.value.getNativeRefs();
  if (!formRef) return;
  await formRef.validate((valid, fields) => {
    if (valid) {
      console.log('submit!', formModel);
    } else {
      console.log('error submit!', fields);
    }
  });
};
</script>

```
