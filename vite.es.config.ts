import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import dts from 'vite-plugin-dts'
export default defineConfig({
    plugins: [
        vue(),
        dts({
            tsconfigPath: './tsconfig.build.json',
            outDir: 'dist/types'
        })
    ],
    build: {
        outDir: 'dist/es',
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'GxyElementUI',
            fileName: 'gxy-element-ui',
            formats: ['es']
        },
        rollupOptions: {
            external: [
                'vue'
            ],
            output: {
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
