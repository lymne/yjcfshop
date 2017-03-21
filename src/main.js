// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Vuex from 'vuex'
import { routerMode } from './config/env'
Vue.use(Vuex)

import routes from './router/index'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production'
})

FastClick.attach(document.body)

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
