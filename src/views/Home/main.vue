<template>
  <div id="main">
    <router-view class="aa" />
    <van-tabbar route>
      <van-tabbar-item icon="wap-home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="notes-o" to="/course">课程</van-tabbar-item>
      <van-tabbar-item icon="todo-list-o" to="/record">约课记录</van-tabbar-item>
      <van-tabbar-item icon="records" to="/practice">练习</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped>
    #main{
        width: 100%;
        height: 100%;
        .aa{
          width: 100%;
          height: calc(100% - 1rem);
        }
    }
</style>
