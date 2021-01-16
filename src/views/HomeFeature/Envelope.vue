<template>
  <div class="Envelope_container">
      <div class="envelope_wrapper">
          <div>给我们留言</div>
          <div @click="onLClickfan">▼</div>
      </div>
      <div class="title_container">
          <div>您好，很抱歉我们暂时无法为您提供服务，如需帮助，请留言我们将尽快练习并解决您的问题</div>
      </div>
      <div class="emall_container">
          电话
      </div>
      <div class="input_cotnainer">
          <input type="text"  placeholder="请输入" >
      </div>
      <div class="liu_container">
          留言内容
      </div>
      <div class="text_container">
          <textarea name="" id="" cols="45" rows="8"></textarea>
      </div>
      <div class="button_container">
          <button>提交</button>
      </div>
  </div>
</template>

<script>
export default {
    methods: {
        onLClickfan(){
            this.$router.go(-1)
        }
    },
};
</script>

<style lang="scss" scoped>
.Envelope_container
{
    width: 100%;
    height: 100%;
    background-color: #FAFBFC;
    .envelope_wrapper{
        width: 100%;
        height: 1.2rem;
        background-color: #007AFF;
        font-size: 0.3rem;
        color: #fff;
        display: inline-flex;
        justify-content:space-between;
        align-items: center;
        div{
            margin-left: 0.2rem;
            margin-right: 0.2rem;
        }
    }
    .title_container
    {
        margin-top: 0.2rem;
        width: 100%;
        height: 1rem;
        font-size: 0.3rem;
        color: #ccc;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        div{
            width: 95%;
            height: 100%;
        }
    }
    .emall_container
    {
        margin-top: 0.4rem;
        margin-left: 0.2rem;
        font-size: 0.3rem;

    }
    .input_cotnainer
    {
        width: 100%;
        height: 1rem;
        background-color: #FFF;
        margin-top: 0.4rem;
        input{
            width: 100%;
            height: 100%;
            outline: none;
            border: 0px;
            font-size: 0.3rem;
            text-indent: 0.2rem;
        }
    }
    .liu_container
    {
        width: 100%;
        margin-top: 0.4rem;
        font-size: 0.3rem;
        margin-left: 0.2rem;
    }
    .text_container
    {
        width: 100%;
        margin-top: 0.3rem;
        textarea{
            width: 100%;
            border: 0px;
            font-size: 0.3rem;
        }
    }
    .button_container
    {
        width: 100%;
        height: 3rem;
        margin-top: 1rem;
        z-index: 999;
        button{
            width: 100%;
            height: 1rem;
            text-align: center;
            border: none;
            background-color: #007AFF;
            color: #fff;
            font-size:0.3rem;
        }
    }
}


</style>
