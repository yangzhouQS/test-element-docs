##  基础用法

加载数据和翻页使用`reload`事件，获取到数据之后绑定给`table-data`

:::demo  

```html
<template>
  <div style="height:400px;">
  <el-input-number v-model="num"></el-input-number>
    <el-button @click="loadData(true)">刷新重置页码</el-button>
     <table-async
      ref="tableAsyncRef"
      :table-loading="tableloading"
      :table-data="tableData"
      :column-configs="tableConfig"
      :pagination="pagination"
      @reload="loadData"
      >
      <template #isaudit="scope">
        <el-tag v-if="scope.row.isAudit" type="success">已提交</el-tag>
        <el-tag v-else type="error">未提交</el-tag>
      </template>
    </table-async>
  </div>
</template>
<script lang="ts" setup>
  import { InfoFilled } from '@element-plus/icons-vue'
  import axios from 'axios'
  const {ref, computed, onMounted, reactive} = Vue
  const tableloading = ref(false)
  const tableData = ref({})
  const tableAsyncRef = ref()
  const pagination = reactive({
    currentSize: 10,
    pageSizes: [5, 10, 20, 30, 50, 150],
    layout: 'sizes, prev, pager, next, total'
  })
  const tableConfig = computed(() => {
    return [
        { attr: { prop: "code", type: 'index', label: "编码", width: 60, headerAlign: 'center', align: 'center' } },
        { attr: { prop: "isAudit", label: "提交状态", width: 100, headerAlign: 'center',scopedSlot: "isaudit" , align: 'center' } },
        { attr: { prop: "orderCode", label: "单据编号", width: 150, headerAlign: 'center' } },
        { attr: { prop: "orderDate", label: "账期", width: 120, headerAlign: 'center' } },
        { attr: { prop: "planType", label: "计划类型", width: 120, headerAlign: 'center' } },
        { attr: { prop: "recordedDate", label: "入账日期", width: 120, headerAlign: 'center' } },
        { attr: { prop: "auditor", label: "提交人", width: 120, headerAlign: 'center' } },
        { attr: { prop: "maker", label: "制单人", width: 120, headerAlign: 'center' } },
        { attr: { prop: "makerDate", label: "制单时间", width: 120, headerAlign: 'center' } },
        { attr: { prop: "orgName", label: "组织名称"} }
      ]
  })

const num = ref(1)
const loadData = async (isReset) => {
  tableloading.value = true
  const params = tableAsyncRef.value.getPaginationParams(isReset, num.value)
  params.order= ['id']
  const result =  await axios({
    url: 'http://dev.mctech.vip/mp-sso/q-master-plans-params',
    method: 'post',
    data: params
  })
  console.log(result.data)
  tableData.value = result.data
  tableloading.value = false
}
onMounted(async () => {
  await loadData(false)
})
</script>