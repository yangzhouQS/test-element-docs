## api

`table`部分的详细用法可以直接参考`table-only`的[文档](/dosktop-element/docs.html#/tableonly)
### TableAsync 属性

`el-table`表格的通用属性和方法参照[文档](https://element-plus.org/zh-CN/component/table.html#table-%E5%B1%9E%E6%80%A7)

| 名称        | 类型       | 默认值 | 描述 |
| :--------- |:--------| :-----| :-----|
|  column-configs | ColumnConfig | [] | 表格列的配置 |
|  table-loading | boolean | false | 加载状态 |
|  table-data | array | {rows:[], count:0} | 表格内容 |
|  pagination | Pagination |{ currentSize: 20, pageSizes: [10, 20, 50], layout: '->,sizes,prev, pager, next,  total'} | 分页参数 |


### Pagination 属性

| 名称        | 类型       | 默认值 | 描述 |
| :--------- |:--------| :-----| :-----|
|  currentSize  | number | 20 | 每页显示条目个数 |
|  pageSizes  | number[] | [10, 20, 50] | 每页显示个数选择器的选项设置 |
|  layout  | string | sizes,prev, pager, next,  total | 组件布局，子组件名用逗号分隔sizes / prev / pager / next / jumper / -> / total / slot |

### ColumnConfig 属性

| 名称        | 类型       | 默认值 | 描述 |
| :--------- |:--------| :-----| :-----|
|  isParent  | boolean | false | 父节点 |
|  attr | ColumnAttrs | {} | 列属性对象 |
|  items | ColumnConfigs[] | [] | 子节点 |

### ColumnAttrs 属性

`Table-column`表格列的通用属性和方法参照[文档](https://element-plus.org/zh-CN/component/table.html#table-column-%E5%B1%9E%E6%80%A7)

| 名称        | 类型       | 默认值 | 描述 |
| :--------- |:--------| :-----| :-----|
|  prop  | string |  | 字段名称 对应列内容的字段名， 也可以使用 property属性 |
|  type  | string |  | 对应列的类型。 如果设置了selection则显示多选框； 如果设置了 index 则显示该行的索引（从 1 开始计算）； 如果设置了 expand 则显示为一个可展开的按钮 |
|  label  | string |  | 显示的标题 |
|  width  | string |  | 对应列的宽度 |
|  headerAlign  | string | left / center / right | 表头对齐方式， 若不设置该项，则使用表格的对齐方式 |
|  align  | string | left / center / right | 对齐方式 |
|  headerSlot  | string |  | 表头插槽名称 |
|  scopedSlot  | string |  | 列插槽名称 |



### TableAsync 插槽

| 名称        |  描述 |
| :--------- |:-----|
|  append | 插入至表格最后一行之后的内容， 如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。 若表格有合计行，该 slot 会位于合计行之上。 | 
|  pagination | 分页功能区左侧自定义插槽 |

### TableColumn插槽

| 名称        |  描述 |
| :--------- |:-----|
|  ColumnAttrs属性-headerSlot | 表头的插槽| 
|  ColumnAttrs属性-scopedSlot | 表格内容的插槽| 

### 事件
| 名称        |  说明 | 回调参数 |
| :--------- |:-----|:-----|
|  reload | 加载数据 |() |
|  sort-change | 排序 (sort:排序参数) |(sort) |


### TableAsync 方法

| 名称        |  描述 |
| :--------- |:-----|
|getNativeRefs|获取el-table的dom|
|getPaginationParams|获取当前的分页参数(isReset 重置分页参数, pageNo 重置页码)|
|setCurrentPage|设置当前页码(pageNo 重置页码)|