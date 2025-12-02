## 合计行

1.总合计行

设置`summary-method`方法，返回合计行数据

2.本页页合计行

使用`append`插槽，插入至表格最后一行之后的内容，在这里可以设置本页合计行


  

```html
<template>
  <div style="height:600px;">
    <table-next
      ref="tableNextRef"
      :table-loading="tableloading"
      :table-data="tableData"
      :column-configs="tableConfig"
      :pagination="pagination"
      :show-summary="true"
      :summary-method="getSummaries"
      @reload="loadData"
      >
      <template #append>本页合计：122200元</template>
      <template #isAudit="scope">
        <el-tag v-if="scope.row.isAudit" type="success">已提交</el-tag>
        <el-tag v-else type="error">未提交</el-tag>
      </template>
      <template #bottom>
        <span style="color:var(--el-text-color-secondary)">合计金额：380023元</span>
      </template>
    </table-next>
  </div>
</template>
<script lang="ts" setup>
  import { InfoFilled } from '@element-plus/icons-vue'
  import axios from 'axios'
  const {ref, computed, onMounted, reactive} = Vue
  const tableloading = ref(false)
 const tableData = ref([])
 const tableNextRef = ref()
  const sumData = ref([])
  const pagination = reactive({
    currentSize: 10
  })
  const tableConfig = computed(() => {
    return [
        { attr: { prop: "code", type: 'index', label: "编码", width: 60, headerAlign: 'center', align: 'center' } },
        { attr: { prop: "isAudit", label: "提交状态", width: 100, headerAlign: 'center',scopedSlot: "isaudit" , align: 'center' } },
        { attr: { prop: "orderCode", label: "单据编号", width: 150, sortable:'custom', headerAlign: 'center' } },
        { attr: { prop: "orderDate", label: "账期", width: 120, headerAlign: 'center' } },
        { attr: { prop: "planType", label: "计划类型", width: 120, headerAlign: 'center' } },
        { attr: { prop: "recordedDate", label: "入账日期", width: 120, headerAlign: 'center' } },
        { attr: { prop: "auditor", label: "提交人", width: 120, headerAlign: 'center' } },
        { attr: { prop: "maker", label: "制单人", width: 120, headerAlign: 'center' } },
        { attr: { prop: "makerDate", label: "制单时间", width: 120, headerAlign: 'center' } },
        { attr: { prop: "orgName", label: "组织名称"} },
        { attr: { prop: "createdAt", label: "添加时间", width: 230, sortable:'custom',headerSlot: 'createatheader',scopedSlot: "createdat" }}
      ]
  })
const loadData = async () => {
  tableloading.value = true
  const params = tableNextRef.value.getPaginationParams()
  params.order = ['id']
  const result =  await axios({
    url: 'http://dev.mctech.vip/mp-sso/q-master-plans-params',
    method: 'post',
    data: params
  })
  tableData.value = result.data.rows
  sumData.value = ['', '合计数量：', '', '', '', 25638.36, '', '']
  tableloading.value = false
}
const getSummaries = (param: SummaryMethodProps) => {
  const { columns, data } = param
  // 可以单独给合计行数字
  return sumData.value
}
onMounted(async () => {
  await loadData()
})
</script>
```
