// @ts-ignore
import {createApp} from "vue";
import App from "./App.vue";
// @ts-ignore
import ArcoVue from "@arco-design/web-vue";
// @ts-ignore
import {createPinia} from "pinia";
import "@arco-design/web-vue/dist/arco.css";
import router from "./router";
import "@/access";

const pinia = createPinia();

createApp(App).use(ArcoVue).use(pinia).use(router).mount("#app");
