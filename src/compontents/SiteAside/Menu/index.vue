<template>
  <div class="menu-container">
              <router-link  :exact="item.exact" v-for="item in items" :key="item.link" :to="{name:item.link}">
                  <Icon :type="item.icon"/>
                  <span>{{item.title}}</span>
              </router-link>
  </div>
</template>

<script>
import Icon from '@/compontents/Icon/index';
export default {
    components:{
        Icon
    },
    props:{
    },
    data(){
        return {
            items:[
                {
                    link:'Home',
                    title:'首页',
                    icon:'home',
                    exact:true
                },
                {
                    link:'Blog',
                    title:'文章',
                    icon:'blog',
                    exact:false //只要当前路径以link开头就可以添加selected类名
                },
                 {
                    link:'About',
                    title:'关于我',
                    icon:'about',
                    exact:true
                },
                {
                    link:'Project',
                    title:'项目&效果',
                    icon:'code',
                    exact:true
                },
                {
                    link:'Message',
                    title:'留言板',
                    icon:'chat',
                    exact:true
                }
            ]
        }
    },
}
</script>

<style lang='less' scoped>
@import '~@/styles/var.less';
@import '~@/styles/mixin.less';

    .menu-container{
        width:100%;
        height:400px;
        background: @dark;
        position: relative;
        a{
            display: block;
            width:100%;
        text-decoration: none;
        color:@lightWords;
        font-size:28px;
    margin:20px 0;
    padding:10px 100px;
        span{
            margin:20px;
        }
        &.router-link-active{
        background: @gray;
         } 
              
     }   
    }
</style>