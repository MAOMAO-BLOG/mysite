<template>
  <i class='iconfont icon-container' :class="fontClass"></i>
</template>

<script>
const classMap = {
  home: "icon-zhuye",
  success: "icon-zhengque",
  error: "icon-cuowu",
  close: "icon-guanbi",
  warn: "icon-jinggao",
  info: "icon-icon-test",
  blog: "icon-blog",
  code: "icon-daima",
  about: "icon-set_about_hov",
  weixin: "icon-weixin",
  mail: "icon-emailFilled",
  github: "icon-github",
  qq: "icon-qq",
  arrowUp: "icon-shangjiantou",
  arrowDown: "icon-jiantou9",
  empty: "icon-empty",
  chat: "icon-liuyan",
};
export const types=Object.keys(classMap);
export default {
    props:{
        type:{
            type:String,
            required:true
        }
    },
    computed:{
        fontClass(){
            return classMap[this.type];
        }
    }
}
</script>

<style scoped>
    @import "//at.alicdn.com/t/font_2508026_8ewm8g2vc0q.css";
    .icon-container{
        color:inherit;
        font-size:inherit;
    }
</style>