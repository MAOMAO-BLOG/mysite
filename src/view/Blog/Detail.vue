<template>
 <Layout>
   <template #main>
     <div ref='mainContainer' class="detail-container" v-loading='isLoading'>
          <BlogDetail :blog='data' v-if='data'/>
          <BlogComment v-if='!isLoading'/>
    </div>
    </template>
    <template #right>
      <div class="right-container" v-loading='isLoading'>
          <BlogToc :toc='data.toc' v-if='data'/>
      </div>
    </template>
  </Layout>
</template>

<script>
import fetchData from '@/mixins/fetchData';
import Layout  from '@/compontents/Layout/index.vue';
import BlogDetail from './components/BlogDetail';
import BlogToc from './components/BlogToc';
import {getBlog} from '@/api/blog';
import BlogComment from './components/BlogComment';
import mainScroll from '@/mixins/mainScroll.js';
import titleControl from '@/utils/titleControl';
export default {
     mixins: [fetchData(),mainScroll("mainContainer")],
    components:{
        Layout,
        BlogDetail,
        BlogToc,
        BlogComment  
    },
    methods:{
      async fetchData(){
        let resp=await getBlog(this.$route.params.id);
        // resp=null;
        // if(!resp){
        //   this.$router.push('/404');
        //   return ;
        // }
        if(resp.title){
          titleControl.setRouteTitle(resp.title);
        }
        return  resp;
      },
    },
    updated(){
      const hash=location.hash;
      location.hash='';
      setTimeout(()=>{
      location.hash=hash;
      },50)
    }
}
</script>

<style lang="less" scoped>
.detail-container{
  height:100%;
  overflow-x:hidden;
  overflow-y: scroll;
  padding:20px;
  box-sizing: border-box;
  scroll-behavior: smooth;
  position: relative;
}
.right-container{
  width:300px;
  height:100%;
  overflow-y: scroll;
  position: relative;
  padding: 20%;
  box-sizing: border-box;
}
</style>