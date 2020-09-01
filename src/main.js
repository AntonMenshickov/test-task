import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/homePage/Home.vue'
import JobPage from './pages/jobPage/JobPage.vue'


Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/:id',
    component: JobPage
  },
]


const router = new VueRouter({
  routes,
  mode: "history"
})

new Vue({
  router
}).$mount('#root')
