
import 'primeflex/primeflex.css';
import { createApp } from 'vue'
import App from './App.vue'
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primevue/resources/primevue.min.css'
import router from '@/router/router.js'
import PrimeVue from 'primevue/config'
import Toolbar from 'primevue/toolbar';
import Button from 'primevue/button';
import Card from 'primevue/card';

import { i18n } from '@/locale/i18n.js'


const app = createApp(App);

app.use(router);
app.use(PrimeVue);
app.use(i18n);
app.component('pv-toolbar', Toolbar);
app.component('pv-button', Button);
app.component('pv-card', Card);
app.mount('#app');
