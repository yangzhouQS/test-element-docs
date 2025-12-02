## api

### TableEditV2  属性

| 名称        | 描述       | 类型 | 默认值 |
| :--------- |:--------| :-----| :-----|
|  height | string / number | auto | 表格高度 |
|  column-configs | 表格列的配置 | ColumnConfig[] | [] |
|  table-loading | 表格加载状态 |boolean | false | 
|  table-data | 表格内容 |array | [] | 
|  map-config | 表格数据映射配置 |MapConfig | {} | 
|  not-repeat-filed | 判断重复字段 |string/string[] |  | 
|  rows-limit | 行数限制 |number | 10000 |
|  sum-row-config | 合计行配置 |SumRowConfig | {} | 
|  rules | 表单校验规则 | | {} | 

### ColumnConfig 属性

| 名称        | 类型       | 默认值 | 描述 |
| :--------- |:--------| :-----| :-----|
|  display  | boolean |  | 显示该列 |
|  isParent  | boolean | false | 父节点 |
|  attr | ColumnAttrs | {} | 列属性对象 |
|  items | ColumnConfig[] | [] | 子节点 |

### ColumnAttrs属性

| 名称        | 类型       | 默认值 | 描述 |
| :--------- |:--------| :-----| :-----|
|  prop  | string |  | 字段名称 对应列内容的字段名， 也可以使用 property属性 |
|  type  | string |  | 对应列的类型。 如果设置了selection则显示多选框； 如果设置了 index 则显示该行的索引（从 1 开始计算）； |
|  label  | string |  | 显示的标题 |
|  width  |  number / string |  | 对应列的宽度 |
|  minWidth  |  number / string |  | 最小宽度 |
|  align  | string | left / center / right | 对齐方式 |
|  headerAlign  | string | left / center / right | 表头对齐方式， 若不设置该项，则使用表格的对齐方式 |
|  className  | string |  | 给单元格附加 className |
|  formatter  | (({ cellValue, row, column }) => string) |   | 格式化显示内容  |
|  sortable  | boolean |  | 数据排序，是否允许列排序 |
|  sortBy  | string |  | 数据排序，只对 sortable 有效，指定排序的字段（当值 formatter 格式化后，可以设置该字段，使用值进行排序） |
|  headerSlot  | string |  | 表头插槽名称 |
|  scopedSlot  | string |  | 列插槽名称 |
|  rules | 表单校验规则 | | {} | 

### MapConfig 映射配置

示例
``` javascript
{
  // 数据源名称，可以设置多套数据源
  dataSource1: [
    { 
        prop: 'column-5', // 目标字段名
        isReplace: true, // 是否替换字段
        defaultVal: '', // 默认值，在isReplace值为false时起作用
        selprop: 'mcolumn-5', // 来源字段名
        eventConf:{ // 替换方法
            isOn: true, // 开启状态
            calculate: (row)=>{return row.a + row.b} // 计算方法，返回计算过后的值
        }
    }
  ]
}
```

### SumRowConfig  合计行

| 名称        | 描述       | 类型 | 默认值 |
| :--------- |:--------| :-----| :-----|
|  disabled| 禁用状态| 	boolean| 	true|
|  sumText| 合计行标题| 	string| 	合计|   
|  items| 合计项，可以是多个| 	{}| 	{}|    

示例
``` javascript
{
  disabled: false,
  sumText: '合计',
  items: {
    'column-2': { // 要计算的列名，可以有多个
      text: '本期折旧金额', // 计算列标题
      sumVal: 0, // 合计值
      capitalCol: true // 大写数字
    }
  }
}
```
### TableEditV2 插槽

| 名称        |  描述 |
| :--------- |:-----|
|  pagination | 分页功能区自定义插槽 |

### TableColumn 插槽

| 名称        |  描述 |
| :--------- |:-----|
|  ColumnAttrs属性-headerSlot | 表头的插槽| 
|  ColumnAttrs属性-scopedSlot | 表格内容的插槽| 

### TableEditV2 事件
 
### 事件
| 名称        |  说明 | 回调参数 |
| :--------- |:-----|:-----|
|  current-change | 行选择触发|(row)| 

### 方法


| 方法名        | 描述       | 参数 | 返回值|
| :--------- |:--------| :-----|:-----|
|  generateData| 映射字段的方法,返回映射后的表格数据| source, rows	|rows|
|getNativeRefs|获取table的dom| | |
|validate|表单校验方法| function(valid, notValidRows){}	||
