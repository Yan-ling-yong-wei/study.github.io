<template>
    <div class="qrCode">
        <Header :title="$route.query.name+'分享'" back></Header>
        <qriously class="dv" :value="initQCode" :size="138"/>
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
            initQCode: 'https://www.baidu.com/'
        }
    },
}
</script>
<style lang="scss" scoped>
    .qrCode{
        width: 100%;
        height: 100%;
        position: relative;
        .dv{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
    }
</style>