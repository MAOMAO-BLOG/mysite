import VueRouter from 'vue-router';
import Vue from 'vue';
import routes from './route';
import titleControl from '@/utils/titleControl';
if(!window.VueRouter){
  Vue.use(VueRouter);
}
//导出一个路由
const router=new VueRouter({
  routes,
  mode:"history"
})

router.afterEach((to)=>{
  if(to.meta.title){
    titleControl.setRouteTitle(to.meta.title);
  }
})
export default router;