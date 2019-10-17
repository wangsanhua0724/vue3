import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../pages/Home.vue'
 import Follow from '../pages/Follow.vue'
import Column from '../pages/Column.vue'
import Detail from '../pages/Detail.vue'
import Reg from '../pages/Reg.vue'
import login from '../pages/login.vue'
import User from '../pages/User.vue'
import error from '../pages/error.vue'

let routes=[
     {path:'/Home',component:Home},
     {path:'/Follow',component:Follow},
     {path:'/Column',component:Column},
     {path:'/Detail/:id',component:Detail,name:'detail'},
     {path:'/Reg',component:Reg},
     {path:'/login',component:login},
     {path:'/User',component:User},
     {path:'/',redirect:'/home'},
     {path:'*',component:error},
];

export default new VueRouter({routes})






