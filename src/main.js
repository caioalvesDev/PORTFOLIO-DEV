import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

import '../node_modules/bulma/css/bulma.css'
import './assets/main.css'


const app = createApp(App)

app.use(router)
app.use(LoadingPlugin);

app.mount('#app')
