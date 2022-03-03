import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import VueSweetalert2 from 'vue-sweetalert2';

createApp(App).use(VueSweetalert2).mount('#app')
