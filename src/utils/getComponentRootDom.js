//得到组件渲染的Dom
import Vue from 'vue';
export default function(component,props){
    const vm=new Vue({
        render:h=>h(component,{props})
    });
    vm.$mount();   
     return vm.$el;
}