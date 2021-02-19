<template>
  <div class="info">
    <header-nav back title="个人信息" rigth />
    <ul>
      <li @click="avatarShow = true">
        <span>头像</span><span><img :src="info.avatar" alt=""/></span>
      </li>
      <li
        @click="
          $router.push({ path: '/Personal', query: { name: info.nickname } })
        "
      >
        <span>昵称</span><span>{{ info.nickname }}</span>
      </li>
      <li>
        <span>手机号</span><span>{{ info.mobile }}</span>
      </li>
      <li @click="$router.push({ path: '/Gender', query: { sex: info.sex } })">
        <span>性别</span
        ><span>{{
          info.sex === 0 ? "男" : info.sex === 1 ? "女" : "保密"
        }}</span>
      </li>
      <li @click="birthShow = true">
        <span>出生日期</span><span>{{ info.birthday }}</span>
      </li>
      <li @click="cityShow = true">
        <span>所在城市</span
        ><span>{{
          info.province_name +
            "," +
            info.city_name +
            "," +
            info.district_name
        }}</span>
      </li>
      <li><span>学科</span><span>信息技术</span></li>
      <li><span>年级</span><span>高三</span></li>
    </ul>
    <!-- <van-action-sheet v-model="avatarShow" :actions="[{ name: '拍照' }, { name: '从手机相册选择' }]" cancel-text="取消" close-on-click-action /> -->
    <!-- //头像上传 -->
    <van-popup v-model="avatarShow" position="bottom" class="avatarPopup">
      <div class="van-hairline--bottom">拍照</div>
      <van-uploader class="van-hairline--bottom" :after-read="afterRead"
        >从手机相册选择</van-uploader
      >
      <div @click="avatarShow = false">取消</div>
    </van-popup>
    <!-- 生日选择 -->
    <van-popup v-model="birthShow" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        :min-date="minDate"
        :max-date="maxDate"
        @cancel="birthShow = false"
        @confirm="changeDate"
      />
    </van-popup>
    <!-- 城市选择 -->
    <van-popup v-model="cityShow" position="bottom">
      <van-area
        :area-list="areaList"
        
        position="bottom"
        @cancel="cityShow = false"
        @confirm="cityChange"
        @change="changItem"
      />
    </van-popup>
  </div>
</template>
<script>
import { Toast } from "vant";
import headerNav from "@/components/Header.vue";
import { userInfo, setInfo, uploaderImg, setSJ } from "@/utils/api";
// import area from "@/utils/area";
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
      areaList: {   //三级联动数据
        province_list: {},   //省级
        city_list: {},   //市级
        county_list: {},   //县级
      },
      // areaList: area,
      cityShow: false,

    };
  },

  created() {
    this.fn();
  },
  methods: {
    // 上传文件
    afterRead(file) {
      // console.log(file)
      let formData = new FormData();
      formData.append("file", file.file);
      uploaderImg(formData).then((res) => {
        // console.log(res)
        if (res.data.code === 200) {
          setInfo({ avatar: res.data.data.path }).then((result) => {
            if (result.data.code === 200) {
              this.avatarShow = false;
              Toast("更新成功！");
              setTimeout(() => {
                this.getInfo();
              }, 300);
            }
          });
        }
      });
    },

    // // 获取三级联动json数据
    // async getInfo() {
    //   let { data } = await userInfo();
    //   console.log(data);
    //   this.info = data.data;
    // //   this.currentDate = new Date(this.info.birthday);
    // },

    // 当时间发生改变
    changeDate(val) {
      setInfo({ birthday: this.date(val) }).then((res) => {
        this.birthShow = false;
        if (res.data.code === 200) {
          Toast("更新成功！");
          setTimeout(() => {
            this.getInfo();
          }, 300);
        }
      });
    },

    //点击确定更换城市按钮
    cityChange(val) {
      console.log(val);
      setInfo({
        city_id: val[1].code,       //市
        district_id: val[2].code,   //县
        province_id: val[0].code,   //省
      }).then((res) => {
        this.cityShow = false;
        if (res.data.code === 200) {
          Toast("更新成功！");
          // setTimeout(() => {
          //   this.getInfo();
          // }, 300);
        }
      });
    },

    //时间
    date(val) {
      if (val !== null) {
        // console.log(val.getFullYear(), val.getMonth() + 1, val.getDate())
        return (
          val.getFullYear() + "-" + (val.getMonth() + 1) + "-" + val.getDate()
        );
      }
    },

    //三级联动初始化
    async fn(){
      let { data } = await userInfo();
      console.log(data);
      this.info = data.data;
      this.currentDate = new Date(this.info.birthday);

      // 省
      let { data:res } = await setSJ('0')
      let sheng={}
      res.data.forEach(item => {
        sheng[item.id]=item.area_name
      });
      this.areaList.province_list=sheng

      //市
      let { data:res1 } = await setSJ( res.data[0].id)
      let shi={}
      res1.data.forEach(item=>{
        shi[item.id]=item.area_name
      })
      this.areaList.city_list=shi

      //县
      let { data:res2 } = await setSJ( res1.data[0].id)
      let qu={}
      res2.data.forEach(item=>{
        qu[item.id]=item.area_name
      })
      this.areaList.county_list=qu
    },

    //当地址发生改变
    async changItem(picker,data,index){
      // console.log(data,index);
      switch (index) {
        case 0:
          // console.log(data[0].code);
          // 市
          let { data:res1 } = await setSJ(data[0].code)
          // console.log(res1);
          let shi={}
          res1.data.forEach(item=>{
            shi[item.id]=item.area_name
          })
          this.areaList.city_list=shi

          // 县
          let { data:res2 } = await setSJ( res1.data[0].id)
          let qu={}
          res2.data.forEach(item=>{
            qu[item.id]=item.area_name
          })
          this.areaList.county_list=qu
        break;

        case 1:
          // console.log(data[1].code);
          let { data:res3 } = await setSJ( data[1].code)
          let xian={}
          res3.data.forEach(item=>{
            xian[item.id]=item.area_name
          })
          this.areaList.county_list=xian
        break;
      }
    }

  },
};
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
      &:nth-child(3)::before {
        display: none;
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
          border-radius: 50%;
        }
      }
    }
  }
}
.avatarPopup {
  padding: 0 0.4rem;
  div {
    // text-align: center;
    display: flex;
    justify-content: center;
    padding: 0.4rem 0;
    font-size: 0.32rem;
  }
}
</style>
