import Vue                 from 'vue';
import { firestorePlugin } from 'vuefire';
import firebase            from 'firebase/app';
import App                 from './App.vue';
import router              from './router';
import store               from './store';
import config              from '@/firebase/config';
import 'firebase/firestore';

Vue.config.productionTip = false;

Vue.use(firestorePlugin);
firebase.initializeApp(config);

export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
