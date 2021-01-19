<template>
  <div class="courDetail">
    <div class="hand">
        <div class="dv">
            <left theme="outline" size="24" fill="#333" @click.native="$router.back()" />
        </div>
        <div class="dv">课程详情</div>
        <div class="dv">
            <share-one theme="outline" size="24" @click.native="show = true" fill="#333"/>
        </div>
    </div>
    <div class="cont">
      <!-- 图片 -->
      <div class="swipe"></div>
      <!-- 收藏 -->
      <div class="head">
        <h3>初中化学</h3>
        <span @click="shou">
          <star v-if="flag" theme="outline" size="24" fill="#f18e11" />
          <star v-else theme="filled" size="24" fill="#f18e11" />
        </span>
        <p class="p1">共1课时 | 0人已报名</p>
        <p class="p2">免费</p>
      </div>
      <!-- 团队 -->
      <div class="tuan">
        <h3>教学团队</h3>
        <ul>
          <li>
            <img src="../../assets/img/avatar.jpg" />
            <p>小张</p>
          </li>
        </ul>
      </div>
      <!-- 介绍大纲 -->
      <van-tabs v-model="active" scrollspy sticky>
        <van-tab v-for="item in list" :title="item.title" :key="item.id">
          <h3>{{ item.title }}</h3>
        </van-tab>
      </van-tabs>
    </div>
    <!-- 分享弹出层 -->
    <van-popup v-model="show" round position="bottom" :style="{ height: '30%' }">
        <!-- <ul>
            <li>微信</li>
            <li>QQ</li>
            <li>微博</li>
        </ul> -->
    </van-popup>
    <!-- 底部报名 -->
    <div class="foot">
      <button>立即报名</button>
    </div>
  </div>
</template>
<script>
import { Star,Left,ShareOne } from "@icon-park/vue";
import { Toast } from "vant";
export default {
  components: {
    Star,
    Left,
    ShareOne
  },
  data() {
    return {
      active: "",
      flag: true,
      show: false,
      list: [
        { title: "课程介绍", id: 1 },
        { title: "课程大纲", id: 2 },
        { title: "课程评价", id: 3 },
      ],
    };
  },
  methods: {
    shou() {
      if (this.flag) {
        Toast("收藏成功");
      } else {
        Toast("取消收藏成功");
      }
      this.flag = !this.flag;
    },
  },
};
</script>
<style lang="scss" scoped>
.courDetail {
  width: 100%;
  height: 100%;
  position: relative;
  .hand {
    width: 100%;
    height: 0.9rem;
    background: white;
    padding: 0 0.3rem;
    display: flex;
    align-items: center;
    .dv{
        flex: 1;
        &:nth-child(1){
           text-align: left; 
        }
        &:nth-child(2){
           text-align: center; 
           font-size: 0.36rem;
        }
        &:nth-child(3){
           text-align: right; 
        }   
    }
  }
  .cont {
    width: 100%;
    height: calc(100% - 0.9rem);
    background: #eee;
    overflow-y: scroll;
    .swipe {
      width: 100%;
      height: 4rem;
      background: #ccc;
      text-align: center;
      img {
        width: 80%;
        height: 100%;
      }
    }
    .head {
      width: 100%;
      height: 2.2rem;
      background: white;
      overflow: hidden;
      padding: 0 0.3rem;
      h3 {
        font-size: 0.36rem;
        margin-top: 0.2rem;
      }
      span {
        float: right;
      }
      .p1 {
        font-size: 0.3rem;
        color: #888;
        margin-top: 0.16rem;
      }
      .p2 {
        font-size: 0.36rem;
        color: red;
        margin-top: 0.3rem;
      }
    }
    .tuan {
      width: 100%;
      height: 2.8rem;
      background: white;
      margin: 0.2rem 0;
      padding: 0 0.3rem;
      h3 {
        width: 100%;
        height: 0.8rem;
        font-size: 0.3rem;
        line-height: 0.8rem;
      }
      ul {
        width: 100%;
        height: 2rem;
        padding: 0.2rem 0;
        display: flex;
        li {
          width: 1.8rem;
          height: 100%;
          text-align: center;
          img {
            width: 55%;
            height: 60%;
          }
          p {
            font-size: 0.3rem;
            margin-top: 0.16rem;
          }
        }
      }
    }
    /deep/.van-tab__pane {
      margin-bottom: 0.2rem;
      padding: 0 0.2rem;
      background: white;
      height: 3rem;
      overflow: hidden;
      h3 {
        font-size: 0.32rem;
        color: #555;
        margin-top: 0.3rem;
      }
    }
  }
  .foot {
    width: 100%;
    height: 1rem;
    background: white;
    position: fixed;
    bottom: 0;
    text-align: center;
    button {
      width: 90%;
      height: 80%;
      border: none;
      background: red;
      color: white;
      font-size: 0.3rem;
      margin-top: 0.1rem;
      border-radius: 0.4rem;
    }
  }
}
</style>
