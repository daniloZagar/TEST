import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createStore } from 'vuex';
import { navLinks } from './store/nav';
import './css/tailwind.css';
const store = createStore({
  modules: {
    navLinks,
  },
});
createApp(App).use(store).use(router).mount('#app');
