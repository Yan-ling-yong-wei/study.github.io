<template>
  <div class="home">
    <div class="home_one_container">
      <div class="home_swiper_container">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item, index) in banner" :key="index"> <img :src="item.banner_img"/></van-swipe-item>
        </van-swipe>
        <div class="nav_container">
          <div @click="$router.push('/course')">
            <nav>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA8CAYAAADSfGxZAAAFZUlEQVRoQ+1bW2xUVRRd68xMeZPaFESeBkuLhkekk6IfxDEEMQqUmWGMwcQPE5FEo9GYGONP/TIh8UH88BsNwTDObR0CGsUImGDAGVEQIn1JIBYqBSwtr5m5Z5tbaDLYoXPb28d8nPs1ybl7n7PXXWedk8leRN6zfv3pSr/f9wypN4uwlhAheJKQvVnNfblc2fkLFy72ptPBbH5cqf0OhcQ/ZcqJaWVl02dRsmtJrtPQywmQwG+AfJG1M98mk0s7+9dO50dDg6jjx5vrofE2qFYC4htYnPQC6gREpwl1BD5/KpF48DRAKQ0ghNFoexVsvVKAWlCCAJYDmDZwfbQBSYPqo2XLHoo3NFD3AbEp3FKvIZ8CmFesKBE4hfcQuASgTSi7/f7pTfH4AxeLxY7G+MaNV8qV6opSEBVIjQgqSU4FRBWbTwSdCmproqmqibG1Jyv05EBCgFCxwHuNk8hCuF+RO5Dhz7dU9koyWXMNoB5uzsJxomKxi5Ntu7tcCR63oV8g1NOATPAwz8GcrTczGm2Lira/BOD3kOxOaN82+UegjwE4qrRKZcVOJ5OLO7zk3rCh/X6lsisUVJ1QgnSoD84CpI/RHp8ciJcZibRaEB32mGxAuAhyJLodYEB1REQn/P7Md/H4koybuUKhH/0VFfNDgH4eIo8BmCki95EcgQ/2/xWovYyEW/4GZLabxXl/hx0UvHnmXHfjvU6eWEx8OtuyUYhtABZ6n9NNBl5gJNx8tbCyukkwrHe6QLXFsqoaC0WHw+1riNxOADOGlX14Qb0OI256FJuhT00esqxFTxQGonk/gdVDT+op4ta4AEHiWsKqnlpo6ZFwcw+AgmOeSh00mOMFBHXCWlTg0gZEIy22SPE7wMiCYoDoP/YNI24jYRhhGHG3xhhGGEYYRhQ8d83WMFvDbA2zNQa7lBuNMBphNMJohNEIF39dGLE0YmnE0oilEUsjli4QMGJpxNKIpRFLF1JhbpZGLI1YGrE0YmnE0gUC+WI55j1UIEuuUaTHaSY7BeBh9+h5f7MEgWhmJNKyGyIx7+W5zzAYEJFws9OtOxKNpO4XBCQZibRththOO9+YPSXHCGIrY+va5tsB+zCAOWOFRCkBIYIOZfMphkJ/Tawoz34G4kUARTvaRwKsUgHCcRoQ2JHT+vXbNoX69lVa5XaNFStKBQgAl0GELav6UB8QfQ3g5XNfA+XjkfjixXKUChCK8l7X5Y5tBw48mbtLnaPh5u0CbAEwsVgxXsZL4NS4CeJzy6p+pb+Ou4CIxQ5PyuUq3yL4BiCj1hQ+zoz4F4IPc1pvTyYXO+3Ofc+A89oBQzIzH9VKPgBk1Wic6eMEhGOqOQLiHZ9v0i/x+Lwb+ay+58XF8U3YduuzFHlVgKUQTAc5yY1Xqti2GQsg7pwI10H2CORPQH9y9mzNvnSaBR2Krm5wkcipBSKBOooESdQKuAKQ8uGyZRSBcL56twC/UyRFqKOiJGVZ1e1FP06xF/LHa2tTgTlzJlQEAhNna40QgSggdQACQ8kDoNdqrC5gQwSGaVPIkvhVNCz6yr6/caP3fGfnzUtD8ae6YsRgRcZirVW2Lc9BY5NAHLvkNBKDue4cw+QPVlP1mkJ5I+HT3wBcOzjbJCPCq1ToANhIqp2JxMJWLx5Uz0D0F+O4b2eUn1liq1wQIkEI60A8MsAdRLQqW1766uuanwoBEY22BSF6l4hU5Y87ZjkQfxBMQUuKwqNqwq2Tbs1yxRg7YkDkT+ScPJnMzMoyxQU29DpA6gHMFeCYz+d7v6vr7EHnElN4caLC4ZbVhLwL0HH1ngO4F0BSa7ZrPfnSnj2zrxcrbKjj/wFPducAYoibwgAAAABJRU5ErkJggg=="
              />
            </nav>
            <nav>特色课</nav>
          </div>
          <div @click="onClickTutorship">
            <nav>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA8CAYAAADRy2JxAAAEDElEQVRoQ+2aTWhUVxTH/+fNRyYmE78WirTQFgwiXSjFjWDRlR+k0CIOlJiaVk1VNGrGmBZaOy24EXSmlBqk2inUyaRZKM3MFFxoNt1VQXEhiogSSKwL48ckMTNz7yk3VQntTN7Me2HezJv3tveee+7vnnP+9773LgFAaGjIPZ4eeVsCX4KwCZKXgEhTbRX3EP4mxiXp1b46tfHjYTPzIwX+/PloO4i/AfCGmcHKZcsAa6ALYnKiIxzY9dioX+pOxJZL4Eq1gM8AfeRyy/dPbG67bRg+mIxFwWg3OoBldkTMLFaf+qDthtE5UDDRNwrwUqMDWGnHkKvMwQ/GBAiVKW46K2sePhFjK6NnxrcDb67mncibyT7LbJ20d9LeWPJR0KZq352KLmX2vguX5n+9NDmAmB7kXqTvh7ftHLMlfFeqv5lYXARjZZ6cEAD+AmG/LeGDidhBAJFCxaBejEAYtCV8VzL2NTG+m1UJCE9rFx6AA29so7DeqtAhp6i0dyJvw33eibye2jtp76S99cptZAaO2ud5pXUEzxG82YvJOd4aEZtKsHEEr0YFb0oKXhP+cPvN/2ZhLaj9XUHYGGlpvVcz8OoTFAETID7pn/AeDwUCmfLAT/8Wxp9EuE7M2XKLHhMxMacl+NaLSW/qdCCQzjeHuU97IgbzOZGRx0T92OOp4TpZbvhlzc0cWr9B/VWe9efqnMIzIEAUnwR39ra0jpUbulR/cwf/b8TPC4/siWxqGy11Ilb0nxt4VWPA2Vx26mjko0+fWAFixKdpeJXqBPSJXKazmsCnr9WNj/wiGa16C5f/bK+T6ocuRhdoLs8KaFSv56Cc7STIzRqvJaJOMC/S8/1/eAUO/klkMz35In7093N+ofl6AV4PaC49B2VtZ3U9D00gqgOritV7q0vGnoAxX3UrJtW/+CO+OivkNfX9T2/wSm+nI6l4J0vZw0ATgfpFRhyLbC2s6l2D51uIKFHpYMXMj7YNDHjfdE++xW6PJ+eWwz9s2f5sNkNbwRezQjP7dCV/20Ccu2yLtC8V/lAy9o6LoWp+Qam2lda/ZNHqSJyZ59caf4ZEoNqjXzK8it7h5K/rNNbOMrCcqlj1DcGrPfTwYP97mov3QvJmAEuq8f6uMfiXxbtv4MdGX8PiZaRhviayPstqmqlegrYQcIBR/CVqU/CWwRZwfCQR382QYQDzitEjW8F3XD3jaRpp3AtCiIGFesGxFbyCDQ1FfemJuh2QfFqvBGwH/yrawVTfLkiEAW4oVAK2hVcl4H/o30PM3xYqAdvCqwxoH4r6Fo97PyFGb74SsDX8qxLoTsY/E1J+D0LDjEOZrAn46V1gtPFzxvSV1Je7AN2pCfjXJZCu3wqSx8H8yEXo+Qf3I4hni2PDwwAAAABJRU5ErkJggg=="
              />
            </nav>
            <nav>一对一辅导</nav>
          </div>
          <div @click="onClickCalendar">
            <nav>
              <img
                src="data:image/png;base64,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"
              />
            </nav>
            <nav>学习日历</nav>
          </div>
        </div>
      </div>
      <!-- 列表渲染 -->
      <div v-for="item in recommend" :key="item.channel_info.id" class="item">
        <div v-if="item.channel_info.type === 3" class="one">
          <h3>
            <span>{{ item.channel_info.name }}</span
            ><span class="more">更多<right size=".32rem"/></span>
          </h3>
          <div class="content" v-for="el in item.list" :key="el.teacher_id">
            <div class="left">
              <img :src="el.teacher_avatar" alt="" />
            </div>
            <div class="right">
              <p>{{ el.teacher_name }}</p>
              <p class="van-ellipsis">{{ el.introduction }}</p>
            </div>
          </div>
        </div>
        <div v-if="item.channel_info.type === 6" class="two">
          <h3>
            <span>{{ item.channel_info.name }}</span
            ><span class="more">更多<right size=".32rem"/></span>
          </h3>
          <div class="content" v-for="el in item.list" :key="el.id">
            <div class="left">
              <img :src="el.thumb_img" alt="" />
            </div>
            <div class="right">
              <p>{{ el.title }}</p>
              <p class="van-ellipsis">{{ el.description }}</p>
              <div>
                <p>
                  <preview-open theme="two-tone" size=".24rem" :fill="['#aaa', '#fff']" />
                  <span>{{ el.click_rate }}</span>
                </p>
                <p>
                  <!-- <time theme="two-tone" size=".24rem" :fill="['#aaa', '#fff']" /> -->
                  <history theme="two-tone" size=".24rem" :fill="['#aaa', '#fff']" />
                  <span>{{ el.created_at | timeFilter }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 列表渲染 -->
    </div>
  </div>
</template>
<script>
import { Right, PreviewOpen, Time, History } from "@icon-park/vue"
import { getBanner, recommend } from "@/utils/api"
import axios from "axios"
export default {
  data() {
    return {
      banner: [],
      recommend: [],
    }
  },
  components: {
    Right,
    PreviewOpen,
    Time,
    History,
  },
  filters: {
    timeFilter(data) {
      return new Date(data * 1000).toLocaleString()
    },
  },
  methods: {
    onClickFeature() {
      this.$router.push("/Feature")
    },
    onClickTutorship() {
      this.$router.push("/Tutorship")
    },
    onClickCalendar() {
      this.$router.push("/Calendar")
    },
    onClickFamous() {
      this.$router.push("/Details")
    },
    onClickDetails() {
      this.$router.push("/Details")
    },
    onClickJing() {
      this.$router.push("/Details")
    },
  },
  created() {
    getBanner().then((res) => {
      this.banner = res.data.data
    })
    recommend().then((res) => {
      if (res.data.code === 200) {
        this.recommend = res.data.data
        // this.recommend.splice(1, 1)
      }
    })
  },
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #f0f2f5;
  .home_one_container {
    width: 100%;
    height: 100%;
    overflow: scroll;
    .home_swiper_container {
      height: 4rem;
      width: 100%;
      margin-bottom: 1.2rem;
      box-sizing: content-box;
      position: relative;
      .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 0.2rem;
        line-height: 0.1rem;
        text-align: center;
        background-color: #39a9ed;
        img {
          width: 100%;
          height: 4rem;
        }
      }
      .nav_container {
        width: 100%;
        height: 2rem;
        position: absolute;
        top: 3.2rem;
        left: 0rem;
        display: inline-flex;
        justify-content: space-around;
        align-items: center;
        div {
          width: 28%;
          height: 100%;
          font-size: 0.2rem;
          font-weight: 500;
          text-align: center;
          background-color: #fff;
          border-radius: 0.2rem;
          img {
            margin-top: 0.3rem;
            width: 0.5rem;
          }
          nav {
            margin-top: 0.2rem;
            color: #8c8c8c;
          }
        }
      }
    }

    // 列表渲染
    .item {
      padding: 0.4rem 0.2rem;
      h3 {
        font-size: 0.32rem;
        padding-left: 0.2rem;
        border-left: 4px solid red;
        display: flex;
        justify-content: space-between;
        .more {
          display: flex;
          align-items: center;
          span {
            display: flex;
          }
        }
      }
      .one {
        // padding: 0.4rem;
        .content {
          padding: 0.3rem 0.2rem;
          background-color: #fff;
          border-radius: 0.2rem;
          display: flex;
          margin-top: 0.4rem;
          font-size: 0.28rem;
          .left {
            margin-right: 0.2rem;
            img {
              width: 0.8rem;
              height: 0.8rem;
              border-radius: 50%;
            }
          }
          .right {
            // height: 0.8rem;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            p:last-child {
              width: 5rem;
              color: #b7b7b7;
            }
          }
        }
      }
      .two {
        .content {
          padding: 0.2rem;
          background-color: #fff;
          border-radius: 0.2rem;
          display: flex;
          margin-top: 0.4rem;
          font-size: 0.28rem;
          .left {
            margin-right: 0.2rem;
            img {
              width: 2rem;
              height: 1.3rem;
              border-radius: 0.1rem;
            }
          }
          .right {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            flex-grow: 1;
            font-size: 0.24rem;
            > p {
              width: 4rem;
              overflow: hidden;
              &:last-of-type {
                color: #b7b7b7;
              }
            }
            div {
              display: flex;
              justify-content: space-between;
              align-items: center;
              color: #b7b7b7;
              p {
                display: flex;
                align-items: center;
              }
              .i-icon {
                margin-right: 0.1rem;
                display: inline-flex;
              }
            }
          }
        }
      }
    }
  }
}
</style>
