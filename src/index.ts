import type {App} from 'vue';
import Button from "./components/button/Button.vue";
import './assets/styles/index.scss'

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
