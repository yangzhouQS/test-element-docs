
## 参数

`layout`的详细用法可以直接参考`layout`的[文档](https://element-plus.org/zh-CN/component/layout.html)

### DynamicDescription 属性

| 属性        | 说明       | 类型 | 可选值 | 默认值 |
| :--------|:---------| :-----| :-----| :-----|
| layout	| 布局	| `FormLayout`	| 	|  |
| items	| 表单明细	| `DynamicDescriptionItemProps`[]	| 	|  |
| label-position | 	`filter-item`表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性| enum| | right| 
| label-width | 	`filter-item`标签的长度，例如 '50px'。| | ''| 
| size 	| `filter-item`用于控制该表单内组件的尺寸	| enum| |small| 
| description	| `filter-item`信息展示模式	| true/false	| true |

### FormLayout 属性 `el-row`
| 属性        | 说明       | 类型 | 可选值 | 默认值 |
| :--------|:---------| :-----| :-----| :-----|
| tag|自定义元素标签| string||div|
  gutter|栅格间隔| number|||
  justify|flex 布局下的水平排列方式|enum |'center' / 'space-around' / 'space-between' / 'space-evenly' / 'end' / 'start'|start|
  align|flex 布局下的垂直排列方式|enum |'top' / 'middle' / 'bottom'||

### DynamicDescriptionItemProps 属性
| 属性        | 说明       | 类型 | 可选值 | 默认值 |
| :--------|:---------| :-----| :-----| :-----|
| display	| 是否显示表单项	| boolean	|  	|  |
| renderContent	| 表单项渲染函数	| () => any	|  	|  |
| layout	| 表单项布局	| `DescriptionItemLayout`	|  	|  |
| permissionSetting |权限项设置 | string|  	|  |
| label	| `filter-item`label文本	| string	| 	|  |
| label-width	| `filter-item`label宽度	| string	| 	|  |
| label-position| `filter-item`label位置	| string	| left/right	| right |
| description| `filter-item`启用信息描述模式	| boolean	|	| false |
| size| `filter-item`控件大小	| string	|base/small/large| small |
| type | 类型（`type=divider`则表示为分割线）| emun |'divider'/ '' |  	|  |
| title | `FoldDivider` 分割线标题| string | |  	|  |
| disableFold | `FoldDivider` 禁用折叠功能| boolean |  |  	| false |
| contentPosition | `FoldDivider` 分割线内容出现的位置| emun | 'left' / 'right' / 'center' |  	| left |
| defaultExpand | `FoldDivider` 默认展开（折叠功能需打开）| boolean | |  	| false |


### DescriptionItemLayout 属性 `el-col`
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

