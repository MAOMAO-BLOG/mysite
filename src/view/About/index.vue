<template>
  <div v-loading='loading || !isLoaded' class="about-container">
    <iframe class='about-content' @load='isLoaded=true' :src="data" frameborder="0"></iframe>
  </div>
</template>
<script>
import {mapState} from 'vuex';
export default {
  data(){
    return {
      isLoaded:false
    }
  },
  computed:mapState('About',['data','loading']),
  created(){
    this.$store.dispatch('About/fetchAbout');
  }
}
</script>

<style lang="less" scoped>
  .about-container{
    width:100%;
    height:100%;
    position:relative;
  }
  .about-content{
     width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  }
</style>