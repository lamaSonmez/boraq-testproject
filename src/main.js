// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLoaders from 'vue-loaders';

Vue.use(VueLoaders);


Vue.config.productionTip = false
window.apiHost = "https://5d692f278134fd001430c45a.mockapi.io/api";
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})