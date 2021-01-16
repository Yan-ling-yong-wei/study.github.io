<template>
    <div class="vip">
        <Header title="会员列表" back></Header>
        <div class="cont">
            <div class="dv"></div>
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header'
export default {
    components:{
        Header
    },
}
</script>
<style lang="scss" scoped>
    .vip{
        width: 100%;
        height: 100%;
        background: #eee;
        .cont{
            width: 100%;
            height: calc(100% - 1rem);
            margin-top: 0.1rem;
            display: flex;
            flex-direction: column;
            .dv{
                width: 100%;
                height: 1.6rem;
                margin-top: 0.1rem;
                background: white;
            }
        }
    }
</style>