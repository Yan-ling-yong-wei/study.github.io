<template>
    <div class="opinion">
        <Header back title="意见反馈"></Header>
        <div class="cont">
            <textarea id="txt" cols="46" v-model="cont" rows="8" placeholder="请输入你的问题或反馈"></textarea>
            <button @click="yijain">提交</button>
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header'
import { getYi } from '@/utils/api'
import { Toast } from 'vant';
export default {
    components:{
        Header
    },
    data() {
        return {
            cont:""
        }
    },
    methods: {
        yijain(){
            getYi({
               content: this.cont
            }).then(res=>{
                console.log(res);
                this.cont=""
                Toast('反馈成功');
            })
        }
    },
}
</script>
<style lang="scss" scoped>
    .opinion{
        width: 100%;
        height: 100%;
        background: #eee;
        .cont{
            width: 100%;
            height: calc(100% - 1rem);
            margin-top: 0.1rem;
            background: white;
            text-align: center;
            #txt{
                border: 0.01rem solid #ccc;
                margin-top: 0.6rem;
                font-size: 0.3rem;
                padding: 0.2rem 0 0 0.2rem;
                border-radius: 0.1rem;
            }
            button{
                width: 90%;
                margin-top: 2rem;
                height: 1rem;
                border: none;
                border-radius: 0.1rem;
                color: white;
                background:  #eb6100;
                font-size: 0.3rem;
            }

        }
    }
</style>