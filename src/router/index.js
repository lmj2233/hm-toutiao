// 导入Vue
import Vue from 'vue'
// 导入 vue-router
import VueRouter from 'vue-router'
// 导入 Login 组件
import Login from '../views/Login/login.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { name: 'login', path: '/login', componrnt: Login }
  ]
})
// 导出router
export default router
