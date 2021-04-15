import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
    history: createWebHashHistory(),
    routes: [{
            path: '/',
            redirect: '/index',
        },
        {
            name: 'index',
            path: '/index',
            component: () => import('../page/Home.vue'),
        },
        {
            name: 'about',
            path: '/about',
            component: () => import('../page/About.vue'),
        },
        {
            name: 'skill',
            path: '/skill',
            component: () => import('../page/Skill.vue'),
        },
        {
            name: 'exp',
            path: '/exp',
            component: () => import('../page/Exp.vue'),
        },
        {
            name: 'demo',
            path: '/demo',
            component: () => import('../page/Demo.vue'),
        },
        {
            name: 'contact',
            path: '/contact',
            component: () => import('../page/Contact.vue'),
        }
    ]
})