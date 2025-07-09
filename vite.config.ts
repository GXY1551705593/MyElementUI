import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css:{
    postcss:{
      plugins:[
        autoprefixer({ // 自动添加前缀
          overrideBrowserslist: [
            "> 1%"   // 全球使用率大于1的浏览器
          ],
        }),
        cssnano({
          preset: 'default',
        })
      ]
    }
  }
})
