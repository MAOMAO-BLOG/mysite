<template>
<div v-loading='loading' class="home-container" ref="container" @wheel='handleWheel'>
   <ul class="carousel-container" :style='{marginTop}'>
     <li v-for='item in data' :key='item.id'>
       <carousel-item :carousel="item"/>
     </li>
   </ul>
   <div @click='switchTo(index-1)' v-show='index>=1' class="icon icon-up">
     <Icon type="arrowUp"/>
   </div>
    <div @click='switchTo(index+1)' v-show='index<data.length-1' class="icon icon-down">
     <Icon type="arrowDown"/>
   </div>
   <ul class="indicator">
     <li :class='{active:i===index}' @click='switchTo(i)' v-for='(item,i) in data' :key='item.id'></li>
   </ul>
</div>
</template>
<script>
import CarouselItem from './CarouselItem.vue';
import Icon from '@/compontents/Icon/index';
import {mapState} from 'vuex';
export default {
  components: { CarouselItem,Icon },
 data(){
   return {
     index:0,
    containerHeight:0,
   }
 },
 created(){
   this.$store.dispatch('Banners/fetchBanners');
 },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    window.addEventListener('resize',this.changeResize);
  },
  destoryed(){
    window.removeEventListener('resize',this.changeResize);
  },
  computed:{
    marginTop(){
      return -this.index*this.containerHeight+'px';
    },
    ...mapState('Banners',['loading','data'])
  },
   methods:{
       switchTo(i){
      this.index=i;
    },
    handleWheel(e){
      if(e.deltaY>=100 && this.index<this.data.length-1){
        console.log('向下滑动');
        this.switchTo(this.index+1);
      }
      if(e.deltaY<=-100 && this.index>0){
        this.switchTo(this.index-1);
        console.log('向上滑动');
      }
    },
    changeResize(){
      console.log('change');
    this.containerHeight = this.$refs.container.clientHeight;
    },
    }
}
</script>
<style lang='less' coped>
 @import '~@/styles/var.less';
 @import '~@/styles/mixin.less';
.home-container{
    width:100%;
    height:100%;
    position: relative;
    overflow: hidden;
  ul{
    margin:0;
    list-style: none;
    padding:0;
  }
   .icon{
    .self-center();
    font-size:30px;
    @gap:25px;
    color:@danger;
    cursor:pointer;
    transform: translateX(-50%);
    &.icon-up{
      top:@gap;
      animation: jump-up 2s infinite;
    }
    &.icon-down{
      bottom:@gap;
      top:auto;
      animation: jump-down 2s infinite;
    }
    @jump:5px;
    @keyframes jump-up {
      0%{
        transform: translate(-50%,@jump);
      }
      50%{
        transform: translate(-50%,-@jump);
      }
      100%{
        transform: translate(-50%, @jump);
      }
    }
    @keyframes jump-down {
      0%{
        transform: translate(-50% ,-@jump);
      }
      50%{
        transform: translate(-50%,@jump);
      }
      100%{
        transform: translate(-50%,-@jump);
      }
    }
  }
}
  .carousel-container{
    width:100%;
    height:100%;
    transition:.5s;
    li{
        width:100%;
        height:100%;
    }
  }
 
  .indicator{
    .self-center();
    transform: translateY(-50%);
    left:auto;
    right:20px;
    li{
      width:10px;
      height:10px;
      border-radius: 50%;
      border: 1px solid #fff;
      background: @words;
      margin-bottom:10px;
      cursor:pointer;
      box-sizing: border-box;
      &.active{
        background: #fff;
      }
    }
  }

</style>