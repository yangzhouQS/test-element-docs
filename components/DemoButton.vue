<template>
  <div class="demo-button">
    <button @click="handleClick" :class="type">
      {{ text }}
    </button>
    <p v-if="count > 0">点击次数: {{ count }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  text?: string;
  type?: 'primary' | 'success' | 'warning' | 'danger';
}

const props = withDefaults(defineProps<Props>(), {
  text: '点击我',
  type: 'primary'
});

const count = ref(0);

const handleClick = () => {
  count.value++;
};
</script>

<style scoped>
.demo-button {
  padding: 20px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  color: white;
}

button.primary {
  background-color: #409eff;
}

button.success {
  background-color: #67c23a;
}

button.warning {
  background-color: #e6a23c;
}

button.danger {
  background-color: #f56c6c;
}

button:hover {
  opacity: 0.8;
}

p {
  margin-top: 10px;
  color: #606266;
}
</style>
