// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'

import '@/assets/iconfont/iconfont.css'
import Hello from '@/components/HelloWorld'
import Icon from '@/components/icon/index'
import Navbar from '@/components/headerNavbar/index'
import Accordion from '@/components/accordion/accordionGroup'
import AccordionItem from '@/components/accordion/item'
import Confirm from '@/components/confirm'
import Button from '@/components/button/index'

Vue.use(Confirm);
Vue.component('v-hello', Hello)
Vue.component('v-icon', Icon)
Vue.component('v-navbar', Navbar)
Vue.component('v-accordion', Accordion)
Vue.component('v-accordion-item', AccordionItem)
Vue.component('v-button', Button)





Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})