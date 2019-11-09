import Vue from 'vue'
import '@/theme/index.less'
import store from './store'
import router from './router'
import config from '@/config'

/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config

import Main from './main.vue'

new Vue({
    store,
    router,
    el: '#app',
    components: {Main},
    render: h => h(Main)
})
