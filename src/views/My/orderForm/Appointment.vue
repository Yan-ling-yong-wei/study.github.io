<template>
  <div class="appointe_container">
    <div class="title_contianer"><Header title="我的预约" back /></div>
    <div>
      <van-tabs v-model="active" title-active-color="#F9661C" line-width="0px">
        <van-tab title="待上课">
          <div class="ticer_container">
            <div class="ticer_wrapper">
              <div class="box_container">
                <div class="image_container">
                  <div class="img_contianer">
                    <img src="../../../assets/img/avatar.jpg" />
                  </div>
                  <div class="title_box_contianer">
                    <div class="title_one_container">
                      2019.05.05&nbsp;&nbsp;10:30~11:30
                    </div>
                    <div class="title_tow_contianer">
                      李想老师(25分钟)<span>预约成功</span>
                    </div>
                    <div class="title_tow_contianer">学院开课前五分钟可进入教师</div>
                  </div>
                </div>
                <div class="button_container">
                  <div class="button_wrpadder">
                    <div>
                      <img src="../../../assets/img/课前资料.png" />
                      <div>查阅资料</div>
                    </div>
                  </div>
                  <div class="button_box_container">
                    <div>
                      <img src="../../../assets/img/pc端.png" />
                      <div>请登录PC端上课哦</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="已上课">
          <div class="ticer_container">
            <div class="ticer_wrapper">
              <div class="box_container">
                <div class="image_container">
                  <div class="img_contianer">
                    <img src="../../../assets/img/avatar.jpg" />
                  </div>
                  <div class="title_box_contianer">
                    <div class="title_one_container">
                      2019.05.05&nbsp;&nbsp;10:30~11:30
                    </div>
                    <div class="title_tow_contianer">
                      李想老师(25分钟)<span>已成功</span>
                    </div>
                    <div class="title_tow_contianer">学院开课前五分钟可进入教师</div>
                  </div>
                </div>
                <div class="nav_container">
                  <div>
                    <img src="../../../assets/img/学生评论.png" />
                    <div>学生评论</div>
                  </div>
                  <div>
                    <div>
                      <img src="../../../assets/img/查看回放.png" />
                      <div>查看回放</div>
                    </div>
                  </div>
                  <div>
                    <img src="../../../assets/img/点评学生.png" />
                    <div>点评学生</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Header from "../../../components/Header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
.appointe_container {
  width: 100%;
  height: 100%;
  .title_contianer {
    width: 100%;
    height: 1rem;
    border-bottom: 1px solid #f8f8f8;
  }
  .ticer_container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .ticer_wrapper {
      width: 95%;
      height: 100%;
      .box_container {
        margin-top: 0.2rem;
        width: 100%;
        height: 3rem;
        box-shadow: 1px 4px 15px 4px #ccc;
        border-top-right-radius: 0.2rem;
        border-top-left-radius: 0.2rem;
        .image_container {
          width: 100%;
          height: 60%;
          border-bottom: 1px solid #F7F7F7;
          display: flex;
          justify-content: center;
          align-items: center;
          .img_contianer {
            width: 30%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 1.2rem;
            }
          }
          .title_box_contianer {
            width: 70%;
            height: 100%;
            font-size: 0.3rem;
            div {
              margin-top: 0.2rem;
            }
            .title_one_container {
              font-size: 0.4rem;
            }
            .title_tow_contianer {
              color: #b8b8b8;
              span {
                color: #fc8f5c;
              }
            }
          }
        }
        .button_container {
          width: 100%;
          height: 40%;
          font-size: 0.3rem;
          color: #b8b8b8;
          display: flex;
          justify-content: center;
          align-items: center;
          .button_wrpadder {
            width: 50%;
            height: 100%;
            border-right: 1px solid #F7F7F7;
            display: flex;
            justify-content: center;
            align-items: center;
            div {
              text-align: center;
              img {
                width: 0.5rem;
              }
            }
          }
          .button_box_container {
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            div {
              text-align: center;
              img {
                width: 0.5rem;
              }
            }
          }
        }
      }
    }
  }
  .nav_container {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.3rem;
    color: #afafaf;
    div {
      text-align: center;
    }
    img {
      width: 0.6rem;
      margin-bottom: 0.1rem;
    }
  }
}
</style>
