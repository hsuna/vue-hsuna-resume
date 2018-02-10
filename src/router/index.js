import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      component: resolve => require(['../page/Home.vue'], resolve),
    },
    {
      path: '/about',
      component: resolve => require(['../page/About.vue'], resolve),
    },
    {
      path: '/skill',
      component: resolve => require(['../page/Skill.vue'], resolve),
    },
    {
      path: '/exp',
      component: resolve => require(['../page/Exp.vue'], resolve),
    },
    {
      path: '/demo',
      component: resolve => require(['../page/Demo.vue'], resolve),
    },
    {
      path: '/contact',
      component: resolve => require(['../page/Contact.vue'], resolve),
    }
  ]
})
