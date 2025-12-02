
## 参数
`tool-bar`的详细用法可以直接参考`tool-bar`的[文档](./docs.html#/toolbar)

`layout`的详细用法可以直接参考`layout`的[文档](https://element-plus.org/zh-CN/component/layout.html)

### DynamicFilter 属性

| 属性        | 说明       | 类型 | 可选值 | 默认值 |
| :--------|:---------| :-----| :-----| :-----|
| filter-items	| 表单明细	| `DynamicFilterItemProps`[]	| 	|  |
| more-items	| 展开更多表单明细	| `DynamicFilterItemProps`[]	| 	|  |
| label-position | 	`filter-item`表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性| enum| | right| 
| label-width | 	`filter-item`标签的长度，例如 '50px'。| | ''| 
| size 	| `filter-item`用于控制该表单内组件的尺寸	| enum| | —| 
| divider	| `tool-bar`显示分割线	| boolean	| true/false	| false |
| padding-size	| `tool-bar`内边距大小	| string	| small/base/large |  |
| clear-padding	| `tool-bar`清除内边距	| string[]	| left/right/top/bottom	| false |
| tool-max-width	| `tool-bar`过滤器工具栏最大宽度	| string	| 	| 150px |
| border	| `tool-bar`显示边框	| boolean	| true/false	| false |
| show-more	| `tool-bar`默认展开更多	| boolean	| true/false	| false |
| background	| `tool-bar`显示背景色	| boolean	| true/false	| true |
| filter-gutter	| `tool-bar`设置过滤器区域`el-col`的间隔	| number	| 	| 6 |


### DynamicFilterItemProps 属性
| 属性        | 说明       | 类型 | 可选值 | 默认值 |
| :--------|:---------| :-----| :-----| :-----|
| display	| 是否显示表单项	| boolean	|  	|  |
| renderContent	| 表单项渲染函数	| () => any	|  	|  |
| layout	| 表单项布局	| `FilterItemLayout`	|  	|  |
| permissionSetting |权限项设置 | string|  	|  |
| label	| `filter-item`label文本	| string	| 	|  |
| label-width	| `filter-item`label宽度	| string	| 	|  |
| label-position| `filter-item`label位置	| string	| left/right	| right |
| description| `filter-item`启用信息描述模式	| boolean	|	| false |
| size| `filter-item`控件大小	| string	|base/small/large| small |


### FilterItemLayout 属性 `el-col`
| 属性        | 说明       | 类型 | 可选值 | 默认值 |
| :--------|:---------| :-----| :-----| :-----|
|span |栅格占据的列数 | number| | | 24|
|offset | 栅格左侧的间隔格数| number| | | 0|
|push |栅格向右移动格数 | number| | | 0|
|pull |栅格向左移动格数|number | | |0 |
|xs |`<768px` 响应式栅格数或者栅格属性对象 |number / object | | | |
|sm |`≥768px` 响应式栅格数或者栅格属性对象	|number / object | | | |
|md | `≥992px` 响应式栅格数或者栅格属性对象| number / object| | | |
|lg | `≥1200px` 响应式栅格数或者栅格属性对象| number / object| | | |
|xl | `≥1920px` 响应式栅格数或者栅格属性对象|number / object | | | |
|tag |自定义元素标签 |number | | | div|


### 插槽

| 名称        |  描述 |
| :--------- |:-----|
|  tool | `tool-bar`过滤器工具栏 | 
|  default | `tool-bar`工具条 | 