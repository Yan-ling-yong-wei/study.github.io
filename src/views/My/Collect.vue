<template>
  <div class="collect">
    <Header back title="我的收藏"></Header>
    <div class="cont">
      <ul>
        <li v-for="item in list" :key="item.course_id">
          <div class="lef">
            <img :src="item.teachersAvatar" />
          </div>
          <div class="rig">
            <h3>{{ item.title }}</h3>
            <p>{{ item.sales_num }}人已报名</p>
            <h4>¥{{ item.price }} </h4>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getCollect, setQushou } from "../../utils/api"
import Header from "@/components/Header"
export default {
  components: {
    Header,
  },
  data() {
    return {
      list: [],
    }
  },
  methods: {
    
  },
  created() {
    getCollect({
      page: 1,
      limit: 10,
      type: 1,
    }).then((res) => {
      //   console.log(res.data)
      this.list = res.data.data.list
      console.log(this.list)
    })
  },
}
</script>
<style lang="scss" scoped>
.collect {
  width: 100%;
  height: 100%;
  .cont {
    width: 100%;
    height: calc(100% - 0.9rem);
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      li {
        width: 98%;
        margin: 0 auto;
        height: 2.2rem;
        border-top: 0.01rem solid #ccc;
        padding: 0.1rem 0.2rem;
        display: flex;
        .lef {
          flex: 2;
          text-align: center;
          img {
            width: 100%;
            margin-top: 0.16rem;
          }
        }
        .rig {
          flex: 3;
          h3 {
            font-size: 0.32rem;
            font-weight: 600;
            margin: 0.2rem 0 0 0.2rem;
          }
          p {
            font-size: 0.3rem;
            color: #888;
            margin: 0.16rem 0 0 0.2rem;
          }
          h4 {
            font-size: 0.28rem;
            margin: 0.36rem 0 0 0.2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          
          }
        }
      }
    }
  }
}
img {
  height: 1.8rem;
}
</style>
