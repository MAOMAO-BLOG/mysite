<template>
  <div @click='handleClick' v-show='show' class="totop-container">
    toTop
  </div>
</template>

<script>
export default {
  data(){
    return{
      show:false,
    }
  },
  created(){
    this.$bus.$on('mainScroll',this.handleScroll);
  },
  destroyed(){
    this.$bus.$off('mainScroll',this.handleScroll);
  },
  methods:{
    handleScroll(dom){
      if(!dom){
        this.show=false;
        return;
      }
      if(dom.scrollTop>=500){
        this.show=true;
      }
    },
    handleClick(){
      this.$bus.$emit('setMainScroll',0);
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/styles/var.less';
    .totop-container{
        background: @primary;
        position:absolute;
        width:50px;
        height:50px;
        border-radius:50%;
        right:100px;
        bottom:50px;
        text-align: center;
        line-height:50px;
        color:#fff;
        font-size:12px;
        z-index:99;
        cursor:pointer;
    }
</style>