### api

#### 属性

| 属性        | 说明       | 类型 | 可选值 | 默认值 |
| :--------- |:--------| :-----| :-----| :-----|
| v-model| 选择值	| number	|	|   |
| default-text| 默认显示文本	| string	|	|   |
| default-props*| 树节点和列表选择时字段配置	| DefaultProps	|	|  {label: 'label',value: 'id', disabled: 'disabled'}|
| more-enable	|  开启加载更多功能	| boolean	|  |  true |
| current-size| 树节点加载时每页的行数	| number	|	|  20 |
| placeholder| 占位符	| string	|	|  |
| search-placeholder| 搜索框占位符	| string	|	|  请输入检索信息|
| width	| 组件宽度	| string	|  |  100% |
| size	| 组件大小	| string	|  default/small/large	| default |
| dropdown-width	| 下拉框宽度	| string	|  |  300px |
| dropdown-height	| 下拉框高度	| string	|  |  300px |
| root-node*	| 根节点	| object	|  |  { children: [] } |
| search-enable	| 开启搜索	| boolean	|  |  false |
| clearable	| 清空	| boolean	|  |  false |
| input-class	| input框的重置样式表	| boolean	|  |  false |
| expand-first	|  默认加载第一级	| boolean	|  |  false |
| default-expanded-keys	|  默认展开节点主键链	| array	|  |  [] |
| default-expand-last-node	| 搭配`default-expanded-keys`使用, 展开末级节点	| boolean	|  |  false |
| reload-enable	| 打开刷新按钮	| boolean	|  |  true |
| disabled | 禁用	| boolean	| 	 |  false |

#### DefaultProps 树节点字段属性

| 属性        | 说明       | 类型 | 可选值 | 默认值 |
| :--------- |:--------| :-----| :-----| :-----|
| label*| 显示文本字段	| string	|	|   |
| value*| 选中的值字段	| string	|	|   |
| disabled| 禁用字段	| string	|	|   |

示例
```javascript
{
    label: 'name',
    value: 'id',
    disabled: 'disabled'
}
```

#### 插槽

| 名称        |  描述 |
| :--------- |:-----|
|  treeitem | 树节点渲染 | 
|  listitem | 搜索列表渲染 | 

### 事件
| 名称        |  说明 | 回调参数 |
| :--------- |:-----|:-----|
|  load-node | 展开节点触发（node：节点信息和分页参数，resolve：追加数据的回调函数） |(node, resolve) |
|  load-search-data | 加载搜索列表数据（filter：过滤字段，resolve：加载数据的回调函数） | (filter, resolve)|
|  select-change | 选中值变化时触发 | (item)|
|  clear | 清空选择时触发 |() |
|  reload | 刷新树组件时触发 |() |


### 方法


| 名称        |  描述 |
| :--------- |:-----|
|reload|刷新树组件|