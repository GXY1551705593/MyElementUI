<script setup lang="ts">
import Button from "./components/button/Button.vue";
import { onMounted, ref } from "vue";
import { getCurrentTheme, toggleTheme } from "./hooks/theme";

const currentTheme = ref<'light' | 'dark'>('light');

const handleThemeChange = (event: CustomEvent) => {
  currentTheme.value = event.detail.theme;
};

const handleToggleTheme = () => {
  const newTheme = toggleTheme();
  currentTheme.value = newTheme;
};

onMounted(() => {
  // 初始化主题
  currentTheme.value = getCurrentTheme();

  // 监听主题变化事件
  window.addEventListener('theme-change', handleThemeChange as EventListener);
});
</script>

<template>
  <div class="app-container">
    <div class="theme-switch">
      <div class="theme-info">
        <h2>MyElementUI 主题演示</h2>
        <p>当前主题: <strong>{{ currentTheme === 'dark' ? '晚上模式' : '白天模式' }}</strong></p>
      </div>
      <div class="theme-controls">
        <Button
          @click="handleToggleTheme"
          :type="currentTheme === 'dark' ? 'primary' : undefined"
          class="theme-toggle-btn"
        >
          <span class="theme-icon">{{ currentTheme === 'dark' ? '🌙' : '☀️' }}</span>
          <span class="theme-text">{{ currentTheme === 'dark' ? '切换到白天模式' : '切换到晚上模式' }}</span>
        </Button>
      </div>
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

    <div class="button-demo">
      <h3>主题预览</h3>
      <div class="theme-preview">
        <div class="preview-section">
          <h4>颜色系统预览</h4>
          <div class="color-grid">
            <div class="color-item primary">
              <div class="color-block"></div>
              <span>Primary</span>
            </div>
            <div class="color-item success">
              <div class="color-block"></div>
              <span>Success</span>
            </div>
            <div class="color-item warning">
              <div class="color-block"></div>
              <span>Warning</span>
            </div>
            <div class="color-item danger">
              <div class="color-block"></div>
              <span>Danger</span>
            </div>
            <div class="color-item info">
              <div class="color-block"></div>
              <span>Info</span>
            </div>
          </div>
        </div>

        <div class="preview-section">
          <h4>文本颜色预览</h4>
          <div class="text-preview">
            <p class="text-primary">主要文本颜色 (Primary)</p>
            <p class="text-regular">常规文本颜色 (Regular)</p>
            <p class="text-secondary">次要文本颜色 (Secondary)</p>
            <p class="text-placeholder">占位符文本颜色 (Placeholder)</p>
            <p class="text-disabled">禁用文本颜色 (Disabled)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  padding: 20px;
  min-height: 100vh;
  background-color: var(--ms-bg-color-page);
  transition: background-color var(--ms-transition-duration);
}

.theme-switch {
  margin-bottom: 40px;
  text-align: center;
  padding: 30px;
  background-color: var(--ms-bg-color);
  border-radius: var(--ms-border-radius-base);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: all var(--ms-transition-duration);
}

[data-theme="dark"] .theme-switch {
  box-shadow: 0 2px 12px rgba(255, 255, 255, 0.1);
}

.theme-info h2 {
  margin: 0 0 10px 0;
  color: var(--ms-text-color-primary);
  font-size: var(--ms-font-size-extra-large);
  transition: color var(--ms-transition-duration);
}

.theme-info p {
  margin: 0 0 20px 0;
  color: var(--ms-text-color-regular);
  font-size: var(--ms-font-size-base);
  transition: color var(--ms-transition-duration);
}

.theme-controls {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.theme-toggle-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all var(--ms-transition-duration);
  border-radius: var(--ms-border-radius-round);
  padding: 10px 16px;
  font-size: var(--ms-font-size-base);
  font-weight: var(--ms-font-weight-primary);
}

.theme-icon {
  font-size: 16px;
}

.theme-text {
  font-size: var(--ms-font-size-base);
}

.theme-toggle-btn:hover {
  transform: scale(1.02);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

[data-theme="dark"] .theme-toggle-btn:hover {
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.1);
}

.button-demo {
  margin-bottom: 40px;
  padding: 25px;
  border-radius: var(--ms-border-radius-base);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  transition: all var(--ms-transition-duration);
}

[data-theme="dark"] .button-demo {
  box-shadow: 0 2px 12px rgba(255, 255, 255, 0.1);
}

.button-demo h3 {
  margin-bottom: 20px;
  color: var(--ms-text-color-primary);
  font-size: var(--ms-font-size-large);
  transition: color var(--ms-transition-duration);
}

.button-demo .ms-button {
  margin-right: 12px;
  margin-bottom: 12px;
}

/* 主题预览样式 */
.theme-preview {
  padding: 20px;
}

.preview-section {
  margin-bottom: 30px;
}

.preview-section h4 {
  margin-bottom: 15px;
  color: var(--ms-text-color-primary);
  font-size: var(--ms-font-size-medium);
  transition: color var(--ms-transition-duration);
}

/* 颜色网格 */
.color-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 15px;
}

.color-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.color-block {
  width: 60px;
  height: 60px;
  border-radius: var(--ms-border-radius-base);
  border: 2px solid var(--ms-border-color);
  transition: all var(--ms-transition-duration);
}

.color-item.primary .color-block {
  background-color: var(--ms-color-primary);
}

.color-item.success .color-block {
  background-color: var(--ms-color-success);
}

.color-item.warning .color-block {
  background-color: var(--ms-color-warning);
}

.color-item.danger .color-block {
  background-color: var(--ms-color-danger);
}

.color-item.info .color-block {
  background-color: var(--ms-color-info);
}

.color-item span {
  font-size: var(--ms-font-size-small);
  color: var(--ms-text-color-regular);
  transition: color var(--ms-transition-duration);
}

/* 文本预览 */
.text-preview {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.text-preview p {
  margin: 0;
  padding: 10px;
  border-radius: var(--ms-border-radius-base);
  background-color: var(--ms-bg-color);
  border: 1px solid var(--ms-border-color);
  transition: all var(--ms-transition-duration);
}

.text-primary {
  color: var(--ms-text-color-primary);
}

.text-regular {
  color: var(--ms-text-color-regular);
}

.text-secondary {
  color: var(--ms-text-color-secondary);
}

.text-placeholder {
  color: var(--ms-text-color-placeholder);
}

.text-disabled {
  color: var(--ms-text-color-disabled);
}
</style>
