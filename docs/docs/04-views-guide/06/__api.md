## api

### TreeTable 属性

| 名称        | 类型       | 默认值 | 描述 |
| :--------- |:--------| :-----| :-----|
|  height | string / number | auto | 表格高度 |
|  column-configs | ColumnConfig | [] | 表格列的配置 |
|  table-loading | boolean | false | 加载状态 |
|  table-data | array | [] | 表格内容 |
|  tree-config | TreeConfig | { lazy: true, rowField: 'id', parentField: 'parentId', hasChildField: 'hasChild', expandAll: false } | 树配置 |
|  checkbox-config | CheckboxConfig | { labelField: '', checkStrictly: false, checkRowKeys: [] } | 多选配置 |
|  row-config | RowConfig | { keyField: '' } | 行配置 |
|  footer-data | array | [] | 表格底部数据（合计行） |
|  summary-method | function | [] |  表格底部数据计算方法（合计行） |

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
|  * treeNode | boolean |  | 只对 tree-config 配置时有效，指定为树节点 |

### TreeConfig 属性

| 名称        | 类型       | 默认值 | 描述 |
| :--------- |:--------| :-----| :-----|
|  lazy  | boolean | true | 是否使用懒加载（启用后只有指定 hasChildField 字段的节点才允许被点击） |
|  rowField  | string | 'id' | 树节点的字段名 |
|  parentField | string | 'parentId' | 树父节点的字段名 |
|  hasChildField | string |'hasChild' | 只对 lazy 启用后有效，标识是否存在子节点，从而控制是否允许被点击 |
|  expandAll | boolean | false | 默认展开所有子孙树节点（只会在初始化时被触发一次） |
|  expandRowKeys | string[] |  | 默认展开指定树节点（只会在初始化时被触发一次，需要有 row-config.keyField） |

### CheckboxConfig 属性

| 名称        | 类型       | 默认值 | 描述 |
| :--------- |:--------| :-----| :-----|
|  labelField  | string |  | 复选框显示的字段名，可以直接显示在复选框中 |
|  checkStrictly  | boolean | false |是否严格的遵循父子不互相关联的做法  |
|  checkRowKeys  | string[] |  |  默认勾选指定行（只会在初始化时被触发一次，需要有 row-config.keyField）|

### RowConfig 属性

| 名称        | 类型       | 默认值 | 描述 |
| :--------- |:--------| :-----| :-----|
|  keyField  | string |  | 	自定义行数据唯一主键的字段名（默认自动生成） |

### TreeTable 插槽

| 名称        |  描述 |
| :--------- |:-----|
|  pagination | 分页功能区自定义插槽 |

### TableColumn 插槽

| 名称        |  描述 |
| :--------- |:-----|
|  ColumnAttrs属性-headerSlot | 表头的插槽| 
|  ColumnAttrs属性-scopedSlot | 表格内容的插槽| 

### TreeTable 事件
 
### 事件
| 名称        |  说明 | 回调参数 |
| :--------- |:-----|:-----|
|  load-node | 展开节点时触发load-node事件，将异步获取的数据传递给resolve方法构造子级节点|(rowData, resolve) |
|  select-change | 勾选选择框时触发| (rows)|
|  current-change | 行选择触发|(row)| 

### TreeTable 方法

| 名称        |  描述 |
| :--------- |:-----|
|getNativeRefs|获取table的dom|
|getCheckboxRecords|获取当前选中行|