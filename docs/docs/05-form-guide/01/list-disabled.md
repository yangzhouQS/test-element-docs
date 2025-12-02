## 禁用选项

可以通过配置 `default-props` 中的 `disabled` 字段来指定列表项的禁用状态。

- 禁用配置：在 `default-props` 中设置 `disabled` 属性，指定用于判断禁用状态的字段名
- 禁用效果：被禁用的选项将显示禁用样式，且无法被点击选中

:::demo  

```html
<template>
  <search-select
    v-model="value"
    :default-props="{
      label: 'orderCode',
      subLabel: 'makerDate',
      nextLabel: 'planType', 
      value: 'id',
      disabled: 'isDisabled'
    }"
    :limit="20"
    placeholder="请选择"
    width="260px"
    @load-data="loadData"
    @change="changeData"
    >
  </search-select>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
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
    const result = await axios({
      url: 'http://dev.mctech.vip/mp-sso/q-master-plans-params',
      method: 'post',
      data: params
    })
    // 模拟部分数据禁用
    result.data.rows = result.data.rows.map((item, index) => ({
      ...item,
      isDisabled: index % 3 === 0 // 每隔三条数据设置一条禁用
    }))
    resolve(result.data.rows)
  }
  
  const changeData = (item) => {
    console.log(item)
    currRow.value = item
  }
</script>
```
:::