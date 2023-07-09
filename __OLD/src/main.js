///ASSETS///
import './assets/assets';
import './components/vanilla/preloader';

///MAIN///
import { createApp } from 'vue';

import App from './App.vue';
import Router from './routes/Router';
import directives from './directives';

const app = createApp(App);
directives(app);
app.use(Router);
app.mount('#app');
