## 可清空

设置`clearable`属性，可以清空选择器

  

```html
<template>
  <search-select
    v-model="value"
    :default-props="{label: 'orderCode',subLabel: 'makerDate',nextLabel: 'planType', value: 'id'}"
    :limit="20"
    clearable
    placeholder="请选择"
    width="260px"
    @load-data="loadData"
    @change="changeData"
    @clear="clear"
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
  const clear = () => {
    currRow.value = null
  }
</script>
```
