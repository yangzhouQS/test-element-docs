##  默认值

方式一、设置`default-picked`值，可以快捷设置按本日、本周、本月、本季、本年、开累的开始和结束时间

方式二、设置`v-model`，可以设置任意具体的日期

::: tip
1. 进料不同时设置这两种默认值，同时设置会引起所选值混乱
2. 需要设置默认值可以设置`v-model`值，使用`new Date()`,或者直接使用日期格式为`YYYY-MM-DD`的日期值
3. 设置`v-model`，就不能使用“前进”和“后退”功能
:::

  

```html
<template>
  <filter-item label="默认选择" :label-width="'80px'" >
    <el-row>
      <date-range-picker
        v-model="value"
        :account-day="accountDay"
        default-picked="month"
        style="width:360px"
        >
      </date-range-picker>
        {{value}}
    </el-row>
  </filter-item> 
  <filter-item label="默认值" :label-width="'80px'" >
    <el-row>
      <date-range-picker
        v-model="value1"
        :account-day="accountDay"
        style="width:360px"
        >
      </date-range-picker>
        {{value1}}
    </el-row>
  </filter-item> 
  <el-button @click="accountDay = 25">更改账期</el-button>
</template>
<script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  const value = ref([])
  const value1 = ref([])
  const accountDay = ref(20)
  onMounted(() => {
    value1.value = [new Date(2023,0,2), new Date(2023,7,12)]
  })
</script>
```
