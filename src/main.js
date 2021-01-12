///ASSETS///
import './assets/assets';

///MAIN///
import { createApp } from 'vue';

import Store from './store/Store';
import App from './App.vue';
import preloader from './components/vanilla/preloader';

preloader();

const app = createApp(App);

app.use(Store);
app.mount('#app');
