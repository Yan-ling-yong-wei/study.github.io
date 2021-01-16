<template>
    <div class="collect">
        <Header back title="我的收藏"></Header>
        <div class="cont">
            <ul>
                <li>
                    <div class="lef">
                        <img src="../../assets/img/shou01.jpg">
                    </div>
                    <div class="rig">
                        <h3>如何成为旅游体验师</h3>
                        <p>845人已报名</p>
                        <h4>￥1998.00</h4>
                    </div>
                </li>
                <li>
                    <div class="lef">
                        <img src="../../assets/img/shou02.jpg">
                    </div>
                    <div class="rig">
                        <h3>跟我学做口部操</h3>
                        <p>845人已报名</p>
                        <h4>免费</h4>
                    </div>
                </li>
                <li>
                    <div class="lef">
                        <img src="../../assets/img/shou03.jpg">
                    </div>
                    <div class="rig">
                        <h3>给你好声音的密码</h3>
                        <p>845人已报名</p>
                        <h4>￥1998.00</h4>
                    </div>
                </li>
                <li>
                    <div class="lef">
                        <img src="../../assets/img/shou04.jpg">
                    </div>
                    <div class="rig">
                        <h3>气息训练让声音更有穿透力</h3>
                        <p>845人已报名</p>
                        <h4>免费</h4>
                    </div>
                </li>
                <li>
                    <div class="lef">
                        <img src="../../assets/img/shou05.jpg">
                    </div>
                    <div class="rig">
                        <h3>轻松学说普通话（一对一...</h3>
                        <p>845人已报名</p>
                        <h4>免费</h4>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Header from '@/components/Header'
export default {
    components:{
        Header
    }
}
</script>
<style lang="scss" scoped>
    .collect{
        width: 100%;
        height: 100%;
        .cont{
            width: 100%;
            height: calc(100% - 0.9rem);
            ul{
                width: 100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                li{
                    width: 98%;
                    margin: 0 auto;
                    height: 2.2rem;
                    border-top: 0.01rem solid #ccc;
                    padding: 0.1rem 0.2rem;
                    display: flex;
                    .lef{
                        flex: 2;
                        text-align: center;
                        img{
                            width: 100%;
                            margin-top: 0.16rem;
                        }
                    }
                    .rig{
                        flex: 3;
                        h3{
                            font-size: 0.32rem;
                            font-weight: 600;
                            margin: 0.2rem 0 0 0.2rem;
                        }
                        p{
                            font-size: 0.3rem;
                            color: #888;
                            margin: 0.16rem 0 0 0.2rem;
                        }
                        h4{
                            font-size: 0.3rem;
                            margin: 0.36rem 0 0 0.2rem;
                        }
                    }
                }
            }
        }
    }
</style>