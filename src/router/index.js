import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            redirect: '/index',
        },
        {
            name: 'index',
            path: '/index',
            component: resolve => require(['../page/Home.vue'], resolve),
        },
        {
            name: 'about',
            path: '/about',
            component: resolve => require(['../page/About.vue'], resolve),
        },
        {
            name: 'skill',
            path: '/skill',
            component: resolve => require(['../page/Skill.vue'], resolve),
        },
        {
            name: 'exp',
            path: '/exp',
            component: resolve => require(['../page/Exp.vue'], resolve),
        },
        {
            name: 'demo',
            path: '/demo',
            component: resolve => require(['../page/Demo.vue'], resolve),
        },
        {
            name: 'contact',
            path: '/contact',
            component: resolve => require(['../page/Contact.vue'], resolve),
        }
    ]
})