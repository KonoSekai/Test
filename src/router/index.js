import Vue from 'vue'
import store from '@/store'
import Router from 'vue-router'
import routers from './routers'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: routers
})

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth && !store.getters['user/getLogged']) {
        store.commit('app/setVisible', true, to.fullPath)
        if (null == from.meta.title) {
            next('/')
        } else {
            next(false)
        }
    } else {
        document.title = null != to.meta.title ? `${to.meta.title} - 色开の周边收藏` : '色开の周边收藏'
        next()
    }
})

router.afterEach(() => {

})

export default router