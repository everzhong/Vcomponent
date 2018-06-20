import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/examples/index'
import Navbar from '@/examples/navbar'
import Accordion from '@/examples/accordion'
import Confirm from '@/examples/confirm'
import Button from '@/examples/button'



Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'index',
        component: Index
    }, {
        path: '/accordion',
        name: 'Accordion',
        component: Accordion
    }, {
        path: '/navbar',
        name: 'Navbar',
        component: Navbar
    },
    {
        path: '/confirm',
        name: 'Confirm',
        component: Confirm
    },{
        path:'/button',
        name:'Button',
        component:Button
    }]
})