##  测试测试

给`table-data`赋值表格数据，组件内部自动分页

  

```html
<template>
  <div style="height:400px;">
  <el-input-number v-model="num"></el-input-number>
  <el-button @click="resetNumber">重置页码</el-button>
    <table-report
      ref="tableReportRef"
      :table-loading="tableloading"
      :table-data="tableData"
      :column-configs="tableConfig"
      :pagination="pagination"
      @page-change="_page"
      >
      <template #isaudit="scope">
        <el-tag v-if="scope.row.isAudit" type="success">已提交</el-tag>
        <el-tag v-else type="error">未提交</el-tag>
      </template>
    </table-report>
  </div>
</template>
<script lang="ts" setup>
  import { InfoFilled } from '@element-plus/icons-vue'
  import axios from 'axios'
  const {ref, computed, onMounted, reactive, nextTick} = Vue
  const tableloading = ref(false)
  const tableData = ref([])
  const pagination = reactive({
    currentSize: 10,
    pageSizes: [5, 10, 20, 30, 50],
    layout: 'sizes, prev, pager, next, total'
  })
  const tableConfig = computed(() => {
    return [
        { attr: { prop: "code", type: 'selection', label: "编码", width: 60, headerAlign: 'center', align: 'center' } },
        { attr: { prop: "isAudit", label: "提交状态", width: 100, headerAlign: 'center',scopedSlot: "isaudit" , align: 'center' } },
        { attr: { prop: "orderCode", label: "单据编号", width: 150, sortable:'custom', headerAlign: 'center' } },
        { attr: { prop: "orderDate", label: "账期", width: 120, headerAlign: 'center' } },
        { attr: { prop: "planType", label: "计划类型", width: 120, headerAlign: 'center' } },
        { attr: { prop: "recordedDate", label: "入账日期", width: 120, headerAlign: 'center' } },
        { attr: { prop: "auditor", label: "提交人", width: 120, headerAlign: 'center' } },
        { attr: { prop: "maker", label: "制单人", width: 120, headerAlign: 'center' } },
        { attr: { prop: "makerDate", label: "制单时间", width: 120, headerAlign: 'center' } },
        { attr: { prop: "orgName", label: "组织名称"} }
      ]
  })
const loadData = async (sort) => {
  tableloading.value = true
  const result =  await axios({
    url: 'http://dev.mctech.vip/mp-sso/q-master-plans-params',
    method: 'post',
    data: {"limit":1000,"draw":1,"offset":0,"order":["id"],"condtionItems":[]}
  })
  tableData.value = result.data.rows
  tableloading.value = false
}
const tableReportRef = ref()
const _page = (curr, size) => {
  console.log('hhhhh', curr, size)
  const tableRef = tableReportRef.value.getNativeRefs()
  if(curr===1) {
    tableRef.toggleRowSelection(tableData.value[0])
  }
}
const num = ref(1)
const resetNumber = () => {
  tableReportRef.value.setCurrentPage(num.value)
}
onMounted(() => {
  loadData()
})
</script>
```
