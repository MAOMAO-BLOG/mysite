
import request from './request';
export async function getBanners(){
return await request.get("/api/banner");//如果vue-cli不设置代理，浏览器就会出现跨域问题。
}
