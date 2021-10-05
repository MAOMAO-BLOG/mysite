<template>
  <div class="test-container">
     <ImageLoader @load='handleLoader'
	src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
  placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100" duration='500'/>
  </div>
</template>
<script>
import ImageLoader from '../ImageLoader/index';
export default {
    name:"app",
    components:{
        ImageLoader,
    },
    methods:{
        handleLoader(){
        }
    }
}
</script>

<style>
.test-container{
    width:500px;
    height:400px;
    border:1px solid;
    margin:0 auto;
    position: relative;
}
</style>