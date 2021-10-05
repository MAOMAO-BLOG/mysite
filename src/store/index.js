import Vue from 'vue';
import {Store,install} from 'vuex';
import Banners from './banners';
import Setting from './setting';
import About from './about';
import Project from './project';
if(!window.Vuex){
  install(Vue);
}
export default new Store({
  modules:{
    Banners,
    Setting,
    About,
    Project
  },
  strict :true,
})
