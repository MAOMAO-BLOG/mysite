<template>
<form  id='data-form-container' ref='form' class='data-form-container' @submit.prevent='handleSubmit'>
    <div class="form-item">
      <div class="input-area">
        <input type="text" maxlength="10" placeholder="用户昵称" v-model='formdata.nickname'/>
         <span class="tip">{{formdata.nickname.length}}/10</span>
      </div>
      <div class="error">{{error.nickname}}</div>
    </div>
     <div class="form-item">
      <div class="text-area">
        <textarea type="text" maxlength="300" placeholder="输入内容" v-model='formdata.content'></textarea>
        <span class="tip">{{formdata.content.length}}/300</span>
      </div>
      <div class="error">{{error.content}}</div>
    </div>
    <div class="form-item">
      <div class="button-area">
        <button :disabled='isSubmiting'>{{isSubmiting ? '提交中...':'提交'}}</button>
      </div>
    </div>
</form>
</template>
<script>
export default {
  data(){
    return {
      formdata:{
        nickname:'',
        content:''
      },
      error:{
        nickname:'',
        content:''
      },
      isSubmiting:false
    }
  },
  methods:{
    handleSubmit(){
      this.error.nickname=this.formdata.nickname ? '' :'请输入昵称';
      this.error.content=this.formdata.content ? '' :'请输入内容';
      if(this.error.nickname || this.error.content){
        return ;
      }
      this.isSubmiting=true;
      this.$emit('submit',this.formdata,(res)=>{
        this.$getMessage({
          content:res,
          type:'success',
          duration:1000,
          container:this.$refs.form,
          callback:()=>{
            this.isSubmiting=false,
            this.formdata.nickname='',
            this.formdata.content=''
          }
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
  .data-form-container{
    margin-bottom:20px;
  }
  .form-item{
     margin-bottom:8px;
  }
  .input-area{
    width:50%;
    position: relative;
  }
  .text-area{
    position: relative;
  }
  .tip{
    position: absolute;
    right: 5px;
    bottom:5px;
    color:@gray;
    font-size:12px;
  }
  input,textarea{
    display: block;
    width:100%;
    border:1px dashed @gray;
    color:@words;
    font-size:14px;
    box-sizing: border-box;
    border-radius:4px;
    outline:none;
    &:focus{
      border-color:@primary;
    }
  }
  input{
    padding:0px 15px;
    height:40px;
  }
  textarea{
    resize:none;
    padding:8px 15px;
    height:120px;
  }
  .error{
    margin-top:6px;
    color:@danger;
    font-size:14px;
    height:20px;
    line-height:20px;
  }
  button{
    position: relative;
    cursor:pointer;
    outline:none;
    width:100px;
    height:34px;
    color:#fff;
    border-radius:4px;
    border:none;
    background: @primary;
    &:hover{
      background: darken(@primary,10%);
    }
    &:disabled{
      background: lighten(@primary,10%);
    cursor: not-allowed;
    }
  }
</style>