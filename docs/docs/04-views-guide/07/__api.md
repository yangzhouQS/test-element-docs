
## 参数

### ListOnly 属性

| 属性        | 说明       | 类型 | 可选值 | 默认值 |
| :--------- |:--------| :-----| :-----| :-----|
| loading	| 加载状态	| boolean	| 	| false |
| list-data	| 列表数据	| array	| 	|  [] |
| height	| 列表高度	| string	| 	|100%  |
| direction	| 排列的方向	| enum	| 	纵向：vertical/横向：horizontal | horizontal |
| wrap | 设置是否自动折行	| boolean	| 	| false |
| fill | 子元素是否填充父容器	| boolean	| 	| false |
| space-size | 间隔大小	| enum (`default`、 `small` 、 `large`)/ number / [number, number]	| 	| false |
| alignment | 对齐方式	| emun [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)	| 	|  |
| list-item-props | 列表子项属性	| ListItemProps	| 	|  |
| fill-ratio | 填充父容器的比例	| number	| 	| 100 |
| space-style | 内置`space`组件的额外样式	| string / object	| 	|  |


### ListItemProps 属性

| 属性        | 说明       | 类型 | 可选值 | 默认值 |
| :--------- |:--------| :-----| :-----| :-----|
| height	| 高度	| string	| 	|  |
| width	| 宽度	| string	| 	|  |
| border	| 显示边框	| boolean	| 	| false |
| shadow	| 显示阴影	| boolean	| 	| false |
| paddingSize	| 内边距大小	| string	| small/base/large |  |
| background	| 显示背景色	| boolean	| 	| false |

### 插槽

| 名称        |  描述 |
| :--------- |:-----|
|  item | 行渲染插槽 | 

### 方法

| 名称        |  描述 |
| :--------- |:-----|
| getScrollRef | 获取内置的`el-scrollbar`组件的`Ref`,可以对滚动条进行操作， [查看el-scrollbar方法](https://element-plus.org/zh-CN/component/scrollbar.html#exposes)	|