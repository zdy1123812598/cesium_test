// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// from 中 cesium 指向的是vue.config.js中 alias对象中的别名
var Cesium = require('cesium/Cesium')
var widgets = require('cesium/Widgets/widgets.css')
Vue.config.productionTip = false

Vue.prototype.Cesium = Cesium
Vue.prototype.widgets = widgets

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
