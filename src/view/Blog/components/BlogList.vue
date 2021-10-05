<template>
  <div class="blog-list-container" ref='mainContainer' v-loading='isLoading'>
      <ul>
          <li v-for='item in data.rows' :key='item.id'>
              <div class="thumb">
                  <router-link v-if='item.thumb' :to='{
                      name:"BlogDetail",
                      params:{
                          id:item.id
                      }
                  }'>
                      <img v-lazy='item.thumb' :alt="item.title" :title="item.title">
                  </router-link>
              </div>
            <div class="main">
                <router-link :to='{
                      name:"BlogDetail",
                      params:{
                          id:item.id
                      }
                  }'>
                    <h2>{{item.title}}</h2>
                </router-link>
                <div class="aside">
                    <span>{{formatDate(item.createDate)}}</span>
                    <span>{{item.scanNumber}}</span>
                    <span>{{item.commentNumber}}</span>
                    <router-link :to='{
                        name:"CategoryBlog",
                        params:{
                            categoryid:item.category.id
                            }
                        }'> {{item.category.name}}</router-link>
                </div>
                <div class="desc">{{item.description}}</div>
            </div>
        </li>
      </ul>
     <Pager @pageChange='handlePageChange' v-if='data.total' :current='routeInfo.page' :total='data.total' :limit='routeInfo.limit' />
    <Empty v-if='data.rows.length===0 && ! isLoading '/>
  </div>
</template>
<script>
import Pager from '@/compontents/Pager/index.vue';
import fetchData from '@/mixins/fetchData.js';
import {getBlogs} from '@/api/blog.js';
import formatDate from '@/utils/formatDate.js';
import mainScroll from '@/mixins/mainScroll.js';
import Empty from '@/compontents/Empty';
export default {
    mixins: [fetchData({total:0,rows:[]}),mainScroll("mainContainer")],
     components: {
        Pager,
        Empty
  },
    computed:{
        //获取当前路由的值
        routeInfo(){
            return {
                page:+this.$route.query.page || 1,
                categoryid:+this.$route.params.categoryid || -1,
                limit:+this.$route.query.limit || 10 
            }
        }
    },
   
  methods:{
      formatDate,
      async fetchData(){
          return  await getBlogs( this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId);
      },
      handlePageChange(newPage){
          const query={
              page:newPage,
              limit:this.routeInfo.limit,
              }
          if(this.routeInfo.categoryid){
              this.$router.push({
                  name:'CategoryBlog',
                   query,
                  params:{
                      categoryid:this.routeInfo.categoryid
                  }
              })
          }else{
              this.$router.push({
                  name:'Blog',
                  query,
              })
          }
      }
  },
  watch:{
      async $route(){
          //当路由信息发生变化的时候
          this.isLoading=true;
          this.$refs.mainContainer.scrollTop=0;
        this.data=await this.fetchData();    
        this.isLoading=false;
      }
  },
}
</script>

<style lang='less' scoped>
@import '~@/styles/var.less';
    .blog-list-container{
        // width:100%;
        height:100%;
        position:relative;
        padding:20px;
        box-sizing: border-box;
        overflow-y: scroll; //超出部分用滚动条显示
        scroll-behavior: smooth; //平滑滚动
        ul{
            margin:0;
            padding:0;
            list-style:none;
        }
    }
    li{
        display: flex;
        padding:15px 0;
        border-bottom:1px solid @gray;
        .thumb{
            flex:0 0 auto;
            margin-right:15px;
            img{
                display: block;
                max-width:200px;
                border-radius:5px;
            }
        }
        .main{
            flex:1 1 auto;
            h2{
                margin:0;
            }
        }
        .aside{
            font-size:12px;
            color:@gray;
            span{
                margin-right:15px;
            }
        }
        .desc{
            margin:15px 0;
            font-size:14px;
        }
    }
</style>