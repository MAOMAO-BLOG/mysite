<template>
<div   class="blog-comment-container">
  <MessageArea title='评论列表' :subTitle='`(${data.total})`' :isListLoading='isLoading' :list='data.rows' @submit='handleSubmit'/>
</div>
</template>
<script>
import MessageArea from '@/compontents/MessageArea';
import fetchData from '@/mixins/fetchData';
import {getComments,postComment} from '@/api/blog';
export default {
  mixins:[fetchData({total:0,rows:[]})],
    components:{
        MessageArea
    },
    data(){
      return {
        page:1,
        limit:10
      }
    },
    created(){
     this.$bus.$on('mainScroll',this.handleScroll);
    },
    destroyed() {
    this.$bus.$off("mainScroll", this.handleScroll);
  },
    computed:{
      hasMore(){
      return this.data.rows.length<this.data.total;
      }
    },
    methods:{
      async fetchData(){
        return await getComments(
          this.$route.params.id,
          this.page,
          this.limit
        );
      },
      async fetchMore(){
        if(!this.hasMore){
          return ;
        }
        this.isLoading=true;
        this.page++;
        const resp=await this.fetchData();
        this.data.total=resp.total;
        this.data.rows=this.data.rows.concat(resp.rows);
        this.isLoading=false;
      },
      handleScroll(dom){
        if(this.isLoading || !dom){
          return;
        }
        const range=100;
        const desc=Math.abs(dom.scrollTop+dom.clientHeight-dom.scrollHeight);
        if(desc<=range){
          this.fetchMore();
          console.log('加载完成');
        }
      },
      async handleSubmit(formdata,callback){
         const result=await postComment({
          blogId:this.$route.params.id,
          ...formdata,
        });
  this.data.rows.unshift(result);
  this.data.total++;
      callback('评论成功');
      }

    }
}
</script>

<style lang="less" scoped>
.blog-comment-container{
  margin: 30px 0;
}
</style>