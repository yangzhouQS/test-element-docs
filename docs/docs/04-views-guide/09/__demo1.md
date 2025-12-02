##  基础用法

获取到数据之后绑定给`list-data`

  

```html
<template>
  <div style="height:400px;">
     <list-report
     ref="tableReportRef"
      :loading="listloading"
      :list-data="listData"
      :pagination="pagination"
      :list-item-props="{
        height: '100px',
        width: '200px',
        border: true,
        paddingSize: 'small'
      }"
      @reload="loadData"
      @page-change="_page"
      >
      <template #item="scope">
        <div style="background:var(--el-color-primary-light-9);
            color:var(--el-color-primary);
            padding:10px;
            height:100%;
            text-align:center"
          >
          <div>{{ scope.row.orderCode }}</div>
          <div>{{ scope.row.recordedDate }}</div>
        </div>
      </template>                             
    </list-report>
  </div>
</template>
<script lang="ts" setup>
  import { InfoFilled } from '@element-plus/icons-vue'
  import axios from 'axios'
  const {ref, computed, onMounted, reactive} = Vue
  const listloading = ref(false)
  const listData = ref([])
  const listAsyncRef = ref()
  const pagination = reactive({
    currentSize: 10,
    pageSizes: [5, 10, 20, 30, 50, 150],
    layout: 'sizes, prev, pager, next, total'
  })

const loadData = async (isReset) => {
  listloading.value = true
  const result =  await axios({
    url: 'http://dev.mctech.vip/mp-sso/q-master-plans-params',
    method: 'post',
    data: {"limit":1000,"draw":1,"offset":0,"order":["id"],"condtionItems":[]}
  })
  listData.value = result.data.rows
  listloading.value = false
}
const tableReportRef = ref()
const _page = (curr, size) => {
  console.log('hhhhh', curr, size)
}
onMounted(async () => {
  await loadData(false)
})
</script>