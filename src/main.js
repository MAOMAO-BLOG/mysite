import Vue from 'vue';
// import Vue from "vue/dist/vue.common.js";
import App from './App.vue';
import './styles/global.less';
import './mock';
import router from './router/index.js';
import getMessage from './utils/getMessage.js';
Vue.prototype.$getMessage=getMessage;
import vLoading from './directives/loading';
import vLazy from './directives/lazy';
import './eventBus';
import store from './store';
Vue.directive("loading",vLoading);
Vue.directive('lazy',vLazy);
store.dispatch('Setting/fetchSetting');
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

