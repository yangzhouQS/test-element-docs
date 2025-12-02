##  表单校验

  

```html
<template>
  <!-- <div style="padding-bottom:10px">
    <el-input-number v-model="length"></el-input-number>
    <el-button @click="initData(length)">追加{{length}}条数据</el-button>
  </div> -->
    <el-button @click="saveData">保存</el-button>
  <div style="height:500px;overflow: hidden;">
    <table-edit-v2
      ref="tableEditRef"
      :table-data="tableData"
      :column-configs="tableConfig"
      :map-config="dataMap"
      :not-repeat-filed="'id'"
      :rules="rules"
      >
      <template #column1="{row}">
        <el-input v-model="row.column1" size="small"></el-input>
      </template>
      <template #column2="{row}">
        <el-input v-model="row.column2" size="small"></el-input>
      </template>
      <template #column3="{row}">
        <el-select v-model="row.column3" clearable style="width: 100%" size="small">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </template>
      <template #column5="{row}">
        <el-tag type="primary">{{row.column5 || '空'}}</el-tag>
      </template>
      <template #column6="{row}">
        <el-select v-model="row.column6" style="width: 100%" size="small">
          <el-option
            v-for="item in [{ value: '西安', label: '西安' },
                            { value: '咸阳', label: '咸阳' }]"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </template>
    </table-edit-v2>
  </div>
</template>
<script lang="tsx" setup>
const { computed, ref, reactive, onMounted } = Vue
const { ElMessage } = ElementPlus
const length = ref(20)
const tableEditRef = ref()
const tableData = ref([{ 'column0': 0, 'column1': null, 'column2': 2, 'column3': '选项一', id: 3 },
{ 'column0': 0, 'column1': null, 'column2': null, 'column3': '', id: 1 },
{ 'column0': 0, 'column1': null, 'column2': null, 'column3': '', id: 2 }])
const options = [
  {
    value: '选项一',
    label: '选项一',
  },
  {
    value: '选项二',
    label: '选项二',
  }
]
const tableConfig = computed(() => {
  return [
    { attr: { prop: 'code', type: 'index', label: '序号', width: 80, align: 'center' } },
    { attr: { prop: 'column1', label: 'column1', width: 120, sortable: true, scopedSlot: 'column1' } },
    { attr: { prop: 'column2', label: 'column2', width: 120, sortable: true, scopedSlot: 'column2' } },
    { attr: { prop: 'column3', label: 'column3', width: 120, scopedSlot: 'column3', rules: [{ required: true, message: 'column3不能为空' }] } },
    { attr: { prop: 'column4', label: 'column4', width: 120, scopedSlot: 'column4' } },
    { attr: { prop: 'column5', label: 'column5', width: 120, scopedSlot: 'column5' } },
    { attr: { prop: 'column6', label: 'column6', width: 120, scopedSlot: 'column6' } },
  ];
});
const rules = {
  column1: [{ required: true, message: 'column1不能为空' }],
  column2: [{ required: true, message: 'column2不能为空' }],
};
const dataMap = {
  dataSource1: [
    { prop: 'column0', isReplace: true, defaultVal: '', selprop: 'mcolumn0' },
    { prop: 'column1', isReplace: true, defaultVal: '', selprop: 'mcolumn1' },
    { prop: 'column2', isReplace: true, defaultVal: '', selprop: 'mcolumn2' },
    { prop: 'column3', isReplace: true, defaultVal: '', selprop: 'mcolumn3' },
    { prop: 'column4', isReplace: true, defaultVal: '', selprop: 'mcolumn4' },
    { prop: 'column5', isReplace: true, defaultVal: '', selprop: 'mcolumn5'
    ,eventConf:{
      isOn: true,
      calculate: (row)=>{return 999}
    } },
    { prop: 'column6', isReplace: true, defaultVal: '', selprop: 'mcolumn6'},
    { prop: 'id', isReplace: true, defaultVal: '', selprop: 'mid' },
  ],
  dataSource3: [
    { prop: 'column0', isReplace: true, defaultVal: '', selprop: 'mcolumn0' },
    { prop: 'column1', isReplace: true, defaultVal: '', selprop: 'mcolumn1' },
    { prop: 'column2', isReplace: true, defaultVal: '', selprop: 'mcolumn2' },
    { prop: 'column3', isReplace: true, defaultVal: '', selprop: 'mcolumn3' },
    { prop: 'column4', isReplace: true, defaultVal: '', selprop: 'mcolumn4' },
    { prop: 'column5', isReplace: true, defaultVal: '', selprop: 'mcolumn5'
    ,eventConf:{
      isOn: true,
      calculate: (row)=>{return 999}
    } },
    { prop: 'column6', isReplace: true, defaultVal: '', selprop: 'mcolumn6'},
    { prop: 'id', isReplace: true, defaultVal: '', selprop: 'mid' },
  ]
}
let id = 0
const initData = (length = 10) => {
  const rows = Array.from({length}).map((item, index) => {
    id += 1
    return {
      'mcolumn0': id,
      'mcolumn1': '文字列' + (index + 1),
      'mcolumn2': Math.ceil(Math.random()*100),
      'mcolumn3': '选项一',
      'mcolumn4': new Date(),
      'mcolumn5': '哈哈哈哈',
      'mcolumn6': '西安',
      mid: id
    }
  })
  tableData.value = tableEditRef.value.generateData('dataSource1', rows)
  console.log(tableData.value)
}
onMounted(() => {
  initData(100)
})
const saveData = () => {
  const { valid, rows, message } = tableEditRef.value.validate()
  console.log('valid', valid, rows, message)
  if(valid) {
    ElMessage({
      message: '保存成功！',
      type: 'success',
    })
  } else {
    ElMessage({
      message: '保存失败！' + message.join('；'),
      type: 'warning',
    })
  }
};
</script>

```
