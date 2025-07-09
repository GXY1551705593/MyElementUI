# MyElementUI 主题切换功能完整指南

## 📖 概述

MyElementUI 提供了完整的主题切换功能，支持白天（亮色）和晚上（暗色）两种主题模式。该功能参考了 Element UI 的设计规范，提供了完整的色彩系统和流畅的切换体验。

## ✨ 核心特性

- 🌓 **双主题支持**: 白天模式（亮色）和晚上模式（暗色）
- 💾 **智能存储**: 主题选择自动保存在 localStorage 中
- 🖥️ **系统跟随**: 自动检测并跟随系统主题偏好
- ⚡ **平滑过渡**: 所有元素都有流畅的过渡动画
- 🎨 **完整色彩**: 包含主色、功能色、中性色等完整色彩体系
- 🔧 **易于扩展**: 支持添加更多自定义主题

## 🚀 快速开始

### 1. 基本使用

```typescript
// 导入主题工具函数
import { getCurrentTheme, setTheme, toggleTheme } from './utils/theme';

// 获取当前主题
const currentTheme = getCurrentTheme(); // 返回 'light' 或 'dark'

// 设置特定主题
setTheme('dark');   // 设置为暗色主题
setTheme('light');  // 设置为亮色主题

// 切换主题（推荐使用）
const newTheme = toggleTheme(); // 自动切换并返回新主题
```

### 2. 在 Vue 组件中使用

```vue
<template>
  <div class="app">
    <!-- 主题切换按钮 -->
    <button @click="handleThemeToggle" class="theme-btn">
      {{ currentTheme === 'dark' ? '🌙' : '☀️' }}
      {{ currentTheme === 'dark' ? '切换到白天' : '切换到晚上' }}
    </button>
    
    <!-- 使用主题变量的内容 -->
    <div class="content">
      <h1>标题</h1>
      <p>这是使用主题变量的文本内容</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getCurrentTheme, toggleTheme } from './utils/theme';

const currentTheme = ref<'light' | 'dark'>('light');

const handleThemeToggle = () => {
  currentTheme.value = toggleTheme();
};

onMounted(() => {
  // 初始化主题
  currentTheme.value = getCurrentTheme();
  
  // 监听主题变化事件
  window.addEventListener('theme-change', (event: CustomEvent) => {
    currentTheme.value = event.detail.theme;
  });
});
</script>

<style scoped>
.app {
  background-color: var(--ms-bg-color-page);
  color: var(--ms-text-color-primary);
  transition: all var(--ms-transition-duration);
}

.theme-btn {
  background-color: var(--ms-bg-color);
  color: var(--ms-text-color-primary);
  border: 1px solid var(--ms-border-color);
  padding: 8px 16px;
  border-radius: var(--ms-border-radius-base);
  transition: all var(--ms-transition-duration);
}

.content {
  background-color: var(--ms-bg-color);
  padding: 20px;
  border-radius: var(--ms-border-radius-base);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] .content {
  box-shadow: 0 2px 12px rgba(255, 255, 255, 0.1);
}
</style>
```

## 🎨 CSS 变量详解

### 主色系统 (Primary Colors)

```css
/* 主色 - 蓝色系 */
--ms-color-primary: #409eff;              /* 主色 */
--ms-color-primary-light-3: #79bbff;      /* 浅色3级 */
--ms-color-primary-light-5: #a0cfff;      /* 浅色5级 */
--ms-color-primary-light-7: #c6e2ff;      /* 浅色7级 */
--ms-color-primary-light-8: #d9ecff;      /* 浅色8级 */
--ms-color-primary-light-9: #ecf5ff;      /* 浅色9级 */
--ms-color-primary-dark-2: #337ecc;       /* 深色2级 */
```

### 功能色系统 (Functional Colors)

```css
/* 成功色 - 绿色系 */
--ms-color-success: #67c23a;
--ms-color-success-light-3: #95d475;
--ms-color-success-light-5: #b3e19d;
--ms-color-success-light-7: #d1edc4;
--ms-color-success-light-8: #e1f3d8;
--ms-color-success-light-9: #f0f9eb;
--ms-color-success-dark-2: #529b2e;

/* 警告色 - 橙色系 */
--ms-color-warning: #e6a23c;
--ms-color-warning-light-3: #eebe77;
--ms-color-warning-light-5: #f3d19e;
--ms-color-warning-light-7: #f8e3c5;
--ms-color-warning-light-8: #faecd8;
--ms-color-warning-light-9: #fdf6ec;
--ms-color-warning-dark-2: #b88230;

/* 危险色 - 红色系 */
--ms-color-danger: #f56c6c;
--ms-color-danger-light-3: #f89898;
--ms-color-danger-light-5: #fab6b6;
--ms-color-danger-light-7: #fcd3d3;
--ms-color-danger-light-8: #fde2e2;
--ms-color-danger-light-9: #fef0f0;
--ms-color-danger-dark-2: #c45656;

/* 信息色 - 灰色系 */
--ms-color-info: #909399;
--ms-color-info-light-3: #b1b3b8;
--ms-color-info-light-5: #c8c9cc;
--ms-color-info-light-7: #dedfe0;
--ms-color-info-light-8: #e9e9eb;
--ms-color-info-light-9: #f4f4f5;
--ms-color-info-dark-2: #73767a;
```

### 中性色系统 (Neutral Colors)

#### 背景色 (Background Colors)

```css
/* 亮色主题 */
--ms-bg-color: #ffffff;           /* 主背景色 */
--ms-bg-color-page: #f2f3f5;      /* 页面背景色 */
--ms-bg-color-overlay: #ffffff;   /* 遮罩背景色 */

/* 暗色主题 */
--ms-bg-color: #141414;           /* 主背景色 */
--ms-bg-color-page: #0a0a0a;      /* 页面背景色 */
--ms-bg-color-overlay: #1d1e1f;   /* 遮罩背景色 */
```

#### 文本色 (Text Colors)

```css
/* 亮色主题 */
--ms-text-color-primary: #303133;   /* 主要文本色 */
--ms-text-color-regular: #606266;   /* 常规文本色 */
--ms-text-color-secondary: #909399; /* 次要文本色 */
--ms-text-color-placeholder: #a8abb2; /* 占位符文本色 */
--ms-text-color-disabled: #c0c4cc;  /* 禁用文本色 */

/* 暗色主题 */
--ms-text-color-primary: #e5eaf3;   /* 主要文本色 */
--ms-text-color-regular: #cfd3dc;   /* 常规文本色 */
--ms-text-color-secondary: #a3a6ad; /* 次要文本色 */
--ms-text-color-placeholder: #8d9095; /* 占位符文本色 */
--ms-text-color-disabled: #6c6e72;  /* 禁用文本色 */
```

#### 边框色 (Border Colors)

```css
/* 亮色主题 */
--ms-border-color: #dcdfe6;           /* 主边框色 */
--ms-border-color-light: #e4e7ed;     /* 浅边框色 */
--ms-border-color-lighter: #ebeef5;   /* 更浅边框色 */
--ms-border-color-extra-light: #f2f6fc; /* 最浅边框色 */
--ms-border-color-dark: #d4d7de;      /* 深边框色 */
--ms-border-color-darker: #cdd0d6;    /* 更深边框色 */

/* 暗色主题 */
--ms-border-color: #4c4d4f;           /* 主边框色 */
--ms-border-color-light: #414243;     /* 浅边框色 */
--ms-border-color-lighter: #363637;   /* 更浅边框色 */
--ms-border-color-extra-light: #2b2b2c; /* 最浅边框色 */
--ms-border-color-dark: #58585b;      /* 深边框色 */
--ms-border-color-darker: #636466;    /* 更深边框色 */
```

#### 填充色 (Fill Colors)

```css
/* 亮色主题 */
--ms-fill-color: #f0f2f5;           /* 主填充色 */
--ms-fill-color-light: #f5f7fa;     /* 浅填充色 */
--ms-fill-color-lighter: #fafafa;   /* 更浅填充色 */
--ms-fill-color-extra-light: #fafcff; /* 最浅填充色 */
--ms-fill-color-dark: #ebedf0;      /* 深填充色 */
--ms-fill-color-darker: #e6e8eb;    /* 更深填充色 */
--ms-fill-color-blank: #ffffff;     /* 空白填充色 */

/* 暗色主题 */
--ms-fill-color: #303030;           /* 主填充色 */
--ms-fill-color-light: #262727;     /* 浅填充色 */
--ms-fill-color-lighter: #1d1d1d;   /* 更浅填充色 */
--ms-fill-color-extra-light: #191919; /* 最浅填充色 */
--ms-fill-color-dark: #39393a;      /* 深填充色 */
--ms-fill-color-darker: #424243;    /* 更深填充色 */
--ms-fill-color-blank: #141414;     /* 空白填充色 */
```

## 🔧 高级用法

### 1. 监听主题变化

```typescript
// 监听主题变化事件
window.addEventListener('theme-change', (event: CustomEvent) => {
  const { theme } = event.detail;
  console.log('主题已切换为:', theme);
  
  // 可以在这里执行主题相关的逻辑
  if (theme === 'dark') {
    // 暗色主题特定逻辑
    document.body.classList.add('dark-mode');
  } else {
    // 亮色主题特定逻辑
    document.body.classList.remove('dark-mode');
  }
});
```

### 2. 系统主题跟随

```typescript
import { watchSystemTheme } from './utils/theme';

// 监听系统主题变化（仅在未手动设置主题时生效）
const cleanup = watchSystemTheme();

// 在组件卸载时清理监听器
onUnmounted(() => {
  if (cleanup) {
    cleanup();
  }
});
```

### 3. 条件样式

```vue
<template>
  <div :class="['component', `theme-${currentTheme}`]">
    <div class="content">
      <!-- 内容 -->
    </div>
  </div>
</template>

<style scoped>
.component {
  /* 通用样式 */
  transition: all var(--ms-transition-duration);
}

/* 亮色主题特定样式 */
.theme-light .content {
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

/* 暗色主题特定样式 */
.theme-dark .content {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
}
</style>
```

## 📱 响应式主题组件

### 主题切换按钮组件

```vue
<template>
  <button 
    @click="handleToggle" 
    :class="['theme-toggle', `theme-${currentTheme}`]"
    :title="toggleText"
  >
    <span class="icon">{{ icon }}</span>
    <span class="text">{{ toggleText }}</span>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from './composables/useTheme';

const { currentTheme, toggleTheme } = useTheme();

const icon = computed(() => 
  currentTheme.value === 'dark' ? '🌙' : '☀️'
);

const toggleText = computed(() => 
  currentTheme.value === 'dark' ? '切换到白天模式' : '切换到晚上模式'
);

const handleToggle = () => {
  toggleTheme();
};
</script>

<style scoped>
.theme-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: var(--ms-bg-color);
  color: var(--ms-text-color-primary);
  border: 1px solid var(--ms-border-color);
  border-radius: var(--ms-border-radius-round);
  cursor: pointer;
  transition: all var(--ms-transition-duration);
}

.theme-toggle:hover {
  background-color: var(--ms-fill-color);
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] .theme-toggle:hover {
  box-shadow: 0 2px 8px rgba(255, 255, 255, 0.1);
}

.icon {
  font-size: 16px;
}

.text {
  font-size: var(--ms-font-size-base);
  font-weight: var(--ms-font-weight-primary);
}
</style>
```

### 主题组合式函数

```typescript
// composables/useTheme.ts
import { ref, onMounted } from 'vue';
import { getCurrentTheme, setTheme, toggleTheme as toggleThemeUtil } from '../utils/theme';

export function useTheme() {
  const currentTheme = ref<'light' | 'dark'>('light');

  const setCurrentTheme = (theme: 'light' | 'dark') => {
    setTheme(theme);
    currentTheme.value = theme;
  };

  const toggleTheme = () => {
    const newTheme = toggleThemeUtil();
    currentTheme.value = newTheme;
    return newTheme;
  };

  onMounted(() => {
    currentTheme.value = getCurrentTheme();
    
    window.addEventListener('theme-change', (event: CustomEvent) => {
      currentTheme.value = event.detail.theme;
    });
  });

  return {
    currentTheme,
    setTheme: setCurrentTheme,
    toggleTheme,
  };
}
```

## 🎯 最佳实践

### 1. 始终使用 CSS 变量

✅ **推荐做法**
```css
.my-component {
  background-color: var(--ms-bg-color);
  color: var(--ms-text-color-primary);
  border: 1px solid var(--ms-border-color);
}
```

❌ **避免做法**
```css
.my-component {
  background-color: #ffffff; /* 硬编码颜色 */
  color: #303133;
  border: 1px solid #dcdfe6;
}
```

### 2. 添加过渡动画

```css
/* 为所有主题相关属性添加过渡 */
.theme-aware-element {
  transition: 
    background-color var(--ms-transition-duration),
    color var(--ms-transition-duration),
    border-color var(--ms-transition-duration),
    box-shadow var(--ms-transition-duration);
}
```

### 3. 使用语义化的类名

```css
/* 使用语义化的类名 */
.text-primary { color: var(--ms-text-color-primary); }
.text-regular { color: var(--ms-text-color-regular); }
.text-secondary { color: var(--ms-text-color-secondary); }

.bg-primary { background-color: var(--ms-bg-color); }
.bg-page { background-color: var(--ms-bg-color-page); }

.border-light { border-color: var(--ms-border-color-light); }
.border-lighter { border-color: var(--ms-border-color-lighter); }
```

### 4. 考虑无障碍访问

```css
/* 确保足够的对比度 */
[data-theme="light"] .important-text {
  color: var(--ms-text-color-primary); /* #303133 - 高对比度 */
}

[data-theme="dark"] .important-text {
  color: var(--ms-text-color-primary); /* #e5eaf3 - 高对比度 */
}
```

## 🔍 调试技巧

### 1. 检查主题状态

```javascript
// 在浏览器控制台中检查当前主题
console.log('当前主题:', document.documentElement.getAttribute('data-theme'));
console.log('存储的主题:', localStorage.getItem('ms-theme'));
```

### 2. 强制切换主题

```javascript
// 强制设置主题（用于调试）
document.documentElement.setAttribute('data-theme', 'dark');
// 或
document.documentElement.setAttribute('data-theme', 'light');
```

### 3. 检查 CSS 变量

```javascript
// 检查特定 CSS 变量的值
const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--ms-color-primary');
console.log('主色值:', primaryColor);
```

## 📁 文件结构

```
src/
├── assets/
│   └── styles/
│       ├── theme/
│       │   ├── light.scss    # 亮色主题变量定义
│       │   └── dark.scss     # 暗色主题变量定义
│       ├── variables.scss    # 基础变量定义
│       ├── mixins.scss       # 样式混入
│       ├── reset.scss        # 样式重置
│       └── index.scss        # 样式入口文件
├── utils/
│   └── theme.ts              # 主题管理工具函数
├── composables/
│   └── useTheme.ts           # 主题组合式函数
└── components/
    └── ThemeToggle.vue       # 主题切换组件
```

## ⚠️ 注意事项

1. **性能考虑**: 主题切换会触发大量 DOM 重绘，建议在合适的时机进行切换
2. **无障碍访问**: 确保在两种主题下都满足 WCAG 对比度要求
3. **测试覆盖**: 在两种主题下都要测试组件的视觉效果和交互
4. **图标适配**: 某些图标可能需要针对不同主题进行适配
5. **第三方组件**: 确保第三方组件也支持主题切换

## 🔮 扩展主题

如需添加更多主题，可以按以下步骤操作：

1. **创建新主题文件**
```scss
// src/assets/styles/theme/custom.scss
[data-theme="custom"] {
  --ms-color-primary: #your-color;
  --ms-bg-color: #your-bg-color;
  // ... 其他变量
}
```

2. **扩展类型定义**
```typescript
// src/utils/theme.ts
export type ThemeType = 'light' | 'dark' | 'custom';
```

3. **更新主题切换逻辑**
```typescript
export function toggleTheme(): ThemeType {
  const themes: ThemeType[] = ['light', 'dark', 'custom'];
  const currentIndex = themes.indexOf(getCurrentTheme());
  const nextIndex = (currentIndex + 1) % themes.length;
  const newTheme = themes[nextIndex];
  setTheme(newTheme);
  return newTheme;
}
```

4. **导入新主题**
```scss
// src/assets/styles/index.scss
@use './theme/custom.scss';
```

---

通过以上指南，您可以充分利用 MyElementUI 的主题切换功能，创建出美观且用户友好的界面。如有任何问题，请参考代码示例或查看相关文档。 
