

## 自定义模板

使用`item`插槽，自定义行内的内容

  

```html
<template>
  <search-select
    v-model="value"
    :default-props="{label: 'orderCode',subLabel: 'makerDate',nextLabel: 'planType', value: 'id'}"
    :limit="20"
    list-height="300px"
    width="260px"
    placeholder="请选择"
    @load-data="loadData"
    @change="changeData"
    >
    <template #item="scope">
      <el-icon><Document /></el-icon>{{scope.row.orderCode}}
      <el-tag :type="scope.row.planType==='初始计划'?'success':'warning'">{{scope.row.planType}}</el-tag>
    </template>
  </search-select>
</template>
<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import { ArrowDown, Search, Document } from '@element-plus/icons-vue'
  import axios from 'axios'
  const value = ref('')
  const currRow = ref({})
  
  const loadData = async (params, filter, resolve) => {
    if (filter) {
      params.condtionItems = [{
        fieldName: 'orderCode',
        fieldValue: `%${filter}%`,
        op: 'like'
      }]
    } else {
      params.condtionItems = []
    }
    const result =  await axios({
      // url: 'http://localhost:8198/mp-sso/q-master-plans-params',
      url: 'http://dev.mctech.vip/mp-sso/q-master-plans-params',
      method: 'post',
      data: params
    })
    resolve(result.data.rows)
  }
  const changeData = (item) => {
    currRow.value = item
  }
  const clear = () => {
    currRow.value = null
  }
</script>
```
