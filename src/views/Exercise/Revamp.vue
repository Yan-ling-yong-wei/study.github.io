<template>
    <div class="revamp">
        <div class="top">
            <div class="dv">
                <left theme="outline" size="24" fill="#333"  @click.native="$router.back()" />
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
                <button>上一题</button>
                <button>确定</button>
                <button>下一题</button>
            </div>
        </div>
        <div class="foot">
            <button>
                <clear theme="outline" size="16" fill="#1a70ec"/>
                移出错题
            </button>
            <button>
                <preview-open theme="outline" size="16" fill="#1a70ec"/>
                查看答案
            </button>
        </div>
    </div>
</template>
<script>
import { Left,MessageOne,Star,TerminationFile,Clear,PreviewOpen } from "@icon-park/vue";
export default {
    components:{
        Left,
        MessageOne,
        Star,
        TerminationFile,
        Clear,
        PreviewOpen
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
            padding: 0 0.4rem;
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
            .dv{
                width: 100%;
                height: 0.8rem;
                align-items: center;
                display: flex;
                justify-content: space-between;
                button{
                    background: none;
                    border: 0.01rem solid #555;
                    border-radius: 0.1rem;
                    padding: 0.2rem 0.3rem;
                }
            }
        }
        .foot{
            width: 100%;
            height: 1rem;
            padding: 0 0.3rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            button{
                padding: 0.14rem 0.3rem;
                background: none;
                font-size: 0.3rem;
                border: 0.01rem solid #555;
                border-radius: 0.1rem;
            }
        }
    }
</style>