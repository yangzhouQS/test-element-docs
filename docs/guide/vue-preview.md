# Vue3 组件预览示例

本页面展示如何在 Rspress 中预览 Vue3 组件。

## 基础用法

直接在代码块中编写 Vue 代码，使用 `preview` 标记：

```vue preview
<template>
  <div>
    <h3>Hello Vue3!</h3>
    <p>当前计数: {{ count }}</p>
    <button @click="count++">点击 +1</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<style scoped>
button {
  padding: 8px 16px;
  background: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  opacity: 0.8;
}
</style>
```

## 使用外部组件

导入并使用外部组件：

```vue preview
<template>
  <div>
    <DemoButton text="主要按钮" type="primary" />
    <DemoButton text="成功按钮" type="success" />
    <DemoButton text="警告按钮" type="warning" />
    <DemoButton text="危险按钮" type="danger" />
  </div>
</template>

<script setup>
import DemoButton from '../components/DemoButton.vue';
</script>

<style scoped>
div {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
```

## 仅显示代码

如果只想显示代码而不渲染，使用 `pure` 模式：

```vue preview pure
<template>
  <div>
    <p>这段代码不会被渲染，只会显示代码</p>
  </div>
</template>
```

## 配置说明

在 `rspress.config.ts` 中已启用 `@rspress/plugin-preview` 插件：

```typescript
import { pluginPreview } from '@rspress/plugin-preview';

export default defineConfig({
  plugins: [
    pluginPreview({
      // 默认渲染模式：'pure' 仅代码，'preview' 代码+预览
      defaultRenderMode: 'pure',
    }),
  ],
});
```

## 在代码块中的使用方式

1. **预览模式**：\`\`\`vue preview
2. **仅代码**：\`\`\`vue preview pure
3. **普通代码块**：\`\`\`vue
