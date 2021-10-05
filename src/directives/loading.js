import style from './loading.module.less';
import loadingUrl from '@/assets/img/loading.gif';
function createImg(){
    const img=document.createElement('img');
    img.dataset.role='loading';
    img.src=loadingUrl;
    img.className=style.loading;
    return img;
}
function hasImg(el){
    return el.querySelector('img[data-role=loading]');
}
export default function(el,binding){
    const newImg=createImg();
    const curImg=hasImg(el);
    if(binding.value){
       //如果loading为true并且父元素中没有img
       if(!curImg){
        el.appendChild(newImg);
       }
    }else{
        if(curImg){
            curImg.remove();
        }
    }
}