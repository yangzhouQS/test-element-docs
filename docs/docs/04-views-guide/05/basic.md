##  基础用法

加载数据和翻页使用`reload`事件，获取到数据之后绑定给`table-data`

:::demo  

```html
<template>
  <div style="height:400px;">
  <el-input-number v-model="num"></el-input-number>
  <el-button @click="loadData(true)">刷新重置页码</el-button>
    <table-next
      ref="tableNextRef"
      :table-loading="tableloading"
      :table-data="tableData"
      :column-configs="tableConfig"
      :pagination="pagination"
      @reload="loadData"
      >
      <template #pagination>
        <el-button>哈哈哈</el-button>
      </template>
      <template #isAudit="scope">
        <el-tag v-if="scope.row.isAudit" type="success">已提交</el-tag>
        <el-tag v-else type="error">未提交</el-tag>
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
  const tableRef = ref(null)
  const visible = ref(false)
  const tableNextRef = ref(null)
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
const num = ref(1)
const loadData = async (isReset) => {
  tableloading.value = true
  const params = tableNextRef.value.getPaginationParams(isReset, num.value)
  params.order= ['id']
  const result =  await axios({
    url: 'http://dev.mctech.vip/mp-sso/q-master-plans-params',
    method: 'post',
    data: params
  })
  tableData.value = result.data.rows
  tableloading.value = false
}
onMounted(async () => {
  await loadData(false)
})
</script>
```
:::
  


