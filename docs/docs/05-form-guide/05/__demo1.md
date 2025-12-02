##  基础用法

初始化或者追加数据时配置`map-config`属性，然后使用`generateData`方法来映射数据，配置`not-repeat-filed`来判断字段重复

`column-configs`设置列信息，`cellRenderer`方法返回需要渲染的组件

:::demo  

```html
<template>
  <div style="padding-bottom:10px">
    <el-input-number v-model="length"></el-input-number>
    <el-button @click="initData(length)">追加{{length}}条数据</el-button>
  </div>
  <div style="height:500px;overflow: hidden;">
    <table-edit
      ref="tableEditRef"
      :table-data="tableData"
      :column-configs="tableConfig"
      :map-config="dataMap"
      :not-repeat-filed="'id'"
      >
    </table-edit>
  </div>
</template>
<script lang="tsx" setup>
const { computed, ref, reactive } = Vue
const length = ref(20)
const tableEditRef = ref()
const tableData = ref([{ 'column-0': 0, 'column-1': 'sddddddddddddsddddddddddddsddddddddddddsddddddddddddsdddddddddddd', 'column-2': 2, 'column-3': 31, id: 3 },
{ 'column-0': 0, 'column-1': 1, 'column-2': 2, 'column-3': 32, id: 1 },
{ 'column-0': 0, 'column-1': 1, 'column-2': 2, 'column-3': '', id: 2 }])

const tableConfig = computed(() => {
    return [
      {
        dataKey: 'id', title: '序号', width: 60, minWidth: 60, align: 'left'
        ,cellRenderer: (props) => {
            return  props.rowIndex + 1
        }
    },
    {  dataKey: 'column-1', title: '列1列1', width: 200 },
    {
        dataKey: 'column-2', title: '列2', width: 100
        ,cellRenderer:(props) => {
      return <el-input-number v-model={props.rowData[props.column.dataKey]} controls={false}></el-input-number> 
        }
    },
    {
        dataKey: 'column-3', title: '列3', width: 200, minWidth: 200
        ,cellRenderer:(props) => {
            return   <el-input
                      v-model={props.rowData[props.column.dataKey]}
                      size="small"
                      onBlur={()=>{ console.log('column-3进入blur事件：', props.rowData)}}
                      />
        }
    },
    { dataKey: 'column-4', title: '列4', width: 200 },
    {
       dataKey: 'column-5', title: '列5', width: 200
        ,cellRenderer:(props) => {
            return   <el-input
                      v-model={props.rowData[props.column.dataKey]}
                      size="small"
                      onBlur={()=>{ console.log('column-5进入blur事件：', props.rowData)}}
                      />
        }
    },
    {
        dataKey: 'column-6', title: '列6', width: 200, hidden: false
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
    id += 1
    return {
      'mcolumn-0': id,
      'mcolumn-1': '文字列' + (index + 1),
      'mcolumn-2': 0, // Math.ceil(Math.random()*100),
      'mcolumn-3': '',
      'mcolumn-4': new Date(),
      'mcolumn-5': '哈哈哈哈',
      'mcolumn-6': '西安',
      mid: id
    }
  })
  tableData.value = tableEditRef.value.generateData('dataSource1', rows)
  console.log(tableData.value)
}
</script>

```
:::
