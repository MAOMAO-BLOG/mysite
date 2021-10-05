<template>
  <div class="test-container">
      <SiteAside/>
  </div>
</template>

<script>
import SiteAside from './index';

export default {
    components:{
SiteAside
    }
    ,
}
</script>

<style lang='less' scoped>
@import '~@/styles/global.less';
@import '~@/styles/var.less';
.test-container{
    width:500px;
    height:100%;
    background: @dark;
    margin:0 auto;
}
</style>