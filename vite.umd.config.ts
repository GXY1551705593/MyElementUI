import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
export default defineConfig({
    plugins: [vue()],
    // 不需要手动指定 postcss 配置，Vite 会自动读取 postcss.config.js
    build: {
        outDir: 'dist/umd',
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'GxyElementUI',
            fileName: 'gxy-element-ui',
            formats: ['umd']
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                exports: 'named',
                globals: {vue: 'Vue'},
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
