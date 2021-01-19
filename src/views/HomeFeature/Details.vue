<template>
  <div class="details_container">
    <div class="images_container">
      <img src="../../assets/img/老师详情.png" class="image_one" />
      <div @click="onClickFan">＜</div>
    </div>
    <!-- 老师简介 -->
    <div class="xiangqing_contaner">
      <div>
        <div class="xiangqing_wrapper">
          <div class="ima_box_container" v-if="list.avatar"><img :src="list.avatar" /></div>
          <div class="title_box_container">
            <div class="tiqie_container">
              <div class="tiqie_wrapper">{{ list.real_name }}</div>
            </div>
            <div class="nav_container">{{ list.introduction }}</div>
          </div>
          <div class="imag_box_container">
            <p @click="guan">
              <button>{{ flag === 2 ? "关注" : "取消关注" }}</button>
              <!-- <button>取消关注</button> -->
            </p>
          </div>
        </div>
        <div class="button_container">
          <div>创造力丰富</div>
          <div>为人和善</div>
          <div>讲课方式新颖</div>
          <div>创造力丰富</div>
          <div>讲课方式新颖</div>
        </div>
      </div>
    </div>
    <div>
      <!-- 选项卡 -->
      <van-tabs v-model="active">
        <van-tab title="老师信息">
          <div class="titcatl_container">
            <div class="titcatl_wrapper">
              <div>
                <p>毕业学校</p>
                <p>综合评价</p>
                <p>授课范围</p>
                <p>擅长科目</p>
                <p>授课价格</p>
                <p>授课时长</p>
                <p>自我介绍</p>
                <p>擅长题目</p>
              </div>
              <div>
                <nav>北京大学</nav>
                <nav>北京大学</nav>
                <nav>考研英语,雅思,托福,四六级</nav>
                <nav>英语</nav>
                <nav>5学习币</nav>
                <nav>23分钟一节课</nav>
                <nav>偶像</nav>
                <nav>
                  教程作者：白苔白（软件基础应33期学员）原图作者 本次教程会教你如何利用AE制作文字动态LOGO
                </nav>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="学员评价">
          <div class="xueyuna_container">
            <div class="xueyuna_wrapper">
              <div class="xiang_container">
                <div class="image_boxliu_container">
                  <img src="../../assets/img/tu_34.jpg" alt="" />
                </div>
                <div class="image_xiang_wrapper">
                  <div class="title_container">
                    <div>AU辅助</div>
                    <div><van-rate v-model="value" color="#FBD002" /></div>
                  </div>
                  <div class="nav_liu_container">
                    <div>创造力丰富</div>
                    <div>为人和善</div>
                    <div>讲课方式新颖</div>
                  </div>
                  <div class="title_liu_wrapper">
                    很棒的课程，对于入门来说是非常好的，非常棒的，简单易懂步步连贯
                  </div>
                  <div class="title_liu_wrapper">2018-01-01&nbsp;&nbsp;18:00</div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="主讲课程">内容 3</van-tab>
      </van-tabs>
      <!-- 底部按钮 -->
      <div class="button_container">
        <button>立即约课</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant"
import { setCollect, getjie } from "@/utils/api"
export default {
  data() {
    return {
      active: 0,
      value: 4,
      flag: true,
      list: [],
    }
  },
  methods: {
    onClickFan() {
      this.$router.go(-1)
    },
    guan() {
      setCollect(this.$route.query.id).then((res) => {
        console.log(res)
        this.flag = res.data.data.flag
      })
    },
  },
  created() {
    // setCollect(this.$route.query.id).then((res) => {
    //   console.log(res.data.data.flag)
    // })
    getTeaDetails(this.$route.query.id).then((res) => {
      this.flag = res.data.data.flag
    })
  },
  created() {
    // getDetail(this.$route.query.id).then(res=>{
    //   console.log(res)
    // })
    getjie(this.$route.query.id).then((res) => {
      // console.log(res)
      this.flag = res.data.data.flag
      this.list = res.data.data.teacher
      console.log(this.flag)
    })
  },
}
</script>

<style lang="scss" scoped>
.details_container {
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  position: relative;
  .images_container {
    width: 100%;
    height: 4rem;
    position: relative;
    .image_one {
      width: 100%;
      height: 100%;
    }
    div {
      position: absolute;
      top: 9px;
      left: 14px;
      color: #fff;
      font-size: 0.5rem;
      background-color: #ff9648;
    }
  }
  .xiangqing_contaner {
    margin-top: 0.3rem;
    width: 100%;
    height: 2.3rem;
    background-color: #fff;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    div {
      width: 99%;
      height: 100%;
      .xiangqing_wrapper {
        width: 100%;
        height: 1.5rem;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        .ima_box_container {
          width: 20%;
          height: 100%;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          img {
            width: 1.1rem;
          }
        }
        .title_box_container {
          width: 65%;
          height: 100%;
          .tiqie_container {
            width: 100%;
            height: 50%;
            font-size: 0.4rem;
            color: black;
            display: inline-flex;
            justify-content: flex-start;
            align-items: center;
            .tiqie_wrapper {
              margin-top: 0.5rem;
            }
          }
          .nav_container {
            width: 100%;
            height: 50%;
            font-size: 0.3rem;
            color: #a5a5a5;
            display: inline-flex;
            justify-content: space-between;
            align-items: center;
          }
        }
        .imag_box_container {
          width: 15%;
          height: 100%;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          button {
            width: 100%;
            font-size: 0.2rem;
            border-radius: 0.1rem;
            border: none;
            background: orangered;
            padding: 0.06rem 0.2rem;
          }
        }
      }
      .button_container {
        width: 100%;
        height: 0.8rem;
        display: inline-flex;
        justify-content: space-between;
        align-items: center;
        div {
          width: 1.5rem;
          height: 0.3rem;
          border-right: 1px solid #fff;
          background-color: #f4f4f4;
          font-size: 0.09rem;
          color: #d5d5d5;
          text-align: center;
        }
      }
    }
  }
  .titcatl_container {
    width: 100%;
    height: 100%;
    // 老师信息
    .titcatl_wrapper {
      width: 100%;
      height: 100%;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      div:nth-child(1) {
        width: 30%;
        height: 100%;
        font-size: 0.3rem;
        text-align: center;
        p {
          width: 100%;
          height: 0.5rem;
          color: #aeaeae;
        }
      }
      div:nth-child(2) {
        width: 70%;
        height: 100%;
        font-size: 0.3rem;
        nav {
          width: 100%;
          height: 0.5rem;
        }
      }
    }
  }
  // 学院评价
  .xueyuna_container {
    width: 100%;
    height: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    .xueyuna_wrapper {
      width: 95%;
      height: 2.9rem;
      background-color: #fff;
      border: 1px solid red;
      .xiang_container {
        width: 100%;
        height: 100%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        .image_boxliu_container {
          width: 10%;
          height: 100%;
          display: inline-flex;
          justify-content: center;
          align-items: flex-start;
          img {
            width: 0.6rem;
          }
        }
        .title_container {
          font-size: 0.3rem;
        }
        .image_xiang_wrapper {
          width: 90%;
          height: 100%;
        }
        .nav_liu_container {
          margin-top: 0.2rem;
          width: 100%;
          display: inline-flex;
          justify-content: flex-start;
          align-items: center;
          div {
            text-align: center;
            width: 1.8rem;
            height: 0.5rem;
            line-height: 0.5rem;
            background-color: #f3f3f3;
            color: #c8c8c8;
            font-size: 0.3rem;
            margin-left: 0.1rem;
          }
        }
        .title_liu_wrapper {
          margin-top: 0.2rem;
          font-size: 0.3rem;
          color: #c8c8c8;
        }
      }
    }
  }
  .button_container {
    width: 100%;
    height: 1rem;
    color: #fff;
    font-size: 0.3rem;
    position: absolute;
    bottom: 0px;
    left: 0px;
    button {
      width: 100%;
      height: 100%;
      background-color: #fb5500;
      outline: none;
      border: 0px;
    }
  }
}
</style>
