<template>
  <div class="site-aside-container">
      <template v-if='data'>
           <Avatar :url="data.avatar"
            :size="150"/>
      <h1>{{data.siteTitle}}</h1>
      </template>
        <Menu/>
         <Contact v-if='data'/>
         <p v-if='data' class="footer">
             {{data.icp}}
         </p>
  </div>
</template>

<script>
import Avatar from '../Avatar/index';
import Contact from './Contact/index';
import Menu from './Menu/index';
import {mapState} from 'vuex';
export default {
    components:{
        Avatar,
        Contact,
        Menu
    },
    computed:mapState('Setting',['data']),
}
</script>

<style lang='less' scoped>
    @import '~@/styles/var.less';
    @import '~@/styles/mixin.less';
    .site-aside-container{
        width:100%;
        height:100%;
        box-sizing:border-box;
        overflow-x: hidden;
        overflow-y: auto;
        .avatar-container{ 
           margin:10px auto 0;
        }
        .footer{
            text-align: center;
            font-size:16px;
            color:@gray;
            margin:50px 0 0;
        }
        h1{
            color:#fff;
            font-size:40px;
            text-align: center;
            margin:14px;
        }
    }
</style>