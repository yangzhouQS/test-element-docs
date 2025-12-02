
## 单选

绑定`current-change`事件可以获取当前选中行


  

```html
<template>
  <div style="height:400px;">
    <div style="margin-top: 20px">
        <el-button @click="setCurrent(tableData[1])">选中第2行</el-button>
        <el-button @click="setCurrent()">清除选择</el-button>
    </div>
    <table-only
      ref="tableOnlyRef"
      :table-data="tableData"
      :column-configs="tableConfig"
      @current-change="handleCurrentChange"
      >
    </table-only>
  </div>
</template>
<script lang="ts" setup>
  import materialDataSet from '../../../test-data/material-data-set.json';
  const {ref, computed, onMounted} = Vue
  const tableData = ref(materialDataSet)
  const currentRow = ref(null)
  const tableOnlyRef = ref(null)
  const tableRef = ref(null)
  const tableConfig = computed(() => {
    return [
        { attr: { prop: "code", type: 'index', label: "序号", width: 50, headerAlign: 'center', align: 'center' } },
        { attr: { prop: "code", label: "编码", width: 90, headerAlign: 'center' } },
        { attr: { prop: "name", label: "名称", width: 120 } },
        { attr: { prop: "spec", label: "规格", width: 120   } },
        { attr: { prop: "unit", label: "单位", width: 60 } },
        { attr: { prop: "quantity", label: "数量"} },
        { attr: { prop: "orgName", label: "组织名称"} },
        { attr: { prop: "createdAt", label: "添加时间", width: 210 }}
      ]
  })
const handleCurrentChange = (val: User | undefined) => {
  currentRow.value = val
  console.log('选中值：', currentRow.value)
}
const setCurrent = (row?: User) => {
  tableRef.value!.setCurrentRow(row)
}
onMounted(()=>{
  // 获取el-table原生的Ref
  tableRef.value = tableOnlyRef.value.getNativeRefs()
})
</script>
```
