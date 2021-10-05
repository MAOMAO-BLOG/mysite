<template>
<div class="toc-container">
  <h1>目录</h1>
<RightList :list='tocWithSelect' @select='handleClick'/>
</div>
</template>
<script>
import RightList from './RightList.vue';
import debounce from '@/utils/debounce';
export default {
  components:{
    RightList,
  },
  props:{
    toc:{
      type:Array,
    }
  },
  data(){
    return{
      activeAnchor:'',
    }
  },
  methods:{
    handleClick(item){
      if(location.hash===item.anchor){
        return;
      }
      location.hash=item.anchor;
    },
    setSelect(scrollDom){
      if(!scrollDom){
        return;
      }
        this.activeAnchor='';
      const range=200;
      for (const dom of this.doms) {
        if(!dom){
          continue;
        }
      const top=dom.getBoundingClientRect().top;
      if(top>range){
        return;
      }else if(top>=0 && top<=range){
        this.activeAnchor=dom.id;
        location.hash=this.activeAnchor;
        return ;
      }else{
        this.activeAnchor=dom.id;
      }
       location.hash=this.activeAnchor;
      }
    }
  },
  created(){
   this.setSelectBounce=debounce(this.setSelect,50);
    this.$bus.$on('mainScroll',this.setSelectBounce);
  },
  destroyed(){
     this.$bus.$off('mainScroll',this.setSelectBounce);
  },
  computed:{
    //把toc的每一项都添加上isSelect属性;
    tocWithSelect(){
      const getToc=(toc=[])=>{
        return toc.map((item)=>({
          ...item,
          isSelect:item.anchor===this.activeAnchor,
          children:getToc(item.children)
        }));
      };
      return getToc(this.toc);
    },
    doms(){
      //根据toc拿到对应的元素数组
      const doms=[];
      const addToDoms=(toc)=>{
        for (const t of toc) {
          doms.push(document.getElementById(t.anchor));
          if(t.children && t.children.length>0){
            addToDoms(t.children);
          }
        }
      };
      addToDoms(this.toc);
      return doms;
    }
  }
}
</script>
<style  lang='less' scoped>
  .toc-container-container{
    width:300px;
    height:100%;
    padding:20px;
    box-sizing: border-box;
    overflow-y: auto;
     h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
    }
  }
</style>