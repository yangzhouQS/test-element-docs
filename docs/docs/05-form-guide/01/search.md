##  关闭搜索

`search-enable`设置为`false`则会关闭搜索功能


  

```html
<template>
  <search-select
    v-model="value"
    :default-props="{label: 'orderCode',subLabel: 'makerDate',nextLabel: 'planType', value: 'id'}"
    :limit="20"
    placeholder="请选择"
    width="260px"
    :search-enable="false"
    @load-data="loadData"
    @change="changeData"
    >
  </search-select>
</template>
<script lang="ts" setup>
  import { ref, reactive } from 'vue'
  import { ArrowDown, Search, Refresh } from '@element-plus/icons-vue'
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
      url: 'http://dev.mctech.vip/mp-sso/q-master-plans-params',
      method: 'post',
      data: params
    })
    resolve(result.data.rows)
  }
  const changeData = (item) => {
    currRow.value = item
  }
</script>
```
:::