import Vue from 'vue'
import axios from 'axios'
axios.defaults.withCredentials=true;//全局夸源凭证
Vue.prototype.$axios=axios;
window.axios=axios;