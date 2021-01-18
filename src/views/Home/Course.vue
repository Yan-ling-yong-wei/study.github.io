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
              <!-- <li>大班课</li>
              <li>小班课</li>
              <li>公开课</li>
              <li>点播课</li>
              <li>面授课</li>
              <li>音频课</li>
              <li>系统课</li>
              <li>图文课</li>
              <li>会员课</li> -->
            </ul>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <div class="cont">
      <div class="page">
        <div class="dv" v-for="item in list" :key="item.id">
          <h4>李老师16号到22号地理大课堂开课啦</h4>
          <p>
            <time theme="outline" size="24" fill="#595959" />
            03月16日 18:30 ~ 03月22日 15:00 | 共8课时
          </p>
          <div class="teacher">
            <div class="tea-item">
              <img src="../../assets/img/avatar.jpg" />
              <span>李青</span>
            </div>
          </div>
          <div class="footer">
            <span class="sp1">178人已报名</span>
            <span class="sp2">免费</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { courseClassify, courseBasis } from "@/utils/api"
import Header from "../../components/Header.vue"
export default {
  components: {
    Header,
  },
  data() {
    return {
      appCourseType: [],
      list: [],
    }
  },
  created() {
    courseClassify().then((res) => {
      console.log(res)
      this.appCourseType = res.data.data.appCourseType
    })
    courseBasis().then((res) => {
      console.log(res)
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
        width: 100%;
        height: 3.5rem;
        background: white;
        border-radius: 0.1rem;
        margin-bottom: 0.3rem;
        padding: 0 0.2rem;
        > h4 {
          font-size: 0.34rem;
          padding-top: 0.3rem;
          color: #333;
        }
        > p {
          font-size: 0.26rem;
          padding: 0.12rem 0;
          color: #666;
        }
        .teacher {
          width: 100%;
          height: 1.4rem;
          border-bottom: 0.02rem solid #f5f5f5;
          display: flex;
          .tea-item {
            height: 100%;
            align-items: center;
            display: flex;
            img {
              height: 0.56rem;
            }
            span {
              color: rgba(0, 0, 0, 0.45);
              font-size: 0.2rem;
              margin-left: 0.18rem;
            }
          }
        }
        .footer {
          width: 100%;
          height: 1rem;
          line-height: 1rem;
          .sp1 {
            float: left;
            color: rgba(0, 0, 0, 0.45);
            font-size: 0.28rem;
          }
          .sp2 {
            float: right;
            color: #44a426;
            font-size: 0.34rem;
          }
        }
      }
    }
  }
}
</style>
