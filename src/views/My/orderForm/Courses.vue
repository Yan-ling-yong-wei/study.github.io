<template>
  <div class="order_container">
    <div><Header title="我的订单" back /></div>
    <div class="box_container">
      <div class="orderform_container">
        <div class="time_contianer">
          <div class="dai_container">待支付</div>
          <div class="daojishi_container">
            您还有<van-count-down :time="time" format="DD 天 HH 时 mm 分 ss 秒" />
            时间来付款,订单超时将自动取消
          </div>
        </div>
      </div>
      <div class="liu_box_container">
        <div class="image_cobntainer"><img src="../../../assets/img/tu_30.jpg" /></div>
        <div class="title_container">
          <div class="title_wrapper">钢铁事怎样炼成的钢铁事怎样炼成的钢铁事怎样炼成的</div>
          <div class="color_box_container">￥119.00</div>
        </div>
      </div>
      <div class="dingdan_container">
        <div class="diandan_wrapper">
          <div>订单编号：<span>11012018055131002131231</span></div>
          <div>下单时间：<span>2018-02-14&nbsp;&nbsp;&nbsp;13:14:52</span></div>
          <div>支付方式：<span>在线支付</span></div>
        </div>
      </div>
      <div class="price_container">
        <div class="price_wrapper">
          <div>
            <nav>商品原价:</nav>
            <span>￥119.00</span>
          </div>
          <div>
            <nav>会员:</nav>
            <span>￥20.00</span>
          </div>
          <div>
            <nav>优惠券:</nav>
            <span>￥20.00</span>
          </div>
          <div>
            <nav>实付金额:</nav>
            <span class="price_box_container">￥79.00</span>
          </div>
        </div>
      </div>
      <div class="button_box_container">
        <div class="button_box_wrapper">
          <button class="button_one">立即支付</button>
          <button class="button_tow">取消订单</button>
        </div>
      </div>
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
      time: "6000000",
    };
  },
};
</script>

<style lang="scss" scoped>
.order_container {
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  .box_container {
    width: 100%;
    height: 100%;
    background-color: #fff;
    .orderform_container {
      margin-top: 0.2rem;
      width: 100%;
      height: 1rem;
      background-color: #fff;
      .time_contianer {
        width: 100%;
        height: 1rem;
        color: red;
        font-size: 0.2rem;
        border-bottom: 1px solid #f8f8f8;
        .daojishi_container {
          width: 100%;
          display: inline-flex;
          justify-content: center;
          align-items: center;
        }
        .dai_container {
          width: 100%;
          height: 0.3rem;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin-left: 0.2rem;
        }
      }
    }
    .liu_box_container {
      width: 100%;
      height: 2rem;
      border-bottom: 1px solid #f8f8f8;
      display: flex;
      justify-content: center;
      align-items: center;
      .image_cobntainer {
        width: 20%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 1.2rem;
          height: 1.2rem;
        }
      }
      .title_container {
        width: 80%;
        height: 100%;
        font-size: 0.4rem;
        div {
          margin-top: 0.3rem;
        }
        .color_box_container {
          color: #ccc;
          font-size: 0.3rem;
        }
        .title_wrapper
        {
          font-size: 0.35rem;
          padding-right: 0.3rem;
        }
      }
    }
    .dingdan_container {
      width: 100%;
      height: 2rem;
      border: 1px solid #f8f8f8;
      display: flex;
      justify-content: center;
      align-items: center;
      .diandan_wrapper {
        width: 90%;
        height: 100%;
        font-size: 0.3rem;
        color: #c0c0c0;
        div {
          margin-top: 0.2rem;
        }
      }
    }
    .price_container {
      width: 100%;
      height: 3rem;
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      .price_wrapper {
        width: 50%;
        height: 100%;
        div {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 0.3rem;
          font-size: 0.3rem;
          nav {
            color: #b9b9b9;
          }
          .price_box_container {
            color: red;
          }
        }
      }
    }
    .button_box_container {
      width: 100%;
      height: 3rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .button_box_wrapper {
        width: 50%;
        height: 100%;
        .button_one {
          width: 90%;
          height: 1rem;
          font-size: 0.4rem;
          color: #ea9933;
          border: 1px solid #ea9933;
          background-color: #fff;
          outline: none;
          border-radius: 0.1rem;
          margin-top: 0.3rem;
        }
        .button_tow {
          width: 90%;
          height: 0.8rem;
          border: 1px solid #b6b6b6;
          color: #b6b6b6;
          font-size: 0.4rem;
          outline: none;
          background-color: #fff;
          border-radius: 0.1rem;
          margin-top: 0.3rem;
        }
      }
    }
  }
}
</style>
