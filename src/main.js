import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import '@/assets/style/main.css';
import '@vueform/slider/themes/default.css';

createApp(App).use(store).mount('#app');
