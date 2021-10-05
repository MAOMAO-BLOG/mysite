<template>
  <div class="app-container">
    <Layout ref='test'>
      <template #left>
          <div class="avatar">
                <SiteAside/>
          </div>
      </template>
      <template #main>
        <RouterView />
      </template>
    </Layout>
    <div class="toTop">
      <to-top/>
    </div>
  </div>
</template>
<script>
import Layout from "./compontents/Layout";
import SiteAside from "./compontents/SiteAside/index";
import ToTop from '@/compontents/ToTop';
export default {
  name:'App',
  components: {
    Layout,
    SiteAside,
    ToTop
  },
};

</script>

<style  lang='less' scoped>
@import '~@/styles/global.less';
@import '~@/styles/var.less';
@import '~@/styles/mixin.less';
.app-container{
  .self-fill(fixed);
  .avatar{
    width:400px;
    height:100%;
    background: @dark;
  }
}
</style>