import {getSetting} from '@/api/setting';
import titleControl from '@/utils/titleControl';
export default{
    namespaced:true,
    state:{
        data:null,
    },
    mutations:{
        setData(state,payload){
            state.data=payload;
        },
        setLoading(state,payload){
            state.loading=payload; 
        },
    },
    actions:{
        async fetchSetting(ctx){
            ctx.commit('setLoading',true);
            const resp=await getSetting();
            console.log(resp);
            ctx.commit('setData',resp);
            ctx.commit('setLoading',false);
            if(resp.favicon){
               let link= document.querySelector("link[rel='shortcut icon']");
               if(link){
                   console.log(1);
                   return ;
               }
               link=document.createElement('link');
               link.rel='shortcut icon';
               link.type='images/x-icon';
               link.href=resp.favicon;
               document.querySelector("head").appendChild(link);
            }
            if(resp.siteTitle){
                titleControl.setSiteTitle(resp.siteTitle);
            }
        }
    }
}