import type {App} from 'vue';
import Button from "./components/button/Button.vue";

// 组件列表
const components = [Button]

// 插件install 方法
const install = (app:App):void =>{
    components.forEach(component => {
        // 组件需要有name属性
        if (component.name) {
            app.component(component.name, component);
        } else {
            console.warn('Component is missing name property:', component);
        }
    })
}

// 支持按需引入和全量引入
export {Button}
export default {install}
