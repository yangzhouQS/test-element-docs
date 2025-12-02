##  缩放
打开`itemConfig`中的`showDragButton`属性开启缩放功能

::: tip

使用要求：
1. 缩放功能只在`固定区域`起作用。
2. 显示缩放按钮需要打开按钮所在位置的`padding`
3. 拖动方向上需要有`至少一个弹性框`才能拖动

:::

### 横向

横向排列时，缩放按钮可以放在固定区域的`左侧` 或 `右侧`，不传时默认在`右侧`

`dragButtonPosition`设置值为`left`或`right`

```vue file="./drag-vue.vue"

```