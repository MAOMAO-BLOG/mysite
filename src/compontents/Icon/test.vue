<template>
  <div class="test-container">
    <div class="item" v-for="n in types" :key="n">
      <Icon :type="n" />
      <label>{{ n }}</label>
    </div>
  </div>
</template>

<script>
import Icon, { types } from "./index.vue";
export default {
    data(){
        return {types};
    },
  components: {
    Icon,
  },
};
</script>

<style scoped>
    .test-container{
        margin:0 auto;
    }
    .item{
        margin:2em;
        text-align: center;
    }
</style>