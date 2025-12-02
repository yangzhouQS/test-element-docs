##  基础用法

加载数据和翻页使用`reload`事件，获取到数据之后绑定到`list-data`

  

```html
<template>
  <div style="height:400px;">
  <el-input-number v-model="num"></el-input-number>
    <el-button @click="loadData(true)">刷新重置页码</el-button>
     <list-next
      ref="listNextRef"
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
      >
      <template #item="scope">
        <div style="background:var(--el-color-primary-light-9);
            color:var(--el-color-primary);
            padding:10px;
            margin-bottom:6px;
            height:100%;
            text-align:center"
          >
          <div>{{ scope.row.orderCode }}</div>
          <div>{{ scope.row.recordedDate }}</div>
        </div>
      </template>                             
    </list-next>
  </div>
</template>
<script lang="ts" setup>
  import { InfoFilled } from '@element-plus/icons-vue'
  import axios from 'axios'
  const {ref, computed, onMounted, reactive} = Vue
  const listloading = ref(false)
  const listData = ref([])
  const listNextRef = ref()
  const pagination = reactive({
    currentSize: 10,
    pageSizes: [5, 10, 20, 30, 50, 150],
    layout: 'sizes, prev, pager, next, total'
  })

const num = ref(1)
const loadData = async (isReset) => {
  listloading.value = true
  const params = listNextRef.value.getPaginationParams(isReset, num.value)
  params.order= ['id']
  const result =  await axios({
    url: 'http://dev.mctech.vip/mp-sso/q-master-plans-params',
    method: 'post',
    data: params
  })
  console.log(result.data)
  listData.value = result.data.rows
  listloading.value = false
}
onMounted(async () => {
  await loadData(false)
})
</script>