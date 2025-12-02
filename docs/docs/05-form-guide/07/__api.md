
## 参数
`el-form`的详细用法可以直接参考`el-form`的[文档](https://element-plus.org/zh-CN/component/form.html)

`layout`的详细用法可以直接参考`layout`的[文档](https://element-plus.org/zh-CN/component/layout.html)

### DynamicForm 属性

| 属性        | 说明       | 类型 | 可选值 | 默认值 |
| :--------|:---------| :-----| :-----| :-----|
| layout	| 布局	| `FormLayout`	| 	|  |
| form-items	| 表单明细	| `DynamicFormItemProps`[]	| 	|  |
| model 	| `el-form`表单数据对象	| object | |  —| 
| rules 	| `el-form`表单验证规则	| object|  | —| 
| inline | 	`el-form`行内表单模式| boolean | | false| 
| label-position | 	`el-form`表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性| enum| | right| 
| label-width | 	`el-form`标签的长度，例如 '50px'。 作为 Form 直接子元素的 form-item 会继承该值。 可以使用 auto。| 	 string /  number| | ''| 
| label-suffix 	| `el-form`表单域标签的后缀	| string| | ''| 
| hide-required-asterisk | `el-form`是否隐藏必填字段标签旁边的红色星号。| boolean| | false| 
| require-asterisk-position	 | `el-form`星号的位置。	| enum| | left| 
| show-message 	| `el-form`是否显示校验错误信息	| boolean| | | true| 
| inline-message	 | `el-form`是否以行内形式展示校验信息| boolean| | | false| 
| status-icon 	| `el-form`是否在输入框中显示校验结果反馈图标	| boolean| | false| 
| validate-on-rule-change | 	`el-form`是否在 rules 属性改变后立即触发一次验证	|boolean| true| | | 
| size 	| `el-form`用于控制该表单内组件的尺寸	| enum| | —| 
| disabled | 	`el-form`是否禁用该表单内的所有组件。 如果设置为 true, 它将覆盖内部组件的 disabled 属性	| boolean| | false| 
| scroll-to-error | 	`el-form`当校验失败时，滚动到第一个错误表单项	| boolean| | false| 
| scroll-into-view-options  | `el-form`当校验有失败结果时，滚动到第一个失败的表单项目 可通过 scrollIntoView 配置	| object /  boolean| | —| 

### FormLayout 属性 `el-row`
| 属性        | 说明       | 类型 | 可选值 | 默认值 |
| :--------|:---------| :-----| :-----| :-----|
| tag|自定义元素标签| string||div|
  gutter|栅格间隔| number|||
  justify|flex 布局下的水平排列方式|enum |'center' / 'space-around' / 'space-between' / 'space-evenly' / 'end' / 'start'|start|
  align|flex 布局下的垂直排列方式|enum |'top' / 'middle' / 'bottom'||

### DynamicFormItemProps 属性
| 属性        | 说明       | 类型 | 可选值 | 默认值 |
| :--------|:---------| :-----| :-----| :-----|
| display	| 是否显示表单项	| boolean	|  	|  |
| renderContent	| 表单项渲染函数	| () => any	|  	|  |
| layout	| 表单项布局	| `FormItemLayout`	|  	|  |
| permissionSetting |权限项设置 | string|  	|  |
| label |`el-form-item`标签文本 | string	|
| prop |`el-form-item` model 的键名。 它可以是一个路径数组（例如 ['a', 'b', 0]）。 在定义了 validate、resetFields 的方法时，该属性是必填的| string | |  	|  |
| rules | `el-form-item`表单验证规则| FormItemRule[] | |  	|  |
| labelWidth |`el-form-item`标签宽度，例如 '50px'。 可以使用 auto。| string / number | |  	|  |
| required |`el-form-item`是否为必填项，如不设置，则会根据校验规则确认 | boolean | |  	|  |
| error |`el-form-item`表单域验证错误时的提示信息。设置该值会导致表单验证状态变为 error，并显示该错误信息。 | string | |  	|  |
| showMessage | `el-form-item`是否显示校验错误信息| boolean | |  	|  |
| size | `el-form-item`用于控制该表单域下组件的默认尺寸|emun |'' / 'large' / 'default' / 'small'  |  	|  |
| inlineMessage | `el-form-item`是否在行内显示校验信息| string / boolean | |  	|  |
| for |`el-form-item`和原生标签相同能力 | string | |  	|  |
| validateStatus | `el-form-item`formitem 校验的状态| emun |''/ 'error'/ 'validating'/ 'success' |  	|  |
| type | 类型（`type=divider`则表示为分割线）| emun |'divider'/ '' |  	|  |
| title | `FoldDivider` 分割线标题| string | |  	|  |
| disableFold | `FoldDivider` 禁用折叠功能| boolean |  |  	| false |
| contentPosition | `FoldDivider` 分割线内容出现的位置| emun | 'left' / 'right' / 'center' |  	| left |
| defaultExpand | `FoldDivider` 默认展开（折叠功能需打开）| boolean | |  	| false |
### FormItemLayout 属性 `el-col`
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


### DynamicForm 事件

| 名称        |  描述 |
| :--------- |:-----|
|validate|表单验证时触发|

### DynamicForm 方法

| 名称        |  描述 |
| :--------- |:-----|
|getNativeRefs|获取`el-form`的dom|