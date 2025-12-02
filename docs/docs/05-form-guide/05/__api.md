## api

### TableEdit  属性
`TableV2` 表格的通用属性和方法参照[文档](https://element-plus.org/zh-CN/component/table-v2.html#tablev2-%E5%B1%9E%E6%80%A7)

| 名称        | 描述       | 类型 | 默认值 |
| :--------- |:--------| :-----| :-----|
|  column-configs | 表格列的配置 | ColumnConfig[] | [] |
|  table-data | 表格内容 |array | [] | 
|  map-config | 表格数据映射配置 |MapConfig | {} | 
|  not-repeat-filed | 判断重复字段 |string/string[] |  | 
|  rows-limit | 行数限制 |number | 10000 |
|  sum-row-config | 合计行配置 |SumRowConfig | {} | 

### ColumnConfig 列属性
| 名称        | 描述       | 类型 | 默认值 |
| :--------- |:--------| :-----| :-----|
|  dataKey*| 需要渲染当列的数据字段| 	 String| 	| 
|  align| 表格单元格内容对齐方式| 	Alignment| 	left| 
|  class	| 列的类名	| String	| -| 
|  fixed	| 固定列位置	| Boolean/FixedDir| 	false| 
|  flexGrow| 	CSS 属性 flex grow, 仅当不是固定表时才生效	| Number| 	0| 
| flexShrink| 	CSS 属性 flex shrink, 仅当不是固定表时才生效| 	Number| 	1| 
| headerClass| 	自定义 header 头部类名| 	String| 	-| 
| hidden	| 此列是否不可见| 	Boolean	| -| 
| style	| 自定义列单元格的类名，将会与 gird 单元格合并	| CSSProperties	| -| 
| sortable	| 设置列是否可排序| 	Boolean| 	-| 
| title	| Header 头部单元格中的默认文本	| String| 	-| 
| maxWidth	| 列的最大宽度	| String| 	-| 
| minWidth	| 列的最小宽度	| String| 	-| 
| width *| 	列的宽度 必填| 	Number	| -| 
| cellRenderer| 	自定义单元格渲染器	| VueComponent/(props: CellRenderProps) => VNode	| -| 
| headerCellRenderer	| 自定义头部渲染器	| VueComponent/(props: HeaderRenderProps) => VNode| -| 

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

### 方法


| 方法名        | 描述       | 参数 | 返回值|
| :--------- |:--------| :-----|:-----|
|  generateData| 映射字段的方法,返回映射后的表格数据| source, rows	|rows|
|getNativeRefs|获取table的dom|