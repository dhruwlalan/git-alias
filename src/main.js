///ASSETS///
import './assets/assets';
import './components/vanilla/preloader';

///MAIN///
import { createApp } from 'vue';
import App from './App.vue';
import Router from './routes/Router';

const app = createApp(App);
app.use(Router);
app.mount('#app');
