
## 参数

### 属性

| 属性        | 说明       | 类型 | 可选值 | 默认值 |
| :--------- |:--------| :-----| :-----| :-----|
| account-day	| 结账日	| number	| 1-31	| 31 |
| model-value	| 选择值`v-model`	| string[]	| 	|  |
| select-bar-items	| 选择面板显示项	| string[]	| 	|  ['day', 'week', 'month', 'quarter', 'year', 'all'] |
|default-picked	| 默认选择项	| string	| 'day'/ 'week'/ 'month'/ 'quarter'/ 'year'/ 'all' / |  |
| type	| `el-date-picker` 显示类型	| string	|  datetimerange/daterange/ monthrange	|  daterange|
| size	| `el-date-picker` 输入框尺寸	| string	| 	large/default/small|  default|
| value-format	| `el-date-picker` 可选，绑定值的格式。 不指定则绑定值为 Date 对象	| string	| 	|  |
| range-separator	| `el-date-picker` 选择范围时的分隔符	| string	| 	|  - |
| start-placeholder	| `el-date-picker` 范围选择时开始日期的占位内容	| string	| 	|  开始时间|
| end-placeholder	| `el-date-picker` 范围选择时结束日期的占位内容	| string	| 	|  结束时间|
| readonly	| `el-date-picker` 只读	| boolean	| |  false|
| disabled	| `el-date-picker` 禁用	| boolean	| |  false|
| clearable	| `el-date-picker` 是否显示清除按钮	| boolean	| |  false|


### 事件

| 名称        |  描述 | 参数 |
| :--------- |:-----|:-----|
|change|选中值变化时触发|(val)|
