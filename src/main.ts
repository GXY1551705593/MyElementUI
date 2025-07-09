import { createApp } from 'vue'
import './assets/styles/index.scss'
import App from './App.vue'
import { getCurrentTheme } from './until/theme'

// 初始化主题
const theme = getCurrentTheme();
document.documentElement.setAttribute('data-theme', theme);

createApp(App).mount('#app')
