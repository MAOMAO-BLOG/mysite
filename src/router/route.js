//导出一个路由的配置
import 'nprogress/nprogress.css';
import {start,done,configure} from 'nprogress';
import NotFound from '@/view/NotFound';
configure({
  trickleSpeed: 20,
  showSpinner: false,
})
function delay(duration){
  return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve();
      },duration)
  })
}
 function getPageComponent(func){
  return async ()=>{
    start();
    if(process.env.NODE_ENV==='development'){
      await delay(2000);
    }
    const comp=await func();
    done();
    return comp;
}
}
export default [
    {
      name:'Home',
      path:'/',
      component: getPageComponent(()=>import('@/view/Home/index.vue')),
      meta:{
        title:'首页'
      }
    },
    
    {
      name:'Blog',
      path:'/article',
      component: getPageComponent(()=>import('@/view/Blog/index.vue')),
      meta:{
        title:'文章'
      }
    },
    {
      name:'CategoryBlog',
      path:'/article/cate/:categoryid',
      component: getPageComponent(()=>import('@/view/Blog/index.vue')),
      meta:{
        title:'文章'
      }
    },
    {
      name:'BlogDetail',
      path:'/article/:id',
      component: getPageComponent(()=>import('@/view/Blog/Detail.vue')),
      meta:{
        title:'文章详情'
      }
    },
    {
      name:'About',
      path:'/about',
      component: getPageComponent(()=>import('@/view/About/index.vue')),
      meta:{
        title:'关于我'
      }
    },
     {
      name:'Message',
      path:'/message',
      component: getPageComponent(()=>import('@/view/Message/index.vue')),
      meta:{
        title:'留言板'
      }
    },
    {
      name:'Project',
      path:'/project',
      component: getPageComponent(()=>import('@/view/Project/index.vue')),
      meta:{
        title:'项目&效果'
      }
    },
    {
      name:'NotFound',
      path:'/404',
      component:NotFound,
    }
  ]
