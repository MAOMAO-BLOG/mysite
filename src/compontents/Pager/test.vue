<template>
   <pager :current="current" :total="total" @pageChange='handlePageChange($event)'/>
</template>
<script>
import Pager from './index.vue';
export default {
     name:'App',
  data(){
    return {
      current:30,
      total:302
    }
   
  },
  components:{
    Pager
  },
  methods:{
    handlePageChange(newPage){
      this.current=newPage;
    }
  }
}

</script>

<style scoped>
  .icon-container{
    color:red;
    font-size:26px;
  }
</style>