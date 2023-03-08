import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap/dist/css/bootstrap.min.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap';

createApp(App).use(router).mount('#app');
