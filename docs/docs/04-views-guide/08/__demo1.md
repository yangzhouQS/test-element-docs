##  基础用法

加载数据和翻页使用`reload`事件，获取到数据之后绑定给`list-data`

:::demo  

```html
<template>
  <div style="height:400px;">
  <el-input-number v-model="num"></el-input-number>
    <el-button @click="loadData(true)">刷新重置页码</el-button>
     <list-async
      ref="listAsyncRef"
      :loading="tableloading"
      :list-data="tableData"
      :pagination="pagination"
      :list-item-props="{
        height: '100px',
        width: '200px',
        border: true,
        paddingSize: 'small'
      }"
      @reload="loadData"
      >
      <template #item="scope">
        <div style="background:var(--el-color-primary-light-9);
            color:var(--el-color-primary);
            padding:10px;
            margin-bottom:6px;
            height: 100%;
            text-align:center"
          >
          <div>{{ scope.row.orderCode }}</div>
          <div>{{ scope.row.recordedDate }}</div>
        </div>
      </template>                             
    </list-async>
  </div>
</template>
<script lang="ts" setup>
  import { InfoFilled } from '@element-plus/icons-vue'
  import axios from 'axios'
  const {ref, computed, onMounted, reactive} = Vue
  const tableloading = ref(false)
  const tableData = ref({})
  const listAsyncRef = ref()
  const pagination = reactive({
    currentSize: 10,
    pageSizes: [5, 10, 20, 30, 50, 150],
    layout: 'sizes, prev, pager, next, total'
  })

const num = ref(1)
const loadData = async (isReset) => {
  tableloading.value = true
  const params = listAsyncRef.value.getPaginationParams(isReset, num.value)
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