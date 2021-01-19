<template>
  <div class="attention">
    <Header title="我的关注" back></Header>
    <div class="cont">
      <ul>
        <li v-for="item in list" :key="item.collect_id">
          <div class="lef">
            <img :src="item.avatar" />
          </div>
          <div class="con">
            <h3>
              <p>{{ item.teacher_name }}</p>
              <span>已关注</span>
            </h3>
            <p>{{ item.introduction }}</p>
          </div>
          <div class="rig">
            <button
              @click="
                $router.push({
                  path: '/Details',
                  query: {
                    id: item.teacher_id,
                  },
                })
              "
            >
              查看详情
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header"
import { getCollect } from "@/utils/api"
export default {
  components: {
    Header,
  },
  data() {
    return {
      list: [],
    }
  },
  created() {
    getCollect({
      page: 1,
      limit: 3,
      type: 2,
    }).then((res) => {
      // console.log(res.data.data.list)
      this.list = res.data.data.list
      console.log(this.list)
    })
  },
}
</script>
<style lang="scss" scoped>
.attention {
  width: 100%;
  height: 100%;
  .cont {
    width: 100%;
    height: calc(100% - 09rem);
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      li {
        width: 95%;
        height: 1.6rem;
        border: 0.01rem solid #999;
        border-radius: 0.05rem;
        margin: 0.2rem auto 0;
        display: flex;
        .lef {
          flex: 3;
          text-align: center;
          img {
            width: 60%;
            height: 60%;
            margin-top: 0.3rem;
          }
        }
        .con {
          flex: 7;
          h3 {
            margin-top: 0.3rem;
            height: 0.6rem;
            > p {
              font-weight: bold;
              font-size: 0.34rem;
              float: left;
              margin-top: 0.04rem;
            }
            span {
              float: left;
              font-size: 0.2rem;
              color: #eb6100;
              font-weight: bold;
              margin: 0.1rem 0 0 0.2rem;
            }
          }

          > p {
            font-size: 0.26rem;
            color: #888;
            margin-top: 0.1rem;
          }
        }
        .rig {
          flex: 4;
          text-align: center;
          button {
            margin-top: 0.5rem;
            width: 1.2rem;
            height: 0.5rem;
            border: none;
            border-radius: 0.04rem;
            color: white;
            background: #eb6100;
            font-size: 0.2rem;
          }
        }
      }
    }
  }
}
</style>
