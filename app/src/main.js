// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueCordova from 'vue-cordova'
import cordovaTest from 'components/cordovaTest/cordovaTest.vue'
import goods from 'components/goods/goods.vue'
import ratings from 'components/ratings/ratings.vue'
import 'common/stylus/index.styl'
import InfiniteScroll from 'vue-infinite-scroll'
import AppConfig from 'config/appconfig'

Vue.use(InfiniteScroll)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueCordova)
Vue.use(AppConfig)

if (window.location.protocol === 'file:') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

const routes = [
  { path: '/contentone', component: goods },
  { path: '/contenttwo', component: ratings },
  { path: '/contentthree', component: cordovaTest }
]

const router = new VueRouter({
  routes
})

router.push('/contentone')

/* eslint-disable no-new */
new Vue({
  router,
  el: '#sellapp',
  template: '<App/>',
  components: { App }
})

