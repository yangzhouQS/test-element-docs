## 合计行

1.合计行

设置`summary-method`方法，返回合计行数据

2.本页页合计行

使用`append`插槽，插入至表格最后一行之后的内容，在这里可以设置本页合计行

3.总合计行

使用`bottom`插槽，在表格下方自定义插入一行区域，用来放合计行，可以自定义内容样式

:::demo  

```html
<template>
  <div style="height:300px;">
     <table-async
      ref="tableAsyncRef"
      :table-loading="tableloading"
      :table-data="tableData"
      :column-configs="tableConfig"
      :pagination="pagination"
      :show-summary="true"
      :summary-method="getSummaries"
      @reload="loadData"
      >
      <template #append>本页合计：122200元</template>
      <template #isaudit="scope">
        <el-tag v-if="scope.row.isAudit" type="success">已提交</el-tag>
        <el-tag v-else type="error">未提交</el-tag>
      </template>
      <!-- <template #bottom>
        <span style="color:var(--el-text-color-secondary)">合计金额：380023元</span>
      </template> -->
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
  const sumData = ref([])
  const pagination = reactive({
    currentSize: 10,
    pageSizes: [5, 10, 20, 30, 50],
    layout: 'sizes, prev, pager, next, total'
  })
  const tableConfig = computed(() => {
    return [
        { attr: { prop: "code", type: 'index', label: "编码", width: 60, headerAlign: 'center', align: 'center' } },
        { attr: { prop: "isAudit", label: "提交状态", width: 100, headerAlign: 'center',scopedSlot: "isaudit" , align: 'center' } },
        { attr: { prop: "orderCode", label: "单据编号", width: 150,  headerAlign: 'center' } },
        { attr: { prop: "orderDate", label: "账期", width: 120, headerAlign: 'center' } },
        { attr: { prop: "planType", label: "计划类型", width: 120, headerAlign: 'center' } },
        { attr: { prop: "recordedDate", label: "入账日期", width: 120, headerAlign: 'center' } },
        { attr: { prop: "auditor", label: "提交人", width: 120, headerAlign: 'center' } },
        { attr: { prop: "maker", label: "制单人", width: 120, headerAlign: 'center' } },
        { attr: { prop: "makerDate", label: "制单时间", width: 120, headerAlign: 'center' } },
        { attr: { prop: "orgName", label: "组织名称"} }
      ]
  })
const loadData = async () => {
  tableloading.value = true
  const params = tableAsyncRef.value.getPaginationParams()
  params.order= ['id']
  const result =  await axios({
    url: 'http://dev.mctech.vip/mp-sso/q-master-plans-params',
    method: 'post',
    data: params
  })
  tableData.value = result.data
  sumData.value = ['', '合计数量：', '', '', '', 25638.36, '', '']
  tableloading.value = false
}
onMounted(async () => {
  await loadData()
})
const getSummaries = (param: SummaryMethodProps) => {
  const { columns, data } = param
  // 可以单独给合计行数字
  return sumData.value
}
</script>