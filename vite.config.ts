import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dts from 'vite-plugin-dts'
export default defineConfig({
  plugins: [
      vue(),
      dts({
        tsconfigPath: './tsconfig.build.json'
      })
  ],
  // 不需要手动指定 postcss 配置，Vite 会自动读取 postcss.config.js
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'GxyElementUI',
      fileName: 'gxy-element-ui',
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        },
        assetFileNames: (chunkInfo)=>{
          if(chunkInfo.name === 'gxy-element-ui.css') {
            return 'index.css'
          }
          return chunkInfo.name as string
        }
      }
    }
  }
})
