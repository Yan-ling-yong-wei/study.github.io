<template>
  <div id="course">
    <Header right title="课程列表" @rightClick="$router.push('/search')"></Header>
    <div class="sele">
      <van-dropdown-menu>
        <van-dropdown-item title="分类" ref="item">
          <div class="parent-box">
            <div class="tm-kind">
              <h4>年级</h4>
              <div class="tmk-item">
                <ul>
                  <li>初一</li>
                  <li>初二</li>
                  <li>初三</li>
                  <li>高一</li>
                  <li>高二</li>
                </ul>
              </div>
            </div>
            <div class="tm-kind">
              <h4>学科</h4>
              <div class="tmk-item">
                <ul>
                  <li>语文</li>
                  <li>数学</li>
                  <li>英语</li>
                  <li>物理</li>
                  <li>化学</li>
                </ul>
              </div>
            </div>
            <div class="seach-btn">
              <button>重置</button>
              <button>确定</button>
            </div>
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="排序" ref="item">
          <div class="list">
            <ul>
              <li>综合排序</li>
              <li>最新</li>
              <li>最热</li>
              <li>价格从低到高</li>
              <li>价格从高到低</li>
            </ul>
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="筛选" ref="item">
          <div class="filter-box">
            <ul>
              <li v-for="item in appCourseType" :key="item.id">{{ item.name }}</li>
            </ul>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <div class="cont">
      <div class="page">
        <div class="dv" v-for="item in list" :key="item.id" @click="go(item.id)">
          <div class="left">
            <img :src="item.cover_img" alt="" />
          </div>
          <div class="right">
            <p>{{ item.title }}</p>
            <check-one class="h4" v-if="item.has_buy" theme="filled" size="24" fill="#f3850f"/>
            <p>
              <span>{{ item.sales_num }}人已报名</span>
              <span>免费</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { courseClassify, courseBasis } from "@/utils/api"
import { CheckOne } from "@icon-park/vue"
import Header from "../../components/Header.vue"
export default {
  components: {
    Header,
    CheckOne,
  },
  data() {
    return {
      appCourseType: [],
      list: [],
    }
  },
  methods: {
    go(id){
      this.$router.push({path:'/courDetail',query:{id}})
    }
  },
  created() {
    courseClassify().then((res) => {
      // console.log(res)
      this.appCourseType = res.data.data.appCourseType
    })
    courseBasis().then((res) => {
      // console.log(res)
      this.list = res.data.data.list
    })
  },
}
</script>
<style lang="scss" scoped>
#course {
  width: 100%;
  height: 100%;
  .sele {
    width: 100%;
    height: 0.9rem;
    background: #eee;
    /deep/.van-dropdown-menu__bar {
      box-shadow: none;
    }
  }
  .parent-box {
    width: 100%;
    height: 6.6rem;
    padding: 0 0.1rem;
    background: white;
    .tm-kind {
      width: 100%;
      height: 2.6rem;
      border-top: 0.01rem solid #f1f1f1;
      padding-left: 0.4rem;
      h4 {
        font-size: 0.26rem;
        padding: 0.3rem 0 0.2rem;
        color: #595959;
      }
      .tmk-item {
        width: 100%;
        height: 1.7rem;
        ul {
          width: 100%;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          align-content: flex-start;
          li {
            width: 1.38rem;
            height: 0.66rem;
            background: #f5f5f5;
            border-radius: 0.05rem;
            margin: 0 0.4rem 0.2rem 0;
            color: #646464;
            font-size: 0.3rem;
            text-align: center;
            line-height: 0.7rem;
            &:nth-child(4) {
              margin: 0;
            }
          }
        }
      }
    }
    .seach-btn {
      width: 100%;
      height: 1.4rem;
      border-top: 0.01rem solid #f1f1f1;
      display: flex;
      justify-content: space-around;
      align-items: center;
      button {
        width: 3.4rem;
        height: 50%;
        border: none;
        border-radius: 0.1rem;
        font-size: 0.3rem;
        &:nth-child(1) {
          border: 0.02rem solid #d9d9d9;
          background: white;
        }
        &:nth-child(2) {
          background: #eb6100;
          color: white;
        }
      }
    }
  }
  .list {
    width: 100%;
    height: 5.2rem;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      li {
        width: 100%;
        line-height: 1rem;
        flex: 1;
        border-top: 0.02rem solid #eee;
        text-align: center;
        font-size: 0.28rem;
        color: #595959;
      }
    }
  }
  .filter-box {
    width: 100%;
    height: 3.4rem;
    padding: 0.2rem 0 0 0.2rem;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      align-content: flex-start;
      li {
        width: 1.38rem;
        height: 0.66rem;
        background: #f5f5f5;
        border-radius: 0.05rem;
        margin: 0 0.4rem 0.2rem 0;
        color: #646464;
        font-size: 0.3rem;
        text-align: center;
        line-height: 0.7rem;
        &:nth-child(4) {
          margin: 0;
        }
      }
    }
  }
  .cont {
    width: 100%;
    height: calc(100% - 1.8rem);
    background: #f0f2f5;
    overflow: hidden;
    .page {
      width: 100%;
      height: 100%;
      overflow: scroll;
      display: flex;
      padding: 0.3rem;
      flex-direction: column;
      .dv {
        padding: 0.2rem;
        background-color: #fff;
        border-radius: 0.2rem;
        margin-bottom: 0.2rem;
        display: flex;
        .left {
          margin-right: 0.2rem;
          img {
            width: 2rem;
            height: 1.2rem;
            border-radius: 0.1rem;
          }
        }
        .right {
          display: flex;
          position: relative;
          flex-direction: column;
          flex-grow: 1;
          justify-content: space-between;
          .h4{
            position: absolute;
            right: 0.1rem;
            top: 0.2rem;
          }
          p:first-child {
            font-size: 0.28rem;
          }
          p:last-child {
            font-size: 0.24rem;
            display: flex;
            justify-content: space-between;
            color: rgba(0, 0, 0, 0.45);
            span:last-child {
              color: #44a426;
              font-size: 0.28rem;
            }
          }
        }
      }
    }
  }
}
</style>
