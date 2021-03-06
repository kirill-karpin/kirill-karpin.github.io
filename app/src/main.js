import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';
import store from './store';
import messages from './lang';

Vue.use(VueI18n);

Vue.config.productionTip = false;
const i18n = new VueI18n({
  locale: 'ru',
  messages,
});

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');
