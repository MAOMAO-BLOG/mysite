import lazy from '@/assets/img/loading.gif';
import eventBus from '@/eventBus.js';
import debounce from '@/utils/debounce';
let imgs=[];//未加载的图片数组
function handleScroll(){
    setImages();
}
function setImages(){
    for (const img of imgs) {
        setImage(img);
    }
}
function setImage(img){
    img.dom.src=lazy;
    //在可视区范围内加载
    const rect=img.dom.getBoundingClientRect();
    const height=rect.height || 100;
    if(rect.top>=-height && rect.top<=document.documentElement.clientHeight)
    {
        img.dom.src=img.src;
        imgs=imgs.filter(i=>i!==img)//加载完之后从未加载图片数组中移除，之后就不用加载了
    }
}
eventBus.$on('mainScroll',debounce(handleScroll,50));
export default{
    inserted(el,bindings){
        const img={
            src:bindings.value,
            dom:el
        }
        imgs.push(img);
        setImage(img);
    },
    unbind(el){
        imgs=imgs.filter(img=>img.dom!==el);
    }
}