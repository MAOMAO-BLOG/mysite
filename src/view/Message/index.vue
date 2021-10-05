<template>
  <div class="message-container" ref='messageContainer' v-if='data'>
    <MessageArea title='留言板' :subTitle='`(${data.total})`' :isListLoading='isLoading' :list='data.rows'
    @submit='handleSubmit'/>
  </div >
</template>

<script>
import * as msgApi from '@/api/message';
import MessageArea from '@/compontents/MessageArea';
import fetchData from '@/mixins/fetchData';
import mainScroll from '@/mixins/mainScroll';
export default {
  mixins:[fetchData({total:0,rows:[]}),mainScroll('messageContainer')],
  components:{
    MessageArea
  },
  data(){
    return{
      page:1,
      limit:10
    }
  },
   computed:{
      hasMore(){
      return this.data.rows.length<this.data.total;
      }
    },
  created(){
    this.$bus.$on('mainScroll',this.handleScroll);
  },
  destroyed(){
    this.$bus.$off('mainScroll',this.handleScroll);
  },
  methods:{
    async fetchData(){
      return  await msgApi.getMessages(this.page,this.limit);
    },
     handleScroll(dom){
        if(this.isLoading || !dom){
          return;
        }
        const range=100;
        const desc=Math.abs(dom.scrollTop+dom.clientHeight-dom.scrollHeight);
        if(desc<=range){
          this.fetchMore();
        }
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
       async handleSubmit(data,callback){
        const result=await msgApi.postMessages(data);
        this.data.rows.unshift(result);
        this.data.total++;
      callback('感谢您的留言');
      },

  },
}
</script>
<style lang="less" scoped>
.message-container{
   width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 25px 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
.message-container{
  width:1000px;
  margin:0 auto;
}
</style>