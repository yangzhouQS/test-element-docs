##  禁用/只读

禁用/只读日期面板无法选择，前进、后退按钮禁用


  

```html
<template>
  <filter-item label="禁用" :label-width="'80px'" >
    <date-range-picker
      v-model="value1"
      :account-day="accountDay"
      default-picked="month"
      style="width:360px"
      disabled
      >
    </date-range-picker>
  </filter-item> 
  <filter-item label="只读" :label-width="'80px'" >
    <date-range-picker
      v-model="value"
      :account-day="accountDay"
      style="width:360px"
      :default-value="defaultValue"
      readonly
      >
    </date-range-picker>
  </filter-item> 
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const value = ref([])
  const value1 = ref([])
  // const value = ref(['2023-01-01', '2023-08-31'])
  
  const defaultValue = ref([new Date(2023,0,1), new Date(2023,7,31)])
  const accountDay = ref(20)
</script>
```
