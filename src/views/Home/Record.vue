<template>
  <div id="record">
    <Header title="约课记录" back></Header>
    <div class="top">
      <ul>
        <li
          v-for="item in lis"
          @click="flag = item.id"
          :class="flag == item.id ? licolor : ''"
          :key="item.id"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="cont">
      <ul>
        <li v-show="flag == '1'">
          <div class="dv">
            <img src="../../assets/img/yueke.png" />
            <p>还没有待上课记录哦</p>
            <button>立即约课</button>
          </div>
          <div class="attend" v-if="aa">

          </div>
        </li>
        <li v-show="flag == '2'">
            <div class="dv" v-if="aa">
            <img src="../../assets/img/yueke.png" />
            <p>还没有上课记录哦</p>
            <button>立即约课</button>
          </div>
          <div class="attend" v-else>
            <div class="nav" v-for="item in 2" :key="item">
              <div class="top">
                <div class="logo">
                  <img src="../../assets/img/avatar.jpg">
                </div>
                <div class="miao">
                  <h4>2019.05.05 10:30~11.30</h4>
                  <p>李想老师 （25分钟）已上课</p>
                </div>
                <div class="logo">
                  <button>下载</button>
                </div>
              </div>
              <div class="foot">
                <ul>
                  <li>
                    <comment theme="outline" size="24" fill="#595959"/>
                    <p>点评老师</p>
                  </li>
                  <li>
                    <monitor theme="filled" size="24" fill="#3e5ae9"/>
                    <p>查看回放</p>
                  </li>
                  <li>
                    <people theme="filled" size="24" fill="#dd8740"/>
                    <p>课后点评</p>
                  </li>
                  <li>
                    <editor theme="filled" size="24" fill="#40dd54"/>
                    <p>课后作业</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li v-show="flag == '3'">
          <div class="dv" v-if="aa">
            <img src="../../assets/img/yueke.png" />
            <p>还没有取消上课记录哦</p>
          </div>
          <div class="attend" v-else>
            <div class="cancel" v-for="item in 3" :key="item">
              <div class="lef">
                <img src="../../assets/img/avatar.jpg">
              </div>
              <div class="rig">
                <h4>2019.05.05 10:30~11:30</h4>
                <p>李想老师 （25分钟）</p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import { Comment,Monitor,People,Editor } from '@icon-park/vue'
export default {
  components: {
    Header,
    Comment,
    Monitor,
    People,
    Editor
  },
  data() {
    return {
      lis: [
        { name: "待上课", id: 1 },
        { name: "以上课", id: 2 },
        { name: "已取消", id: 3 },
      ],
      flag: 1,
      licolor: "licor",
      aa: false,
    };
  },
  methods: {
    qie() {},
  },
};
</script>
<style lang="scss" scoped>
#record {
  width: 100%;
  height: 100%;
  >.top {
    width: 100%;
    height: 1rem;
    border-top: 0.01rem solid #eee;
    border-bottom: 0.01rem solid #eee;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      li {
        flex: 1;
        text-align: center;
        line-height: 1rem;
        font-size: 0.34rem;
        color: #666;
      }
      .licor {
        color: red;
      }
    }
  }
  >.cont {
    width: 100%;
    height: calc(100% - 1.9rem);
    >ul {
      width: 100%;
      height: 100%;
      >li {
        width: 100%;
        height: 100%;
        >.dv {
          width: 100%;
          height: 100%;
          text-align: center;
          img {
            width: 60%;
            margin-top: 2rem;
          }
          p {
            margin: 0.2rem 0;
            font-size: 0.36rem;
          }
          button {
            border-radius: 0.1rem;
            border: none;
            background: #eb6100;
            color: white;
            width: 40%;
            height: 0.8rem;
            margin-top: 0.6rem;
          }
        }
        >.attend{
          width: 100%;
          height: 100%;
          .nav{
            width: 90%;
            height: 2.8rem;
            margin: 0.3rem auto;
            border-radius: 0.1rem;
            border: 0.01rem solid #ccc;
            .top{
              width: 100%;
              height: 60%;
              display: flex;
              .logo{
                flex: 2;
                text-align: center;    
                img{
                  width: 80%;
                  margin-top: 0.3rem;
                }
                button{
                  margin-top: 0.7rem;
                  border: none;
                  background: #eb6100;
                  color: white;
                  font-size: 0.2rem;
                  width: 70%;
                  height: 0.4rem;
                  border-radius: 0.1rem;
                }
              }
              .miao{
                flex: 7;
                padding-left: 0.2rem;
                h4{
                  font-size: 0.34rem;
                  font-weight: bold;
                  margin-top: 0.3rem;
                }
                p{
                  font-size: 0.26rem;
                  color: #ccc;
                  margin-top: 0.2rem;
                }
              }
            }
            .foot{
              width: 100%;
              height: 40%;
              border-top: 0.01rem solid #ccc;
              ul{
                width: 100%;
                height: 100%;
                display: flex; 
                li{
                  flex: 1;
                  text-align: center;
                  padding-top: 0.1rem;
                  p{
                    font-size: 0.2rem;
                    color: #666;
                    margin-top: 0.05rem;
                  }
                }
              }
            }
          }
          .cancel{
            width: 90%;
            height: 1.5rem;
            border-radius: 0.1rem;
            border: 0.01rem solid #ccc;
            margin: 0.3rem auto;
            display: flex;
            .lef{
              flex: 1;
              text-align: center;
              img{
                width: 80%;
                margin-top: 0.18rem;
              }
            }
            .rig{
              flex: 4;
              h4{
                margin: 0.3rem 0 0 0.2rem;
                font-size: 0.34rem;
              }
              p{
                font-size: 0.26rem;
                color: #999;
                margin: 0.2rem 0 0 0.2rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
