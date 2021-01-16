<template>
  <div id="my">
    <header>
      <div class="person">
        <div class="info" @click="$router.push(`/${!user.mobile ? 'login' : 'info'}`)">
          <div class="avatar-box">
            <div class="avatar">
              <!--              {{user.mobile }}-->
              <div class="img-avatar" v-if="!user.mobile"></div>
              <img :src="user.avatar" alt="" class="img-avatar" v-else />
              <img src="../../assets/img/img00.png" alt="" class="img-vip" />
            </div>
          </div>
          <div class="mobile-box">
            <div class="mobile">
              <span>{{ !user.mobile ? "登陆/注册" : user.mobile }}</span>
            </div>
            <div class="edit">
              <img src="../../assets/img/img000.png" alt="" />
            </div>
            <div class="to-set">
              去约课
            </div>
          </div>
        </div>
        <div class="mine">
          <div class="my-study item" @click="$router.push('/myStudy')">
            <p class="count">0</p>
            <p class="name">我的课程</p>
            <p class="note">已购课程学习</p>
          </div>
          <div class="my-plan item">
            <p class="count">0</p>
            <p class="name">我的预约</p>
            <p class="note">一对一老师预约</p>
          </div>
          <div class="my-period item">
            <p class="count">0</p>
            <p class="name">剩余学习币</p>
            <p class="note">查看剩余学习币</p>
          </div>
        </div>
      </div>
    </header>
    <div class="share">
      <div class="box" @click="show = true">
        <img src="../../assets/img/mail.png" alt="" />
        <div>
          <p>邀请好友注册APP，享多重好礼</p>
          <p class="sub">限时特惠，多邀多得</p>
        </div>
      </div>
    </div>
    <ul class="menu">
      <li>
        <p>课程相关</p>
        <div class="item">
          <div>
            <img src="../../assets/img/img222.png" />
            <p>我的作业</p>
          </div>
          <div @click="guan">
            <img src="../../assets/img/img07.png" />
            <p>关注的老师</p>
          </div>
          <div @click="shou">
            <img src="../../assets/img/img08.png" />
            <p>我的收藏</p>
          </div>
          <div>
            <img src="../../assets/img/img111.png" />
            <p>我的下载</p>
          </div>
        </div>
      </li>
      <li>
        <p>订单相关</p>
        <div class="item">
          <div>
            <img src="../../assets/img/img09.png" alt="" />
            <p>课程订单</p>
          </div>
          <div>
            <img src="../../assets/img/img09.png" alt="" />
            <p>会员订单</p>
          </div>
          <div>
            <img src="../../assets/img/img09.png" alt="" />
            <p>约课订单</p>
          </div>
        </div>
      </li>
      <li>
        <p>我的账户</p>
        <div class="item">
          <div @click="you">
            <img src="../../assets/img/img11.png" alt="" />
            <p>优惠卡</p>
          </div>
          <div @click="ka">
            <img src="../../assets/img/img12.png" alt="" />
            <p>学习卡</p>
          </div>
          <div @click="hui">
            <img src="../../assets/img/img13.png" alt="" />
            <p>会员</p>
          </div>
        </div>
      </li>
      <li>
        <p>自动服务</p>
        <div class="item">
          <div>
            <img src="../../assets/img/img14.png" alt="" />
            <p>我的消息</p>
          </div>
          <div @click="yi">
            <img src="../../assets/img/img15.png" alt="" />
            <p>意见反馈</p>
          </div>
          <div>
            <img src="../../assets/img/img16.png" alt="" />
            <p>在线客服</p>
          </div>
        </div>
      </li>
    </ul>

    <van-overlay :show="show" @click.self="show = false">
      <img src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20210pfA32rjGC1610612412.png" alt="" />
    </van-overlay>
  </div>
</template>
<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState(["user"]),
  },
  data() {
    return {
      show: false,
    }
  },
  methods: {
    shou() {
      this.$router.push({ path: "/collect" })
    },
    guan() {
      this.$router.push({ path: "/attention" })
    },
    yi() {
      this.$router.push({ path: "/opinion" })
    },
    ka(){
      this.$router.push({path:'/card'})
    },
    you(){
      this.$router.push({path:'/discounts'})
    },
    hui(){
      this.$router.push({path:'/svip'})
    }
  },
}
</script>
<style lang="scss" scoped>
#my {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding-bottom: 0.5rem;
  background-color: #f0f2f5;
  position: relative;
}

header {
  height: 4.35rem;
  width: 100%;
  padding: 0 0.3rem;
  background: #fff url("../../assets/img/user_bg.ab306a5c.png") no-repeat top;
  background-size: 100%;
  position: relative;

  .person {
    width: calc(100% - 0.6rem);
    height: 3.45rem;
    background-color: #ffffff;
    position: absolute;
    bottom: 0;
    box-shadow: 0 0 3.2vw 0 rgba(0, 0, 0, 0.05);
    border-radius: 0.1rem;

    .info {
      height: 1.54rem;
      display: flex;
      align-items: center;
      margin: 0.3rem 0.3rem 0;

      .avatar {
        position: relative;
        border-radius: 50%;
        width: 1.18rem;
        height: 1.18rem;
        div.img-avatar {
          background-color: #eee;
          border-radius: 50%;
        }
        .img-avatar {
          border-radius: 50%;

          width: 100%;
          height: 100%;
          display: block;
        }

        .img-vip {
          width: 0.4rem;
          height: 0.4rem;
          position: absolute;
          display: block;
          top: 0;
          right: -0.2rem;
        }
      }

      .mobile-box {
        display: flex;

        .mobile {
          font-size: 0.32rem;
          font-weight: 400;
          margin-left: 0.25rem;
          margin-right: 0.2rem;
        }

        .edit {
          img {
            display: block;
            width: 0.3rem;
            height: 0.3rem;
          }
        }
      }

      .to-set {
        position: absolute;
        right: 0;
        font-size: 0.24rem;
        width: 1.11rem;
        height: 25px;
        color: #fff;
        background-color: #eb6100;
        border-radius: 0.2rem 0 0 0.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    .mine {
      margin-top: 0.3rem;
      display: flex;
      text-align: center;

      .item {
        width: 33%;
        position: relative;

        &::after {
          content: "";
          display: block;
          background-color: #f5f5f5;
          width: 1px;
          height: 1.1rem;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }

        .count {
          color: #eb6100;
          font-size: 0.48rem;
        }

        .name {
          font-size: 0.26rem;
          color: rgb(89, 89, 89);
          margin: 0.1rem 0 0.12rem 0;
        }

        .note {
          color: rgb(183, 183, 183);
          font-size: 0.24rem;
          transform: scale(0.7);
          white-space: nowrap;
          width: 100%;
        }
      }
    }
  }
}

.share {
  background-color: #fff;
  padding: 0.3rem;
  height: 1.18rem;

  .box {
    position: relative;

    ::after {
      content: "";
      display: block;
      border-top: 0.03rem solid #fff;
      border-right: 0.03rem solid #fff;
      width: 0.2rem;
      height: 0.2rem;
      position: absolute;
      top: 50%;
      right: 0.4rem;
      transform: translateY(-50%) rotate(45deg);
    }

    height: 0.88rem;
    background: linear-gradient(-90deg, #f2995a, #eb6100);
    border-radius: 0.44rem;
    display: flex;
    align-items: center;
    // color: ;
    font-size: 0.24rem;
    color: #fff;

    .sub {
      margin-top: 0.1rem;
    }

    img {
      width: 0.4rem;
      height: 0.36rem;
      margin-left: 0.25rem;
      margin-right: 0.3rem;
    }
  }
}

.menu {
  padding: 0 0.3rem;
  background-color: #fff;

  li {
    padding: 0.4rem 0;
    border-bottom: 1px solid #eee;

    &:last-of-type {
      border: none;
    }

    & > p {
      font-size: 0.32rem;
    }

    .item {
      display: flex;
      height: 1.2rem;

      div {
        width: 1.64rem;
        height: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;

        img {
          width: 0.4rem;
        }

        p {
          margin-top: 0.2rem;
          font-size: 0.24rem;
          color: #666;
        }
      }
    }
  }
}

.van-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100% - 50px);

  img {
    width: 89%;
    display: block;
  }
}
</style>
