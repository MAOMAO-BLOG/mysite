<template>
  <div class="pager-container" v-if='pageNumber>1'>
      <a @click='hangdleClick(1)' :class="{disabled:current===1}">|&lt;&lt;</a>
      <a @click='hangdleClick(current-1)' :class="{disabled:current===1}">&lt;&lt;</a>
      <a @click='hangdleClick(n)' v-for="(n,i) in numbers" :key="i" :class="{active:n===current}">{{n}}</a>
      <a @click='hangdleClick(current+1)' :class="{disabled:current===pageNumber}">&gt;&gt;</a>
      <a @click='hangdleClick(pageNumber)' :class="{disabled:current===pageNumber}">&gt;&gt;|</a>
  </div>
</template>
<style lang='less' scoped>
     @import "~@/styles/var.less"; 
    .pager-container{
        display: flex;
        justify-content: center;
        margin:10px 0;
        a{
            color:@primary;
            margin:0 10px;
            cursor:pointer;
            &.disabled{
                color:@lightWords;
                cursor:not-allowed;
            }
            &.active{
                color:@dark;
                font-weight: bold;
                // cursor: pointer;
            }
        }
    }
</style>
<script>
export default {
    props:{
        current:{
            type:Number,
            default:1
        },
        total:{
            type:Number,
            default:0
        },
        limit:{
            type:Number,
            default:10
        },
         visibleNumber:{
            type:Number,
            default:10
        },
    },
    computed:{
        pageNumber(){
            return Math.ceil(this.total / this.limit);
        },
        numbers(){
            let nums=[];
            for(let i=this.visibleMin;i<=this.visibleMax;i++){
                nums.push(i);
            }
            return nums;
        },
        visibleMin(){
           let min= this.current-Math.floor(this.visibleNumber/2);
           if(min<1){
               min=1;
           }
           return min;
        },
         visibleMax(){
             let max= this.visibleMin+this.visibleNumber-1;
             if(max>this.pageNumber){
                 max=this.pageNumber;
             }
             return max;
        },

    },
    methods:{
        //当子组件被点击的时候，子组件不能擅自改变依赖数据，引发的事件应该由父组件来处理
        hangdleClick(newPage){
        if(newPage<1){
        newPage=1;
        }
        if(newPage>this.pageNumber){
            newPage=this.pageNumber;
        }
        if(newPage===this.current){
            return;
        }
        this.$emit('pageChange',newPage);
        }
    }
}
</script>

