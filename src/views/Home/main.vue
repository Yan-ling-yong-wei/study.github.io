<template>
  <div id="main">
    <router-view />
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/course">课程</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/record">约课记录</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/practice">练习</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style lang="scss" scoped>
#main {
  width: 100%;
  height: 100%;
}
</style>
