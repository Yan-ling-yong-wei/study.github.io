<template>
  <div class="sear">
    <!-- 搜索输入框 -->
    <div class="searchBox">
      <div class="back">
        <left
          theme="two-tone"
          size=".44rem"
          :fill="['#aaa', '#fff']"
          @click.native="$router.back()"
        />
      </div>
      <div class="search">
        <search theme="two-tone" size=".28rem" :fill="['#aaa', '#fff']" />
        <input
          type="text"
          v-model="value"
          placeholder="请输入关键字"
          @keydown.enter="onEnter(value)"
        />
      </div>
      <div class="text">
        <span>取消</span>
      </div>
    </div>
    <!-- 历史搜索记录以及删除 -->
    <div class="history" v-if="!showList">
      <h3>
        <span>历史搜索</span>
        <delete
          theme="two-tone"
          size=".28rem"
          :fill="['#aaa', '#fff']"
          @click.native="history = []"
        />
      </h3>
      <div class="list">
        <div v-for="(item, index) in history" :key="index">
          {{ item }}
        </div>
      </div>
    </div>
    <!-- 清空历史记录 -->
    <div class="btn" @click="hitsory = []" v-if="!showList">
      清空历史记录
    </div>
    <!-- 搜索后的页面 -->
    <div class="dataList" v-if="showList">
      <div class="page">
        <div
          class="dv"
          v-for="item in list"
          :key="item.id"
          @click="go(item.id)"
        >
          <div class="left">
            <img :src="item.cover_img" alt="" />
          </div>
          <div class="right">
            <p>{{ item.title }}</p>
            <p>
              <span>{{ item.sales_num }}人已报名</span>
              <span>免费</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <ul v-if="reslist">
      <li
        v-for="(item, index) in reslist"
        :key="index"
        @click="onEnter(item.title)"
      >
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>
<script>
import { Left, Search, Delete } from "@icon-park/vue";
import { getSearch, courseBasis } from "@/utils/api";
export default {
  components: {
    Left,
    Search,
    Delete,
  },
  data() {
    return {
      value: "",
      list: [], //搜索后的数据
      history: JSON.parse(localStorage.getItem("searchList")) || [], //历史记录
      listData: [], //获取的全部数据
      showList: false,
      reslist: [], //关键词
    };
  },
  methods: {
    // 按下搜索事件
    onEnter(val) {
      this.reslist = [];
      this.showList = true;
      getSearch({
        limit: 6,
        page: 1,
        course_type: 0,
        keyWords: val,
      }).then((res) => {
        this.list = res.data.data.list;
      });
      if (this.history.length >= 5) this.history.pop();
      this.history.unshift(val);
    },
    go(id) {
      this.$router.push({ path: "/courDetail", query: { id } });
    },
  },
  watch: {
    value(val) {
      if (val == "") {
        this.reslist = [];
        this.list=[];
        this.showList=false
      } else {
        this.reslist = this.listData.filter((item) => {
          return item.title.includes(val);
        });
      }   
    },
    history() {
      localStorage.setItem("searchList", JSON.stringify(this.history));
    },
  },
  mounted() {
    courseBasis().then((res) => {
      // console.log(res.data.data.list)
      this.listData = res.data.data.list;
    });
  },
};
</script>
<style lang="scss" scoped>
.sear {
  width: 100%;
  height: 100%;
  position: relative;
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
  .page {
    width: 100%;
    height: 100%;
    overflow: scroll;
    display: flex;
    padding: 0.3rem;
    flex-direction: column;
    .dv {
      padding: 0.2rem;
      background-color: #fff;
      border-radius: 0.2rem;
      margin-bottom: 0.2rem;
      display: flex;
      .left {
        margin-right: 0.2rem;
        img {
          width: 2rem;
          height: 1.2rem;
          border-radius: 0.1rem;
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-content: space-between;
        p:first-child {
          font-size: 0.28rem;
        }
        p:last-child {
          font-size: 0.24rem;
          display: flex;
          justify-content: space-between;
          color: rgba(0, 0, 0, 0.45);
          span:last-child {
            color: #44a426;
            font-size: 0.28rem;
          }
        }
      }
    }
  }
}
ul {
  width: 100%;
  position: absolute;
  top: 1rem;
  background: white;
  li {
    width: 100%;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.36rem;
    padding: 0 0 0 0.8rem;
    border-bottom: 0.01rem solid #ccc;
  }
}
</style>
