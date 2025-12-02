##  时间类型

提供类型：日期选择、月份选择、日期+时间选择， `value-format`设置时间值的格式

:::tip
`datetimerange` 由于监测不到选择面板的确定按钮，如果时间选择面板中选择自由时间，但是不点击确定，则无法触发`change`事件，并且前进后退按钮会禁用
:::

:::demo  

```html
<template>
  <filter-item label="账期日" :label-width="'80px'" >
    <el-input-number v-model="accountDay" :min="1" :max="31"></el-input-number>
  </filter-item> 
  <filter-item label="daterange" :label-width="'100px'" >
    <el-row>
      <date-range-picker
        v-model="value"
        type="daterange"
        value-format="YYYY-MM-DD"
        style="width:360px"
        :account-day="accountDay"
        :current1="current"
        @change="change"
        >
      </date-range-picker>
      {{value}}
    </el-row>
  </filter-item> 
  <filter-item label="datetimerange" :label-width="'100px'" >
    <el-row>
      <date-range-picker
        v-model="value1"
        type="datetimerange"
        value-format="YYYY-MM-DD HH:mm:ss"
        style="width:360px"
        :account-day="accountDay"
        :current1="current"
        @change="change"
        >
      </date-range-picker>
      {{value1}}
    </el-row>
  </filter-item> 
  <filter-item label="monthrange" :label-width="'100px'" >
    <el-row>
      <date-range-picker
        v-model="value2"
        type="monthrange"
        value-format="YYYY-MM"
        style="width:360px"
        :account-day="accountDay"
        :current1="current"
        @change="change"
        >
      </date-range-picker>
      {{value2}}
    </el-row>
  </filter-item> 
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  const value = ref('')
  const value1 = ref('')
  const value2 = ref('')
  const current = ref('2024-02-21 00:00:00')
  const accountDay = ref(20)
  const change = (a, b) => {
  console.log('change', a, b)
 }
</script>
```
:::