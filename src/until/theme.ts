export type ThemeType = 'light' | 'dark';

const THEME_KEY = 'ms-theme';

/**
 * 获取当前主题
 */
export function getCurrentTheme(): ThemeType {
  // 优先从localStorage获取
  const savedTheme = localStorage.getItem(THEME_KEY) as ThemeType;
  if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
    return savedTheme;
  }
  
  // 其次从HTML属性获取
  const htmlTheme = document.documentElement.getAttribute('data-theme') as ThemeType;
  if (htmlTheme && (htmlTheme === 'light' || htmlTheme === 'dark')) {
    return htmlTheme;
  }
  
  // 最后检查系统主题偏好
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  
  // 默认返回亮色主题
  return 'light';
}

/**
 * 设置主题
 */
export function setTheme(theme: ThemeType): void {
  // 保存到localStorage
  localStorage.setItem(THEME_KEY, theme);
  
  // 设置HTML属性
  document.documentElement.setAttribute('data-theme', theme);
  
  // 触发主题变化事件
  window.dispatchEvent(new CustomEvent('theme-change', { detail: { theme } }));
}

/**
 * 切换主题
 */
export function toggleTheme(): ThemeType {
  const currentTheme = getCurrentTheme();
  const newTheme: ThemeType = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
  return newTheme;
}

/**
 * 监听系统主题变化
 */
export function watchSystemTheme(): (() => void) | undefined {
  if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      const newTheme: ThemeType = e.matches ? 'dark' : 'light';
      // 只有在没有手动设置主题时才跟随系统
      if (!localStorage.getItem(THEME_KEY)) {
        setTheme(newTheme);
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    // 返回清理函数
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }
  return undefined;
} 