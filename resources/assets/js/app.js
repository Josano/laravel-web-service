require('./bootstrap');

window.Vue = require('vue');

import router from './routes/routers'
import store from './vuex/store'

/**
 *  Components globals
 */
Vue.component('admin-component', require('./components/admin/AdminComponent'))

const app = new Vue({
    router,
    store,
    el: '#app'
});
