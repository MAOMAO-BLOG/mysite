<template>
  <div class="test-container">
    <Layout>
      <template #left>
          <div class="left">
                <SiteAside/>
          </div>
      </template>
    <!-- <template #main>
      <div class="main">著区域住区体育著区域住区体育著区域住区体育著区域住区体育著区域住区体育著区域住区体育著区域住区体育著区域住区体育著区域住区体育著区域住区体育著区域住区体育著区域住区体育著区域住区体育著区域住区体育著区域住区体育著区域住区体育著区域住区体育著区域住区体育著区域住区体育著区域住区体育</div> 
      </template>  -->
      <template #right>
        <div class="right">hntdmth</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./index";
import SiteAside from "@/compontents/SiteAside/index";
export default {
  components: {
    Layout,
    SiteAside
  },
};
</script>

<style  lang='less' scoped>
@import '~@/styles/global.less';
@import '~@/styles/var.less';
@import '~@/styles/mixin.less';
.test-container{
    width:100%;
    height:100%;
    .left{
    width:400px;
    background: @dark;
    }
    .main{
        width:100%;
        height:100%;
        white-space: nowrap;
        background: lightblue;
    }
    .right{
        width:200px;
        height:100%;
        background: lightcoral;
    }
}

</style>