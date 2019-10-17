<template>
     <div class="banner">
    <!--<ul class="clearfix">

      <router-link tag="li" to="/detail/1">
       <img src="/images/img_8.jpg" alt=""/>
      
       
        <div class="text-box">
          <h2>渐进式JavaScript 框架</h2>
          <p>高清美图/1 </p>
        </div>
      </router-link>

      <router-link tag="li" to="/detail/2">
       <img src="/images/img_11.jpg" alt=""/>
      
       
        <div class="text-box">
          <h2>渐进式JavaScript 框架</h2>
          <p>高清美图/2 </p>
        </div>
      </router-link>
      <router-link tag="li" to="/detail/3">
      <img src="/images/img_9.jpg" alt=""/>
        
        <div class="text-box">
          <h2>渐进式JavaScript 框架</h2>
          <p>高清美图/3</p>
        </div>
      </router-link>
      <router-link tag="li" to="/detail/4">
      <img src="/images/img_10.jpg" alt=""/>
        
        <div class="text-box">
          <h2>渐进式JavaScript 框架</h2>
          <p>高清美图/4</p>
        </div>
      </router-link>
      
    </ul>-->
    <swipe class="my-swipe">
        
       <swipe-item class="slide1"></swipe-item>
        <swipe-item class="slide2"></swipe-item>
        <swipe-item class="slide3"></swipe-item>
        <swipe-item class="slide4"></swipe-item>
</swipe>
  </div>
</template>

<script>

// import $ from 'jquery';
// import Swipe from '../assets/js/swipe.js';
import { Swipe, SwipeItem } from 'vue-swipe';
import 'vue-swipe/dist/vue-swipe.css'
export default {
  props:['banner'],
  components: {
    'swipe':Swipe,
    'swipe-item': SwipeItem
  },
  mounted(){
    // new Swipe($('.banner')[0],{
    //   auto:4000,
    //   continuous:true,
    //   stopPropation:true,
    //   callback:function (index,element){
    //     $('.banner ol li').removeClass('active');
    //     $('.banner ol li').eq(index).addClass('active');
    //   }
    // })

  },
  
}
</script>

<style scoped>
/*.banner{margin-top:0.6rem;position: relative;overflow: hidden; z-index: 1}
.banner ul li{width:6.4rem;float:left;position: relative;}
.banner ul li img{width:100%; display:block;}
.banner ul li .text-box{width:5.8rem; padding:0 0.3rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}
.text-box h2{ font-size:0.3rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
.text-box p{ line-height:100%;}
.banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
.banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
.banner ol li.active{ background:#fff;}*/
.my-swipe {
  height: 300px;
  width:500px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  margin:0 auto;
}
 
.slide1 {
  background: url(/images/img_8.jpg) no-repeat;
  
}
 
.slide2 {
  background: url(/images/img_9.jpg) no-repeat;
  
}
 
.slide3 {
  background: url(/images/img_10.jpg) no-repeat;
 
}
.slide4 {
  background: url(/images/img_11.jpg) no-repeat;
  
}
</style>