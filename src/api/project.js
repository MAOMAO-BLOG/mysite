import request from './request';
export async function getProjects(){
return await request.get("/api/project");//如果vue-cli不设置代理，浏览器就会出现跨域问题。
}
