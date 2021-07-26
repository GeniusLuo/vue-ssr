// router.js
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/hello',
            component: () => import(/* webpackChunkName: 'hello' */'./components/Hello.vue')
        }
    ]
})