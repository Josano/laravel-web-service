require('./bootstrap');

window.Vue = require('vue');

import router from './routes/routers'
import store from './vuex/store'

/**
 *  Components globals
 */

Vue.component('test-component', require('./components/TestComponent.vue'))
const app = new Vue({
    router,
    store,
    el: '#app'
});
