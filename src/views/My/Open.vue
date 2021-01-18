<template>
  <div class="open">
    <Header title="开通会员" back></Header>
    <div class="top">
      <div class="lef">
        <img src="../../assets/img/lutou.png" />
      </div>
      <div class="rig">
        <h3>木木</h3>
        <p>开通会员享更多权限</p>
      </div>
    </div>
    <div class="cont">
      <ul>
        <li
          v-for="item in list"
          :key="item.id"
          @click="flag = item.id"
          :class="flag == item.id ? sty : ''"
        >
          <p>{{ item.title }}</p>
          <h4>
            ￥<i>{{ item.pic }}</i>
          </h4>
        </li>
      </ul>
    </div>
    <div class="fot">
      <h4>会员特权</h4>
      <div class="uu">
        <div class="nav">
          <h4>
            <book-one theme="filled" size="24" fill="#E8CC9B" />
          </h4>
          <p>课程全场八折</p>
        </div>
        <div class="nav">
          <h4>
            <videocamera theme="filled" size="24" fill="#E8CC9B" />
          </h4>
          <p>会员课程免费看</p>
        </div>
      </div>
      <button>立即购买</button>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";
import { BookOne, Videocamera } from "@icon-park/vue";
export default {
  components: {
    Header,
    BookOne,
    Videocamera,
  },
  data() {
    return {
      list: [
        { title: "包月", pic: "15.00", id: 1 },
        { title: "包季", pic: "45.00", id: 2 },
        { title: "包年", pic: "130.00", id: 3 },
      ],
      flag: 1,
      sty: "li1",
    };
  },
};
</script>
<style lang="scss" scoped>
.open {
  width: 100%;
  height: 100%;
  .top {
    width: 100%;
    height: 1.2rem;
    border-top: 0.01rem solid #eee;
    display: flex;
    .lef {
      flex: 2;
      text-align: center;
      img {
        width: 45%;
        margin-top: 0.1rem;
      }
    }
    .rig {
      flex: 5;
      font-size: 0.3rem;
      h3 {
        font-weight: bold;
        margin: 0.24rem 0 0.14rem;
      }
      p {
        color: #999;
      }
    }
  }
  .cont {
    width: 100%;
    height: 3.4rem;
    background: #eee;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      li {
        width: 30%;
        height: 80%;
        border-radius: 0.2rem;
        background: white;
        text-align: center;
        p {
          margin: 0.6rem 0;
          font-size: 0.36rem;
        }
        h4 {
          font-size: 0.2rem;
          color: red;
          i {
            font-size: 0.4rem;
          }
        }
      }
      .li1 {
        border: 0.01rem solid red;
        background: #fff0e6;
      }
    }
  }
  .fot {
    width: 100%;
    height: calc(100% - 5.5rem);
    position: relative;
    > h4 {
      width: 100%;
      height: 1rem;
      font-size: 0.28rem;
      font-weight: bold;
      line-height: 1rem;
      padding-left: 0.3rem;
      border-bottom: 0.01rem solid #ccc;
    }
    .uu {
      width: 100%;
      height: 4rem;
      .nav {
        width: 2.6rem;
        height: 1.6rem;
        float: left;
        text-align: center;
        h4 {
          margin: 0.2rem 0;
        }
        p {
          font-size: 0.26rem;
          color: #666;
        }
      }
    }

    button {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1rem;
      background: #eb6100;
      color: white;
      font-size: 0.3rem;
      border: none;
    }
  }
}
</style>
