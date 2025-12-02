
## 参数

### 属性

::: warning

这里只列出分页相关的参数，`list`部分的参数查看`ListOnly 属性`文档
:::
| 属性        | 说明       | 类型 | 可选值 | 默认值 |
| :--------- |:--------| :-----| :-----| :-----|
| loading	| 加载状态	| boolean	| 	| false |
| listData	| 列表数据	| array	| 	|  [] |
| height	| 列表高度	| string	| 	|100%  |
|  pagination | 分页参数 |Pagination |  | { currentSize: 20, pageSizes: [10, 20, 50], layout: '->,sizes,prev, pager, next,  total'}|

### Pagination 属性

| 名称        | 类型       | 默认值 | 描述 |
| :--------- |:--------| :-----| :-----|
|  currentSize  | number | 20 | 每页显示条目个数 |
|  pageSizes  | number[] | [10, 20, 50] | 每页显示个数选择器的选项设置 |
|  layout  | string | sizes,prev, pager, next,  total | 组件布局，子组件名用逗号分隔sizes / prev / pager / next / jumper / -> / total / slot |



### 事件
| 名称        |  说明 | 回调参数 |
| :--------- |:-----|:-----|
|  reload | 加载数据 |() |

### 插槽

| 名称        |  描述 |
| :--------- |:-----|
|  item | 行渲染插槽 | 
|  pagination | 分页功能区左侧自定义插槽 |

### 方法

| 名称        |  描述 |
| :--------- |:-----|
|getPaginationParams|获取当前的分页参数(isReset 重置分页参数, pageNo 重置页码)|
|setCurrentPage|设置当前页码(pageNo 重置页码)|