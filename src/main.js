import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createStore } from 'vuex';
import { navigation } from './store/nav';
import { data } from './store/data';
import Default from '@/layouts/Default.vue';
import Blank from '@/layouts/Blank.vue';
import './css/tailwind.css';
const store = createStore({
  modules: {
    navigation,
    data,
  },
});
const app = createApp(App);
app.component('default-layout', Default);
app.component('blank-layout', Blank);
app.use(store);
app.use(router);
app.mount('#app');
