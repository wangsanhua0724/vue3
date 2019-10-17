<template>
     <div class="follow">
         <List :list-data="listData" data-name="follow"></List>
     </div>
</template>
<script>
import List from '../components/List'
export default {
     data(){
          return{
               listData:[]
          }
     },
     components:{List},
     mounted(){
         this.$axios({
      url:'http://localhost:3000/api/follow',
      params:{_page:1,_limit:10}
    }).then(
      res=>this.listData=res.data.data
    )
     }
}
</script>

<style scoped>
.follow{clear: both;margin-bottom:1rem;margin-top:.7rem;}
</style>
