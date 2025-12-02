
## 参数

### FlexBox 属性

| 属性        | 说明       | 类型 | 可选值 | 默认值 |
| :--------- |:--------| :-----| :-----| :-----|
| is-row	| 横向排列	| boolean	| true/false	| false |
| item-num	| 子容器数目	| number	| 1	| 1 |
| item-config	| 子容器相关配置	| ItemConfig[]	| 	|  |
| height	| 组件高度	| string	| 	| 100% |
| width	| 组件宽度	| string	| 	| 100% |

### ItemConfig 属性

| 属性        | 说明       | 类型 | 可选值 | 默认值 |
| :--------- |:--------| :-----| :-----| :-----|
| tag	| 子项标识	| string	| item-x	|  |
| isFixed	| 是否为固定区域	| boolean	| true/false	| false |
| size	| 固定区域大小	| string	| 0px	|  |
| paddingSize	| 内边距大小	| string	| small/base/large |  |
| clearPadding	| 清除内边距	| string[]	| left/right/top/bottom	| false |
| showDragButton	| 显示固定区域的缩放按钮	| boolean	|  true/false	| false |
| dragButtonPosition	| 缩放按钮位置	| string	|  横向：left/right 纵向：top/bottom	|  |
| isHidden	| 隐藏区域	| boolean	|  	|  |
| isFold	| 默认是否折叠	| boolean	|  	|  |
| expandSize	| 展开区域大小	| string	|  	|  |

### 插槽

| 名称        |  描述 |
| :--------- |:-----|
|  item-x | x为数字，代表子项列，可以加多个 | 
