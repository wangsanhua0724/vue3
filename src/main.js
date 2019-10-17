import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//引用字体比例
import './assets/js/font'
//引用公共样式
import './assets/css/base.css'
//引入路由
import router from './plugins/router.js'
//引入axios
import './plugins/axios.js'
// 配置服务器地址
Vue.prototype.server=require('./config/server.js')
new Vue({
  render: h => h(App),
   //路由挂载到Vue上
   router,
   
}).$mount('#app')
