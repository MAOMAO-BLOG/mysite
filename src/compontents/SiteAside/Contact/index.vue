<template>
  <div class="contact-container">
      <ul>
          <li>
            <a target='_blank' :href="data.github">
              <div class="icon">
                    <Icon type="github"/>
                </div>
                <div class="icon">
                    <Icon type="github"/>
                </div>
                <span>{{data.githubName}}</span>
            </a>
          </li>
          <li>
            <a :href="`mailto:${data.qq}`">
                <div class="icon">
                    <Icon type="mail"/>
                </div>
                <span>{{data.mail}}</span>
            </a>
            
          </li>
          <li>
            <a :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`">
                <div class="icon">
                    <Icon type="qq"/>
                </div>
                <span>{{data.qq}}</span>
            </a>
            <div class="pop">
                <img :src="data.qqQrCode"/>
            </div>
          </li>
           <li>
            <a :href="`mailto:${data.qq}`">
                <div class="icon">
                    <Icon type="weixin"/>
                </div>
                <span>{{data.weixin}}</span>
            </a>
            <div class="pop">
                <img :src="data.weixinQrCode" alt="">
            </div>
          </li>
      </ul>
  </div>
</template>

<script>
import Icon from '@/compontents/Icon/index';
import {mapState} from 'vuex';
export default {
    components:{
        Icon
    },
   computed:mapState('Setting',['data']),
       
}
</script>

<style lang='less' scoped>
@import '~@/styles/var.less';
// @import '~@/styles/mixin.less';
    .contact-container{
        width:500px;
        position: relative;
        margin:0 auto;
        ul{
             width:100%;
             margin:0;
             padding:0;
            list-style: none;
            a{
                display: flex;
                text-decoration: none;
                color:@lightWords;
                font-size:24px;
                span:hover{
                    color:@primary;
                }
               
            }
            li{
                margin:10px;
                padding:10px;
                position: relative;
                height:30px;
                cursor: pointer;
                &:hover{
                    .pop{
                        transform:scaleY(1);
                    }
                }
                .pop{
                    position: absolute;
                    width:300px;
                    height:300px;
                    left:0;
                    bottom:40px;
                    transform: scaleY(0);
                    transform-origin: center bottom;
                    transition:.3s;
                    img{
                        width:100%;
                        height:100%;
                    }
                    &::after{
                        content:'';
                        position: absolute;
                        width:8px;
                        height:8px;
                        background: #fff;
                        left:50%;
                        transform: translateX(-50%) rotate(45deg);
                        bottom:-4px;
                        
                    }
                }
            }
        }
    }
     .icon{
                    margin-right:20px;
                }
</style>