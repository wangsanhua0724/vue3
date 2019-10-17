<template>
     <div class="home">
         <Slider :banner="banner"></Slider>
         <List :list-data="listData" :data-name="'home'"></List>
     </div>
</template>
<script>
import Slider from '../components/Slider'
import List from '../components/List'
export default {
     data(){
          return{
               listData:[],
               banner:[]
          }
     },
     components:{
          Slider,
          List
     },
     mounted(){
          // this.$axios({
          //      url:'/data/user.json'
          // }).then(
          //      res=>console.log(res.data)
          // )
          this.$axios({
               url:'http://localhost:3000/api/home',
               params:{_page:1,_limit:10}
          }).then(
               res=>this.listData=res.data.data
          ),
           this.$axios({
               url:'http://localhost:3000/api/banner',
               params:{_page:1,_limit:4}
          }).then(
               res=>this.banner=res.data.data
          )
     }
}
</script>