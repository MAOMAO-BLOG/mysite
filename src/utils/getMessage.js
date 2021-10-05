import getComponentRootDom from'./getComponentRootDom.js';
import Icon from '@/compontents/Icon/index.vue';
import style from './getMessage.module.less';
export default function getMessage(options){
    const content=options.content||'';
    const type=options.type || 'info';
    const duration=options.duration || 2000;
    const container=options.container || document.body;
    const div=document.createElement('div');
    const dom=getComponentRootDom(Icon,{type});
    div.innerHTML=`<span class=${style.icon}>${dom.outerHTML}</span><div>${content}</div>`;
    const typeClassName=style[`message-${type}`];
    div.className=`${style.message} ${typeClassName}`;
     if(options.container){
         if(getComputedStyle(container).position==='static'){
             container.style.position='relative';
         }
     }
     container.appendChild(div);
     div.clientHeight;
     div.style.opacity=1;
     div.style.transform=`translate(-50%,-50%)`;
     setTimeout(()=>{
        div.style.opacity=0;
        div.style.transform=`translate(-50%,-50%) translateY(-35px)`;
        div.addEventListener('transitionend',function(){
            div.remove();
            options.callback && options.callback();
        },{once:true})
     },duration)

}