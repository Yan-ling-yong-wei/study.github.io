<template>
  <div class="info">
    <header-nav back title="个人信息" rigth/>
    <ul>
      <li>
        <span>头像</span><span><img src="@/assets/img/avatar.jpg" alt=""/></span>
      </li>
      <li><span>昵称</span><span>18538100192</span></li>
      <li><span>手机号</span><span>185****0192</span></li>
      <li><span>性别</span><span>保密</span></li>
      <li><span>出生日期</span><span>1999-02-05</span></li>
      <li><span>所在城市</span><span>北京，北京市，昌平区</span></li>
      <li><span>学科</span><span>信息技术</span></li>
      <li><span>年级</span><span>高三</span></li>
    </ul>
  </div>
</template>

<script>
import headerNav from "@/components/Header.vue"
export default {
  components: { headerNav },
}
</script>

<style lang="scss" scoped>
.info {
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
  ul {
    margin: 0.2rem 0;
    padding: 0.1rem 0.3rem;
    background-color: #fff;
    li {
      position: relative;
      height: 1.1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &::before {
        content: "";
        display: block;
        border-top: 0.03rem solid #b7b7b7;
        border-right: 0.03rem solid #b7b7b7;
        width: 0.2rem;
        height: 0.2rem;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%) rotate(45deg);
      }
      &::after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        height: 1px;
        background-color: #f5f5f5;
      }
      &:last-child::after {
        display: none;
      }
      font-size: 0.28rem;

      // span:first-child {
      // }
      span:last-child {
        margin-right: 0.5rem;
        color: #8c8c8c;
        img {
          width: 0.74rem;
          height: 0.74rem;
        }
      }
    }
  }
}
</style>
