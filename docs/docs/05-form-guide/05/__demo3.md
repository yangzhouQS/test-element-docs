



##  合计行

显示表格的合计行，合计行的计算方法可以在组件外部自定义

  

```html
<template>
    <div style="padding-bottom:10px">
      <el-input-number v-model="length"></el-input-number>
      <el-button @click="initData(length)">追加{{length}}条数据</el-button>
    </div>
  <div style="height:400px">
    <table-edit
      ref="tableEditRef"
      :table-data="tableData"
      :column-configs="tableConfig"
      :map-config="dataMap"
      :not-repeat-filed="'id'"
      :sum-row-config="sumRowConfig"
      >
    </table-edit>
  </div>
</template>
<script lang="tsx" setup>
import { TableV2FixedDir, TableV2Placeholder } from 'element-plus'

import type { FunctionalComponent } from 'vue'
import type {
  HeaderClassNameGetter,
  TableV2CustomizedHeaderSlotParam,
} from 'element-plus'
const { computed, ref, reactive, onMounted } = Vue
const length = ref(20)
const tableEditRef = ref()
const tableData = ref([{ 'column-0': 0, 'column-1': 'sddddddddddddsddddddddddddsddddddddddddsddddddddddddsdddddddddddd', 'column-2': 2, 'column-3': 31, id: 3 },
{ 'column-0': 0, 'column-1': 1, 'column-2': 2, 'column-3': 32, id: 1 },
{ 'column-0': 0, 'column-1': 1, 'column-2': 2, 'column-3': '', id: 2 }])

const tableConfig = computed(() => {
    return [{
        key: 'id', dataKey: 'id', title: '序号', width: 60, minWidth: 60, align: 'left'
        ,cellRenderer: (props) => {
            return  props.rowIndex + 1
        }
    },
    { key: 'column-1', dataKey: 'column-1', title: '列1列1', width: 200 },
    {
        key: 'column-2', dataKey: 'column-2', title: '本期折旧金额', width: 100
        ,cellRenderer:(props) => {
            return   <el-input
                      v-model={props.rowData[props.column.dataKey]}
                      size="small"
                      onBlur={()=>{
                        _computeSumRow()
                      }}
                      />
        }
    },
    {
        key: 'column-3',
        dataKey: 'column-3', title: '列3', width: 200, minWidth: 200
        ,cellRenderer:(props) => {
            return   <el-input
                      v-model={props.rowData[props.column.dataKey]}
                      size="small"
                      onBlur={()=>{ console.log('column-3进入blur事件：', props.rowData)}}
                      />
        }
    },
    { key: 'column-4', dataKey: 'column-4', title: '列4', width: 200 },
    {
        key: 'column-5', dataKey: 'column-5', title: '列5', width: 200
        ,cellRenderer:(props) => {
            return   <el-input
                      v-model={props.rowData[props.column.dataKey]}
                      size="small"
                      onBlur={()=>{ console.log('column-5进入blur事件：', props.rowData)}}
                      />
        }
    },
    {
        key: 'column-6', dataKey: 'column-6', title: '列6', width: 200, hidden: false
        ,cellRenderer:(props) => {
          const data = [
                            {
                                value: '西安',
                                label: '西安',
                            },
                            {
                                value: '咸阳',
                                label: '咸阳',
                            }
                        ]
            return    <el-select
                          v-model={props.rowData[props.column.dataKey!]}
                          onChange={()=>{}}
                          >
                          {
                            data.map((item) =>
                              <el-option
                                key={item.value}
                                label={item.label}
                                value={item.value}
                              />)
                          }
                      </el-select>
        }
    }
    ]
})

const dataMap = {
  dataSource1: [
    { prop: 'column-0', isReplace: true, defaultVal: '', selprop: 'mcolumn-0' },
    { prop: 'column-1', isReplace: true, defaultVal: '', selprop: 'mcolumn-1' },
    { prop: 'column-2', isReplace: true, defaultVal: '', selprop: 'mcolumn-2' },
    { prop: 'column-3', isReplace: true, defaultVal: '', selprop: 'mcolumn-3' },
    { prop: 'column-4', isReplace: true, defaultVal: '', selprop: 'mcolumn-4' },
    { prop: 'column-5', isReplace: true, defaultVal: '', selprop: 'mcolumn-5'
    ,eventConf:{
      isOn: true,
      calculate: (row)=>{return 999}
    } },
    { prop: 'column-6', isReplace: true, defaultVal: '', selprop: 'mcolumn-6'},
    { prop: 'id', isReplace: true, defaultVal: '', selprop: 'mid' },
  ]
}
let id = 0
const initData = (length = 10) => {
  const rows = Array.from({length}).map((item, index) => {
    return {
      'mcolumn-0': index,
      'mcolumn-1': '文字列' + (index + 1),
      'mcolumn-2': Math.ceil(Math.random()*100),
      'mcolumn-3': '',
      'mcolumn-4': new Date(),
      'mcolumn-5': '哈哈哈哈',
      'mcolumn-6': '西安',
      mid: index
    }
  })
  tableData.value = tableEditRef.value.generateData('dataSource1', rows)
  _computeSumRow()

}
const sumRowConfig = reactive({
  disabled: false,
  sumText: '合计',
  items: {
    'column-2': {
      text: '本期折旧金额',
      sumVal: 0,
      capitalCol: true
    }
  }
})

const _computeSumRow = () => {
  // 合计行
  let column2 = 0;
  tableData.value.map(function (item) {
    column2 = column2 + Number(item['column-2']);
  });
  sumRowConfig.items['column-2'].sumVal = column2
}

onMounted(() => {
  _computeSumRow()
})
</script>
```
