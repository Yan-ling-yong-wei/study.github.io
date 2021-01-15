<template>
  <div class="sear">
    <div class="searchBox">
      <div class="back">
        <left theme="two-tone" size=".44rem" :fill="['#aaa', '#fff']" @click.native="$router.back()" />
      </div>
      <div class="search">
        <search theme="two-tone" size=".28rem" :fill="['#aaa', '#fff']" />
        <input type="text" :value="value" placeholder="请输入关键字" @input="onInput" @keydown.enter="onEnter" />
      </div>
      <div class="text">
        <span>取消</span>
      </div>
    </div>
    <div class="history" v-if="!showList">
      <h3>
        <span>历史搜索</span>
        <delete theme="two-tone" size=".28rem" :fill="['#aaa', '#fff']" @click.native="history = []" />
      </h3>
      <div class="list">
        <div v-for="(item, index) in history" :key="index">
          {{ item }}
        </div>
      </div>
    </div>
    <div class="btn" @click="hitsory = []" v-if="!showList">
      清空历史记录
    </div>
    <div class="dataList" v-if="showList">
      <div v-for="(item, index) in getList" :key="index" @click="clickList(item)">
        {{ item }}
      </div>
    </div>
  </div>
</template>
<script>
import { Left, Search, Delete } from "@icon-park/vue"
export default {
  components: {
    Left,
    Search,
    Delete,
  },
  computed: {
    getList() {
      return this.listData.filter((item) => item.includes(this.value))
    },
  },
  data() {
    return {
      value: "",
      history: JSON.parse(localStorage.getItem("searchList")) || [],
      listData: ["111", "222", "333", "123", "233", "342"],
      showList: false,
    }
  },
  methods: {
    onInput(e) {
      this.value = e.target.value
      this.showList = !(this.value === "")
    },
    onEnter() {
      if (this.value === "") return
      if (this.history.length >= 5) this.history.pop()
      this.history.unshift(this.value)
      this.value = ""
      this.$router.push("")
    },
    clickList(item) {
      this.value = item
      this.showList = false
      this.onEnter()
    },
  },
  watch: {
    history() {
      localStorage.setItem("searchList", JSON.stringify(this.history))
    },
  },
}
</script>
<style lang="scss" scoped>
.sear {
  width: 100%;
  height: 100%;
  .searchBox {
    width: 100%;
    height: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #eaeae9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem 0.1rem;
    .search {
      flex-grow: 1;
      margin: 0 5px;
      display: flex;
      align-items: center;
      border-radius: 0.4rem;
      background-color: #f7f7f7;
      height: 100%;
      padding: 0 0.2rem;

      input {
        margin-left: 0.1rem;
        flex-grow: 1;
        border: 0;
        outline: none;
        background-color: transparent;
        font-size: 0.28rem;
      }
    }
    .text {
      font-size: 0.28rem;
      color: #d0d0d0;
      margin: 0 0.2rem;
    }
  }
}
.history {
  padding: 0 0.2rem;
  h3 {
    font-size: 0.28rem;
    margin: 0.3rem 0 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .list {
    font-size: 0.26rem;
    display: flex;
    flex-wrap: wrap;
    div {
      padding: 0.1rem 0.16rem;
      background-color: #f7f7f7;
      border-radius: 0.2rem;
      margin-bottom: 0.1rem;
      margin-right: 0.2rem;
    }
  }
}
.btn {
  width: 100%;
  height: 0.8rem;
  background-color: #bfbfbf;
  color: #fff;
  font-size: 0.32rem;
  text-align: center;
  line-height: 0.8rem;
  position: fixed;
  bottom: 0;
}
.dataList {
  padding: 0.2rem;
  font-size: 0.32rem;
  div {
    line-height: 1rem;
    border-bottom: 1px solid #eeeeee;
  }
}
</style>
