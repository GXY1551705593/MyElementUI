import type {App} from 'vue';
import Button from "./components/button/Button.vue";
import './assets/styles/index.scss'
// 导入 FontAwesome 核心库
import { library } from '@fortawesome/fontawesome-svg-core'
// 导入solid图标集
import { fas } from '@fortawesome/free-solid-svg-icons'
// 将图标添加到库中
library.add(fas)

// 组件列表
const components = [Button]

// 插件install 方法
const install = (app:App):void =>{
    components.forEach(component => {
        // 组件需要有name属性
        app.component(component.__name!, component);
    })
}

// 支持按需引入和全量引入
export default {
    install
}

export {
    Button
}
