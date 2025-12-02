## api

### 属性

| 属性        | 说明       | 类型 | 可选值 | 默认值 |
| :--------- |:--------| :-----| :-----| :-----|
| v-model | 选中的值	| string/number	| 	|  |
| default-text | 默认显示文本	| string	| 	|  |
| limit*| 每页加载的行数	| number	|	|  10|
| default-props*| 列表每一行显示字段(label、value必传)	| object	|	{label: 'label',subLabel: 'subLabel', nextLabel: 'nextLabel', value: 'id', disabled: 'disabled'}|  |
| width | 组件的宽度	| string	| 	| 100% |
| dropdown-height	| 列表的高度	| string	|  | 300px |
| dropdown-width | 下拉框的宽度	| string/number	| 	| 300px |
| clearable | 可清空	| boolean	| 	| false |
| placeholder | 占位符	| string	| 	|  |
| search-placeholder | 搜索框占位符	| string	| 	|  请输入检索信息|
| search-enable | 启用搜索功能	| boolean	| 	|  true|
| size | 尺寸	| string	| 	large/small/'' |  |
| disabled | 禁用	| boolean	| 	 |  false |
| allow-create | 开启添加功能	| boolean	| 	 |  false |
| filter-current-create | 用来过滤服务器中是否存在输入内容; resolve接收检索结果	| function	| ((label, resolve) => void) 	 |   |
| get-current-create | 用来构造临时添加的数据；resolve(item):item接收要保存的数据	| function	| ((label, resolve) => void) |   |

### 插槽

| 名称        |  说明 |
| :--------- |:-----|
|  item | 行内自定义渲染 | 

### 事件
| 名称        |  说明 | 回调参数 |
| :--------- |:-----|:-----|
|  load-data | 分页加载数据(params:分页参数,filter:过滤参数,resolve:追加数据的方法) |(params, filter, resolve)  |
|  change | 选择列表明细时触发 | (item)|
|  clear | 清空选择时触发 |() |
### 方法


| 名称        |  描述 |
| :--------- |:-----|
|reload|刷新列表|