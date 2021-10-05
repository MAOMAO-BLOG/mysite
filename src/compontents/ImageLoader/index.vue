<template>
  <div class="imageLoader-container">
      <img class="placeholder" v-if="!everythingDown" :src="placeholder">
      <img @load="handleLoad" :style="{opacity:originOpacity,transition:`${duration}ms`}" :src="src">
  </div>
</template>

<script>
export default {
     data(){
            return {
                loaded:false,
                everythingDown:false
            }
        },
          computed:{
            originOpacity(){
                return this.loaded?1:0;
            }
        },
    props:{
        src:{
            type:String,
            required:true
        },
        placeholder:{
             type:String,
            required:true
        },
         duration:{
             type:String,
            default:500
        }
    },
    methods:{
        handleLoad(){
            this.loaded=true;
            setTimeout(()=>{
                this.everythingDown=true;
            },this.duration);
            this.$emit('load');
        }
    }
}
</script>

<style lang='less' scoped>
@import '~@/styles/mixin.less';
.imageLoader-container{
    width:100%;
    height:100%;
    position: relative;
    overflow: hidden;
    img{
        .self-fill();
        object-fit: cover;
        &.placeholder{
            filter:blur(2vw);
        }
    }
}

</style>