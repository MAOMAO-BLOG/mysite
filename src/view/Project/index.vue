<template>
<div ref='projectContainer' class="project-container" v-loading='loading'>
  <div class="project-item" v-for='item in data' :key='item.id'>


    <div class="img">
      <a :target="item.url ? '_blank':'_self'"  :href="item.url ?  item.url:`javascript:alert('该项目无法通过外网访问')`"> 
        <img class='thumb' v-lazy="item.thumb" alt=""></a>
    </div>

    <div class="content">
      <div class="title">
        <h2><a :target="item.url ? '_blank':'_self'" :href="item.url ?  item.url:`javascript:alert('该项目无法通过外网访问')`">{{item.name}}</a></h2>
        <a target='_blank' calss='github' v-if='item.github' :href="item.github">github</a>
      </div>
        <p v-for='(desc,i) in item.description' :key='i'>{{desc}}</p>
    </div>
    
  </div>
  <Empty v-if='data.length===0 && ! loading'/>
</div>
</template>

<script>
import {mapState} from 'vuex';
import mianScroll from '@/mixins/mainScroll';
import Empty from '@/compontents/Empty';
export default {
  components:{
    Empty
  },
  mixins:[mianScroll('projectContainer')],
  computed:mapState('Project',['data','loading']),
  created(){
    this.$store.dispatch('Project/fetchProject');
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.project-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
}
.project-item {
  transition: 0.5s;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
  &:hover {
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.01) translate(3px, -3px);
    color: inherit;
  }
  .thumb {
    width: 250px;
    min-height: 150px;
    flex: 0 0 auto;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 15px;
  }
  .info {
    line-height: 1.7;
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .github {
    font-size: 14px;
    color: @primary;
  }
}
</style>