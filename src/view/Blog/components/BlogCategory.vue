<template>
<div class="blog-category-container" v-loading='isLoading'>
  <h1>文章分类</h1>
  <RightList :list='list' @select='handleSelect'/>
</div>
</template>
<script>
import RightList from './RightList';
import {getBlogsType} from '@/api/blog.js';
import fetchData from '@/mixins/fetchData.js';
export default {
  mixins:[fetchData([])],
  components:{
    RightList,
  },
  computed:{
    getCategoryId(){
      return +this.$route.params.categoryid || -1;
    },
    limit(){
      return +this.$route.query.limit ||10;
    },
    list(){
      const total=this.data.reduce((a,b)=>a+b.articleCount,0);
      const result=[{name:'全部',articleCount:total,id:-1},...this.data];
      return result.map(item=>({
        ...item,
        isSelect:item.id===this.getCategoryId,
        aside:`${item.articleCount}篇`
      }))
    }
  },
  methods:{
    async fetchData(){
      return await getBlogsType();
    },
    handleSelect(item){
        const query={
              page:1,
              limit:this.limit,
              }
       if  (item.id===-1){
              this.$router.push({
                  name:'Blog',
                  query,
              })
          }
          else{
              this.$router.push({
                  name:'CategoryBlog',
                   query,
                  params:{
                      categoryid:item.id
                  }
              })
          };
    }
  }
}
</script>

<style  lang='less' scoped>
  .blog-category-container{
    width:300px;
    height:100%;
    padding:20px;
    box-sizing: border-box;
    overflow-y: auto;
    h1{
      margin:0;
      font-weight: bold;
      letter-spacing: 2px;
    }
  }
</style>
