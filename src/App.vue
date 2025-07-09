<script setup lang="ts">
import Button from "./components/button/Button.vue";
import {onMounted, ref} from "vue";

const btn = ref();
const currentTheme = ref<'light' | 'dark'>('light');

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', currentTheme.value);
};

onMounted(()=>{
  console.log('btn === ', btn.value.buttonRef)
})
</script>

<template>
  <div class="app-container">
    <div class="theme-switch">
      <Button @click="toggleTheme" type="primary">
        切换主题 (当前: {{ currentTheme }})
      </Button>
    </div>
    
    <div class="button-demo">
      <h3>按钮类型演示</h3>
      <Button type="primary">Primary</Button>
      <Button type="success">Success</Button>
      <Button type="warning">Warning</Button>
      <Button type="danger">Danger</Button>
      <Button type="info">Info</Button>
    </div>
    
    <div class="button-demo">
      <h3>朴素按钮</h3>
      <Button type="primary" plain>Primary</Button>
      <Button type="success" plain>Success</Button>
      <Button type="warning" plain>Warning</Button>
      <Button type="danger" plain>Danger</Button>
      <Button type="info" plain>Info</Button>
    </div>
    
    <div class="button-demo">
      <h3>尺寸演示</h3>
      <Button type="primary" size="large">Large</Button>
      <Button type="primary">Default</Button>
      <Button type="primary" size="small">Small</Button>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  padding: 20px;
  min-height: 100vh;
  background-color: var(--ms-bg-color-page);
}

.theme-switch {
  margin-bottom: 30px;
  text-align: center;
}

.button-demo {
  margin-bottom: 30px;
}

.button-demo h3 {
  margin-bottom: 15px;
  color: var(--ms-text-color-primary);
}

.button-demo .ms-button {
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>
