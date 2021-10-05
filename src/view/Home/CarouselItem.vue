<template>
  <div
    class="carousel-item-container"
    ref="container" 
    @mousemove="handleMouseMove" @mouseleave='handleMouseLeave'>
    <div class="carousel-img-container" ref="img" :style='imgPosition' >
      <ImageLoader
        @load="showWords"
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
        duration="500"
      />
    </div>
    <div class="title" ref="title">
      {{ carousel.title }}
    </div>
    <div class="desc" ref="desc">
      {{ carousel.description }}
    </div>
  </div>
</template>
<script>
import ImageLoader from "@/compontents/ImageLoader";
export default {
  props: ["carousel"],
  components: {
    ImageLoader,
  },
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
     containerSize:null,
     imgSize:null,
     mouseX:0,
     mouseY:0
    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.desc.clientWidth;
    this.setSize();
    this.mouseX=this.center.x;
    this.mouseY=this.center.y;
    window.addEventListener('resize',this.setSize);
  },
  destoryed(){
    window.removeEventListener('resize',this.setSize);
  },
  computed: {
      imgPosition(){
          if(!this.containerSize || !this.imgSize){
              return;
          }
          const extraWidth=this.imgSize.width-this.containerSize.width;
          const extraHeight=this.imgSize.height-this.containerSize.height;
          const left=(-extraWidth/this.imgSize.width)*this.mouseX;
          const top=(-extraHeight/this.imgSize.height)*this.mouseY;
          return {
              transform:`translate(${left}px,${top}px)`
          }
      },
      center(){
          return {
              x:this.containerSize.width/2,
              y:this.containerSize.height/2
          }
      }
  },
  methods: {
    showWords() {
      this.$refs.title.style.width = 0;
      this.$refs.title.style.opacity = 1;
      this.$refs.title.clientWidth;
      this.$refs.title.style.width = this.titleWidth + "px";
      this.$refs.desc.style.width = 0;
      this.$refs.desc.style.opacity = 1;
      this.$refs.desc.clientWidth;
      this.$refs.desc.style.width = this.descWidth + "px";
    },
    setSize(){
        this.containerSize={
            width:this.$refs.container.clientWidth,
            height:this.$refs.container.clientHeight,
        }
        this.imgSize={
            width:this.$refs.img.clientWidth,
            height:this.$refs.img.clientHeight,
        }
    },
    handleMouseLeave(){
        this.mouseX=this.center.x;
        this.mouseY=this.center.y;
    },
    //处理鼠标移动函数
    handleMouseMove(e){
        const rect=this.$refs.container.getBoundingClientRect();
        this.mouseX=e.clientX-rect.left;
        this.mouseY=e.clientY-rect.top;
    }
  }
};
</script>

<style lang='less' scoped>
@import "~@/styles/var.less";
.carousel-item-container {
  width: 100%;
  height: 100%;
  color: #fff;
  position: relative;
  overflow: hidden;
.carousel-img-container {
  width: 120%;
  height: 120%;
  position: absolute;
  left:0;
  top:0;
  transition:1s;
  z-index:-1;
}
  .title,
  .desc {
    position: absolute;
    top: 50%;
    left: 200px;
    letter-spacing: 3px;
    color: lighten(@gray, 20%);
    text-shadow: 1px 0 0 rgba(0, 0, 0, 0.5), -1px 0 0 rgba(0, 0, 0, 0.5),
      0 1px 0 rgba(0, 0, 0, 0.5), 0 -1px 0 rgba(0, 0, 0, 0.5);
    opacity: 0;
    white-space: nowrap;
    overflow: hidden;
  }
  .title {
    transition: 3s;
    font-size: 2em;
    top: calc(50% - 30px);
  }
  .desc {
    transition: 3s 3s;
    font-size: 1.2em;
    top: calc(50% + 30px);
  }
}

</style>