<template>
  <div id="course">
    <Header></Header>
    <div class="sele">
      <van-dropdown-menu>
        <van-dropdown-item title="分类" ref="item">
          <div class="parent-box">
            <div class="tm-kind">
              <h4>年级</h4>
              <div class="tmk-item">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="筛选" ref="item"></van-dropdown-item>
        <van-dropdown-item title="筛选" ref="item"></van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <div class="cont">
      <div class="page">
        <div class="dv">
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
        <div class="dv"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../../components/Header.vue";
export default {
  components: {
    Header,
  },
};
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
    height: 7rem;
    background: white;
    .tm-kind {
      width: 100%;
      height: 2.6rem;
      background: #eee;
      border-top: 0.02rem solid #f1f1f1;
      padding-left: 0.4rem;
      h4 {
        font-size: 0.26rem;
        padding: 0.3rem 0 0.2rem;
        color: #595959;
      }
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
          width: 1.4rem;
          height: 0.6rem;
          background: white;
          border-radius: 0.2rem;
          margin: 0 0.3rem 0.2rem 0;
        }
      }
    }
  }
  .cont {
    width: 100%;
    height: calc(100% - 1.8rem);
    background: #f0f2f5;
    .page {
      width: 100%;
      height: 100%;
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
