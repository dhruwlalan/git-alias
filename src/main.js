///ASSETS///
import './assets/assets';

///MAIN///
import { createApp } from 'vue';
import App from './App.vue';
import Router from './routes/Router';
import preloader from './components/vanilla/preloader';

preloader();

const app = createApp(App);
app.use(Router);
app.mount('#app');
