import {createApp} from "vue";
import ElementPlus from "element-plus"
import "element-plus/dist/index.css";
import App from "./App.vue";
//添加路由
import router from "./router";
import {store, key} from './store'
import VueLazyLoad from 'vue3-lazyload'

//添加基本css文件
import "@/assets/css/base.css";
import "@/assets/scss/base.scss";
import "@/assets/font/font";

const app = createApp(App);
app.use(router);
app.use(store, key)
app.use(ElementPlus);
app.use(VueLazyLoad, {
    loading: '../../src/assets/images/logo.png',
})
app.mount("#app");
