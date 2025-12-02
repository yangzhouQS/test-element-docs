##  基础用法

账期默认为自然月（每月最后一天）


:::demo  

```html
<template>
  <filter-item label="账期日" :label-width="'80px'" >
    <el-input-number v-model="accountDay" :min="1" :max="31"></el-input-number>
  </filter-item> 
  <filter-item label="选择日期" :label-width="'80px'" >
    <date-range-picker
      v-model="value"
      :account-day="accountDay"
      style="width:360px"
      @change="change"
      >
    </date-range-picker>
  </filter-item> 
  <filter-item label="值" :label-width="'80px'" >
    {{value}}
  </filter-item> 
</template>
<script lang="ts" setup>
  import { ref, onMounted, computed } from 'vue'
  const value = ref([])
  const accountDay = ref(20)
 const change = (a, b) => {
  console.log(a, b)
 }
</script>
```
:::