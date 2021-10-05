import axios from 'axios';
import getMessage from '@/utils/getMessage';
const ins=axios.create();//创建一个axios实例
ins.interceptors.response.use(function(resp){
    if(resp.data.code!=0){
        //说明有问题了
        getMessage({
            content:'获取信息失败',
            type:'error'
        })
        return null;
    }
    return resp.data.data;
})
export default ins;