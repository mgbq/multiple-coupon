import Vue from 'vue'
import App from './App'
import store from '@/common/store'
import * as $apis from './apis/index.js'
import router from './common/router.js'
import $mUtils from './common/utils.js'
import * as filter from '@/common/filter.js'; // global filter
Object.keys(filter).forEach(item => {
	Vue.filter(item, filter[item]);
});
// 引入全局uView
import uView from 'uview-ui';
Vue.use(uView);
Vue.config.productionTip = false;
Vue.prototype.$apis = $apis;
Vue.prototype.$store = store;
Vue.prototype.$mUtils = $mUtils;
Vue.prototype.$bus = new Vue() // event Bus 用于无关系组件间的通信。

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
