<template>
<div class="test-container">
  <Empty text="无数据"/>
</div>
</template>
<script>
import Empty from './index.vue';
export default {
    name:'App',
    components:{
        Empty,
    }
}
</script>

<style scoped>
.test-container{
    width:500px;
    height:400px;
    border:1px solid;
    MARGIN:0 auto;
    position: relative;
}
</style>