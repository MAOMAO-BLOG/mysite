<template>
      <ul class='RightList-container'>
          <li v-for='(item,i) in list' :key='i'>
              <span @click='handleClick(item)' :class='{active:item.isSelect}'>{{item.name}}</span>
              <span @click='handleClick(item)' v-if='item.aside' class='aside' :class='{active:item.isSelect}'>{{item.aside}}</span>
              <RightList :list='item.children' @select="handleClick"/>
          </li>
      </ul>
</template>
<script>
export default {
    name:'RightList',
    props:{
        list:{
            type:Array,
            default:()=>[],
        }
   },
   methods:{
       handleClick(item){
          if(!item.isSelect){
              this.$emit('select',item);
          }
       }
   }
}
</script>
   
<style lang='less' scoped>
@import '~@/styles/var.less';
     .RightList-container{
        list-style: none;
        margin:0;
        padding:0;
        overflow-y: auto;
         .RightList-container{
            margin-left:1em;
            padding:0;
        }
        li{
            min-height:40px;
            line-height: 40px;
            font-size:16px;
            cursor:pointer;
            margin:30px 0;
           .aside{
                 font-size:20px;
                color:@gray;
                margin-left:15px;
             }
            .active{
                color:@warn;
             }
            }
            
        }
</style>