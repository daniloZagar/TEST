import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createStore } from 'vuex';
import { navLinks } from './store/nav';
import Default from '@/layouts/Default.vue';
import Blank from '@/layouts/Blank.vue';
import './css/tailwind.css';
const store = createStore({
  modules: {
    navLinks,
  },
});
const app = createApp(App);
app.component('default-layout', Default);
app.component('blank-layout', Blank);
app.use(store);
app.use(router);
app.mount('#app');
