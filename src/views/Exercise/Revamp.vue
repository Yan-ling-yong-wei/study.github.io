<template>
    <div class="revamp">
        <div class="top">
            <div class="dv">
                <left theme="outline" size="24" fill="#333"/>
            </div>
            <div class="rig">
                <ul>
                    <li>
                        <message-one theme="outline" size="24" fill="#333"/>
                    </li>
                    <li>
                        <star theme="outline" size="24" fill="#333"/>
                    </li>
                    <li>
                        <termination-file theme="outline" size="24" fill="#333"/>
                    </li>
                </ul>        
            </div>
        </div>
        <div class="hand">
            物理学史
            <span><i>1</i>/7</span>
        </div>
        <div class="cont">
            <p>6.下列叙述正确的是：（）</p>
            <ul>
                <li><input type="checkbox">&emsp;A、法拉第发现电磁感应现象</li>
                <li><input type="checkbox">&emsp;B、伽利略发现伽马射线</li>
                <li><input type="checkbox">&emsp;C、牛顿发现万有引力</li>
                <li><input type="checkbox">&emsp;D、达尔文发现生物进化论</li>
            </ul>
            <div class="dv">
                
            </div>
        </div>
    </div>
</template>
<script>
import { Left,MessageOne,Star,TerminationFile } from "@icon-park/vue";
export default {
    components:{
        Left,
        MessageOne,
        Star,
        TerminationFile,
    },
}
</script>
<style lang="scss" scoped>
    .revamp{
        width: 100%;
        height: 100%;
        .top{
            width: 100%;
            height: 0.9rem;
            display: flex;
            align-items: center;
            border-bottom: 0.01rem solid #ddd;
            .dv{
                flex: 1;
            }
            .rig{
                flex: 1;
                ul{
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: flex-end;
                    li{
                        margin-right: 0.2rem;
                    }
                }
            }
        }
        .hand{
            width: 100%;
            height: 0.9rem;
            border-bottom: 0.01rem solid #ddd;
            padding: 0 0.2rem;
            font-size: 0.3rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span{
                i{
                    font-size: 0.4rem;
                    color: blue;

                }
            }
        }
        .cont{
            width: 100%;
            height: 5rem;
            padding: 0 1rem;
            font-size: 0.26rem;
            p{
                margin: 0.4rem 0;
            }
            ul{
                li{
                    margin: 0.3rem 0;
                }
            }
        }
    }
</style>