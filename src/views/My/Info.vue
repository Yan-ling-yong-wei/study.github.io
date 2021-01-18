<template>
  <div class="info">
    <header-nav back title="个人信息" rigth />
    <ul>
      <li @click="avatarShow = true">
        <span>头像</span><span><img :src="info.avatar" alt=""/></span>
      </li>
      <li>
        <span>昵称</span><span>{{ info.nickname }}</span>
      </li>
      <li>
        <span>手机号</span><span>{{ info.mobile }}</span>
      </li>
      <li>
        <span>性别</span><span>{{ info.sex === 0 ? "男" : info.sex === 1 ? "女" : "保密" }}</span>
      </li>
      <li @click="birthShow = true">
        <span>出生日期</span><span>{{ date(currentDate) }}</span>
      </li>
      <li @click="cityShow = true">
        <span>所在城市</span><span>{{ info.province_name + "," + info.city_name + "," + info.district_name }}</span>
      </li>
      <li><span>学科</span><span>信息技术</span></li>
      <li><span>年级</span><span>高三</span></li>
    </ul>
    <van-action-sheet v-model="avatarShow" :actions="[{ name: '拍照' }, { name: '从手机相册选择' }]" cancel-text="取消" close-on-click-action />

    <van-popup v-model="birthShow" position="bottom">
      <van-datetime-picker v-model="currentDate" type="date" :min-date="minDate" :max-date="maxDate" @cancel="birthShow = false" @confirm="changeDate" />
    </van-popup>

    <van-popup v-model="cityShow" position="bottom">
      <van-area :area-list="areaList" :value="info.district_id + ''" position="bottom" @cancel="cityShow = false" @confirm="cityChange" />
    </van-popup>
  </div>
</template>

<script>
import { Toast } from "vant"
import headerNav from "@/components/Header.vue"
import { userInfo, setInfo } from "@/utils/api"
import area from "@/utils/area"
// console.log(area)
export default {
  components: { headerNav },
  data() {
    return {
      avatarShow: false,
      birthShow: false,
      minDate: new Date(1990, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: null,
      info: [],
      areaList: area,
      cityShow: false,
    }
  },

  created() {
    this.getInfo()
  },
  methods: {
    async getInfo() {
      let { data } = await userInfo()
      this.info = data.data
      this.currentDate = new Date(this.info.birthday)
    },
    changeDate(val) {
      setInfo({ birthday: this.date(val) }).then((res) => {
        this.birthShow = false

        if (res.data.code === 200) {
          // Toast.success("数据更新成功！")
          this.getInfo()
        }
      })
    },
    cityChange(val) {
      setInfo({
        city_id: val[1].code,
        district_id: val[2].code,
        province_id: val[0].code,
      }).then((res) => {
        this.cityShow = false
        if (res.data.code === 200) {
          // Toast.success("数据更新成功！")
          this.getInfo()
        }
      })
    },
    date(val) {
      if (val !== null) {
        // console.log(val.getFullYear(), val.getMonth() + 1, val.getDate())
        return val.getFullYear() + "-" + (val.getMonth() + 1) + "-" + val.getDate()
      }
    },
  },
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
