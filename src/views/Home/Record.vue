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
        </li>
        <li v-show="flag == '2'">
            <div class="dv" v-if="aa">
            <img src="../../assets/img/yueke.png" />
            <p>还没有上课记录哦</p>
            <button>立即约课</button>
          </div>
          <div class="attend" v-else>
            <div class="nav">
              <div class="top">

              </div>
              <div class="foot">
                <ul>
                  <li>
                    <comment theme="outline" size="24" fill="#595959"/>
                  </li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <li v-show="flag == '3'">
          <div class="dv">
            <img src="../../assets/img/yueke.png" />
            <p>还没有取消上课记录哦</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import { comment } from '@icon-park/vue'
export default {
  components: {
    Header,
    comment,
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
        font-size: 0.36rem;
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
            }
            .foot{
              width: 100%;
              height: 40%;
              ul{
                width: 100%;
                height: 100%;
                display: flex; 
                li{
                  flex: 1;
                  text-align: center;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
