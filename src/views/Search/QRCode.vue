<template>
    <div class="qrCode">
        <Header :title="$route.query.name+'分享'" back></Header>
        <!-- <qriously class="dv" :value="initQCode" :size="138"/> -->
        <div class="image_contaner"><img src="../../assets/img/二维码.jpg" alt=""></div>
    </div>
</template>
<script>
import Header from '@/components/Header'
export default {
    components:{
        Header
    },
    data() {
        return {
            initQCode: 'url'
        }
    },
}
</script>
<style lang="scss" scoped>
    .qrCode{
        width: 100%;
        height: 100%;
        position: relative;
        // .dv{
        //     position: absolute;
        //     left: 50%;
        //     top: 50%;
        //     transform: translate(-50%,-50%);
        // }
        .image_contaner
        {
            width: 100%;
            margin-top: 2rem;
            img{
                width: 100%;
            }
        }
    }
</style>